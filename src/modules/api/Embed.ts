import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttributes } from '@customTypes/embed.type';

export default class Embed extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Grabs metadata and returns metadata for the given url such as title, description and thumbnails.
   * @param attributes
   * @returns
   */
  create(attributes: CreateAttributes) {
    const requestObj = {
      method: 'post',
      url: `/embed/`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
