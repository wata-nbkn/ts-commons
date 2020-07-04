import { DEFAULT_DATE_FORMAT } from 'consts';
import { getMoment } from './getMoment';

export const isValid = (date: string, dateformat = DEFAULT_DATE_FORMAT) => getMoment(date, dateformat).isValid();
