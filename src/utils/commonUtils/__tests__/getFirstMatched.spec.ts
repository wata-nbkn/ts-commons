import { getFirstMatched } from '../getFirstMatched';

describe('getFirstMatched', () => {
  it('should return matched value', () => {
    const result = getFirstMatched('AAA(BBB)', /\(.*\)/);
    expect(result).toEqual('(BBB)');
  });

  it('should return null if no matched', () => {
    const result = getFirstMatched('AAA(BBB)', /<.*>/);
    expect(result).toBeNull();
  });
});
