import { HttpResponse } from '../../types/http.type';
import { AuthToken } from '../../types/podio.type';
import HttpClient from '../../http/HttpClient';

class Api {
  /**
   *
   * @type {AuthToken} auth
   */
  auth: AuthToken;

  /**
   * Authorization header
   * This will be same for all requests
   * @type {object}
   */
  headers: object;

  /**
   *
   * @param {} auth
   */
  constructor(auth: AuthToken) {
    this.auth = auth;

    /**
     * Set the header
     */
    this.headers = { Authorization: `OAuth2 ${auth.access_token}` };
  }

  /**
   * Handling the request object and authorization header to be send with the API
   * @param requestParam
   * @param requestObj
   * @returns
   */
  protected async _httpRequest<ResponseType = any>(requestObj: any): Promise<HttpResponse<ResponseType>> {
    return await new HttpClient({ ...requestObj, headers: this.headers }).call();
  }
}

export default Api;
