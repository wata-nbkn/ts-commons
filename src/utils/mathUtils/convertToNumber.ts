import { Value } from 'types';
import { isNumber } from './isNumber';
import { getFirstMatched } from 'utils/commonUtils/getFirstMatched';

export const convertToNumber = (val: string) => {
  let converted: string | number | null = val;
  if (typeof converted === 'string') {
    converted = converted.replace(/,/g, '');
    converted = getFirstMatched(converted, /-?\d+/);
  }
  if (isNumber(converted)) {
    converted = Number(converted);
  } else {
    converted = '-';
  }
  return converted as Value;
};
