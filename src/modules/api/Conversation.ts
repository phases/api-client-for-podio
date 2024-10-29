import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import {
  AddParticipantsAttributes,
  CreateConversationAttributes,
  SearchAttributes,
} from '@customTypes/conversation.type';

export default class Conversation extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Adds new participants to the conversation.
   * @param conversation_id
   * @param attributes
   * @returns
   */
  addParticipants(conversation_id: Number, attributes: AddParticipantsAttributes) {
    const requestObj = {
      method: 'post',
      url: `/conversation/${conversation_id}/participant/v2/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Creates a new conversation on the given object. Works similarly to the create notification method in other regards
   * @param ref_type
   * @param ref_id
   * @param attributes
   * @returns
   */
  createOnObject(ref_type: String, ref_id: Number, attributes: CreateConversationAttributes) {
    const requestObj = {
      method: 'post',
      url: `/conversation/${ref_type}/${ref_id}/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Creates a new conversation with a list of users.
   * Once a conversation is started, the participants cannot (yet) be changed.
   * @param attributes
   * @returns
   */
  create(attributes: CreateConversationAttributes) {
    const requestObj = {
      method: 'post',
      url: `/conversation/v2/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Gets the conversation including participants with the the given id.
   * Only participants in the conversation is allowed to view the conversation
   * @param conversation_id
   * @returns
   */
  get(conversation_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/conversation/${conversation_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns data about the given event.
   * @param event_id
   * @returns
   */
  getEvent(event_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/conversation/event/${event_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the events on the conversation.
   * @param conversation_id
   * @returns
   */
  getEvents(conversation_id: Number, limit: Number = 10, offset: Number = 0) {
    const requestObj = {
      method: 'get',
      url: `/conversation/${conversation_id}/event/?limit=${limit}&offset=${offset}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the users conversations ordered by time of the last event.
   * @returns
   */
  getAll(limit: Number = 10, offset: Number = 0) {
    const requestObj = {
      method: 'get',
      url: `/conversation/?limit=${limit}&offset=${offset}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns a list of all the conversations on the object that the active user is part of.
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getOnObject(ref_type: String, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/conversation/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the existing direct conversation with the user. If none exists a 404 will be returned.
   * @param user_id
   * @returns
   */
  getDirect(user_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/conversation/direct/${user_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the number of conversations with the given flag
   * @param flag
   * @returns
   */
  getFlaggedCount(flag: 'unread' | 'starred') {
    const requestObj = {
      method: 'get',
      url: `/conversation/${flag}/count`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the conversations with the given flag
   * @param flag
   * @returns
   */
  getFlagged(flag: 'unread' | 'starred', limit: Number = 10, offset: Number = 0) {
    const requestObj = {
      method: 'get',
      url: `/conversation/${flag}/?limit=${limit}&offset=${offset}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Leave the given conversation.
   * @param conversation_id
   * @returns
   */
  leave(conversation_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/conversation/${conversation_id}/leave`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Marks all the users conversations as read.
   * @returns
   */
  markAllRead() {
    const requestObj = {
      method: 'post',
      url: `/conversation/read`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Mark the conversation as read.
   * @param conversation_id
   * @returns
   */
  markAsRead(conversation_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/conversation/${conversation_id}/read`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Mark the conversation as unread
   * @param conversation_id
   * @returns
   */
  markAsUnread(conversation_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/conversation/${conversation_id}/read`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Creates a reply to the conversation. Returns the conversation event this generates.
   * @param conversation_id
   * @returns
   */
  reply(conversation_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/conversation/${conversation_id}/reply/v2`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the users conversations that match the given text ordered by time of the last event.
   * @param attributes
   * @param limit
   * @param offset
   * @returns
   * TODO: check if the attribute works, not mentioned the correct way in doc
   */
  search(attributes: SearchAttributes, limit: Number = 10, offset: Number = 0) {
    const requestObj = {
      method: 'post',
      url: `/conversation/search/?limit=${limit}&offset=${offset}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Star the given conversation. If the conversation is already starred, nothing will happen.
   * @param conversation_id
   * @returns
   */
  star(conversation_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/conversation/${conversation_id}/star`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Removes the star from the conversation.
   * @param conversation_id
   * @returns
   */
  unstar(conversation_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/conversation/${conversation_id}/star`,
    };
    return this._httpRequest(requestObj);
  }
}
