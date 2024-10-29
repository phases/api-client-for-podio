import { NotificationSetting, NotificationSettings } from '@customTypes/notification-setting.type';
import { AuthToken } from '../../types/podio.type';
import Api from './Api';
import { HttpResponse } from '@customTypes/http.type';
import { SingleUser, UserProfile, property } from '@customTypes/user.type';

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
type key =
  | 'name'
  | 'avatar'
  | 'birthdate'
  | 'organization'
  | 'department'
  | 'skype'
  | 'about'
  | 'address'
  | 'zip'
  | 'city'
  | 'state'
  | 'country'
  | 'location'
  | 'mail'
  | 'phone'
  | 'title'
  | 'linkedin'
  | 'twitter'
  | 'url'
  | 'skill';

export default class User extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/users/delete-user-property-29800
   * Deletes the property for the active user with the given name. The property is specific to the auth client used.
   * @param {string}name
   * @returns
   */
  deleteProperty(name: string): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/user/property/${name}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/get-notification-setting-3649859
   * Get's the setting for the given client type and notification type.
   * @param {ClientType}client_type
   * @param {NotificationType}notification_type
   * @returns
   */
  getNotificationSetting(
    client_type: ClientType,
    notification_type: NotificationType,
  ): Promise<HttpResponse<NotificationSetting>> {
    const requestObj = {
      method: 'get',
      url: `/user/setting/${client_type}/${notification_type}`,
    };
    return this._httpRequest<NotificationSetting>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/get-notification-settings-3649869
   * Get's the setting for the given client type
   * @param {ClientType}client_type
   * @param notification_type
   * @returns
   */
  getNotificationSettings(
    client_type: ClientType,
    notification_type: NotificationType,
  ): Promise<HttpResponse<NotificationSettings>> {
    const requestObj = {
      method: 'get',
      url: `/user/setting/${client_type}`,
    };
    return this._httpRequest<NotificationSettings>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/get-profile-field-22380
   * Returns the field of the profile for the given key from the active user.
   * @param {key}key
   * @returns
   */
  getProfileField(key: key): Promise<HttpResponse<string[] | number[] | null>> {
    const requestObj = {
      method: 'get',
      url: `/user/profile/${key}`,
    };
    return this._httpRequest<string[] | number[] | null>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/get-user-22378
   * Gets the active user.
   * @param key
   * @returns
   */
  get(): Promise<HttpResponse<SingleUser>> {
    const requestObj = {
      method: 'get',
      url: `/user`,
    };
    return this._httpRequest<SingleUser>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/get-user-property-29798
   * Returns the value of the property for the active user with the given name. The property is specific to the auth client used.
   * @param {string} name
   * @returns
   */
  getProperty(name: string): Promise<HttpResponse<property>> {
    const requestObj = {
      method: 'get',
      url: `/user/property/${name}`,
    };
    return this._httpRequest<property>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/get-user-status-22480
   * Returns the current status for the user. This includes the user data, profile data and notification data.
   * @returns
   */
  getStatus(): Promise<HttpResponse<UserProfile>> {
    const requestObj = {
      method: 'get',
      url: `/user/status`,
    };
    return this._httpRequest<UserProfile>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/set-user-properties-9052829
   * Sets the values of one or more properties for the active user. The properties are specific to the auth client used.
   * @param attributes
   * @returns
   */
  setProperties(attributes: any): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/user/property/`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/set-user-property-29799
   * Sets the value of the property for the active user with the given name. The property is specific to the auth client used.
   * @param {string}name
   * @param attributes
   * @returns
   */
  setProperty(name: string, attributes: any): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/user/property/${name}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   *@see https://developers.podio.com/doc/users/update-notification-setting-3649918
   * Updates the setting for the given client type and notification type.
   * @param {ClientType}client_type
   * @param {NotificationType}notification_type
   * @param attributes
   * @returns
   */
  updateNotificationSetting(
    client_type: ClientType,
    notification_type: NotificationType,
    attributes: any,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/user/setting/${client_type}/${notification_type}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/update-notification-settings-3649927
   * Updates the setting for the given client type
   * @param {ClientType}client_type
   * @param attributes
   * @returns
   */
  updateNotificationSettings(client_type: ClientType, attributes: any): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/user/setting/${client_type}/`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/update-profile-22402
   * Updates the fields of an existing profile. Fields not specified will not be updated. To delete a field set the value of the field to null.
   * @param attributes
   * @returns
   */
  updateProfile(attributes: any): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/user/profile/`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/users/update-profile-field-22500
   * Updates the specific field on the user
   * @param {string}key
   * @param attributes
   * @returns
   */
  updateProfileField(key: string, attributes: any): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/user/profile/${key}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }
}
