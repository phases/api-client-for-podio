import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttributes, Grants, UpdateAttributes } from '@customTypes/grant.type';
import { HttpResponse } from '@customTypes/http.type';
import { Count } from '@customTypes/item-count.type';

export default class Grant extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/grants/count-grants-on-object-19275931
   * Returns the count of grants on the given object
   * @param {string}ref_type
   * @param {number}ref_id
   * @returns
   */
  count(ref_type: String, ref_id: number): Promise<HttpResponse<Count>> {
    const requestObj = {
      method: 'get',
      url: `/grant/${ref_type}/${ref_id}/count`,
    };
    return this._httpRequest<Count>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/grants/create-grant-16168841
   * Create a grant on the given object to the given users.
   * @param {string}ref_type
   * @param {number}ref_id
   * @param {CreateAttributes}attributes
   * @returns
   */
  create(ref_type: String, ref_id: number, attributes: CreateAttributes) {
    const requestObj = {
      method: 'post',
      url: `/grant/${ref_type}/${ref_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   *@see https://developers.podio.com/doc/grants/get-grants-on-object-16491464
   * Returns the grants on the given object
   * @param {string}ref_type
   * @param {number}ref_id
   * @returns
   */
  getForObject(ref_type: String, ref_id: number): Promise<HttpResponse<Grants[]>> {
    const requestObj = {
      method: 'get',
      url: `/grant/${ref_type}/${ref_id}`,
    };
    return this._httpRequest<Grants[]>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/grants/get-grants-to-user-on-space-19389786
   * Returns all the grants for the user on the given space.
   * @param {number} space_id
   * @param {number}user_id
   * @returns
   */
  getForUserOnSpace(space_id: number, user_id: number): Promise<HttpResponse<Grants[]>> {
    const requestObj = {
      method: 'get',
      url: `/grant/space/${space_id}/user/${user_id}/`,
    };
    return this._httpRequest<Grants[]>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/grants/get-own-grant-information-16490748
   * Return the grant information for the active user, if any
   * @param {string}ref_type
   * @param {number}ref_id
   * @returns
   */
  getOwn(ref_type: String, ref_id: number): Promise<HttpResponse<Grants>> {
    const requestObj = {
      method: 'get',
      url: `/grant/${ref_type}/${ref_id}/own`,
    };
    return this._httpRequest<Grants>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/grants/get-own-grants-on-org-22330891
   * Returns all the grants for the current user on the given organization.
   * @param {number}org_id
   * @returns
   */
  getOwnOnOrg(org_id: number): Promise<HttpResponse<Grants[]>> {
    const requestObj = {
      method: 'get',
      url: `/grant/org/${org_id}/own/`,
    };
    return this._httpRequest<Grants[]>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/grants/remove-all-grants-181722473
   * Removes all grants on the object with the given type and id.
   * @param {string} ref_type
   * @param {number} ref_id
   * @returns
   */
  deleteOnObject(ref_type: String, ref_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/grant/${ref_type}/${ref_id}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/grants/remove-grant-16496711
   * Removes the grant from the given user on the given object
   * @param {string} ref_type
   * @param {number}ref_id
   * @param {number}user_id
   * @returns
   */
  delete(ref_type: String, ref_id: number, user_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/grant/${ref_type}/${ref_id}/${user_id}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/grants/update-grant-197401114
   * Updates the grant with a new access level.
   * @param {string}ref_type
   * @param {number}ref_id
   * @param {number}user_id
   * @param {UpdateAttributes}attributes
   * @returns
   */
  update(ref_type: String, ref_id: number, user_id: number, attributes: UpdateAttributes) {
    const requestObj = {
      method: 'put',
      url: `/grant/${ref_type}/${ref_id}/${user_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
