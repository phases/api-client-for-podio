import { PodioErrorResponse } from '../types/podioError.type';

/**
 * Podio error base class.
 * All the podio related error class will inherit from this base class.
 *
 */
export default class PodioError extends Error {
  /**
   *
   * @param {string} message
   */
  constructor(readonly message: string, readonly response: PodioErrorResponse, readonly statusCode: number = 0) {
    super(message);
    this.name = this.constructor.name;
  }
}
