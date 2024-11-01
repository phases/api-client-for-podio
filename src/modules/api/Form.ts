import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttributes } from '@customTypes/form.type';

export default class Form extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Enables the form with the given id. Only disabled forms can be enabled, which makes it once again possible to create items in the app using the form.
   * @param form_id
   * @returns
   */
  activate(form_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/form/${form_id}/activate`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Creates a new form on the app.
   * @param app_id
   * @param attributes
   * @returns
   */
  create(app_id: Number, attributes: CreateAttributes) {
    const requestObj = {
      method: 'post',
      url: `/form/app/${app_id}/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Disables the form with given id. This makes it impossible to create new items using the form.
   * Instead, a message about the form being disabled is shown.
   * @param form_id
   * @returns
   */
  deactivate(form_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/form/${form_id}/deactivate`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Deletes the form with the given id.
   * @param form_id
   * @returns
   */
  delete(form_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/form/${form_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the form with the given id.
   * @param form_id
   * @returns
   */
  get(form_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/form/${form_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the active forms on the given app.
   * @param app_id
   * @returns
   */
  getAll(app_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/form/app/${app_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the form with new settings, domains, fields, etc.
   * @param form_id
   * @param attributes
   * @returns
   */
  update(form_id: Number, attributes: CreateAttributes) {
    const requestObj = {
      method: 'put',
      url: `/form/${form_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
