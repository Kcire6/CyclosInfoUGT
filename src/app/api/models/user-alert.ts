/* tslint:disable */
import { Alert } from './alert';
import { User } from './user';
import { UserAlertTypeEnum } from './user-alert-type-enum';

/**
 * An alert for a specific user
 */
export interface UserAlert extends Alert {
  type?: UserAlertTypeEnum;
  user?: User;
}
