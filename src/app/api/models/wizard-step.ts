/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';
import { WizardStepKind } from './wizard-step-kind';

/**
 * A custom wizard step
 */
export interface WizardStep extends InternalNamedEntity {
  kind?: WizardStepKind;
}
