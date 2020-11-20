/* tslint:disable */
import { ContactInfoDetailed } from './contact-info-detailed';
import { User } from './user';

/**
 * Contains details of an additional contact information
 */
export interface ContactInfoView extends ContactInfoDetailed {

  /**
   * Indicates whether the logged user can remove / edit this additional contact information
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the logged user can remove / edit this additional contact information
   *
   * @deprecated
   */
  editable?: boolean;

  /**
   * Indicates whether this additional contact information should be hidden for other users
   */
  hidden?: boolean;

  /**
   * The user which owns this additional contact information
   */
  user?: User;
}
