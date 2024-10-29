import { AuthToken } from '@customTypes/podio.type';
import Api from './Api';
import { HttpResponse } from '@customTypes/http.type';
import { BatchType } from '@customTypes/batch.type';

export default class Batch extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Returns the batch with the given id
   * @param batch_id
   * @returns
   */
  get(batch_id: number): Promise<HttpResponse<BatchType>> {
    const requestObj = {
      method: 'get',
      url: `/batch/${batch_id}`,
    };
    return this._httpRequest<BatchType>(requestObj);
  }

  /**
   * Returns the batches created by the user. The batches are sorted descending by date of creation.
   * @returns
   */
  getAll(): Promise<HttpResponse<BatchType[]>> {
    const requestObj = {
      method: 'get',
      url: `/batch/`,
    };
    return this._httpRequest<BatchType[]>(requestObj);
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
    ref_id: number,
    plugin: 'app_import' | 'app_export' | 'space_contact_import' | 'app_content',
  ): Promise<HttpResponse<BatchType>> {
    const requestObj = {
      method: 'get',
      url: `/batch/${ref_type}/${ref_id}/${plugin}/running/`,
    };
    return this._httpRequest<BatchType>(requestObj);
  }
}
