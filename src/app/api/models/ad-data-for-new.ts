/* tslint:disable */
import { AdBasicData } from './ad-basic-data';
import { AdNew } from './ad-new';

/**
 * Contains data for creating a new advertisement
 */
export interface AdDataForNew extends AdBasicData {

  /**
   * The advertisement that is being created
   */
  advertisement?: AdNew;
}
