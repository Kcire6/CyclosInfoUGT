/* tslint:disable */
import { OperatorGroupPayment } from './operator-group-payment';
import { TransferTypeWithCurrency } from './transfer-type-with-currency';

/**
 * Settings for payments for an operator group.
 */
export interface OperatorGroupPaymentView extends OperatorGroupPayment {
  paymentType?: TransferTypeWithCurrency;
}
