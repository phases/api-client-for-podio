import { AuthToken } from '../../types/podio.type';
import Api from './Api';

export default class Action extends Api {
  /**
   * Contructor
   * @param props
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Returns the action with the given id
   * @param action_id
   * @returns
   */
  get(action_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/action/${action_id}`,
    };
    return this._httpRequest(requestObj);
  }
}
