export interface IHttpException {
  code: number;

  message: string;

  timestamp: Date | string;

  method: string;

  path: string;
}