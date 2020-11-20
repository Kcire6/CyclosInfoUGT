/* tslint:disable */
import { Entity } from './entity';
import { ReferenceLevelEnum } from './reference-level-enum';

/**
 * A general reference between 2 users
 */
export interface Reference extends Entity {

  /**
   * The reference comments
   */
  comments?: string;

  /**
   * The date the reference was set
   */
  date?: string;
  level?: ReferenceLevelEnum;
}
