import * as fs from 'fs';
import { getLogger } from './getLogger';
import { INTERNAL_LOGDIR_PATH } from 'consts';

export const loadJsonFile = (filePath: string) => {
  const logger = getLogger(`${INTERNAL_LOGDIR_PATH}/loadJsonFile`);

  let content = '';
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, 'utf-8');
  } else {
    logger.error(`Cannot find file: ${filePath}`);
    return null;
  }

  let data = {};
  try {
    data = JSON.parse(content);
  } catch (e) {
    logger.error(e);
    return null;
  }
  return data;
};
