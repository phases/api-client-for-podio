import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Status from '../../../src/modules/api/Status';
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

function StatusInstance() {
  return new Status({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

/**
 * Random app id
 *
 * @returns {number}
 */
function randomNumber(): Number {
  return Math.floor(Math.random() * 1000000000);
}

describe('status properties test', () => {
  const status = StatusInstance();

  test('Auth properties assertions', () => {
    expect(status.auth.access_token).toBe(access_token);
    expect(status.auth.expires_in).toBe(expires_in);
    expect(status.auth.token_type).toBe(token_type);
    expect(status.auth.refresh_token).toBe(refresh_token);
  });
});

describe('Status mock tests', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const status = StatusInstance();

  describe('get() Assertions', () => {
    test('Request data Assertions', () => {
      let statusId = randomNumber();
      status.get(statusId);

      const statusUrl = `/status/${statusId}`;
      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(statusUrl);
    });
  });

  describe('create() Assertions', () => {
    test('Request data Assertions', () => {
      const spaceId = randomNumber();
      const attributes = {
        value: 'some text',
      };
      status.create(spaceId, attributes);

      const statusUrl = `/status/space/${spaceId}`;
      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('post');
      expect(requestData.url).toBe(statusUrl);
    });
  });

  describe('update() Assertions', () => {
    test('Request data Assertions', () => {
      const statusId = randomNumber();
      const attributes = {
        value: 'some text',
      };
      status.update(statusId, attributes);

      const statusUrl = `/status/${statusId}`;
      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('put');
      expect(requestData.url).toBe(statusUrl);
    });
  });

  describe('delete() Assertions', () => {
    test('Request data Assertions', () => {
      const statusId = randomNumber();
      status.delete(statusId);

      const statusUrl = `/status/${statusId}`;
      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('delete');
      expect(requestData.url).toBe(statusUrl);
    });
  });
});
