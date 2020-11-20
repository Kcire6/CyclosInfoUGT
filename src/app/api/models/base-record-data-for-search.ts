/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';
import { ExportFormat } from './export-format';
import { RecordBasePermissions } from './record-base-permissions';

/**
 * Common definitions for searching records
 */
export interface BaseRecordDataForSearch extends RecordBasePermissions {

  /**
   * The list of record fields that are either to be used as search filter (if its internal name is present on `fieldsInSearch`) and / or in the result list (if its internal name is present on `fieldsInList`)
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The formats which the data can be exported
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * The internal names of the record fields that will be returned together with each record, and should be shown in the result list
   */
  fieldsInList?: Array<string>;

  /**
   * The internal names of the record fields that should be used as search filters (separated fields, not keywords)
   */
  fieldsInSearch?: Array<string>;

  /**
   * Whether the date column should be hidden on result list.
   */
  hideDateOnList?: boolean;
}
