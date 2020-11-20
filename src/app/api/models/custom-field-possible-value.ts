/* tslint:disable */
import { Entity } from './entity';
import { EntityReference } from './entity-reference';

/**
 * Represents a single possible value of an enumerated (single or multi selection) custom field
 */
export interface CustomFieldPossibleValue extends Entity {

  /**
   * The internal name (if available) or id of the possible value category. Optional, and never used if custom field type is dynamic selection.
   */
  category?: EntityReference;

  /**
   * Indicates if this possible value is the default one.
   */
  default?: boolean;

  /**
   * The entity internal name, which can be seen as an extra identifier
   */
  internalName?: string;

  /**
   * The display value
   */
  value?: string;
}
