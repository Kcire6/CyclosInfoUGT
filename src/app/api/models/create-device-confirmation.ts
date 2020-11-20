/* tslint:disable */
import { AuthorizationActionEnum } from './authorization-action-enum';
import { ClientActionEnum } from './client-action-enum';
import { DeviceActionEnum } from './device-action-enum';
import { DeviceConfirmationTypeEnum } from './device-confirmation-type-enum';
import { ExternalPaymentActionEnum } from './external-payment-action-enum';
import { FailedOccurrenceActionEnum } from './failed-occurrence-action-enum';
import { InstallmentActionEnum } from './installment-action-enum';
import { PaymentRequestActionEnum } from './payment-request-action-enum';
import { RecurringPaymentActionEnum } from './recurring-payment-action-enum';
import { ScheduledPaymentActionEnum } from './scheduled-payment-action-enum';
import { VoucherActionEnum } from './voucher-action-enum';

/**
 * Contains data for create a pending device confirmation.
 */
export interface CreateDeviceConfirmation {

  /**
   * Either the id or number of the user account. Required only if type is `changeAccountLimits`.
   */
  account?: string;

  /**
   * The amount involved in the confirmation, its meaning depends on the type. Required only if type is `performPayment`, `performExternalPayment`, `shoppingCartCheckout`, `generateVouchers` or `buyVouchers`.
   */
  amount?: string;

  /**
   * The action being applied to the payment authorization. Required only if type is `manageAuthorization`.
   */
  authorizationAction?: AuthorizationActionEnum;

  /**
   * The access client id or token. Required only if type is  `clientAction`.
   */
  client?: string;

  /**
   * The action being applied to the access client. Required only if type is `clientAction`.
   */
  clientAction?: ClientActionEnum;

  /**
   * The action being applied to the device. Required only if type is `manageDevice`.
   */
  deviceAction?: DeviceActionEnum;

  /**
   * The id of a device. Required only if type is `manageDevice`.
   */
  deviceId?: string;

  /**
   * The action being applied to the external payment. Required only if type is `manageExternalPayment`.
   */
  externalPaymentAction?: ExternalPaymentActionEnum;

  /**
   * The id of a recurring payment failed occurrence. Required only if type is `manageFailedOccurrence`.
   */
  failedOccurrence?: string;

  /**
   * The action being applied to the recurring payment failed occurrence. Required only if type is `manageFailedOccurrence`.
   */
  failedOccurrenceAction?: FailedOccurrenceActionEnum;

  /**
   * The payment account owner. Can be one of:
   *
   * - a user identification value, such as id, username, e-mail, phone, etc.
   *   Id is always allowed, others depend on Cyclos configuration. Note that
   *   a valid numeric value is always considered as id. For example, when
   *   using another identification method that can be numeric only, prefix
   *   the value with a single quote (like in Excel spreadsheets);
   *
   * - `self` for the currently authenticated user;
   * - `system` for the owner of system accounts.
   *
   * Required only if type is `performPayment` or `performExternalPayment`.
   */
  from?: string;

  /**
   * The id of a scheduled payment installment. Required only if type is `manageInstallment`.
   */
  installment?: string;

  /**
   * The action being applied to the scheduled payment installment. Required only if type is `manageInstallment`.
   */
  installmentAction?: InstallmentActionEnum;

  /**
   * The entity's name for which this confirmation is created for. Required only if type is either `manageAddress`, `managePhone` or `manageContactInfo`.
   */
  name?: string;

  /**
   * The number of vouchers to be generated. Required only if type is `generateVouchers` or `buyVouchers`.
   */
  numberOfVouchers?: number;

  /**
   * Either the id or internal name of the custom operation being executed. Required only if type is `runOperation`.
   */
  operation?: string;

  /**
   * Either the id or number of an webshop order. Required only if type is `acceptOrder`.
   */
  order?: string;

  /**
   * Either the id or internal name of the password type being e generatated. Required only if type is `generatePassword`.
   */
  passwordType?: string;

  /**
   * The action being applied to the payment request. Required only if type is `managePaymentRequest`.
   */
  paymentRequestAction?: PaymentRequestActionEnum;

  /**
   * The payment type id or qualified internal name (in the form `fromAccountType.paymentType`). Required only if type is `performPayment`, `performExternalPayment`, `shoppingCartCheckout` or `importUserPayments`.
   */
  paymentType?: string;

  /**
   * The action being applied to the recurring payment. Required only if type is `manageRecurringPayment`.
   */
  recurringPaymentAction?: RecurringPaymentActionEnum;

  /**
   * The action being applied to the scheduled payment. Required only if type is `manageScheduledPayment`.
   */
  scheduledPaymentAction?: ScheduledPaymentActionEnum;

  /**
   * The order seller. Can be one a user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets); Required only if type is `shoppingCartCheckout`.
   */
  seller?: string;

  /**
   * Same as `from` but for the receiver. Required only if type is `performPayment`.
   */
  to?: string;

  /**
   * The receiver of the external payment (email or mobile number). Required only if type is `performExternalPayment`.
   */
  toPrincipal?: string;

  /**
   * Either the id or number of the transaction (or ticket number if type is `approveTicket`). Required only if type is `manageAuthorization`, `manageExternalPayment`, `manageScheduledPayment`, `manageRecurringPayment`, `managePaymentRequest` or `approveTicket`.
   */
  transaction?: string;

  /**
   * Either the id or number of the transfer. Required only if type is `chargeback`.
   */
  transfer?: string;
  type?: DeviceConfirmationTypeEnum;

  /**
   * The voucher id or token. Required only if type is  `manageVoucher`.
   */
  voucher?: string;

  /**
   * The action being applied to the voucher. Required only if type is `manageVoucher`.
   */
  voucherAction?: VoucherActionEnum;

  /**
   * Either the id or internal name of a voucher type. Required only if type is `generateVouchers` or `buyVouchers`.
   */
  voucherType?: string;
}
