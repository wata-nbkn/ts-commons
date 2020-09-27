import { loadFileAsArray } from '../loadFileAsArray';

describe('loadFileAsArray', () => {
  const filePath = `${__dirname}/testFile.txt`;

  it('should return as array with converting', () => {
    const result = loadFileAsArray(filePath);
    expect(result).toEqual([1, 2, 3, 'test', 'test2']);
  });

  it('should return as array with converting with options', () => {
    const result = loadFileAsArray(filePath, {
      shouldRemoveDup: false,
      readAsNumber: false,
    });
    expect(result).toEqual(['1', '2', '3', 'test', 'test2', '1', '2']);
  });

  it('should return null if invalid path is provided', () => {
    const result = loadFileAsArray('hoge');
    expect(result).toBeNull();
  });
});
