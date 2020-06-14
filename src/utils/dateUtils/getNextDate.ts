import { DEFAULT_DATE_FORMAT } from 'consts';
import { getMoment } from './getMoment';

export const getNextDate = (
  date: string,
  options?: { next?: number; currentDateFormat?: string; newDateFormat?: string }
) => {
  const { next = 1, currentDateFormat = undefined, newDateFormat = undefined } = options || {};
  return getMoment(date, currentDateFormat)
    .add(next, 'days')
    .format(newDateFormat || DEFAULT_DATE_FORMAT);
};
