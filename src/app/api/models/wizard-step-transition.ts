/* tslint:disable */
import { WizardStep } from './wizard-step';

/**
 * A possible transition between the current and a next step
 */
export interface WizardStepTransition {

  /**
   * The transition id
   */
  id?: string;

  /**
   * The transition label
   */
  label?: string;

  /**
   * The step to which this transition leads
   */
  step?: WizardStep;
}
