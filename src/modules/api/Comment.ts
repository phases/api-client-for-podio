import { HttpResponse } from '../../types/http.type';
import { AuthToken } from '../../types/podio.type';
import { SimpleObject } from '../../types/basic.type';
import Api from './Api';
import { Comment as CommentType, Revision as RevisionType } from '../../types/comment.type';

export default class Comment extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Get comments on object
   * @see https://developers.podio.com/doc/comments/get-comments-on-object-22371
   * @param {string} type
   * @param {number} ref_id
   * @param {number} offset
   * @param {number} limit
   * @returns {Promise<HttpResponse>}
   */

  getFor(type: string, ref_id: number, offset: number = 0, limit: number = 100): Promise<HttpResponse<CommentType[]>> {
    const requestObj = {
      method: 'get',
      url: `/comment/${type}/${ref_id}?offset=${offset}&limit=${limit}`,
    };

    return this._httpRequest<CommentType[]>(requestObj);
  }

  /**
   * Get comment API
   * @see https://developers.podio.com/doc/comments/get-a-comment-22345
   * @param {number} comment_id
   * @returns {Promise<HttpResponse>}
   */

  get(comment_id: number): Promise<HttpResponse<CommentType>> {
    const requestObj = {
      method: 'get',
      url: `/comment/${comment_id}`,
    };

    return this._httpRequest<CommentType>(requestObj);
  }

  /**
   * Create comment
   * @see https://developers.podio.com/doc/comments/add-comment-to-object-22340
   * @param {string} type
   * @param {number} id
   * @param {SimpleObject} attributes
   * @param {boolean} alert_invite
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse>}
   */

  create(
    type: string,
    id: number,
    attributes: SimpleObject,
    alert_invite: boolean = false,
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/comment/${type}/${id}?alert_invite=${alert_invite}&silent=${silent}&hook=${hook}`,
      data: attributes,
    };

    return this._httpRequest<CommentType>(requestObj);
  }

  /**
   * Update comment
   * @see https://developers.podio.com/doc/comments/update-a-comment-22346
   * @param {number} comment_id
   * @param {SimpleObject} attributes
   * @returns {Promise<HttpResponse>}
   */

  update(comment_id: number, attributes: SimpleObject): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/comment/${comment_id}`,
      data: attributes,
    };

    return this._httpRequest<string>(requestObj);
  }

  /**
   * Delete comment from Podio
   * @see https://developers.podio.com/doc/comments/delete-a-comment-22347
   * @param {number} comment_id
   * @returns {Promise<HttpResponse>}
   */

  delete(comment_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/comment/${comment_id}`,
    };

    return this._httpRequest<string>(requestObj);
  }

  /**
   * Comment revisions
   * @see https://developers.podio.com/doc/comments/get-comment-revisions-256356096
   * @param {number} comment_id
   * @returns {Promise<HttpResponse>}
   */

  revisions(comment_id: number): Promise<HttpResponse<RevisionType[]>> {
    const requestObj = {
      method: 'get',
      url: `/comment/${comment_id}/revision`,
    };

    return this._httpRequest<RevisionType[]>(requestObj);
  }
}
