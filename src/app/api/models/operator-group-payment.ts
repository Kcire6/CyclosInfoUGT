/* tslint:disable */

/**
 * Settings for payments for an operator group.
 */
export interface OperatorGroupPayment {

  /**
   * Can operators of this group authorize payments of this type which were performed by other operators?
   */
  authorize?: boolean;

  /**
   * Maximum amount of payments that operators of this group can perform per day.
   */
  maxAmountPerDay?: string;

  /**
   * Can operators of this group perform payments of this type?
   */
  perform?: boolean;

  /**
   * Do performed payments of this type by operators require authorization by the owner or other operators?
   */
  requiresAuthorization?: boolean;
}
