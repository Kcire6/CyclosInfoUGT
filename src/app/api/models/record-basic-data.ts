/* tslint:disable */
import { RecordCustomFieldDetailed } from './record-custom-field-detailed';
import { RecordKind } from './record-kind';
import { RecordTypeDetailed } from './record-type-detailed';
import { User } from './user';

/**
 * Contains data shared by both RecordDataForNew and RecordDataForEdit
 */
export interface RecordBasicData {

  /**
   * The record custom fields (either defined within this record type or shared fields linked with this record type)
   */
  fields?: Array<RecordCustomFieldDetailed>;
  kind?: RecordKind;
  type?: RecordTypeDetailed;

  /**
   * The record owner user. Only returned if `kind` is `user`.
   */
  user?: User;
}
