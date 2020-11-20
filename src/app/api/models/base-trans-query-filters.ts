/* tslint:disable */
import { QueryFilters } from './query-filters';
import { TransOrderByEnum } from './trans-order-by-enum';

/**
 * Base definitions for searching either transactions or transfers
 */
export interface BaseTransQueryFilters extends QueryFilters {

  /**
   * References to access clients (id or token) used to perform / receive the transfer.
   */
  accessClients?: Array<string>;

  /**
   * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  amountRange?: Array<string>;

  /**
   * Use `brokers` instead.
   *
   *
   * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
   *
   * @deprecated
   */
  broker?: string;

  /**
   * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
   */
  brokers?: Array<string>;

  /**
   * Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.
   */
  by?: string;

  /**
   * Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.
   */
  channels?: Array<string>;

  /**
   * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  datePeriod?: Array<string>;

  /**
   * List of transfers ids to be excluded from the result.
   */
  excludedIds?: Array<string>;

  /**
   * Flag indicating whether to include only transfers by the current access client.
   */
  fromCurrentAccessClient?: boolean;

  /**
   * Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.
   */
  groups?: Array<string>;

  /**
   * Flag indicating whether to include or not the generated transfer. Only valid if there is at least one access client specified. For example if a `ticket` or `paymentRequest` was processed then a new transfer will be generated.
   */
  includeGeneratedByAccessClient?: boolean;
  orderBy?: TransOrderByEnum;

  /**
   * The transaction number of the matching transfer
   */
  transactionNumber?: string;

  /**
   * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format `accountType.transferFilter`.
   */
  transferFilters?: Array<string>;

  /**
   * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format `accountType.transferType`.
   */
  transferTypes?: Array<string>;

  /**
   * Reference a user that should have either received / performed the transfer.
   */
  user?: string;
}
