import { AuthToken } from '@customTypes/podio.type';
import { HttpResponse } from '../../types/http.type';
import Api from './Api';
import {
  OrganizationType,
  CreateType,
  Admin as AdminType,
  Shared as SharedType,
  ProfileType,
} from '../../types/organization.type';
import { Space as SpaceType } from '../../types/space.type';

export default class Organization extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Creates a new organization.
   * @see https://developers.podio.com/doc/organizations/add-new-organization-22385
   * @param attributes
   * @returns {Promise<HttpResponse<CreateType>>}
   */
  create(attributes: any): Promise<HttpResponse<CreateType>> {
    const requestObj = {
      method: 'post',
      url: `/org/`,
      data: attributes,
    };
    return this._httpRequest<CreateType>(requestObj);
  }

  /**
   * Creates an app store profile for the organization if it doesn't already exist.
   * @see https://developers.podio.com/doc/organizations/create-organization-app-store-profile-87819
   * @param {number} org_id
   * @param attributes
   * @returns
   */
  createOrganizationProfile(org_id: number, attributes: any): Promise<HttpResponse<ProfileType>> {
    const requestObj = {
      method: 'post',
      url: `/org/${org_id}/appstore`,
      data: attributes,
    };
    return this._httpRequest<ProfileType>(requestObj);
  }

  /**
   * Deletes the organizations app store profile
   * @see https://developers.podio.com/doc/organizations/delete-organization-app-store-profile-87808
   * @param {number} org_id
   * @returns
   */
  deleteOrganizationProfile(org_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/org/${org_id}/appstore`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Removes the role from the given user on the given organization.
   * @see https://developers.podio.com/doc/organizations/delete-organization-member-role-935217
   * @param {number} org_id
   * @param {number} user_id
   * @returns
   */
  deleteOrganizationMemberRole(org_id: number, user_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/org/${org_id}/member/${user_id}/role`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Ends the users membership of all spaces in the organization.
   * In workspaces in the organization where the user is the last admin, other users will be promoted to admins.
   * Workspaces where the user is the only member will be deleted.
   * @see https://developers.podio.com/doc/organizations/end-organization-membership-50689
   * @param {number} org_id
   * @param {number} user_id
   * @returns
   */
  deleteOrganizationMember(org_id: number, user_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'delete',
      url: `/org/${org_id}/member/${user_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Get Orgs For which given email is an admin along with free orgs where email is part of
   * @see https://developers.podio.com/doc/organizations/get-admin-orgs-by-email-1685869693
   * @param {string} email
   * @returns
   */
  getAdminOrgByEmail(email: string): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/org/admin-orgs/${email}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all workspaces in an organization, when the admin viewing this information is not a member of a workspace, the name will not be returned.
   * @see https://developers.podio.com/doc/organizations/get-all-spaces-on-organization-11902608
   * @param {number} org_id
   * @returns
   */
  getAllSpaces(org_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/all_spaces/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Gets the organization with the given id.
   * @see https://developers.podio.com/doc/organizations/get-organization-22383
   * @param {number} org_id
   * @returns {Promise<HttpResponse<OrganizationType>>}
   */
  get(org_id: number): Promise<HttpResponse<OrganizationType>> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}`,
    };
    return this._httpRequest<OrganizationType>(requestObj);
  }

  /**
   * Returns the administrators of the organization.
   * @see https://developers.podio.com/doc/organizations/get-organization-admins-81542
   * @param {number} org_id
   * @returns {Promise<HttpResponse<AdminType[]>>}
   */
  getAllAdmins(org_id: number): Promise<HttpResponse<AdminType[]>> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/admin/`,
    };
    return this._httpRequest<AdminType[]>(requestObj);
  }

  /**
   * Gets the appstore profile of an organization, if any.
   * @see https://developers.podio.com/doc/organizations/get-organization-app-store-profile-87799
   * @param  {number} org_id
   * @returns
   */
  getAppStoreProfile(org_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/appstore`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the organization with the given full URL.
   * The URL does not have to be truncated to the root, it can be to any resource on the URL.
   * @see https://developers.podio.com/doc/organizations/get-organization-by-url-22384
   * @param {any} attributes
   * @returns {Promise<HttpResponse<OrganizationType>>}
   */
  getForUrl(attributes: any): Promise<HttpResponse<OrganizationType>> {
    const requestObj = {
      method: 'get',
      url: `/org/url`,
      params: attributes,
    };
    return this._httpRequest<OrganizationType>(requestObj);
  }

  /**
   * Returns the login report for the organization.
   * This reports list the total number of users and the total number of active users per week.
   * @see https://developers.podio.com/doc/organizations/get-organization-login-report-51730
   * @param {number} org_id
   * @param {any} attributes
   * @returns
   */
  getLoginReport(org_id: number, attributes: any): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/report/login/`,
      params: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the member data for the given user in the given organization.
   * @see https://developers.podio.com/doc/organizations/get-organization-member-50908
   * @param {number} org_id
   * @param {number} user_id
   * @returns
   */
  getMember(org_id: number, user_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/member/${user_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the members, both invited and active, of the given organization.
   * This method is only available for organization administrators.
   * For users only invited, only very limited information will be returned for the user and profile.
   * @see https://developers.podio.com/doc/organizations/get-organization-members-50661
   * @param {number} org_id
   * @returns
   */
  getMembers(org_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/member/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns a list of all the organizations and spaces the user is member of.
   * @see https://developers.podio.com/doc/organizations/get-organizations-22344
   * @returns {Promise<HttpResponse<OrganizationType[]>> }
   */

  getAll(): Promise<HttpResponse<OrganizationType[]>> {
    const requestObj = {
      method: 'get',
      url: `/org/`,
    };
    return this._httpRequest<OrganizationType[]>(requestObj);
  }

  /**
   * Returns the organizations and spaces that the logged in user shares with the specified user. The organizations and spaces will be returned sorted by name.
   * @see https://developers.podio.com/doc/organizations/get-shared-organizations-22411
   * @param {number} user_id
   * @returns {Promise<HttpResponse<SharedType[]>> }
   */
  getShared(user_id: number): Promise<HttpResponse<SharedType[]>> {
    const requestObj = {
      method: 'get',
      url: `/org/shared/${user_id}`,
    };
    return this._httpRequest<SharedType[]>(requestObj);
  }

  /**
   * Returns all space memberships the specified org member has in this organization. If the org admin requesting this information is not a member of any of these workspaces, sensitive information like name and url will not be exposed.
   * @see https://developers.podio.com/doc/organizations/get-space-memberships-for-org-member-11902943
   * @param {number} org_id
   * @param {number} user_id
   * @returns
   */
  getSpaceMembership(org_id: number, user_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/member/${user_id}/space_member/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the spaces for the organization.
   * @see https://developers.podio.com/doc/organizations/get-spaces-on-organization-22387
   * @param {number} org_id
   * @returns {Promise<HttpResponse<SpaceType[]>>}
   */

  getSpaces(org_id: number): Promise<HttpResponse<SpaceType[]>> {
    const requestObj = {
      method: 'get',
      url: `/org/${org_id}/space/`,
    };
    return this._httpRequest<SpaceType[]>(requestObj);
  }

  /**
   * Updates an organization with new name and logo.
   * Note that the URL of the organization will not change even though the name changes.
   * @see https://developers.podio.com/doc/organizations/update-organization-22386
   * @param {number} org_id
   * @param {any} attributes
   * @returns
   */
  update(org_id: number, attributes: any): Promise<HttpResponse> {
    const requestObj = {
      method: 'put',
      url: `/org/${org_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the appstore profile of the organization.
   * @see https://developers.podio.com/doc/organizations/update-organization-app-store-profile-87805
   * @param {number} org_id
   * @param {any} attributes
   * @returns
   */
  updateOrganizationProfile(org_id: number, attributes: any): Promise<HttpResponse> {
    const requestObj = {
      method: 'put',
      url: `/org/${org_id}/appstore`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
