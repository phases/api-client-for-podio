import { SimpleObject } from '../../types/basic.type';
import { AuthToken } from '../../types/podio.type';
import { HttpResponse } from '../../types/http.type';
import Api from './Api';

export default class Status extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Get status message API
   *
   * @see https://developers.podio.com/doc/status/get-status-message-22337
   * @param {number} status_id
   * @returns {Promise<HttpResponse>}
   */
  get(status_id: Number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/status/${status_id}`,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Add status message API
   *
   * @see https://developers.podio.com/doc/status/add-new-status-message-22336
   * @param {number} space_id
   * @param {SimpleObject} attributes
   * @returns {Promise<HttpResponse>}
   */
  create(space_id: Number, attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/status/space/${space_id}`,
      data: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Status update API
   *
   * @see https://developers.podio.com/doc/status/update-a-status-message-22338
   * @param {number} status_id
   * @param {SimpleObject} attributes
   * @returns {Promise<HttpResponse>}
   */
  update(status_id: Number, attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'put',
      url: `/status/${status_id}`,
      data: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Delete status
   *
   * @see https://developers.podio.com/doc/status/delete-a-status-message-22339
   * @param {number} status_id
   * @returns {Promise<HttpResponse>}
   */
  delete(status_id: Number): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/status/${status_id}`,
    };

    return this._httpRequest(requestObj);
  }
}
