/* tslint:disable */
import { NamedEntity } from './named-entity';

/**
 * A device PIN reference
 */
export interface DevicePin extends NamedEntity {

  /**
   * The last modification date or creation (if it was never modified).
   */
  date?: string;
}
