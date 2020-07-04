export const getFirstMatched = (str: string, regexp: RegExp) => {
  const matched = str.match(regexp);
  let result = null;
  if (matched && matched[0]) {
    result = matched[0];
  }
  return result;
};
