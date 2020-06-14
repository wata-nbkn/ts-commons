import { stringToEnum } from '../stringToEnum';

describe('stringToEnum', () => {
  it('should convert a string array to enum', async () => {
    enum expected {
      'AAA' = 'AAA',
      'BBB' = 'BBB',
    }
    const converted = stringToEnum(['AAA', 'BBB']);

    expect(converted.AAA).toEqual(expected.AAA);
    expect(converted.BBB).toEqual(expected.BBB);
  });
});
