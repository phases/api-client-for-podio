import PodioBadRequestError from '../exceptions/PodioBadRequestError';
import { NumberIndexedObject } from '../types/basic.type';
import PodioForbiddenError from '../exceptions/PodioForbiddenError';
import PodioError from '../exceptions/PodioError';
import PodioAuthorizationError from '../exceptions/PodioAuthorizationError';
import PodioConflictError from '../exceptions/PodioConflictError';
import PodioGoneError from '../exceptions/PodioGoneError';
import PodioRateLimitError from '../exceptions/PodioRateLimitError';
import PodioServerError from '../exceptions/PodioServerError';
import PodioUnavailableError from '../exceptions/PodioUnavailableError';

export default class PodioErrorFactory {
  /**
   * Error class mappings
   *
   */
  private static classMappings: NumberIndexedObject = {
    400: PodioBadRequestError,
    401: PodioAuthorizationError,
    403: PodioForbiddenError,
    404: PodioForbiddenError,
    409: PodioConflictError,
    410: PodioGoneError,
    420: PodioRateLimitError,
    500: PodioServerError,
    502: PodioUnavailableError,
    503: PodioUnavailableError,
    504: PodioUnavailableError,
  };

  static getError(statusCode: number) {
    return this.classMappings[statusCode] ?? PodioError;
  }
}
