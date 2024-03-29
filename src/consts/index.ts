import * as dotenv from 'dotenv';
dotenv.config();

export const DEFAULT_DATE_FORMAT = process.env.DEFAULT_DATE_FORMAT || 'YYYY/MM/DD';

export enum DAY_OF_WEEK {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  STA,
}

export const INTERNAL_LOGDIR_PATH = 'modules/ts-commons';
