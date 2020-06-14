import { isAfterDate, isBeforeDate, isSameDate, isSameOrAfterDate, isSameOrBeforeDate } from '../compareDates';

describe('Date Compare', () => {
  it('isBeforeDate', () => {
    let result = isBeforeDate('2019/09/30', '2019/10/01');
    expect(result).toEqual(true);

    result = isBeforeDate('19/09/30', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isBeforeDate('2019/10/01', '2019/10/01');
    expect(result).toEqual(false);

    result = isBeforeDate('2019/10/02', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isAfterDate', () => {
    let result = isAfterDate('2019/10/02', '2019/10/01');
    expect(result).toEqual(true);

    result = isAfterDate('19/10/02', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isAfterDate('2019/10/01', '2019/10/01');
    expect(result).toEqual(false);

    result = isAfterDate('2019/09/30', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isSameDate', () => {
    let result = isSameDate('2019/10/01', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameDate('19/10/01', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameDate('2019/10/02', '2019/10/01');
    expect(result).toEqual(false);

    result = isSameDate('2019/09/30', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isSameOrBeforeDate', () => {
    let result = isSameOrBeforeDate('2019/10/01', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrBeforeDate('19/10/01', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrBeforeDate('2019/09/30', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrBeforeDate('19/09/30', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrBeforeDate('2019/10/02', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isSameOrAfterDate', () => {
    let result = isSameOrAfterDate('2019/10/01', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrAfterDate('19/10/01', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrAfterDate('2019/10/02', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrAfterDate('19/10/02', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrAfterDate('2019/10/01', '2019/10/02');
    expect(result).toEqual(false);
  });
});
