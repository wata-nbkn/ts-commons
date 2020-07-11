import * as fs from 'fs';
import * as mkDirP from 'mkdirp';
import { getLogger } from 'utils/commonUtils';
import { INTERNAL_LOGDIR_PATH } from 'consts';

export async function mkdirp(dirPath: string) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dirPath)) {
      return resolve(true);
    }

    const logger = getLogger(`${INTERNAL_LOGDIR_PATH}/mkdirp`);
    mkDirP(dirPath, (err) => {
      if (err) {
        logger.error(`Fail to make dir: ${dirPath}`);
        logger.error(err);
        return reject(false);
      }
      logger.info(`Made dir: ${dirPath}`);
      return resolve(true);
    });
  });
}
