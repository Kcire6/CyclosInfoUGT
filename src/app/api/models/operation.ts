/* tslint:disable */
import { AdminMenuEnum } from './admin-menu-enum';
import { InternalNamedEntity } from './internal-named-entity';
import { OperationResultTypeEnum } from './operation-result-type-enum';
import { OperationScopeEnum } from './operation-scope-enum';
import { OperationShowFormEnum } from './operation-show-form-enum';
import { UserMenuEnum } from './user-menu-enum';
import { UserProfileSectionEnum } from './user-profile-section-enum';

/**
 * Contains definitions used to run a custom operation
 */
export interface Operation extends InternalNamedEntity {

  /**
   * In which administration menu the operation shows up. Only returned in contexts where the operation can be executed.
   */
  adminMenu?: AdminMenuEnum;

  /**
   * Does this operation allows exporting the result page as file? Only returned if `resultType` is `resultPage`. Only returned in contexts where the operation can be executed.
   */
  allowExport?: boolean;

  /**
   * Should the front-end show a print action for the custom operation result? Before Cyclos 4.13 this was used for `resultType` `resultPage`, but since 4.13 is only used for `plainText` or `richText`. Only returned in contexts where the operation can be executed.
   */
  allowPrint?: boolean;

  /**
   * A message to be shown to the user in order to confirm the operation execution. Only returned in contexts where the operation can be executed.
   */
  confirmationText?: string;

  /**
   * Indicates whether this operation accepts a file upload as input. Only returned in contexts where the operation can be executed.
   */
  hasFileUpload?: boolean;

  /**
   * The character that represents the icon in the Cyclos font
   */
  icon?: string;

  /**
   * A message to be displayed to the user when displaying the parameters form. Only returned in contexts where the operation can be executed.
   */
  informationText?: string;

  /**
   * A representative label about the operation
   */
  label?: string;

  /**
   * The optional custom fields without a value. The front-end could opt-in to rely on the `showFormForMissingOptionalParameters` flag to determine whether to show or not an input form if there's a missing poptional form field. Only returned in contexts where the operation can be executed.
   */
  missingOptionalParameters?: Array<string>;

  /**
   * The required custom fields without a value. This means the operation will fail with a validation error if the parameters present in this list are not given when run it. Only returned in contexts where the operation can be executed.
   */
  missingRequiredParameters?: Array<string>;

  /**
   * Indicates whether this operation requires confirmation password. Only returned in contexts where the operation can be executed.
   */
  requireConfirmationPassword?: boolean;

  /**
   * The type of data returned after the operation is executed. Only returned in contexts where the operation can be executed.
   */
  resultType?: OperationResultTypeEnum;
  scope?: OperationScopeEnum;

  /**
   * Indicates the conditions in which the form with the parameters must be shown. Only returned if the `resultType` is not `resultPage`, for this `resultType` see `OperationDataForRun.searchAutomatically`. Only returned in contexts where the operation can be executed.
   */
  showForm?: OperationShowFormEnum;

  /**
   * Use `showForm` instead.
   *
   *
   * Indicates whether a form to enter the missing optional parameters must be shown. Only returned if the `missingOptionalParameters` list is not empty and `scope` is  `internal`. Only returned in contexts where the operation can be executed.
   *
   * @deprecated
   */
  showFormForMissingOptionalParameters?: boolean;

  /**
   * In which user menu the operation shows up. Only returned in contexts where the operation can be executed.
   */
  userMenu?: UserMenuEnum;

  /**
   * In which user profile section the operation shows up. Only returned in contexts where the operation can be executed.
   */
  userProfileSection?: UserProfileSectionEnum;
}
