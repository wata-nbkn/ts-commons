import { getYearRange } from '../getYearRange';

describe('getYearRange', () => {
  it('should return the year range', () => {
    const result = getYearRange({
      $gte: '16/12/01',
      $lt: '2019/01/30',
    });
    expect(result.from).toEqual(2016);
    expect(result.to).toEqual(2019);
  });
});
