import { convertToNumber } from '../convertToNumber';

describe('convertToNumber', () => {
  it('should convert a valid string to number', () => {
    expect(convertToNumber('1')).toEqual(1);
    expect(convertToNumber(1 as any)).toEqual(1);

    expect(convertToNumber('-1')).toEqual(-1);
    expect(convertToNumber(-1 as any)).toEqual(-1);

    expect(convertToNumber('0')).toEqual(0);
    expect(convertToNumber(0 as any)).toEqual(0);

    expect(convertToNumber('1,000')).toEqual(1000);
    expect(convertToNumber('1,000,000')).toEqual(1000000);
  });

  it('should not convert a invalid string', () => {
    expect(convertToNumber('a')).toEqual('-');
    expect(convertToNumber(null as any)).toEqual('-');
    expect(convertToNumber(undefined as any)).toEqual('-');
  });
});
