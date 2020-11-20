/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';

/**
 * Adds to `CustomFieldDetailed` some user-specific definitions
 */
export interface UserCustomFieldDetailed extends CustomFieldDetailed {

  /**
   * This flag determine whether this field is hidden or not by default
   */
  hiddenByDefault?: boolean;
}
