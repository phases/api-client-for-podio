import PodioError from './PodioError';
import { PodioErrorResponse } from '../types/podioError.type';

export default class PodioConflictError extends PodioError {
  /**
   *
   * @param {string} message
   */
  constructor(readonly message: string, readonly response: PodioErrorResponse, readonly statusCode: number = 0) {
    super(message, response, statusCode);
    this.name = this.constructor.name;
  }
}
