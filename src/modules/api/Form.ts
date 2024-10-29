import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttributes } from '@customTypes/form.type';
import { HttpResponse } from '@customTypes/http.type';
import { Form as FormType } from '../../types/form.type';
import { promises } from 'dns';

export default class Form extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/forms/activate-form-1107439
   * Enables the form with the given id. Only disabled forms can be enabled, which makes it once again possible to create items in the app using the form.
   * @param {number}form_id
   * @returns
   */
  activate(form_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/form/${form_id}/activate`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/forms/create-form-53803
   * Creates a new form on the app.
   * @param {number}app_id
   * @param attributes
   * @returns
   */
  create(app_id: number, attributes: CreateAttributes): Promise<HttpResponse<FormType>> {
    const requestObj = {
      method: 'post',
      url: `/form/app/${app_id}/`,
      data: attributes,
    };
    return this._httpRequest<FormType>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/forms/deactivate-form-1107378
   * Disables the form with given id. This makes it impossible to create new items using the form.
   * Instead, a message about the form being disabled is shown.
   * @param {number} form_id
   * @returns
   */
  deactivate(form_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/form/${form_id}/deactivate`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Deletes the form with the given id.
   * @param form_id
   * @returns
   */
  delete(form_id: number): Promise<HttpResponse<String>> {
    const requestObj = {
      method: 'delete',
      url: `/form/${form_id}`,
    };
    return this._httpRequest<String>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/forms/get-form-53754
   * Returns the form with the given id.
   * @param {number} form_id
   * @returns
   */
  get(form_id: number): Promise<HttpResponse<FormType>> {
    const requestObj = {
      method: 'get',
      url: `/form/${form_id}`,
    };
    return this._httpRequest<FormType>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/forms/get-forms-53771
   * Returns all the active forms on the given app.
   * @param {number} app_id
   * @returns
   */
  getAll(app_id: number): Promise<HttpResponse<FormType[]>> {
    const requestObj = {
      method: 'get',
      url: `/form/app/${app_id}/`,
    };
    return this._httpRequest<FormType[]>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/forms/update-form-53808
   * Updates the form with new settings, domains, fields, etc.
   * @param {number}form_id
   * @param attributes
   * @returns
   */
  update(form_id: number, attributes: CreateAttributes): Promise<HttpResponse<String>> {
    const requestObj = {
      method: 'put',
      url: `/form/${form_id}`,
      data: attributes,
    };
    return this._httpRequest<String>(requestObj);
  }
}
