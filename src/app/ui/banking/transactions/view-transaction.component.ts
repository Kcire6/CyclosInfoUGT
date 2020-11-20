import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import {
  AuthorizationActionEnum, CreateDeviceConfirmation, CustomFieldDetailed, CustomFieldTypeEnum, DeviceConfirmationTypeEnum,
  FailedOccurrenceActionEnum, InstallmentActionEnum, InstallmentStatusEnum, InstallmentView,
  PaymentRequestActionEnum, RecurringPaymentActionEnum,
  ScheduledPaymentActionEnum, TransactionKind, TransactionView
} from 'app/api/models';
import { InstallmentsService } from 'app/api/services/installments.service';
import { PaymentRequestsService } from 'app/api/services/payment-requests.service';
import { TransactionsService } from 'app/api/services/transactions.service';
import { TransfersService } from 'app/api/services/transfers.service';
import { PendingPaymentsService } from 'app/api/services/pending-payments.service';
import { RecurringPaymentsService } from 'app/api/services/recurring-payments.service';
import { ScheduledPaymentsService } from 'app/api/services/scheduled-payments.service';
import { ConfirmCallbackParams } from 'app/core/notification.service';
import { OperationHelperService } from 'app/ui/core/operation-helper.service';
import { HeadingAction } from 'app/shared/action';
import { ApiHelper } from 'app/shared/api-helper';
import { BaseViewPageComponent } from 'app/ui/shared/base-view-page.component';
import { empty } from 'app/shared/helper';

/**
 * Displays a transaction details
 */
