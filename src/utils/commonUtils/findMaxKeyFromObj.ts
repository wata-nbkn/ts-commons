export const findMaxKeyFromObj = (obj: Object) => {
  const maxValue = Math.max.apply(null, Object.values(obj));
  const maxKey = Object.keys(obj).find((key) => obj[key] === maxValue);
  return maxKey;
};
