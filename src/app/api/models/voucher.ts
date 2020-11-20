/* tslint:disable */
import { Entity } from './entity';
import { VoucherStatusEnum } from './voucher-status-enum';

/**
 * A voucher is a token which can be used to buy at places that accept payments in Cyclos. Even users which are not members can get a printed token (or scratch card, ticket, etc) and buy in such places.
 */
export interface Voucher extends Entity {

  /**
   * The voucher amount
   */
  amount?: string;
  status?: VoucherStatusEnum;

  /**
   * The voucher token
   */
  token?: string;
}
