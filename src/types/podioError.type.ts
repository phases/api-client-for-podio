import { SimpleObject } from './basic.type';

type Request = {
  url: string;
  query_string: '';
  method: string;
};

type PodioError = {
  error_parameters: SimpleObject;
  error_details: any;
  error_propegate: boolean;
  request: Request;
  error_description: string;
  error: string;
};

export type PodioErrorResponse = PodioError | undefined;
