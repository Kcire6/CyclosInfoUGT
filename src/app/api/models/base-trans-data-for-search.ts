/* tslint:disable */
import { EntityReference } from './entity-reference';
import { ExportFormat } from './export-format';
import { Group } from './group';
import { PreselectedPeriod } from './preselected-period';
import { TransferFilter } from './transfer-filter';

/**
 * Contains basic information used to search for transfers / transactions
 */
export interface BaseTransDataForSearch {

  /**
   * References for channels which can be used to filter entries by transfers generated on a specific channel. Is only returned if the authenticated user is an administrator.
   */
  channels?: Array<EntityReference>;

  /**
   * The formats which the search results can be exported.
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * Groups that can be used to filter entries, so that only transfers from or to users of those groups are returned on search. Is only returned if the authenticated user is an administrator.
   */
  groups?: Array<Group>;

  /**
   * Contains the pre-selected period filter ranges according to the Cyclos configuration
   */
  preselectedPeriods?: Array<PreselectedPeriod>;

  /**
   * References for transfer filters, which can be used to filter entries by transfer type
   */
  transferFilters?: Array<TransferFilter>;
}
