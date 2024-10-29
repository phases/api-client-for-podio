import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { HttpResponse } from '@customTypes/http.type';

export default class Friend extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/friends/remove-friend-s-34531812
   * Remove from friend(s) the user(s) with the given user id(s).
   * If more than one, user ids are comma separated.
   * @param {string} user_ids
   * @returns
   */
  delete(user_ids: String): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/friend/${user_ids}`,
    };
    return this._httpRequest<string>(requestObj);
  }
}
