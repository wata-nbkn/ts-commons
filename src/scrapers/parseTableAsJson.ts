import { parseTable, ParseTableOptions } from './parseTable';
import { convertTableToJson } from './convertTableToJson';

export const parseTableAsJson = (body: string, options?: ParseTableOptions) => {
  const table = parseTable(body, options);
  return convertTableToJson(table.headers, table.rows);
};
