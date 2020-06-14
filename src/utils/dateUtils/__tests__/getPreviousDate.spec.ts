import { getPreviousDate } from '../getPreviousDate';

describe('getPreviousDate', () => {
  it('no options', () => {
    const result = getPreviousDate('2020/01/01');
    expect(result).toEqual('2019/12/31');
  });

  it('before option', () => {
    const result = getPreviousDate('2020/01/01', { before: 2 });
    expect(result).toEqual('2019/12/30');
  });

  it('currentDateFormat option', () => {
    const result = getPreviousDate('11/10/10', { currentDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('2010/10/10');
  });

  it('newDateFormat option', () => {
    const result = getPreviousDate('2010/10/10', { newDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('09/10/10');
  });

  it('currentDateFormat and newDateFormat option', () => {
    const result = getPreviousDate('12/10/10', { currentDateFormat: 'DD/MM/YY', newDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('11/10/10');
  });
});
