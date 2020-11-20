/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';
import { GroupForRegistration } from './group-for-registration';
import { IdentityProvider } from './identity-provider';
import { UserDataForNew } from './user-data-for-new';
import { WizardStep } from './wizard-step';

/**
 * A custom wizard step with detailed information
 */
export interface WizardStepDetailed extends WizardStep {

  /**
   * The custom fields defined in this wizard that should be displayed. Only returned if `kind` is `formFields`.
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * Contains the `UserDataForNew` for the new user registration. Only returned if `kind` is `formFields` and the wizard kind is `registration`. The returned object contains a subset of the fields, according to what should be displayed in this step. For example, even if the full profile contains several fields, if this step is configured to show only the full name and e-mail, only those profile fields are returned in `profileFieldActions`, and the `phoneConfiguration`, `passwordTypes`, etc, will all be empty.
   */
  dataForNew?: UserDataForNew;

  /**
   * Groups that can be used for registration. Only returned if `kind` is `group`.
   */
  groups?: Array<GroupForRegistration>;

  /**
   * The identity providers available for registering. Only returned if `kind` is `identityProvider`.
   */
  identityProviders?: Array<IdentityProvider>;

  /**
   * Descriptive text that should be displayed in this wizard step.
   */
  informationText?: string;

  /**
   * The title that should be displayed for users on this step.
   */
  title?: string;

  /**
   * Indicates, in case the e-mail is shown, if it must be validated by sending a code to the given e-mail address. Only returned if `kind` is `formFields` and the wizard kind is `registration`.
   */
  validateEmail?: boolean;

  /**
   * Indicates, in case the mobile phone is shown, if it must be validated by sending a code via SMS. Only returned if `kind` is `formFields` and the wizard kind is `registration`.
   */
  validateSms?: boolean;

  /**
   * If an e-mail address was already verified, contains that address. Only returned if `kind` is `formFields` and the wizard kind is `registration`.
   */
  verifiedEmail?: string;

  /**
   * If a mobile phone number was was already verified by SMS, contains that number. Only returned if `kind` is `formFields` and the wizard kind is `registration`.
   */
  verifiedSms?: string;
}
