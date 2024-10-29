import { AuthToken } from '../../types/podio.type';
import { HttpResponse } from '../../types/http.type';
import Api from './Api';

export default class Authorization extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   *
   * @see https://developers.podio.com/doc/oauth-authorization/get-scope-342360687
   * @returns {Promise<HttpResponse>}
   */
  getScope(): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/oauth/scope`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   *
   * @see https://developers.podio.com/doc/oauth-authorization/invalidate-grant-7997965
   * @returns {Promise<HttpResponse>}
   */
  invalidateGrant(): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/oauth/grant/invalidate`,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Invalidate all currently logined tokens of the user.
   *
   * @see https://developers.podio.com/doc/oauth-authorization/invalidate-tokens-7997943
   * @returns {Promise<HttpResponse>}
   */
  invalidateAllTokens(): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/oauth/token/invalidate`,
    };

    return this._httpRequest(requestObj);
  }
}
