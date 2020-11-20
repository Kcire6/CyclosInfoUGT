import { AdCategoryConfiguration } from 'app/ui/content/ad-category-configuration';
import { BannerCardsResolver } from 'app/ui/content/banner-cards-resolver';
import { BreakpointConfiguration } from 'app/ui/content/breakpoint-configuration';
import { ContentPagesResolver } from 'app/ui/content/content-pages-resolver';
import { ContentWithLayout } from 'app/ui/content/content-with-layout';
import { DashboardResolver } from 'app/ui/content/dashboard-resolver';
import { OperationConfiguration } from 'app/ui/content/operation-configuration';
import { WizardConfiguration } from 'app/ui/content/wizard-configuration';
import { RecordConfiguration } from 'app/ui/content/record-configuration';
import { ShortcutIconConfiguration } from 'app/ui/content/shortcut-icon-configuration';
import { Breakpoint } from 'app/core/layout.service';
import { BannerCard } from 'app/ui/content/banner-card';
import { ContentPage } from 'app/ui/content/content-page';

/**
 * The global configuration
 */
export interface ConfigurationDefinitions {
  /*
   * The root URL for the API. Either 'api' (without slashes) when using a proxy,
   * or the full URL (with protocol) to the Cyclos backend, ending with /api.
   */
  apiRoot: string;

  /** Application title */
  appTitle: string;

  /** Application title displayed on small devices */
  appTitleSmall: string;

  /** Application title displayed on the sidenav menu small devices */
  appTitleMenu: string;

  /** The application logo, displayed in the top bar */
  logoUrl: string;

  /**
   * A set of icons by resolution to be shown by browsers.
   * If nothing is set, defaults to the same as `logoUrl`.
   */
  shortcutIcons: ShortcutIconConfiguration[];

  /** Whether to use a separated menu bar (true) or merge the menu and top bar (false) */
  menuBar: boolean;

  /** Default page size for search results on extra small devixes */
  searchPageSizeXxs: number;

  /** Default page size for search results on mobile */
  searchPageSizeXs: number;

  /** Default page size for search results */
  searchPageSize: number;

  /** Custom configuration for media breakpoints */
  breakpoints: { [breakpoint in Breakpoint]?: BreakpointConfiguration };

  /** Custom configuration for ad categories, by category internal name */
  adCategories: { [internalName: string]: AdCategoryConfiguration };

  /** Custom configuration for records, by record type internal name */
  records: { [internalName: string]: RecordConfiguration };

  /** Custom configuration for custom operations, by operation internal name */
  operations: { [internalName: string]: OperationConfiguration };

  /** Custom configuration for wizards, by wizard internal name */
  wizards: { [internalName: string]: WizardConfiguration };

  /**
   * Identifier for a static locale. A static locale is compiled into the generated
   * JavaScript code, without needing to perform an additional request to fetch the
   * translations content.
   */
  staticLocale: string;

  /**
   * Object containing the translation values of the static translation
   */
  staticTranslations: any;

  /**
   * Either a fixed URL or a function that returns the URL that should be used to load the
   * translations of a given locale
   */
  translationUrl: string | ((locale: string) => string);

  /**
   * Locales available for translations
   */
  translationLocales: string[];

  /**
   * Whether translations should be cached on the local storage based on the compile-time hash
   */
  cacheTranslations: boolean;

  /**
   * Some systems use an external site to login users, then redirect the client with
   * the session token to Cyclos. When that is the case, this is the URL which contains
   * the external login form.
   */
  externalLoginUrl: string;

  /**
   * When using an external login, is the URL to where users are redirected after logging-out.
   */
  afterLogoutUrl: string;

  /**
   * For systems that use this frontend strictly to logged users, and not for guests, via an
   * external login page, this setting can be defined. In this case, whenever clients
   * attempts to access the frontend without being logged in, they will be redirected.
   */
  redirectGuests: string;

  /**
   * The content displayed on the home page for guests
   */
  homePage: ContentWithLayout;

  /**
   * The resolver for the dashboard elements
   */
  dashboard: DashboardResolver;

  /**
   * The resolver for content pages
   */
  contentPages: ContentPage[] | ContentPagesResolver;

  /**
   * The resolver for banners
   */
  banners: BannerCard[] | BannerCardsResolver;

  /**
   * The absolute URL for the main map marker icon.
   */
  mainMapMarker: string;

  /**
   * The absolute URL for the alternative map marker icon
   */
  altMapMarker: string;

}

/** The global configuration */
export const Configuration = {} as ConfigurationDefinitions;
