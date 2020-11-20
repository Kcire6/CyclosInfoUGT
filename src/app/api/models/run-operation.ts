/* tslint:disable */
import { OperationPageContextEnum } from './operation-page-context-enum';

/**
 * Defines parameters used to run a custom operation
 */
export interface RunOperation {

  /**
   * If the custom operation requires confirmation password, the `OperationDataForRun.confirmationPasswordInput` will contain the data for inputting the confirmation password. When such value is present, the password value should be provided in this property.
   */
  confirmationPassword?: string;

  /**
   * Only when running a custom operation with `resultType` = `resultPage`. Is the internal name of the format to export the results. If unset will not generate a file, but return the result data.
   */
  exportFormat?: string;

  /**
   * Holds the form field values, keyed by field internal name or id. The format of the value depends on the custom field type.
   */
  formParameters?: { [key: string]: string };

  /**
   * When running a custom operation with `resultType` = `resultPage`, determines the current page offset. Whether this is implemented depends on the script code itself.
   */
  page?: number;

  /**
   * Use `exportFormat` instead.
   *
   *
   * Only when running a custom operation with `resultType` = `resultPage`.
   *
   * @deprecated
   */
  pageContext?: OperationPageContextEnum;

  /**
   * When running a custom operation with `resultType` = `resultPage`, determines the number of results per page. Whether this is implemented depends on the script code itself.
   */
  pageSize?: number;

  /**
   * When running a custom operation with `resultType` = `resultPage`, when set to true will ignre the total count when searching. Of course, it should be honored by the script implementing the query in order to make effect.
   */
  skipTotalCount?: boolean;
}
