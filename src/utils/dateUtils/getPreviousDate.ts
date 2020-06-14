import { DEFAULT_DATE_FORMAT } from 'consts';
import { getMoment } from './getMoment';

export const getPreviousDate = (
  date: string,
  options?: { before?: number; currentDateFormat?: string; newDateFormat?: string }
) => {
  const { before = 1, currentDateFormat = undefined, newDateFormat = undefined } = options || {};
  return getMoment(date, currentDateFormat)
    .subtract(before, 'days')
    .format(newDateFormat || DEFAULT_DATE_FORMAT);
};
