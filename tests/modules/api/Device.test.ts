import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Device from '../../../src/modules/api/Device';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const app_id = 12312;

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

function deviceInstance(): Device {
  return new Device({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('device properties test', () => {
  const device: Device = deviceInstance();
  it('should match the properties', () => {
    expect(device.auth.access_token).toBe(access_token);
    expect(device.auth.expires_in).toBe(expires_in);
    expect(device.auth.token_type).toBe(token_type);
    expect(device.auth.refresh_token).toBe(refresh_token);
    expect(device instanceof Api).toBeTruthy();
  });
});

describe('device mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const device: Device = deviceInstance();

  test('install() properties should match values', () => {
    device.install(app_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/mobile/install_app/${app_id}`);
  });
});
