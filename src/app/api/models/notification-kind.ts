/* tslint:disable */

/**
 * Indicates a kind of notification
 * Possible values are:
 * - `accountAllNonSmsPerformedPayments`: A payment was performed
 * - `accountAuthorizedPaymentCanceled`: The authorization process of a payment was canceled
 * - `accountAuthorizedPaymentDenied`: A payment pending authorization was denied
 * - `accountAuthorizedPaymentExpired`: The authorization process of a payment has expired
 * - `accountAuthorizedPaymentSucceeded`: A payment pending authorization was processed
 * - `accountBoughtVouchersAboutToExpire`: One or more bought vouchers are about to expire
 * - `accountBoughtVouchersExpirationDateChanged`: The expiration date of a bought voucher was changed
 * - `accountBoughtVouchersExpired`: One or more bought vouchers have expired
 * - `accountExternalPaymentExpired`: A performed external payment has expired
 * - `accountExternalPaymentPerformedFailed`: A performed external payment has failed
 * - `accountExternalPaymentReceivedFailed`: A received external payment has failed
 * - `accountIncomingRecurringPaymentCanceled`: An incoming recurring payment was canceled
 * - `accountIncomingRecurringPaymentFailed`: An incoming recurring payment processing has failed
 * - `accountIncomingRecurringPaymentReceived`: A recurring payment was received
 * - `accountIncomingScheduledPaymentCanceled`: An incoming scheduled payment processing has canceled
 * - `accountIncomingScheduledPaymentFailed`: An incoming scheduled payment processing has failed
 * - `accountIncomingScheduledPaymentReceived`: A scheduled payment was received
 * - `accountLimitChange`: The account balance limit was changed by the administration
 * - `accountOperatorAuthorizedPaymentApprovedStillPending`: A payment performed by an operator was approved, but still needs administration authorization
 * - `accountOperatorAuthorizedPaymentCanceled`: A payment performed by an operator had the authorization process canceled
 * - `accountOperatorAuthorizedPaymentDenied`: A payment performed by an operator was denied
 * - `accountOperatorAuthorizedPaymentExpired`: A payment performed by an operator had the authorization process expired
 * - `accountOperatorAuthorizedPaymentSucceeded`: A payment performed by an operator was processed
 * - `accountOperatorPaymentAwaitingAuthorization`: A payment performed by an operator needs my authorization
 * - `accountPaymentAwaitingAuthorization`: A payment is awaiting my authorization
 * - `accountPaymentReceived`: A payment was received
 * - `accountPaymentRequestCanceled`: A sent payment request was canceled
 * - `accountPaymentRequestDenied`: A sent payment request was denied
 * - `accountPaymentRequestExpirationDateChanged`: An incoming payment request had its expiration date changed
 * - `accountPaymentRequestExpired`: A sent payment request has expired
 * - `accountPaymentRequestProcessed`: A sent payment request was processed
 * - `accountPaymentRequestReceived`: A payment was requested
 * - `accountRecurringPaymentFailed`: The processing of a recurring payment has failed
 * - `accountRecurringPaymentOccurrenceProcessed`: A recurring payment processing was processed
 * - `accountScheduledPaymentFailed`: The processing of a scheduled payment has failed
 * - `accountScheduledPaymentInstallmentProcessed`: A scheduled payment was processed
 * - `accountScheduledPaymentRequestFailed`: A scheduled payment request has failed and was reopened
 * - `accountSentPaymentRequestExpirationDateChanged`: A sent payment request had its expiration date changed
 * - `accountSmsPerformedPayment`: A payment was performed by SMS
 * - `accountTicketWebhookFailed`: The webhook processing for a ticket has failed
 * - `adminAdPendingAuthorization`: A new advertisement was created, and it is pending administrator authorization
 * - `adminApplicationError`: A new application error was generated
 * - `adminExternalPaymentExpired`: An external payment has expired without the destination user being registered
 * - `adminExternalPaymentPerformedFailed`: An external payment has failed processing
 * - `adminGeneratedVouchersAboutToExpire`: One or more generated vouchers are about to expire
 * - `adminGeneratedVouchersExpired`: One or more generated vouchers have expired
 * - `adminNetworkCreated`: A new network has been created
 * - `adminPaymentAwaitingAuthorization`: A payment is awaiting the administrator authorization
 * - `adminPaymentPerformed`: A payment was performed
 * - `adminSystemAlert`: A new system alert was generated
 * - `adminUserAlert`: A new user alert was generated
 * - `adminUserImportRegistration`: An import of users has finished processing
 * - `adminUserRegistration`: A new user has been registered
 * - `adminVoucherBuyingAboutToExpire`: Buying in a voucher type is about to expire
 * - `brokeringAdPendingAuthorization`: A new advertisement from an assigned member needs authorization
 * - `brokeringMemberAssigned`: A new member was unassigned from me as broker
 * - `brokeringMemberUnassigned`: A new member was assigned to me as broker
 * - `buyerAdInterestNotification`: A new advertisement was published, matching one of my advertisement interests
 * - `buyerAdQuestionAnswered`: An advertisement question I've asked was answered
 * - `buyerOrderCanceled`: A web-shop order was canceled
 * - `buyerOrderPaymentCanceled`: The payment for a web-shop purchase had the authorization process canceled
 * - `buyerOrderPaymentDenied`: The payment for a web-shop purchase was denied authorization
 * - `buyerOrderPaymentExpired`: The payment for a web-shop purchase was expired without being authorized
 * - `buyerOrderPending`: A web-shop order is pending my approval
 * - `buyerOrderPendingAuthorization`: A web-shop order is pending authorization
 * - `buyerOrderPendingDeliveryData`: A web-shop order needs me to fill its delivery information
 * - `buyerOrderProcessedBySeller`: A web-shop order was processed by the seller
 * - `buyerOrderRejectedBySeller`: A web-shop order was rejected by the seller
 * - `buyerSalePending`: A web-shop order is pending seller's approval
 * - `buyerSaleRejectedBySeller`: A web-shop sale order was rejected by the seller
 * - `feedbackChanged`: A feedback for a sale was changed
 * - `feedbackCreated`: A feedback for a sale was created
 * - `feedbackExpirationReminder`: Reminder to supply feedback for a purchase
 * - `feedbackOptional`: I can optionally supply feedback for a purchase
 * - `feedbackReplyCreated`: A feedback for a purchase was replied
 * - `feedbackRequired`: I have to supply feedback for a purchase
 * - `personalBrokerAssigned`: A broker was assigned to the user
 * - `personalBrokerUnassigned`: A broker was unassigned from the user
 * - `personalMaxSmsPerMonthReached`: The user has reached the maximum number of monthly SMS messages
 * - `personalNewToken`: A new token (card) was assigned
 * - `personalNewTokenPendingActivation`: a new token (card) is pending activation
 * - `personalPasswordStatusChanged`: The status of a password has changed
 * - `personalTokenStatusChanged`: The status of a token has changed
 * - `personalUserStatusChanged`: The user status has changed
 * - `referenceChanged`: A personal reference was changed
 * - `referenceCreated`: A new personal reference was created
 * - `sellerAdAuthorized`: An advertisement was authorized by the administration
 * - `sellerAdExpired`: An advertisement publication period has expired
 * - `sellerAdLowStock`: A web-shop advertisement's stock quantity is low
 * - `sellerAdOutOfStock`: A given web-shop advertisement is out of stock
 * - `sellerAdQuestionCreated`: A question to an advertisement was created
 * - `sellerAdRejected`: An advertisement was rejected by the administration
 * - `sellerOrderCanceled`: A web-shop order was canceled
 * - `sellerOrderCreated`: A web-shop order was created
 * - `sellerOrderPaymentCanceled`: The payment for a web-shop order had the authorization process canceled
 * - `sellerOrderPaymentDenied`: The payment for a web-shop order was denied authorization
 * - `sellerOrderPaymentExpired`: The payment for a web-shop order was expired without being authorized
 * - `sellerOrderPendingAuthorization`: A web-shop order is pending authorization
 * - `sellerOrderPendingDeliveryData`: A web-shop order is pending delivery information
 * - `sellerOrderProcessedByBuyer`: A web-shop order was fulfilled by the buyer
 * - `sellerOrderRejectedByBuyer`: A web-shop order was rejected by the buyer
 * - `sellerSaleProcessedByBuyer`: A web-shop sale order was fulfilled by the buyer
 */
