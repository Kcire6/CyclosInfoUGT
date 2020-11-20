/* tslint:disable */
import { AccountWithOwner } from './account-with-owner';
import { Currency } from './currency';
import { CustomFieldValue } from './custom-field-value';
import { PasswordInput } from './password-input';
import { TransferType } from './transfer-type';
import { User } from './user';

/**
 * Base definitions for a preview before performing a transaction
 */
export interface TransactionPreview {

  /**
   * If configured in the payment type, is a message to be shown to the user before confirming the transaction
   */
  confirmationMessage?: string;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;
  currency?: Currency;

  /**
   * The list of custom field values, in a detailed view
   */
  customValues?: Array<CustomFieldValue>;
  fromAccount?: AccountWithOwner;

  /**
   * The operator who is performing the payment. Only sent if the payment is made from an operator.
   */
  fromOperator?: User;
  paymentType?: TransferType;

  /**
   * The final amount charged to the payer including fees.
   */
  totalAmount?: string;
}
