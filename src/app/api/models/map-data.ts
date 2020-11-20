/* tslint:disable */
import { DistanceUnitEnum } from './distance-unit-enum';
import { GeographicalCoordinate } from './geographical-coordinate';

/**
 * Contains data relative to maps displayed in the application
 */
export interface MapData {

  /**
   * The default location, if any, for map displays
   */
  defaultLocation?: GeographicalCoordinate;

  /**
   * The default zoom level for larger views
   */
  defaultZoom?: number;

  /**
   * The default zoom level for mobile views
   */
  defaultZoomMobile?: number;
  distanceUnit?: DistanceUnitEnum;

  /**
   * The Google Maps API key to be used by clients
   */
  googleMapsApiKey?: string;
}
