import * as puppeteer from 'puppeteer';
import { Logger } from 'log4js';
import { CommonUtil } from 'utils';

export class CommonCrawler {
  private logger: Logger;
  private browser: puppeteer.Browser;
  private page: puppeteer.Page;
  private url: string;

  constructor() {
    this.logger = CommonUtil.getLogger(__filename);
  }

  public async init(url: string, headless = true) {
    this.logger.debug(`Initialize: url = ${url}`);
    this.url = url;
    this.browser = await puppeteer.launch({ headless });
    this.page = await this.browser.newPage();
  }

  public async exit() {
    await this.browser.close();
    this.logger.debug('Exit');
  }

  public async getPageBody() {
    this.logger.debug('Enter:: getPageBody');

    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    await this.page.waitFor(2000);

    let body = null;
    try {
      body = await this.page.evaluate(() => document.body.outerHTML);
    } catch (e) {
      this.logger.error(e);
    }

    this.logger.debug('Exit:: getPageBody');
    return body;
  }
}

export default CommonCrawler;
