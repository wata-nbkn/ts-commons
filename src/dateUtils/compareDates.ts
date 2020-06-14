import * as moment from 'moment';
import { getMoment } from './getMoment';

const compareDate = (baseDate: string, compDate: string, currentFormat?: string) => {
  const momentBase = getMoment(baseDate, currentFormat);
  const momentComp = getMoment(compDate, currentFormat);
  if (moment(momentBase).isBefore(momentComp)) {
    // baseDate < compDate
    return -1;
  } else if (moment(momentBase).isAfter(momentComp)) {
    // baseDate > compDate
    return 1;
  }
  // baseDate == compDate
  return 0;
};

export const isBeforeDate = (baseDate: string, compDate: string, currentFormat?: string) =>
  compareDate(baseDate, compDate, currentFormat) === -1;

export const isAfterDate = (baseDate: string, compDate: string, currentFormat?: string) =>
  compareDate(baseDate, compDate, currentFormat) === 1;

export const isSameDate = (baseDate: string, compDate: string, currentFormat?: string) =>
  compareDate(baseDate, compDate, currentFormat) === 0;

export const isSameOrBeforeDate = (baseDate: string, compDate: string, currentFormat?: string) =>
  isSameDate(baseDate, compDate, currentFormat) || isBeforeDate(baseDate, compDate, currentFormat);

export const isSameOrAfterDate = (baseDate: string, compDate: string, currentFormat?: string) =>
  isSameDate(baseDate, compDate, currentFormat) || isAfterDate(baseDate, compDate, currentFormat);
