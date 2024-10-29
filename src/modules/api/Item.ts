import { SimpleObject } from '../../types/basic.type';
import { HttpResponse } from '../../types/http.type';
import { AuthToken } from '../../types/podio.type';
import { Item as ItemType, BulkDelete as BulkDeleteType } from '../../types/item.type';
import { Revision as RevisionType } from '../../types/revision.type';
import { Count as ItemCountType } from '../../types/item-count.type';
import { ItemClone as ItemCloneType } from '../../types/item-clone.type';
import { ItemValues as ItemValuesType } from '../../types/item-values.type';
import { ItemFilter as ItemFilterType } from '../../types/item-filter.type';
import { FieldRangeType } from '../../types/fieldrange.type';
import { FieldValue as FieldValueType } from '../../types/fieldvalue.type';
import { Update as UpdateType } from '../../types/update.type';
import { Revert as RevertType } from '../../types/revert.type';
import { MeetingUrl as MeetingUrlType } from '../../types/meeting-url.type';
import { RevisionDifference as RevisionDifferenceType } from '../../types/revision-difference.type';
import { Export as ExportType } from '../../types/export.type';

import Api from './Api';

/**
 * Handling all the Podio APIs related to Podio items
 */
export default class Item extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Podio item create API
   *
   * @see https://developers.podio.com/doc/items/add-new-item-22362
   * @param {number} app_id - Podio application id
   * @param {SimpleObject} attributes - Object with the attributes data
   * @param {boolean} silent - Should send notification (optional, default: false)
   * @param {boolean} hook - Should trigger hooks (optional, default: true)
   * @returns {Promise<HttpResponse>}
   */
  create(
    app_id: number,
    attributes: SimpleObject,
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<ItemType>> {
    const requestObj = {
      method: 'post',
      url: `/item/app/${app_id}/?silent=${silent}&hook=${hook}`,
      data: attributes,
    };

    return this._httpRequest<ItemType>(requestObj);
  }

  /**
   * Deletes an item and removes it from all views. The item can no longer be retrieved.
   * @see https://developers.podio.com/doc/items/bulk-delete-items-19406111
   * @param {number} item_id - Podio item id
   * @param {any} attributes - Object with the attributes data (optional)
   * @param {boolean} silent - Should send notification (optional, default: false)
   * @param {boolean} hook - Should trigger hooks (optional, default: true)
   * @returns {Promise<HttpResponse<string>>}
   */
  delete(
    item_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/item/${item_id}/?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Deletes items from a given app based in bulk and removes them from all views. The data can no longer be retrieved.
   * @param app_id
   * @param attributes
   * @param silent
   * @param hook
   * @returns
   */
  bulkDelete(
    app_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<BulkDeleteType>> {
    const requestObj = {
      method: 'post',
      url: `/item/app/${app_id}/delete?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<BulkDeleteType>(requestObj);
  }

  /**
   * Performs a calculation on the given app
   * @param app_id
   * @param attributes
   * @returns
   */
  calculate(app_id: number, attributes: any) {
    const requestObj = {
      method: 'post',
      url: `/item/app/${app_id}/calculate`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Clones the given item creating a new item with identical values in the same app.
   * @param item_id
   * @param silent
   * @param hook
   * @returns
   */
  clone(item_id: number, silent: boolean = false, hook: boolean = true): Promise<HttpResponse<ItemType>> {
    const requestObj = {
      method: 'post',
      url: `/item/${item_id}/clone?silent=${silent}&hook=${hook}`,
    };
    return this._httpRequest<ItemType>(requestObj);
  }

  /**
   * Removes the reference from the item if any
   * @param item_id
   * @returns
   */
  deleteReference(item_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/item/${item_id}/ref`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Creates a batch for exporting the items. Valid exporters are currently "xls" and "xlsx".
   * @param app_id
   * @param exporter
   * @param attributes
   * @returns
   */
  export(app_id: number, exporter: 'xls' | 'xlsx', attributes: any = {}): Promise<HttpResponse<ExportType>> {
    const requestObj = {
      method: 'post',
      url: `/item/app/${app_id}/export/${exporter}`,
      data: attributes,
    };
    return this._httpRequest<ExportType>(requestObj);
  }

  /**
   * Filters the items and returns the matching items
   * @param app_id
   * @param attributes
   * @returns
   */
  filter(app_id: number, attributes: any = {}): Promise<HttpResponse<ItemFilterType>> {
    const requestObj = {
      method: 'post',
      url: `/item/app/${app_id}/filter/`,
      data: attributes,
    };
    return this._httpRequest<ItemFilterType>(requestObj);
  }

  /**
   * Retrieves the items in the app based on the given view
   * @param app_id
   * @param view_id
   * @param attributes
   * @returns
   */
  filterByView(app_id: number, view_id: number, attributes: any = {}): Promise<HttpResponse<ItemFilterType>> {
    const requestObj = {
      method: 'post',
      url: `/item/app/${app_id}/filter/${view_id}/`,
      data: attributes,
    };
    return this._httpRequest<ItemFilterType>(requestObj);
  }

  /**
   * Used to find possible items for a given application field. It searches the relevant apps for items matching the given text.
   * @param field_id
   * @param attributes
   * @returns
   */
  searchField(field_id: number, attributes: any = {}) {
    const requestObj = {
      method: 'get',
      url: `/item/field/${field_id}/find`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the range for the given field. Only valid for fields of type "number", "calculation" and "money".
   * @param field_id
   * @returns
   */
  getFieldRange(field_id: number): Promise<HttpResponse<FieldRangeType>> {
    const requestObj = {
      method: 'get',
      url: `/item/field/${field_id}/range`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Podio get item API
   *
   * @see https://developers.podio.com/doc/items/get-item-22360
   * @param {number} item_id - Podio item id
   * @returns {Promise<HttpResponse>}
   */
  get(item_id: number): Promise<HttpResponse<ItemType>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}`,
    };
    return this._httpRequest<ItemType>(requestObj);
  }

  /**
   * Returns the full item by its app_item_id, which is a unique ID for items per app.
   * @param app_id
   * @param app_item_id
   * @returns
   */
  getByAppItemId(app_id: number, app_item_id: number): Promise<HttpResponse<ItemType>> {
    const requestObj = {
      method: 'get',
      url: `/app/${app_id}/item/${app_item_id}`,
    };
    return this._httpRequest<ItemType>(requestObj);
  }

  /**
   * Retrieve an app item with the given external_id.
   * @param app_id
   * @param external_id
   * @returns
   */
  getByExternalId(app_id: number, external_id: string): Promise<HttpResponse<ItemType>> {
    const requestObj = {
      method: 'get',
      url: `/item/app/${app_id}/external_id/${external_id}`,
    };
    return this._httpRequest<ItemType>(requestObj);
  }

  /**
   * Return all the values cloned for an item. The values are not saved, but can be used as values for creating a new item.
   * @param item_id
   * @returns
   */
  getClone(item_id: number): Promise<HttpResponse<ItemCloneType>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/clone`,
    };
    return this._httpRequest<ItemCloneType>(requestObj);
  }

  /**
   * Returns the number of items on app matching a given saved view or set of filter(s).
   * @param app_id
   * @returns
   */
  getCount(app_id: number): Promise<HttpResponse<ItemCountType>> {
    const requestObj = {
      method: 'get',
      url: `/item/app/${app_id}/count`,
    };
    return this._httpRequest<ItemCountType>(requestObj);
  }

  /**
   * Return the values for the given field on the given item. The field can be given either as the id of the field or the external id of the field.
   * @param item_id
   * @param field_or_external_id
   * @returns
   */
  getFieldValue(item_id: number, field_or_external_id: number | string): Promise<HttpResponse<FieldValueType>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/value/${field_or_external_id}/v2`,
    };
    return this._httpRequest<FieldValueType>(requestObj);
  }

  /**
   * Returns a preview of the item for referencing on the given field.
   * @param item_id
   * @param field_id
   * @returns
   */
  getBasicByField(item_id: number, field_id: number | string): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/reference/${field_id}/preview`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns up to thousand items that have a reference to the given item. The references are grouped by app. Both the apps and the items are sorted by title.
   * @param item_id
   * @returns
   */
  getReference(item_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/reference/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the data about the specific revision on an item
   * @param item_id
   * @param revision
   * @returns
   */
  getRevision(item_id: number, revision: number): Promise<HttpResponse<RevisionType>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/revision/${revision}`,
    };
    return this._httpRequest<RevisionType>(requestObj);
  }

  /**
   * Returns the difference in fields values between the two revisions.
   * @param item_id
   * @param revision_from
   * @param revision_to
   * @returns
   */
  getRevisionDifference(
    item_id: number,
    revision_from: number,
    revision_to: number,
  ): Promise<HttpResponse<RevisionDifferenceType[]>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/revision/${revision_from}/${revision_to}`,
    };
    return this._httpRequest<RevisionDifferenceType[]>(requestObj);
  }

  /**
   * Returns all the revisions that have been made to an item (up to a maximum of the last 30 revisions).
   * @param item_id
   * @returns
   */
  getRevisions(item_id: number): Promise<HttpResponse<RevisionType[]>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/revision/`,
    };
    return this._httpRequest<RevisionType[]>(requestObj);
  }

  /**
   * Returns all the values for an item, with the additional data provided by the get item operation.
   * @param item_id
   * @returns
   */
  getValues(item_id: number): Promise<HttpResponse<ItemValuesType>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/value/v2`,
    };
    return this._httpRequest<ItemValuesType>(requestObj);
  }

  /**
   * Returns the items in the Xlsx format.
   * @param app_id
   * @returns
   */
  xlsx(app_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'get',
      url: `/item/app/${app_id}/xlsx/`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Gets the URL to join the given meeting. If the user is the organizer of the meeting, the meeting will be started and the URL will log in the user automatically.
   * @param item_id
   * @returns
   */
  getMeetingUrl(item_id: number): Promise<HttpResponse<MeetingUrlType>> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/meeting/url`,
    };
    return this._httpRequest<MeetingUrlType>(requestObj);
  }

  /**
   * Returns all the references to the item from the given field
   * @param item_id
   * @param field_id
   * @returns
   */
  getReferenceByField(item_id: number, field_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/item/${item_id}/reference/field/${field_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the top possible values for the given field. This is currently only valid for fields of type "app".
   * @param field_id
   * @returns
   */
  getTopValuesByField(field_id: number, attributes: any = {}): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/item/field/${field_id}/top/`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Update the item's values
   * and/or
   * its (internal) priority.
   * Mostly intended for moving the item card in the card view.
   * @param item_id
   * @param attributes
   * @returns
   */
  rearrange(item_id: number, attributes: any = {}): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/item/${item_id}/rearrange`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Reverts the change done in the given revision.
   * @param item_id
   * @param revision
   * @returns
   */
  revert(item_id: number, revision: number): Promise<HttpResponse<RevertType>> {
    const requestObj = {
      method: 'delete',
      url: `/item/${item_id}/revision/${revision}`,
    };
    return this._httpRequest<RevertType>(requestObj);
  }

  /**
   * Reverts the item to the values in the given revision. This will undo any changes made after the given revision.
   * @param item_id
   * @param revision
   * @returns
   */
  revertTo(item_id: number, revision: number): Promise<HttpResponse<RevertType>> {
    const requestObj = {
      method: 'post',
      url: `/item/${item_id}/revision/${revision}/revert_to`,
    };
    return this._httpRequest<RevertType>(requestObj);
  }

  /**
   * Updates the participation status for the active user on the item
   * @param item_id
   * @param attributes
   * @returns
   */
  participation(item_id: number, attributes: any = {}): Promise<HttpResponse> {
    const requestObj = {
      method: 'put',
      url: `/item/${item_id}/participation`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Update an already existing item
   * @param item_id - Podio item id
   * @param attributes - Object with the attributes data
   * @param silent - Should send notification (optional, default: false)
   * @param hook - Should trigger hooks (optional, default: true)
   * @returns
   */
  update(
    item_id: number,
    attributes: any,
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<UpdateType>> {
    const requestObj = {
      method: 'put',
      url: `/item/${item_id}/?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<UpdateType>(requestObj);
  }

  /**
   * Update the item values for a specific field. The identifier for the field can either be the field_id or the external_id for the field.
   * @param item_id
   * @param field_id
   * @param attributes
   * @param silent
   * @param hook
   * @returns
   */
  updateField(
    item_id: number,
    field_id: number | string,
    attributes: any,
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<UpdateType>> {
    const requestObj = {
      method: 'put',
      url: `/item/${item_id}/value/${field_id}?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<UpdateType>(requestObj);
  }

  /**
   * Updates all the values for an item
   * @param item_id
   * @param attributes
   * @param silent
   * @param hook
   * @returns
   */
  updateValues(
    item_id: number,
    attributes: any,
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<UpdateType>> {
    const requestObj = {
      method: 'put',
      url: `/item/${item_id}/value?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<UpdateType>(requestObj);
  }
}
