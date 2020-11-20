/* tslint:disable */
import { CustomFieldValue } from './custom-field-value';
import { EntityReference } from './entity-reference';
import { ExportFormat } from './export-format';
import { ExternalPaymentStatusEnum } from './external-payment-status-enum';
import { InstallmentView } from './installment-view';
import { OidcClient } from './oidc-client';
import { PasswordInput } from './password-input';
import { PaymentPreview } from './payment-preview';
import { PaymentRequestPermissions } from './payment-request-permissions';
import { PaymentRequestSchedulingEnum } from './payment-request-scheduling-enum';
import { PaymentRequestStatusEnum } from './payment-request-status-enum';
import { RecurringPaymentPermissions } from './recurring-payment-permissions';
import { RecurringPaymentStatusEnum } from './recurring-payment-status-enum';
import { ScheduledPaymentPermissions } from './scheduled-payment-permissions';
import { ScheduledPaymentStatusEnum } from './scheduled-payment-status-enum';
import { TicketStatusEnum } from './ticket-status-enum';
import { TimeInterval } from './time-interval';
import { Transaction } from './transaction';
import { TransactionAuthorization } from './transaction-authorization';
import { TransactionAuthorizationLevelData } from './transaction-authorization-level-data';
import { TransactionAuthorizationPermissions } from './transaction-authorization-permissions';
import { TransactionAuthorizationTypeEnum } from './transaction-authorization-type-enum';
import { TransactionSubjectsEnum } from './transaction-subjects-enum';
import { Transfer } from './transfer';
import { TransferView } from './transfer-view';
import { User } from './user';

/**
 * Details about a transaction
 */
export interface TransactionView extends Transaction {

  /**
   * The access client in use when this transaction was performed
   */
  accessClient?: EntityReference;

  /**
   * Only returned if the `kind` is `ticket` and `status` is `open`. The URL used by clients to approve the ticket.
   */
  approveUrl?: string;

  /**
   * Only returned if the `kind` is either `payment`, `scheduledPayment` or `recurringPayment` and the transaction is pending for authorization. Contains data related to the current autorization level that can be authorized / denied.
   */
  authorizationLevelData?: TransactionAuthorizationLevelData;

  /**
   * Permissions the authenticated user has over this payment regarding authorizations.
   */
  authorizationPermissions?: TransactionAuthorizationPermissions;
  authorizationType?: TransactionAuthorizationTypeEnum;

  /**
   * Contains the details of the authorizations this payment has (for the previous levels). To see the final status of the payment please check the `authorizationStatus` property.
   */
  authorizations?: Array<TransactionAuthorization>;

  /**
   * The user that actually performed the action. May be different than the from, for example, an administrator can perform payments in behalf of other users
   */
  by?: User;

  /**
   * Only returned if the `kind` is `ticket`. The URL to redirect when canceling the ticket.
   */
  cancelUrl?: string;

  /**
   * Only returned if the `kind` is `paymentRequest`. The comments the user informed when changing the expiration date.
   */
  changeExpirationDateComments?: string;

  /**
   * The channel this transaction was performed on
   */
  channel?: EntityReference;

  /**
   * Only returned if the `kind` is `chargeback`. This is the transfer which performed the chargeback.
   */
  chargebackTransfer?: Transfer;

  /**
   * Only returned if the `kind` is either `paymentRequest` or `externalPayment`. The comments the user informed when performing the payment.
   */
  comments?: string;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The list of custom field values
   */
  customValues?: Array<CustomFieldValue>;

  /**
   * Only returned if the `kind` is `scheduledPayment`. Means the amount that is still needs to be paid until the last installment.
   */
  dueAmount?: string;

  /**
   * Only returned if the `kind` is either `paymentRequest`, `externalPayment` or `ticket`. The deadline for the payment to be processed.  In case of `externalPayment` if no user is registered with either e-mail or mobile phone matching, it is canceled. The same is done in case of `ticket` if it is not accepted by any user.
   */
  expirationDate?: string;

  /**
   * The formats which the data can be exported
   */
  exportFormats?: Array<ExportFormat>;
  externalPaymentStatus?: ExternalPaymentStatusEnum;

  /**
   * Only returned if the `kind` is `paymentRequest` and `scheduled` is `true`. Indicates whether the first installment should be processed immediately when the payment request is confirmed.
   */
  firstInstallmentIsImmediate?: boolean;

  /**
   * Only returned if the `kind` is `paymentRequest` and `scheduling` is `recurring`. Indicates whether the first occurrence should be processed immediately when the payment request is confirmed.
   */
  firstOccurrenceIsImmediate?: boolean;

  /**
   * Only returned if the `kind` is `scheduledPayment`. Contains the installment references.
   */
  installments?: Array<InstallmentView>;

  /**
   * Only returned if the `kind` is `paymentRequest` and `scheduled` is `true`. Indicates the number of installments to be generated.
   */
  installmentsCount?: number;

