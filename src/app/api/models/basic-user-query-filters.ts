/* tslint:disable */
import { FullTextWithDistanceQueryFilters } from './full-text-with-distance-query-filters';
import { UserAddressResultEnum } from './user-address-result-enum';
import { UserStatusEnum } from './user-status-enum';

/**
 * Base definitions for user search filters
 */
export interface BasicUserQueryFilters extends FullTextWithDistanceQueryFilters {

  /**
   * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn't an admin or broker with permission to view the user agreement log.
   */
  acceptedAgreements?: Array<string>;

  /**
   * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  activationPeriod?: Array<string>;
  addressResult?: UserAddressResultEnum;

  /**
   * Either id or a principal (login name, e-mail, etc) for brokers
   */
  brokers?: Array<string>;

  /**
   * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  creationPeriod?: Array<string>;

  /**
   * Either id or internal names of groups / group sets
   */
  groups?: Array<string>;

  /**
   * When set to `true` and the logged user has permission to view user groups, will return the `group` property on users.
   */
  includeGroup?: boolean;

  /**
   * When set to `true` and the logged user has permission to view user group sets, will return the `groupSet` property on users.
   */
  includeGroupSet?: boolean;

  /**
   * The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  lastLoginPeriod?: Array<string>;

  /**
   * When set to `true`, will match only users that have the brokers as set in the `brokers` parameter as main broker.
   */
  mainBrokerOnly?: boolean;

  /**
   * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn't an admin or broker with permission to view the user agreement log.
   */
  notAcceptedAgreements?: Array<string>;

  /**
   * Either id or internal names of products the users should have assigned. Ignored if the authenticated user isn't an administrator.
   */
  products?: Array<string>;

  /**
   * When set to `true`, the list specifid in `products` will only match users with those products assigned individually, not via group or group set. When set to `false` (default), the products will match any level (individual, group or group set).
   */
  productsIndividuallyAssigned?: boolean;
  statuses?: Array<UserStatusEnum>;

  /**
   * Indicated the users to be excluded from the result
   */
  usersToExclude?: Array<string>;

  /**
   * Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.
   */
  usersToInclude?: Array<string>;
}
