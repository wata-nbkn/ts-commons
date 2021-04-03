import { DAY_OF_WEEK } from 'consts';
import { getPreviousDay } from '../getPreviousDay';

describe('getPreviousDay', () => {
  it('should get last Monday', () => {
    const result = getPreviousDay(DAY_OF_WEEK.MON, '2021/04/01');
    expect(result).toEqual('2021/03/29');
  });

  it('should get last Wednesday', () => {
    const result = getPreviousDay(DAY_OF_WEEK.WED, '2021/04/01');
    expect(result).toEqual('2021/03/31');
  });

  it('should get current Thursday', () => {
    const result = getPreviousDay(DAY_OF_WEEK.THU, '2021/04/01');
    expect(result).toEqual('2021/04/01');
  });
});
