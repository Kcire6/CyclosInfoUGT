/* tslint:disable */
import { BaseInstallmentDataForSearch } from './base-installment-data-for-search';
import { InstallmentQueryFilters } from './installment-query-filters';
import { User } from './user';

/**
 * Contains data used to search installments for a given owner
 */
export interface InstallmentDataForSearch extends BaseInstallmentDataForSearch {

  /**
   * Default query filters for the installments search
   */
  query?: InstallmentQueryFilters;

  /**
   * When the given owner is a user, is the reference to it
   */
  user?: User;
}
