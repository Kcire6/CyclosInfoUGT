/* tslint:disable */
import { BasicFullProfileEditResult } from './basic-full-profile-edit-result';

/**
 * Result of saving the full profile at once
 */
export interface FullProfileEditResult extends BasicFullProfileEditResult {

  /**
   * Identifiers of created addresses
   */
  createdAddresses?: Array<string>;

  /**
   * Identifiers of created additional contacts
   */
  createdContactInfos?: Array<string>;

  /**
   * Identifiers of created profile images
   */
  createdImages?: Array<string>;
}
