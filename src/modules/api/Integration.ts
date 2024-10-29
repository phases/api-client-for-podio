import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttributes, UpdateAttributes, UpdateMappingAttributes } from '@customTypes/integration.type';

export default class Integration extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Creates a new integration on the app
   * @param app_id
   * @param attributes
   * @returns
   */
  create(app_id: Number, attributes: CreateAttributes) {
    const requestObj = {
      method: 'post',
      url: `/integration/${app_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Deletes the integration from the given app.
   * @param app_id
   * @returns
   */
  delete(app_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/integration/${app_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the fields available from the configuration.
   * @param app_id
   * @returns
   */
  getFields(app_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/integration/${app_id}/field/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the integration with the given id.
   * @param app_id
   * @returns
   */
  get(app_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/integration/${app_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the configuration of the integration.
   * The configuration depends on the type of integration.
   * @param app_id
   * @param attributes
   * @returns
   */
  update(app_id: Number, attributes: UpdateAttributes) {
    const requestObj = {
      method: 'put',
      url: `/integration/${app_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the mapping between the fields of the app and the fields available from the integration.
   * @param app_id
   * @param attributes
   * @returns
   */
  updateMapping(app_id: Number, attributes: UpdateMappingAttributes) {
    const requestObj = {
      method: 'put',
      url: `/integration/${app_id}/mapping`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
