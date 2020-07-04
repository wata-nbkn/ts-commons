import { isValid } from '../isValid';

describe('isValid', () => {
  it('should detect a valid date', () => {
    const result = isValid('2011/12/10');
    expect(result).toBeTruthy();
  });

  it('should detect a valid date with a format', () => {
    const result = isValid('1/1', 'M/D');
    expect(result).toBeTruthy();
  });

  it('should detect a invalid valid date', () => {
    const result = isValid('2011/02/31');
    expect(result).toBeFalsy();
  });
});
