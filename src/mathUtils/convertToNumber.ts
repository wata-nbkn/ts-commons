import { Value } from 'types';
import { isNumber } from './isNumber';

export const convertToNumber = (val: string) => {
  let converted: string | number = val;
  if (typeof converted === 'string') {
    converted = converted.replace(/,/g, '');
  }
  if (isNumber(converted)) {
    converted = Number(converted);
  } else {
    converted = '-';
  }
  return converted as Value;
};
