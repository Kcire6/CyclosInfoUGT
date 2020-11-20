/* tslint:disable */
import { Ad } from './ad';
import { Contact } from './contact';
import { ContactInfo } from './contact-info';
import { CustomFieldDetailed } from './custom-field-detailed';
import { ExportFormat } from './export-format';
import { Operation } from './operation';
import { OperationRowActionEnum } from './operation-row-action-enum';
import { PasswordInput } from './password-input';
import { Record } from './record';
import { RecordType } from './record-type';
import { RunOperationAction } from './run-operation-action';
import { Transfer } from './transfer';
import { User } from './user';

/**
 * Contains definitions used to run a custom operation
 */
export interface OperationDataForRun extends Operation {

  /**
   * Actions are other internal custom operations that can be executed from this custom operation. The returned parameters should be passed to the server when running this action.
   */
  actions?: Array<RunOperationAction>;

  /**
   * The advertisement for which this custom operation will be executed. Only returned if `scope` is  `advertisement`
   */
  ad?: Ad;

  /**
   * If it is present, it indicates the id of the action that should be executed automatically.
   */
  autoRunActionId?: string;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The contact for whom this custom operation will be executed. Only returned if `scope` is  `contact`
   */
  contact?: Contact;

  /**
   * The additional contact for which this custom operation will be executed. Only returned if `scope` is  `contactInfo`
   */
  contactInfo?: ContactInfo;

  /**
   * A label to be shown on the submit button. When not returned, a generic 'Submit' should be displayed.
   */
  customSubmitLabel?: string;

  /**
   * The formats which a custom operation result of type `resultPage` can be exported.
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * The custom fields which are used in a form as parameters for the operation execution.
   */
  formParameters?: Array<CustomFieldDetailed>;

  /**
   * The record for which this custom operation will be executed. Only returned if `scope` is  `record`
   */
  record?: Record;

  /**
   * The record type of the record for which this custom operation will be executed. Only returned if `scope` is  `record`
   */
  recordType?: RecordType;

  /**
   * A message to be displayed to the user when displaying the page results. Only returned if `resultType` is `resultPage`.
   */
  resultInformationText?: string;
  rowAction?: OperationRowActionEnum;

  /**
   * The location to which the client should be redirected when selecting a row in the results table. Only returned if `resultType` is `resultPage` and `rowAction` is `location`.
   */
  rowLocation?: string;

  /**
   * The custom operation that should be executed when clicking a row. Only returned if `resultType` is `resultPage` and `rowAction` is `operation`.
   */
  rowOperation?: Operation;

  /**
   * The names of parameters belonging to each custom operation result that should be passed as parameter to the custom operation or URL which is executed when selecting a row in the table. Only returned if `resultType` is `resultPage`.
   */
  rowParameters?: Array<string>;

  /**
   * The URL the client should be redirected when clicking a row. Only returned if `resultType` is `resultPage` and `rowAction` is `url`.
   */
  rowUrl?: string;

  /**
   * Should the operation be immediately executed by the third party client software when first presenting the form to the user  (when `true`) or only when the user clicks submit (when `false`)? Only returned if `resultType` is `resultPage`.
   */
  searchAutomatically?: boolean;

  /**
   * The transfer for which this custom operation will be executed. Only returned if `scope` is  `transfer`
   */
  transfer?: Transfer;

  /**
   * The user for whom this custom operation will be executed. Returned if `scope` is either `user`, `advertisement`, `contact` (the contact owner), `contactInfo` or `record` (for user records).
   */
  user?: User;
}
