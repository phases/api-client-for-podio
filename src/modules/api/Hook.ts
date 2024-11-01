import { AuthToken } from '../../types/podio.type';
import Api from './Api';

export default class Hook extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Create a new hook on the given object. See the area for details.
   * @param ref_type
   * @param ref_id
   * @param attributes
   * @returns
   */
  create(ref_type: string, ref_id: Number, attributes: any = {}) {
    const requestObj = {
      method: 'post',
      url: `/hook/${ref_type}/${ref_id}/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Deletes the hook with the given id.
   * @param hook_id
   * @returns
   */
  delete(hook_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/hook/${hook_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the hooks on the object.
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getFor(ref_type: string, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/hook/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Request the hook to be validated.
   * @param hook_id
   * @returns
   */
  verify(hook_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/hook/${hook_id}/verify/request`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Validates the hook using the code received from the verify call. On successful validation the hook will become active.
   * @param hook_id
   * @returns
   */
  validate(hook_id: Number, attributes: any = {}) {
    const requestObj = {
      method: 'post',
      url: `/hook/${hook_id}/verify/validate`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
