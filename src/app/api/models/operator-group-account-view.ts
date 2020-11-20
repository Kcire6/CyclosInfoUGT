/* tslint:disable */
import { AccountType } from './account-type';
import { OperatorGroupAccount } from './operator-group-account';

/**
 * Settings for an account access for an operator group
 */
export interface OperatorGroupAccountView extends OperatorGroupAccount {
  accountType?: AccountType;
}
