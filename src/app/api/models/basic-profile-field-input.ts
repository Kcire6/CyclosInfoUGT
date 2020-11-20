/* tslint:disable */
import { BasicProfileFieldEnum } from './basic-profile-field-enum';

/**
 * Definitions to input a basic profile field
 */
export interface BasicProfileFieldInput {

  /**
   * If this field has an example value, holds that example
   */
  example?: string;

  /**
   * The basic field this refers to
   */
  field?: BasicProfileFieldEnum;

  /**
   * If this field has a mask used for input, contains this mask. Currently only the account number can (optionally) have one.
   */
  mask?: string;
}
