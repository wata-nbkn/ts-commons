export const zeroPadding = (num: number | string, length = 2) => (Array(length).join('0') + num).slice(-length);
