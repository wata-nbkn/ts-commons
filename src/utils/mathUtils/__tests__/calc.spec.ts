import { div } from '../calc';

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
});
