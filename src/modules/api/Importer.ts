import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { ImportAttributes } from '@customTypes/importer.type';

export default class Importer extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Returns the import information about the given file.
   * @param file_id
   * @returns
   */
  info(file_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/importer/${file_id}/info`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns a preview for the given row
   * @param file_id
   * @param row
   * @param attributes
   * @returns
   */
  preview(file_id: Number, row: Number, attributes: ImportAttributes) {
    const requestObj = {
      method: 'post',
      url: `/importer/${file_id}/preview/${row}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Imports the file into the given app. The mapping value for a field depends on the type of field
   * @param file_id
   * @param app_id
   * @param attributes
   * @returns
   */
  prcessApp(file_id: Number, app_id: Number, attributes: ImportAttributes) {
    const requestObj = {
      method: 'post',
      url: `/importer/${file_id}/item/app/${app_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Imports the given file into the space contacts on the given space.
   * @param file_id
   * @param space_id
   * @param attributes
   * @returns
   */
  prcessContacts(file_id: Number, space_id: Number, attributes: ImportAttributes) {
    const requestObj = {
      method: 'post',
      url: `/importer/${file_id}/contact/space/${space_id}`,
      data: attributes,
    };
    return this._httpRequest(requestObj);
  }
}
