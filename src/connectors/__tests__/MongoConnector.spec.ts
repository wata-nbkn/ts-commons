import MongoConnector from '../MongoConnector';

describe('MongoConnector', () => {
  let mongo: MongoConnector;
  const testDbName = 'test';
  const testColName = 'test';
  const testDocs: object[] = [
    {
      _id: 'a',
      value: 100,
    },
    {
      _id: 'b',
      value: 200,
    },
    {
      _id: 'c',
      value: 1,
    },
  ];

  beforeAll(() => {
    const { TEST_MONGO_SERVER_HOST_NAME, TEST_MONGO_PROT } = process.env;
    if (TEST_MONGO_SERVER_HOST_NAME == null || TEST_MONGO_PROT == null) {
      console.error('Please provide "TEST_MONGO_SERVER_HOST_NAME" and "TEST_MONGO_PROT" env for mongo connector tests');
      process.exit(1);
    }
    mongo = MongoConnector.getInstance(TEST_MONGO_SERVER_HOST_NAME, Number(TEST_MONGO_PROT), testDbName);
  });

  afterAll(async () => {
    await mongo.exit();
  });

  it('connect', async () => {
    const result = await mongo.connect();
    expect(result.db).toBeTruthy();
    expect(result.error).toBeFalsy();
  });

  describe('insert and fetch', () => {
    let insertedIds: string[] = [];
    it('insertDocuments', async () => {
      const result = await mongo.insertDocuments(testColName, testDocs);
      insertedIds = Object.values(result.response?.insertedIds || {});
      expect(result.result).toBeTruthy();
      expect(result.error).toBeFalsy();
    });

    it('fetchDocuments', async () => {
      const result = await mongo.fetchDocuments(testColName, { _id: { $in: insertedIds } });
      expect(result.docs).toBeTruthy();
      expect(result.error).toBeFalsy();

      const fetchedIds = result.docs?.map((doc) => doc._id) || [];
      expect(fetchedIds.sort()).toEqual(insertedIds.sort());
    });

    it('countDocuments', async () => {
      let result = await mongo.countDocuments(testColName);
      expect(result.count).toEqual(testDocs.length);

      result = await mongo.countDocuments(testColName, { value: 200 });
      expect(result.count).toEqual(1);
    });
  });

  describe('getTopScoreDocument', () => {
    it('no options', async () => {
      const { docs = [] } = await mongo.getTopScoreDocument({
        collectionName: testColName,
        targetKey: 'value',
      });
      expect(docs[0].value).toEqual(200);
    });

    it('isDesc: false', async () => {
      const { docs = [] } = await mongo.getTopScoreDocument({
        collectionName: testColName,
        targetKey: 'value',
        isDesc: false,
      });
      expect(docs[0].value).toEqual(1);
    });

    it('limit 2', async () => {
      const { docs = [] } = await mongo.getTopScoreDocument({
        collectionName: testColName,
        targetKey: 'value',
        isDesc: false,
        limit: 2,
      });
      expect(docs[0].value).toEqual(1);
      expect(docs[1].value).toEqual(100);
    });
  });

  describe('upsertDocuments', () => {
    it('insert', async () => {
      const testDocs = [
        {
          _id: '1',
          name: 'test1',
          value: 100,
        },
        {
          _id: '2',
          name: 'test2',
          value: 200,
        },
      ];
      let result = await mongo.upsertDocuments(testColName, testDocs);
      expect(result.result).toEqual(true);

      const docs = await mongo.fetchDocuments(testColName, { _id: { $in: ['1', '2'] } });
      expect(docs.docs?.map((d) => d._id)).toEqual(['1', '2']);
    });

    it('update', async () => {
      const testDocs = [
        {
          _id: '1',
          name: 'test1_edited',
          value: 1000,
        },
        {
          _id: '2',

          name: 'test2_edited',
          value: 2000,
        },
      ] as any;
      let result = await mongo.upsertDocuments(testColName, testDocs);
      expect(result.result).toEqual(true);

      const docs = await mongo.fetchDocuments(testColName, { _id: { $in: ['1', '2'] } });
      const doc1 = docs.docs?.find((d) => d._id === '1') as any;
      expect(doc1.name).toEqual(testDocs[0].name);
      expect(doc1.value).toEqual(testDocs[0].value);

      const doc2 = docs.docs?.find((d) => d._id === '2') as any;
      expect(doc2.name).toEqual(testDocs[1].name);
      expect(doc2.value).toEqual(testDocs[1].value);
    });

    it('noupdate or insert: insert', async () => {
      const testDocs = [
        {
          _id: '3',
          name: 'test3',
          value: 300,
        },
      ] as any;
      const upsertResult = await mongo.upsertDocuments(testColName, testDocs, true);
      expect(upsertResult.result).toEqual(true);

      const fetchResult = await mongo.fetchDocuments(testColName, { _id: '3' });
      expect(fetchResult.docs).toBeTruthy();
      if (fetchResult.docs) {
        expect(fetchResult.docs[0].name).toEqual(testDocs[0].name);
        expect(fetchResult.docs[0].value).toEqual(testDocs[0].value);
      }
    });

    it('noupdate or inset: no update', async () => {
      const testDocs = [
        {
          _id: '3',
          name: 'test3_edited',
          value: 3000,
        },
      ] as any;
      const upsertResult = await mongo.upsertDocuments(testColName, testDocs, true);
      expect(upsertResult.result).toEqual(true);

      const fetchResult = await mongo.fetchDocuments(testColName, { _id: '3' });
      expect(fetchResult.docs).toBeTruthy();
      if (fetchResult.docs) {
        expect(fetchResult.docs[0].name).toEqual('test3');
        expect(fetchResult.docs[0].value).toEqual(300);
      }
    });

    it('overwrite update: insert', async () => {
      const testDocs = [
        {
          _id: '4',
          name: 'test4',
          value: 400,
        },
      ] as any;
      const upsertResult = await mongo.upsertDocuments(testColName, testDocs, false, false);
      expect(upsertResult.result).toEqual(true);

      const fetchResult = await mongo.fetchDocuments(testColName, { _id: '4' });
      expect(fetchResult.docs).toBeTruthy();
      if (fetchResult.docs) {
        expect(fetchResult.docs[0].name).toEqual(testDocs[0].name);
        expect(fetchResult.docs[0].value).toEqual(testDocs[0].value);
      }
    });

    it('overwrite update: update', async () => {
      const testDocs = [
        {
          _id: '4',
          name: 'test4-2',
          value2: 401,
        },
      ] as any;
      const upsertResult = await mongo.upsertDocuments(testColName, testDocs, false, false);
      expect(upsertResult.result).toEqual(true);

      const fetchResult = await mongo.fetchDocuments(testColName, { _id: '4' });
      expect(fetchResult.docs).toBeTruthy();
      if (fetchResult.docs) {
        expect(fetchResult.docs[0].name).toEqual(testDocs[0].name);
        expect(fetchResult.docs[0].value).toBeUndefined;
        expect(fetchResult.docs[0].value2).toEqual(testDocs[0].value2);
      }
    });
  });

  describe('delete', () => {
    it('delete document', async () => {
      const result = await mongo.deleteDocument(testColName, 'a');
      expect(result.result).toBeTruthy();

      const fetchResult = await mongo.fetchDocuments(testColName, {});
      expect(fetchResult.docs?.find((d) => d._id === 'a')).toBeFalsy();
      expect(fetchResult.docs?.find((d) => d._id === 'b')).toBeTruthy();
    });
  });

  describe('Manage collections', () => {
    it('ping', async () => {
      const result = await mongo.ping();
      expect(result).toBeTruthy();
    });

    it('re-connect', async () => {
      await mongo.exit();
      const result = await mongo.ping();
      expect(result).toBeTruthy();
    });

    it('getAllCollections', async () => {
      const result = await mongo.getAllCollections();
      expect(result).toContain(testDbName);
    });

    it('dropCollection', async () => {
      const result = await mongo.dropCollection(testColName);
      expect(result).toBeTruthy();

      const fetchResult = await mongo.fetchDocuments(testColName, {});
      expect(fetchResult.docs?.length).toEqual(0);
    });
  });
});
