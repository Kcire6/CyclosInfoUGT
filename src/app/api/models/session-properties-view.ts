/* tslint:disable */
import { DevicePin } from './device-pin';
import { EntityReference } from './entity-reference';
import { SessionSourceEnum } from './session-source-enum';
import { TimeInterval } from './time-interval';

/**
 * Contains properties of a user session
 */
export interface SessionPropertiesView {

  /**
   * The timestamp of the session creation
   */
  createdAt?: string;

  /**
   * Reference to the trusted device that wither created or confirmed this session. When null, the session is not trusted.
   */
  device?: EntityReference;

  /**
   * Reference to the device PIN that was used to login. Otherwise, when the session was created with a trusted device, and the device has a PIN attached, will reflect it.
   */
  devicePin?: DevicePin;

  /**
   * The inactivity interval for this session to expire
   */
  expirationInterval?: TimeInterval;

  /**
   * The current session expiration timestamp. After each usage of this session, the timeout is renewed, and the additional timeout will be the operation timestamp added to `expirationInterval`.
   */
  expiresAt?: string;

  /**
   * Indicates how the session was created. Can be modified in runtime.
   */
  source?: SessionSourceEnum;
}
