import { getRand } from 'utils/mathUtils';

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function randomSleep(minSec = 1, maxSec = 10) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, getRand(minSec * 1000, maxSec * 1000));
  });
}
