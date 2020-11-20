/* tslint:disable */
import { BaseAuth } from './base-auth';
import { PinInput } from './pin-input';
import { VersionedEntity } from './versioned-entity';

/**
 * Contains information for the currently authenticated user
 */
export interface Auth extends BaseAuth {

  /**
   * The current configuration version
   */
  configuration?: VersionedEntity;

  /**
   * Returned when a PIN can be defined. Contains the information for defining it.
   */
  pinInput?: PinInput;
}
