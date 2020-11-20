/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Details for a section of fields in a record type
 */
export interface RecordSection extends InternalNamedEntity {

  /**
   * The internal names of the custom fields which are part of this section.
   */
  fields?: Array<string>;

  /**
   * An informative text that should be shown in the form. The text is formatted in HTML.
   */
  informationText?: string;
}
