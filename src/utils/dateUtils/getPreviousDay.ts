import { DAY_OF_WEEK, DEFAULT_DATE_FORMAT } from 'consts';
import { getMoment } from './getMoment';
import { getToday } from './getDates';

export const getPreviousDay = (dayOfWeek: DAY_OF_WEEK, baseDate?: string) => {
  const date = baseDate || getToday();
  const m = getMoment(date);
  return m.day(m.day() >= dayOfWeek ? dayOfWeek : dayOfWeek - 7).format(DEFAULT_DATE_FORMAT);
};
