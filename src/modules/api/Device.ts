import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';

export default class Device extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Pushes the app to the active users mobile phone(s).
   * @param app_id
   * @returns
   */
  install(app_id: Number) {
    const requestObj = {
      method: 'post',
      url: `/mobile/install_app/${app_id}`,
    };
    return this._httpRequest(requestObj);
  }
}
