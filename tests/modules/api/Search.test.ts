import { beforeEach, describe, expect, it, jest, test } from '@jest/globals';
import Api from '../../../src/modules/api/Api';
import Search from '../../../src/modules/api/Search';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';
const orgId = 123123;
const spaceId = 456456;
const appId = 789789;
const searchId = 111111;
const words = 'test query';
const attributes = { test: 'test' };
const rank = 1;

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

/**
 * Create search class instance
 * @returns
 */
function searchInstance(): Search {
  return new Search({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('search properties test', () => {
  const search: Search = searchInstance();
  it('should match properties', () => {
    expect(search.auth.access_token).toBe(access_token);
    expect(search.auth.refresh_token).toBe(refresh_token);
    expect(search.auth.scope).toBe(scope);
    expect(search.auth.expires_in).toBe(expires_in);
    expect(search instanceof Api).toBeTruthy();
  });
});

describe('search APIs mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const search: Search = searchInstance();

  test('inOrg request properties should match values', () => {
    search.inOrg(orgId, words);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/search/org/${orgId}/`);
    expect(request.data.query).toBe(words);

    search.inOrg(orgId, words, attributes);
    const requestWithAttributes: any = spy.mock.calls[1][0];
    expect(requestWithAttributes.data.query).toBe(words);
    expect(requestWithAttributes.data.test).toBe(attributes.test);
  });

  test('globally request properties should match values', () => {
    search.globally(words);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/search/`);
    expect(request.data.query).toBe(words);

    search.globally(words, attributes);
    const requestWithAttributes: any = spy.mock.calls[1][0];
    expect(requestWithAttributes.data.query).toBe(words);
    expect(requestWithAttributes.data.test).toBe(attributes.test);
  });

  test('inSpace request properties should match values', () => {
    search.inSpace(spaceId, words);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/search/space/${spaceId}/`);
    expect(request.data.query).toBe(words);

    search.inSpace(spaceId, words, attributes);
    const requestWithAttributes: any = spy.mock.calls[1][0];
    expect(requestWithAttributes.data.query).toBe(words);
    expect(requestWithAttributes.data.test).toBe(attributes.test);
  });

  test('inApp request properties should match values', () => {
    search.inApp(appId, words);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/search/app/${appId}/`);
    expect(request.data.query).toBe(words);

    search.inApp(appId, words, attributes);
    const requestWithAttributes: any = spy.mock.calls[1][0];
    expect(requestWithAttributes.data.query).toBe(words);
    expect(requestWithAttributes.data.test).toBe(attributes.test);
  });

  test('rank request properties should match values', () => {
    search.rank(searchId, rank);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/search/${searchId}/${rank}/clicked`);
  });
});

