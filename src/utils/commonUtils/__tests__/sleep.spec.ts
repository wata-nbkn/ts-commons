import * as moment from 'moment';
import { sleep } from '../sleep';

describe('sleep', () => {
  it('should wait', async () => {
    const before = moment();
    await sleep(5000);
    const after = moment();

    const diff = moment(after).diff(before);
    expect(diff).toBeGreaterThanOrEqual(5000);
  });
});
