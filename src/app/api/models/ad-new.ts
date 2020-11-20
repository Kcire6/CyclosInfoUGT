/* tslint:disable */
import { AdKind } from './ad-kind';
import { AdManage } from './ad-manage';

/**
 * Parameters for creating a new advertisement
 */
export interface AdNew extends AdManage {

  /**
   * Only useful when authorization is not required (`AdDataForNew`/`AdDataForEdit`.`requiresAuthorization` flag is `false`). Indicates whether the initial status for the advertisement should be `hidden` (when `true`) or `active` (when `false`).
   */
  hidden?: boolean;

  /**
   * The ids of previously uploaded user temporary images to be initially used as advertisement images
   */
  images?: Array<string>;

  /**
   * The advertisement kind to be created. Currently only `simple` advertisements can be managed through this API. The default is `simple`.
   */
  kind?: AdKind;

  /**
   * Only useful when authorization is required (`AdDataForNew`/`AdDataForEdit`.`requiresAuthorization` flag is `true`). Indicates whether the advertisement will be initially submitted for authorization (status = `pending`) or kept in the `draft` status.
   */
  submitForAuthorization?: boolean;
}
