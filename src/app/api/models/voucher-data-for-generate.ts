/* tslint:disable */
import { AccountWithStatus } from './account-with-status';
import { GenerateVoucher } from './generate-voucher';
import { PasswordInput } from './password-input';
import { User } from './user';
import { VoucherTypeDetailed } from './voucher-type-detailed';

/**
 * Returns the data to generate vouchers. If a type is not specified when requesting this data only the given user data and the list of types the authenticated user can generate is returned.
 */
export interface VoucherDataForGenerate {

  /**
   * The account which will have the balance reserved for the voucher redeeming.
   */
  account?: AccountWithStatus;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The object that can be altered and posted back to generate the vouchers
   */
  generateVoucher?: GenerateVoucher;
  type?: VoucherTypeDetailed;

  /**
   * The list of voucher types the authenticated user can generate. Only if no type parameter is given.
   */
  types?: Array<VoucherTypeDetailed>;
  user?: User;
}
