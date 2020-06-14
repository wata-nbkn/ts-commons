import * as fs from 'fs';
import * as moment from 'moment';
import { Logger } from 'log4js';
import { getLogger } from '../getLogger';
import { sleep } from '../sleep';

describe('getLogger', () => {
  const fileName = moment().format('YYYYMMDD') + '.log';
  const expectedFilePath = `./logs/utils/commonUtils/__tests__/getLogger.spec/${fileName}`;
  let logger: Logger;

  beforeAll(() => {
    logger = getLogger(__filename, 'DEBUG');
  });

  it('should make a log file', async () => {
    const result = fs.existsSync(expectedFilePath);
    expect(result).toBeTruthy();
  });

  it('should output debug logs', async () => {
    const msg = 'DEBUG MSG';
    logger.debug(msg);
    await sleep(5000);

    const result = fs.readFileSync(expectedFilePath, 'utf-8');
    expect(result).toMatch(msg);
  });

  it('should not output trace logs', async () => {
    const msg = 'TRACE MSG';
    logger.trace(msg);
    await sleep(5000);

    const result = fs.readFileSync(expectedFilePath, 'utf-8');
    expect(result).not.toMatch(msg);
  });
});
