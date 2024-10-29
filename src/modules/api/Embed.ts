import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { CreateAttributes, Embed as EmbedType } from '@customTypes/embed.type';
import { HttpResponse } from '@customTypes/http.type';

export default class Embed extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * @see https://developers.podio.com/doc/embeds/add-an-embed-726483
   * Grabs metadata and returns metadata for the given url such as title, description and thumbnails.
   * @param {CreateAttributes}attributes
   * @returns
   */
  create(attributes: CreateAttributes): Promise<HttpResponse<EmbedType>> {
    const requestObj = {
      method: 'post',
      url: `/embed/`,
      data: attributes,
    };
    return this._httpRequest<EmbedType>(requestObj);
  }
}
