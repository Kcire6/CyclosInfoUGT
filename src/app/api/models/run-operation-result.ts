/* tslint:disable */
import { EntityReference } from './entity-reference';
import { NotificationLevelEnum } from './notification-level-enum';
import { OperationResultTypeEnum } from './operation-result-type-enum';
import { RunOperationAction } from './run-operation-action';
import { RunOperationResultColumn } from './run-operation-result-column';

/**
 * Defines what is returned when a custom operation is executed. The actual property that are filled depend on the `resultType` property. Not returned when the `resultType` is file. In that case, the response content will be the file content
 */
export interface RunOperationResult {

  /**
   * Actions are other internal custom operations that can be executed from this custom operation. The returned parameters should be passed to the server when running this action.
   */
  actions?: Array<RunOperationAction>;

  /**
   * If it is present, it indicates the id of the action that should be executed automatically.
   */
  autoRunActionId?: string;

  /**
   * Either the id or internal name of the custom operation to go back after run the operation.
   */
  backTo?: EntityReference;

  /**
   * A boolean value indicating if the client application must go back to the page that originated the custom  operation executions.
   */
  backToRoot?: boolean;

  /**
   * Contains the definitions for each column in the result. Only returned if `resultType` is `resultPage`.
   */
  columns?: Array<RunOperationResultColumn>;

  /**
   * The execution result content. Only returned if `resultType` is either `plainText` or `richText`.
   */
  content?: string;

  /**
   * The execution result as string that should be shown as a notification. Only returned if `resultType` is `notification`.
   */
  notification?: string;

  /**
   * Only returned if `resultType` is `notification`.
   */
  notificationLevel?: NotificationLevelEnum;

  /**
   * A boolean value indicating if the custom operation we went back to or the current action container operation must be re-run before display it.
   */
  reRun?: boolean;
  resultType?: OperationResultTypeEnum;

  /**
   * Each row is an object containing the cells for that row, keyed by each column's `property`. Only returned if `resultType` is `resultPage`.
   */
  rows?: Array<{ [key: string]: any }>;

  /**
   * The text title. May be returned only if `resultType` is either `plainText`, `richText` or `resultPage`.
   */
  title?: string;

  /**
   * The execution result as an URL, to which the client should be redirected. Only returned if `resultType` is either `externalRedirect` or `url`.
   */
  url?: string;
}
