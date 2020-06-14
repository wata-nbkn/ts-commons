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
