import CsvConverter from '../CsvConverter';

describe('CsvConverter', () => {
  let csvConverter: CsvConverter;

  beforeAll(() => {
    csvConverter = new CsvConverter();
  });

  it('splitLine', () => {
    let result = csvConverter.splitLine('a, b\t c d');
    expect(result[0]).toEqual('a');
    expect(result[1]).toEqual(' b');
    expect(result[2]).toEqual(' c d');

    result = csvConverter.splitLine('a, b\t c d', [' ']);
    expect(result[0]).toEqual('a,');
    expect(result[1]).toEqual('b\t');
    expect(result[2]).toEqual('c');
    expect(result[3]).toEqual('d');
  });

  it('decodeLine', () => {
    let result = csvConverter.decodeLine('a,b,c,d');
    expect(result).toEqual('a,b,c,d');

    result = csvConverter.decodeLine('あ,い,う,え', 'SHIFT_JIS');
    expect(result).toBeTruthy();
  });

  it('convertRow2Json', () => {
    let result = csvConverter.convertRow2Json(['a', 'b', 'c'], ['test', 100, 'test2']);
    expect(result.a).toEqual('test');
    expect(result.b).toEqual(100);
    expect(result.c).toEqual('test2');

    result = csvConverter.convertRow2Json(['a', 'b'], ['test', 100, 'test2']);
    expect(result).toEqual({});

    result = csvConverter.convertRow2Json(['a', 'b', 'c'], ['test', 100]);
    expect(result).toEqual({});
  });
});
