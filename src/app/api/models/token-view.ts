/* tslint:disable */
import { TokenDetailed } from './token-detailed';

/**
 * Contains all data regarding a token
 */
export interface TokenView extends TokenDetailed {

  /**
   * Can this token be directly activated?
   */
  activate?: boolean;

  /**
   * Limit date a pending token can be activated. Not returned when status is not `pending`.
   */
  activationDeadline?: string;

  /**
   * Can this token be assigned to a user?
   */
  assign?: boolean;

  /**
   * Can this token be blocked?
   */
  block?: boolean;

  /**
   * Can this token be canceled?
   */
  cancel?: boolean;

  /**
   * Can the activation deadline date of this token be changed?
   */
  setActivationDeadline?: boolean;

  /**
   * Can the expiry date of this token be changed?
   */
  setExpiryDate?: boolean;

  /**
   * Can this token be unblocked?
   */
  unblock?: boolean;
}
