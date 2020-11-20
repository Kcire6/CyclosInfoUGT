/* tslint:disable */
import { ContactBasicData } from './contact-basic-data';
import { ContactNew } from './contact-new';

/**
 * Contains data for creating a new contact
 */
export interface ContactDataForNew extends ContactBasicData {

  /**
   * The contact populated with the default fields. This value can be modified and sent back to `POST /{owner}/contacts/{contactUser}`.
   */
  contact?: ContactNew;
}
