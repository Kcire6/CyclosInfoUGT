/* tslint:disable */
import { Ad } from './ad';
import { CustomFieldDynamicValue } from './custom-field-dynamic-value';
import { CustomFieldPossibleValue } from './custom-field-possible-value';
import { Entity } from './entity';
import { Image } from './image';
import { Record } from './record';
import { StoredFile } from './stored-file';
import { Transaction } from './transaction';
import { Transfer } from './transfer';
import { User } from './user';

/**
 * Holds detailed information about a custom field value. The actual value should be read from a property depending on the field type:
 *
 *
 * - If the type is either `string`,
 *   `text`,
 *   `richText` or
 *   `url`, the property is on `stringValue`;
 *
 *
 * - If the type is `integer`, the property is
 *   `integerValue`; - If the type is `decimal`,
 *   the property is `decimalValue`;
 *
 *
 * - If the type is `date`, the property is
 *   `dateValue`; - If the type
 * is `boolean`, the property is `booleanValue`;
 *
 * - If the type is either `singleSelection` or
 *   `multiSelection`, the property is
 *   `possibleValues`;
 *
 *
 * - If the type is `dynamicSelection`, the
 *   property is `dynamicValue`;
 *
 *
 * - If the type is `file`, the property is
 *   `fileValues`;
 *
 *
 * - If the type is `image`, the property is
 *   `imageValues`;
 *
 *
 * - Finally, if the type is `linkedEntity`, it
 *   depends on the value of the field's `linkedEntityType`:
 *
 *
 *   - If the entity type is `user`, the property
 *     is `userValue`;
 *
 *
 *   - If the entity type is `record`, the
 *     property is `recordValue`;
 *
 *
 *   - If the entity type is `transaction`, the
 *     property is `transactionValue`;
 *
 *
 *   - If the entity type is `transfer`, the
 *     property is `transferValue`;
 *
 *
 *   - If the entity type is `advertisement`, the
 *     property is `adValue`.
 */
export interface BaseCustomFieldValue extends Entity {

  /**
   * The field value if the field type is `linkedEntity` and the linked entity type is `advertisement`. If the currently set record is not accessible by the logged user, only the `name` field is sent, which contains the advertisement title.
   */
  adValue?: Ad;

  /**
   * The field value if the field type is `boolean`.
   */
  booleanValue?: boolean;

  /**
   * The field value if the field type is `date`.
   */
  dateValue?: string;

  /**
   * The field value if the field type is `decimal`.
   */
  decimalValue?: string;

  /**
   * The field value if the field type is `dynamicSelection`.
   */
  dynamicValue?: CustomFieldDynamicValue;

  /**
   * The field value if the field type is either `singleSelection` or `multiSelection`. For single selections will either be an empty array or an array with a single element
   */
  enumeratedValues?: Array<CustomFieldPossibleValue>;

  /**
   * The field value if the field type is `file`
   */
  fileValues?: Array<StoredFile>;

  /**
   * The field value if the field type is `image`
   */
  imageValues?: Array<Image>;

  /**
   * The field value if the field type is `integer`.
   */
  integerValue?: number;

  /**
   * The field value if the field type is `linkedEntity` and the linked entity type is `record`. If the currently set record is not accessible by the logged user, only the `display` field is sent.
   */
  recordValue?: Record;

  /**
   * The field value if the field type is either `string`, `text`, `richText` or `url`.
   */
  stringValue?: string;

  /**
   * The field value if the field type is `linkedEntity` and the linked entity type is `transaction`. If the currently set transaction is not accessible by the logged user, only the `display` field is sent.
   */
  transactionValue?: Transaction;

  /**
   * The field value if the field type is `linkedEntity` and the linked entity type is `transfer`. If the currently set transfer is not accessible by the logged user, only the `display` field is sent.
   */
  transferValue?: Transfer;

  /**
   * The field value if the field type is `linkedEntity` and the linked entity type is `user`. If the currently set user is not accessible by the logged user, only a limited set of fields is sent, namely `display` and `shortDisplay`.
   */
  userValue?: User;
}
