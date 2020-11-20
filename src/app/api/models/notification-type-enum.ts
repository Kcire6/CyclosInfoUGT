/* tslint:disable */

/**
 * The different notification types generated for for users / administrators.
 * Possible values are:
 * - `adAuthorized`: A notification generated if a notification created when an advertisement is authorized.
 * - `adExpired`: A notification generated if a notification created when an advertisement expires.
 * - `adInterestNotification`: A notification generated if a notification created by a new advertisement (Simple or Webshop).
 * - `adPendingAuthorization`: A notification generated if an ad is pending by broker authorization.
 * - `adPendingByAdminAuthorization`: An admin notification generated if an advertisement is pending for authorization.
 * - `adQuestionAnswered`: A notification generated if a question answered to some AD (Simple or Webshop).
 * - `adQuestionCreated`: A notification generated if a question created to some AD (Simple or Webshop).
 * - `adRejected`: A notification generated if a notification created when an advertisement authorization is rejected.
 * - `allNonSmsPerformedPayments`: A notification generated if a user performed a new payment through a channel that is not the SMS channel.
 * - `applicationError`: An admin notification generated if an application error has occurred.
 * - `articleOutOfStock`: A notification generated if a webshop product is out of stock.
 * - `authorizedPaymentCanceled`: A notification generated if the authorization of a payment was canceled. This notification is to be sent to the payer.
 * - `authorizedPaymentDenied`: A notification generated if the authorization of a payment was denied. This notification is to be sent to the payer.
 * - `authorizedPaymentExpired`: A notification generated if the authorization of a payment has expired. This notification is to be sent to the payer.
 * - `authorizedPaymentSucceeded`: A notification generated if the authorization of a payment succeeded (the payment went successfully through its final authorization and is now processed). This notification is to be sent to the payer.
 * - `boughtVouchersAboutToExpire`: A notification generated if a one or more bought vouchers are about to expire.
 * - `boughtVouchersExpirationDateChanged`: A notification generated if a bought voucher has new expiration date.
 * - `boughtVouchersExpired`: A notification generated if one or more bought vouchers have expired.
 * - `brokerAssigned`: A notification generated if a broker has been assigned to a user.
 * - `brokerUnassigned`: A notification generated if a broker has been unassigned from a user.
 * - `externalPaymentExpired`: A notification generated if the external payment has reached the expiration date.
 * - `externalPaymentPerformedFailed`: A notification generated if the performed external payment has failed processing.
 * - `externalPaymentReceivedFailed`: A notification generated if the received external payment has failed processing.
 * - `externalUserPaymentExpired`: An admin notification generated if an external payment has expired.
 * - `externalUserPaymentPerformedFailed`: An admin notification generated if an external payment failed processing.
 * - `feedbackChanged`: A notification generated if a transaction feedback was modified.
 * - `feedbackCreated`: A notification generated if a transaction feedback was created.
 * - `feedbackExpirationReminder`: A notification generated if a transaction feedback is about to expire.
 * - `feedbackOptional`: A notification generated if a performed payment can have an optional feedback.
 * - `feedbackReplyCreated`: A notification generated if a transaction feedback was replied.
 * - `feedbackRequired`: A notification generated if a performed payment needs to be given a feedback.
 * - `generatedVouchersAboutToExpire`: An admin notification generated if a voucher will expire in a few days.
 * - `generatedVouchersExpired`: An admin notification generated if a voucher has expired.
 * - `incomingRecurringPaymentCanceled`: A notification generated if a recurring payment to a user has been canceled (only if the recurring payment is shown to receiver).
 * - `incomingRecurringPaymentFailed`: A notification generated if a recurring payment to a user has failed (only if the recurring payment is shown to receiver).
 * - `incomingRecurringPaymentReceived`: A notification generated if a recurring payment to a user was received (only if the recurring payment is shown to receiver).
 * - `incomingScheduledPaymentCanceled`: A notification generated if a scheduled payment to a user has been canceled (only if the scheduled payment is shown to receiver).
 * - `incomingScheduledPaymentFailed`: A notification generated if a scheduled payment to a user has failed (only if the scheduled payment is shown to receiver).
 * - `incomingScheduledPaymentReceived`: A notification generated if a scheduled payment to a user was received (only if the scheduled payment is shown to receiver).
 * - `limitChange`: A notification generated if a limit (lower/upper) has changed on an account.
 * - `lowStockQuantity`: A notification generated if a product with stock quantity under limit.
 * - `maxSmsPerMonthReached`: A notification generated if the maximum number of SMS messages per month has been reached.
 * - `memberAssigned`: A notification generated if an user has been assigned to a broker.
 * - `memberUnassigned`: A notification generated if an user has been unassigned from a broker.
 * - `networkCreated`: An admin notification generated if a network is created.
 * - `newToken`: A notification generated if a token / card has been created.
 * - `newTokenPendingActivation`: A notification generated if a token / card has been created, but needs to be activated before being used.
 * - `operatorAuthorizedPaymentApprovedStillPending`: A notification generated if a payment performed by an operator with authorization type `operator` was approved, but there is at least one authorization level.
 * - `operatorAuthorizedPaymentCanceled`: A notification generated if a payment performed by an operator with authorization type `operator` was canceled.
 * - `operatorAuthorizedPaymentDenied`: A notification generated if a payment performed by an operator with authorization type `operator` was denied.
 * - `operatorAuthorizedPaymentExpired`: A notification generated if a payment performed by an operator with authorization type `operator` has expired.
 * - `operatorAuthorizedPaymentSucceeded`: A notification generated if a payment performed by an operator with authorization type `operator` was approved and there was no further authorization.
 * - `operatorPaymentAwaitingAuthorization`: A notification generated if a payment performed by an operator with authorization type `operator` is pending by authorization.
 * - `orderCanceledBuyer`: A notification generated if a pending order has been canceled.
 * - `orderCanceledSeller`: A notification generated if a pending order has been canceled.
 * - `orderCreated`: A notification generated if a new web shop order created from a shopping cart checkout.
 * - `orderPaymentCanceledBuyer`: A notification generated if an order payment was canceled by authorizer.
 * - `orderPaymentCanceledSeller`: A notification generated if an order payment was canceled by authorizer.
 * - `orderPaymentDeniedBuyer`: A notification generated if an order payment was denied by authorizer.
 * - `orderPaymentDeniedSeller`: A notification generated if an order payment was denied by authorizer.
 * - `orderPaymentExpiredBuyer`: A notification generated if an order payment has automatically expired.
 * - `orderPaymentExpiredSeller`: A notification generated if an order payment has automatically expired.
 * - `orderPendingAuthorizationBuyer`: A notification generated if an order accepted by buyer/seller but the payment is pending for authorization.
 * - `orderPendingAuthorizationSeller`: A notification generated if an order accepted by buyer/seller but the payment is pending for authorization.
 * - `orderPendingBuyer`: A notification generated if an order pending buyer approval.
 * - `orderPendingDeliveryDataBuyer`: A notification generated if an order buyer needs to fill in the delivery data.
 * - `orderPendingDeliveryDataSeller`: A notification generated if an order seller needs to fill in the delivery data.
 * - `orderRealizedBuyer`: A notification generated if an order accepted by buyer (sent to seller).
 * - `orderRealizedSeller`: A notification generated if an order accepted by seller (sent to buyer).
 * - `orderRejectedByBuyer`: A notification generated if an order rejected by buyer.
 * - `orderRejectedBySeller`: A notification generated if an order rejected by seller.
 * - `passwordStatusChanged`: A notification generated if a password status has changed.
 * - `paymentAwaitingAdminAuthorization`: An admin notification generated if a payment is awaiting for authorization.
 * - `paymentAwaitingAuthorization`: A notification generated if a user must authorize a pending payment.
 * - `paymentPerformed`: An admin notification generated if a payment is performed.
 * - `paymentReceived`: A notification generated if a user received a new payment.
 * - `paymentRequestCanceled`: A notification generated if a payment request was canceled.
 * - `paymentRequestDenied`: A notification generated if a payment request was denied.
 * - `paymentRequestExpirationDateChanged`: A notification generated if the payment request's expiration date has changed.
 * - `paymentRequestExpired`: A notification generated if a payment request has expired.
 * - `paymentRequestProcessed`: A notification generated if a payment request was processed.
 * - `paymentRequestReceived`: A notification generated if a payment request was received.
 * - `recurringPaymentFailed`: A notification generated if a recurring payment from a user has failed (probably because of lack of funds).
 * - `recurringPaymentOccurrenceProcessed`: A notification generated if an occurrence of an outgoing recurring payment was processed.
 * - `referenceChanged`: A notification generated if a reference was modified.
 * - `referenceCreated`: A notification generated if a reference has been set.
 * - `salePendingBuyer`: A notification generated if a sale pending buyer approval.
 * - `saleRealizedBuyer`: A notification generated if a sale accepted by buyer (sent to seller).
 * - `saleRejectedSeller`: A notification generated if a sale rejected by seller.
 * - `scheduledPaymentFailed`: A notification generated if a scheduled payment from a user has failed (probably because of lack of funds).
 * - `scheduledPaymentInstallmentProcessed`: A notification generated if a scheduled payment to a user has been processed.
 * - `scheduledPaymentRequestFailed`: A notification generated if a payment request which was scheduled has failed processing (probably because of lack of funds), and is being reopened.
 * - `sentPaymentRequestExpirationDateChanged`: A notification generated if the payment request's expiration date has changed. This notification is to be sent to the sender.
 * - `smsPerformedPayment`: A notification generated if a user performed a new payment through SMS.
 * - `systemAlert`: An admin notification generated if a system alert as occurred.
 * - `ticketWebhookFailed`: A notification generated if the invocation of a webhook after (a successful) ticket approval has failed.
 * - `tokenStatusChanged`: A notification generated if a token / card status has changed.
 * - `userAlert`: An admin notification generated if a member alert as occurred.
 * - `userImport`: An admin notification generated if a user import has been done.
 * - `userRegistration`: An admin notification generated if a new user has been registered.
 * - `userStatusChanged`: A notification generated if a user status has changed.
 * - `voucherBuyingAboutToExpire`: An admin notification generated if a voucher type allowing buy is about to expire.
 */
