/* tslint:disable */
import { AcceptedAgreement } from './accepted-agreement';
import { Agreement } from './agreement';
import { AgreementLog } from './agreement-log';
import { User } from './user';

/**
 * Information of agreements related to a user
 */
export interface UserAgreementsData {

  /**
   * Keyed by agreement id, contains details of each accepted agreement. Agreements whose id isn't a key in this field weren't accepted.
   */
  accepted?: { [key: string]: AcceptedAgreement };

  /**
   * All agreements enabled for the user, both required and optional
   */
  agreements?: Array<Agreement>;

  /**
   * Indicates whether the authenticated user can manage the optional agreements for this user
   */
  canEdit?: boolean;

  /**
   * The history log for the agreements that were accepted, or optional agreements that were no longer accepted.
   */
  history?: Array<AgreementLog>;
  user?: User;
}
