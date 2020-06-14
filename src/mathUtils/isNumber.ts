export const isNumber = (num: any) => {
  if (num === null || num === undefined) {
    return false;
  } else if (num === '-' || num === 'ー') {
    return false;
  } else if (num !== 0 && isNaN(num)) {
    return false;
  }
  return true;
};
