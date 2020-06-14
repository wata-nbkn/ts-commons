export const getRand = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
