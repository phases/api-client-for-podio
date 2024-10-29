import Api from './Api';
import { AuthToken } from '../../types/podio.type';
import { HttpResponse } from '../../types/http.type';
import {
  CreateSpaceAttributes,
  SpaceByUrlAttributes,
  Space as SpaceType,
  AvailableSeat as AvailableSeatType,
  AvailableSpace as AvailableSpaceType,
  TopSpace as TopSpaceType,
  CreateSpace as CreateSpaceType,
  UpdateSpace as UpdateSpaceType,
} from '../../types/space.type';

export default class Spaces extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Archives the workspace. This hides it from navigation, but doesn't do anything other than that.
   * @param space_id
   * @returns
   */
  public archive(space_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/space/${space_id}/archive`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Add a new space to an organization.
   * @param attributes
   * @returns
   */
  public create(attributes: CreateSpaceAttributes): Promise<HttpResponse<CreateSpaceType>> {
    const requestObj = {
      method: 'post',
      url: `/space/`,
      data: attributes,
    };
    return this._httpRequest<CreateSpaceType>(requestObj);
  }

  /**
   * Deletes the space with the given id. This will also end all memberships of the space and cancel any space invites still outstanding.
   * @param space_id
   * @returns
   */
  public delete(space_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/space/${space_id}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Returns the available seats. A null value means there is an unlimited number of available seats.
   * @param space_id
   * @returns
   */
  public getAvailableSeats(space_id: number): Promise<HttpResponse<AvailableSeatType>> {
    const requestObj = {
      method: 'get',
      url: `/space/${space_id}/available`,
    };
    return this._httpRequest<AvailableSeatType>(requestObj);
  }

  /**
   * Returns the available spaces for the given organization. This is spaces that are open and available for the user to join
   * @param org_id
   * @returns
   */
  public getAvailableSpaces(org_id: number): Promise<HttpResponse<AvailableSpaceType[]>> {
    const requestObj = {
      method: 'get',
      url: `/space/org/${org_id}/available/`,
    };
    return this._httpRequest<AvailableSpaceType[]>(requestObj);
  }

  /**
   * Returns the workspaces in the organization that are accesible for the active user.
   * @param org_id
   * @returns
   */
  public getOrgSpaces(org_id: number): Promise<HttpResponse<AvailableSpaceType[]>> {
    const requestObj = {
      method: 'get',
      url: `/space/org/${org_id}/`,
    };
    return this._httpRequest<AvailableSpaceType[]>(requestObj);
  }

  /**
   * Get space data from podio
   *
   * @param {number} space_id
   * @returns
   */
  public get(space_id: number): Promise<HttpResponse<SpaceType>> {
    const requestObj = {
      method: 'get',
      url: `/space/${space_id}`,
    };

    return this._httpRequest<SpaceType>(requestObj);
  }

  /**
   * Get space data from podio
   *
   * @param {number} space_id
   * @returns
   */
  public getSpaceByLabel(org_id: number, label: string): Promise<HttpResponse<SpaceType>> {
    const requestObj = {
      method: 'get',
      url: `/space/org/${org_id}/url/${label}`,
    };
    return this._httpRequest<SpaceType>(requestObj);
  }

  /**
   * Returns the space and organization with the given full URL.
   * @param attributes
   * @returns
   */
  public getSpaceByUrl(attributes: SpaceByUrlAttributes): Promise<HttpResponse<SpaceType>> {
    const requestObj = {
      method: 'get',
      url: `/space/url`,
      params: attributes,
    };
    return this._httpRequest<SpaceType>(requestObj);
  }

  /**
   * Returns the top spaces for the user
   * @returns
   */
  public getTopSpaces(): Promise<HttpResponse<TopSpaceType[]>> {
    const requestObj = {
      method: 'get',
      url: `/space/top/`,
    };
    return this._httpRequest<TopSpaceType[]>(requestObj);
  }

  /**
   * Restores an archived workspace. This unhides it from navigation, but doesn't do anything other than that.
   * @param space_id
   * @returns
   */
  public restore(space_id: number): Promise<HttpResponse> {
    const requestObj = {
      method: 'post',
      url: `/space/${space_id}/restore`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the space with the given id
   * @param space_id
   * @returns
   */
  public update(space_id: number): Promise<HttpResponse<UpdateSpaceType>> {
    const requestObj = {
      method: 'put',
      url: `/space/${space_id}`,
    };
    return this._httpRequest<UpdateSpaceType>(requestObj);
  }
}
