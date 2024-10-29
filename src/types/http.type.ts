import { SimpleObject } from './basic.type';

export type HttpRequest = {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  url: string;
  params?: string;
  data?: string;
  headers: SimpleObject;
};

export type HttpResponse<ResponseType = any> = {
  response: SimpleObject;
  data: ResponseType;
  headers: SimpleObject;
  status: Number;
  statusText: string;
  request: SimpleObject;
};
