/* tslint:disable */
import { PasswordInput } from './password-input';
import { TransferType } from './transfer-type';

/**
 * Data used to accept an order by the buyer.
 */
export interface OrderDataForAcceptByBuyer {

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * Contains the allowed payment types.
   */
  paymentTypes?: Array<TransferType>;
}
