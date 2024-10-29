import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Flow from '../../../src/modules/api/Flow';
import Api from '../../../src/modules/api/Api';
import {
  CreateAttribute,
  GetEffectAttributes,
  GetPossibleAttributes,
  UpdateAttribute,
} from '../../../src/types/flow.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const ref_type = 'app',
  ref_id = 21312,
  flow_id = 21312,
  createAttribute: CreateAttribute = {
    name: 'test',
    type: 'item.create',
  },
  getEffectAttributes: GetEffectAttributes = {
    type: 'item.create',
    config: [],
  },
  getPossibleAttributes: GetPossibleAttributes = {
    cause: {
      type: 'Test',
      config: [],
    },
  },
  updateAttributes: UpdateAttribute = {
    name: 'test',
    config: [],
  };

const mockResponseData = {
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  request: {},
  response: {
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {},
    request: {},
  },
};

function flowInstance(): Flow {
  return new Flow({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('flow properties test', () => {
  const flow: Flow = flowInstance();
  it('should match the properties', () => {
    expect(flow.auth.access_token).toBe(access_token);
    expect(flow.auth.expires_in).toBe(expires_in);
    expect(flow.auth.token_type).toBe(token_type);
    expect(flow.auth.refresh_token).toBe(refresh_token);
    expect(flow instanceof Api).toBeTruthy();
  });
});

describe('flow mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const flow: Flow = flowInstance();

  test('add() properties should match values', () => {
    flow.add(ref_type, ref_id, createAttribute);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/flow/${ref_type}/${ref_id}/`);
    expect(request.data).toBe(createAttribute);
  });

  test('delete() properties should match values', () => {
    flow.delete(flow_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/flow/${flow_id}`);
  });

  test('getEffectAttributes() properties should match values', () => {
    flow.getEffectAttributes(ref_type, ref_id, getEffectAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/flow/${ref_type}/${ref_id}/effect/attributes/`);
    expect(request.data).toBe(getEffectAttributes);
  });

  test('get() properties should match values', () => {
    flow.get(flow_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/flow/${flow_id}`);
  });

  test('getContext() properties should match values', () => {
    flow.getContext(flow_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/flow/${flow_id}/context/`);
  });

  test('getAll() properties should match values', () => {
    flow.getAll(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/flow/${ref_type}/${ref_id}/`);
  });

  test('getPossibleAttributes() properties should match values', () => {
    flow.getPossibleAttributes(ref_type, ref_id, getPossibleAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/flow/${ref_type}/${ref_id}/attributes/`);
    expect(request.data).toBe(getPossibleAttributes);
  });

  test('update() properties should match values', () => {
    flow.update(flow_id, updateAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/flow/${flow_id}`);
    expect(request.data).toBe(updateAttributes);
  });
});
