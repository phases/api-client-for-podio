import { AuthToken } from '../../types/podio.type';
import Api from './Api';

type ClientType = 'email' | 'mobile';
type NotificationType =
  | 'digest'
  | 'bulletin'
  | 'reference'
  | 'message'
  | 'space'
  | 'subscription'
  | 'user'
  | 'reminder'
  | 'push_notification'
  | 'push_notification_sound'
  | 'push_notification_browser';

export default class User extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Deletes the property for the active user with the given name. The property is specific to the auth client used.
   * @param name
   * @returns
   */
  deleteProperty(name: string) {
    const requestObj = {
      method: 'delete',
      url: `/user/property/${name}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Get's the setting for the given client type and notification type.
   * @param client_type
   * @param notification_type
   * @returns
   */
  getNotificationSetting(client_type: ClientType, notification_type: NotificationType) {
    const requestObj = {
      method: 'get',
      url: `/user/setting/${client_type}/${notification_type}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Get's the setting for the given client type
   * @param client_type
   * @param notification_type
   * @returns
   */
  getNotificationSettings(client_type: ClientType, notification_type: NotificationType) {
    const requestObj = {
      method: 'get',
      url: `/user/setting/${client_type}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the field of the profile for the given key from the active user.
   * @param key
   * @returns
   */
  getProfileField(key: string) {
    const requestObj = {
      method: 'get',
      url: `/user/profile/${key}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Gets the active user.
   * @param key
   * @returns
   */
  get() {
    const requestObj = {
      method: 'get',
      url: `/user`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the value of the property for the active user with the given name. The property is specific to the auth client used.
   * @param name
   * @returns
   */
  getProperty(name: string) {
    const requestObj = {
      method: 'get',
      url: `/user/property/${name}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the current status for the user. This includes the user data, profile data and notification data.
   * @returns
   */
  getStatus() {
    const requestObj = {
      method: 'get',
      url: `/user/status`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Sets the values of one or more properties for the active user. The properties are specific to the auth client used.
   * @param attributes
   * @returns
   */
  setProperties(attributes: any) {
    const requestObj = {
      method: 'put',
      url: `/user/property/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Sets the value of the property for the active user with the given name. The property is specific to the auth client used.
   * @param name
   * @param attributes
   * @returns
   */
  setProperty(name: string, attributes: any) {
    const requestObj = {
      method: 'put',
      url: `/user/property/${name}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the setting for the given client type and notification type.
   * @param client_type
   * @param notification_type
   * @param attributes
   * @returns
   */
  updateNotificationSetting(client_type: ClientType, notification_type: NotificationType, attributes: any) {
    const requestObj = {
      method: 'put',
      url: `/user/setting/${client_type}/${notification_type}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the setting for the given client type
   * @param client_type
   * @param attributes
   * @returns
   */
  updateNotificationSettings(client_type: ClientType, attributes: any) {
    const requestObj = {
      method: 'put',
      url: `/user/setting/${client_type}/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the fields of an existing profile. Fields not specified will not be updated. To delete a field set the value of the field to null.
   * @param attributes
   * @returns
   */
  updateProfile(attributes: any) {
    const requestObj = {
      method: 'put',
      url: `/user/profile/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the specific field on the user
   * @param key
   * @param attributes
   * @returns
   */
  updateProfileField(key: string, attributes: any) {
    const requestObj = {
      method: 'put',
      url: `/user/profile/${key}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
