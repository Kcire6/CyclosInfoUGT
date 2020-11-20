/* tslint:disable */
import { Agreement } from './agreement';

/**
 * Contains the full content of an agreement
 */
export interface AgreementContent {
  agreement?: Agreement;

  /**
   * The HTML formatted content of the agreement
   */
  content?: string;

  /**
   * The version of the text for this agreement. When the text changes, the version is incremented.
   */
  contentVersion?: number;

  /**
   * The current (last) version of the text for this agreement.
   */
  lastVersion?: number;
}
