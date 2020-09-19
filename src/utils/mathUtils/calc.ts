import { Value } from 'types';
import { isNumber } from './isNumber';

export const div = (valA: any, valB: any): Value => {
  if (!isNumber(valA) || !isNumber(valB) || valB === 0) {
    return '-';
  }
  const val = valA / valB;
  return Number(val.toFixed(2));
};

export const calcPercentage = (valA: any, valB: any) => {
  if (!isNumber(valA) || !isNumber(valB) || valB === 0) {
    return '-';
  }
  const val = (valA / valB) * 100;
  return Number(val.toFixed(2));
};

export const calcDiffPercentage = (valA: any, valB: any) => {
  if (!isNumber(valA) || !isNumber(valB) || valB === 0) {
    return '-';
  }
  const val = ((valA - valB) / valB) * 100;
  return Number(val.toFixed(2));
};
