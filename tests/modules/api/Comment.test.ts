import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Api from '../../../src/modules/api/Api';
import Comment from '../../../src/modules/api/Comment';

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

function commentApiInstance() {
  return new Comment({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

/**
 * Random comment id
 *
 * @returns {number}
 */
function randomCommentId(): Number {
  return Math.floor(Math.random() * 1000000000);
}

/**
 *
 * @returns {string}
 */
function randomCommentType(): string {
  let supportedTypes = ['item', 'app', 'space'];
  return supportedTypes[Math.floor(Math.random() * supportedTypes.length)];
}

describe('comments properties test', () => {
  const comment = commentApiInstance();
  test('it should match the properties', () => {
    expect(comment.auth.access_token).toBe(access_token);
    expect(comment.auth.expires_in).toBe(expires_in);
    expect(comment.auth.token_type).toBe(token_type);
    expect(comment.auth.refresh_token).toBe(refresh_token);
  });
});

describe('comments mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const comment = commentApiInstance();

  describe('getFor() Assertions', () => {
    test('Request data assertions', () => {
      let commentId = randomCommentId();
      let commentType = randomCommentType();
      const offset = 0;
      const limit = 100;

      let allComments = comment.getFor(commentType, commentId);

      let requestData: any = spy.mock.calls[0][0];

      let expectedUrl = `/comment/${commentType}/${commentId}?offset=${offset}&limit=${limit}`;

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(expectedUrl);
    });
  });

  describe('get() Assertions', () => {
    test('Request data assertions', () => {
      let commentId = randomCommentId();

      comment.get(commentId);

      let requestData: any = spy.mock.calls[0][0];
      let expectedUrl = `/comment/${commentId}`;

      expect(spy).toHaveBeenCalled();
      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(expectedUrl);
    });
  });

  describe('create() Assertions', () => {
    test('Request data assertions', () => {
      let commentType = randomCommentType();
      let typeId = randomCommentId();
      const title = 'Sample title';

      let attributes = {
        title,
      };

      comment.create(commentType, typeId, attributes);
      comment.create(commentType, typeId, attributes, true, true, true);
      comment.create(commentType, typeId, attributes, false, false, false);

      let firstRequestData: any = spy.mock.calls[0][0];
      let firstRequestUrl = `/comment/${commentType}/${typeId}?alert_invite=false&silent=false&hook=true`;
      let firstRequestCommentData = {
        title,
      };

      let secondRequestData: any = spy.mock.calls[1][0];
      let secondRequestUrl = `/comment/${commentType}/${typeId}?alert_invite=true&silent=true&hook=true`;

      let thirdRequestData: any = spy.mock.calls[2][0];
      let thirdRequestUrl = `/comment/${commentType}/${typeId}?alert_invite=false&silent=false&hook=false`;

      expect(spy).toBeCalled();
      expect(firstRequestData.method).toBe('post');
      expect(firstRequestData.url).toBe(firstRequestUrl);
      expect(firstRequestData.data).toEqual(firstRequestCommentData);
      expect(secondRequestData.url).toBe(secondRequestUrl);
      expect(thirdRequestData.url).toBe(thirdRequestUrl);
    });
  });

  describe('update() Assertions', () => {
    test('Request data assertions', () => {
      let commentId = randomCommentId();
      const title = 'Sample title';

      let attributes = {
        title,
      };

      comment.update(commentId, attributes);

      let requestData: any = spy.mock.calls[0][0];
      let requestUrl = `/comment/${commentId}`;

      expect(requestData.method).toBe('put');
      expect(requestData.url).toBe(requestUrl);
    });
  });

  describe('delete() Assertions', () => {
    test('Request data assertions', () => {
      let commentId = randomCommentId();
      comment.delete(commentId);

      let requestData: any = spy.mock.calls[0][0];
      let requestUrl = `/comment/${commentId}`;

      expect(requestData.method).toBe('delete');
      expect(requestData.url).toBe(requestUrl);
    });
  });

  describe('revisions() Assertions', () => {
    test('Request data assertions', () => {
      let commentId = randomCommentId();
      comment.revisions(commentId);

      let requestData: any = spy.mock.calls[0][0];
      let requestUrl = `/comment/${commentId}/revision`;

      expect(requestData.method).toBe('get');
      expect(requestData.url).toBe(requestUrl);
    });
  });
});
