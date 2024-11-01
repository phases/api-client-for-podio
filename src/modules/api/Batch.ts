import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';

export default class Batch extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Returns the batch with the given id
   * @param batch_id
   * @returns
   */
  get(batch_id: Number) {
    const requestObj = {
      method: 'get',
      url: `/batch/${batch_id}`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the batches created by the user. The batches are sorted descending by date of creation.
   * @returns
   */
  getAll() {
    const requestObj = {
      method: 'get',
      url: `/batch/`,
    };
    return this._httpRequest(requestObj);
  }

  /**
   * Returns the currently running batches on the given reference.
   * @param ref_type
   * @param ref_id
   * @param plugin
   * @returns
   */
  getRunningBatches(
    ref_type: 'app' | 'space',
    ref_id: Number,
    plugin: 'app_import' | 'app_export' | 'space_contact_import' | 'app_content',
  ) {
    const requestObj = {
      method: 'get',
      url: `/batch/${ref_type}/${ref_id}/${plugin}/running/`,
    };
    return this._httpRequest(requestObj);
  }
}
