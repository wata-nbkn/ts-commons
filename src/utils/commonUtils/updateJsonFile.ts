import * as fs from 'fs';
import { loadJsonFile } from './loadJsonFile';

export const updateJsonFile = (filePath: string, newData: object) => {
  let data = loadJsonFile(filePath) || {};
  data = {
    ...data,
    ...newData,
  };
  fs.writeFileSync(filePath, JSON.stringify(data));
};
