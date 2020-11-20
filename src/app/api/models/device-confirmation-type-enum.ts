/* tslint:disable */

/**
 * Contains all possible device confirmation types
 * Possible values are:
 * - `acceptOrder`: A confirmation for accepting a pending order as buyer
 * - `approveTicket`: A confirmation for approving a pending ticket as payer
 * - `buyVouchers`: A confirmation for buying vouchers
 * - `changeAccountLimits`: A confirmation for change the account limits of a user account
 * - `chargeback`: A confirmation for transfer chargeback
 * - `clientAction`: A confirmation for an action over an access client
 * - `editProfile`: A confirmation for editing the profile of his own
 * - `generatePassword`: A confirmation for generating a new password
 * - `generateVouchers`: A confirmation for generating vouchers
 * - `importPayments`: A confirmation for importin payments as admin
 * - `importUserPayments`: A confirmation for batch payments as user
 * - `manageAddress`: A confirmation for managing an user address of his own
 * - `manageAuthorization`: A confirmation for managing a pending payment authorization
 * - `manageContactInfo`: A confirmation for managing an additional contact information of his own
 * - `manageDevice`: A confirmation for managing a trusted device
 * - `manageExternalPayment`: A confirmation for managing an external payment
 * - `manageFailedOccurrence`: A confirmation for managing a recurring payment failed occurrence
 * - `manageInstallment`: A confirmation for managing a scheduled payment installment
 * - `managePaymentRequest`: A confirmation for managing a payment request
 * - `managePhone`: A confirmation for managing a phone of his own
 * - `manageRecurringPayment`: A confirmation for managing a recurring payment
 * - `manageScheduledPayment`: A confirmation for managing a scheduled payment
 * - `manageVoucher`: A confirmation for managing a voucher
 * - `performExternalPayment`: A confirmation for performing an external payment
 * - `performPayment`: A confirmation for performing a payment
 * - `personalizeNfc`: A confirmation for personalizing a NFC tag
 * - `runOperation`: A confirmation for running a custom operation
 * - `secondaryLogin`: A confirmation for the secondary login
 * - `shoppingCartCheckout`: A confirmation for the cart checkout
 */
export enum DeviceConfirmationTypeEnum {
  ACCEPT_ORDER = 'acceptOrder',
  APPROVE_TICKET = 'approveTicket',
  BUY_VOUCHERS = 'buyVouchers',
  CHANGE_ACCOUNT_LIMITS = 'changeAccountLimits',
  CHARGEBACK = 'chargeback',
  CLIENT_ACTION = 'clientAction',
  EDIT_PROFILE = 'editProfile',
  GENERATE_PASSWORD = 'generatePassword',
  GENERATE_VOUCHERS = 'generateVouchers',
  IMPORT_PAYMENTS = 'importPayments',
  IMPORT_USER_PAYMENTS = 'importUserPayments',
  MANAGE_ADDRESS = 'manageAddress',
  MANAGE_AUTHORIZATION = 'manageAuthorization',
  MANAGE_CONTACT_INFO = 'manageContactInfo',
  MANAGE_DEVICE = 'manageDevice',
  MANAGE_EXTERNAL_PAYMENT = 'manageExternalPayment',
  MANAGE_FAILED_OCCURRENCE = 'manageFailedOccurrence',
  MANAGE_INSTALLMENT = 'manageInstallment',
  MANAGE_PAYMENT_REQUEST = 'managePaymentRequest',
  MANAGE_PHONE = 'managePhone',
  MANAGE_RECURRING_PAYMENT = 'manageRecurringPayment',
  MANAGE_SCHEDULED_PAYMENT = 'manageScheduledPayment',
  MANAGE_VOUCHER = 'manageVoucher',
  PERFORM_EXTERNAL_PAYMENT = 'performExternalPayment',
  PERFORM_PAYMENT = 'performPayment',
  PERSONALIZE_NFC = 'personalizeNfc',
  RUN_OPERATION = 'runOperation',
  SECONDARY_LOGIN = 'secondaryLogin',
  SHOPPING_CART_CHECKOUT = 'shoppingCartCheckout'
}
