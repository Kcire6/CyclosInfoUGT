/* tslint:disable */
import { CustomFieldBinaryValues } from './custom-field-binary-values';
import { NotificationLevelEnum } from './notification-level-enum';
import { User } from './user';
import { UserRegistrationResult } from './user-registration-result';
import { Wizard } from './wizard';
import { WizardActionEnum } from './wizard-action-enum';
import { WizardResultTypeEnum } from './wizard-result-type-enum';
import { WizardStep } from './wizard-step';
import { WizardStepDetailed } from './wizard-step-detailed';
import { WizardStepTransition } from './wizard-step-transition';
import { WizardTransitionParams } from './wizard-transition-params';

/**
 * Information for executing a custom wizard in a given step
 */
export interface WizardExecutionData {
  action?: WizardActionEnum;

  /**
   * Holds the current values for file / image custom fields as lists of `StoredFile`s / `Image`s.
   */
  binaryValues?: CustomFieldBinaryValues;

  /**
   * The execution identifier
   */
  key?: string;

  /**
   * A notification that was sent to this step. Only sent if `notificationLevel` is present.
   */
  notification?: string;

  /**
   * Indicates that a notification should be displayed in this step.
   */
  notificationLevel?: NotificationLevelEnum;

  /**
   * Contains each of the parameters filled-in so far. Only returned when the wizard isn't finished yet (`resultType` is null).
   */
  params?: WizardTransitionParams;

  /**
   * Contains each previously executed step. The current step is not included.
   */
  path?: Array<WizardStep>;

  /**
   * Only returned when the wizard is finished. Contains the execution result when `resultType` is `registration`
   */
  registrationResult?: UserRegistrationResult;

  /**
   * Only returned when the wizard is finished. Contains the execution result when `resultType` is either `plainText` or `richText`.
   */
  result?: string;

  /**
   * Only returned when the wizard is finished. Contains the title that should be displayed together with the `result`. Only returned for menu wizards (not on registration wizards).
   */
  resultTitle?: string;

  /**
   * Only returned when the wizard is finished. Indicates how clients should interpret the result.
   */
  resultType?: WizardResultTypeEnum;

  /**
   * Contains detailed information of the current step, including which fields should be displayed.
   */
  step?: WizardStepDetailed;

  /**
   * When the wizard contains a static set of steps, returns the total number of steps in this wizard. When displaying to users, the displaying of the wizard results should also be counted as a step. For the user it will probably be displayed as the final step, but in Cyclos, there's no such step - only the result is returned.
   */
  stepCount?: number;

  /**
   * When the wizard contains a static set of steps, returns the number (1-based) of the current step.
   */
  stepNumber?: number;

  /**
   * The possible transitions between the current step and other steps
   */
  transitions?: Array<WizardStepTransition>;

  /**
   * The user over which the wizard is being executed.
   */
  user?: User;

  /**
   * The wizard being executed.
   */
  wizard?: Wizard;
}
