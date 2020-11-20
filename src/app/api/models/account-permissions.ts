/* tslint:disable */
import { AccountWithCurrency } from './account-with-currency';
import { RelatedTransferType } from './related-transfer-type';

/**
 * Permissions over an account
 */
export interface AccountPermissions {
  account?: AccountWithCurrency;

  /**
   * Payment types allowed to be used on POS (receive payments from other users). Only returned for user accounts.
   */
  posPayments?: Array<RelatedTransferType>;

  /**
   * Payment types allowed to be performed to other self accounts. Only returned for user accounts.
   */
  selfPayments?: Array<RelatedTransferType>;

  /**
   * Payment types allowed to be performed to system accounts.
   */
  systemPayments?: Array<RelatedTransferType>;

  /**
   * Payment types allowed to be performed to other users
   */
  userPayments?: Array<RelatedTransferType>;

  /**
   * Indicates whether the logged user can see the account status for this account. Some restricted operators can view the account history, but not the account status (balance and so on).
   */
  viewStatus?: boolean;

  /**
   * Whether the account also is visible for the logged user or, if false means it is only accessible. A non visible account still is operative, i.e the user could make/receive payments from/to it (i.e is accessible) but can not make a transfers history search for it.
   */
  visible?: boolean;
}
