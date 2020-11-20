/* tslint:disable */

/**
 * Defines which kind of authorization a transaction is through. Only returned if the `kind` is either `payment`, `scheduledPayment` or `recurringPayment` and the transaction is pending for authorization.
 * Possible values are:
 * - `level`: A transaction is going through some authorization level
 * - `operator`: An operator performed a payment that needs to be authorized by his member or other operators
 */
export enum TransactionAuthorizationTypeEnum {
  LEVEL = 'level',
  OPERATOR = 'operator'
}
