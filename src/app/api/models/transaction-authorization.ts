/* tslint:disable */
import { Entity } from './entity';
import { TransactionAuthorizationActionEnum } from './transaction-authorization-action-enum';
import { User } from './user';

/**
 * Contains details of an authorization.
 */
export interface TransactionAuthorization extends Entity {
  action?: TransactionAuthorizationActionEnum;
  by?: User;

  /**
   * The authorizer's comment.
   */
  comments?: string;

  /**
   * When the authorization was made.
   */
  date?: string;

  /**
   * The level number.
   */
  level?: number;
}
