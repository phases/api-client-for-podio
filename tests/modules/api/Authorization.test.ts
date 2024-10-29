import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Authorization from '../../../src/modules/api/Authorization';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

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

function AuthorizationInstance() {
  return new Authorization({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('Authorization properties test', () => {
  const authorization = AuthorizationInstance();

  test('Auth properties assertions', () => {
    expect(authorization.auth.access_token).toBe(access_token);
    expect(authorization.auth.expires_in).toBe(expires_in);
    expect(authorization.auth.token_type).toBe(token_type);
    expect(authorization.auth.refresh_token).toBe(refresh_token);
  });
});

describe('Authorization mock tests', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const authorization = AuthorizationInstance();

  describe('getScope() Assertions', () => {
    test('Request data Assertions', () => {
      authorization.getScope();
      const scopeUrl = '/oauth/scope';
      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(scopeUrl);
    });
  });

  describe('invalidateGrant() Assertions', () => {
    test('Request data Assertions', () => {
      const invalidateGrantUrl = '/oauth/grant/invalidate';

      authorization.invalidateGrant();
      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('post');
      expect(requestData.url).toBe(invalidateGrantUrl);
    });
  });

  describe('invalidateAllTokens() Assertions', () => {
    test('Request data Assertions', () => {
      const invalidateAllTokenstUrl = '/oauth/token/invalidate';

      authorization.invalidateAllTokens();
      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('post');
      expect(requestData.url).toBe(invalidateAllTokenstUrl);
    });
  });
});
