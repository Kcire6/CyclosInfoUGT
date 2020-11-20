/* tslint:disable */
import { Entity } from './entity';
import { User } from './user';

/**
 * A contact is a relation between 2 users: the contact owner and the contact user. It can also contain custom fields.
 */
export interface Contact extends Entity {

  /**
   * The contact user (not the contact owner)
   */
  contact?: User;
}
