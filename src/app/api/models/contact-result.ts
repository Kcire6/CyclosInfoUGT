/* tslint:disable */
import { Contact } from './contact';

/**
 * Contains data returned when searching for an user's contact list
 */
export interface ContactResult extends Contact {

  /**
   * Holds the values for contact custom fields which are set to be returned on list, keyed by field internal name
   */
  customValues?: { [key: string]: string };
}
