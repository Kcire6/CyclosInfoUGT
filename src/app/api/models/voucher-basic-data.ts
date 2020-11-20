/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';
import { PasswordInput } from './password-input';
import { User } from './user';
import { VoucherTypeDetailed } from './voucher-type-detailed';

/**
 * Contains common data for either buying or redeeming a voucher
 */
export interface VoucherBasicData {

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The custom fields associated with this voucher type
   */
  customFields?: Array<CustomFieldDetailed>;
  type?: VoucherTypeDetailed;
  user?: User;
}
