import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Hook from '../../../src/modules/api/Hook';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const refType = 'app';
const refId = 1231231;
const hookId = 1231231;
const attributes = { test: 'test' };

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

function hookInstance(): Hook {
  return new Hook({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('hook properties test', () => {
  const hook: Hook = hookInstance();
  it('should match the properties', () => {
    expect(hook.auth.access_token).toBe(access_token);
    expect(hook.auth.expires_in).toBe(expires_in);
    expect(hook.auth.token_type).toBe(token_type);
    expect(hook.auth.refresh_token).toBe(refresh_token);
    expect(hook instanceof Api).toBeTruthy();
  });
});

describe('hook mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const hook: Hook = hookInstance();

  test('create request properties should match values', () => {
    hook.create(refType, refId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/hook/${refType}/${refId}/`);
  });

  test('delete request properties should match values', () => {
    hook.delete(hookId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/hook/${hookId}`);
  });

  test('get for request properties should match values', () => {
    hook.getFor(refType, refId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/hook/${refType}/${refId}/`);
  });

  test('verify request properties should match values', () => {
    hook.verify(hookId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/hook/${hookId}/verify/request`);
  });

  test('validate request properties should match values', () => {
    hook.validate(hookId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/hook/${hookId}/verify/validate`);
  });
});
