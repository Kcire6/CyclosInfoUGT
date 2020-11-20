/* tslint:disable */

/**
 * Determines in which conditions the parameters form is shown
 * Possible values are:
 * - `always`: Show form even if parameters are not missing
 * - `missingAny`: Show form if any parameter (optional or required) is missing
 * - `missingRequired`: Show form only if required parameters are missing
 */
export enum OperationShowFormEnum {
  ALWAYS = 'always',
  MISSING_ANY = 'missingAny',
  MISSING_REQUIRED = 'missingRequired'
}
