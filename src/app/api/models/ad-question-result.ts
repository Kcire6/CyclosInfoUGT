/* tslint:disable */
import { AdQuestion } from './ad-question';
import { AdWithUser } from './ad-with-user';

/**
 * Data returned from question search
 */
export interface AdQuestionResult extends AdQuestion {

  /**
   * The advertisement of the question.
   */
  advertisement?: AdWithUser;
}
