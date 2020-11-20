/* tslint:disable */
import { Entity } from './entity';
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * An incoming message (in the user's inbox)
 */
export interface IncomingMessage extends Entity {

  /**
   * The message body
   */
  body?: string;

  /**
   * The message category, for messages from system
   */
  category?: EntityReference;

  /**
   * The message date
   */
  date?: string;
  fromUser?: User;

  /**
   * The message subject
   */
  subject?: string;
}
