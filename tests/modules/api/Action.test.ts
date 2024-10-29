import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Action from '../../../src/modules/api/Action';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const actionId = 12312;

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

function actionInstance(): Action {
  return new Action({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('action properties test', () => {
  const action: Action = actionInstance();
  it('should match the properties', () => {
    expect(action.auth.access_token).toBe(access_token);
    expect(action.auth.expires_in).toBe(expires_in);
    expect(action.auth.token_type).toBe(token_type);
    expect(action.auth.refresh_token).toBe(refresh_token);
    expect(action instanceof Api).toBeTruthy();
  });
});

describe('action mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const action: Action = actionInstance();

  test('get() properties should match values', () => {
    action.get(actionId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/action/${actionId}`);
  });
});
