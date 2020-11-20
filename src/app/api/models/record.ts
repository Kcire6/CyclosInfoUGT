/* tslint:disable */
import { Entity } from './entity';
import { RecordKind } from './record-kind';

/**
 * A custom record is a structured data stored either for a user or for system (a general record, unrelated to a user).
 */
export interface Record extends Entity {

  /**
   * The descriptive text for this record, according to the record type configuration in Cyclos
   */
  display?: string;
  kind?: RecordKind;
}
