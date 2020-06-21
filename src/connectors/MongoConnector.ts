import { MongoClient, Db, InsertWriteOpResult, FindOneOptions } from 'mongodb';
import { Logger } from 'log4js';
import { getLogger, sleep } from 'utils/commonUtils';
import { MongoDocument, ErrorResponse } from 'types';

const CONNECT_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export interface FetchResult {
  docs?: MongoDocument[];
  error?: ErrorResponse;
}

export interface InsertResult {
  response?: InsertWriteOpResult<any>;
  error?: ErrorResponse;
}

export class MongoConnector {
  private static _instances: {
    [key: string]: MongoConnector;
  };
  private baseUrl: string;
  private db: Db | null;
  private dbName: string;
  private client: MongoClient | null;
  private logger: Logger;

  protected constructor(hostname: string, port: number, dbName: string) {
    this.baseUrl = `mongodb://${hostname}:${port}/`;
    this.dbName = dbName;
    this.db = null;
    this.logger = getLogger(__filename);
    this.logger.trace(`Mongo URL: ${this.baseUrl}`);
    this.logger.debug(`MongoConnector for ${dbName} is initialized`);
  }

  public async connect(): Promise<{ db?: Db; error?: ErrorResponse }> {
    if (this.db) {
      return Promise.resolve({ db: this.db });
    }

    let client: MongoClient;
    try {
      client = await MongoClient.connect(this.baseUrl, CONNECT_OPTIONS);
    } catch (e) {
      return { error: await this.returnError(`Fail to connect to DB: ${this.dbName}`, e) };
    }

    if (!client || !client.db) {
      return { error: await this.returnError(`Cannot Find Client or DB: ${this.dbName}`) };
    }

    this.client = client;
    const db = client.db(this.dbName);

    if (!db) {
      return { error: await this.returnError(`Cannot Find DB: ${this.dbName}`) };
    }

    this.db = db;
    this.logger.info(`Connected successfully to DB: ${this.dbName}`);
    return Promise.resolve({ db: this.db });
  }

  public async getAllCollections() {
    this.logger.debug(`Try to get all collection names`);

    const result = await this.execFunction(async (db: Db) => (await db.collections()).map((r) => r.collectionName));

    if (result.error) {
      this.logger.error(result.error);
      return [];
    } else {
      let colNames = result.response as string[];
      colNames = colNames.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      this.logger.debug(`collection names = ${colNames.join(',')}`);
      return colNames;
    }
  }

  public async insertDocuments(collectionName: string, documents: object[]): Promise<InsertResult> {
    this.logger.debug(`Try to insert ${documents.length} docs to ${collectionName}`);

    const result = await this.execFunction(async (db: Db) => await db.collection(collectionName).insertMany(documents));
    if (result.error) {
      return { error: await this.returnError(`Fail to insert docs to ${collectionName}`, result.error) };
    } else {
      const response = result.response as InsertWriteOpResult<any>;
      this.logger.debug(`${response.ops.length} documents are inserted to ${collectionName}!`);
      return { response };
    }
  }

  public async countDocuments(collectionName: string, query = {}) {
    this.logger.debug(`Try to count ${collectionName} with query=${JSON.stringify(query)}`);

    const result = await this.execFunction(async (db: Db) => await db.collection(collectionName).countDocuments(query));
    if (result.error) {
      return { error: await this.returnError(`Fail to count docs in ${collectionName}`, result.error) };
    } else {
      const count = result.response as number;
      this.logger.debug(`count = ${count}`);
      return { count };
    }
  }

  public async fetchDocuments(collectionName: string, query: object, options?: FindOneOptions): Promise<FetchResult> {
    this.logger.debug(`Try to find docs from ${collectionName} with query ${JSON.stringify(query)}`);

    const result = await this.execFunction(
      async (db: Db) =>
        await db
          .collection(collectionName)
          .find(query, options || {})
          .toArray()
    );

    if (result.error) {
      return { error: await this.returnError(`Fail to fetch docs from ${collectionName}`, result.error) };
    } else {
      const docs = result.response as MongoDocument[];
      this.logger.debug(`Success! ${docs.length} documents are returned!`);
      return { docs };
    }
  }

