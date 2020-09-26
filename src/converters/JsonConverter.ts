import { Logger } from 'log4js';
import { LogUtil } from 'utils/logUtils';
import { INTERNAL_LOGDIR_PATH } from 'consts';
import union = require('lodash/union');

export const DEFAULT_DELIMITER = ',';

export class JsonConverter {
  private logger: Logger;

  constructor() {
    this.logger = LogUtil.getLogger(`${INTERNAL_LOGDIR_PATH}/JsonConverter`);
  }

  public getJsonKeys(jsonArray: object[]) {
    this.logger.debug(`Enter:: [getJsonKeys]`);

    let allKeys: string[] = [];
    jsonArray.forEach((json) => {
      const keys = Object.keys(json);
      allKeys = union(allKeys, keys);
    });

    this.logger.debug(`Exit:: [getJsonKeys] with ${allKeys}`);
    return allKeys;
  }

  public escapeDelimiter(value: string, delimiter = DEFAULT_DELIMITER) {
    if (typeof value !== 'string' || !value.match(delimiter)) {
      return value;
    }
    this.logger.debug(`Enter:: [escapeDelimiter]`);

    let newValue = value;
    this.logger.trace(`delimiter is contained`);
    if (newValue.match('"')) {
      newValue = newValue.replace(/"/g, '\\"');
      this.logger.trace(`double quart is escaped`);
    }

    newValue = `"${newValue}"`;
    this.logger.debug(`Exit:: [escapeDelimiter] with ${newValue}`);
    return newValue;
  }

  public convertJsonArrayToCsv(jsonArray: object[], delimiter = DEFAULT_DELIMITER) {
    const logger = LogUtil.getLogger(`${INTERNAL_LOGDIR_PATH}/jsonArrayToCsv`);
    logger.debug(`Enter:: [jsonArrayToCsv] with delimiter = ${delimiter}`);

    if (jsonArray.length === 0) {
      logger.debug(`Exit:: [jsonArrayToCsv] -- jsonArray is empty`);
      return '';
    }

    const headers = this.getJsonKeys(jsonArray);
    let csv = headers.join(delimiter) + '\n';

    jsonArray.forEach((json, arrayIndex) => {
      const isLastRow = arrayIndex === jsonArray.length - 1;
      headers.forEach((key, columnIndex) => {
        const isLastColumn = columnIndex === headers.length - 1;
        let value: any = json[key];
        if (value === null || value === undefined) {
          logger.trace(`value is null in ${key} of ${arrayIndex}`);
          csv += '';
        } else {
          if (Array.isArray(value)) {
            logger.trace(`value is array in ${key} of ${arrayIndex}`);
            value = value.join(',');
          }
          const escapedValue = this.escapeDelimiter(value, delimiter);
          if (escapedValue !== value) {
            logger.trace(`value is escaped in ${key} of ${arrayIndex}`);
          }
          csv += escapedValue;
        }

        if (isLastColumn) {
          if (!isLastRow) {
            csv += '\n';
          }
        } else {
          csv += delimiter;
        }
      });
    });

    logger.debug(`Exit:: [jsonArrayToCsv]`);
    return csv;
  }
}

export default JsonConverter;
