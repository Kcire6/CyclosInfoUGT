/* tslint:disable */

/**
 * The voucher statuses
 * Possible values are:
 * - `canceled`: The voucher was canceled, and cannot be further used
 * - `expired`: The voucher has expired without being redeemed
 * - `open`: The voucher has been generated / bought, and is open
 * - `pending`: The voucher has been bought, and the corresponding payment is pending for authorization
 * - `redeemed`: The voucher has been redeemed, and the corresponding payment was done
 */
export enum VoucherStatusEnum {
  CANCELED = 'canceled',
  EXPIRED = 'expired',
  OPEN = 'open',
  PENDING = 'pending',
  REDEEMED = 'redeemed'
}
