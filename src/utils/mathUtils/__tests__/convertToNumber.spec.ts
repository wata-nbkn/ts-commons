import { convertToNumber } from '../convertToNumber';

describe('convertToNumber', () => {
  it('should convert a valid string to number', () => {
    expect(convertToNumber('1')).toEqual(1);
    expect(convertToNumber(1)).toEqual(1);

    expect(convertToNumber('-1')).toEqual(-1);
    expect(convertToNumber(-1)).toEqual(-1);

    expect(convertToNumber('0')).toEqual(0);
    expect(convertToNumber(0)).toEqual(0);

    expect(convertToNumber('1,000')).toEqual(1000);
    expect(convertToNumber('1,000.1')).toEqual(1000.1);
    expect(convertToNumber('1,000.123')).toEqual(1000.123);
    expect(convertToNumber('1,000.1230')).toEqual(1000.123);
    expect(convertToNumber('1,000,000.000')).toEqual(1000000);
  });

  it('should remove units', () => {
    expect(convertToNumber('1,000個')).toEqual(1000);
    expect(convertToNumber('-1,000.100%')).toEqual(-1000.1);
    expect(convertToNumber('+1,000.100%')).toEqual(1000.1);
    expect(convertToNumber('-1,000.1010%')).toEqual(-1000.101);
    expect(convertToNumber('価格1,000,000円')).toEqual(1000000);
  });

  it('should not convert a invalid string', () => {
    expect(convertToNumber('a')).toEqual('-');
    expect(convertToNumber(null)).toEqual('-');
    expect(convertToNumber(undefined)).toEqual('-');
  });
});
