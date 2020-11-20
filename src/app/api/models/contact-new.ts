/* tslint:disable */
import { ContactManage } from './contact-manage';

/**
 * Parameters for creating a new contact
 */
export interface ContactNew extends ContactManage {

  /**
   * The user which is the contact of a given owner. Can be either the id or another identifier, such as login name or e-mail, depending on the Cyclos configuration.
   */
  contact?: string;
}
