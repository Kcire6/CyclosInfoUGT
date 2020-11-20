/* tslint:disable */

/**
 * Possible actions that could be confirmed with a device for a scheduled payment installment
 * Possible values are:
 * - `process`: Process the scheduled payment installment
 * - `settle`: Settle the scheduled payment installment
 */
export enum InstallmentActionEnum {
  PROCESS = 'process',
  SETTLE = 'settle'
}