  /**
   * Only returned if the `kind` is `recurringPayment`. The scheduled date for the next occurrence.
   */
  nextOccurrenceDate?: string;

  /**
   * Only returned if the `kind` is `recurringPayment`. The interval between occurrences.
   */
  occurrenceInterval?: TimeInterval;

  /**
   * Only returned if the `kind` is `recurringPayment`. A list with all occurrences this payment has.
   */
  occurrences?: Array<InstallmentView>;

  /**
   * Only returned if the `kind` is `recurringPayment`. The programmed number of occurrences. If not set, means the payment will be processed until manually canceled.
   */
  occurrencesCount?: number;

  /**
   * When the transaction was performed from an OpenID Connect / OAuth2 client, contains a reference to it. The client is the third party application used to perform the payment
   */
  oidcClient?: OidcClient;

  /**
   * Only returned if the `kind` is `chargeback`. This is the original transfer that has been charged back.
   */
  originalTransfer?: Transfer;

  /**
   * Only returned if the `kind` is `ticket` and the ticket status is `open`. Is user that created the ticket.
   */
  payee?: User;

  /**
   * Only returned if the `kind` is `ticket` and the ticket status is `open`. Is the fixed payer user, if any.
   */
  payer?: User;

  /**
   * Only returned if the `kind` is `ticket`, the ticket status is `open` and there is a fixed payer. Is the principal (for example, login name or e-mail) which can be used to login the user, so he can accept the ticket.
   */
  payerPrincipal?: string;

  /**
   * Permissions the user has over this payment request.
   */
  paymentRequestPermissions?: PaymentRequestPermissions;
  paymentRequestStatus?: PaymentRequestStatusEnum;

  /**
   * Only returned if the `kind` is `ticket` and the ticket can be accepted. Is the payment preview if accepting the ticket. The preview will never contain a confirmation password input, because this object already contains it on the `confirmationPasswordInput` property, neither a payment to be sent back, as this payment is supposed to be confirmed by accepting the ticket. Also, the preview's currency is never sent, as it is the same one of the ticket.
   */
  preview?: PaymentPreview;

  /**
   * Only returned if the `kind` is either `paymentRequest`, `ticket` or `externalPayment` and `status` is `processed`. The date the payment request / ticket was accepted.
   */
  processDate?: string;

  /**
   * True if the payment was received vía POS.
   */
  received?: boolean;

  /**
   * The operator that actually received the payment. Only available if some other user has paid directly to it or the operator has received the payment via POS.
   */
  receivedBy?: User;

  /**
   * Only returned if the `kind` is `recurringPayment`. Permissions over the scheduled payment.
   */
  recurringPaymentPermissions?: RecurringPaymentPermissions;
  recurringPaymentStatus?: RecurringPaymentStatusEnum;

  /**
   * See the documentation of `scheduling` instead.
   *
   *
   * Only returned if the `kind` is `paymentRequest`. Indicates whether a scheduled payment (`true`)  will be generated once this payment request is confirmed.
   *
   * @deprecated
   */
  scheduled?: boolean;

  /**
   * Only returned if the `kind` is `scheduledPayment`. Permissions over the scheduled payment.
   */
  scheduledPaymentPermissions?: ScheduledPaymentPermissions;
  scheduledPaymentStatus?: ScheduledPaymentStatusEnum;

  /**
   * Only returned if the `kind` is `paymentRequest`. Indicates whether the generated payment will be a scheduled, recurring or regular payment once this payment request is confirmed.
   */
  scheduling?: PaymentRequestSchedulingEnum;

  /**
   * Only returned if the `kind` is either `paymentRequest` and `status` is not `processed`. The code that can be used by the receiver to confirm this payment request via SMS operation.
   */
  smsCode?: string;

  /**
   * Only returned if the `kind` is `ticket`. The URL to redirect after successfully accepting a ticket
   */
  successUrl?: string;
  ticketStatus?: TicketStatusEnum;

  /**
   * Only returned if the `kind` is `externalPayment`. Is the user identification method for this external payment (for example, e-mail or mobile phone).
   */
  toPrincipalType?: EntityReference;

  /**
   * Only returned if the `kind` is `externalPayment`. Is the user identification value for this external payment (for example, the e-mail or mobile phone values).
   */
  toPrincipalValue?: string;

  /**
   * Only returned if the `kind` is `paymentRequest`, `ticket` or `externalPayment`  and `status` is `processed`. Reference to the transaction that was generated when processing this payment request / externalPayment / ticket.
   */
  transaction?: Transaction;

  /**
   * Only returned if the `kind` is `payment`. This is the transfer generated when the payment was processed. Will be null if the went through authorization and was not authorized. Only returned if this `TransactionView` is not already in a `TransactionView`.
   */
  transfer?: TransferView;
  usersWhichCanAddToContacts?: TransactionSubjectsEnum;
  usersWhichCanViewProfile?: TransactionSubjectsEnum;
}
