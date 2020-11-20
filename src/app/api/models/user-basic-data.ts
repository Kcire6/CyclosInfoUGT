/* tslint:disable */
import { CustomFieldBinaryValues } from './custom-field-binary-values';
import { ProfileFieldActions } from './profile-field-actions';
import { UserCustomFieldDetailed } from './user-custom-field-detailed';

/**
 * Contains properties shared by both UserDataForNew and UserDataForEdit
 */
export interface UserBasicData {

  /**
   * Holds the current values for file / image custom fields as lists of `StoredFile`s / `Image`s.
   */
  binaryValues?: CustomFieldBinaryValues;

  /**
   * The available custom field definitions
   */
  customFields?: Array<UserCustomFieldDetailed>;

  /**
   * Indicates whether the e-mail is required
   */
  emailRequired?: boolean;

  /**
   * Indicates whether privacy over profile fields can be controlled for this user.
   */
  enablePrivacy?: boolean;

  /**
   * An object, keyed by profile field internal name (either one of the basic profile fields or custom fields), containing other objects that defines the allowed actions over these profile fields
   */
  profileFieldActions?: { [key: string]: ProfileFieldActions };
}
