/* tslint:disable */

/**
 * The status of a installment
 * Possible values are:
 * - `blocked`: The installment is blocked, and won't be automatically processed on its due date
 * - `canceled`: The installment was canceled
 * - `failed`: The installment processing failed, for example, because there was no funds in the source account
 * - `processed`: The installment was processed, generating a transfer
 * - `scheduled`: The installment is scheduled for a future date
 * - `settled`: The installment was marked as settled by the receiver
 */
export enum InstallmentStatusEnum {
  BLOCKED = 'blocked',
  CANCELED = 'canceled',
  FAILED = 'failed',
  PROCESSED = 'processed',
  SCHEDULED = 'scheduled',
  SETTLED = 'settled'
}
