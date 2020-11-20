/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';
import { PrincipalType } from './principal-type';
import { TokenTypeEnum } from './token-type-enum';

/**
 * Definition on how a principal value can be entered by the user
 */
export interface PrincipalTypeInput extends PrincipalType {

  /**
   * Only returned if `kind` is `token`. Specifies if the principal type allows enter manually the token value.
   */
  allowManualInput?: boolean;

  /**
   * If this principal is based on a custom field, holds its definition
   */
  customField?: CustomFieldDetailed;

  /**
   * If this principal is mobile phone, holds an example number.
   */
  example?: string;

  /**
   * If this principal is either a token or account number, holds the (optional) mask which clients can use to input the value.
   */
  mask?: string;

  /**
   * If this principal is a token, contains its type
   */
  tokenType?: TokenTypeEnum;
}
