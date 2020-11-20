/* tslint:disable */
import { CustomFieldControlEnum } from './custom-field-control-enum';
import { CustomFieldKind } from './custom-field-kind';
import { CustomFieldTypeEnum } from './custom-field-type-enum';
import { InternalNamedEntity } from './internal-named-entity';
import { LinkedEntityTypeEnum } from './linked-entity-type-enum';

/**
 * Contains reference to a custom field
 */
export interface CustomField extends InternalNamedEntity {
  control?: CustomFieldControlEnum;

  /**
   * The number of decimal digits. Only available if `type` is `decimal`.
   */
  decimalDigits?: number;
  kind?: CustomFieldKind;
  linkedEntityType?: LinkedEntityTypeEnum;
  type?: CustomFieldTypeEnum;
}
