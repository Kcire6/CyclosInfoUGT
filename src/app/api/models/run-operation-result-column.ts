/* tslint:disable */
import { RunOperationResultColumnTypeEnum } from './run-operation-result-column-type-enum';

/**
 * A column definition when the result type is `resultPage`.
 */
export interface RunOperationResultColumn {

  /**
   * The horizontal alignment. The actual values depend on the semantics of both the script result and the client application.
   */
  align?: string;

  /**
   * The number of decimal digits (scale) to format numbers. -1 represents variable scale. Only if `type` is `number`.
   */
  decimalDigits?: number;

  /**
   * The column header text
   */
  header?: string;

  /**
   * Contains the property name for each row element to access this column value.
   */
  property?: string;
  type?: RunOperationResultColumnTypeEnum;

  /**
   * The vertical alignment. The actual values depend on the semantics of both the script result and the client application.
   */
  valign?: string;

  /**
   * The column width. The actual values depend on the semantics of both the script result and the client application.
   */
  width?: string;
}
