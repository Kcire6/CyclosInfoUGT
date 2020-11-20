/* tslint:disable */
import { EntityReference } from './entity-reference';
import { PasswordStatus } from './password-status';

/**
 * Contains the status of a password and its type.
 */
export interface PasswordStatusAndType extends PasswordStatus {

  /**
   * The password type
   */
  type?: EntityReference;
}
