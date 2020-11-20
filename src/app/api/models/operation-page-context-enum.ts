/* tslint:disable */

/**
 * DEPRECATED: Use `exportFormat` instead. The context an operation with `resultType` is `resultPage` runs
 * Possible values are:
 * - `csv`: Export results as Comma-Separated-Values (CSV)
 * - `page`: Normal search, returning the data as rows in the result
 * - `pdf`: Export results as printable PDF
 */
export enum OperationPageContextEnum {
  CSV = 'csv',
  PAGE = 'page',
  PDF = 'pdf'
}
