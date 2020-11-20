/* tslint:disable */
import { FullTextQueryFilters } from './full-text-query-filters';

/**
 * Base definitions for full-text search filters which also can search by distance
 */
export interface FullTextWithDistanceQueryFilters extends FullTextQueryFilters {

  /**
   * The reference latitude for distance searches
   */
  latitude?: number;

  /**
   * The reference longitude for distance searches
   */
  longitude?: number;

  /**
   * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both `longitude` and `latitude` parameters are passed with the actual reference position.
   */
  maxDistance?: number;
}
