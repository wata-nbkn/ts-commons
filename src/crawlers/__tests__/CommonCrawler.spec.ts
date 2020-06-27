import CommonCrawler from '../CommonCrawler';

describe('CommonCrawler', () => {
  let crawler: CommonCrawler;

  beforeAll(async () => {
    crawler = new CommonCrawler();
    await crawler.init();
  });

  afterAll(async () => {
    await crawler.exit();
  });

  it('should get page body', async () => {
    const body = await crawler.getPageBody('https://www.google.com/');
    expect(body).toBeTruthy();
    expect(body).toMatch('<body');
  });

  it('should return null with an invalid page', async () => {
    const result = await crawler.getPageBody('http://localhost:1111');
    expect(result).toBeNull();
  });
});
