/* tslint:disable */
import { Currency } from './currency';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * A reference for the account type, together with its currency
 */
export interface AccountType extends InternalNamedEntity {
  currency?: Currency;
}
