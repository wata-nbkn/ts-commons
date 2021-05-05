export const isJson = (obj: any) => {
  if (!obj) {
    return false;
  } else if (Array.isArray(obj)) {
    return false;
  } else if (typeof obj === 'object') {
    return true;
  }
  return false;
};
