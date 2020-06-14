import { DateRangeCriteria } from 'types';
import * as DateUtil from '../dateUtils';

export const buildDateRangeCriteria = (from: string, to: string) => {
  let query: any = {};
  if (!DateUtil.isValid(from)) {
    return null;
  }
  query = {
    $gte: from,
  };

  if (!DateUtil.isValid(to)) {
    return null;
  }
  query = {
    ...query,
    $lte: to,
  };

  if (DateUtil.isAfter(from, to)) {
    return null;
  }

  return query as DateRangeCriteria;
};

export const buildDateRangeCriteriaWithKey = (dateKey: string, from: string, to: string) => {
  const dateRange = buildDateRangeCriteria(from, to);
  if (!dateRange) {
    return null;
  }
  return { [dateKey]: dateRange };
};
