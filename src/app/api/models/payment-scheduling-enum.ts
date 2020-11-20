/* tslint:disable */

/**
 * Determines how a payment is scheduled. When not specified, direct payments are performed.
 * Possible values are:
 * - `direct`: The payment won't be scheduled, but paid directly
 * - `recurring`: The payment will be recurring, repeated either by a limited number of occurrences or until cancel
 * - `scheduled`: The payment will be scheduled, either to a single future date or multiple installments
 */
export enum PaymentSchedulingEnum {
  DIRECT = 'direct',
  RECURRING = 'recurring',
  SCHEDULED = 'scheduled'
}
