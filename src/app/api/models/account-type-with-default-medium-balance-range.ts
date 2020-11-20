/* tslint:disable */
import { AccountType } from './account-type';
import { IntegerRange } from './integer-range';

/**
 * A reference for the account type, together with its currency and its default medium balance range
 */
export interface AccountTypeWithDefaultMediumBalanceRange extends AccountType {

  /**
   * The minimum and maximum default medium balance range specified in the account type. If it is present, both values are not null.
   */
  defaultMediumBalanceRange?: IntegerRange;
}
