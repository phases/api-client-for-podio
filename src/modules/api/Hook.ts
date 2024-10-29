import { HttpResponse } from '@customTypes/http.type';
import { AuthToken } from '../../types/podio.type';
import Api from './Api';
import { Hook as HookType, HookCreate } from '../../types/hook.type';

export default class Hook extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/hooks/create-hook-215056
   * Create a new hook on the given object. See the area for details.
   * @param {string}ref_type
   * @param {number}ref_id
   * @param attributes
   * @returns
   */
  create(ref_type: string, ref_id: number, attributes: any = {}): Promise<HttpResponse<HookCreate>> {
    const requestObj = {
      method: 'post',
      url: `/hook/${ref_type}/${ref_id}/`,
      data: attributes,
    };
    return this._httpRequest<HookCreate>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/hooks/delete-hook-215291
   * Deletes the hook with the given id.
   * @param {number} hook_id
   * @returns
   */
  delete(hook_id: number): Promise<HttpResponse<String>> {
    const requestObj = {
      method: 'delete',
      url: `/hook/${hook_id}`,
    };
    return this._httpRequest<String>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/hooks/get-hooks-215285
   * Returns the hooks on the object.
   * @param {string}ref_type
   * @param {number}ref_id
   * @returns
   */
  getFor(ref_type: string, ref_id: number): Promise<HttpResponse<HookType[]>> {
    const requestObj = {
      method: 'get',
      url: `/hook/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest<HookType[]>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/hooks/request-hook-verification-215232
   * Request the hook to be validated.
   * @param {number} hook_id
   * @returns
   */
  verify(hook_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/hook/${hook_id}/verify/request`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/hooks/validate-hook-verification-215241
   * Validates the hook using the code received from the verify call. On successful validation the hook will become active.
   * @param {number} hook_id
   * @returns
   */
  validate(hook_id: number, attributes: any = {}): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/hook/${hook_id}/verify/validate`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }
}
