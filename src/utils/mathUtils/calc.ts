import { Value } from 'types';
import { isNumber } from './isNumber';

export const div = (valA: any, valB: any): Value => {
  if (!isNumber(valA) || !isNumber(valB) || valB === 0) {
    return '-';
  }
  const val = valA / valB;
  return Number(val.toFixed(2));
};
