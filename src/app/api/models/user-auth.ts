/* tslint:disable */
import { BaseAuth } from './base-auth';
import { Group } from './group';
import { VersionedEntityReference } from './versioned-entity-reference';

/**
 * Contains information returned after logging in an user.
 */
export interface UserAuth extends BaseAuth {

  /**
   * The current configuration
   */
  configuration?: VersionedEntityReference;
  group?: Group;
}
