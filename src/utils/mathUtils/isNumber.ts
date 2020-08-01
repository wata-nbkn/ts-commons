export const isNumber = (num: any) => {
  if (num === null || num === undefined) {
    return false;
  } else if (typeof num === 'string') {
    const numStr = num.trim();
    if (numStr === '' || numStr === '-' || numStr === 'ー') {
      return false;
    }
  }
  if (num !== 0 && isNaN(num)) {
    return false;
  }
  return true;
};
