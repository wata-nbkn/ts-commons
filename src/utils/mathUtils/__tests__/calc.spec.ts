import { div, calcPercentage, calcDiffPercentage } from '../calc';

describe('calc', () => {
  describe('div', () => {
    it('should return with 2 digits with truncated', () => {
      const result = div(2, 3);
      expect(result).toEqual(0.66);
    });

    it('should return 0', () => {
      const result = div(0, 10);
      expect(result).toEqual(0);
    });

    it('should return `-` when 0 is provided', () => {
      const result = div(100, 0);
      expect(result).toEqual('-');
    });

    it('should return `-` when a null is provided', () => {
      const result = div(null, 100);
      expect(result).toEqual('-');
    });

    it('should return `-` when a undefined is provided', () => {
      const result = div(100, undefined);
      expect(result).toEqual('-');
    });

    it('should return `-` when a string is provided', () => {
      const result = div(100, 'b');
      expect(result).toEqual('-');
    });

    describe('with options', () => {
      it('should return with 2 digits with fixed', () => {
        const result = div(2, 3, { isFixed: true });
        expect(result).toEqual(0.67);
      });

      it('should return with more digit', () => {
        const result = div(2, 3, { decimalPlaces: 4, isFixed: true });
        expect(result).toEqual(0.6667);
      });
    });
  });

  describe('calcPercentage', () => {
    it('should return with 2 digits with truncated', () => {
      const result = calcPercentage(2, 3);
      expect(result).toEqual(66.66);
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

    describe('with options', () => {
      it('should return with 2 digits with fixed', () => {
        const result = calcPercentage(2, 3, { isFixed: true });
        expect(result).toEqual(66.67);
      });

      it('should return with more digit', () => {
        const result = calcPercentage(2, 3, { decimalPlaces: 4, isFixed: true });
        expect(result).toEqual(66.6667);
      });
    });
  });

  describe('calcDiffPercentage', () => {
    it('should return with 2 digits with truncated', () => {
      const result = calcDiffPercentage(5, 3);
      expect(result).toEqual(66.66);
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

    describe('with options', () => {
      it('should return with 2 digits with fixed', () => {
        const result = calcDiffPercentage(5, 3, { isFixed: true });
        expect(result).toEqual(66.67);
      });

      it('should return with more digit', () => {
        const result = calcDiffPercentage(5, 3, { decimalPlaces: 4, isFixed: true });
        expect(result).toEqual(66.6667);
      });
    });
  });
});
