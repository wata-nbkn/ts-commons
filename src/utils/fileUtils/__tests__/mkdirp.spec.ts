import * as fs from 'fs';
import { sleep } from 'utils/commonUtils';
import { mkdirp } from '../mkdirp';

describe('mkdirp', () => {
  const dirPath = `./logs/testDir`;

  afterAll(() => {
    fs.rmdirSync(dirPath);
  });

  it('should make a new directory', async () => {
    await mkdirp(dirPath);
    await sleep(5000);

    const result = await fs.existsSync(dirPath);
    expect(result).toBeTruthy();
  });

  it('should do nothing when the directory already exists', async () => {
    await mkdirp('./logs');

    const result = await fs.existsSync('./logs');
    expect(result).toBeTruthy();
  });
});
