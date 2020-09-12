import * as fs from 'fs';
import * as mkDirP from 'mkdirp';
import { LogUtil } from 'utils/logUtils';
import { INTERNAL_LOGDIR_PATH } from 'consts';

export async function mkdirp(dirPath: string) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dirPath)) {
      return resolve(true);
    }

    const logger = LogUtil.getLogger(`${INTERNAL_LOGDIR_PATH}/fileUtils`);
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
