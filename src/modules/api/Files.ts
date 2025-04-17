import { HttpResponse } from '../../types/http.type';
import { AuthToken } from '../../types/podio.type';
import { SimpleObject } from '../../types/basic.type';
import Api from './Api';

export default class Files extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Get all files
   *
   * @see https://developers.podio.com/doc/files/get-files-4497983
   * @param {SimpleObject} attributes
   * @returns {Promise<HttpResponse>}
   */
  getAll(attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: '/file',
      params: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Get files on App
   *
   * @see https://developers.podio.com/doc/files/get-files-on-app-22472
   * @param {number} app_id
   * @param {SimpleObject} attributes
   * @returns {Promise<HttpResponse>}
   */
  getForApp(app_id: Number, attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/file/app/${app_id}`,
      params: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Get files on Space
   *
   * @see https://developers.podio.com/doc/files/get-files-on-space-22471
   * @param {number} app_id
   * @param {SimpleObject} attributes
   * @returns {Promise<HttpResponse>}
   */
  getForSpace(spaceId: Number, attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/file/space/${spaceId}`,
      params: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Attach file API
   *
   * @see https://developers.podio.com/doc/files/attach-file-22518
   * @param {number} file_id
   * @param {SimpleObject} attributes
   * @returns {Promise<HttpResponse>}
   */
  attach(file_id: Number, attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/file/${file_id}/attach`,
      data: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * File copy API
   *
   * @see https://developers.podio.com/doc/files/copy-file-89977
   * @param {number} file_id
   * @returns {Promise<HttpResponse>}
   */
  copy(file_id: Number): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/file/${file_id}/copy`,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Delete files API
   *
   * @see https://developers.podio.com/doc/files/delete-file-22453
   * @param {number} file_id
   * @returns {Promise<HttpResponse>}
   */
  delete(file_id: Number): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/file/${file_id}`,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Get file
   *
   * @see https://developers.podio.com/doc/files/get-file-22451
   * @param {number} file_id
   * @returns {Promise<HttpResponse>}
   */
  get(file_id: Number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/file/${file_id}`,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * File replace API
   *
   * @param {number} file_id
   * @returns {Promise<HttpResponse>}
   */
  replace(file_id: Number, attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/file/${file_id}/replace`,
      data: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Update file description API
   *
   * @param {number} file_id
   * @param {SimpleObject} attributes
   * @returns
   */
  update(file_id: Number, attributes: SimpleObject): Promise<HttpResponse> {
    const requestObj = {
      method: 'put',
      url: `/file/${file_id}`,
      data: attributes,
    };

    return this._httpRequest(requestObj);
  }

  /**
   * Upload a file to Podio
   * 
   * @param {SimpleObject} attributes Object containing filename and source (file blob/buffer)
   * @returns {Promise<HttpResponse>}
   */
  create(attributes: SimpleObject): Promise<HttpResponse> {
    const formData = new FormData();
    formData.append("filename", attributes.filename);
    formData.append("source", attributes.source);

    const requestObj = {
      method: 'post',
      url: '/file/',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    return this._httpRequest(requestObj);
  }
}
