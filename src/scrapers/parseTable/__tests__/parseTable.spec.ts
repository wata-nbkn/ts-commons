import { parseTable } from '../parseTable';
import { basicTable, theadWithTd, noTheadWithTh, noTheadWithTd, invalidTable } from './testData';

describe('parseTable', () => {
  it('should parse table with thead + th', () => {
    const result = parseTable(basicTable);
    expect(result.headers).toEqual(['head1', 'head2']);
    expect(result.rows[0]).toEqual(['val11', 'val12']);
    expect(result.rows[1]).toEqual(['val21', 'val22']);
  });

  it('should parse table with thead + td', () => {
    const result = parseTable(theadWithTd);
    expect(result.headers).toEqual(['head1', 'head2']);
    expect(result.rows[0]).toEqual(['val11', 'val12']);
    expect(result.rows[1]).toEqual(['val21', 'val22']);
  });

  it('should parse table with no thead + th', () => {
    const result = parseTable(noTheadWithTh);
    expect(result.headers).toEqual(['head1', 'head2']);
    expect(result.rows[0]).toEqual(['val11', 'val12']);
    expect(result.rows[1]).toEqual(['val21', 'val22']);
  });

  it('should parse table with no thead + td', () => {
    const result = parseTable(noTheadWithTd);
    expect(result.headers).toEqual(['head1', 'head2']);
    expect(result.rows[0]).toEqual(['val11', 'val12']);
    expect(result.rows[1]).toEqual(['val21', 'val22']);
  });

  it('should return empty array with an invalid table', () => {
    const result = parseTable(invalidTable);
    expect(result.headers).toEqual([]);
    expect(result.rows).toEqual([]);
  });

  describe('with no header option', () => {
    it('should parse table with thead + th', () => {
      const result = parseTable(basicTable, { firstLineAsHeader: false });
      expect(result.headers).toEqual([]);
      expect(result.rows[0]).toEqual(['head1', 'head2']);
      expect(result.rows[1]).toEqual(['val11', 'val12']);
      expect(result.rows[2]).toEqual(['val21', 'val22']);
    });

    it('should parse table with thead + td', () => {
      const result = parseTable(theadWithTd, { firstLineAsHeader: false });
      expect(result.headers).toEqual([]);
      expect(result.rows[0]).toEqual(['head1', 'head2']);
      expect(result.rows[1]).toEqual(['val11', 'val12']);
      expect(result.rows[2]).toEqual(['val21', 'val22']);
    });

    it('should parse table with no thead + th', () => {
      const result = parseTable(noTheadWithTh, { firstLineAsHeader: false });
      expect(result.headers).toEqual([]);
      expect(result.rows[0]).toEqual(['head1', 'head2']);
      expect(result.rows[1]).toEqual(['val11', 'val12']);
      expect(result.rows[2]).toEqual(['val21', 'val22']);
    });

    it('should parse table with no thead + td', () => {
      const result = parseTable(noTheadWithTd, { firstLineAsHeader: false });
      expect(result.headers).toEqual([]);
      expect(result.rows[0]).toEqual(['head1', 'head2']);
      expect(result.rows[1]).toEqual(['val11', 'val12']);
      expect(result.rows[2]).toEqual(['val21', 'val22']);
    });
  });
});
