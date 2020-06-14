export type Value = number | '-';

export interface ErrorResponse {
  message: string;
  detail?: string;
}

export interface MongoDocument {
  _id: string;
  date?: string;
  [key: string]: any;
}

export interface DateRange {
  from?: string;
  to?: string;
}

export interface DateRangeCriteria {
  $gte?: string;
  $lte?: string;
  $gt?: string;
  $lt?: string;
}
