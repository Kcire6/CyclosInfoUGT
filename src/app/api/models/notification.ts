/* tslint:disable */
import { Entity } from './entity';
import { NotificationEntityTypeEnum } from './notification-entity-type-enum';
import { NotificationTypeEnum } from './notification-type-enum';
import { User } from './user';

/**
 * A received notification
 */
export interface Notification extends Entity {

  /**
   * The notification date
   */
  date?: string;

  /**
   * The identifier of the entity referenced by the notification, if any. The `entityType` and `entityId` attributes are both not null or both null in case there is a referenced entity.
   */
  entityId?: string;
  entityType?: NotificationEntityTypeEnum;

  /**
   * The notification message
   */
  message?: string;

  /**
   * Indicates whether the notification was marked as already read or not
   */
  read?: boolean;

  /**
   * a user related to this message
   */
  relatedUser?: User;

  /**
   * The notification subject
   */
  subject?: string;
  type?: NotificationTypeEnum;
}
