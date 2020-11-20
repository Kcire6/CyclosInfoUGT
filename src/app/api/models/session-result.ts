/* tslint:disable */
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * Contains data returned when searching for sessions
 */
export interface SessionResult {
  channel?: EntityReference;

  /**
   * The session creation date
   */
  creationDate?: string;

  /**
   * Whether the session is the current one
   */
  currentSession?: boolean;

  /**
   * The session remote address
   */
  remoteAddress?: string;

  /**
   * The session token
   */
  sessionToken?: string;
  user?: User;
}
