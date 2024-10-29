import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { HttpResponse } from '@customTypes/http.type';
import { Device as DeviceType } from '../../types/device.type';

export default class Device extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Pushes the app to the active users mobile phone(s).
   * @param app_id
   * @returns
   */
  install(app_id: Number): Promise<HttpResponse<DeviceType>> {
    const requestObj = {
      method: 'post',
      url: `/mobile/install_app/${app_id}`,
    };
    return this._httpRequest<DeviceType>(requestObj);
  }
}
