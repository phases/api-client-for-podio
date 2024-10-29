import { SimpleObject } from './basic.type';

export type AppCredentials = {
  client_id: string;
  client_secret: string;
};

export type AuthToken = {
  access_token: string;
  expires_in: Number;
  token_type: string;
  scope: string;
  ref: SimpleObject;
  refresh_token: string;
};
