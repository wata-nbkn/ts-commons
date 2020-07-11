import * as fs from 'fs';
import { getLogger } from 'utils/commonUtils';
import { INTERNAL_LOGDIR_PATH } from 'consts';

export const exportAsStream = (
  outputStr: string,
  saveFilePath: string,
  options?: { append?: boolean; callback?: () => void }
) => {
  const logger = getLogger(`${INTERNAL_LOGDIR_PATH}/exportAsStream`);
  logger.debug(`Enter [exportAsStream]`);

  const { append = true, callback } = options || {};
  const writeOption = append ? { flags: 'a' } : {};
  try {
    const writer = fs.createWriteStream(saveFilePath, writeOption);
    writer.write(outputStr);
    writer.on('error', (e) => {
      logger.error(`Fail to save file: ${saveFilePath}`);
      logger.error(e);
    });
    writer.end(() => {
      if (callback) {
        logger.trace(`Callback will be executed`);
        callback();
      }
      logger.debug(`Content is exported to ${saveFilePath}`);
      logger.debug(`Exit [exportAsStream]`);
    });
  } catch (e) {
    logger.error(`Fail to save file: ${saveFilePath}`);
    logger.error(e);
  }
};
