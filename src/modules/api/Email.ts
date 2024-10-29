import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import {
  Name,
  RefType,
  UpdateAppEmailAttributes,
  ExportRefContactToLinkedAccountAttributes,
  Email as EmailType,
  EmailConfiguration,
  EmailLinkedAccount,
} from '@customTypes/email.type';
import { HttpResponse } from '@customTypes/http.type';
import { NotificationSettings } from '@customTypes/notification-setting.type';

export default class Email extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/email/export-email-contact-for-reference-to-linked-account-13628926
   * Exports the email contact for the given reference and name to the linked account given in the body.
   * @param {Name}name
   * @param {RefType}ref_type
   * @param {number}ref_id
   * @param {ExportRefContactToLinkedAccountAttributes}attributes
   * @returns
   */
  exportRefContactToLinkedAccount(
    name: Name,
    ref_type: RefType,
    ref_id: number,
    attributes: ExportRefContactToLinkedAccountAttributes,
  ): Promise<HttpResponse<EmailLinkedAccount>> {
    const requestObj = {
      method: 'post',
      url: `/email/contact/${name}/${ref_type}/${ref_id}/export`,
      data: attributes,
    };
    return this._httpRequest<EmailLinkedAccount>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/email/export-global-email-contact-to-linked-account-13629508
   * Exports the email contact for the given name to the linked account given in the body
   * @param {'task'}name
   * @param { linked_account_id: number }attributes
   * @returns
   */
  exportGlobalContactToLinkedAccount(
    name: 'task',
    attributes: { linked_account_id: number },
  ): Promise<HttpResponse<EmailLinkedAccount>> {
    const requestObj = {
      method: 'post',
      url: `/email/contact/${name}/export`,
      data: attributes,
    };
    return this._httpRequest<EmailLinkedAccount>(requestObj);
  }

  /**
   *@see https://developers.podio.com/doc/email/get-app-email-configuration-622338
   * Returns the current email configuration for the given app
   * @param {number}app_id
   * @returns
   */
  getAppConfiguration(app_id: number): Promise<HttpResponse<EmailConfiguration>> {
    const requestObj = {
      method: 'get',
      url: `/email/app/${app_id}`,
    };
    return this._httpRequest<EmailConfiguration>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/email/get-email-contact-for-reference-13716555
   * Return the email contact for the given reference and name
   * @param {Name}name
   * @param {RefType}ref_type
   * @param {number}ref_id
   * @returns
   */
  getContactForReference(name: Name, ref_type: RefType, ref_id: number): Promise<HttpResponse<EmailType>> {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}/${ref_type}/${ref_id}`,
    };
    return this._httpRequest<EmailType>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/email/get-email-contact-for-reference-as-vcard-13628255
   * Return the email contact for the given reference and name.
   * @param {Name}name
   * @param {RefType}ref_type
   * @param {number}ref_id
   * @returns
   */
  getContactForReferenceAsVCard(name: Name, ref_type: RefType, ref_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}/${ref_type}/${ref_id}/vcard`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/email/get-global-contact-13716154
   * Returns the email contact for the given name. Valid names are:
   * @param {'task'}name
   * @returns
   */
  getGlobalContacts(name: 'task'): Promise<HttpResponse<EmailType>> {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}`,
    };
    return this._httpRequest<EmailType>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/email/get-global-email-contact-as-vcard-13624848
   * Returns the email contact as a vcard for the given name
   * @param {'task'}name
   * @returns
   */
  getGlobalContactsAsVCard(name: 'task'): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}/vcard`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/email/get-groups-333977
   * Returns the subscription status for all the email groups.
   * @returns
   */
  getGroups(): Promise<HttpResponse<NotificationSettings>> {
    const requestObj = {
      method: 'get',
      url: `/email/group/`,
    };
    return this._httpRequest<NotificationSettings>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/email/update-app-email-configuration-622851
   * Updates the app email configuration
   * @param {number}app_id
   * @returns
   */
  updateAppConfiguration(
    app_id: number,
    attributes: UpdateAppEmailAttributes,
  ): Promise<HttpResponse<EmailConfiguration>> {
    const requestObj = {
      method: 'put',
      url: `/email/app/${app_id}`,
      data: attributes,
    };
    return this._httpRequest<EmailConfiguration>(requestObj);
  }
}
