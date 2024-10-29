import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import {
  CreateAttribute,
  GetEffectAttributes,
  GetPossibleAttributes,
  UpdateAttribute,
  Flow as FlowType,
  PossibleAttributes,
} from '@customTypes/flow.type';
import { HttpResponse } from '@customTypes/http.type';
import { Context, ContextValue } from '../../types/context.type';
import { promises } from 'dns';

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
  add(ref_type: 'app', ref_id: number, attribute: CreateAttribute): Promise<HttpResponse<FlowType>> {
    const requestObj = {
      method: 'post',
      url: `/flow/${ref_type}/${ref_id}/`,
      data: attribute,
    };
    return this._httpRequest<FlowType>(requestObj);
  }

  /**
   * Delete the flow with the given id.
   * @param flow_id
   * @returns
   */
  delete(flow_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/flow/${flow_id}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Get's the effect attributes for the effect
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getEffectAttributes(
    ref_type: 'app',
    ref_id: number,
    attributes: GetEffectAttributes,
  ): Promise<HttpResponse<ContextValue>> {
    const requestObj = {
      method: 'post',
      url: `/flow/${ref_type}/${ref_id}/effect/attributes/`,
      data: attributes,
    };
    return this._httpRequest<ContextValue>(requestObj);
  }

  /**
   * Returns the flow with the given id.
   * @param flow_id
   * @returns
   */
  get(flow_id: number): Promise<HttpResponse<FlowType>> {
    const requestObj = {
      method: 'get',
      url: `/flow/${flow_id}`,
    };
    return this._httpRequest<FlowType>(requestObj);
  }

  /**
   * Returns the possible attributes on the given flow.
   * @param flow_id
   * @returns
   */
  getContext(flow_id: number): Promise<HttpResponse<Context>> {
    const requestObj = {
      method: 'get',
      url: `/flow/${flow_id}/context/`,
    };
    return this._httpRequest<Context>(requestObj);
  }

  /**
   * Get all the flows on the given ref
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getAll(ref_type: 'app', ref_id: number): Promise<HttpResponse<FlowType[]>> {
    const requestObj = {
      method: 'get',
      url: `/flow/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest<FlowType[]>(requestObj);
  }

  /**
   * Get's the possible attributes to use as variables for a given effect attribute.
   * @param ref_type
   * @param ref_id
   * @param attributes
   * @returns
   */
  getPossibleAttributes(
    ref_type: 'app',
    ref_id: number,
    attributes: GetPossibleAttributes,
  ): Promise<HttpResponse<PossibleAttributes[]>> {
    const requestObj = {
      method: 'post',
      url: `/flow/${ref_type}/${ref_id}/attributes/`,
      data: attributes,
    };
    return this._httpRequest<PossibleAttributes[]>(requestObj);
  }

  /**
   * Updates the flow. The type cannot be changed.
   * @param flow_id
   * @param attribute
   * @returns
   */
  update(flow_id: number, attribute: UpdateAttribute): Promise<HttpResponse<FlowType>> {
    const requestObj = {
      method: 'put',
      url: `/flow/${flow_id}`,
      data: attribute,
    };
    return this._httpRequest<FlowType>(requestObj);
  }
}
