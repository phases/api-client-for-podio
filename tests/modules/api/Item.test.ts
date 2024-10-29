import { beforeEach, describe, expect, it, jest, test } from '@jest/globals';
import Api from '../../../src/modules/api/Api';
import Item from '../../../src/modules/api/Item';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';
const itemId = 123123;
const appId = 123123;
const attributes = { test: 'test' };
const silent = true;
const hook = false;
const fieldId = 12312;

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

/**
 * Create item class instance
 * @returns
 */
function itemInstance(): Item {
  return new Item({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('item properties test', () => {
  const item: Item = itemInstance();
  it('should match properties', () => {
    expect(item.auth.access_token).toBe(access_token);
    expect(item.auth.refresh_token).toBe(refresh_token);
    expect(item.auth.scope).toBe(scope);
    expect(item.auth.expires_in).toBe(expires_in);
    expect(item instanceof Api).toBeTruthy();
  });
});

describe('item APIs mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const item: Item = itemInstance();

  test('get request properties should match values', () => {
    item.get(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}`);
  });

  test('create request properties should match values', () => {
    item.create(appId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/app/${appId}/?silent=false&hook=true`);
    expect(request.data).toBe(attributes);

    item.create(appId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/item/app/${appId}/?silent=${silent}&hook=${hook}`);
  });

  test('delete request properties should match values', () => {
    item.delete(itemId, attributes, silent, hook);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/item/${itemId}/?silent=${silent}&hook=${hook}`);
    expect(request.data).toBe(attributes);

    item.delete(itemId);
    const requestWithoutOptions: any = spy.mock.calls[1][0];
    expect(requestWithoutOptions.url).toBe(`/item/${appId}/?silent=false&hook=true`);
  });

  test('bulk delete request properties should match values', () => {
    item.bulkDelete(appId, attributes, silent, hook);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.data).toBe(attributes);
    expect(request.url).toBe(`/item/app/${appId}/delete?silent=${silent}&hook=${hook}`);

    item.bulkDelete(itemId);
    const requestWithoutOptions: any = spy.mock.calls[1][0];
    expect(requestWithoutOptions.url).toBe(`/item/app/${appId}/delete?silent=false&hook=true`);
  });

  test('calculate request properties should match values', () => {
    item.calculate(appId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/app/${appId}/calculate`);
    expect(request.data).toBe(attributes);
  });

  test('clone request properties should match values', () => {
    item.clone(itemId, silent, hook);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/${itemId}/clone?silent=${silent}&hook=${hook}`);

    item.clone(itemId);
    const requestWithoutOptions: any = spy.mock.calls[1][0];
    expect(requestWithoutOptions.url).toBe(`/item/${itemId}/clone?silent=false&hook=true`);
  });

  test('export request properties should match values', () => {
    item.export(appId, 'xls');
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/app/${appId}/export/xls`);
  });

  test('filter request properties should match values', () => {
    item.filter(appId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/app/${appId}/filter/`);
    expect(request.data).toBe(attributes);
  });

  test('filter by view request properties should match values', () => {
    const viewId = 1234;
    item.filterByView(appId, viewId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/app/${appId}/filter/${viewId}/`);
    expect(request.data).toBe(attributes);
  });

  test('search field request properties should match values', () => {
    item.searchField(fieldId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/field/${fieldId}/find`);
    expect(request.data).toBe(attributes);
  });

  test('get field range request properties should match values', () => {
    item.getFieldRange(fieldId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/field/${fieldId}/range`);
  });

  test('get request properties should match values', () => {
    item.get(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}`);
  });

  test('get by app item id request properties should match values', () => {
    const appItemId = 12;
    item.getByAppItemId(appId, appItemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/app/${appId}/item/${appItemId}`);
  });

  test('get by external id request properties should match values', () => {
    const externalId = 123;
    item.getByExternalId(appId, externalId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/app/${appId}/external_id/${externalId}`);
  });

  test('get clone request properties should match values', () => {
    item.getClone(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/clone`);
  });

  test('get count request properties should match values', () => {
    item.getCount(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/app/${appId}/count`);
  });

  test('get field value request properties should match values', () => {
    item.getFieldValue(itemId, fieldId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/value/${fieldId}/v2`);
  });

  test('get basic by field request properties should match values', () => {
    item.getBasicByField(itemId, fieldId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/reference/${fieldId}/preview`);
  });

  test('get reference request properties should match values', () => {
    item.getReference(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/reference/`);
  });

  test('get revision request properties should match values', () => {
    const revision = 1;
    item.getRevision(itemId, revision);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/revision/${revision}`);
  });

  test('get revision difference request properties should match values', () => {
    const revisionFrom = 1;
    const revisionTo = 3;
    item.getRevisionDifference(itemId, revisionFrom, revisionTo);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/revision/${revisionFrom}/${revisionTo}`);
  });

  test('get revisions request properties should match values', () => {
    item.getRevisions(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/revision/`);
  });

  test('xlsx request properties should match values', () => {
    item.xlsx(appId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/app/${appId}/xlsx/`);
  });

  test('get meeting url request properties should match values', () => {
    item.getMeetingUrl(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/meeting/url`);
  });

  test('get reference by field request properties should match values', () => {
    item.getReferenceByField(itemId, fieldId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/${itemId}/reference/field/${fieldId}`);
  });

  test('get top values by field request properties should match values', () => {
    item.getTopValuesByField(fieldId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/item/field/${fieldId}/top/`);
  });

  test('rearrange request properties should match values', () => {
    item.rearrange(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/${itemId}/rearrange`);
  });

  test('revert request properties should match values', () => {
    const revision = 1;
    item.revert(itemId, revision);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/item/${itemId}/revision/${revision}`);
  });

  test('revert to request properties should match values', () => {
    const revision = 1;
    item.revertTo(itemId, revision);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/item/${itemId}/revision/${revision}/revert_to`);
  });

  test('participation request properties should match values', () => {
    item.participation(itemId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/item/${itemId}/participation`);
  });

  test('update request properties should match values', () => {
    item.update(itemId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/item/${itemId}/?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    item.update(itemId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/item/${itemId}/?silent=${silent}&hook=${hook}`);
  });

  test('update field request properties should match values', () => {
    item.updateField(itemId, fieldId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/item/${itemId}/value/${fieldId}?silent=false&hook=true`);

    item.updateField(itemId, fieldId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/item/${itemId}/value/${fieldId}?silent=${silent}&hook=${hook}`);
  });

  test('update values request properties should match values', () => {
    item.updateValues(itemId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/item/${itemId}/value?silent=false&hook=true`);

    item.updateValues(itemId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/item/${itemId}/value?silent=${silent}&hook=${hook}`);
  });
});
