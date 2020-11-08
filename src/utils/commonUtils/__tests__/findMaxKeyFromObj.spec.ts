import { findMaxKeyFromObj } from '../findMaxKeyFromObj';

describe('findMaxKeyFromObj', () => {
  it('should return the key which has the max value', () => {
    const result = findMaxKeyFromObj({
      a: 100,
      b: 200,
      c: 0,
      d: -300,
    });
    expect(result).toEqual('b');
  });
});
