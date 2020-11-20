/* tslint:disable */
import { EntityReference } from './entity-reference';
import { PrincipalType } from './principal-type';

/**
 * Contains information about a principal (user identification) and the channels that can be accessed using it
 */
export interface UserRegistrationPrincipal {

  /**
   * The channels that can be accessed using this principal
   */
  channels?: Array<EntityReference>;
  type?: PrincipalType;

  /**
   * The principal value
   */
  value?: string;
}
