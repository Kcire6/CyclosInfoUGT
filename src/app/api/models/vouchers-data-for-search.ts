/* tslint:disable */
import { ExportFormat } from './export-format';
import { Group } from './group';
import { VoucherType } from './voucher-type';
import { VouchersQueryFilters } from './vouchers-query-filters';

/**
 * Contains configuration data for searching vouchers as admin
 */
export interface VouchersDataForSearch {

  /**
   * The formats which the search results can be exported.
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * The input mask for voucher tokens. Optional.
   */
  mask?: string;
  query?: VouchersQueryFilters;

  /**
   * The voucher types that can be used for searching
   */
  types?: Array<VoucherType>;

  /**
   * Visible user groups for the authenticated user
   */
  userGroups?: Array<Group>;
}
