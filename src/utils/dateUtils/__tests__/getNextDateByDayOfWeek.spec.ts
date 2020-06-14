import { DAY_OF_WEEK } from 'consts';
import { getNextDateByDayOfWeek } from '../getNextDateByDayOfWeek';

describe('getNextDateByDayOfWeek', () => {
  it('no options', () => {
    let result = getNextDateByDayOfWeek('2020/01/01', DAY_OF_WEEK.MON);
    expect(result).toEqual('2020/01/06');

    result = getNextDateByDayOfWeek('2020/01/01', DAY_OF_WEEK.FRI);
    expect(result).toEqual('2020/01/03');
  });

  it('currentDateFormat option', () => {
    const result = getNextDateByDayOfWeek('01/01/20', DAY_OF_WEEK.TUE, { currentDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('2020/01/07');
  });

  it('newDateFormat option', () => {
    const result = getNextDateByDayOfWeek('2020/01/01', DAY_OF_WEEK.WED, { newDateFormat: 'DD/MM/YY' });
    expect(result).toEqual('08/01/20');
  });

  it('currentDateFormat and newDateFormat option', () => {
    const result = getNextDateByDayOfWeek('01/01/20', DAY_OF_WEEK.STA, {
      currentDateFormat: 'DD/MM/YY',
      newDateFormat: 'DD/MM/YY',
    });
    expect(result).toEqual('04/01/20');
  });
});
