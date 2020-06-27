import { getPageByCurl } from '../getPageByCurl';

describe('getPageByCurl', () => {
  it('should return page', async () => {
    const result = await getPageByCurl('https://www.google.com/');
    expect(result).toBeTruthy();
  });

  it('should return null with an invalid link', async () => {
    const result = await getPageByCurl('https://localhost/');
    expect(result).toBeNull();
  });
});
