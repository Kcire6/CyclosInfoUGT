/* tslint:disable */
import { AccountWithCurrency } from './account-with-currency';
import { AgreementsPermissions } from './agreements-permissions';
import { Operation } from './operation';
import { OwnerRecordPermissions } from './owner-record-permissions';
import { TokenPermissions } from './token-permissions';
import { TokenType } from './token-type';
import { UserAuthorizedPaymentsPermissions } from './user-authorized-payments-permissions';
import { UserBalanceLimitsPermissions } from './user-balance-limits-permissions';
import { UserBrokeringPermissions } from './user-brokering-permissions';
import { UserContactPermissions } from './user-contact-permissions';
import { UserDocumentsPermissions } from './user-documents-permissions';
import { UserExternalPaymentsPermissions } from './user-external-payments-permissions';
import { UserGroupPermissions } from './user-group-permissions';
import { UserIdentityProvidersPermissions } from './user-identity-providers-permissions';
import { UserMarketplacePermissions } from './user-marketplace-permissions';
import { UserNotificationSettingsPermissions } from './user-notification-settings-permissions';
import { UserOperatorsPermissions } from './user-operators-permissions';
import { UserPasswordsPermissions } from './user-passwords-permissions';
import { UserPaymentLimitsPermissions } from './user-payment-limits-permissions';
import { UserPaymentPermissions } from './user-payment-permissions';
import { UserPaymentRequestsPermissions } from './user-payment-requests-permissions';
import { UserPrivacySettingsPermissions } from './user-privacy-settings-permissions';
import { UserProductsPermissions } from './user-products-permissions';
import { UserProfilePermissions } from './user-profile-permissions';
import { UserReferencesPermissions } from './user-references-permissions';
import { UserScheduledPaymentsPermissions } from './user-scheduled-payments-permissions';
import { UserSessionPermissions } from './user-session-permissions';
import { UserStatusPermissions } from './user-status-permissions';
import { UserTicketsPermissions } from './user-tickets-permissions';
import { UserValidationPermissions } from './user-validation-permissions';
import { UserVouchersPermissions } from './user-vouchers-permissions';
import { Wizard } from './wizard';

/**
 * Determines permission the authenticated have over a specific user
 */
export interface UserPermissions {

  /**
   * Accounts which can be viewed by the authenticated user
   */
  accounts?: Array<AccountWithCurrency>;
  agreements?: AgreementsPermissions;
  authorizedPayments?: UserAuthorizedPaymentsPermissions;
  balanceLimits?: UserBalanceLimitsPermissions;
  brokering?: UserBrokeringPermissions;
  contact?: UserContactPermissions;
  documents?: UserDocumentsPermissions;
  externalPayments?: UserExternalPaymentsPermissions;
  group?: UserGroupPermissions;
  identityProviders?: UserIdentityProvidersPermissions;
  marketplace?: UserMarketplacePermissions;
  notificationSettings?: UserNotificationSettingsPermissions;

  /**
   * Custom operations the authenticated user can run over the given user
   */
  operations?: Array<Operation>;
  operators?: UserOperatorsPermissions;
  passwords?: UserPasswordsPermissions;
  payment?: UserPaymentPermissions;
  paymentLimits?: UserPaymentLimitsPermissions;
  paymentRequests?: UserPaymentRequestsPermissions;

  /**
   * Filter the `tokens` list with `type.physicalType = 'nfcTag'` and `activate = true`.
   *
   *
   * NFC tokens the authenticated user can personalize for the given user
   *
   * @deprecated
   */
  personalizeNfcTokens?: Array<TokenType>;
  privacySettings?: UserPrivacySettingsPermissions;
  products?: UserProductsPermissions;
  profile?: UserProfilePermissions;

  /**
   * Records types the authenticated user can view over the given user
   */
  records?: Array<OwnerRecordPermissions>;

  /**
   * As of Cyclos 4.13, the recurring payments permissions are the same as scheduled payments. Use `scheduledPayments` instead.
   *
   * @deprecated
   */
  recurringPayments?: UserScheduledPaymentsPermissions;
  references?: UserReferencesPermissions;
  scheduledPayments?: UserScheduledPaymentsPermissions;
  session?: UserSessionPermissions;
  status?: UserStatusPermissions;
  tickets?: UserTicketsPermissions;

  /**
   * Permissions over tokens of each visible type.
   */
  tokens?: Array<TokenPermissions>;
  validation?: UserValidationPermissions;
  vouchers?: UserVouchersPermissions;

  /**
   * Custom wizards the authenticated user can run over the given user
   */
  wizards?: Array<Wizard>;
}
