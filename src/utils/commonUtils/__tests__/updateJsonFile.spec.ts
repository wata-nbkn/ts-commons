import * as fs from 'fs';
import { updateJsonFile } from '../updateJsonFile';

describe('updateJsonFile', () => {
  const filePath = `${__dirname}/testData.json`;

  beforeAll(() => {
    const data = {
      test: 100,
    };
    fs.writeFileSync(filePath, JSON.stringify(data));
  });

  afterAll(() => {
    fs.writeFileSync(filePath, '');
  });

  it('should update json in file', () => {
    const newData = {
      test2: 200,
    };
    updateJsonFile(filePath, newData);

    const content = fs.readFileSync(filePath, 'utf-8');
    const result = JSON.parse(content);

    expect(result).toEqual({
      test: 100,
      test2: 200,
    });
  });
});
