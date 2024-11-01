import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttributes, UpdateAttributes } from '@customTypes/grant.type';

export default class Grant extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Returns the count of grants on the given object
   * @param ref_type
   * @param ref_id
   * @returns
   */
  count(ref_type: String, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/grant/${ref_type}/${ref_id}/count`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Create a grant on the given object to the given users.
   * @param ref_type
   * @param ref_id
   * @param attributes
   * @returns
   */
  create(ref_type: String, ref_id: Number, attributes: CreateAttributes) {
    const requestObj = {
      method: 'post',
      url: `/grant/${ref_type}/${ref_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the grants on the given object
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getForObject(ref_type: String, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/grant/${ref_type}/${ref_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the grants for the user on the given space.
   * @param space_id
   * @param user_id
   * @returns
   */
  getForUserOnSpace(space_id: Number, user_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/grant/space/${space_id}/user/${user_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Return the grant information for the active user, if any
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getOwn(ref_type: String, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/grant/${ref_type}/${ref_id}/own`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the grants for the current user on the given organization.
   * @param org_id
   * @returns
   */
  getOwnOnOrg(org_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/grant/org/${org_id}/own/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Removes all grants on the object with the given type and id.
   * @param ref_type
   * @param ref_id
   * @returns
   */
  deleteOnObject(ref_type: String, ref_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/grant/${ref_type}/${ref_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Removes the grant from the given user on the given object
   * @param ref_type
   * @param ref_id
   * @param user_id
   * @returns
   */
  delete(ref_type: String, ref_id: Number, user_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/grant/${ref_type}/${ref_id}/${user_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the grant with a new access level.
   * @param ref_type
   * @param ref_id
   * @param user_id
   * @param attributes
   * @returns
   */
  update(ref_type: String, ref_id: Number, user_id: Number, attributes: UpdateAttributes) {
    const requestObj = {
      method: 'put',
      url: `/grant/${ref_type}/${ref_id}/${user_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
