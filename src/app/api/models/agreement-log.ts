/* tslint:disable */
import { Agreement } from './agreement';
import { Entity } from './entity';

/**
 * Contains an entry for an agreement that was either accepted or rejected
 */
export interface AgreementLog extends Entity {

  /**
   * For required agreements this will always be `true`. For optional agreements, a log is generated both when the agreement was accepted or changed to no longer accepted.
   */
  accepted?: boolean;

  /**
   * The version of the agreement that was accepted
   */
  acceptedVersion?: number;
  agreement?: Agreement;

  /**
   * The date the agreement was accepted
   */
  date?: string;

  /**
   * The IP address of the request that accepted the agreement. Not returned for the user himself, only for managers.
   */
  remoteAddress?: string;
}
