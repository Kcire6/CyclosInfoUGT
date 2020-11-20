/* tslint:disable */
import { IncomingMessage } from './incoming-message';

/**
 * A new message has been received
 */
export interface NewMessagePush {
  message?: IncomingMessage;

  /**
   * The number of new messages since the last login
   */
  newMessages?: number;

  /**
   * The current number of unread messages
   */
  unreadMessages?: number;
}
