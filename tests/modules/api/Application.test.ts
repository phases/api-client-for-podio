import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Application from '../../../src/modules/api/Application';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';
const appId = 123123;
const attributes = { test: 'test' };
const silent = true;
const hook = false;
const fieldId = 12312;

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

function appInstance(): Application {
  return new Application({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('application properties test', () => {
  const app: Application = appInstance();
  it('should match the properties', () => {
    expect(app.auth.access_token).toBe(access_token);
    expect(app.auth.expires_in).toBe(expires_in);
    expect(app.auth.token_type).toBe(token_type);
    expect(app.auth.refresh_token).toBe(refresh_token);
    expect(app instanceof Api).toBeTruthy();
  });
});

describe('application mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const app: Application = appInstance();

  test('activate request properties should match values', () => {
    app.activate(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/app/${appId}/activate`);
  });

  test('create request properties should match values', () => {
    app.create(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/app/?silent=false&hook=true`);
    app.create(attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/app/?silent=${silent}&hook=${hook}`);
  });

  test('create field request properties should match values', () => {
    app.createField(appId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/app/${appId}/field/`);
    expect(request.data).toBe(attributes);
  });

  test('deactivate request properties should match values', () => {
    app.deactivate(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/app/${appId}/deactivate`);
  });

  test('delete request properties should match values', () => {
    app.delete(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/item/${appId}/?silent=false`);
    app.delete(appId, silent);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/item/${appId}/?silent=${silent}`);
  });

  test('delete field request properties should match values', () => {
    app.deleteField(appId, fieldId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/app/${appId}/field/${fieldId}`);
  });

  test('get all request properties should match values', () => {
    app.getAll(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/`);
    expect(request.data).toBe(attributes);
  });

  test('get properties should match values', () => {
    app.get(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/${appId}`);
  });

  test('get by labels properties should match values', () => {
    const orgLabel = 'test',
      spaceLabel = 'test1',
      appLabel = 'test2';
    app.getByLabels(orgLabel, spaceLabel, appLabel);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/org/${orgLabel}/space/${spaceLabel}/${appLabel}`);
  });

  test('dependencies properties should match values', () => {
    app.dependencies(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/${appId}/dependencies/`);
  });

  test('get for url properties should match values', () => {
    const spaceId = 2313,
      urlLabel = 'asdasd';
    app.getForUrl(spaceId, urlLabel);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/space/${spaceId}/${urlLabel}`);
  });

  test('get for space properties should match values', () => {
    const spaceId = 2313;
    app.getForSpace(spaceId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/space/${spaceId}/`);
  });

  test('features properties should match values', () => {
    app.features();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/features/`);
  });

  test('search properties should match values', () => {
    const query = 'test';
    app.search(query);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/icon/search?query=${query}`);
  });

  test('dependencies space properties should match values', () => {
    const spaceId = 123;
    app.dependenciesSpace(spaceId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/space/${spaceId}/dependencies/`);
  });

  test('get top properties should match values', () => {
    app.getTop(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/top/`);
    expect(request.data).toBe(attributes);
  });

  test('get top for organization properties should match values', () => {
    const orgId = 123;
    app.getTopForOrg(orgId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/org/${orgId}/top/`);
  });

  test('install properties should match values', () => {
    app.install(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/app/${appId}/install`);
  });

  test('update field properties should match values', () => {
    app.updateField(appId, fieldId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/app/${appId}/field/${fieldId}`);
    expect(request.data).toBe(attributes);
  });

  test('update field properties should match values', () => {
    app.update(appId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/app/${appId}/v2/?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    app.update(appId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/app/${appId}/v2/?silent=${silent}&hook=${hook}`);
  });

  test('update description field properties should match values', () => {
    app.updateDescription(appId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/app/${appId}/description?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    app.updateDescription(appId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/app/${appId}/description?silent=${silent}&hook=${hook}`);
  });

  test('update order properties should match values', () => {
    const spaceId = 123123;
    app.updateOrder(spaceId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/app/space/${spaceId}/order`);
    expect(request.data).toBe(attributes);
  });

  test('update usage properties should match values', () => {
    app.updateUsage(appId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/app/${appId}/usage?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    app.updateUsage(appId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/app/${appId}/usage?silent=${silent}&hook=${hook}`);
  });
});