@Component({
  selector: 'view-transaction',
  templateUrl: 'view-transaction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransactionComponent extends BaseViewPageComponent<TransactionView> implements OnInit {

  title: string;
  mobileTitle: string;
  lastAuthComment: string;
  hasDueAmount = false;
  hasActions = false;

  constructor(
    injector: Injector,
    private transactionsService: TransactionsService,
    private installmentsService: InstallmentsService,
    private pendingPaymentsService: PendingPaymentsService,
    private scheduledPaymentsService: ScheduledPaymentsService,
    private recurringPaymentsService: RecurringPaymentsService,
    private paymentRequestsService: PaymentRequestsService,
    private transfersService: TransfersService,
    private operationHelper: OperationHelperService,
  ) {
    super(injector);
  }

  get status(): string {
    return this.apiI18n.transactionStatus(this.transaction);
  }

  get transaction(): TransactionView {
    return this.data;
  }

  get key(): string {
    return this.route.snapshot.paramMap.get('key');
  }

  ngOnInit() {
    super.ngOnInit();
    this.addSub(this.transactionsService.viewTransaction({ key: this.key })
      .subscribe(transaction => {
        [this.title, this.mobileTitle] = this.titles(transaction.kind);
        this.headingActions = this.initActions(transaction);
        this.hasDueAmount = transaction.dueAmount && !this.format.isZero(transaction.dueAmount);
        this.hasActions = !!(transaction.installments || transaction.occurrences || []).find(i => i.canProcess || i.canSettle);
        this.data = transaction;
        if (transaction.transfer) {
          transaction.transfer.transaction = transaction;
        }
        if (!empty(transaction.authorizations)) {
          this.lastAuthComment = transaction.authorizations[0].comments;
        }
      }));
  }

  private initActions(transaction: TransactionView): HeadingAction[] {
    const actions: HeadingAction[] = this.exportHelper.headingActions(transaction.exportFormats,
      f => this.transactionsService.exportTransaction$Response({
        format: f.internalName,
        key: transaction.id
      }));
    const auth = transaction.authorizationPermissions || {};
    if (!empty(transaction.authorizations)) {
      actions.push(new HeadingAction('check_circle_outline', this.i18n.transaction.viewAuthorizations,
        () => this.router.navigate(['banking', 'transaction', this.key, 'authorization-history'])));
    }
    if (auth.authorize) {
      actions.push(new HeadingAction('thumb_up', this.i18n.transaction.authorizePending, () => this.authorize()));
    }
    if (auth.deny) {
      actions.push(new HeadingAction('thumb_down', this.i18n.transaction.denyPending, () => this.deny()));
    }
    if (auth.cancel) {
      actions.push(new HeadingAction('cancel', this.i18n.transaction.cancelAuthorization, () => this.cancelAuthorization()));
    }

    const scheduled = transaction.scheduledPaymentPermissions || {};
    if (scheduled.block) {
      actions.push(new HeadingAction('block', this.i18n.transaction.blockScheduling, () => this.blockScheduled()));
    }
    if (scheduled.unblock) {
      actions.push(new HeadingAction('schedule', this.i18n.transaction.unblockScheduling, () => this.unblockScheduled()));
    }
    if (scheduled.cancel) {
      actions.push(new HeadingAction('cancel', this.i18n.transaction.cancelScheduled, () => this.cancelScheduled()));
    }
    if (scheduled.settle) {
      actions.push(new HeadingAction('done_all', this.i18n.transaction.settleScheduled, () => this.settleScheduled()));
    }
    if (transaction.kind === TransactionKind.SCHEDULED_PAYMENT
      && transaction.installments.length === 1
      && transaction.installments[0].canProcess) {
      actions.push(new HeadingAction('play_circle_outline', this.i18n.transaction.processScheduled,
        () => this.processScheduled(transaction.installments[0])));
    }

    if (transaction.recurringPaymentPermissions?.cancel) {
      actions.push(new HeadingAction('cancel', this.i18n.transaction.cancelRecurring, () => this.cancelRecurring()));
    }

    const requestPermissions = transaction.paymentRequestPermissions || {};
    if (requestPermissions.accept) {
      actions.push(new HeadingAction('thumb_up', this.i18n.transaction.acceptPaymentRequest, () => this.acceptPaymentRequest()));
    }
    if (requestPermissions.reject) {
      actions.push(new HeadingAction('thumb_down', this.i18n.transaction.rejectPaymentRequest, () => this.rejectPaymentRequest()));
    }
    if (requestPermissions.cancel) {
      actions.push(new HeadingAction('cancel', this.i18n.transaction.cancelPaymentRequest, () => this.cancelPaymentRequest()));
    }
    if (requestPermissions.reschedule) {
      actions.push(new HeadingAction('schedule', this.i18n.transaction.reschedulePaymentRequest, () => this.reschedulePaymentRequest()));
    }
    if (requestPermissions.changeExpiration) {
      actions.push(new HeadingAction('schedule', this.i18n.transaction.changePaymentRequestExpiration,
        () => this.changePaymentRequestExpiration()));
    }

    if (transaction.transfer?.canChargeback) {
      actions.push(new HeadingAction('undo', this.i18n.transaction.chargebackTransfer, () => this.chargeback()));
    }

    for (const operation of (transaction.transfer || {}).operations || []) {
      actions.push(this.operationHelper.headingAction(operation, transaction.transfer.id));
    }

    return actions;
  }

  private get authorizationFields(): CustomFieldDetailed[] {
    return [{
      internalName: 'comments',
      name: this.i18n.general.comments,
      type: CustomFieldTypeEnum.TEXT,
    }];
  }

  private authDeviceConfirmation(action: AuthorizationActionEnum): () => CreateDeviceConfirmation {
    return () => ({
      type: DeviceConfirmationTypeEnum.MANAGE_AUTHORIZATION,
      transaction: this.transaction.id,
      authorizationAction: action,
    });
  }

  private authorize() {
    this.notification.confirm({
      title: this.i18n.transaction.authorizePending,
      labelPosition: 'above',
      customFields: this.authorizationFields,
      passwordInput: this.transaction.confirmationPasswordInput,
      createDeviceConfirmation: this.authDeviceConfirmation(AuthorizationActionEnum.AUTHORIZE),
      callback: res => {
        this.addSub(this.pendingPaymentsService.authorizePendingPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
          body: {
            comments: res.customValues.comments
          },
        }).subscribe(nextLevel => {
          if (nextLevel) {
            this.notification.warning(this.i18n.transaction.authorizePendingDoneStillPending);
          } else {
            this.notification.snackBar(this.i18n.transaction.authorizePendingDone);
          }
          this.reload();
        }));
      }
    });
  }

  private deny() {
    this.notification.confirm({
      title: this.i18n.transaction.denyPending,
      labelPosition: 'above',
      customFields: this.authorizationFields,
      createDeviceConfirmation: this.authDeviceConfirmation(AuthorizationActionEnum.DENY),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.pendingPaymentsService.denyPendingPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
          body: {
            comments: res.customValues.comments,
          },
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.denyPendingDone)));
      }
    });
  }

  private cancelAuthorization() {
    this.notification.confirm({
      title: this.i18n.transaction.cancelAuthorization,
      labelPosition: 'above',
      customFields: this.authorizationFields,
      createDeviceConfirmation: this.authDeviceConfirmation(AuthorizationActionEnum.CANCEL),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.pendingPaymentsService.cancelPendingPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
          body: {
            comments: res.customValues.comments,
          },
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.cancelAuthorizationDone)));
      }
    });
  }

  private schedDeviceConfirmation(action: ScheduledPaymentActionEnum): () => CreateDeviceConfirmation {
    return () => ({
      type: DeviceConfirmationTypeEnum.MANAGE_SCHEDULED_PAYMENT,
      transaction: this.transaction.id,
      scheduledPaymentAction: action,
    });
  }

  private blockScheduled() {
    this.notification.confirm({
      title: this.i18n.transaction.blockScheduling,
      message: this.i18n.transaction.blockSchedulingMessage,
      createDeviceConfirmation: this.schedDeviceConfirmation(ScheduledPaymentActionEnum.BLOCK),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.scheduledPaymentsService.blockScheduledPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.blockSchedulingDone)));
      }
    });
  }

  private unblockScheduled() {
    this.notification.confirm({
      title: this.i18n.transaction.unblockScheduling,
      message: this.i18n.transaction.unblockSchedulingMessage,
      createDeviceConfirmation: this.schedDeviceConfirmation(ScheduledPaymentActionEnum.UNBLOCK),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.scheduledPaymentsService.unblockScheduledPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.unblockSchedulingDone)));
      }
    });
  }

  private cancelScheduled() {
    this.notification.confirm({
      title: this.i18n.transaction.cancelScheduled,
      message: this.i18n.transaction.cancelScheduledMessage,
      createDeviceConfirmation: this.schedDeviceConfirmation(ScheduledPaymentActionEnum.CANCEL),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.scheduledPaymentsService.cancelScheduledPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.cancelScheduledDone)));
      }
    });
  }

  private settleScheduled() {
    this.notification.confirm({
      title: this.i18n.transaction.settleScheduled,
      message: this.i18n.transaction.settleScheduledMessage,
      createDeviceConfirmation: this.schedDeviceConfirmation(ScheduledPaymentActionEnum.SETTLE),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.scheduledPaymentsService.settleScheduledPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.settleScheduledDone)));
      }
    });
  }

  private recurringDeviceConfirmation(action: RecurringPaymentActionEnum): () => CreateDeviceConfirmation {
    return () => ({
      type: DeviceConfirmationTypeEnum.MANAGE_RECURRING_PAYMENT,
      transaction: this.transaction.id,
      recurringPaymentAction: action,
    });
  }

  private cancelRecurring() {
    this.notification.confirm({
      title: this.i18n.transaction.cancelRecurring,
      message: this.i18n.transaction.cancelRecurringMessage,
      createDeviceConfirmation: this.recurringDeviceConfirmation(RecurringPaymentActionEnum.CANCEL),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.recurringPaymentsService.cancelRecurringPayment({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.cancelRecurringDone)));
      }
    });
  }

  private paymentRequestDeviceConfirmation(action: PaymentRequestActionEnum): () => CreateDeviceConfirmation {
    return () => ({
      type: DeviceConfirmationTypeEnum.MANAGE_PAYMENT_REQUEST,
      transaction: this.transaction.id,
      paymentRequestAction: action,
    });
  }

  private cancelPaymentRequest() {
    this.notification.confirm({
      title: this.i18n.transaction.cancelPaymentRequest,
      createDeviceConfirmation: this.paymentRequestDeviceConfirmation(PaymentRequestActionEnum.CANCEL),
      passwordInput: this.transaction.confirmationPasswordInput,
      customFields: [{
        internalName: 'comments',
        name: this.i18n.general.comments,
        type: CustomFieldTypeEnum.TEXT
      }],
      callback: res => {
        this.addSub(this.paymentRequestsService.cancelPaymentRequest({
          key: this.transaction.id,
          body: res.customValues.comments,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.cancelPaymentRequestDone)));
      }
    });
  }

  private rejectPaymentRequest() {
    this.notification.confirm({
      title: this.i18n.transaction.rejectPaymentRequest,
      createDeviceConfirmation: this.paymentRequestDeviceConfirmation(PaymentRequestActionEnum.DENY),
      passwordInput: this.transaction.confirmationPasswordInput,
      customFields: [{
        internalName: 'comments',
        name: this.i18n.general.comments,
        type: CustomFieldTypeEnum.TEXT
      }],
      callback: res => {
        this.addSub(this.paymentRequestsService.rejectPaymentRequest({
          key: this.transaction.id,
          body: res.customValues.comments,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.rejectPaymentRequestDone)));
      }
    });
  }

  private changePaymentRequestExpiration() {
    this.notification.confirm({
      title: this.i18n.transaction.changePaymentRequestExpiration,
      createDeviceConfirmation: this.paymentRequestDeviceConfirmation(PaymentRequestActionEnum.CHANGE_EXPIRATION),
      passwordInput: this.transaction.confirmationPasswordInput,
      customFields: [{
        internalName: 'expiry',
        name: this.i18n.token.expiryDate,
        type: CustomFieldTypeEnum.DATE,
        required: true
      }, {
        internalName: 'comments',
        defaultValue: this.data.changeExpirationDateComments,
        name: this.i18n.general.comments,
        type: CustomFieldTypeEnum.TEXT
      }],
      callback: res => {
        this.addSub(this.paymentRequestsService.changePaymentRequestExpirationDate({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
          body: { comments: res.customValues.comments, newExpirationDate: ApiHelper.shiftToDayEnd(res.customValues.expiry) }
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.changePaymentRequestExpirationDone)));
      }
    });
  }

  private reschedulePaymentRequest() {
    this.notification.confirm({
      title: this.i18n.transaction.reschedulePaymentRequest,
      createDeviceConfirmation: this.paymentRequestDeviceConfirmation(PaymentRequestActionEnum.RESCHEDULE),
      passwordInput: this.transaction.confirmationPasswordInput,
      customFields: [{
        internalName: 'expiry',
        name: this.i18n.token.expiryDate,
        type: CustomFieldTypeEnum.DATE,
        required: true
      }, {
        internalName: 'comments',
        name: this.i18n.general.comments,
        type: CustomFieldTypeEnum.TEXT
      }],
      callback: res => {
        this.addSub(this.paymentRequestsService.reschedulePaymentRequest({
          key: this.transaction.id,
          confirmationPassword: res.confirmationPassword,
          body: { comments: res.customValues.comments, processDate: res.customValues.expiry }
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.reschedulePaymentRequestDone)));
      }
    });
  }

  private acceptPaymentRequest() {
    this.router.navigate(['/banking', 'payment-request', this.data.id, 'accept']);
  }

  private chargebackDeviceConfirmation(): () => CreateDeviceConfirmation {
    return () => ({
      type: DeviceConfirmationTypeEnum.CHARGEBACK,
      transfer: this.transaction.transfer.id,
    });
  }

  private chargeback() {
    this.notification.confirm({
      title: this.i18n.transaction.chargebackTransfer,
      message: this.i18n.transaction.chargebackTransferMessage,
      createDeviceConfirmation: this.chargebackDeviceConfirmation(),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.transfersService.chargebackTransfer({
          key: this.transaction.transfer.id,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.chargebackTransferDone)));
      }
    });
  }

  private titles(kind: TransactionKind): [string, string] {
    switch (kind) {
      case TransactionKind.SCHEDULED_PAYMENT:
        return [
          this.i18n.transaction.title.detailsScheduled,
          this.i18n.transaction.mobileTitle.detailsScheduled,
        ];
      case TransactionKind.RECURRING_PAYMENT:
        return [
          this.i18n.transaction.title.detailsRecurring,
          this.i18n.transaction.mobileTitle.detailsRecurring,
        ];
      case TransactionKind.PAYMENT_REQUEST:
        return [
          this.i18n.transaction.title.detailsRequest,
          this.i18n.transaction.mobileTitle.detailsRequest,
        ];
      case TransactionKind.CHARGEBACK:
        return [
          this.i18n.transaction.title.detailsChargeback,
          this.i18n.transaction.mobileTitle.detailsChargeback,
        ];
      case TransactionKind.TICKET:
        return [
          this.i18n.transaction.title.detailsTicket,
          this.i18n.transaction.mobileTitle.detailsTicket,
        ];
      case TransactionKind.EXTERNAL_PAYMENT:
        return [
          this.i18n.transaction.title.detailsExternal,
          this.i18n.transaction.mobileTitle.detailsExternal,
        ];
      default:
        return [
          this.i18n.transaction.title.detailsPayment,
          this.i18n.transaction.mobileTitle.detailsPayment,
        ];
    }
  }

  installmentStatus(status: InstallmentStatusEnum): string {
    return this.apiI18n.installmentStatus(status);
  }

  path(row: InstallmentView) {
    const key = row.transferTransactionNumber || row.transferId;
    if (key) {
      return ['/banking', 'transfer', key];
    }
  }

  private installmentDeviceConfirmation(
    action: InstallmentActionEnum,
    installment: InstallmentView): () => CreateDeviceConfirmation {

    return () => ({
      type: DeviceConfirmationTypeEnum.MANAGE_INSTALLMENT,
      installment: installment.id,
      installmentAction: action,
    });
  }

  settleInstallment(installment: InstallmentView) {
    this.notification.confirm({
      title: this.i18n.transaction.settleInstallment,
      message: this.i18n.transaction.settleInstallmentMessage(String(installment.number)),
      createDeviceConfirmation: this.installmentDeviceConfirmation(InstallmentActionEnum.SETTLE, installment),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: res => {
        this.addSub(this.installmentsService.settleInstallment({
          key: installment.id,
          confirmationPassword: res.confirmationPassword,
        }).subscribe(() => this.sendNotificationAndReload(this.i18n.transaction.settleInstallmentDone)));
      }
    });
  }

  isScheduledPayment(): boolean {
    return this.data.kind === TransactionKind.SCHEDULED_PAYMENT;
  }

  isPaymentRequest(): boolean {
    return this.data.kind === TransactionKind.PAYMENT_REQUEST;
  }

  processInstallment(installment: InstallmentView) {
    this.notification.confirm({
      title: this.i18n.transaction.processInstallment,
      message: this.i18n.transaction.processInstallmentMessage(installment.number),
      createDeviceConfirmation: this.installmentDeviceConfirmation(InstallmentActionEnum.PROCESS, installment),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: this.processCallback(installment.id, this.i18n.transaction.processInstallmentDone),
    });
  }

  processOccurrence(installment: InstallmentView) {
    this.notification.confirm({
      title: this.i18n.transaction.processFailedOccurrence,
      message: this.i18n.transaction.processFailedOccurrenceMessage(installment.number),
      createDeviceConfirmation: this.failedOccurreneceDeviceConfirmation(FailedOccurrenceActionEnum.PROCESS, installment),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: this.processCallback(installment.id, this.i18n.transaction.processFailedOccurrenceDone),
    });
  }

  processScheduled(installment: InstallmentView) {
    this.notification.confirm({
      title: this.i18n.transaction.processScheduled,
      message: this.i18n.transaction.processScheduledMessage,
      createDeviceConfirmation: this.installmentDeviceConfirmation(InstallmentActionEnum.PROCESS, installment),
      passwordInput: this.transaction.confirmationPasswordInput,
      callback: this.processCallback(installment.id, this.i18n.transaction.processScheduledDone),
    });
  }

  processCallback(key: string, notificationMsg: string): (params: ConfirmCallbackParams) => void {
    return res => this.addSub(this.installmentsService.processInstallment({ key, confirmationPassword: res.confirmationPassword })
      .subscribe(() => this.sendNotificationAndReload(notificationMsg)));
  }

  sendNotificationAndReload(msg: string) {
    this.notification.snackBar(msg);
    this.reload();
  }

  private failedOccurreneceDeviceConfirmation(
    action: FailedOccurrenceActionEnum,
    installment: InstallmentView): () => CreateDeviceConfirmation {

    return () => ({
      type: DeviceConfirmationTypeEnum.MANAGE_FAILED_OCCURRENCE,
      failedOccurrence: installment.id,
      failedOccurrenceAction: action,
    });
  }

  resolveMenu(view: TransactionView) {
    return this.menu.accountMenu(view.from, view.to);
  }

}
