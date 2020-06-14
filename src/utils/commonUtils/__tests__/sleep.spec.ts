import * as moment from 'moment';
import { sleep, randomSleep } from '../sleep';

describe('sleep', () => {
  it('should wait', async () => {
    const before = moment();
    await sleep(5000);
    const after = moment();

    const diff = moment(after).diff(before);
    expect(diff).toBeGreaterThanOrEqual(5000);
  });

  it('should wait by randomSleep', async () => {
    const before = moment();
    await randomSleep(1, 5);
    const after = moment();

    const diff = moment(after).diff(before);
    expect(diff).toBeGreaterThanOrEqual(1000);
    expect(diff).toBeLessThanOrEqual(5000);
  });
});
