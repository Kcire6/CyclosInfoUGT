/* tslint:disable */
import { AccountType } from './account-type';
import { ExportFormat } from './export-format';
import { Group } from './group';

/**
 * Configuration data for searching a account payment limits.
 */
export interface DataForPaymentLimitsSearch {

  /**
   * The account types that can be used to filter.
   */
  accountTypes?: Array<AccountType>;

  /**
   * The formats which the search results can be exported.
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * The groups the authenticated user can use to filter.
   */
  groups?: Array<Group>;
}
