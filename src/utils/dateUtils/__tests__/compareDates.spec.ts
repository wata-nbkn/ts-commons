import { isAfter, isBefore, isSame, isSameOrAfter, isSameOrBefore } from '../compareDates';

describe('Date Compare', () => {
  it('isBefore', () => {
    let result = isBefore('2019/09/30', '2019/10/01');
    expect(result).toEqual(true);

    result = isBefore('19/09/30', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isBefore('2019/10/01', '2019/10/01');
    expect(result).toEqual(false);

    result = isBefore('2019/10/02', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isAfter', () => {
    let result = isAfter('2019/10/02', '2019/10/01');
    expect(result).toEqual(true);

    result = isAfter('19/10/02', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isAfter('2019/10/01', '2019/10/01');
    expect(result).toEqual(false);

    result = isAfter('2019/09/30', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isSame', () => {
    let result = isSame('2019/10/01', '2019/10/01');
    expect(result).toEqual(true);

    result = isSame('19/10/01', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSame('2019/10/02', '2019/10/01');
    expect(result).toEqual(false);

    result = isSame('2019/09/30', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isSameOrBefore', () => {
    let result = isSameOrBefore('2019/10/01', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrBefore('19/10/01', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrBefore('2019/09/30', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrBefore('19/09/30', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrBefore('2019/10/02', '2019/10/01');
    expect(result).toEqual(false);
  });

  it('isSameOrAfter', () => {
    let result = isSameOrAfter('2019/10/01', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrAfter('19/10/01', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrAfter('2019/10/02', '2019/10/01');
    expect(result).toEqual(true);

    result = isSameOrAfter('19/10/02', '19/10/01', 'YY/MM/DD');
    expect(result).toEqual(true);

    result = isSameOrAfter('2019/10/01', '2019/10/02');
    expect(result).toEqual(false);
  });
});
