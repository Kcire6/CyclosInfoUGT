/* tslint:disable */

/**
 * Common fields for either creating or editing a document
 */
export interface DocumentManage {

  /**
   * Can this document be managed by the user's broker(s)? Only used if the document `kind` is `user`.
   */
  brokerManageable?: boolean;

  /**
   * Is this document visible by the user's broker(s)? Only used if the document `kind` is `user`.
   */
  brokerVisible?: boolean;

  /**
   * The shared document category internal name or id. Only used if the document `kind` is either `static` or `dynamic`.
   */
  category?: string;

  /**
   * The document description
   */
  description?: string;

  /**
   * Whether the document is enabled
   */
  enabled?: boolean;

  /**
   * The document name
   */
  name?: string;

  /**
   * Is this document visible by the owner user? Only used if the document `kind` is `user`.
   */
  userVisible?: boolean;
}
