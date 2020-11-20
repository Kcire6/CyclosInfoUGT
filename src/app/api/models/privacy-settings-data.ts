/* tslint:disable */
import { CustomField } from './custom-field';
import { PrivacyControl } from './privacy-control';
import { User } from './user';

/**
 * The privacy settings of a user with the information to edit it
 */
export interface PrivacySettingsData {

  /**
   * The available privacy controls (departments) that could be selected to put the fields under control.
   */
  availableControls?: Array<PrivacyControl>;

  /**
   * Can the authenticated user edit this privacy setting data?
   */
  canEdit?: boolean;

  /**
   * The profile fields defined in the configuration subject to privacy control.
   */
  controlledFields?: Array<string>;

  /**
   * Detailed information for those custom fields included in the `controlledFields` list.
   */
  customFields?: Array<CustomField>;

  /**
   * Whether the privacy control is enabled or not for the owner
   */
  enabled?: boolean;

  /**
   * The internal name or id of the already selected controls.
   */
  selectedControls?: Array<string>;

  /**
   * The privacy settings owner
   */
  user?: User;
}
