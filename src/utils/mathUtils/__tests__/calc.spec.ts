import { div, calcPercentage, calcDiffPercentage } from '../calc';

describe('calc', () => {
  it('div', () => {
    let result = div(100, 3);
    expect(result).toEqual(33.33);

    result = div(0, 10);
    expect(result).toEqual(0);

    result = div(10, 0);
    expect(result).toEqual('-');

    result = div(null, null);
    expect(result).toEqual('-');

    result = div(undefined, undefined);
    expect(result).toEqual('-');
  });

  describe('calcPercentage', () => {
    it('should return with 2 digits', () => {
      const result = calcPercentage(1, 3);
      expect(result).toEqual(33.33);
    });

    it('should return 0', () => {
      const result = calcPercentage(0, 3);
      expect(result).toEqual(0);
    });

    it('should return `-` when a string is provided', () => {
      const result = calcPercentage('', '');
      expect(result).toEqual('-');
    });

    it('should return `-` when 0 is provided', () => {
      const result = calcPercentage(100, 0);
      expect(result).toEqual('-');
    });
  });

  describe('calcDiffPercentage', () => {
    it('should return with 2 digits', () => {
      const result = calcDiffPercentage(1, 3);
      expect(result).toEqual(-66.67);
    });

    it('should return 0', () => {
      const result = calcDiffPercentage(3, 3);
      expect(result).toEqual(0);
    });

    it('should return `-` when a string is provided', () => {
      const result = calcDiffPercentage('', '');
      expect(result).toEqual('-');
    });

    it('should return `-` when 0 is provided', () => {
      const result = calcDiffPercentage(100, 0);
      expect(result).toEqual('-');
    });
  });
});
