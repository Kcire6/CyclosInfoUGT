/* tslint:disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthService } from './services/auth.service';
import { SessionsService } from './services/sessions.service';
import { CaptchaService } from './services/captcha.service';
import { IdentityProvidersService } from './services/identity-providers.service';
import { UsersService } from './services/users.service';
import { OperatorsService } from './services/operators.service';
import { OperatorGroupsService } from './services/operator-groups.service';
import { AddressesService } from './services/addresses.service';
import { PhonesService } from './services/phones.service';
import { ContactInfosService } from './services/contact-infos.service';
import { UserStatusService } from './services/user-status.service';
import { GroupMembershipService } from './services/group-membership.service';
import { ProductAssignmentService } from './services/product-assignment.service';
import { BrokeringService } from './services/brokering.service';
import { ImagesService } from './services/images.service';
import { FilesService } from './services/files.service';
import { DocumentsService } from './services/documents.service';
import { ContactsService } from './services/contacts.service';
import { AgreementsService } from './services/agreements.service';
import { PasswordsService } from './services/passwords.service';
import { DeviceConfirmationsService } from './services/device-confirmations.service';
import { AccountsService } from './services/accounts.service';
import { BalanceLimitsService } from './services/balance-limits.service';
import { PaymentLimitsService } from './services/payment-limits.service';
import { TransfersService } from './services/transfers.service';
import { TransactionsService } from './services/transactions.service';
import { InstallmentsService } from './services/installments.service';
import { PaymentsService } from './services/payments.service';
import { ScheduledPaymentsService } from './services/scheduled-payments.service';
import { RecurringPaymentsService } from './services/recurring-payments.service';
import { PaymentRequestsService } from './services/payment-requests.service';
import { PendingPaymentsService } from './services/pending-payments.service';
import { PosService } from './services/pos.service';
import { NotificationsService } from './services/notifications.service';
import { NotificationSettingsService } from './services/notification-settings.service';
import { VouchersService } from './services/vouchers.service';
import { TicketsService } from './services/tickets.service';
import { RecordsService } from './services/records.service';
import { TokensService } from './services/tokens.service';
import { OperationsService } from './services/operations.service';
import { WizardsService } from './services/wizards.service';
import { PushService } from './services/push.service';
import { UiService } from './services/ui.service';
import { ValidationService } from './services/validation.service';
import { AlertsService } from './services/alerts.service';
import { ReferencesService } from './services/references.service';
import { MarketplaceService } from './services/marketplace.service';
import { AdQuestionsService } from './services/ad-questions.service';
import { ShoppingCartsService } from './services/shopping-carts.service';
import { OrdersService } from './services/orders.service';
import { DeliveryMethodsService } from './services/delivery-methods.service';
import { WebshopSettingsService } from './services/webshop-settings.service';
import { AdInterestsService } from './services/ad-interests.service';
import { PrivacySettingsService } from './services/privacy-settings.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    SessionsService,
    CaptchaService,
    IdentityProvidersService,
    UsersService,
    OperatorsService,
    OperatorGroupsService,
    AddressesService,
    PhonesService,
    ContactInfosService,
    UserStatusService,
    GroupMembershipService,
    ProductAssignmentService,
    BrokeringService,
    ImagesService,
    FilesService,
    DocumentsService,
    ContactsService,
    AgreementsService,
    PasswordsService,
    DeviceConfirmationsService,
    AccountsService,
    BalanceLimitsService,
    PaymentLimitsService,
    TransfersService,
    TransactionsService,
    InstallmentsService,
    PaymentsService,
    ScheduledPaymentsService,
    RecurringPaymentsService,
    PaymentRequestsService,
    PendingPaymentsService,
    PosService,
    NotificationsService,
    NotificationSettingsService,
    VouchersService,
    TicketsService,
    RecordsService,
    TokensService,
    OperationsService,
    WizardsService,
    PushService,
    UiService,
    ValidationService,
    AlertsService,
    ReferencesService,
    MarketplaceService,
    AdQuestionsService,
    ShoppingCartsService,
    OrdersService,
    DeliveryMethodsService,
    WebshopSettingsService,
    AdInterestsService,
    PrivacySettingsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
