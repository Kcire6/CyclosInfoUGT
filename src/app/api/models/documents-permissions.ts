/* tslint:disable */
import { EntityReference } from './entity-reference';

/**
 * Permissions over documents
 */
export interface DocumentsPermissions {

  /**
   * Whether the authenticated uses can view individual documents
   */
  viewIndividual?: boolean;

  /**
   * Permissions over each visible document category (shared docs)
   */
  viewShared?: Array<EntityReference>;
}
