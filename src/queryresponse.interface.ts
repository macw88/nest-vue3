export interface QueryResponse<T> {
  code: number;
  data: T;
  msg: string;
}