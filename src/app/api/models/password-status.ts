/* tslint:disable */
import { PasswordStatusEnum } from './password-status-enum';

/**
 * Contains the status of a password
 */
export interface PasswordStatus {

  /**
   * The date this status took place
   */
  date?: string;
  status?: PasswordStatusEnum;
}
