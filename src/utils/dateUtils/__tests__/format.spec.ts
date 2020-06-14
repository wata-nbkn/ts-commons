import { format } from '../format';

describe('format', () => {
  it('should convert with the default date format', () => {
    const date = format('11/10/10', 'YY/MM/DD');
    expect(date).toEqual('2011/10/10');
  });

  it('should convert with the provided date format', () => {
    const date = format('11/10/10', 'YY/MM/DD', 'DD/MM/YY');
    expect(date).toEqual('10/10/11');
  });
});
