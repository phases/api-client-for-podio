import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Api from '../../../src/modules/api/Api';
import Files from '../../../src/modules/api/Files';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';
const appId = 123123;
const attributes = { test: 'test' };
const silent = true;
const hook = false;

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

function filesInstance() {
  return new Files({
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

/**
 * Random podio entities
 *
 * @returns {string}
 */
function randomEntityType() {
  const entities = ['item', 'status', 'task', 'space'];
  return entities[Math.floor(Math.random() * entities.length)];
}

/**
 * Random podio supported file types
 *
 * @returns {string}
 */
function randomFileTypes() {
  const fileTypes = ['image', 'application', 'video', 'text', 'audio'];
  return fileTypes[Math.floor(Math.random() * fileTypes.length)];
}

/**
 * Random hosts
 *
 * @returns {string}
 */
function randomHosts() {
  const hosts = ['podio', 'google', 'boxnet', 'boxnet', 'dropbox', 'evernote', 'live', 'sharefile'];
  return hosts[Math.floor(Math.random() * hosts.length)];
}

describe('files properties test', () => {
  const files = filesInstance();
  test('it should match the properties', () => {
    expect(files.auth.access_token).toBe(access_token);
    expect(files.auth.expires_in).toBe(expires_in);
    expect(files.auth.token_type).toBe(token_type);
    expect(files.auth.refresh_token).toBe(refresh_token);
  });
});

describe('Files mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const file = filesInstance();

  describe('getAll() Assertions', () => {
    test('Request data Assertions', () => {
      let entity = randomEntityType();
      let fileType = randomFileTypes();
      let host = randomHosts();

      const fileSearchUrl = '/file';
      const fileSearchAttributes = {
        attached_to: entity,
        filetype: fileType,
        hosted_by: host,
      };

      file.getAll(fileSearchAttributes);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(fileSearchUrl);
      expect(requestData.data).toBe(fileSearchAttributes);
    });
  });

  describe('getForApp() Assertions', () => {
    test('Request data Assertions', () => {
      let appId = randomNumber();
      let entity = randomEntityType();
      let fileType = randomFileTypes();
      let host = randomHosts();

      const appFilesSearchUrl = `/file/app/${appId}`;
      const fileSearchAttributes = {
        attached_to: entity,
        filetype: fileType,
        hosted_by: host,
      };

      file.getForApp(appId, fileSearchAttributes);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(appFilesSearchUrl);
      expect(requestData.data).toBe(fileSearchAttributes);
    });
  });

  describe('getForSpace() Assertions', () => {
    test('Request data Assertions', () => {
      let spaceId = randomNumber();
      let entity = randomEntityType();
      let fileType = randomFileTypes();
      let host = randomHosts();

      const spaceFilesSearchUrl = `/file/space/${spaceId}`;
      const fileSearchAttributes = {
        attached_to: entity,
        filetype: fileType,
        hosted_by: host,
      };

      file.getForSpace(spaceId, fileSearchAttributes);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(spaceFilesSearchUrl);
      expect(requestData.data).toBe(fileSearchAttributes);
    });
  });

  describe('attach() Assertions', () => {
    test('Request data Assertions', () => {
      let fileId = randomNumber();
      let ref_id = randomNumber();
      let ref_type = randomEntityType();

      const fileAttachUrl = `/file/${fileId}/attach`;
      const attribute = {
        ref_id,
        ref_type,
      };

      file.attach(fileId, attribute);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('post');
      expect(requestData.url).toBe(fileAttachUrl);
      expect(requestData.data).toBe(attribute);
    });
  });

  describe('copy() Assertions', () => {
    test('Request data Assertions', () => {
      let fileId = randomNumber();
      const fileCopyUrl = `/file/${fileId}/copy`;

      file.copy(fileId);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('post');
      expect(requestData.url).toBe(fileCopyUrl);
    });
  });

  describe('delete() Assertions', () => {
    test('Request data Assertions', () => {
      let fileId = randomNumber();
      const fileCopyUrl = `/file/${fileId}`;

      file.delete(fileId);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('delete');
      expect(requestData.url).toBe(fileCopyUrl);
    });
  });

  describe('get() Assertions', () => {
    test('Request data Assertions', () => {
      let fileId = randomNumber();
      const getFileUrl = `/file/${fileId}`;

      file.get(fileId);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(getFileUrl);
    });
  });

  describe('replace() Assertions', () => {
    test('Request data Assertions', () => {
      let fileId = randomNumber();
      let oldFileId = randomNumber();

      const getFileUrl = `/file/${fileId}/replace`;
      const attribute = {
        old_file_id: oldFileId,
      };

      file.replace(fileId, attribute);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('post');
      expect(requestData.url).toBe(getFileUrl);
      expect(requestData.data).toBe(attribute);
    });
  });

  describe('update() Assertions', () => {
    test('Request data Assertions', () => {
      let fileId = randomNumber();

      const fileUpdateUrl = `/file/${fileId}`;
      const attribute = {
        description: 'some description',
      };

      file.update(fileId, attribute);

      let requestData: any = spy.mock.calls[0][0];

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('put');
      expect(requestData.url).toBe(fileUpdateUrl);
      expect(requestData.data).toBe(attribute);
    });
  });
});
