import { jest, it, describe, expect, beforeEach } from '@jest/globals';
import Api from '../../../src/modules/api/Api';
import Batch from '../../../src/modules/api/Batch';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const batch_id = 123123,
  ref_type = 'app',
  ref_id = 123112,
  plugin = 'app_import';

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

function batchInstance(): Batch {
  return new Batch({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('batch instance properties test', () => {
  const batch = batchInstance();

  it('should match the properites', () => {
    expect(batch instanceof Api).toBeTruthy();

    expect(batch.auth.access_token).toBe(access_token);
    expect(batch.auth.expires_in).toBe(expires_in);
    expect(batch.auth.token_type).toBe(token_type);
    expect(batch.auth.scope).toBe(scope);
    expect(batch.auth.ref).toBe(ref);
    expect(batch.auth.refresh_token).toBe(refresh_token);
  });
});

describe('batch mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const batch: Batch = batchInstance();

  it('get() properties should match the values', () => {
    batch.get(batch_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/batch/${batch_id}`);
  });

  it('getAll() properties should match the values', () => {
    batch.getAll();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/batch/`);
  });

  it('getRunningBatches() properties should match the values', () => {
    batch.getRunningBatches(ref_type, ref_id, plugin);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/batch/${ref_type}/${ref_id}/${plugin}/running/`);
  });
});