export enum NotificationKind {
  ACCOUNT_ALL_NON_SMS_PERFORMED_PAYMENTS = 'accountAllNonSmsPerformedPayments',
  ACCOUNT_AUTHORIZED_PAYMENT_CANCELED = 'accountAuthorizedPaymentCanceled',
  ACCOUNT_AUTHORIZED_PAYMENT_DENIED = 'accountAuthorizedPaymentDenied',
  ACCOUNT_AUTHORIZED_PAYMENT_EXPIRED = 'accountAuthorizedPaymentExpired',
  ACCOUNT_AUTHORIZED_PAYMENT_SUCCEEDED = 'accountAuthorizedPaymentSucceeded',
  ACCOUNT_BOUGHT_VOUCHERS_ABOUT_TO_EXPIRE = 'accountBoughtVouchersAboutToExpire',
  ACCOUNT_BOUGHT_VOUCHERS_EXPIRATION_DATE_CHANGED = 'accountBoughtVouchersExpirationDateChanged',
  ACCOUNT_BOUGHT_VOUCHERS_EXPIRED = 'accountBoughtVouchersExpired',
  ACCOUNT_EXTERNAL_PAYMENT_EXPIRED = 'accountExternalPaymentExpired',
  ACCOUNT_EXTERNAL_PAYMENT_PERFORMED_FAILED = 'accountExternalPaymentPerformedFailed',
  ACCOUNT_EXTERNAL_PAYMENT_RECEIVED_FAILED = 'accountExternalPaymentReceivedFailed',
  ACCOUNT_INCOMING_RECURRING_PAYMENT_CANCELED = 'accountIncomingRecurringPaymentCanceled',
  ACCOUNT_INCOMING_RECURRING_PAYMENT_FAILED = 'accountIncomingRecurringPaymentFailed',
  ACCOUNT_INCOMING_RECURRING_PAYMENT_RECEIVED = 'accountIncomingRecurringPaymentReceived',
  ACCOUNT_INCOMING_SCHEDULED_PAYMENT_CANCELED = 'accountIncomingScheduledPaymentCanceled',
  ACCOUNT_INCOMING_SCHEDULED_PAYMENT_FAILED = 'accountIncomingScheduledPaymentFailed',
  ACCOUNT_INCOMING_SCHEDULED_PAYMENT_RECEIVED = 'accountIncomingScheduledPaymentReceived',
  ACCOUNT_LIMIT_CHANGE = 'accountLimitChange',
  ACCOUNT_OPERATOR_AUTHORIZED_PAYMENT_APPROVED_STILL_PENDING = 'accountOperatorAuthorizedPaymentApprovedStillPending',
  ACCOUNT_OPERATOR_AUTHORIZED_PAYMENT_CANCELED = 'accountOperatorAuthorizedPaymentCanceled',
  ACCOUNT_OPERATOR_AUTHORIZED_PAYMENT_DENIED = 'accountOperatorAuthorizedPaymentDenied',
  ACCOUNT_OPERATOR_AUTHORIZED_PAYMENT_EXPIRED = 'accountOperatorAuthorizedPaymentExpired',
  ACCOUNT_OPERATOR_AUTHORIZED_PAYMENT_SUCCEEDED = 'accountOperatorAuthorizedPaymentSucceeded',
  ACCOUNT_OPERATOR_PAYMENT_AWAITING_AUTHORIZATION = 'accountOperatorPaymentAwaitingAuthorization',
  ACCOUNT_PAYMENT_AWAITING_AUTHORIZATION = 'accountPaymentAwaitingAuthorization',
  ACCOUNT_PAYMENT_RECEIVED = 'accountPaymentReceived',
  ACCOUNT_PAYMENT_REQUEST_CANCELED = 'accountPaymentRequestCanceled',
  ACCOUNT_PAYMENT_REQUEST_DENIED = 'accountPaymentRequestDenied',
  ACCOUNT_PAYMENT_REQUEST_EXPIRATION_DATE_CHANGED = 'accountPaymentRequestExpirationDateChanged',
  ACCOUNT_PAYMENT_REQUEST_EXPIRED = 'accountPaymentRequestExpired',
  ACCOUNT_PAYMENT_REQUEST_PROCESSED = 'accountPaymentRequestProcessed',
  ACCOUNT_PAYMENT_REQUEST_RECEIVED = 'accountPaymentRequestReceived',
  ACCOUNT_RECURRING_PAYMENT_FAILED = 'accountRecurringPaymentFailed',
  ACCOUNT_RECURRING_PAYMENT_OCCURRENCE_PROCESSED = 'accountRecurringPaymentOccurrenceProcessed',
  ACCOUNT_SCHEDULED_PAYMENT_FAILED = 'accountScheduledPaymentFailed',
  ACCOUNT_SCHEDULED_PAYMENT_INSTALLMENT_PROCESSED = 'accountScheduledPaymentInstallmentProcessed',
  ACCOUNT_SCHEDULED_PAYMENT_REQUEST_FAILED = 'accountScheduledPaymentRequestFailed',
  ACCOUNT_SENT_PAYMENT_REQUEST_EXPIRATION_DATE_CHANGED = 'accountSentPaymentRequestExpirationDateChanged',
  ACCOUNT_SMS_PERFORMED_PAYMENT = 'accountSmsPerformedPayment',
  ACCOUNT_TICKET_WEBHOOK_FAILED = 'accountTicketWebhookFailed',
  ADMIN_AD_PENDING_AUTHORIZATION = 'adminAdPendingAuthorization',
  ADMIN_APPLICATION_ERROR = 'adminApplicationError',
  ADMIN_EXTERNAL_PAYMENT_EXPIRED = 'adminExternalPaymentExpired',
  ADMIN_EXTERNAL_PAYMENT_PERFORMED_FAILED = 'adminExternalPaymentPerformedFailed',
  ADMIN_GENERATED_VOUCHERS_ABOUT_TO_EXPIRE = 'adminGeneratedVouchersAboutToExpire',
  ADMIN_GENERATED_VOUCHERS_EXPIRED = 'adminGeneratedVouchersExpired',
  ADMIN_NETWORK_CREATED = 'adminNetworkCreated',
  ADMIN_PAYMENT_AWAITING_AUTHORIZATION = 'adminPaymentAwaitingAuthorization',
  ADMIN_PAYMENT_PERFORMED = 'adminPaymentPerformed',
  ADMIN_SYSTEM_ALERT = 'adminSystemAlert',
  ADMIN_USER_ALERT = 'adminUserAlert',
  ADMIN_USER_IMPORT_REGISTRATION = 'adminUserImportRegistration',
  ADMIN_USER_REGISTRATION = 'adminUserRegistration',
  ADMIN_VOUCHER_BUYING_ABOUT_TO_EXPIRE = 'adminVoucherBuyingAboutToExpire',
  BROKERING_AD_PENDING_AUTHORIZATION = 'brokeringAdPendingAuthorization',
  BROKERING_MEMBER_ASSIGNED = 'brokeringMemberAssigned',
  BROKERING_MEMBER_UNASSIGNED = 'brokeringMemberUnassigned',
  BUYER_AD_INTEREST_NOTIFICATION = 'buyerAdInterestNotification',
  BUYER_AD_QUESTION_ANSWERED = 'buyerAdQuestionAnswered',
  BUYER_ORDER_CANCELED = 'buyerOrderCanceled',
  BUYER_ORDER_PAYMENT_CANCELED = 'buyerOrderPaymentCanceled',
  BUYER_ORDER_PAYMENT_DENIED = 'buyerOrderPaymentDenied',
  BUYER_ORDER_PAYMENT_EXPIRED = 'buyerOrderPaymentExpired',
  BUYER_ORDER_PENDING = 'buyerOrderPending',
  BUYER_ORDER_PENDING_AUTHORIZATION = 'buyerOrderPendingAuthorization',
  BUYER_ORDER_PENDING_DELIVERY_DATA = 'buyerOrderPendingDeliveryData',
  BUYER_ORDER_PROCESSED_BY_SELLER = 'buyerOrderProcessedBySeller',
  BUYER_ORDER_REJECTED_BY_SELLER = 'buyerOrderRejectedBySeller',
  BUYER_SALE_PENDING = 'buyerSalePending',
  BUYER_SALE_REJECTED_BY_SELLER = 'buyerSaleRejectedBySeller',
  FEEDBACK_CHANGED = 'feedbackChanged',
  FEEDBACK_CREATED = 'feedbackCreated',
  FEEDBACK_EXPIRATION_REMINDER = 'feedbackExpirationReminder',
  FEEDBACK_OPTIONAL = 'feedbackOptional',
  FEEDBACK_REPLY_CREATED = 'feedbackReplyCreated',
  FEEDBACK_REQUIRED = 'feedbackRequired',
  PERSONAL_BROKER_ASSIGNED = 'personalBrokerAssigned',
  PERSONAL_BROKER_UNASSIGNED = 'personalBrokerUnassigned',
  PERSONAL_MAX_SMS_PER_MONTH_REACHED = 'personalMaxSmsPerMonthReached',
  PERSONAL_NEW_TOKEN = 'personalNewToken',
  PERSONAL_NEW_TOKEN_PENDING_ACTIVATION = 'personalNewTokenPendingActivation',
  PERSONAL_PASSWORD_STATUS_CHANGED = 'personalPasswordStatusChanged',
  PERSONAL_TOKEN_STATUS_CHANGED = 'personalTokenStatusChanged',
  PERSONAL_USER_STATUS_CHANGED = 'personalUserStatusChanged',
  REFERENCE_CHANGED = 'referenceChanged',
  REFERENCE_CREATED = 'referenceCreated',
  SELLER_AD_AUTHORIZED = 'sellerAdAuthorized',
  SELLER_AD_EXPIRED = 'sellerAdExpired',
  SELLER_AD_LOW_STOCK = 'sellerAdLowStock',
  SELLER_AD_OUT_OF_STOCK = 'sellerAdOutOfStock',
  SELLER_AD_QUESTION_CREATED = 'sellerAdQuestionCreated',
  SELLER_AD_REJECTED = 'sellerAdRejected',
  SELLER_ORDER_CANCELED = 'sellerOrderCanceled',
  SELLER_ORDER_CREATED = 'sellerOrderCreated',
  SELLER_ORDER_PAYMENT_CANCELED = 'sellerOrderPaymentCanceled',
  SELLER_ORDER_PAYMENT_DENIED = 'sellerOrderPaymentDenied',
  SELLER_ORDER_PAYMENT_EXPIRED = 'sellerOrderPaymentExpired',
  SELLER_ORDER_PENDING_AUTHORIZATION = 'sellerOrderPendingAuthorization',
  SELLER_ORDER_PENDING_DELIVERY_DATA = 'sellerOrderPendingDeliveryData',
  SELLER_ORDER_PROCESSED_BY_BUYER = 'sellerOrderProcessedByBuyer',
  SELLER_ORDER_REJECTED_BY_BUYER = 'sellerOrderRejectedByBuyer',
  SELLER_SALE_PROCESSED_BY_BUYER = 'sellerSaleProcessedByBuyer'
}
