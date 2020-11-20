/* tslint:disable */

/**
 * The possible status for a device confirmation
 * Possible values are:
 * - `approved`: The confirmation was approved through a trusted device
 * - `pending`: The confirmation is pending for approval through a trusted device
 * - `rejected`: The confirmation was rejected through a trusted device
 */
export enum DeviceConfirmationStatusEnum {
  APPROVED = 'approved',
  PENDING = 'pending',
  REJECTED = 'rejected'
}
