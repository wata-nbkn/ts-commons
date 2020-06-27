import * as cheerio from 'cheerio';
import { CommonUtil } from 'utils';
import { parseTableRows } from './parseTableRows';

export type ParseTableOptions = {
  tableSelector?: string;
  firstLineAsHeader?: boolean;
};

export const parseTable = (body: string, options?: ParseTableOptions) => {
  const { tableSelector = 'table', firstLineAsHeader = true } = options || {};
  const logger = CommonUtil.getLogger(__filename);
  let headers: string[] = [];
  let rows: string[][] = [];

  logger.debug('Enter [parseTable]');

  const $ = cheerio.load(body);
  const table = $(tableSelector);
  rows = parseTableRows($, table);

  if (firstLineAsHeader && rows[0]) {
    headers = rows.shift() || [];
    logger.trace(`header = ${headers.join(', ')}`);
  }

  logger.trace(`rows = ${rows.join(', ')}`);
  logger.debug('Exit [parseTable]');

  return {
    headers,
    rows,
  };
};
