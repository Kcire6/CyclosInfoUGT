/* tslint:disable */
import { Image } from './image';
import { InternalNamedEntity } from './internal-named-entity';
import { VoucherConfiguration } from './voucher-configuration';

/**
 * Reference to a voucher type
 */
export interface VoucherType extends InternalNamedEntity {
  configuration?: VoucherConfiguration;
  image?: Image;
}
