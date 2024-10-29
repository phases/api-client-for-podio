import { AuthToken } from '../../types/podio.type';
import Api from './Api';

export default class extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Podio get requests
   * @param url
   * @param data
   * @returns
   */
  get(url: string, data: any = {}) {
    const requestObj = {
      method: 'get',
      url,
      data,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Podio post requests
   * @param url
   * @param data
   * @returns
   */
  post(url: string, data: any = {}) {
    const requestObj = {
      method: 'post',
      url,
      data,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Podio put requests
   * @param url
   * @param data
   * @returns
   */
  put(url: string, data: any = {}) {
    const requestObj = {
      method: 'put',
      url,
      data,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Podio patch requests
   * @param url
   * @param data
   * @returns
   */
  patch(url: string, data: any = {}) {
    const requestObj = {
      method: 'patch',
      url,
      data,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Podio delete requests
   * @param url
   * @param data
   * @returns
   */
  delete(url: string, data: any = {}) {
    const requestObj = {
      method: 'delete',
      url,
      data,
    };
    return this._httpRequest(requestObj);
  }
}
