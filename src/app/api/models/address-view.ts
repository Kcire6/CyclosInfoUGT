/* tslint:disable */
import { AddressResult } from './address-result';
import { User } from './user';

/**
 * Detailed information when viewing an address
 */
export interface AddressView extends AddressResult {

  /**
   * Can the authenticated user edit / remove this address?
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit / remove this address?
   *
   * @deprecated
   */
  editable?: boolean;

  /**
   * Indicates whether address privacy can be used for this user
   */
  enablePrivacy?: boolean;

  /**
   * The user which owns this address
   */
  user?: User;
}
