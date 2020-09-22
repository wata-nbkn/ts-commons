import { stringToBoolean } from '../stringToBoolean';

describe('stringToBoolean', () => {
  it('should return true', () => {
    expect(stringToBoolean('true')).toBeTruthy();
  });

  it('should return true from uppercase', () => {
    expect(stringToBoolean('True')).toBeTruthy();
  });

  it('should return false', () => {
    expect(stringToBoolean('false')).toBeFalsy();
  });

  it('should return false from empty', () => {
    expect(stringToBoolean('')).toBeFalsy();
  });
});
