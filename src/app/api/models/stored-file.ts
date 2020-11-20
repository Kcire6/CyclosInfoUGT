/* tslint:disable */
import { NamedEntity } from './named-entity';

/**
 * Contains data about a stored file
 */
export interface StoredFile extends NamedEntity {

  /**
   * MIME type of the stored file
   */
  contentType?: string;

  /**
   * The file size, in bytes
   */
  length?: number;

  /**
   * The URL for getting the content of this file
   */
  url?: string;
}
