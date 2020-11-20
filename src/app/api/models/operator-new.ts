/* tslint:disable */
import { BasicUserManage } from './basic-user-manage';
import { PasswordRegistration } from './password-registration';
import { PhoneNew } from './phone-new';

/**
 * Contains data used to register an operator. All basic profile fields (full name, login name, e-mail, phones and addresses) can be enabled or disabled on Cyclos, via products.
 */
export interface OperatorNew extends BasicUserManage {

  /**
   * The operator group. When not specified the operator will be an 'alias', that means, will have all permissions of his owner.
   */
  group?: string;

  /**
   * Land-line phones to be registered together with the user
   */
  landLinePhones?: Array<PhoneNew>;

  /**
   * Mobile phones to be registered together with the user
   */
  mobilePhones?: Array<PhoneNew>;

  /**
   * The initial passwords of the user
   */
  passwords?: Array<PasswordRegistration>;

  /**
   * When set to true, the activation e-mail is not sent to the registered user. Can only be used when an administrator / broker is registering a user, and ignored on public registrations (the e-mail is always sent on public registrations).
   */
  skipActivationEmail?: boolean;
}
