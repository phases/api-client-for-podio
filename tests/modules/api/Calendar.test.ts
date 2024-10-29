import { jest, it, describe, expect, beforeEach } from '@jest/globals';
import Api from '../../../src/modules/api/Api';
import Calendar from '../../../src/modules/api/Calendar';
import {
  AppCalendarAttributes,
  FilterAppCalendarAttributes,
  SummaryAttributes,
  GlobalCalendarAttributes,
  SpaceCalendarAttributes,
  MoveExternalCalendarEventAttributes,
  UpdateAttributes,
  UpdateExternalCalendarEventDurationAttributes,
  LinkedAccountCalendarAttributes,
} from '../../../src/types/calendar.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const app_id = 12312,
  user_id = 123123,
  token = 1231321,
  space_id = 1231321,
  linked_account_id = 12312,
  ref_type = 'app',
  ref_id = 123123,
  item_id = 123123,
  field_id = 123123,
  task_id = 123123,
  uid = 123123,
  filterAppCalendarAttributes: FilterAppCalendarAttributes = {
    date_from: '',
    date_to: '',
    priority: '',
    tasks: true,
    view_id: 12312,
    filters: {},
  },
  appCalendarAttributes: AppCalendarAttributes = {
    date_from: '',
    date_to: '',
    priority: '',
  },
  summaryAttributes: SummaryAttributes = {
    limit: 10,
    priority: 2,
  },
  globalCalendarAttributes: GlobalCalendarAttributes = {
    date_from: '',
    date_to: '',
    priority: 2,
    tasks: true,
  },
  spaceCalendarAttributes: SpaceCalendarAttributes = {
    date_from: '',
    date_to: '',
    priority: 2,
    tasks: true,
  },
  moveExternalCalendarAttributes: MoveExternalCalendarEventAttributes = {
    day_delta: 1,
    minute_delta: 12,
    all_day: false,
  },
  updateAttrubute: UpdateAttributes = {
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
  },
  updateExternalCalendarEvnetDuationAttriubutes: UpdateExternalCalendarEventDurationAttributes = {
    day_delta: 1,
    minute_delta: 2,
  },
  linkedAccountCalendarAttributes: LinkedAccountCalendarAttributes = {
    date_from: '',
    date_to: '',
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

function calendarInstance(): Calendar {
  return new Calendar({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('calendar instance properties test', () => {
  const calendar = calendarInstance();

  it('should match the properites', () => {
    expect(calendar instanceof Api).toBeTruthy();

    expect(calendar.auth.access_token).toBe(access_token);
    expect(calendar.auth.expires_in).toBe(expires_in);
    expect(calendar.auth.token_type).toBe(token_type);
    expect(calendar.auth.scope).toBe(scope);
    expect(calendar.auth.ref).toBe(ref);
    expect(calendar.auth.refresh_token).toBe(refresh_token);
  });
});

describe('calendar mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const calendar: Calendar = calendarInstance();

  it('filterAppCalendar() properties should match the values', () => {
    calendar.filterAppCalendar(app_id, filterAppCalendarAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/calendar/app/${app_id}/filter`);
    expect(request.data).toBe(filterAppCalendarAttributes);
  });

  it('getAppCalendar() properties should match the values', () => {
    calendar.getAppCalendar(app_id, appCalendarAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/app/${app_id}/`);
    expect(request.data).toBe(appCalendarAttributes);
  });

  it('getAppCalendarAsICal() properties should match the values', () => {
    calendar.getAppCalendarAsICal(app_id, user_id, token);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/app/${app_id}/ics/${user_id}/${token}/`);
  });

  it('getSummary() properties should match the values', () => {
    calendar.getSummary(summaryAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/summary`);
    expect(request.data).toBe(summaryAttributes);
  });

  it('getSgetSummaryPersonalummary() properties should match the values', () => {
    calendar.getSummaryPersonal(summaryAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/personal/summary`);
    expect(request.data).toBe(summaryAttributes);
  });

  it('getSummaryForSpace() properties should match the values', () => {
    calendar.getSummaryForSpace(space_id, summaryAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/space/${space_id}/summary`);
    expect(request.data).toBe(summaryAttributes);
  });

  it('getExportByRef() properties should match the values', () => {
    calendar.getExportByRef(linked_account_id, ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/export/linked_account/${linked_account_id}/${ref_type}/${ref_id}`);
  });

  it('getExportsByRef() properties should match the values', () => {
    calendar.getExportsByRef(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/export/${ref_type}/${ref_id}/`);
  });

  it('getAll() properties should match the values', () => {
    calendar.getAll(globalCalendarAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/`);
    expect(request.data).toBe(globalCalendarAttributes);
  });

  it('iCall() properties should match the values', () => {
    calendar.iCall(user_id, token);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/ics/${user_id}/${token}/`);
  });

  it('getGlobalExport() properties should match the values', () => {
    calendar.getGlobalExport(linked_account_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/export/linked_account/${linked_account_id}`);
  });

  it('getGlobalExports() properties should match the values', () => {
    calendar.getGlobalExports();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/export/`);
  });

  it('getItemFieldAsICal() properties should match the values', () => {
    calendar.getItemFieldAsICal(item_id, field_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/item/${item_id}/field/${field_id}/ics/`);
  });

  it('getLinkedAccountCalendar() properties should match the values', () => {
    calendar.getLinkedAccountCalendar(linked_account_id, linkedAccountCalendarAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/linked_account/${linked_account_id}/`);
    expect(request.data).toBe(linkedAccountCalendarAttributes);
  });

  it('getSpaceCalendar() properties should match the values', () => {
    calendar.getSpaceCalendar(space_id, spaceCalendarAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/space/${space_id}/`);
    expect(request.data).toBe(spaceCalendarAttributes);
  });

  it('getSpaceCalendarAsICal() properties should match the values', () => {
    calendar.getSpaceCalendarAsICal(space_id, user_id, token);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/space/${space_id}/ics/${user_id}/${token}/`);
  });

  it('getTaskCalendarAsICal() properties should match the values', () => {
    calendar.getTaskCalendarAsICal(task_id);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/calendar/task/${task_id}/ics/`);
  });

  it('moveExternalCalendarEvent() properties should match the values', () => {
    calendar.moveExternalCalendarEvent(linked_account_id, uid, moveExternalCalendarAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/calendar/linked_account/${linked_account_id}/event/${uid}/move`);
    expect(request.data).toBe(moveExternalCalendarAttributes);
  });

  it('update() properties should match the values', () => {
    calendar.update(uid, updateAttrubute);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/calendar/event/${uid}`);
    expect(request.data).toBe(updateAttrubute);
  });

  it('updateExternalCalendarEventDuration() properties should match the values', () => {
    calendar.updateExternalCalendarEventDuration(linked_account_id, uid, updateExternalCalendarEvnetDuationAttriubutes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toBeCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/calendar/linked_account/${linked_account_id}/event/${uid}/duration`);
    expect(request.data).toBe(updateExternalCalendarEvnetDuationAttriubutes);
  });
});
