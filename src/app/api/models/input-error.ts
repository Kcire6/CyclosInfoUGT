/* tslint:disable */
import { InputErrorCode } from './input-error-code';

/**
 * Error returned when some input data failed validation
 */
export interface InputError {
  code?: InputErrorCode;

  /**
   * An object keyed by custom field internal name, whose values are lists of errors for that custom field. Only returned if `code` is `validation`.
   */
  customFieldErrors?: { [key: string]: Array<string> };

  /**
   * An array of custom field internal names which contains errors, in the order they were processed. As `customFieldErrors` is an object (without a guaranteed order for its keys) the original order would be lost otherwise. Only returned if `code` is `validation`.
   */
  customFields?: Array<string>;

  /**
   * The aggregated `InputError`s for each regular property, that is, those that have a single input. Only returned if `code` is `aggregated`.
   */
  errors?: { [key: string]: InputError };

  /**
   * A list of errors that cannot be attributed to a specific property. Only returned if `code` is `validation`.
   */
  generalErrors?: Array<string>;

  /**
   * The aggregated `InputError`s for each list property, that is, those that have a list of inputs. It is guaranteed that the indexes in the input array correspond to the indexes in the corresponding value. The positions with no errors will contain `null`. Only returned if `code` is `aggregated`.
   */
  indexedErrors?: { [key: string]: Array<InputError> };

  /**
   * The maximum file size, in bytes, allowed for uploads. Only returned if `code` is `fileUploadSize`.
   */
  maxFileSize?: number;

  /**
   * The maximum allowed items. Only returned if `code` is `maxItems`.
   */
  maxItems?: number;

  /**
   * The name of the required request parameter Only returned if `code` is `missingParameter`.
   */
  name?: string;

  /**
   * An array of properties which contains errors, in the order they were processed. As `propertyErrors` is an object (without a guaranteed order for its keys) the original order would be lost otherwise. Only returned if `code` is `validation`.
   */
  properties?: Array<string>;

  /**
   * An object keyed by property name, whose values are lists of errors for that property. Only returned if `code` is `validation`.
   */
  propertyErrors?: { [key: string]: Array<string> };

  /**
   * The value that failed conversion to the expected data type, or the original full-text query keywords that failed parsing. Only returned if `code` is either `dataConversion` or `queryParse`.
   */
  value?: string;
}
