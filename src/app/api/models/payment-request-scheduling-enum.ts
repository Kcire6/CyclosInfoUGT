/* tslint:disable */

/**
 * Determines how the generated payment of a payment request is scheduled. When not specified, the generated payment is processed directly.
 * Possible values are:
 * - `direct`: The generated payment won't be scheduled, but paid directly
 * - `recurring`: The generated payment will be recurring
 * - `scheduled`: The generated payment will be scheduled, once accepting, triggering a given number of installments
 */
export enum PaymentRequestSchedulingEnum {
  DIRECT = 'direct',
  RECURRING = 'recurring',
  SCHEDULED = 'scheduled'
}
