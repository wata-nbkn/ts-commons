import { getMoment } from './getMoment';

export const isValid = (date: string) => getMoment(date).isValid();
