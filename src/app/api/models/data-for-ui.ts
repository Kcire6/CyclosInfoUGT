/* tslint:disable */
import { Auth } from './auth';
import { DataForLogin } from './data-for-login';
import { DeviceActivationEnum } from './device-activation-enum';
import { DistanceUnitEnum } from './distance-unit-enum';
import { GroupForRegistration } from './group-for-registration';
import { Language } from './language';
import { MapData } from './map-data';
import { ThemeUiElement } from './theme-ui-element';
import { UiElementWithContent } from './ui-element-with-content';
import { UserLocale } from './user-locale';
import { Wizard } from './wizard';

/**
 * Contains data to display an alternative user interface
 */
export interface DataForUi {

  /**
   * The locales the user can select, for example to change the language.
   */
  allowedLocales?: Array<UserLocale>;

  /**
   * The mobile app url in the Apple store.
   */
  appleStoreUrl?: string;

  /**
   * The logged user authentication. Not returned for guests.
   */
  auth?: Auth;

  /**
   * The ISO 3166-1 alpha-2 country code, as set in the configuration
   */
  country?: string;

  /**
   * The current time in the the user's time zone.
   */
  currentClientTime?: string;

  /**
   * The version of the Cyclos server. It will of the form x.y[.z]
   */
  cyclosVersion?: string;

  /**
   * The data used for logging the user in. Not returned for logged users.
   */
  dataForLogin?: DataForLogin;

  /**
   * The pattern string used to format dates.
   * The following are the letters used in each supported pattern:
   * * dd: The day of the month;
   * * MM: The month ranging from 1 to 12;
   * * yyyy: The full year number.
   */
  dateFormat?: string;

  /**
   * The character used to specify the decimal point
   */
  decimalSeparator?: string;

  /**
   * Contains information needed when the authenticated user wants to activate a device as trusted.
   */
  deviceActivationMode?: DeviceActivationEnum;
  distanceUnit?: DistanceUnitEnum;

  /**
   * The footer content. Only returned when changed or if the corresponding `footerIf` parameter was not specified. For all cases the content returned will be the same for logged users an for guests.
   *
   * The returned footer will be the following according to the UI kind:
   *
   * - `main`: The footer configured for the main web interface;
   * - `mobile`: The footer configured for the mobile application. Only returned for guests;
   * - `pay`: The footer defined for the ticket / easy invoice confirmation interface.
   */
  footer?: UiElementWithContent;

  /**
   * The character used to separate thousands.
   */
  groupingSeparator?: string;

  /**
   * The header content. Only returned when changed or if the corresponding `headerIf` parameter was not specified. For all cases the content returned will be the same for logged users an for guests.
   *
   * The returned header will be the following according to the UI kind:
   *
   * - `main`: The header configured for the main web interface;
   * - `mobile`: The header configured for the mobile application. Only returned for guests;
   * - `pay`: The header defined for the ticket / easy invoice confirmation interface.
   */
  header?: UiElementWithContent;

  /**
   * Whether the search users action must be shown or not in the menu. If the user doesn't have permission to search other users (`permissions.users.search`) then this flag will be `true`. Otherwise it depends on the configuration
   */
  hideUserSearchInMenu?: boolean;

  /**
   * Quality for JPEG image types (higher means better quality)
   */
  jpegQuality?: number;

  /**
   * The language set in the configuration
   */
  language?: Language;

  /**
   * Wizard which should be used for registration instead of the regular registration form, for clients with large screens (desktops). When all `largeScreenRegistrationWizard`, `mediumScreenRegistrationWizard` and `smallScreenRegistrationWizard` are set, the regular registration form is disabled, as well as the `POST /users` operation for guests.
   */
  largeScreenRegistrationWizard?: Wizard;

  /**
   * Configuration data for map usage. Is null when maps are not used.
   */
  mapData?: MapData;

  /**
   * Maximum height (in pixels) for uploaded images
   */
  maxImageHeight?: number;

  /**
   * Maximum width (in pixels) for uploaded images
   */
  maxImageWidth?: number;

  /**
   * Maximum size (in bytes) for uploaded files
   */
  maxUploadSize?: number;

  /**
   * Wizard which should be used for registration instead of the regular registration form, for clients with medium screens (tablets). When all `largeScreenRegistrationWizard`, `mediumScreenRegistrationWizard` and `smallScreenRegistrationWizard` are set, the regular registration form is disabled, as well as the `POST /users` operation for guests.
   */
  mediumScreenRegistrationWizard?: Wizard;

  /**
   * The mobile app url in the Play store.
   */
  playStoreUrl?: string;

  /**
   * Groups that can be used for a public registration. Not returned for logged users. Also, not returned when a registration wizard is required.
   */
  publicRegistrationGroups?: Array<GroupForRegistration>;

  /**
   * A new key is generated after each server restart
   */
  resourceCacheKey?: string;

  /**
   * The main URL set in the configuration
   */
  rootUrl?: string;

  /**
   * The total number of webshop ads present in the shopping cart. Not returned for guests.
   */
  shoppingCartWebShopCount?: number;

  /**
   * Wizard which should be used for registration instead of the regular registration form, for clients with small screens (phones). When all `largeScreenRegistrationWizard`, `mediumScreenRegistrationWizard` and `smallScreenRegistrationWizard` are set, the regular registration form is disabled, as well as the `POST /users` operation for guests.
   */
  smallScreenRegistrationWizard?: Wizard;

  /**
   * The theme content (i.e the CSS or its components according). Only returned when changed or if the corresponding `themeIf` parameter was not specified.
   * The returned theme will be the following according to the UI kind:
   *
   * - `main`: If there is a logged user then the theme for
   *   users associated to the configuration. Otherwise the theme for guests;
   *
   * - `mobile`: only returned for guest;
   * - `pay`: The theme defined for the ticket / easy
   *   invoice confirmation application interface (it's the same for logged
   *   users and guests).
   */
  theme?: ThemeUiElement;

  /**
   * The pattern string used to format time.
   * The following are the letters used in each supported pattern:
   * * hh: The hour of the morning or afternoon (12-hour clock);
   * * HH: The hour of the day (24-hour clock);
   * * mm: The minute within the hour;
   * * a: Marker to idicate whether the hour (hh) is before or after noon.
   */
  timeFormat?: string;

  /**
   * The time zone ID set in the configuration (e.g `Europe/Amsterdam`)
   */
  timeZoneId?: string;
}
