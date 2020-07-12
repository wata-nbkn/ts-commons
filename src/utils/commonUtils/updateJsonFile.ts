import * as fs from 'fs';

export const updateJsonFile = (filePath: string, newData: object) => {
  let data = {};
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(content);
  }
  data = {
    ...data,
    ...newData,
  };
  fs.writeFileSync(filePath, JSON.stringify(data));
};
