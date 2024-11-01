import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttribute, GetEffectAttributes, GetPossibleAttributes, UpdateAttribute } from '@customTypes/flow.type';

export default class Flow extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Creates a new flow on the given reference. Only valid reference is "app".
   * @param ref_type
   * @param ref_id
   * @returns
   */
  add(ref_type: 'app', ref_id: Number, attribute: CreateAttribute) {
    const requestObj = {
      method: 'post',
      url: `/flow/${ref_type}/${ref_id}/`,
      data: attribute,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Delete the flow with the given id.
   * @param flow_id
   * @returns
   */
  delete(flow_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/flow/${flow_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Get's the effect attributes for the effect
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getEffectAttributes(ref_type: 'app', ref_id: Number, attributes: GetEffectAttributes) {
    const requestObj = {
      method: 'post',
      url: `/flow/${ref_type}/${ref_id}/effect/attributes/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the flow with the given id.
   * @param flow_id
   * @returns
   */
  get(flow_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/flow/${flow_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the possible attributes on the given flow.
   * @param flow_id
   * @returns
   */
  getContext(flow_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/flow/${flow_id}/context/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Get all the flows on the given ref
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getAll(ref_type: 'app', ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/flow/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Get's the possible attributes to use as variables for a given effect attribute.
   * @param ref_type
   * @param ref_id
   * @param attributes
   * @returns
   */
  getPossibleAttributes(ref_type: 'app', ref_id: Number, attributes: GetPossibleAttributes) {
    const requestObj = {
      method: 'post',
      url: `/flow/${ref_type}/${ref_id}/attributes/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the flow. The type cannot be changed.
   * @param flow_id
   * @param attribute
   * @returns
   */
  update(flow_id: Number, attribute: UpdateAttribute) {
    const requestObj = {
      method: 'put',
      url: `/flow/${flow_id}`,
      data: attribute,
    };
    return this._httpRequest(requestObj);
  }
}
