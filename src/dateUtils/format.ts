import * as moment from 'moment';
import { DEFAULT_DATE_FORMAT } from 'consts';

export const format = (date: string, currentFormat: string, newDateFormat: string | null = null) => {
  if (newDateFormat) {
    return moment(date, currentFormat).format(newDateFormat);
  }
  return moment(date, currentFormat).format(DEFAULT_DATE_FORMAT);
};
