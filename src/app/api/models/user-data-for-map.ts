/* tslint:disable */
import { GeographicalCoordinate } from './geographical-coordinate';
import { UserDataForSearch } from './user-data-for-search';

/**
 * Contains configuration data for the user directory (map)
 */
export interface UserDataForMap extends UserDataForSearch {

  /**
   * The default location for the map to be displayed
   */
  defaultMapLocation?: GeographicalCoordinate;

  /**
   * The default map zoom level for mobile applications
   */
  defaultMapZoomMobile?: number;

  /**
   * The default map zoom level for web applications
   */
  defaultMapZoomWeb?: number;

  /**
   * Internal name of the custom field currently set as primary search filter for the user directory (map) search. When not returned (null) it is assumed that keywords should be the primary filter.
   */
  mapDirectoryField?: string;
}
