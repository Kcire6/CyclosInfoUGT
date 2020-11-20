/* tslint:disable */

/**
 * Represents a single possible value of a dynamic custom field
 */
export interface CustomFieldDynamicValue {

  /**
   * The value that should be suggested as default.
   */
  defaultValue?: boolean;

  /**
   * The display label
   */
  label?: string;

  /**
   * The internal value
   */
  value?: string;
}
