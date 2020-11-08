import { Value } from 'types';
import { isNumber } from './isNumber';
import { getFirstMatched } from 'utils/commonUtils/getFirstMatched';

export const convertToNumber = (val: string | number | undefined | null) => {
  let converted: string | number | undefined | null = val;
  if (typeof converted === 'string') {
    converted = converted.replace(/,/g, '');
    converted = getFirstMatched(converted, /-?\d+(\.\d+)?/);
  }
  if (isNumber(converted)) {
    converted = Number(converted);
  } else {
    converted = '-';
  }
  return converted as Value;
};
