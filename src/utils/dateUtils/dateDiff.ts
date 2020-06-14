import { getMoment } from './getMoment';

export const dateDiff = (baseDate: string, compDate: string, currentFormat?: string) => {
  const momentBase = getMoment(baseDate, currentFormat);
  const momentComp = getMoment(compDate, currentFormat);
  return momentComp.diff(momentBase, 'days');
};
