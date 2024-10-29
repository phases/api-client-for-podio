import querystring from 'querystring';

/**
 * Generate query string from the object
 * Podio authentication request needs params in the form of FormData
 * To convert to FormData, use querystring library
 * @param obj
 * @returns
 */
export function generateQueryString(obj: any): string {
  return querystring.stringify(obj);
}
