/* tslint:disable */
import { PasswordTypeRegistration } from './password-type-registration';
import { PhoneConfigurationForUserProfile } from './phone-configuration-for-user-profile';
import { UserBasicData } from './user-basic-data';

/**
 * Contains basic data to register either a user or operator
 */
export interface BasicUserDataForNew extends UserBasicData {

  /**
   * Whether the current user is allowed to skip the activateion e-mail
   */
  allowSetSendActivationEmail?: boolean;

  /**
   * Indicates whether the login name is generated
   */
  generatedUsername?: boolean;

  /**
   * The password types that should be registered together with the user
   */
  passwordTypes?: Array<PasswordTypeRegistration>;
  phoneConfiguration?: PhoneConfigurationForUserProfile;
}
