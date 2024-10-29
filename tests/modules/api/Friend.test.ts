import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Friend from '../../../src/modules/api/Friend';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const user_ids = '12312,12312';

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

function friendInstance(): Friend {
  return new Friend({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('friend properties test', () => {
  const friend: Friend = friendInstance();
  it('should match the properties', () => {
    expect(friend.auth.access_token).toBe(access_token);
    expect(friend.auth.expires_in).toBe(expires_in);
    expect(friend.auth.token_type).toBe(token_type);
    expect(friend.auth.refresh_token).toBe(refresh_token);
    expect(friend instanceof Api).toBeTruthy();
  });
});

describe('friend mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const friend: Friend = friendInstance();

  test('delete() properties should match values', () => {
    friend.delete(user_ids);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/friend/${user_ids}`);
  });
});
