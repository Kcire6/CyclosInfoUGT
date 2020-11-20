/* tslint:disable */
import { AddressConfigurationForUserProfile } from './address-configuration-for-user-profile';
import { AgreementWithContent } from './agreement-with-content';
import { BasicUserDataForNew } from './basic-user-data-for-new';
import { CaptchaProviderEnum } from './captcha-provider-enum';
import { ContactInfoConfigurationForUserProfile } from './contact-info-configuration-for-user-profile';
import { EntityReference } from './entity-reference';
import { GroupForRegistration } from './group-for-registration';
import { IdentityProvider } from './identity-provider';
import { Image } from './image';
import { ImageConfigurationForUserProfile } from './image-configuration-for-user-profile';
import { User } from './user';
import { UserNew } from './user-new';

/**
 * Contains data used to register a user
 */
export interface UserDataForNew extends BasicUserDataForNew {
  addressConfiguration?: AddressConfigurationForUserProfile;

  /**
   * The agreements that needs to be accepted by the user to be able to register. Only returned for public registrations.
   */
  agreements?: Array<AgreementWithContent>;

  /**
   * When the user registration is requested with a broker, contains the broker details.
   */
  broker?: User;

  /**
   * The captcha provider used to requested a captcha for registration, or null if no captcha is needed.
   */
  captchaType?: CaptchaProviderEnum;
  contactInfoConfiguration?: ContactInfoConfigurationForUserProfile;

  /**
   * Details of the registration group.
   */
  group?: GroupForRegistration;

  /**
   * The identity providers available for registering in this group. Only returned for public registrations.
   */
  identityProviders?: Array<IdentityProvider>;
  imageConfiguration?: ImageConfigurationForUserProfile;

  /**
   * The images which are already assigned to the new user.
   */
  images?: Array<Image>;

  /**
   * The label used for the name of users
   */
  nameLabel?: string;

  /**
   * The NFC token types the authenticated user can parsonalize tags for the user being registered
   */
  nfcTokenTypes?: Array<EntityReference>;

  /**
   * If enabled in the server, are the possible security questions the user can use to set the answer.
   */
  securityQuestions?: Array<EntityReference>;

  /**
   * The object that can be altered and posted back to register the user
   */
  user?: UserNew;
}
