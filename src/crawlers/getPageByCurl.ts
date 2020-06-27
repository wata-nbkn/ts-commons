import * as request from 'request';
import { CommonUtil } from 'utils';

export async function getPageByCurl(url: string, options?: object) {
  const logger = CommonUtil.getLogger(__filename);

  logger.debug(`Access to ${url}`);
  return new Promise((resolve, reject) => {
    request({ uri: url, ...options }, (error, res, body: string) => {
      if (error) {
        logger.error(error);
        resolve(null);
      } else if (res?.statusCode !== 200) {
        logger.error(`The status code is ${res?.statusCode}`);
        resolve(null);
      } else {
        resolve(body);
      }
    });
  });
}
