export const withInRange = (targetValue: number, fromValue: number | null, toValue: number | null) => {
  if (fromValue && targetValue < fromValue) {
    return false;
  } else if (toValue && toValue < targetValue) {
    return false;
  }
  return true;
};
