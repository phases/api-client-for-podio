import { test, beforeEach, describe, expect, it, jest } from '@jest/globals';
import Conversation from '../../../src/modules/api/Conversation';
import Api from '../../../src/modules/api/Api';
import {
  AddParticipantsAttributes,
  CreateConversationAttributes,
  SearchAttributes,
} from '../../../src/types/conversation.type';

const access_token = 'string';
const expires_in = 1231;
const token_type = 'string';
const scope = 'string';
const ref = { test: 'test' };
const refresh_token = 'string';

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

const conversation_id = 12312,
  ref_type = 'test',
  ref_id = 12312,
  event_id = 12312,
  user_id = 12312,
  flag = 'starred',
  limit = 100,
  offset = 15,
  addParticipantsAttributes: AddParticipantsAttributes = {
    participants: [13123],
  },
  createAttributes: CreateConversationAttributes = {
    subject: 'test',
    text: 'test',
  },
  searchAttribute: SearchAttributes = {
    text: 'test',
  };

function conversationInstance(): Conversation {
  return new Conversation({
    access_token,
    expires_in,
    token_type,
    scope,
    ref,
    refresh_token,
  });
}

describe('conversation properties test', () => {
  const action: Conversation = conversationInstance();
  it('should match the properties', () => {
    expect(action instanceof Api).toBeTruthy();
    expect(action.auth.access_token).toBe(access_token);
    expect(action.auth.expires_in).toBe(expires_in);
    expect(action.auth.token_type).toBe(token_type);
    expect(action.auth.refresh_token).toBe(refresh_token);
  });
});

describe('conversation mock test', () => {
  const spy = jest.spyOn(Api.prototype as any, '_httpRequest');
  spy.mockResolvedValue(mockResponseData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const conversation: Conversation = conversationInstance();

  test('addParticipants() properties should match values', () => {
    conversation.addParticipants(conversation_id, addParticipantsAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/${conversation_id}/participant/v2/`);
    expect(request.data).toBe(addParticipantsAttributes);
  });

  test('createOnObject() propertes should match values', () => {
    conversation.createOnObject(ref_type, ref_id, createAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/${ref_type}/${ref_id}/`);
    expect(request.data).toBe(createAttributes);
  });

  test('create() propertes should match values', () => {
    conversation.create(createAttributes);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/v2/`);
    expect(request.data).toBe(createAttributes);
  });

  test('get() propertes should match values', () => {
    conversation.get(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/${conversation_id}`);
  });

  test('getEvent() propertes should match values', () => {
    conversation.getEvent(event_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/event/${event_id}`);
  });

  test('getEvents() propertes should match values', () => {
    conversation.getEvents(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/${conversation_id}/event/?limit=10&offset=0`);
    conversation.getEvents(conversation_id, limit, offset);
    const requestWithParams: any = spy.mock.calls[1][0];
    expect(requestWithParams.url).toBe(`/conversation/${conversation_id}/event/?limit=${limit}&offset=${offset}`);
  });

  test('getAll() propertes should match values', () => {
    conversation.getAll();
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/?limit=10&offset=0`);
    conversation.getAll(limit, offset);
    const requestWithParams: any = spy.mock.calls[1][0];
    expect(requestWithParams.url).toBe(`/conversation/?limit=${limit}&offset=${offset}`);
  });

  test('getOnObject() propertes should match values', () => {
    conversation.getOnObject(ref_type, ref_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/${ref_type}/${ref_id}/`);
  });

  test('getDirect() propertes should match values', () => {
    conversation.getDirect(user_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/direct/${user_id}`);
  });

  test('getFlaggedCount() propertes should match values', () => {
    conversation.getFlaggedCount(flag);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/${flag}/count`);
  });

  test('getFlagged() propertes should match values', () => {
    conversation.getFlagged(flag);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('get');
    expect(request.url).toBe(`/conversation/${flag}/?limit=10&offset=0`);
    conversation.getFlagged(flag, limit, offset);
    const requestWithParams: any = spy.mock.calls[1][0];
    expect(requestWithParams.url).toBe(`/conversation/${flag}/?limit=${limit}&offset=${offset}`);
  });

  test('leave() propertes should match values', () => {
    conversation.leave(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/${conversation_id}/leave`);
  });

  test('markAllRead() propertes should match values', () => {
    conversation.markAllRead();
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/read`);
  });

  test('markAsRead() propertes should match values', () => {
    conversation.markAsRead(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/${conversation_id}/read`);
  });

  test('markAsUnread() propertes should match values', () => {
    conversation.markAsUnread(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/conversation/${conversation_id}/read`);
  });

  test('reply() propertes should match values', () => {
    conversation.reply(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/${conversation_id}/reply/v2`);
  });

  test('search() propertes should match values', () => {
    conversation.search(searchAttribute);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/search/?limit=10&offset=0`);
    conversation.search(searchAttribute, limit, offset);
    const requestWithParams: any = spy.mock.calls[1][0];
    expect(requestWithParams.url).toBe(`/conversation/search/?limit=${limit}&offset=${offset}`);
  });

  test('star() propertes should match values', () => {
    conversation.star(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('post');
    expect(request.url).toBe(`/conversation/${conversation_id}/star`);
  });

  test('unstar() propertes should match values', () => {
    conversation.unstar(conversation_id);
    const request: any = spy.mock.calls[0][0];
    expect(request.method).toBe('delete');
    expect(request.url).toBe(`/conversation/${conversation_id}/star`);
  });
});
