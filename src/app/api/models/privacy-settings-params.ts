/* tslint:disable */

/**
 * The parameters to save a privacy control
 */
export interface PrivacySettingsParams {

  /**
   * If false the controlled fields in the configuration are not subject to privacy control. Otherwise only the `selectedControls` can view the user fields
   */
  enabled?: boolean;

  /**
   * The internal name or id of the controls that can view the user fields.
   */
  selectedControls?: Array<string>;
}
