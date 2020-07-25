import { isMac } from '../isMac';

describe('isMac', () => {
  it('should return the flag', () => {
    const result = isMac();
    expect(result).not.toBeNull();
  });
});
