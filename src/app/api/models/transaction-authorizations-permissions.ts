/* tslint:disable */
import { TransactionAuthorizationPermissions } from './transaction-authorization-permissions';

/**
 * Permissions over own authorized payments
 */
export interface TransactionAuthorizationsPermissions extends TransactionAuthorizationPermissions {

  /**
   * Can view own authorized payments?
   */
  view?: boolean;
}
