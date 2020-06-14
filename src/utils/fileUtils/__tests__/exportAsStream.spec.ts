import * as fs from 'fs';
import { sleep } from 'utils/commonUtils';
import { exportAsStream } from '../exportAsStream';

describe('exportAsStream', () => {
  const filePath = `./logs/exportAsStreamTest.txt`;

  afterAll(() => {
    fs.unlinkSync(filePath);
  });

  it('should output to a file', async () => {
    exportAsStream('aaa', filePath);
    exportAsStream('bbb', filePath);
    await sleep(1000);

    exportAsStream('ccc', filePath, { append: false });
    exportAsStream('ddd', filePath, { append: true });
    exportAsStream('eee', filePath, {
      callback: () => {
        expect(true).toBeTruthy();
      },
    });

    await sleep(5000);
    const result = await fs.readFileSync(filePath, 'utf-8');
    expect(result?.match('cccdddeee')).toBeTruthy();
  });
});
