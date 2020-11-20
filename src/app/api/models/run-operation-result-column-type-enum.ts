/* tslint:disable */

/**
 * The data type for a custom operation column
 * Possible values are:
 * - `boolean`: Each cell value is a boolean
 * - `currencyAmount`: Each cell value is an object with 2 properties: amount (number represented as string) and currency (of type `Currency`)
 * - `date`: Each cell value is a date represented as string
 * - `number`: Each cell value is a number, but may be represented as string
 * - `string`: Each cell value is a string
 */
export enum RunOperationResultColumnTypeEnum {
  BOOLEAN = 'boolean',
  CURRENCY_AMOUNT = 'currencyAmount',
  DATE = 'date',
  NUMBER = 'number',
  STRING = 'string'
}
