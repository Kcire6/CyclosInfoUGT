/* tslint:disable */
import { WizardPermissions } from './wizard-permissions';

/**
 * Permissions over custom wizards
 */
export interface WizardsPermissions {

  /**
   * Permissions over custom wizards the user can run over self.
   */
  my?: Array<WizardPermissions>;

  /**
   * Permissions over system custom wizards.
   */
  system?: Array<WizardPermissions>;
}
