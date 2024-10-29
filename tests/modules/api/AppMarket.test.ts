import { jest, expect, describe, it, test, beforeEach } from '@jest/globals';
import AppMarket from '../../../src/modules/api/AppMarket';
import Api from '../../../src/modules/api/Api';
import { InstallShareAttributes, ShareAppAttributes, UpdateShareAttributes } from '../../../src/types/appMarket.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const type = 'app',
  limit = 100,
  offset = 10,
  area = 'mobile',
  share_id = 12312,
  ref_type = 'app',
  ref_id = 123123,
  sort = 'name',
  user_id = 123123,
  category_id = 123123,
  installAttributes: InstallShareAttributes = { space_id: 2312, dependencies: [1231] },
  shareAttributes: ShareAppAttributes = {
    scope: 'private',
    ref_type: 'app',
    ref_id: 123123,
    name: 'test',
    abstract: 'abstract of app',
  },
  updateShareAttributes: UpdateShareAttributes = {
    name: 'test',
    abstract: 'abstract of app',
    description: 'share description',
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

function appMarketInstance(): AppMarket {
  return new AppMarket({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('app market instance properties test', () => {
  const appMaket: AppMarket = appMarketInstance();
  it('should match the properties', () => {
    expect(appMaket instanceof Api).toBeTruthy();
    expect(appMaket.auth.access_token).toBe(access_token);
    expect(appMaket.auth.refresh_token).toBe(refresh_token);
    expect(appMaket.auth.ref).toBe(ref);
    expect(appMaket.auth.expires_in).toBe(expires_in);
    expect(appMaket.auth.token_type).toBe(token_type);
  });
});

describe('AppMaket mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const appMarket: AppMarket = appMarketInstance();

  it('getCategory() properties should match the values', () => {
    appMarket.getCategory();
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe('/app_store/category/?only_used=true');
    appMarket.getCategory(false);
    const requestWithParms: any = spy.mock.calls[1][0];
    expect(requestWithParms.url).toBe('/app_store/category/?only_used=false');
  });

  it('getOrgWithPrivateShares() properties should match the values', () => {
    appMarket.getOrgWithPrivateShares();
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe('/app_store/org/');
  });

  it('getOwnShares() properties should match the values', () => {
    appMarket.getOwnShares(type);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe(`get`);
    expect(request.url).toBe(`/app_store/${type}/own/?limit=6&offset=0`);

    appMarket.getOwnShares(type, limit, offset);
    const requestWithLimitAndOffset: any = spy.mock.calls[1][0];
    expect(requestWithLimitAndOffset.url).toBe(`/app_store/${type}/own/?limit=${limit}&offset=${offset}`);
  });

  test('getRecommendedShares() properties should match the values', () => {
    appMarket.getRecommendedShares(type, area);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app_store/${type}/recommended/${area}/`);
  });

  test('getShare() properties should match the values', () => {
    appMarket.getShare(share_id);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app_store/${share_id}/v2`);
  });

  test('getShareByReference() properties should match the values', () => {
    appMarket.getShareByReference(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app_store/${ref_type}/${ref_id}/`);
  });

  test('getShareByAuthor() properties should match the values', () => {
    appMarket.getShareByAuthor(type, user_id);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app_store/${type}/author/${user_id}/?limit=6&offset=0&sort=install`);

    appMarket.getShareByAuthor(type, user_id, limit, offset, sort);
    const requestWithParms: any = spy.mock.calls[1][0];

    expect(requestWithParms.url).toBe(
      `/app_store/${type}/author/${user_id}/?limit=${limit}&offset=${offset}&sort=${sort}`,
    );
  });

  test('getShareByCategory() properties should match the values', () => {
    appMarket.getShareByCategory(type, category_id);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app_store/${type}/category/${category_id}/?limit=6&offset=0&sort=install`);

    appMarket.getShareByCategory(type, category_id, limit, offset, sort);
    const requestWithParms: any = spy.mock.calls[1][0];

    expect(requestWithParms.url).toBe(
      `/app_store/${type}/category/${category_id}/?limit=${limit}&offset=${offset}&sort=${sort}`,
    );
  });

  test('getTopShares() properties should match the values', () => {
    appMarket.getTopShares(type);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app_store/${type}/top/?limit=6&offset=0`);

    appMarket.getTopShares(type, limit, offset);
    const requestWithParms: any = spy.mock.calls[1][0];

    expect(requestWithParms.url).toBe(`/app_store/${type}/top/?limit=${limit}&offset=${offset}`);
  });

  test('install() properties should match the values', () => {
    appMarket.install(share_id, installAttributes);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/app_store/${share_id}/install`);
    expect(request.data).toBe(installAttributes);
  });

  test('share() properties should match the values', () => {
    appMarket.share(shareAttributes);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/app_store/`);
    expect(request.data).toBe(shareAttributes);
  });

  test('unshare() properties should match the values', () => {
    appMarket.unshare(share_id);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/app_store/${share_id}`);
  });

  test('update() properties should match the values', () => {
    appMarket.update(share_id, updateShareAttributes);
    const request: any = spy.mock.calls[0][0];

    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/app_store/${share_id}`);
    expect(request.data).toBe(updateShareAttributes);
  });
});
