import { jest, it, test, describe, expect, beforeEach } from '@jest/globals';
import Task from '../../../src/modules/api/Task';
import Api from '../../../src/modules/api/Api';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

const taskId = 123123;
const attributes = { test: 'test' };
const refType = 'item';
const refId = 12313;
const labelId = 12313;
const spaceId = 12313;
const orgId = 12313;
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

function taskInstance(): Task {
  return new Task({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('task properties test', () => {
  const task: Task = taskInstance();
  it('should match the properties', () => {
    expect(task.auth.access_token).toBe(access_token);
    expect(task.auth.expires_in).toBe(expires_in);
    expect(task.auth.token_type).toBe(token_type);
    expect(task.auth.refresh_token).toBe(refresh_token);
    expect(task instanceof Api).toBeTruthy();
  });
});

describe('task mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const task: Task = taskInstance();

  test('assign request properties should match values', () => {
    task.assign(taskId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/task/${taskId}/assign`);
  });

  test('complete request properties should match values', () => {
    task.complete(taskId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/task/${taskId}/complete`);
  });

  test('create label request properties should match values', () => {
    task.createLabel(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/task/label/`);
    expect(request.data).toBe(attributes);
  });

  test('create request properties should match values', () => {
    task.create(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/task/`);
    expect(request.data).toBe(attributes);
  });

  test('create for request properties should match values', () => {
    task.createFor(refType, refId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/task/${refType}/${refId}/?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    task.createFor(refType, refId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${refType}/${refId}/?silent=${silent}&hook=${hook}`);
  });

  test('delete label request properties should match values', () => {
    task.deleteLabel(labelId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/task/label/${labelId}`);
  });

  test('delete request properties should match values', () => {
    task.delete(taskId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/task/${taskId}`);
  });

  test('get all labels request properties should match values', () => {
    task.getAllLabels();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/label/`);
  });

  test('get request properties should match values', () => {
    task.get(taskId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/${taskId}`);
  });

  test('count by ref request properties should match values', () => {
    task.countByRef(refType, refId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/${refType}/${refId}/count`);
  });

  test('get summary request properties should match values', () => {
    task.getSummary(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/summary`);
    expect(request.data).toBe(attributes);
  });

  test('get summary for org request properties should match values', () => {
    task.getSummaryForOrg(orgId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/org/${orgId}/summary`);
  });

  test('get summary personal request properties should match values', () => {
    task.getSummaryPersonal();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/personal/summary`);
  });

  test('get summary for request properties should match values', () => {
    task.getSummaryFor(refType, refId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/${refType}/${refId}/summary`);
  });

  test('get summary for space request properties should match values', () => {
    task.getSummaryForSpace(spaceId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/space/${spaceId}/summary`);
  });

  test('total by time request properties should match values', () => {
    task.totalByTime('due');
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/total/due`);
  });

  test('total request properties should match values', () => {
    task.total();
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/total/`);
  });

  test('get all request properties should match values', () => {
    task.getAll(attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/task/`);
    expect(request.data).toBe(attributes);
  });

  test('incomplete request properties should match values', () => {
    task.incomplete(taskId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/task/${taskId}/incomplete?silent=false&hook=true`);
    task.incomplete(taskId, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${taskId}/incomplete?silent=${silent}&hook=${hook}`);
  });

  test('rank request properties should match values', () => {
    task.rank(taskId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/task/${taskId}/rank`);
  });

  test('delete ref request properties should match values', () => {
    task.deleteRef(taskId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/task/${taskId}/ref`);
  });

  test('update label request properties should match values', () => {
    task.updateLabel(labelId);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/label/${labelId}`);
  });

  test('update request properties should match values', () => {
    task.update(taskId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/${taskId}?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    task.update(taskId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${taskId}?silent=${silent}&hook=${hook}`);
  });

  test('update description request properties should match values', () => {
    task.updateDescription(taskId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/${taskId}/description?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    task.updateDescription(taskId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${taskId}/description?silent=${silent}&hook=${hook}`);
  });

  test('update due request properties should match values', () => {
    task.updateDueOn(taskId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/${taskId}/due?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    task.updateDueOn(taskId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${taskId}/due?silent=${silent}&hook=${hook}`);
  });

  test('update label request properties should match values', () => {
    task.updateLabels(taskId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/${taskId}/label/`);
    expect(request.data).toBe(attributes);
  });

  test('update private request properties should match values', () => {
    task.updatePrivate(taskId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/${taskId}/private?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    task.updatePrivate(taskId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${taskId}/private?silent=${silent}&hook=${hook}`);
  });

  test('update reference request properties should match values', () => {
    task.updateReference(taskId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/${taskId}/ref?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    task.updateReference(taskId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${taskId}/ref?silent=${silent}&hook=${hook}`);
  });

  test('update text request properties should match values', () => {
    task.updateText(taskId, attributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('put');
    expect(request.url).toBe(`/task/${taskId}/text?silent=false&hook=true`);
    expect(request.data).toBe(attributes);
    task.updateText(taskId, attributes, silent, hook);
    const requestWithOptions: any = spy.mock.calls[1][0];
    expect(requestWithOptions.url).toBe(`/task/${taskId}/text?silent=${silent}&hook=${hook}`);
  });
});
