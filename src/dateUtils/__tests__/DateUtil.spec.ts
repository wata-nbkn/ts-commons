import { getToday, getCurrentMonth, getCurrentYear, getMonth, getYear } from '../getDates';

describe('Get Dates', () => {
  it('getToday', () => {
    const result = getToday();
    expect(result).toBeTruthy();
  });

  it('getCurrentMonth', () => {
    const result = getCurrentMonth();
    expect(result).toBeTruthy();
  });

  it('getCurrentYear', () => {
    const result = getCurrentYear();
    expect(result).toBeTruthy();
  });

  it('getMonth', () => {
    let result = getMonth('2011/12/10');
    expect(result).toEqual(12);

    result = getMonth('11/12/10', 'YY/MM/DD');
    expect(result).toEqual(12);

    result = getMonth('11/12/10', 'MM/DD/YY');
    expect(result).toEqual(11);
  });

  it('getYear', () => {
    let result = getYear('2011/12/10');
    expect(result).toEqual(2011);

    result = getYear('11/12/10', 'YY/MM/DD');
    expect(result).toEqual(2011);

    result = getYear('11/12/10', 'DD/MM/YY');
    expect(result).toEqual(2010);
  });
});
