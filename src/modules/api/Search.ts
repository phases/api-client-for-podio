import { SimpleObject } from '../../types/basic.type';
import { HttpResponse } from '../../types/http.type';
import { AuthToken } from '../../types/podio.type';
import { Search as SearchType } from '../../types/search.type';

import Api from './Api';

/**
 * Handling all the Podio APIs related to Search
 * @see https://developers.podio.com/doc/search
 */
export default class Search extends Api {
  /**
   * @constructor
   */
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Search in organization
   * @see https://developers.podio.com/doc/search/search-in-organization-22487
   * @param {number} org_id - Podio organization id
   * @param {string} words - Search query words
   * @param {SimpleObject} attributes - Additional search attributes (optional)
   * @returns {Promise<HttpResponse<SearchType[]>>}
   */
  inOrg(org_id: number, words: string, attributes: SimpleObject = {}): Promise<HttpResponse<SearchType[]>> {
    const requestObj = {
      method: 'post',
      url: `/search/org/${org_id}/`,
      data: { ...attributes, query: words },
    };

    return this._httpRequest<SearchType[]>(requestObj);
  }

  /**
   * Search globally
   * @see https://developers.podio.com/doc/search/search-globally-22488
   * @param {string} words - Search query words
   * @param {SimpleObject} attributes - Additional search attributes (optional)
   * @returns {Promise<HttpResponse<SearchType[]>>}
   */
  globally(words: string, attributes: SimpleObject = {}): Promise<HttpResponse<SearchType[]>> {
    const requestObj = {
      method: 'post',
      url: `/search/`,
      data: { ...attributes, query: words },
    };

    return this._httpRequest<SearchType[]>(requestObj);
  }

  /**
   * Search in space
   * @see https://developers.podio.com/doc/search/search-in-space-22479
   * @param {number} space_id - Podio space id
   * @param {string} words - Search query words
   * @param {SimpleObject} attributes - Additional search attributes (optional)
   * @returns {Promise<HttpResponse<SearchType[]>>}
   */
  inSpace(space_id: number, words: string, attributes: SimpleObject = {}): Promise<HttpResponse<SearchType[]>> {
    const requestObj = {
      method: 'post',
      url: `/search/space/${space_id}/`,
      data: { ...attributes, query: words },
    };

    return this._httpRequest<SearchType[]>(requestObj);
  }

  /**
   * Search in app
   * @see https://developers.podio.com/doc/search/search-in-app-4234651
   * @param {number} app_id - Podio application id
   * @param {string} words - Search query words
   * @param {SimpleObject} attributes - Additional search attributes (optional)
   * @returns {Promise<HttpResponse<SearchType[]>>}
   */
  inApp(app_id: number, words: string, attributes: SimpleObject = {}): Promise<HttpResponse<SearchType[]>> {
    const requestObj = {
      method: 'post',
      url: `/search/app/${app_id}/`,
      data: { ...attributes, query: words },
    };

    return this._httpRequest<SearchType[]>(requestObj);
  }

  /**
   * Record a click on a search result to improve ranking
   * @param {number} search_id - Search result id
   * @param {number} rank - Rank of the clicked result
   * @returns {Promise<HttpResponse<string>>}
   */
  rank(search_id: number, rank: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/search/${search_id}/${rank}/clicked`,
    };

    return this._httpRequest<string>(requestObj);
  }
}

