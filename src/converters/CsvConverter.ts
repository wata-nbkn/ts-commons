import * as iconv from 'iconv-lite';
import { Logger } from 'log4js';
import { LogUtil, MathUtil } from 'utils';
import { INTERNAL_LOGDIR_PATH } from 'consts';

export const DEFAULT_DELIMITERS = [',', '\t'];
export const DEFAULT_TRIM_CHARS = ['\n', '\r'];

export class CsvConverter {
  private logger: Logger;

  constructor() {
    this.logger = LogUtil.getLogger(`${INTERNAL_LOGDIR_PATH}/CsvConverter`);
  }

  public splitLine(line: string, delimiters?: string[]) {
    this.logger.debug('Enter:: splitLine');
    this.logger.trace(`original line = ${line}`);

    const delimitersRegExp = (delimiters || DEFAULT_DELIMITERS).join('|');
    this.logger.trace(`delimitersRegExp = ${delimitersRegExp}`);

    let split: string[] = [];
    try {
      split = line.split(new RegExp(delimitersRegExp, 'g'));
    } catch (e) {
      this.logger.error(`Fail to split the line: ${line}`);
      this.logger.error(e);
    }

    this.logger.trace(`split = ${split.join(', ')}`);
    this.logger.debug('Exit:: splitLine');
    return split;
  }

  public decodeLine(line: string, encode = 'UTF-8') {
    this.logger.debug('Enter:: decodeLine');

    let decoded = line;
    try {
      decoded = iconv.decode(new Buffer(line, 'binary'), encode);
    } catch (e) {
      this.logger.error(`Fail to decode the line: ${line}`);
      this.logger.error(e);
    }

    this.logger.trace(`decoded = ${decoded}`);
    this.logger.debug('Exit:: decodeLine');
    return decoded;
  }

  public convertRow2Json(headers: string[], cells: any[]) {
    this.logger.debug('Enter:: convertRow2Json');
    this.logger.trace(`headers = ${headers.join(', ')}`);
    this.logger.trace(`cells = ${cells.join(', ')}`);

    if (headers.length !== cells.length) {
      this.logger.warn(`The length of headers and cells are not matched: cells = ${cells.join(', ')}`);
      this.logger.debug('Exit:: convertRow2Json');
      return {};
    }

    let data: { [key: string]: string | number } = {};
    cells.forEach((cell, columnIndex) => {
      const c = MathUtil.isNumber(cell) ? Number(cell) : cell;
      const key = headers[columnIndex].trim();
      data = {
        ...data,
        [key]: c,
      };
    });

    this.logger.trace(`data = ${JSON.stringify(data)}`);
    this.logger.debug('Exit:: convertRow2Json');
    return data;
  }
}

export default CsvConverter;
