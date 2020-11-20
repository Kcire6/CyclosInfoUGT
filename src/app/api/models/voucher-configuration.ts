/* tslint:disable */
import { Currency } from './currency';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Reference to a voucher configuration
 */
export interface VoucherConfiguration extends InternalNamedEntity {
  currency?: Currency;
}
