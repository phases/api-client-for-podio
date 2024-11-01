import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';

export default class Friend extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Remove from friend(s) the user(s) with the given user id(s).
   * If more than one, user ids are comma separated.
   * @param user_ids
   * @returns
   */
  delete(user_ids: String) {
    const requestObj = {
      method: 'delete',
      url: `/friend/${user_ids}`,
    };
    return this._httpRequest(requestObj);
  }
}
