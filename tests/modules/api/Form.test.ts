import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Form from '../../../src/modules/api/Form';
import Api from '../../../src/modules/api/Api';
import { CreateAttributes } from '../../../src/types/form.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const form_id = 12312,
  app_id = 12312,
  attributes: CreateAttributes = {
    settings: {
      captcha: true,
      text: {
        heading: 'test',
        description: 'test',
        submit: 'test',
        success: 'test',
      },
      theme: [],
      css: 'test',
    },
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

function formsInstance(): Form {
  return new Form({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('forms properties test', () => {
  const forms: Form = formsInstance();
  it('should match the properties', () => {
    expect(forms.auth.access_token).toBe(access_token);
    expect(forms.auth.expires_in).toBe(expires_in);
    expect(forms.auth.token_type).toBe(token_type);
    expect(forms.auth.refresh_token).toBe(refresh_token);
    expect(forms instanceof Api).toBeTruthy();
  });
});

describe('forms mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const forms: Form = formsInstance();

  test('activate() properties should match values', () => {
    forms.activate(form_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/form/${form_id}/activate`);
  });

  test('create() properties should match values', () => {
    forms.create(app_id, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/form/app/${app_id}/`);
    expect(request.data).toBe(attributes);
  });

  test('deactivate() properties should match values', () => {
    forms.deactivate(form_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/form/${form_id}/deactivate`);
  });

  test('delete() properties should match values', () => {
    forms.delete(form_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/form/${form_id}`);
  });

  test('get() properties should match values', () => {
    forms.get(form_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/form/${form_id}`);
  });

  test('getAll() properties should match values', () => {
    forms.getAll(app_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/form/app/${app_id}/`);
  });

  test('update() properties should match values', () => {
    forms.update(form_id, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/form/${form_id}`);
  });
});
