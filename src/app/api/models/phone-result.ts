/* tslint:disable */
import { Phone } from './phone';

/**
 * Data for a phone as returned on list
 */
export interface PhoneResult extends Phone {

  /**
   * Indicates whether this phone is verified and enabled for SMS. Is only returned if `kind` is `mobile` and the authenticated user manages the owner of this phone.
   */
  enabledForSms?: boolean;

  /**
   * Indicates whether this phone is hidden for other users. It always returns false if the authenticated user doesn't manage the owner of this phone.
   */
  hidden?: boolean;

  /**
   * The date the verification code was sent, if any. Is only returned if `kind` is `mobile` and the authenticated user manages the owner of this phone.
   */
  verificationCodeSendDate?: string;

  /**
   * Indicates whether this phone is verified. Is only returned if `kind` is `mobile` and the authenticated user manages the owner of this phone.
   */
  verified?: boolean;
}
