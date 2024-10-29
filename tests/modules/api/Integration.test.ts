import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Integration from '../../../src/modules/api/Integration';
import Api from '../../../src/modules/api/Api';
import { CreateAttributes, UpdateAttributes, UpdateMappingAttributes } from '../../../src/types/integration.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const app_id = 12312,
  createAttributes: CreateAttributes = {
    type: 'test',
    silent: true,
  },
  updateAttributes: UpdateAttributes = {
    silent: true,
    config: [],
  },
  updateMappingAttributes: UpdateMappingAttributes = {
    112312: 'test',
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

function integrationInstance(): Integration {
  return new Integration({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('integration properties test', () => {
  const integration: Integration = integrationInstance();
  it('should match the properties', () => {
    expect(integration.auth.access_token).toBe(access_token);
    expect(integration.auth.expires_in).toBe(expires_in);
    expect(integration.auth.token_type).toBe(token_type);
    expect(integration.auth.refresh_token).toBe(refresh_token);
    expect(integration instanceof Api).toBeTruthy();
  });
});

describe('integration mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const integration: Integration = integrationInstance();

  test('create() properties should match values', () => {
    integration.create(app_id, createAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/integration/${app_id}`);
    expect(request.data).toBe(createAttributes);
  });

  test('delete() properties should match values', () => {
    integration.delete(app_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/integration/${app_id}`);
  });

  test('getFields() properties should match values', () => {
    integration.getFields(app_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/integration/${app_id}/field/`);
  });

  test('get() properties should match values', () => {
    integration.get(app_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/integration/${app_id}`);
  });

  test('update() properties should match values', () => {
    integration.update(app_id, updateAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/integration/${app_id}`);
    expect(request.data).toBe(updateAttributes);
  });

  test('updateMapping() properties should match values', () => {
    integration.updateMapping(app_id, updateMappingAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/integration/${app_id}/mapping`);
    expect(request.data).toBe(updateMappingAttributes);
  });
});
