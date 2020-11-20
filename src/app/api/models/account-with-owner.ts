/* tslint:disable */
import { Account } from './account';
import { AccountKind } from './account-kind';
import { User } from './user';

/**
 * Contains account data, plus account owner reference
 */
export interface AccountWithOwner extends Account {
  kind?: AccountKind;

  /**
   * Only returned if `kind` is `user`. Is a reference to the owner user.
   */
  user?: User;
}
