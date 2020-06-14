import { getRand } from '../getRand';

describe('getRand', () => {
  it('should make a random value', () => {
    const result = getRand();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('should make a random value with a range', () => {
    const result = getRand(-1, -100);
    expect(result).toBeGreaterThanOrEqual(-100);
    expect(result).toBeLessThanOrEqual(-1);
  });
});
