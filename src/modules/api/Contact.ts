import { AuthToken } from '../../types/podio.type';
import Api from './Api';
import { HttpResponse } from '../../types/http.type';
import { Contact as ContactType, CreateContact } from '../../types/contact.type';
import { ContactTotal } from '../../types/contact-total.type';
import { ContactTotalsForSpace } from '../../types/contact-total-space.type';
import { Object } from '../../types/basic.type';


export default class Contact extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Creates a new space contact for use by everyone on the space.
   * @param space_id
   * @param attributes
   * @returns
   */
  create(space_id: number, attributes: Object): Promise<HttpResponse<CreateContact>> {
    const requestObj = {
      method: 'post',
      url: `/contact/space/${space_id}/`,
      data: attributes,
    };
    return this._httpRequest<CreateContact>(requestObj);
  }

  /**
   * Deletes the contact(s) with the given id(s). It is currently only allowed to delete contacts of type "space".
   * Profile ids can be separated by comma.
   * @param profile_ids
   * @returns
   */
  delete(profile_ids: number | string): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/contact/${profile_ids}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Returns the total number of contacts for the active user.
   * @returns
   */
  getTotals(): Promise<HttpResponse<ContactTotal>> {
    const requestObj = {
      method: 'get',
      url: `/contact/totals/v3/`,
    };
    return this._httpRequest<ContactTotal>(requestObj);
  }

  /**
   * Returns all the contact details about the contact(s) with the given profile id(s).
   * Profile ids can be separated by comma.
   * @param profile_ids
   * @param attributes
   * @returns
   */
  get(profile_ids: number | string, attributes: any = {}): Promise<HttpResponse<ContactType>> {
    const requestObj = {
      method: 'get',
      url: `/contact/${profile_ids}/v2`,
      params: attributes,
    };
    return this._httpRequest<ContactType>(requestObj);
  }

  /**
   * Used to get a list of contacts for the user.
   * @param attributes
   * @returns
   */
  getAll(attributes: any = {}): Promise<HttpResponse<ContactType[]>> {
    const requestObj = {
      method: 'get',
      url: `/contact/`,
      params: attributes,
    };
    return this._httpRequest<ContactType[]>(requestObj);
  }

  /**
   * Loads the contact from the given linked account with the given external id. The linked account must support the "contacts" capability.
   * @param linked_account_id
   * @returns
   */
  getLinkedAccount(linked_account_id: number) {
    const requestObj = {
      method: 'post',
      url: `/contact/linked_account/${linked_account_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Loads the contacts from the given linked account. The linked account must support the "contacts" capability.
   * @param linked_account_id
   * @param attributes
   * @returns
   */
  getLinkedAccounts(linked_account_id: number, attributes: any = {}) {
    const requestObj = {
      method: 'get',
      url: `/contact/linked_account/${linked_account_id}`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the profiles of the users contacts on the given organization. For the details of the possible return values, see the area.
   * @param org_id
   * @param attributes
   * @returns
   */
  getForOrg(org_id: number, attributes: any = {}): Promise<HttpResponse<ContactType[]>> {
    const requestObj = {
      method: 'get',
      url: `/contact/org/${org_id}`,
      params: attributes,
    };
    return this._httpRequest<ContactType[]>(requestObj);
  }

  /**
   * Returns the skills of related contacts, ordered by most frequently used.
   * @param attributes
   * @returns
   */
  getSkills(attributes: any = {}): Promise<HttpResponse<String[]>> {
    const requestObj = {
      method: 'get',
      url: `/contact/skill/`,
      params: attributes,
    };
    return this._httpRequest<String[]>(requestObj);
  }

  /**
   * Returns the total number of contacts on the space
   * @param space_id
   * @returns
   */
  getTotalsForSpace(space_id: number): Promise<HttpResponse<ContactTotalsForSpace>> {
    const requestObj = {
      method: 'get',
      url: `/contact/space/${space_id}/totals/space`,
    };
    return this._httpRequest<ContactTotalsForSpace>(requestObj);
  }

  /**
   * Returns the contact with the given user id.
   * @param user_id
   * @returns
   */
  getForUser(user_id: number): Promise<HttpResponse<ContactType>> {
    const requestObj = {
      method: 'get',
      url: `/contact/user/${user_id}`,
    };
    return this._httpRequest<ContactType>(requestObj);
  }

  /**
   * TODO: check the key
   * Returns the value of a contact with the specific field. For the possible keys to use, see the area.
   * @param user_id
   * @param key
   * @returns
   */
  getFieldForUser(user_id: number, key: string): Promise<HttpResponse<ContactType>> {
    const requestObj = {
      method: 'get',
      url: `/contact/user/${user_id}/${key}`,
    };
    return this._httpRequest<ContactType>(requestObj);
  }

  /**
   * Returns the vCard for the given contact.
   * @param profile_id
   * @returns
   */
  vCard(profile_id: number): Promise<HttpResponse<String>> {
    const requestObj = {
      method: 'get',
      url: `/contact/${profile_id}/vcard`,
    };
    return this._httpRequest<String>(requestObj);
  }

  /**
   * Updates the contact with the given profile id. It is currently only possible to update contacts of type "space".
   * @param profile_id
   * @param attributes
   * @returns
   */
  update(profile_id: number, attributes:Object): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/contact/${profile_id}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }
}
