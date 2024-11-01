import { InstallShareAttributes, ShareAppAttributes, UpdateShareAttributes } from '@customTypes/appMarket.type';
import { AuthToken } from '../../types/podio.type';
import Api from './Api';

export default class AppMarket extends Api {
  /**
   * Contructor
   * @param props
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Returns the categories available in the system.
   * @returns
   */
  getCategory(only_used: Boolean = true) {
    const requestObj = {
      method: 'get',
      url: `/app_store/category/?only_used=${only_used}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the orgs, that the user is member of, and that has shared private apps.
   * @returns
   */
  getOrgWithPrivateShares() {
    const requestObj = {
      method: 'get',
      url: `/app_store/org/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the apps that the active user has shared.
   * @param type
   * @param limit
   * @param offset
   * @returns
   */
  getOwnShares(type: 'app' | 'pack', limit: Number = 6, offset: Number = 0) {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/own/?limit=${limit}&offset=${offset}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the recommended apps in the app market for the given "area". Current areas are: "web" and "mobile".
   * @param type
   * @param area
   * @returns
   */
  getRecommendedShares(type: 'app' | 'pack', area: 'web' | 'mobile') {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/recommended/${area}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the shared app from the app market with the given id. It will also return all comments and fivestar ratings of the app.
   * @param share_id
   * @returns
   */
  getShare(share_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/app_store/${share_id}/v2`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the shares of the given object. The active users shares will be first followed by other users shares.
   * Besides that the shares will be sorted descending by when they were shared.
   * @param ref_type
   * @param ref_id
   * @returns
   */
  getShareByReference(ref_type: String, ref_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/app_store/${ref_type}/${ref_id}/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns all the apps in the app market created by the given user in the given language.
   * @param type
   * @param user_id
   * @param limit
   * @param offset
   * @param sort
   * @returns
   */
  getShareByAuthor(
    type: 'app' | 'pack',
    user_id: Number,
    limit: Number = 6,
    offset: Number = 0,
    sort: 'install' | 'rating' | 'popularity' | 'recommended' | 'shared_on' | 'name' = 'install',
  ) {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/author/${user_id}/?limit=${limit}&offset=${offset}&sort=${sort}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the apps in the app market in the given category and language.
   * @param type
   * @param category_id
   * @param limit
   * @param offset
   * @param sort
   * @returns
   */
  getShareByCategory(
    type: 'app' | 'pack',
    category_id: Number,
    limit: Number = 6,
    offset: Number = 0,
    sort: 'install' | 'rating' | 'popularity' | 'recommended' | 'shared_on' | 'name' = 'install',
  ) {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/category/${category_id}/?limit=${limit}&offset=${offset}&sort=${sort}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the top apps in the app market in the given language.
   * @param type
   * @param limit
   * @param offset
   * @returns
   */
  getTopShares(type: 'app' | 'pack', limit: Number = 6, offset: Number = 0) {
    const requestObj = {
      method: 'get',
      url: `/app_store/${type}/top/?limit=${limit}&offset=${offset}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Installs the share with the given id on the space.
   * @param share_id
   * @param attributes
   * @returns
   */
  install(share_id: Number, attributes: InstallShareAttributes) {
    const requestObj = {
      method: 'post',
      url: `/app_store/${share_id}/install`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Shares the app or pack in the app market.
   * @param attributes
   * @returns
   */
  share(attributes: ShareAppAttributes) {
    const requestObj = {
      method: 'post',
      url: `/app_store/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Unshares the given app from the app market
   * @param share_id
   * @returns
   */
  unshare(share_id: Number) {
    const requestObj = {
      method: 'delete',
      url: `/app_store/${share_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Updates the share with changes to abstract, description, etc.
   * @param share_id
   * @param attributes
   * @returns
   */
  update(share_id: Number, attributes: UpdateShareAttributes) {
    const requestObj = {
      method: 'put',
      url: `/app_store/${share_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
