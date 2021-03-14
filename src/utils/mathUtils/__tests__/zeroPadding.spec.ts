import { zeroPadding } from '../zeroPadding';

describe('zeroPadding', () => {
  it('should padding with zero', () => {
    const result = zeroPadding(3, 3);
    expect(result).toEqual('003');
  });

  it('should padding with zero with default', () => {
    const result = zeroPadding(3);
    expect(result).toEqual('03');
  });

  it('should not padding if enough length', () => {
    const result = zeroPadding(12);
    expect(result).toEqual('12');
  });

  it('should not padding if enough zero', () => {
    const result = zeroPadding('03');
    expect(result).toEqual('03');
  });
});
