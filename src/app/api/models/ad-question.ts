/* tslint:disable */
import { Entity } from './entity';
import { User } from './user';

/**
 * A question asked for an advertisement.
 */
export interface AdQuestion extends Entity {

  /**
   * The answer for the question (if any).
   */
  answer?: string;

  /**
   * The answer date and time (if any).
   */
  answerDate?: string;

  /**
   * The question text.
   */
  question?: string;

  /**
   * The question date and time.
   */
  questionDate?: string;

  /**
   * The user which asked the question
   */
  user?: User;
}
