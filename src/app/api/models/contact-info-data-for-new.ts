/* tslint:disable */
import { ContactInfoBasicData } from './contact-info-basic-data';
import { ContactInfoNew } from './contact-info-new';

/**
 * Contains data for creating a new additional contact information
 */
export interface ContactInfoDataForNew extends ContactInfoBasicData {

  /**
   * The additional contact information populated with the default fields. This value can be modified and sent back on `POST /{user}/contactInfos`.
   */
  contactInfo?: ContactInfoNew;
}
