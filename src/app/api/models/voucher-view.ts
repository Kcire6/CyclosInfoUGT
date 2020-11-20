/* tslint:disable */
import { ExportFormat } from './export-format';
import { Group } from './group';
import { PasswordInput } from './password-input';
import { Transaction } from './transaction';
import { User } from './user';
import { VoucherCancelActionEnum } from './voucher-cancel-action-enum';
import { VoucherCreationTypeEnum } from './voucher-creation-type-enum';
import { VoucherResult } from './voucher-result';

/**
 * Details of a voucher
 */
export interface VoucherView extends VoucherResult {

  /**
   * The transaction which bought this voucher, if any and visible.
   */
  buy?: Transaction;

  /**
   * Can the authenticated user change this voucher's expiration date?
   */
  canChangeExpirationDate?: boolean;
  cancelAction?: VoucherCancelActionEnum;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;
  creationType?: VoucherCreationTypeEnum;

  /**
   * The voucher description when it was created.
   */
  description?: string;

  /**
   * The formats which the data can be exported
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * The transaction which redeemed this voucher, if any and visible.
   */
  redeem?: Transaction;

  /**
   * Should the voucher be available to be redeemed?
   */
  redeemAfterDateReached?: boolean;

  /**
   * The list of goups allowed as redeemers. And empty list means all groups with permissions are allowed. Only this list or the `redeemAllowedUsers` list can be not null at the same time.
   */
  redeemAllowedGroups?: Array<Group>;

  /**
   * The list of users allowed as redeemers. An empty list means all users with permissions are allowed. Only this list or the `redeemAllowedGroups` list can be not null at the same time.
   */
  redeemAllowedUsers?: Array<User>;

  /**
   * The date the voucher was redeemer, if any.
   */
  redeemDate?: string;

  /**
   * The transaction which refunds this voucher, if any and visible.
   */
  refund?: Transaction;

  /**
   * Should the voucher configuration be shown to users? This flag is `true` when there are multiple available configurations.
   */
  showConfiguration?: boolean;

  /**
   * Should the voucher token be shown as QR-code for users?
   */
  showQrCode?: boolean;

  /**
   * The voucher title when it was created.
   */
  title?: string;
}
