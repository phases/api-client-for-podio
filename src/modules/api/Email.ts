import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import {
  Name,
  RefType,
  UpdateAppEmailAttributes,
  ExportRefContactToLinkedAccountAttributes,
} from '@customTypes/email.type';

export default class Email extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Exports the email contact for the given reference and name to the linked account given in the body.
   * @param name
   * @param ref_type
   * @param ref_id
   * @param attributes
   * @returns
   */
  exportRefContactToLinkedAccount(
    name: Name,
    ref_type: RefType,
    ref_id: Number,
    attributes: ExportRefContactToLinkedAccountAttributes,
  ) {
    const requestObj = {
      method: 'post',
      url: `/email/contact/${name}/${ref_type}/${ref_id}/export`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Exports the email contact for the given name to the linked account given in the body
   * @param name
   * @param attributes
   * @returns
   */
  exportGlobalContactToLinkedAccount(name: 'task', attributes: { linked_account_id: Number }) {
    const requestObj = {
      method: 'post',
      url: `/email/contact/${name}/export`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the current email configuration for the given app
   * @param app_id
   * @returns
   */
  getAppConfiguration(app_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/email/app/${app_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Return the email contact for the given reference and name
   * @param name
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getContactForReference(name: Name, ref_type: RefType, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}/${ref_type}/${ref_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Return the email contact for the given reference and name.
   * @param name
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getContactForReferenceAsVCard(name: Name, ref_type: RefType, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}/${ref_type}/${ref_id}/vcard`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the email contact for the given name. Valid names are:
   * @param name
   * @returns
   */
  getGlobalContacts(name: 'task') {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the email contact as a vcard for the given name
   * @param name
   * @returns
   */
  getGlobalContactsAsVCard(name: 'task') {
    const requestObj = {
      method: 'get',
      url: `/email/contact/${name}/vcard`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the subscription status for all the email groups.
   * @returns
   */
  getGroups() {
    const requestObj = {
      method: 'get',
      url: `/email/group/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the app email configuration
   * @param app_id
   * @returns
   */
  updateAppConfiguration(app_id: Number, attributes: UpdateAppEmailAttributes) {
    const requestObj = {
      method: 'put',
      url: `/email/app/${app_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
