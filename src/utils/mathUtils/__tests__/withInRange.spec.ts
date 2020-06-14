import { withInRange } from '../withInRange';

describe('withInRange', () => {
  it('should detect the target value is in the range', () => {
    let result = withInRange(2017, null, null);
    expect(result).toEqual(true);

    result = withInRange(2017, 2016, 2019);
    expect(result).toEqual(true);

    result = withInRange(2016, 2016, 2019);
    expect(result).toEqual(true);

    result = withInRange(2019, 2016, 2019);
    expect(result).toEqual(true);
  });

  it('should detect the target value is not in the range', () => {
    let result = withInRange(2015, 2016, 2019);
    expect(result).toEqual(false);

    result = withInRange(2020, 2016, 2019);
    expect(result).toEqual(false);
  });
});
