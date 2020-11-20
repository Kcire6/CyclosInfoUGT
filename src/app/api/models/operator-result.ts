/* tslint:disable */
import { EntityReference } from './entity-reference';
import { UserResult } from './user-result';

/**
 * Result of a operator search.
 */
export interface OperatorResult extends UserResult {
  group?: EntityReference;
}
