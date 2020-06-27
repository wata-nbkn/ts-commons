import CommonCrawler from '../CommonCrawler';

describe('CommonCrawler', () => {
  let crawler: CommonCrawler;

  beforeAll(async () => {
    crawler = new CommonCrawler();
    await crawler.init('https://www.google.com/');
  });

  afterAll(async () => {
    await crawler.exit();
  });

  it('should get page body', async () => {
    const body = await crawler.getPageBody();
    expect(body).toBeTruthy();
    expect(body).toMatch('<body');
  });
});
