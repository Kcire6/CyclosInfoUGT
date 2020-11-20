/* tslint:disable */
import { AccountKind } from './account-kind';
import { AccountWithStatus } from './account-with-status';
import { IdentificationMethodEnum } from './identification-method-enum';
import { PrincipalTypeInput } from './principal-type-input';
import { TransactionTypeData } from './transaction-type-data';
import { TransferTypeWithCurrency } from './transfer-type-with-currency';
import { User } from './user';

/**
 * Contains basic configuration data used when performing a transaction. The path that returns it will normally receive the main transaction owner (system or user), plus 2 other optional parameters: - The other subject (system or user) that will either receive or perform
 *   the payment.
 * - The payment type. There are 3 possibilities when returning: - When the other subject wasn't selected. In this case, will contain very
 *   few information, mostly the accounts.
 * - The other subject is selected, but not a payment type. If so, the
 *   payment types will be returned, but not information on how to pick
 *   the subject user, or the accounts.
 * - Both other subject and payment type are selected: In this case
 *   only the payment type data will be returned
 */
export interface DataForTransaction {

  /**
   * Only returned when the payment type is not selected. Contains the possible accounts which can be used either as source (when performing the payment) or destination (when receiving the payment, on POS).
   */
  accounts?: Array<AccountWithStatus>;

  /**
   * Only returned when no subject is selected. Indicates whether the payee can be obtaining by freely searching users
   */
  allowAutocomplete?: boolean;

  /**
   * Only returned when no subject is selected. Indicates whether the payee can be obtaining from the contact list
   */
  allowContacts?: boolean;

  /**
   * Only returned when no subject is selected.Indicates if the QR-code scanning is allowed.
   */
  allowScanQrCode?: boolean;

  /**
   * If the authorized user is a restricted operator, it may be that the owner user has defined exactly to which users the operator can pay. If this is the case, this will be the list with such users.
   */
  allowedUsers?: Array<User>;

  /**
   * Only returned when no subject is selected. The default option for the identification method when performing a payment.
   */
  defaultIdMethod?: IdentificationMethodEnum;

  /**
   * Only returned when no subject is selected. If the `defaultIdMethod` is `principalType`, contains the internal name or id of the principal type that should be the default. If there is a default, the user should be provided with the option to choose which principal type he's using. If there is no default, all possible principal types will be attempted. In this case, the UI will normally not show the option for which principal type should be used.
   */
  defaultPrincipalType?: string;

  /**
   * Indicates the account kind that will perform the payment
   */
  fromKind?: AccountKind;

  /**
   * Only returned if `fromKind` is `user`. Is the payer user.
   */
  fromUser?: User;

  /**
   * Contains the detailed data for the selected (or first) payment type
   */
  paymentTypeData?: TransactionTypeData;

  /**
   * Only returned when the payment type is not selected. Contains the allowed payment types for a payment between the selected from and to owners.
   */
  paymentTypes?: Array<TransferTypeWithCurrency>;

  /**
   * Only returned when no subject is selected. The possible principal types that can be used to locate the payee
   */
  principalTypes?: Array<PrincipalTypeInput>;

  /**
   * Indicates the account kind that will receive the payment
   */
  toKind?: AccountKind;

  /**
   * Only returned if `toKind` is `user`. Is the payee user.
   */
  toUser?: User;
}
