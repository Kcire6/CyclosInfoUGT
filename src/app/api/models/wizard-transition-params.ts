/* tslint:disable */
import { UserNew } from './user-new';

/**
 * Parameters for a transition between steps
 */
export interface WizardTransitionParams {

  /**
   * Holds the custom wizard field values, keyed by field internal name or id. The format of the value depends on the custom field type. Only used if the current step kind is `formFields`
   */
  customValues?: { [key: string]: string };

  /**
   * When the step requires the e-mail to be verified, is the code that is sent to the informed e-mail address.
   */
  emailVerification?: string;

  /**
   * The selected registration group. Only used if the current step kind is `group`.
   */
  group?: string;

  /**
   * When the step requires the the mobile phone number to be verified, is the code that is sent via SMS to that phone.
   */
  smsVerification?: string;

  /**
   * Partial parameters of the user being registered. Only the fields in this step are considered. Others are ignored.
   */
  user?: UserNew;
}
