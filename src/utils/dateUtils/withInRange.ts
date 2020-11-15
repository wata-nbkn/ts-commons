import { isBefore, isAfter } from './compareDates';

export const withInRange = (props: {
  targetDate: string;
  fromDate: string | null;
  toDate: string | null;
  dateformat?: string;
}) => {
  const { targetDate, fromDate, toDate, dateformat } = props;
  if (fromDate && isBefore(targetDate, fromDate, dateformat)) {
    return false;
  } else if (toDate && isAfter(targetDate, toDate, dateformat)) {
    return false;
  }
  return true;
};