  public async getTopScoreDocument(params: {
    collectionName: string;
    targetKey: string;
    findQuery?: object;
    isDesc?: boolean;
    limit?: number;
  }) {
    const { collectionName, targetKey, findQuery = {}, isDesc = true, limit = 1 } = params;
    this.logger.debug(
      `Try to find the top ${limit} doc from ${collectionName} with "${targetKey}" and ${JSON.stringify(findQuery)}`
    );

    const result = await this.execFunction(
      async (db: Db) =>
        await db
          .collection(collectionName)
          .find(findQuery)
          .sort(targetKey, isDesc ? -1 : 1)
          .limit(limit)
          .toArray()
    );

    if (result.error) {
      return { error: await this.returnError(`Fail to the top docs from ${collectionName}`, result.error) };
    } else {
      const docs = result.response as MongoDocument[];
      this.logger.debug(`Success! ${docs.length} documents are returned!`);
      return { docs };
    }
  }

  public async upsertDocuments(collectionName: string, newDocuments: MongoDocument[], insetOrNoUpdate = false) {
    this.logger.debug(`Try to upsert ${newDocuments.length} docs into ${collectionName}`);

    const failList = [];
    let cnt = 0;
    for (const doc of newDocuments) {
      const _id = doc._id;
      const query = { _id };
      delete doc._id;

      let updateOptions: any = {
        $set: { ...doc },
      };
      if (insetOrNoUpdate) {
        updateOptions = {
          $setOnInsert: { ...doc },
        };
      }

      const result = await this.execFunction(
        async (db: Db) => await db.collection(collectionName).updateOne(query, updateOptions, { upsert: true })
      );

      if (result.error) {
        failList.push(doc._id);
      } else {
        this.logger.debug(`${doc._id} is upserted in ${collectionName}`);
      }

      if (++cnt % 100 === 0) {
        await sleep(200);
      } else {
        await sleep(50);
      }
    }

    if (failList.length) {
      this.logger.error(`Fail to upsert: ${failList.join(' ')}`);
      return Promise.reject({ error: { message: `Fail to upsert ${failList.length} documents` }, result: false });
    }

    this.logger.debug(`${newDocuments.length - failList.length} docs are upserted in ${collectionName}!`);
    return Promise.resolve({
      result: true,
    });
  }

  public async ping() {
    const { db, error } = await this.connect();
    return Promise.resolve(db != null && error === undefined);
  }

  public async dropCollection(collectionName: string): Promise<boolean> {
    this.logger.info(`Try to drop collection: ${collectionName}`);
    const result = await this.execFunction(async (db: Db) => await db.dropCollection(collectionName));
    if (result.error) {
      return false;
    } else {
      this.logger.info(`${collectionName} is dropped`);
      return true;
    }
  }

  public async exit() {
    let result = true;
    if (this.client) {
      try {
        await this.client.close();
        this.client = null;
        this.logger.info(`Close the connection to ${this.dbName}`);
        await sleep(1000);
      } catch (err) {
        this.logger.log(err);
      }
    }
    return Promise.resolve(result);
  }

  public async execFunction(func: (db: Db) => any): Promise<{ response?: any; error?: ErrorResponse }> {
    const { db, error } = await this.connect();
    if (!db || error) {
      return { error };
    }

    let response = undefined;
    let exception = undefined;
    try {
      response = await func(db);
    } catch (e) {
      exception = e;
    }

    return { response, error: exception };
  }

  private returnError(message: string, detail?: any): Promise<ErrorResponse> {
    this.logger.error(message);
    this.logger.error(detail);
    return Promise.reject({
      message,
      detail: detail?.message ?? detail,
    });
  }

  // singleton
  public static getInstance(hostname: string, port: number, dbName: string) {
    if (!this._instances || !this._instances[dbName]) {
      this._instances = {
        ...(this._instances || {}),
        [dbName]: new MongoConnector(hostname, port, dbName),
      };
    }
    return this._instances[dbName];
  }
}

export default MongoConnector;
