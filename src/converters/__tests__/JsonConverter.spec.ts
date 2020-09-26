import JsonConverter from '../JsonConverter';

describe('JsonConverter', () => {
  let converter: JsonConverter;
  const testData = [
    {
      A: 0,
      B: -1,
      XXX: '"XX"',
      C: null,
    },
    {
      A: 'Y,Y',
      ZZZ: '"Z,Z"',
      B: undefined,
      C: [1, 2, '3'],
    },
  ];

  beforeAll(() => {
    converter = new JsonConverter();
  });

  describe('getJsonKeys', () => {
    it('should return empty when the empty array is provided', () => {
      const result = converter.getJsonKeys([]);
      expect(result).toEqual([]);
    });

    it('should return all keys', () => {
      const result = converter.getJsonKeys(testData);
      expect(result).toEqual(['A', 'B', 'XXX', 'C', 'ZZZ']);
    });
  });

  describe('escapeDelimiter', () => {
    it('should do nothing when the invalid value is provided', () => {
      const result = converter.escapeDelimiter(null as any);
      expect(result).toEqual(null);
    });

    it('should enclose the value if the delimiter is contained', () => {
      const result = converter.escapeDelimiter('a,b,c');
      expect(result).toEqual('"a,b,c"');
    });

    it('should escape the double quart if there are', () => {
      const result = converter.escapeDelimiter('"a",b,"c"');
      expect(result).toEqual('"\\"a\\",b,\\"c\\""');
    });
  });

  describe('convertJsonArrayToCsv', () => {
    it('should return empty when the empty array is provided', () => {
      const result = converter.convertJsonArrayToCsv([]);
      expect(result).toEqual('');
    });

    it('should return converted csv', () => {
      const result = converter.convertJsonArrayToCsv(testData);
      expect(result).toEqual('A,B,XXX,C,ZZZ\n' + '0,-1,"XX",,\n' + '"Y,Y",,,"1,2,3","\\"Z,Z\\""');
    });
  });
});
