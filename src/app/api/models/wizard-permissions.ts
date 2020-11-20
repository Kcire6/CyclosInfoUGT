/* tslint:disable */
import { Wizard } from './wizard';

/**
 * Permissions over a specific custom wizard
 */
export interface WizardPermissions {

  /**
   * Can run this wizard?
   */
  run?: boolean;
  wizard?: Wizard;
}
