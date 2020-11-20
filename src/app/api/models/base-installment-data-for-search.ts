/* tslint:disable */
import { AccountType } from './account-type';
import { ExportFormat } from './export-format';
import { Group } from './group';
import { TransactionKind } from './transaction-kind';

/**
 * Contains common data used to search installments for a given owner
 */
export interface BaseInstallmentDataForSearch {

  /**
   * Visible account types from the given owner
   */
  accountTypes?: Array<AccountType>;

  /**
   * Can the authenticated user view authorized transactions of this owner?
   */
  canViewAuthorized?: boolean;

  /**
   * The formats which the search results can be exported.
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * Groups that can be used to filter entries, so that only transfers from or to users of those groups are returned on search. Is only returned if the authenticated user is an administrator.
   */
  groups?: Array<Group>;

  /**
   * Contains the transaction kinds the authenticated user can view over this owner. Only kinds that allow installments are returned.
   */
  visibleKinds?: Array<TransactionKind>;
}