export enum NotificationTypeEnum {
  AD_AUTHORIZED = 'adAuthorized',
  AD_EXPIRED = 'adExpired',
  AD_INTEREST_NOTIFICATION = 'adInterestNotification',
  AD_PENDING_AUTHORIZATION = 'adPendingAuthorization',
  AD_PENDING_BY_ADMIN_AUTHORIZATION = 'adPendingByAdminAuthorization',
  AD_QUESTION_ANSWERED = 'adQuestionAnswered',
  AD_QUESTION_CREATED = 'adQuestionCreated',
  AD_REJECTED = 'adRejected',
  ALL_NON_SMS_PERFORMED_PAYMENTS = 'allNonSmsPerformedPayments',
  APPLICATION_ERROR = 'applicationError',
  ARTICLE_OUT_OF_STOCK = 'articleOutOfStock',
  AUTHORIZED_PAYMENT_CANCELED = 'authorizedPaymentCanceled',
  AUTHORIZED_PAYMENT_DENIED = 'authorizedPaymentDenied',
  AUTHORIZED_PAYMENT_EXPIRED = 'authorizedPaymentExpired',
  AUTHORIZED_PAYMENT_SUCCEEDED = 'authorizedPaymentSucceeded',
  BOUGHT_VOUCHERS_ABOUT_TO_EXPIRE = 'boughtVouchersAboutToExpire',
  BOUGHT_VOUCHERS_EXPIRATION_DATE_CHANGED = 'boughtVouchersExpirationDateChanged',
  BOUGHT_VOUCHERS_EXPIRED = 'boughtVouchersExpired',
  BROKER_ASSIGNED = 'brokerAssigned',
  BROKER_UNASSIGNED = 'brokerUnassigned',
  EXTERNAL_PAYMENT_EXPIRED = 'externalPaymentExpired',
  EXTERNAL_PAYMENT_PERFORMED_FAILED = 'externalPaymentPerformedFailed',
  EXTERNAL_PAYMENT_RECEIVED_FAILED = 'externalPaymentReceivedFailed',
  EXTERNAL_USER_PAYMENT_EXPIRED = 'externalUserPaymentExpired',
  EXTERNAL_USER_PAYMENT_PERFORMED_FAILED = 'externalUserPaymentPerformedFailed',
  FEEDBACK_CHANGED = 'feedbackChanged',
  FEEDBACK_CREATED = 'feedbackCreated',
  FEEDBACK_EXPIRATION_REMINDER = 'feedbackExpirationReminder',
  FEEDBACK_OPTIONAL = 'feedbackOptional',
  FEEDBACK_REPLY_CREATED = 'feedbackReplyCreated',
  FEEDBACK_REQUIRED = 'feedbackRequired',
  GENERATED_VOUCHERS_ABOUT_TO_EXPIRE = 'generatedVouchersAboutToExpire',
  GENERATED_VOUCHERS_EXPIRED = 'generatedVouchersExpired',
  INCOMING_RECURRING_PAYMENT_CANCELED = 'incomingRecurringPaymentCanceled',
  INCOMING_RECURRING_PAYMENT_FAILED = 'incomingRecurringPaymentFailed',
  INCOMING_RECURRING_PAYMENT_RECEIVED = 'incomingRecurringPaymentReceived',
  INCOMING_SCHEDULED_PAYMENT_CANCELED = 'incomingScheduledPaymentCanceled',
  INCOMING_SCHEDULED_PAYMENT_FAILED = 'incomingScheduledPaymentFailed',
  INCOMING_SCHEDULED_PAYMENT_RECEIVED = 'incomingScheduledPaymentReceived',
  LIMIT_CHANGE = 'limitChange',
  LOW_STOCK_QUANTITY = 'lowStockQuantity',
  MAX_SMS_PER_MONTH_REACHED = 'maxSmsPerMonthReached',
  MEMBER_ASSIGNED = 'memberAssigned',
  MEMBER_UNASSIGNED = 'memberUnassigned',
  NETWORK_CREATED = 'networkCreated',
  NEW_TOKEN = 'newToken',
  NEW_TOKEN_PENDING_ACTIVATION = 'newTokenPendingActivation',
  OPERATOR_AUTHORIZED_PAYMENT_APPROVED_STILL_PENDING = 'operatorAuthorizedPaymentApprovedStillPending',
  OPERATOR_AUTHORIZED_PAYMENT_CANCELED = 'operatorAuthorizedPaymentCanceled',
  OPERATOR_AUTHORIZED_PAYMENT_DENIED = 'operatorAuthorizedPaymentDenied',
  OPERATOR_AUTHORIZED_PAYMENT_EXPIRED = 'operatorAuthorizedPaymentExpired',
  OPERATOR_AUTHORIZED_PAYMENT_SUCCEEDED = 'operatorAuthorizedPaymentSucceeded',
  OPERATOR_PAYMENT_AWAITING_AUTHORIZATION = 'operatorPaymentAwaitingAuthorization',
  ORDER_CANCELED_BUYER = 'orderCanceledBuyer',
  ORDER_CANCELED_SELLER = 'orderCanceledSeller',
  ORDER_CREATED = 'orderCreated',
  ORDER_PAYMENT_CANCELED_BUYER = 'orderPaymentCanceledBuyer',
  ORDER_PAYMENT_CANCELED_SELLER = 'orderPaymentCanceledSeller',
  ORDER_PAYMENT_DENIED_BUYER = 'orderPaymentDeniedBuyer',
  ORDER_PAYMENT_DENIED_SELLER = 'orderPaymentDeniedSeller',
  ORDER_PAYMENT_EXPIRED_BUYER = 'orderPaymentExpiredBuyer',
  ORDER_PAYMENT_EXPIRED_SELLER = 'orderPaymentExpiredSeller',
  ORDER_PENDING_AUTHORIZATION_BUYER = 'orderPendingAuthorizationBuyer',
  ORDER_PENDING_AUTHORIZATION_SELLER = 'orderPendingAuthorizationSeller',
  ORDER_PENDING_BUYER = 'orderPendingBuyer',
  ORDER_PENDING_DELIVERY_DATA_BUYER = 'orderPendingDeliveryDataBuyer',
  ORDER_PENDING_DELIVERY_DATA_SELLER = 'orderPendingDeliveryDataSeller',
  ORDER_REALIZED_BUYER = 'orderRealizedBuyer',
  ORDER_REALIZED_SELLER = 'orderRealizedSeller',
  ORDER_REJECTED_BY_BUYER = 'orderRejectedByBuyer',
  ORDER_REJECTED_BY_SELLER = 'orderRejectedBySeller',
  PASSWORD_STATUS_CHANGED = 'passwordStatusChanged',
  PAYMENT_AWAITING_ADMIN_AUTHORIZATION = 'paymentAwaitingAdminAuthorization',
  PAYMENT_AWAITING_AUTHORIZATION = 'paymentAwaitingAuthorization',
  PAYMENT_PERFORMED = 'paymentPerformed',
  PAYMENT_RECEIVED = 'paymentReceived',
  PAYMENT_REQUEST_CANCELED = 'paymentRequestCanceled',
  PAYMENT_REQUEST_DENIED = 'paymentRequestDenied',
  PAYMENT_REQUEST_EXPIRATION_DATE_CHANGED = 'paymentRequestExpirationDateChanged',
  PAYMENT_REQUEST_EXPIRED = 'paymentRequestExpired',
  PAYMENT_REQUEST_PROCESSED = 'paymentRequestProcessed',
  PAYMENT_REQUEST_RECEIVED = 'paymentRequestReceived',
  RECURRING_PAYMENT_FAILED = 'recurringPaymentFailed',
  RECURRING_PAYMENT_OCCURRENCE_PROCESSED = 'recurringPaymentOccurrenceProcessed',
  REFERENCE_CHANGED = 'referenceChanged',
  REFERENCE_CREATED = 'referenceCreated',
  SALE_PENDING_BUYER = 'salePendingBuyer',
  SALE_REALIZED_BUYER = 'saleRealizedBuyer',
  SALE_REJECTED_SELLER = 'saleRejectedSeller',
  SCHEDULED_PAYMENT_FAILED = 'scheduledPaymentFailed',
  SCHEDULED_PAYMENT_INSTALLMENT_PROCESSED = 'scheduledPaymentInstallmentProcessed',
  SCHEDULED_PAYMENT_REQUEST_FAILED = 'scheduledPaymentRequestFailed',
  SENT_PAYMENT_REQUEST_EXPIRATION_DATE_CHANGED = 'sentPaymentRequestExpirationDateChanged',
  SMS_PERFORMED_PAYMENT = 'smsPerformedPayment',
  SYSTEM_ALERT = 'systemAlert',
  TICKET_WEBHOOK_FAILED = 'ticketWebhookFailed',
  TOKEN_STATUS_CHANGED = 'tokenStatusChanged',
  USER_ALERT = 'userAlert',
  USER_IMPORT = 'userImport',
  USER_REGISTRATION = 'userRegistration',
  USER_STATUS_CHANGED = 'userStatusChanged',
  VOUCHER_BUYING_ABOUT_TO_EXPIRE = 'voucherBuyingAboutToExpire'
}
