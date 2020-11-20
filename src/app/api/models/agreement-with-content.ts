/* tslint:disable */
import { Agreement } from './agreement';

/**
 * An agreement the user must accept in order to use the system
 */
export interface AgreementWithContent extends Agreement {

  /**
   * This shouldn't be used. Instead, do an additional request to `GET /agreements/{key}/content` to fetch the content.
   *
   *
   * The agreement content.
   *
   * @deprecated
   */
  content?: string;
}
