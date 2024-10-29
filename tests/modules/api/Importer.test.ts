import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Importer from '../../../src/modules/api/Importer';
import Api from '../../../src/modules/api/Api';
import { ImportAttributes } from '../../../src/types/importer.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const file_id = 12312,
  row = 12312,
  app_id = 12312,
  space_id = 12312,
  attributes: ImportAttributes = {
    app_id: 123,
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

function importerInstance(): Importer {
  return new Importer({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('importer properties test', () => {
  const importer: Importer = importerInstance();
  it('should match the properties', () => {
    expect(importer.auth.access_token).toBe(access_token);
    expect(importer.auth.expires_in).toBe(expires_in);
    expect(importer.auth.token_type).toBe(token_type);
    expect(importer.auth.refresh_token).toBe(refresh_token);
    expect(importer instanceof Api).toBeTruthy();
  });
});

describe('importer mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const importer: Importer = importerInstance();

  test('info() properties should match values', () => {
    importer.info(file_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/importer/${file_id}/info`);
  });

  test('preview() properties should match values', () => {
    importer.preview(file_id, row, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/importer/${file_id}/preview/${row}`);
    expect(request.data).toBe(attributes);
  });

  test('prcessApp() properties should match values', () => {
    importer.prcessApp(file_id, app_id, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/importer/${file_id}/item/app/${app_id}`);
    expect(request.data).toBe(attributes);
  });

  test('prcessContacts() properties should match values', () => {
    importer.prcessContacts(file_id, space_id, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/importer/${file_id}/contact/space/${space_id}`);
    expect(request.data).toBe(attributes);
  });
});
