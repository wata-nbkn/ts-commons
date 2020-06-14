import { DEFAULT_DATE_FORMAT, DAY_OF_WEEK } from 'consts';
import { getMoment } from './getMoment';
import { getNextDate } from './getNextDate';
import { format } from './format';

export const getNextDateByDayOfWeek = (
  baseDate: string,
  dayOfWeek: DAY_OF_WEEK,
  options?: { currentDateFormat?: string; newDateFormat?: string }
) => {
  const { currentDateFormat = DEFAULT_DATE_FORMAT, newDateFormat = undefined } = options || {};
  let date = getNextDate(baseDate, { currentDateFormat });
  let weekday = getMoment(date).day();
  while (weekday !== dayOfWeek) {
    date = getNextDate(date);
    weekday = getMoment(date).day();
  }
  return format(date, DEFAULT_DATE_FORMAT, newDateFormat);
};
