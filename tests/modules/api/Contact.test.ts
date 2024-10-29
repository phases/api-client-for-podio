import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Contact from '../../../src/modules/api/Contact';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';
const spaceId = 123123;
const attributes = { test: 'test' };
const profileId = 123123;
const linkedAccountId = 123123;
const orgId = 123123;
const userId = 123123;
const key = 'test';

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

function contactInstance(): Contact {
  return new Contact({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('contact properties test', () => {
  const contact: Contact = contactInstance();
  it('should match the properties', () => {
    expect(contact.auth.access_token).toBe(access_token);
    expect(contact.auth.expires_in).toBe(expires_in);
    expect(contact.auth.token_type).toBe(token_type);
    expect(contact.auth.refresh_token).toBe(refresh_token);
    expect(contact instanceof Api).toBeTruthy();
  });
});

describe('contact mock test using spy', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const contact: Contact = contactInstance();

  test('create request properties should match values', () => {
    contact.create(spaceId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/contact/space/${spaceId}/`);
    expect(request.data).toBe(attributes);
  });

  test('delete request properties should match values', () => {
    contact.delete(profileId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/contact/${profileId}`);
  });

  test('get totals request properties should match values', () => {
    contact.getTotals();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/totals/v3/`);
  });

  test('get request properties should match values', () => {
    contact.get(profileId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/${profileId}/v2`);
  });

  test('get all request properties should match values', () => {
    contact.getAll(profileId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/`);
  });

  test('get linked account request properties should match values', () => {
    contact.getLinkedAccount(linkedAccountId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/contact/linked_account/${linkedAccountId}`);
  });

  test('get linked accounts request properties should match values', () => {
    contact.getLinkedAccounts(linkedAccountId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/linked_account/${linkedAccountId}`);
  });

  test('get for org  request properties should match values', () => {
    contact.getForOrg(orgId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/org/${orgId}`);
  });

  test('get skills request properties should match values', () => {
    contact.getSkills(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/skill/`);
    expect(request.data).toBe(attributes);
  });

  test('get total for space request properties should match values', () => {
    contact.getTotalsForSpace(spaceId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/space/${spaceId}/totals/space`);
  });

  test('get for user request properties should match values', () => {
    contact.getForUser(userId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/user/${userId}`);
  });

  test('get field for user request properties should match values', () => {
    contact.getFieldForUser(userId, key);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/user/${userId}/${key}`);
  });

  test('vcard request properties should match values', () => {
    contact.vCard(profileId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/contact/${profileId}/vcard`);
  });

  test('update request properties should match values', () => {
    contact.update(profileId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/contact/${profileId}`);
    expect(request.data).toBe(attributes);
  });
});
