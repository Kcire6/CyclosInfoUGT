/* tslint:disable */

/**
 * Indicates what happens if a voucher is canceled, if it can be canceled
 * Possible values are:
 * - `cancelAndRefund`: A single bought voucher is canceled and the amount is refunded
 * - `cancelGenerated`: Cancels a single generated voucher
 * - `cancelPendingPack`: Cancels more than one bought vouchers whose buy payment is pending authorization
 * - `cancelPendingSingle`: Cancels a single bought vouchers whose buy payment is pending authorization
 */
export enum VoucherCancelActionEnum {
  CANCEL_AND_REFUND = 'cancelAndRefund',
  CANCEL_GENERATED = 'cancelGenerated',
  CANCEL_PENDING_PACK = 'cancelPendingPack',
  CANCEL_PENDING_SINGLE = 'cancelPendingSingle'
}
