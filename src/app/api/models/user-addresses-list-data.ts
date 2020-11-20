/* tslint:disable */
import { AddressResult } from './address-result';
import { AvailabilityEnum } from './availability-enum';
import { User } from './user';

/**
 * Contains, besides the user's addresses, additional data for its management
 */
export interface UserAddressesListData {

  /**
   * The address list
   */
  addresses?: Array<AddressResult>;
  availability?: AvailabilityEnum;

  /**
   * Indicates whether the authenticated user can create a new address for this user
   */
  canCreate?: boolean;

  /**
   * Indicates whether the addresses can be edited by the authenticated user
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the addresses can be managed by the authenticated user
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * Indicates whether address privacy can be used for this user
   */
  enablePrivacy?: boolean;

  /**
   * Indicates the maximum number of addresses the user can have
   */
  maxAddresses?: number;

  /**
   * The user which owns this addresses
   */
  user?: User;
}
