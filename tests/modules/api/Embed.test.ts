import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Embed from '../../../src/modules/api/Embed';
import Api from '../../../src/modules/api/Api';
import { CreateAttributes } from '../../../src/types/embed.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const embedId = 12312;

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

const createAttributes: CreateAttributes = {
  url: 'test',
  mode: 'immediate',
};

function embedInstance(): Embed {
  return new Embed({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('embed properties test', () => {
  const embed: Embed = embedInstance();
  it('should match the properties', () => {
    expect(embed.auth.access_token).toBe(access_token);
    expect(embed.auth.expires_in).toBe(expires_in);
    expect(embed.auth.token_type).toBe(token_type);
    expect(embed.auth.refresh_token).toBe(refresh_token);
    expect(embed instanceof Api).toBeTruthy();
  });
});

describe('embed mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const embed: Embed = embedInstance();

  test('create() properties should match values', () => {
    embed.create(createAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/embed/`);
    expect(request.data).toBe(createAttributes);
  });
});
