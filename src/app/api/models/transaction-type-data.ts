/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';
import { Currency } from './currency';
import { CustomFieldDetailed } from './custom-field-detailed';
import { Entity } from './entity';
import { MaturityPolicyEnum } from './maturity-policy-enum';

/**
 * Contains definitions regarding a given payment type when performing a transaction (payment or payment request).
 */
export interface TransactionTypeData extends Entity {

  /**
   * The balance aging counter used for this payment. Only for payments.
   */
  ARate?: string;

  /**
   * The balance maturity used for this payment. Only for payments.
   */
  DRate?: string;

  /**
   * The initial value for the balance maturity on this payment type. Only for payments.
   */
  DRateCreationValue?: string;

  /**
   * Can payments of this type be made recurring?
   */
  allowsRecurringPayments?: boolean;
  currency?: Currency;

  /**
   * The custom fields related to this payment type
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The default expiration date, according to the configuration. Only for payment requests.
   */
  defaultExpirationDate?: string;
  descriptionAvailability?: AvailabilityEnum;

  /**
   * The only allowed amount if the payment type uses a fixed amount
   */
  fixedAmount?: string;

  /**
   * Whether the expiration date should be hidden from users, Only for payment requests.
   */
  hideExpirationDate?: boolean;

  /**
   * Only for payments.
   */
  limitedAwaitingAuthorization?: boolean;

  /**
   * Only for payments.
   */
  maturityPolicy?: MaturityPolicyEnum;

  /**
   * When `maturityPolicy` is `history`, contains the id of the maturity table entry that granted. Only for payments.
   */
  maturityTableWinnerId?: string;

  /**
   * The maximum amount that can be performed when `maturityPolicy` is `history`. It corresponds to the maturity table entry indicated by `maturityTableWinnerId`. Only for payments.
   */
  maxAmountByMaturityPolicy?: string;

  /**
   * The maximum allowed installments. If it is zero, no kind of scheduled payments is allowed. If it is 1, a single future date can be used.
   */
  maxInstallments?: number;

  /**
   * Only for payments.
   */
  noNegativesMaturityPolicy?: boolean;
}
