import * as fs from 'fs';
import { INTERNAL_LOGDIR_PATH } from 'consts';
import { LogUtil } from '../logUtils';
import { isNumber, convertToNumber } from '../mathUtils';
import union = require('lodash/union');

type LoadFileOptions = {
  lineSeparator?: string;
  shouldTrim?: boolean;
  shouldRemoveEmpty?: boolean;
  shouldRemoveDup?: boolean;
  readAsNumber?: boolean;
};

export const loadFileAsArray = (filePath: string, options?: LoadFileOptions) => {
  const {
    lineSeparator = '\n',
    shouldTrim = true,
    shouldRemoveEmpty = true,
    shouldRemoveDup = true,
    readAsNumber = true,
  } = options || {};
  const logger = LogUtil.getLogger(`${INTERNAL_LOGDIR_PATH}/fileUtils`);
  logger.trace(`Enter:: [loadFileAsArray] with options = ${JSON.stringify(options || {})}`);

  let content = '';
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, 'utf-8');
  } else {
    logger.error(`Exit:: [loadFileAsArray] -- Cannot find file: ${filePath}`);
    return null;
  }

  let lines = content.split(lineSeparator) as any[];

  if (shouldTrim) {
    lines = lines.map((l) => l.trim());
  }
  if (shouldRemoveEmpty) {
    lines = lines.filter((d) => d !== '');
  }
  if (shouldRemoveDup) {
    lines = union(lines);
  }
  if (readAsNumber) {
    lines = lines.map((l) => (isNumber(l) ? convertToNumber(l) : l));
  }

  logger.trace(`Exit:: [loadFileAsArray] with ${lines.length} lines`);
  return lines;
};
