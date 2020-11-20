/* tslint:disable */
import { Ad } from './ad';
import { CustomField } from './custom-field';
import { CustomFieldDynamicValue } from './custom-field-dynamic-value';
import { CustomFieldPossibleValue } from './custom-field-possible-value';
import { CustomFieldSizeEnum } from './custom-field-size-enum';
import { EntityReference } from './entity-reference';
import { Record } from './record';
import { Transaction } from './transaction';
import { Transfer } from './transfer';
import { User } from './user';

/**
 * Contains all information needed to render a widget for a custom field value
 */
export interface CustomFieldDetailed extends CustomField {

  /**
   * Only applicable when the custom field is linked entity of type `advertisement` and `hasValuesList` is `true`. Contains the possible advertisements.
   */
  adValues?: Array<Ad>;

  /**
   * The label to be shown when all values are selected for a multi selection field.
   */
  allSelectedLabel?: string;

  /**
   * Only applicable when the custom field type is `date` and `hasValuesList` is `true`. Contains the possible date values.
   */
  dateValues?: Array<string>;

  /**
   * Only applicable when the custom field type is `decimal` and `hasValuesList` is `true`. Contains the possible decimal values.
   */
  decimalValues?: Array<string>;

  /**
   * The value that should be suggested as default. For multi selection will be a comma-separated string with possible values ids or internal names.
   */
  defaultValue?: string;

  /**
   * Only applicable when the custom field is dynamic selection. Contains the script-generated possible values.
   */
  dynamicValues?: Array<CustomFieldDynamicValue>;

  /**
   * Returns whether this custom field has a list of possible values, according to its type.
   */
  hasValuesList?: boolean;

  /**
   * Additional text that can be shown to the user as a hint of this field
   */
  informationText?: string;

  /**
   * Only applicable when the custom field type is `integer` and `hasValuesList` is `true`. Contains the possible integer values.
   */
  integerValues?: Array<number>;

  /**
   * Only applicable when the custom field type is `file` or `image`. The maximun files that can be uploaded.
   */
  maxFiles?: number;

  /**
   * The allowed mime types for binary custom fields. Only applicable when the custom field type is either `file` or `image`.
   */
  mimeTypes?: Array<string>;

  /**
   * The (optional) mask to be applied to string values
   */
  pattern?: string;

  /**
   * Only applicable when the custom field is enumerated (single or multi select). Contains the possible value categories.
   */
  possibleValueCategories?: Array<EntityReference>;

  /**
   * Only applicable when the custom field is enumerated (single or multi selection). Contains the possible values for selection. Each value may or may not have a category. When they have, it will be a string pointing to the internal name (if available) or id of the possible value category, which can be looked up in the categories property.
   */
  possibleValues?: Array<CustomFieldPossibleValue>;

  /**
   * Only applicable when the custom field is linked entity of type `record` and `hasValuesList` is `true`. Contains the possible records.
   */
  recordValues?: Array<Record>;

  /**
   * Indicates whether this field is required
   */
  required?: boolean;

  /**
   * The suggested size for the rendered widget
   */
  size?: CustomFieldSizeEnum;

  /**
   * Only applicable when the custom field type is `string` and `hasValuesList` is `true`. Contains the possible string values.
   */
  stringValues?: Array<string>;

  /**
   * Only applicable when the custom field is linked entity of type `transaction` and `hasValuesList` is `true`. Contains the possible transactions.
   */
  transactionValues?: Array<Transaction>;

  /**
   * Only applicable when the custom field is linked entity of type `transfer` and `hasValuesList` is `true`. Contains the possible transfers.
   */
  transferValues?: Array<Transfer>;

  /**
   * Only applicable when the custom field is linked entity of type `user` and `hasValuesList` is `true`. Contains the possible users.
   */
  userValues?: Array<User>;
}
