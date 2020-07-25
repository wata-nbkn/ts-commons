import * as os from 'os';

export const isMac = () => os.type().toString() === 'Darwin';
