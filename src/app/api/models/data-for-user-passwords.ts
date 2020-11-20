/* tslint:disable */
import { DataForSetSecurityAnswer } from './data-for-set-security-answer';
import { PasswordInput } from './password-input';
import { PasswordStatusAndActions } from './password-status-and-actions';
import { User } from './user';

/**
 * Contains the data used to manage passwords of a user
 */
export interface DataForUserPasswords {

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * If the security answer is enabled in the configuration and the user has no security answer yet, contains data for setting it. Is not returned if not used or if the user already has an answer.
   */
  dataForSetSecurityAnswer?: DataForSetSecurityAnswer;

  /**
   * The status and possible actions for each password
   */
  passwords?: Array<PasswordStatusAndActions>;
  user?: User;
}
