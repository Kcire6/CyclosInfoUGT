/* tslint:disable */
import { BaseInstallmentDataForSearch } from './base-installment-data-for-search';
import { InstallmentOverviewQueryFilters } from './installment-overview-query-filters';
import { PreselectedPeriod } from './preselected-period';

/**
 * Contains data used to search installments regardless of an owner
 */
export interface InstallmentOverviewDataForSearch extends BaseInstallmentDataForSearch {

  /**
   * Contains the pre-selected period filter ranges according to the Cyclos configuration
   */
  preselectedPeriods?: Array<PreselectedPeriod>;

  /**
   * Default query filters for the general installments search
   */
  query?: InstallmentOverviewQueryFilters;
}
