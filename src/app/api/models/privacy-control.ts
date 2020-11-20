/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * A privacy control definition
 */
export interface PrivacyControl extends InternalNamedEntity {

  /**
   * If true an admin having this control will see all fields
   */
  fieldsAlwaysVisible?: boolean;

  /**
   * A message about this control to be displayed to the user.
   */
  informationText?: string;
}
