/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';
import { InternalNamedEntity } from './internal-named-entity';
import { PasswordInputMethodEnum } from './password-input-method-enum';
import { PasswordModeEnum } from './password-mode-enum';
import { PinInput } from './pin-input';
import { SendMediumEnum } from './send-medium-enum';

/**
 * Contains all information for a password entry. Passwords in Cyclos may be entered as regular texts or as virtual keyboards. For `virtualKeyboard`, a number of information is sent, such as an unique id, the number of buttons to be displayed, the number of rows that should visually hold those buttons, the sequences of characters that should be displayed on each button. When sending the value of a password of type virtual keyboard, unique id should be sent, together with the entire sequence for each button, all separated by pipes. So, suppose a very simple (and weakly configured) example where the id is `987654321` and the sequences are: `[["abc", "def", "fgh"], ["ijk", "lmn", "opq"]]`. This describes 2 sequences of 3 buttons each. First, the buttons with the options `abc`, `def` and `fgh` should be shown. Suppose the user chooses the second one. Then the button labels should be changed to `ijk`, `lmn` and `opq`. Now the user picks the first one. The value sent to the server should be `987654321|def|ijk`.
 */
export interface PasswordInput extends InternalNamedEntity {

  /**
   * Only for `virtualKeyboard`, contains the sequences of buttons that should be displayed for the user. The explanation for the value that should be sent on virtual keyboard mode is shown above, in the description of this type.
   */
  buttons?: Array<Array<string>>;

  /**
   * Only for `virtualKeyboard`, is the number of buttons that should be displayed on each row
   */
  buttonsPerRow?: number;

  /**
   * Only returned when there is an authenticated user (not for login). Determines whether this password, when used as confirmation, should be requested only once until the user logs out.
   */
  confirmationPasswordOncePerSession?: boolean;

  /**
   * Whether the confirmation with a trusted device is not used, optional or required.
   */
  deviceAvailability?: AvailabilityEnum;

  /**
   * Only returned when there is an authenticated user (not for login). Describes whether the user has at least one trusted device. If not, and the device confirmation is required a proper message can be shown to the user indicating that the user must activate a device as trusted.
   */
  hasActiveDevice?: boolean;

  /**
   * Only returned when there is an authenticated user (not for login). Describes whether the user has created a password of this type. If not, a proper message can be shown to the user indicating that this password needs to be created.
   */
  hasActivePassword?: boolean;

  /**
   * The explanation for the value that should be sent for `virtualKeyboard` cases is given above, in the description of this type.
   */
  inputMethod?: PasswordInputMethodEnum;

  /**
   * For text passwords, the maximum password length
   */
  maxLength?: number;

  /**
   * For text passwords, the minimum password length
   */
  minLength?: number;
  mode?: PasswordModeEnum;

  /**
   * Only for `virtualKeyboard`, is the number of buttons to be displayed
   */
  numberOfButtons?: number;

  /**
   * Whether the password contains only numbers or not
   */
  onlyNumeric?: boolean;

  /**
   * Only for `otp`, the available mediums for the password to be sent
   */
  otpSendMediums?: Array<SendMediumEnum>;

  /**
   * Whether the confirmation with a device PIN is not used, optional or required.
   */
  pinAvailability?: AvailabilityEnum;

  /**
   * The device PIN min length. Only if `pinAvailability` is not `disabled`
   */
  pinInput?: PinInput;
}
