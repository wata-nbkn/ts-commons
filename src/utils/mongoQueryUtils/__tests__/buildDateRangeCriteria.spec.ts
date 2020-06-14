import { buildDateRangeCriteria, buildDateRangeCriteriaWithKey } from '../buildDateRangeCriteria';

describe('buildDateRangeCriteria', () => {
  it('should return the date range criteria', () => {
    const range = {
      from: '2019/12/01',
      to: '2019/12/02',
    };
    const expected = {
      $gte: '2019/12/01',
      $lte: '2019/12/02',
    };
    const result = buildDateRangeCriteria(range.from, range.to);
    expect(result).toEqual(expected);
  });

  it('should not return the range when an invalid "from" date is provided', () => {
    const range = {
      from: 'test',
      to: '2019/12/02',
    };

    const result = buildDateRangeCriteria(range.from, range.to);
    expect(result).toEqual(null);
  });

  it('should not return the range when an invalid "to" date is provided', () => {
    const range = {
      from: '2019/12/01',
      to: 'test',
    };
    const result = buildDateRangeCriteria(range.from, range.to);
    expect(result).toEqual(null);
  });

  it('should not return the range when an invalid values is provided', () => {
    const range = {
      from: '2019/12/02',
      to: '2019/12/01',
    };
    const result = buildDateRangeCriteria(range.from, range.to);
    expect(result).toEqual(null);
  });
});

describe('buildDateRangeCriteria', () => {
  it('buildDateRangeCriteriaWithKey', () => {
    const range = {
      from: '2019/12/01',
      to: '2019/12/02',
    };
    const expected = { 決済日: { $gte: '2019/12/01', $lte: '2019/12/02' } };
    const result = buildDateRangeCriteriaWithKey('決済日', range.from, range.to);
    expect(result).toEqual(expected);
  });
});
