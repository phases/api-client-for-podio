import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import {
  AppCalendarAttributes,
  FilterAppCalendarAttributes,
  GlobalCalendarAttributes,
  LinkedAccountCalendarAttributes,
  MoveExternalCalendarEventAttributes,
  SpaceCalendarAttributes,
  SummaryAttributes,
  UpdateAttributes,
  UpdateExternalCalendarEventDurationAttributes,
} from '@customTypes/calendar.type';

export default class Calendar extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Returns the calendar for the given app filtered using the item filters.
   * @param app_id
   * @param attributes
   * @returns
   */
  filterAppCalendar(app_id: Number, attributes: FilterAppCalendarAttributes) {
    const requestObj = {
      method: 'post',
      url: `/calendar/app/${app_id}/filter`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the items and tasks that are related to the given app.
   * @param app_id
   * @param attributes
   * @returns
   */
  getAppCalendar(app_id: Number, attributes: AppCalendarAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/app/${app_id}/`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the app calendar in the iCal format 90 days into the future. The {token} in the URI refers to the user's calendar_code and can be retrieved by getting the user status.
   * @param app_id
   * @param user_id
   * @param token
   * @returns
   */
  getAppCalendarAsICal(app_id: Number, user_id: Number, token: Number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/app/${app_id}/ics/${user_id}/${token}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the calendar summary for the active user
   * @param attributes
   * @returns
   */
  getSummary(attributes: SummaryAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/summary`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the calendar summary for personal tasks and personal spaces and sub-orgs.
   * @param attributes
   * @returns
   */
  getSummaryPersonal(attributes: SummaryAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/personal/summary`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the calendar summary for the given space for the active user
   * @param space_id
   * @param attributes
   * @returns
   */
  getSummaryForSpace(space_id: Number, attributes: SummaryAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/space/${space_id}/summary`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the current export for the current linked account and ref
   * @param linked_account_id
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getExportByRef(linked_account_id: Number, ref_type: 'app' | 'space', ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/export/linked_account/${linked_account_id}/${ref_type}/${ref_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the calendar exports for the given reference.
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getExportsByRef(ref_type: 'app' | 'space', ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/export/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all items that the user have access to and all tasks that are assigned to the user.
   * The items and tasks can be filtered by a list of space ids, but tasks without a reference will always be returned.
   * @param attributes
   * @returns
   */
  getAll(attributes: GlobalCalendarAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the user's global calendar in the iCal format 90 days into the future. The {token} in the URI refers to the user's calendar_code and can be retrieved by getting the user status.
   * @param user_id
   * @param token
   * @returns
   */
  iCall(user_id: Number, token: any) {
    const requestObj = {
      method: 'get',
      url: `/calendar/ics/${user_id}/${token}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   *
   * @param linked_account_id
   * @returns
   */
  getGlobalExport(linked_account_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/export/linked_account/${linked_account_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the exports configured for the global calendar
   * @returns
   */
  getGlobalExports() {
    const requestObj = {
      method: 'get',
      url: `/calendar/export/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the calendar for the given date field of the given item in the iCal format.
   * @param item_id
   * @param field_id
   * @returns
   */
  getItemFieldAsICal(item_id: Number, field_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/item/${item_id}/field/${field_id}/ics/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the events in the primary calendar of the linked account in the given interval
   * @param linked_account_id
   * @returns
   */
  getLinkedAccountCalendar(linked_account_id: Number, attributes: LinkedAccountCalendarAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/linked_account/${linked_account_id}/`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all items and tasks that the user have access to in the given space.
   * Tasks with reference to other spaces are not returned or tasks with no reference.
   * @param space_id
   * @param attributes
   * @returns
   */
  getSpaceCalendar(space_id: Number, attributes: SpaceCalendarAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/space/${space_id}/`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the space calendar in the iCal format 90 days into the future.
   * @param space_id
   * @param user_id
   * @param token
   * @returns
   */
  getSpaceCalendarAsICal(space_id: Number, user_id: Number, token: any) {
    const requestObj = {
      method: 'get',
      url: `/calendar/space/${space_id}/ics/${user_id}/${token}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the calendar for the given task in the iCal format.
   * @param task_id
   * @returns
   */
  getTaskCalendarAsICal(task_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/task/${task_id}/ics/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Move event in external calendar linked by linked_account
   * @param linked_account_id
   * @param uid
   * @returns
   */
  moveExternalCalendarEvent(linked_account_id: Number, uid: Number, attributes: MoveExternalCalendarEventAttributes) {
    const requestObj = {
      method: 'post',
      url: `/calendar/linked_account/${linked_account_id}/event/${uid}/move`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Update the calendar event with the given UID with a new start and end time.
   * All dates and times should be given in the users local timezone.
   * @param uid
   * @param attributes
   * @returns
   */
  update(uid: Number, attributes: UpdateAttributes) {
    const requestObj = {
      method: 'put',
      url: `/calendar/event/${uid}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Change duration of external event
   * @param linked_account_id
   * @param uid
   * @param attributes
   * @returns
   */
  updateExternalCalendarEventDuration(
    linked_account_id: Number,
    uid: Number,
    attributes: UpdateExternalCalendarEventDurationAttributes,
  ) {
    const requestObj = {
      method: 'put',
      url: `/calendar/linked_account/${linked_account_id}/event/${uid}/duration`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
