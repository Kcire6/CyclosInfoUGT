/* tslint:disable */
import { EntityReference } from './entity-reference';

/**
 * Data for setting the security answer.
 */
export interface DataForSetSecurityAnswer {

  /**
   * The possible security questions.
   */
  securityQuestions?: Array<EntityReference>;
}
