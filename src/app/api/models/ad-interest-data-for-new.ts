/* tslint:disable */
import { AdInterestBasicData } from './ad-interest-basic-data';
import { AdInterestNew } from './ad-interest-new';

/**
 * Contains data for creating a new advertisement interest
 */
export interface AdInterestDataForNew extends AdInterestBasicData {

  /**
   * The advertisement interest populated with the default fields. This value can be modified and sent back on `POST /{user}/marketplace-interest`.
   */
  adInterest?: AdInterestNew;
}
