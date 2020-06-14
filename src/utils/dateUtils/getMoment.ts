import * as moment from 'moment';
import { DEFAULT_DATE_FORMAT } from 'consts';

export const getMoment = (date: string, currentFormat: string | null = null) => {
  if (currentFormat) {
    return moment(date, currentFormat);
  }
  return moment(date, DEFAULT_DATE_FORMAT);
};
