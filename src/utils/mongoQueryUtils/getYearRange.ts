import { DateRangeCriteria } from 'types';
import * as DateUtil from 'utils/dateUtils';

export const getYearRange = (dateRangeCriteria: DateRangeCriteria) => {
  let fromYear = null;
  const formDate = dateRangeCriteria ? dateRangeCriteria.$gte || dateRangeCriteria.$gt : null;
  if (formDate) {
    fromYear = DateUtil.getYear(formDate);
  }
  let toYear = null;
  const toDate = dateRangeCriteria ? dateRangeCriteria.$lte || dateRangeCriteria.$lt : null;
  if (toDate) {
    toYear = DateUtil.getYear(toDate);
  }
  return {
    from: fromYear,
    to: toYear,
  };
};
