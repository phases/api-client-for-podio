import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Email from '../../../src/modules/api/Email';
import Api from '../../../src/modules/api/Api';
import {
  ExportRefContactToLinkedAccountAttributes,
  Name,
  RefType,
  UpdateAppEmailAttributes,
} from '../../../src/types/email.type';

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

const name: Name = 'item_app',
  task_name = 'task',
  ref_id = 2123,
  app_id = 2123,
  ref_type: RefType = 'app',
  exportRefContactToLinkedAccountAttributes: ExportRefContactToLinkedAccountAttributes = {
    linked_account_id: 12312,
  },
  updateAppEmailAttributes: UpdateAppEmailAttributes = {
    attachments: true,
    mappings: [],
  };

function emailInstance(): Email {
  return new Email({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('email properties test', () => {
  const email: Email = emailInstance();
  it('should match the properties', () => {
    expect(email.auth.access_token).toBe(access_token);
    expect(email.auth.expires_in).toBe(expires_in);
    expect(email.auth.token_type).toBe(token_type);
    expect(email.auth.refresh_token).toBe(refresh_token);
    expect(email instanceof Api).toBeTruthy();
  });
});

describe('email mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const email: Email = emailInstance();

  test('exportRefContactToLinkedAccount() properties should match values', () => {
    email.exportRefContactToLinkedAccount(name, ref_type, ref_id, exportRefContactToLinkedAccountAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/email/contact/${name}/${ref_type}/${ref_id}/export`);
    expect(request.data).toBe(exportRefContactToLinkedAccountAttributes);
  });

  test('exportGlobalContactToLinkedAccount() properties should match values', () => {
    email.exportGlobalContactToLinkedAccount(task_name, exportRefContactToLinkedAccountAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/email/contact/${task_name}/export`);
    expect(request.data).toBe(exportRefContactToLinkedAccountAttributes);
  });

  test('getAppConfiguration() properties should match values', () => {
    email.getAppConfiguration(app_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/email/app/${app_id}`);
  });

  test('getContactForReference() properties should match values', () => {
    email.getContactForReference(name, ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/email/contact/${name}/${ref_type}/${ref_id}`);
  });

  test('getContactForReferenceAsVCard() properties should match values', () => {
    email.getContactForReferenceAsVCard(name, ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/email/contact/${name}/${ref_type}/${ref_id}/vcard`);
  });

  test('getGlobalContacts() properties should match values', () => {
    email.getGlobalContacts(task_name);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/email/contact/${task_name}`);
  });

  test('getGlobalContactsAsVCard() properties should match values', () => {
    email.getGlobalContactsAsVCard(task_name);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/email/contact/${task_name}/vcard`);
  });

  test('getGroups() properties should match values', () => {
    email.getGroups();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/email/group/`);
  });

  test('updateAppConfiguration() properties should match values', () => {
    email.updateAppConfiguration(app_id, updateAppEmailAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/email/app/${app_id}`);
  });
});
