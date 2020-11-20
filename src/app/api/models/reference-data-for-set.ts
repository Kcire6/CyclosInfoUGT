/* tslint:disable */
import { ReferenceSet } from './reference-set';
import { User } from './user';

/**
 * Configuration data for setting a reference
 */
export interface ReferenceDataForSet {

  /**
   * The date when the reference was given
   */
  date?: string;

  /**
   * The user that gave the reference
   */
  from?: User;

  /**
   * The object that should be edited and posted back
   */
  reference?: ReferenceSet;

  /**
   * The user that received the reference
   */
  to?: User;
}
