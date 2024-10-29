import { AuthToken } from '../../types/podio.type';
import Api from './Api';
import { HttpResponse } from '../../types/http.type';
import {
  App as AppType,
  CreateApplication as CreateApplicationType,
  AppField as AppFieldType,
} from '../../types/app.type';
import { Application as ApplicationType } from '../../types/application.type';
import { AppDependency as AppDependencyType } from '../../types/app-dependency.type';
import { AppFieldUpdate as AppFieldUpdateType } from '../../types/update.type';

export default class Application extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Activates a deactivated app. This puts the app back in the app navigator and allows insertion of new items.
   * @see https://developers.podio.com/doc/applications/activate-app-43822
   * @param {number} app_id
   * @returns {Promise<HttpResponse<string>>}
   */
  activate(app_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/app/${app_id}/activate`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Create new application
   * @see https://developers.podio.com/doc/applications/add-new-app-22351
   * @param {number} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<CreateApplicationType>>}
   */

  create(attributes: any, silent: boolean = false, hook: boolean = true): Promise<HttpResponse<CreateApplicationType>> {
    const requestObj = {
      method: 'post',
      url: `/app/?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<CreateApplicationType>(requestObj);
  }

  /**
   * Adds a new field to an app
   * @see https://developers.podio.com/doc/applications/add-new-app-field-22354
   * @param {number} app_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<AppFieldType>>}
   */

  createField(app_id: number, attributes: any = {}): Promise<HttpResponse<AppFieldType>> {
    const requestObj = {
      method: 'post',
      url: `/app/${app_id}/field/`,
      data: attributes,
    };
    return this._httpRequest<AppFieldType>(requestObj);
  }

  /**
   * Deactivates the app with the given id. This removes the app from the app navigator, and disables insertion of new items.
   * @see https://developers.podio.com/doc/applications/deactivate-app-43821
   * @param {number} app_id
   * @returns
   */

  deactivate(app_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/app/${app_id}/deactivate`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Delete application
   * @see https://developers.podio.com/doc/applications/delete-app-43693
   * @param  {number} app_id
   * @param  {boolean} silent
   * @returns
   */
  delete(app_id: number, silent: boolean = false): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/item/${app_id}/?silent=${silent}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Deletes a field on an app.
   * @see https://developers.podio.com/doc/applications/delete-app-field-22355
   * @param {number}  app_id
   * @param {number | string}  field_id
   * @param {any} attributes
   * @returns
   */
  deleteField(app_id: number, field_id: number | string, attributes: any = {}): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/app/${app_id}/field/${field_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the apps for the active user.
   * @see https://developers.podio.com/doc/applications/get-all-apps-5902728
   * @param {any} attributes
   * @returns {Promise<HttpResponse<AppType[]>>}
   */
  getAll(attributes: any = {}): Promise<HttpResponse<AppType[]>> {
    const requestObj = {
      method: 'get',
      url: `/app/`,
      params: attributes,
    };
    return this._httpRequest<AppType[]>(requestObj);
  }

  /**
   * Get Podio application
   * @param {number} app_id - Podio app id
   * @returns
   */
  get(app_id: number): Promise<HttpResponse<ApplicationType>> {
    const requestObj = {
      method: 'get',
      url: `/app/${app_id}`,
    };
    return this._httpRequest<ApplicationType>(requestObj);
  }

  /**
   * Returns app based on the provided org_label, space_label and app_label.
   * @param {string} org_label
   * @param {string} space_label
   * @param {string} app_label
   * @returns
   */
  getByLabels(org_label: string, space_label: string, app_label: string): Promise<HttpResponse<ApplicationType>> {
    const requestObj = {
      method: 'get',
      url: `/app/org/${org_label}/space/${space_label}/${app_label}`,
    };
    return this._httpRequest<ApplicationType>(requestObj);
  }

  /**
   * Returns the apps that the given app depends on.
   * @param {number} app_id
   * @returns {Promise<HttpResponse<AppDependencyType>> }
   */
  dependencies(app_id: number): Promise<HttpResponse<AppDependencyType>> {
    const requestObj = {
      method: 'get',
      url: `/app/${app_id}/dependencies/`,
    };
    return this._httpRequest<AppDependencyType>(requestObj);
  }

  /**
   * Returns the app on the given space with the given URL label
   * @param {number} space_id
   * @param {number} url_label
   * @param {number} attributes
   * @returns {Promise<HttpResponse<ApplicationType>>}
   */
  getForUrl(space_id: number, url_label: string, attributes: any = {}): Promise<HttpResponse<ApplicationType>> {
    const requestObj = {
      method: 'get',
      url: `/app/space/${space_id}/${url_label}`,
      params: attributes,
    };
    return this._httpRequest<ApplicationType>(requestObj);
  }

  /**
   * Returns all the apps on the space that are visible.
   * @param {number} space_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<AppType[]>>}
   */
  getForSpace(space_id: number, attributes: any = {}): Promise<HttpResponse<AppType[]>> {
    const requestObj = {
      method: 'get',
      url: `/app/space/${space_id}/`,
      params: attributes,
    };
    return this._httpRequest<AppType[]>(requestObj);
  }

  /**
   * Returns the features that the given apps and optionally space includes.
   * @param {any} attributes
   * @returns {Promise<HttpResponse<string[]>>}
   */
  features(attributes: any = {}): Promise<HttpResponse<string[]>> {
    const requestObj = {
      method: 'get',
      url: `/app/features/`,
      params: attributes,
    };
    return this._httpRequest<string[]>(requestObj);
  }

  /**
   * Search for icons
   * @param {string} search
   * @returns
   */
  search(search: string): Promise<HttpResponse<number[]>> {
    const requestObj = {
      method: 'get',
      url: `/app/icon/search?query=${search}`,
    };
    return this._httpRequest<number[]>(requestObj);
  }

  /**
   * Returns all the active apps on the space along with their dependencies. The dependencies are only one level deep.
   * @param {number} space_id
   * @returns
   */
  dependenciesSpace(space_id: number): Promise<HttpResponse<AppDependencyType>> {
    const requestObj = {
      method: 'get',
      url: `/space/${space_id}/dependencies/`,
    };
    return this._httpRequest<AppDependencyType>(requestObj);
  }

  /**
   * Returns the top apps for the active user. This is the apps that the user have interacted with the most.
   * @param {any} attributes
   * @returns
   */
  getTop(attributes: any = {}): Promise<HttpResponse<AppType[]>> {
    const requestObj = {
      method: 'get',
      url: `/app/top/`,
      params: attributes,
    };
    return this._httpRequest<AppType[]>(requestObj);
  }

  /**
   * Returns the top apps for the user inside the given organization
   * @param {number} org_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<AppType[]>>}
   */
  getTopForOrg(org_id: number, attributes: any = {}): Promise<HttpResponse<AppType[]>> {
    const requestObj = {
      method: 'get',
      url: `/app/org/${org_id}/top/`,
      params: attributes,
    };
    return this._httpRequest<AppType[]>(requestObj);
  }

  /**
   * Installs the app with the given id on the space.
   * @param {number} app_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<CreateApplicationType>>}
   */
  install(app_id: number, attributes: any = {}): Promise<HttpResponse<CreateApplicationType>> {
    const requestObj = {
      method: 'post',
      url: `/app/${app_id}/install`,
      data: attributes,
    };
    return this._httpRequest<CreateApplicationType>(requestObj);
  }

  /**
   * Updates the configuration of an app field. The type of the field cannot be updated, only the configuration.
   * @param {number} app_id
   * @param {number} field_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<AppFieldUpdateType>>}
   */
  updateField(app_id: number, field_id: number, attributes: any = {}): Promise<HttpResponse<AppFieldUpdateType>> {
    const requestObj = {
      method: 'put',
      url: `/app/${app_id}/field/${field_id}`,
      data: attributes,
    };
    return this._httpRequest<AppFieldUpdateType>(requestObj);
  }

  /**
   * Update application
   * @param {number} app_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<ApplicationType>>}
   */
  update(
    app_id: number,
    attributes: any,
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<ApplicationType>> {
    const requestObj = {
      method: 'put',
      url: `/app/${app_id}/v2/?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<ApplicationType>(requestObj);
  }

  /**
   * Updates the app with a new description
   * @param {number} app_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns
   */
  updateDescription(
    app_id: number,
    attributes: any,
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/app/${app_id}/description?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Updates the order of the apps on the space. It should post all the apps from the space in the order required.
   * @param {number} space_id
   * @returns {Promise<HttpResponse<string>>}
   */
  updateOrder(space_id: number, attributes: any): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/app/space/${space_id}/order`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Updates the usage instructions for the app
   * @param {number} app_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param{boolean} hook
   * @returns
   */
  updateUsage(app_id: number, attributes: any, silent: boolean = false, hook: boolean = true): Promise<object | null> {
    const requestObj = {
      method: 'put',
      url: `/app/${app_id}/usage?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
