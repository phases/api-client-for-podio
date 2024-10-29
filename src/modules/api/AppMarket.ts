import { Shared } from '@customTypes/organization.type';
import {
  AppInstall,
  AppMarketCategory,
  GetShares,
  InstallShareAttributes,
  OwnShare,
  ShareApp,
  ShareAppAttributes,
  UpdateShareAttributes,
} from '../../types/appMarket.type';
import { AuthToken } from '../../types/podio.type';
import Api from './Api';
import { HttpResponse } from '@customTypes/http.type';

export default class AppMarket extends Api {
  /**
   * Contructor
   * @param props
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-categories-37009?code=03ad3ee2e90bb9ae4116b7e049407d34&state=
   * Returns the categories available in the system.
   * @returns
   */
  getCategory(only_used: Boolean = true): Promise<HttpResponse<AppMarketCategory>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/category/?only_used=${only_used}`,
    };
    return this._httpRequest<AppMarketCategory>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-orgs-with-private-shares-211715
   * Returns all the orgs, that the user is member of, and that has shared private apps.
   * @returns
   */
  getOrgWithPrivateShares(): Promise<HttpResponse<Shared>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/org/`,
    };
    return this._httpRequest<Shared>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-own-shares-38645
   * Returns all the apps that the active user has shared.
   * @param { 'app' | 'pack'}type
   * @param {number}limit
   * @param {number}offset
   * @returns
   */
  getOwnShares(type: 'app' | 'pack', limit: number = 6, offset: number = 0): Promise<HttpResponse<OwnShare>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/own/?limit=${limit}&offset=${offset}`,
    };
    return this._httpRequest<OwnShare>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-recommended-shares-5340177
   * Returns the recommended apps in the app market for the given "area". Current areas are: "web" and "mobile".
   * @param {'app' | 'pack'} type
   * @param {'web' | 'mobile'} area
   * @returns
   */
  getRecommendedShares(type: 'app' | 'pack', area: 'web' | 'mobile'): Promise<HttpResponse<OwnShare>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/recommended/${area}/`,
    };
    return this._httpRequest<OwnShare>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-share-22505
   * Returns the shared app from the app market with the given id. It will also return all comments and fivestar ratings of the app.
   * @param {number} share_id
   * @returns
   */
  getShare(share_id: number): Promise<HttpResponse<GetShares>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/${share_id}/v2`,
    };
    return this._httpRequest<GetShares>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-share-by-reference-45002
   * Returns the shares of the given object. The active users shares will be first followed by other users shares.
   * Besides that the shares will be sorted descending by when they were shared.
   * @param {string}ref_type
   * @param {number}ref_id
   * @returns
   */
  getShareByReference(ref_type: String, ref_id: number): Promise<HttpResponse<GetShares[]>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest<GetShares[]>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-shares-by-author-22497
   * Returns all the apps in the app market created by the given user in the given language.
   * @param {'app' | 'pack',} type
   * @param {number} user_id
   * @param {number}limit
   * @param {number}offset
   * @param {'install' | 'rating' | 'popularity' | 'recommended' | 'shared_on' | 'name' = 'install'} sort
   * @returns
   */
  getShareByAuthor(
    type: 'app' | 'pack',
    user_id: number,
    limit: number = 6,
    offset: number = 0,
    sort: 'install' | 'rating' | 'popularity' | 'recommended' | 'shared_on' | 'name' = 'install',
  ): Promise<HttpResponse<OwnShare>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/author/${user_id}/?limit=${limit}&offset=${offset}&sort=${sort}`,
    };
    return this._httpRequest<OwnShare>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-shares-by-category-22498
   * Returns the apps in the app market in the given category and language.
   * @param {'app' | 'pack'} type
   * @param {number} category_id
   * @param {number} limit
   * @param {number} offset
   * @param {'install' | 'rating' | 'popularity' | 'recommended' | 'shared_on' | 'name' = 'install'}sort
   * @returns
   */
  getShareByCategory(
    type: 'app' | 'pack',
    category_id: number,
    limit: number = 6,
    offset: number = 0,
    sort: 'install' | 'rating' | 'popularity' | 'recommended' | 'shared_on' | 'name' = 'install',
  ): Promise<HttpResponse<OwnShare>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/category/${category_id}/?limit=${limit}&offset=${offset}&sort=${sort}`,
    };
    return this._httpRequest<OwnShare>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/get-top-shares-22496
   * Returns the top apps in the app market in the given language.
   * @param {'app' | 'pack'} type
   * @param {number} limit
   * @param {number} offset
   * @returns
   */
  getTopShares(type: 'app' | 'pack', limit: number = 6, offset: number = 0): Promise<HttpResponse<OwnShare>> {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/top/?limit=${limit}&offset=${offset}`,
    };
    return this._httpRequest<OwnShare>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/install-share-22499
   * Installs the share with the given id on the space.
   * @param {number}share_id
   * @param {InstallShareAttributes}attributes
   * @returns
   */
  install(share_id: number, attributes: InstallShareAttributes): Promise<HttpResponse<AppInstall>> {
    const requestObj = {
      method: 'post',
      url: `/app_store/${share_id}/install`,
      data: attributes,
    };
    return this._httpRequest<AppInstall>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/share-app-22504
   * Shares the app or pack in the app market.
   * @param {ShareAppAttributes}attributes
   * @returns
   */
  share(attributes: ShareAppAttributes): Promise<HttpResponse<ShareApp>> {
    const requestObj = {
      method: 'post',
      url: `/app_store/`,
      data: attributes,
    };
    return this._httpRequest<ShareApp>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/unshare-app-37917
   * Unshares the given app from the app market
   * @param {number}share_id
   * @returns
   */
  unshare(share_id: number): Promise<HttpResponse<String>> {
    const requestObj = {
      method: 'delete',
      url: `/app_store/${share_id}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * @see https://developers.podio.com/doc/app-market/update-share-38639
   * Updates the share with changes to abstract, description, etc.
   * @param {number}share_id
   * @param {UpdateShareAttributes}attributes
   * @returns
   */
  update(share_id: number, attributes: UpdateShareAttributes): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/app_store/${share_id}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }
}
