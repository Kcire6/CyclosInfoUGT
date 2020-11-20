/* tslint:disable */
import { SessionSourceEnum } from './session-source-enum';

/**
 * Session properties to be modified.
 */
export interface SessionPropertiesEdit {

  /**
   * Changes the session source. Can only be changed when the current session is trusted.
   */
  source?: SessionSourceEnum;
}
