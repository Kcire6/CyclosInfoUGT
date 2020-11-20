/* tslint:disable */
import { Entity } from './entity';

/**
 * Common alert data
 */
export interface Alert extends Entity {

  /**
   * The alert date
   */
  date?: string;

  /**
   * The alert text
   */
  text?: string;
}
