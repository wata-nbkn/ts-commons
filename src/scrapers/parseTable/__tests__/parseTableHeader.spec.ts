import * as cheerio from 'cheerio';
import { parseTableHeader } from '../parseTableHeader';
import { basicTable, theadWithTd, noTheadWithTh, noTheadWithTd, invalidTable } from './testData';

describe('parseTableHeader', () => {
  it('should return headers with thead + th', () => {
    const $ = cheerio.load(basicTable);
    const table = $('table');

    const result = parseTableHeader($, table);
    expect(result).toEqual(['head1', 'head2']);
  });

  it('should return headers with thead + td', () => {
    const $ = cheerio.load(theadWithTd);
    const table = $('table');

    const result = parseTableHeader($, table);
    expect(result).toEqual(['head1', 'head2']);
  });

  it('should return headers with no thead + th', () => {
    const $ = cheerio.load(noTheadWithTh);
    const table = $('table');

    const result = parseTableHeader($, table);
    expect(result).toEqual(['head1', 'head2']);
  });

  it('should return headers with no thead + td', () => {
    const $ = cheerio.load(noTheadWithTd);
    const table = $('table');

    const result = parseTableHeader($, table);
    expect(result).toEqual([]);
  });

  it('should return empty array with an invalid table', () => {
    const $ = cheerio.load(invalidTable);
    const table = $('table');

    const result = parseTableHeader($, table);
    expect(result).toEqual([]);
  });
});
