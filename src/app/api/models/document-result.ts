/* tslint:disable */
import { Document } from './document';
import { User } from './user';

/**
 * Result from a document search
 */
export interface DocumentResult extends Document {

  /**
   * Indicates whether the document owner brokers can manage this document. Only if `kind` is `user`.
   */
  brokerManageable?: boolean;

  /**
   * The document owner. Only if `kind` is `user`.
   */
  user?: User;
}
