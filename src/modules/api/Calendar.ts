import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import {
  Calendar as CalendarType,
  AppCalendarAttributes,
  FilterAppCalendarAttributes,
  GlobalCalendarAttributes,
  LinkedAccountCalendarAttributes,
  MoveExternalCalendarEventAttributes,
  SpaceCalendarAttributes,
  SummaryAttributes,
  UpdateAttributes,
  UpdateExternalCalendarEventDurationAttributes,
  Summary,
} from '@customTypes/calendar.type';
import { HttpResponse } from '@customTypes/http.type';

export default class Calendar extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/calendar/filter-app-calendar-198354260
   * Returns the calendar for the given app filtered using the item filters.
   * @param {number}app_id
   * @param {FilterAppCalendarAttributes}attributes
   * @returns
   */
  filterAppCalendar(app_id: number, attributes: FilterAppCalendarAttributes): Promise<HttpResponse<CalendarType>> {
    const requestObj = {
      method: 'post',
      url: `/calendar/app/${app_id}/filter`,
      data: attributes,
    };
    return this._httpRequest<CalendarType>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/calendar/get-app-calendar-22460
   * Returns the items and tasks that are related to the given app.
   * @param {number}app_id
   * @param {AppCalendarAttributes}attributes
   * @returns
   */
  getAppCalendar(app_id: number, attributes: AppCalendarAttributes): Promise<HttpResponse<CalendarType>> {
    const requestObj = {
      method: 'get',
      url: `/calendar/app/${app_id}/`,
      params: attributes,
    };
    return this._httpRequest<CalendarType>(requestObj);
  }

  /**
   * Returns the app calendar in the iCal format 90 days into the future. The {token} in the URI refers to the user's calendar_code and can be retrieved by getting the user status.
   * @param app_id
   * @param user_id
   * @param token
   * @returns
   */
  getAppCalendarAsICal(app_id: number, user_id: number, token: number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/app/${app_id}/ics/${user_id}/${token}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/calendar/get-calendar-summary-1609256
   * Returns the calendar summary for the active user
   * @param {SummaryAttributes} attributes
   * @returns
   */
  getSummary(attributes: SummaryAttributes): Promise<HttpResponse<Summary>> {
    const requestObj = {
      method: 'get',
      url: `/calendar/summary`,
      params: attributes,
    };
    return this._httpRequest<Summary>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/calendar/get-calendar-summary-for-personal-1657903
   * Returns the calendar summary for personal tasks and personal spaces and sub-orgs.
   * @param {SummaryAttributes}attributes
   * @returns
   */
  getSummaryPersonal(attributes: SummaryAttributes): Promise<HttpResponse<Summary>> {
    const requestObj = {
      method: 'get',
      url: `/calendar/personal/summary`,
      params: attributes,
    };
    return this._httpRequest<Summary>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/calendar/get-calendar-summary-for-space-1609328
   * Returns the calendar summary for the given space for the active user
   * @param {number}space_id
   * @param {SummaryAttributes}attributes
   * @returns
   */
  getSummaryForSpace(space_id: number, attributes: SummaryAttributes): Promise<HttpResponse<Summary>> {
    const requestObj = {
      method: 'get',
      url: `/calendar/space/${space_id}/summary`,
      params: attributes,
    };
    return this._httpRequest<Summary>(requestObj);
  }

  /**
   * Returns the current export for the current linked account and ref
   * @param linked_account_id
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getExportByRef(linked_account_id: number, ref_type: 'app' | 'space', ref_id: number) {
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
  getExportsByRef(ref_type: 'app' | 'space', ref_id: number) {
    const requestObj = {
      method: 'get',
      url: `/calendar/export/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/calendar/get-global-calendar-22458
   * Returns all items that the user have access to and all tasks that are assigned to the user.
   * The items and tasks can be filtered by a list of space ids, but tasks without a reference will always be returned.
   * @param {GlobalCalendarAttributes}attributes
   * @returns
   */
  getAll(attributes: GlobalCalendarAttributes): Promise<HttpResponse<CalendarType[]>> {
    const requestObj = {
      method: 'get',
      url: `/calendar/`,
      params: attributes,
    };
    return this._httpRequest<CalendarType[]>(requestObj);
  }

  /**
   * Returns the user's global calendar in the iCal format 90 days into the future. The {token} in the URI refers to the user's calendar_code and can be retrieved by getting the user status.
   * @param user_id
   * @param token
   * @returns
   */
  iCall(user_id: number, token: any) {
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
  getGlobalExport(linked_account_id: number) {
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
  getItemFieldAsICal(item_id: number, field_id: number) {
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
  getLinkedAccountCalendar(linked_account_id: number, attributes: LinkedAccountCalendarAttributes) {
    const requestObj = {
      method: 'get',
      url: `/calendar/linked_account/${linked_account_id}/`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/calendar/get-space-calendar-22459
   * Returns all items and tasks that the user have access to in the given space.
   * Tasks with reference to other spaces are not returned or tasks with no reference.
   * @param {number}space_id
   * @param {SpaceCalendarAttributes} attributes
   * @returns
   */
  getSpaceCalendar(space_id: number, attributes: SpaceCalendarAttributes): Promise<HttpResponse<CalendarType[]>> {
    const requestObj = {
      method: 'get',
      url: `/calendar/space/${space_id}/`,
      params: attributes,
    };
    return this._httpRequest<CalendarType[]>(requestObj);
  }

  /**
   * Returns the space calendar in the iCal format 90 days into the future.
   * @param space_id
   * @param user_id
   * @param token
   * @returns
   */
  getSpaceCalendarAsICal(space_id: number, user_id: number, token: any) {
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
  getTaskCalendarAsICal(task_id: number) {
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
  moveExternalCalendarEvent(linked_account_id: number, uid: number, attributes: MoveExternalCalendarEventAttributes) {
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
  update(uid: number, attributes: UpdateAttributes) {
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
    linked_account_id: number,
    uid: number,
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
