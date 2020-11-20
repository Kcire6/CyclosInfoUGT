/* tslint:disable */
import { Document } from './document';
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * Details of a document
 */
export interface DocumentView extends Document {

  /**
   * Can this document be managed by the user's broker(s)? Only used if the document `kind` is `user`.
   */
  brokerManageable?: boolean;

  /**
   * Is this document visible by the user's broker(s)? Only used if the document `kind` is `user`.
   */
  brokerVisible?: boolean;

  /**
   * The document category, if a shared document
   */
  category?: EntityReference;

  /**
   * The document description.
   */
  description?: string;

  /**
   * Whether the document is enabled or not.
   */
  enabled?: boolean;

  /**
   * The document owner. Only if `kind` is `user`.
   */
  user?: User;

  /**
   * Is this document visible by the owner user? Only used if the document `kind` is `user`.
   */
  userVisible?: boolean;
}
