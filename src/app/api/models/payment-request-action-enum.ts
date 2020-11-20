/* tslint:disable */

/**
 * Possible actions that could be confirmed with a device for a payment request
 * Possible values are:
 * - `accept`: Accept the payment request as the payer
 * - `cancel`: Cancel the payment request as the payer
 * - `changeExpiration`: Change the expiration date of the payment request as the payer
 * - `deny`: Deny the payment request as the payer
 * - `reschedule`: Reschedule the payment request as the payer
 */
export enum PaymentRequestActionEnum {
  ACCEPT = 'accept',
  CANCEL = 'cancel',
  CHANGE_EXPIRATION = 'changeExpiration',
  DENY = 'deny',
  RESCHEDULE = 'reschedule'
}
