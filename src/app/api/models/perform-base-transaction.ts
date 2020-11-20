/* tslint:disable */

/**
 * Base definitions for performing a transaction
 */
export interface PerformBaseTransaction {

  /**
   * The transaction amount
   */
  amount?: string;

  /**
   * The currency id or internal name. Only used when not specifying a payment type. In this case, will narrow the search for the payment type.
   */
  currency?: string;

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type.
   */
  customValues?: { [key: string]: string };

  /**
   * The (optional) transaction description
   */
  description?: string;

  /**
   * The payment type, either the id or qualified internal name (in the form `fromAccountType.paymentType`). If no payment type is specified, if a single one is possible, it will be used. If a currency is specified, it will be taken into account in order to find the payment type. If, however, there would be multiple possibilities, a validation error is returned.
   */
  type?: string;
}
