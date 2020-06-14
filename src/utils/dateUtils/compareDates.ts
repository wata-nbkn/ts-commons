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

export const isBefore = (baseDate: string, compDate: string, currentFormat?: string) =>
  compareDate(baseDate, compDate, currentFormat) === -1;

export const isAfter = (baseDate: string, compDate: string, currentFormat?: string) =>
  compareDate(baseDate, compDate, currentFormat) === 1;

export const isSame = (baseDate: string, compDate: string, currentFormat?: string) =>
  compareDate(baseDate, compDate, currentFormat) === 0;

export const isSameOrBefore = (baseDate: string, compDate: string, currentFormat?: string) =>
  isSame(baseDate, compDate, currentFormat) || isBefore(baseDate, compDate, currentFormat);

export const isSameOrAfter = (baseDate: string, compDate: string, currentFormat?: string) =>
  isSame(baseDate, compDate, currentFormat) || isAfter(baseDate, compDate, currentFormat);
