import { loadJsonFile } from '../loadJsonFile';

describe('loadJsonFile', () => {
  const filePath = `${__dirname}/testData.json`;

  it('should return json', () => {
    const result = loadJsonFile(filePath);
    expect(result).toEqual({
      test: 100,
    });
  });

  it('should return null if invalid path is provided', () => {
    const result = loadJsonFile('hoge');
    expect(result).toBeNull();
  });
});
