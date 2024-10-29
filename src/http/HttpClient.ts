import axios, { AxiosError } from 'axios';
import { HttpRequest, HttpResponse } from '../types/http.type';
import PodioErrorFactory from '../utils/PodioErrorFactory';

/**
 * Common class for handling all the Http client requests
 */
export default class HttpClient {
  /**
   * Podio API base url
   *
   * @type {string}
   */
  readonly base_url: string = 'https://api.podio.com';

  /**
   * @type {Request}
   */
  request: HttpRequest;

  /**
   * Assign values to the private variable
   * @constructor
   * @param requestObj
   */
  constructor(requestData: HttpRequest) {
    this.request = requestData;
  }

  /**
   * Http call
   *
   * @returns Promise<HttpResponse>
   */
  async call<ResponseType = any>(): Promise<HttpResponse<ResponseType>> {
    try {
      let response = await axios({ ...this.request, baseURL: this.base_url });

      let responseData: HttpResponse = {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        request: response.request,
        data: response.data,
        response: response,
      };

      return responseData;
    } catch (e) {
      if (e instanceof AxiosError) {
        let statusCode = e.response?.status ?? 0;
        let errorMessage = e.response?.data?.error_description ?? e.message;
        let podioErrorData = e.response?.data?.request ?? undefined;

        let errorClass = PodioErrorFactory.getError(statusCode);
        throw new errorClass(errorMessage, podioErrorData, statusCode);
      }

      throw e;
    }
  }
}
