import { isJson } from '../isJson';

describe('isJson', () => {
  it('with json', () => {
    const result1 = isJson({});
    expect(result1).toEqual(true);

    const result2 = isJson({
      a: 100,
    });
    expect(result2).toEqual(true);
  });

  it('with string', () => {
    const result1 = isJson('aaa');
    expect(result1).toEqual(false);

    const result2 = isJson('{}');
    expect(result2).toEqual(false);
  });

  it('with number', () => {
    const result1 = isJson(1);
    expect(result1).toEqual(false);

    const result2 = isJson(1);
    expect(result2).toEqual(false);
  });

  it('with array', () => {
    const result1 = isJson([]);
    expect(result1).toEqual(false);

    const result2 = isJson([{ a: 100 }]);
    expect(result2).toEqual(false);
  });

  it('with boolean', () => {
    const result1 = isJson(true);
    expect(result1).toEqual(false);

    const result2 = isJson(false);
    expect(result2).toEqual(false);
  });

  it('with null', () => {
    const result1 = isJson(null);
    expect(result1).toEqual(false);

    const result2 = isJson(undefined);
    expect(result2).toEqual(false);
  });
});
