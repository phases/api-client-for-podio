export type PodioRequest = {
  client_id: string;
  client_secret: string;
  grant_type: 'app' | 'authorization_code' | 'password' | 'refresh_token';
  code?: string;
  refresh_token?: string;
  redirect_uri?: string;
  app_id?: Number;
  app_token?: string;
  username?: string;
  password?: string;
};
