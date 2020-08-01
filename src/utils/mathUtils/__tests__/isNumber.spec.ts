import { isNumber } from '../isNumber';

describe('isNumber', () => {
  it('should detect number', () => {
    let result = isNumber(1);
    expect(result).toBeTruthy();

    result = isNumber(0);
    expect(result).toBeTruthy();

    result = isNumber(-1);
    expect(result).toBeTruthy();

    result = isNumber(1.1);
    expect(result).toBeTruthy();
  });

  it('should detect number from string', () => {
    let result = isNumber('1');
    expect(result).toBeTruthy();

    result = isNumber('0');
    expect(result).toBeTruthy();

    result = isNumber('-1');
    expect(result).toBeTruthy();

    result = isNumber('1.1');
    expect(result).toBeTruthy();
  });

  it('should detect non number', () => {
    let result = isNumber('-');
    expect(result).toBeFalsy();

    result = isNumber('');
    expect(result).toBeFalsy();

    result = isNumber(' ');
    expect(result).toBeFalsy();

    result = isNumber('\n');
    expect(result).toBeFalsy();

    result = isNumber('test');
    expect(result).toBeFalsy();

    result = isNumber(null);
    expect(result).toBeFalsy();

    result = isNumber(undefined);
    expect(result).toBeFalsy();
  });
});
