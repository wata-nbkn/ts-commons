import { getNextDate } from '../getNextDate';

describe('getNextDate', () => {
  it('no options', () => {
    const result = getNextDate('2019/12/31');
    expect(result).toEqual('2020/01/01');
  });

  it('next option', () => {
    const result = getNextDate('2019/12/31', { next: 2 });
    expect(result).toEqual('2020/01/02');
  });

  it('currentDateFormat option', () => {
    const result = getNextDate('11/10/10', { currentDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('2010/10/12');
  });

  it('newDateFormat option', () => {
    const result = getNextDate('2010/10/11', { newDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('12/10/10');
  });

  it('currentDateFormat and newDateFormat option', () => {
    const result = getNextDate('11/10/10', { currentDateFormat: 'DD/MM/YY', newDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('12/10/10');
  });
});
