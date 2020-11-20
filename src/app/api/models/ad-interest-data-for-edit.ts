/* tslint:disable */
import { AdInterestBasicData } from './ad-interest-basic-data';
import { AdInterestEdit } from './ad-interest-edit';

/**
 * Contains data for editing an exinsting advertisement interest
 */
export interface AdInterestDataForEdit extends AdInterestBasicData {

  /**
   * The advertisement interest populated with the current fields. This value can be modified and sent back on `PUT /marketplace-interest/{id}`.
   */
  adInterest?: AdInterestEdit;

  /**
   * Can the authenticated user edit this advertisement interest?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this advertisement interest?
   */
  canRemove?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this advertisement interest?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this advertisement interest?
   *
   * @deprecated
   */
  remove?: boolean;
}
