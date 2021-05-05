import { isJson } from './isJson';

export const flattenJson = (obj: { [key: string]: any }) => {
  let newObj: object = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (isJson(value)) {
      newObj = {
        ...newObj,
        ...value,
      };
    } else {
      newObj = {
        ...newObj,
        [key]: value,
      };
    }
  });

  Object.entries(newObj).forEach(([key, value]) => {
    if (isJson(value)) {
      newObj = {
        ...newObj,
        ...flattenJson(value),
      };
      delete newObj[key];
    }
  });

  return newObj;
};
