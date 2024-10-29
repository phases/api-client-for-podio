import HttpClient from '../http/HttpClient';
import { PodioRequest } from '../types/request.type';
import { AppCredentials, AuthToken } from '../types/podio.type';
import { generateQueryString } from '../utils/index';
import { SimpleObject } from '../types/basic.type';

class Authentication {
  appCredentials: AppCredentials;

  private access_token: string = '';
  private refresh_token: string = '';
  private expires_in: Number = 0;
  private token_type: string = '';
  private scope: string = '';
  private ref: SimpleObject = {};

  /**
   *
   * @param AppCredentials
   */
  constructor(appCredentials: AppCredentials) {
    this.appCredentials = appCredentials;
  }

  /**
   * Authentication response
   *
   * @returns AuthToken
   */
  public AuthToken(): AuthToken {
    const { access_token, refresh_token, scope, token_type, ref, expires_in } = this;
    return {
      access_token,
      refresh_token,
      scope,
      token_type,
      ref,
      expires_in,
    };
  }

  /**
   * Podio app authentication flow
   * @param app_id
   * @param app_token
   * @returns
   */
  async appAuth(app_id: Number, app_token: string): Promise<AuthToken> {
    /**
     * Define request data object
     */
    const requestData: PodioRequest = {
      grant_type: 'app',
      app_id,
      app_token,
      ...this.appCredentials,
    };

    /**
     * Handle request and return with the response
     */
    let { data } = await this._httpRequest(requestData);
    let AuthToken: AuthToken = data as AuthToken;

    this._updateAuthToken(AuthToken);
    return this.AuthToken();
  }

  /**
   * Podio username & password flow
   * @param username
   * @param password
   * @returns
   */
  async passwordAuth(username: string, password: string): Promise<AuthToken> {
    /**
     * Define request data object
     */
    const requestObj: PodioRequest = {
      grant_type: 'password',
      username,
      password,
      ...this.appCredentials,
    };

    /**
     * Handle request and return with the response
     */
    let { data } = await this._httpRequest(requestObj);
    let AuthToken: AuthToken = data as AuthToken;

    this._updateAuthToken(AuthToken);
    return this.AuthToken();
  }

  /**
   * Podio server side flow
   *
   *
   * First, perform the server side flow and get the authorization code from call back
   * use the code to complete the server side authentication flow
   * @param code
   * @param redirect_uri
   * @returns
   */
  async authenticateWithAuthCode(code: string, redirect_uri: string): Promise<AuthToken> {
    /**
     * Define request data object
     */
    const requestObj: PodioRequest = {
      grant_type: 'authorization_code',
      code,
      redirect_uri,
      ...this.appCredentials,
    };

    /**
     * Handle request and return with the response
     */
    let { data } = await this._httpRequest(requestObj);
    let AuthToken: AuthToken = data as AuthToken;

    this._updateAuthToken(AuthToken);
    return this.AuthToken();
  }

  /**
   * Re issue the access token using the refresh
   * @param refresh_token
   * @returns
   */
  async authenticateWithRefreshToken(refresh_token: string): Promise<AuthToken> {
    /**
     * Define request data object
     */
    const requestObj: PodioRequest = {
      grant_type: 'refresh_token',
      refresh_token,
      ...this.appCredentials,
    };

    /**
     * Handle request and return with the response
     */
    let { data } = await this._httpRequest(requestObj);
    let AuthToken: AuthToken = data as AuthToken;

    this._updateAuthToken(AuthToken);
    return this.AuthToken();
  }

  /**
   * Update authentication response to the properties
   *
   * @param {AuthToken} response
   */
  private _updateAuthToken(response: AuthToken): void {
    this.access_token = response.access_token;
    this.refresh_token = response.refresh_token;
    this.scope = response.scope;
    this.token_type = response.token_type;
    this.ref = response.ref;
    this.expires_in = response.expires_in;
  }

  /**
   * Initialize HttpClient class with the request config
   * Send the http request and return the response
   * @param data
   * @returns
   */
  async _httpRequest(data: PodioRequest) {
    /**
     *
     * @type {string} queryData
     */
    let queryData: string = generateQueryString(data);

    return await new HttpClient({
      method: 'post',
      url: '/oauth/token',
      data: queryData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).call();
  }
}

export default Authentication;
