import * as moment from 'moment';
import { DEFAULT_DATE_FORMAT } from 'consts';
import { getMoment } from './getMoment';

export const getToday = (format = DEFAULT_DATE_FORMAT) => moment().format(format);

export const getCurrentYear = () => moment().year();

export const getCurrentMonth = () => moment().month() + 1;

export const getYear = (date: string, currentFormat: string | null = null) => getMoment(date, currentFormat).year();

export const getMonth = (date: string, currentFormat: string | null = null) =>
  getMoment(date, currentFormat).month() + 1;
