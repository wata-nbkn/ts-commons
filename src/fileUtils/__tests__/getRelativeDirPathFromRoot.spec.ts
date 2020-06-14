import { getRelativeDirPathFromRoot } from '../getRelativeDirPathFromRoot';

describe('getRelativeDirPathFromRoot', () => {
  it('should return the dir path from the root dir', () => {
    const path = getRelativeDirPathFromRoot(__filename);
    expect(path).toEqual('./fileUtils/__tests__');
  });
});
