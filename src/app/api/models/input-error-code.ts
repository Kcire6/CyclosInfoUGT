/* tslint:disable */

/**
 * Error codes for 422 Unprocessable entity HTTP status. It means there was an error with the input sent to the operation.
 * Possible values are:
 * - `aggregated`: Represents an aggregation of other input errors
 * - `dataConversion`: Some data conversion has failed. For example, when sending a date with an invalid format
 * - `fileUploadSize`: An uploaded file size exceeds the maximum allowed
 * - `maxItems`: There was an attempt to create an item, but the maximum number of allowed items was exceeded
 * - `missingParameter`: Missing a required request parameter
 * - `queryParse`: A full-text query keywords contained an invalid text
 * - `validation`: One or more of the fields sent contains invalid values
 */
export enum InputErrorCode {
  AGGREGATED = 'aggregated',
  DATA_CONVERSION = 'dataConversion',
  FILE_UPLOAD_SIZE = 'fileUploadSize',
  MAX_ITEMS = 'maxItems',
  MISSING_PARAMETER = 'missingParameter',
  QUERY_PARSE = 'queryParse',
  VALIDATION = 'validation'
}
