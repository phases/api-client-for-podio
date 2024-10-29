import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Grant from '../../../src/modules/api/Grant';
import Api from '../../../src/modules/api/Api';
import { CreateAttributes, UpdateAttributes } from '../../../src/types/grant.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const ref_type = 'test',
  ref_id = 12312,
  space_id = 12312,
  org_id = 12312,
  user_id = 12312,
  createAttribute: CreateAttributes = {
    people: 'test',
    action: 'comment',
    message: 'test',
    access_level: 'edit',
  },
  updateAttribute: UpdateAttributes = {
    access_level: 'edit',
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

function grantInstance(): Grant {
  return new Grant({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('grant properties test', () => {
  const grant: Grant = grantInstance();
  it('should match the properties', () => {
    expect(grant.auth.access_token).toBe(access_token);
    expect(grant.auth.expires_in).toBe(expires_in);
    expect(grant.auth.token_type).toBe(token_type);
    expect(grant.auth.refresh_token).toBe(refresh_token);
    expect(grant instanceof Api).toBeTruthy();
  });
});

describe('grant mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const grant: Grant = grantInstance();

  test('count() properties should match values', () => {
    grant.count(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/grant/${ref_type}/${ref_id}/count`);
  });

  test('create() properties should match values', () => {
    grant.create(ref_type, ref_id, createAttribute);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/grant/${ref_type}/${ref_id}`);
    expect(request.data).toBe(createAttribute);
  });

  test('getForObject() properties should match values', () => {
    grant.getForObject(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/grant/${ref_type}/${ref_id}`);
  });

  test('getForUserOnSpace() properties should match values', () => {
    grant.getForUserOnSpace(space_id, user_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/grant/space/${space_id}/user/${user_id}/`);
  });

  test('getOwn() properties should match values', () => {
    grant.getOwn(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/grant/${ref_type}/${ref_id}/own`);
  });

  test('getOwnOnOrg() properties should match values', () => {
    grant.getOwnOnOrg(org_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/grant/org/${org_id}/own/`);
  });

  test('deleteOnObject() properties should match values', () => {
    grant.deleteOnObject(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/grant/${ref_type}/${ref_id}`);
  });

  test('delete() properties should match values', () => {
    grant.delete(ref_type, ref_id, user_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/grant/${ref_type}/${ref_id}/${user_id}`);
  });

  test('update() properties should match values', () => {
    grant.update(ref_type, ref_id, user_id, updateAttribute);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/grant/${ref_type}/${ref_id}/${user_id}`);
  });
});
