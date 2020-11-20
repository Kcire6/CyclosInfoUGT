/* tslint:disable */
import { PasswordInput } from './password-input';
import { RoleEnum } from './role-enum';
import { User } from './user';
import { UserBasicData } from './user-basic-data';
import { UserEdit } from './user-edit';

/**
 * Contains data used to edit a user profile
 */
export interface UserDataForEdit extends UserBasicData {

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * Additional details to the user being edited
   */
  details?: User;

  /**
   * The new e-mail address, which is still pending validation. Is only returned when e-mail validation is enabled for edit profile, and the user has changed the e-mail address.
   */
  emailPendingValidation?: string;

  /**
   * The label used for the name of users
   */
  nameLabel?: string;
  role?: RoleEnum;

  /**
   * The object that can be altered and posted back to save the user / operator
   */
  user?: UserEdit;
}
