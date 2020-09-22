import { Value } from 'types';
import { isNumber } from './isNumber';

export type DivOptions = {
  decimalPlaces?: number;
  isFixed?: boolean;
  isTruncated?: boolean;
};

const DEFAULT_DECIMAL_PLACES = 2;
const DEFAULT_DIV_OPTIONS = {
  decimalPlaces: DEFAULT_DECIMAL_PLACES,
  isFixed: false,
  isTruncated: true,
};

const validValues = (valA: any, valB: any) => isNumber(valA) && isNumber(valB) && valB !== 0;

const handleDecimal = (val: number, options?: DivOptions) => {
  const { decimalPlaces = DEFAULT_DECIMAL_PLACES, isFixed, isTruncated } = options || DEFAULT_DIV_OPTIONS;
  if (isFixed) {
    return Number(val.toFixed(decimalPlaces));
  } else if (isTruncated) {
    const digit = Math.pow(10, decimalPlaces);
    return Math.floor(val * digit) / digit;
  }
  return val;
};

export const div = (valA: any, valB: any, options?: DivOptions): Value => {
  if (!validValues(valA, valB)) {
    return '-';
  }
  const val = valA / valB;
  return handleDecimal(val, options);
};

export const calcPercentage = (valA: any, valB: any, options?: DivOptions) => {
  if (!validValues(valA, valB)) {
    return '-';
  }
  const val = (valA / valB) * 100;
  return handleDecimal(val, options);
};

export const calcDiffPercentage = (valA: any, valB: any, options?: DivOptions) => {
  if (!validValues(valA, valB)) {
    return '-';
  }
  return calcPercentage(valA - valB, valB, options);
};
