/* tslint:disable */
import { Injectable } from '@angular/core';
import { Translations } from "./translations";
import { BehaviorSubject } from 'rxjs';

/**
 * Translation messages accessor
 */
@Injectable()
export class I18n {

  /**
   * Locales for which translations should be available
   */
  static locales(): string[] {
    return [
      'en',
      'es',
      'nl',
      'pt_BR',
      'fr',
      'it'
    ];
  }

  /**
   * Returns the file name which contains the translations for the given locale
   */
  static fileName(locale: string): string {
    switch (locale) {
      case 'es': return 'i18n.es.json';
      case 'nl': return 'i18n.nl.json';
      case 'pt_BR': return 'i18n.pt_BR.json';
      case 'fr': return 'i18n.fr.json';
      case 'it': return 'i18n.it.json';
      default: return 'i18n.json';
    }
  }

  /**
   * Returns a hash for the file contents on the moment it was compiled
   */
  static contentHash(locale: string): string {
    switch (locale) {
      case 'es': return 'ae98d18d15dda0655ca89b0af4ae3e9032407181';
      case 'nl': return 'c933b6e01dd5097f8bff49adc156b35583a5bf27';
      case 'pt_BR': return '4b93a8f2cabd0054551dcf3e0ca16e087d8eaf6f';
      case 'fr': return '8b1d59c0edd56457f436ecbfc9b7009579b5ce7b';
      case 'it': return 'd97b28b4b32c82bb3d4411c71d2a10c808e655d1';
      default: return 'bb89d995e34cc678a826c74dcae95a2d834b5c2b';
    }
  }

  /** Indicates whether the translation values have been initialized **/
  initialized$ = new BehaviorSubject(false);

  private _translations: Translations = new Translations();

  private _nested = {
    general: new I18n$General(),
    error: new I18n$Error(),
    menu: new I18n$Menu(),
    login: new I18n$Login(),
    password: new I18n$Password(),
    pendingAgreements: new I18n$PendingAgreements(),
    securityQuestion: new I18n$SecurityQuestion(),
    dashboard: new I18n$Dashboard(),
    account: new I18n$Account(),
    transaction: new I18n$Transaction(),
    voucher: new I18n$Voucher(),
    field: new I18n$Field(),
    user: new I18n$User(),
    operatorGroup: new I18n$OperatorGroup(),
    userStatus: new I18n$UserStatus(),
    agreements: new I18n$Agreements(),
    groupMembership: new I18n$GroupMembership(),
    brokers: new I18n$Brokers(),
    phone: new I18n$Phone(),
    address: new I18n$Address(),
    ad: new I18n$Ad(),
    notification: new I18n$Notification(),
    notificationSettings: new I18n$NotificationSettings(),
    connectedUser: new I18n$ConnectedUser(),
    identityProvider: new I18n$IdentityProvider(),
    operation: new I18n$Operation(),
    wizard: new I18n$Wizard(),
    setting: new I18n$Setting(),
    privacySettings: new I18n$PrivacySettings(),
    record: new I18n$Record(),
    userAlert: new I18n$UserAlert(),
    systemAlert: new I18n$SystemAlert(),
    document: new I18n$Document(),
    token: new I18n$Token(),
    reference: new I18n$Reference(),
    product: new I18n$Product()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.general.defaultValues = defaultValues['general'];
    this._nested.error.defaultValues = defaultValues['error'];
    this._nested.menu.defaultValues = defaultValues['menu'];
    this._nested.login.defaultValues = defaultValues['login'];
    this._nested.password.defaultValues = defaultValues['password'];
    this._nested.pendingAgreements.defaultValues = defaultValues['pendingAgreements'];
    this._nested.securityQuestion.defaultValues = defaultValues['securityQuestion'];
    this._nested.dashboard.defaultValues = defaultValues['dashboard'];
    this._nested.account.defaultValues = defaultValues['account'];
    this._nested.transaction.defaultValues = defaultValues['transaction'];
    this._nested.voucher.defaultValues = defaultValues['voucher'];
    this._nested.field.defaultValues = defaultValues['field'];
    this._nested.user.defaultValues = defaultValues['user'];
    this._nested.operatorGroup.defaultValues = defaultValues['operatorGroup'];
    this._nested.userStatus.defaultValues = defaultValues['userStatus'];
    this._nested.agreements.defaultValues = defaultValues['agreements'];
    this._nested.groupMembership.defaultValues = defaultValues['groupMembership'];
    this._nested.brokers.defaultValues = defaultValues['brokers'];
    this._nested.phone.defaultValues = defaultValues['phone'];
    this._nested.address.defaultValues = defaultValues['address'];
    this._nested.ad.defaultValues = defaultValues['ad'];
    this._nested.notification.defaultValues = defaultValues['notification'];
    this._nested.notificationSettings.defaultValues = defaultValues['notificationSettings'];
    this._nested.connectedUser.defaultValues = defaultValues['connectedUser'];
    this._nested.identityProvider.defaultValues = defaultValues['identityProvider'];
    this._nested.operation.defaultValues = defaultValues['operation'];
    this._nested.wizard.defaultValues = defaultValues['wizard'];
    this._nested.setting.defaultValues = defaultValues['setting'];
    this._nested.privacySettings.defaultValues = defaultValues['privacySettings'];
    this._nested.record.defaultValues = defaultValues['record'];
    this._nested.userAlert.defaultValues = defaultValues['userAlert'];
    this._nested.systemAlert.defaultValues = defaultValues['systemAlert'];
    this._nested.document.defaultValues = defaultValues['document'];
    this._nested.token.defaultValues = defaultValues['token'];
    this._nested.reference.defaultValues = defaultValues['reference'];
    this._nested.product.defaultValues = defaultValues['product'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.general.initialize(values['general']);
    this._nested.error.initialize(values['error']);
    this._nested.menu.initialize(values['menu']);
    this._nested.login.initialize(values['login']);
    this._nested.password.initialize(values['password']);
    this._nested.pendingAgreements.initialize(values['pendingAgreements']);
    this._nested.securityQuestion.initialize(values['securityQuestion']);
    this._nested.dashboard.initialize(values['dashboard']);
    this._nested.account.initialize(values['account']);
    this._nested.transaction.initialize(values['transaction']);
    this._nested.voucher.initialize(values['voucher']);
    this._nested.field.initialize(values['field']);
    this._nested.user.initialize(values['user']);
    this._nested.operatorGroup.initialize(values['operatorGroup']);
    this._nested.userStatus.initialize(values['userStatus']);
    this._nested.agreements.initialize(values['agreements']);
    this._nested.groupMembership.initialize(values['groupMembership']);
    this._nested.brokers.initialize(values['brokers']);
    this._nested.phone.initialize(values['phone']);
    this._nested.address.initialize(values['address']);
    this._nested.ad.initialize(values['ad']);
    this._nested.notification.initialize(values['notification']);
    this._nested.notificationSettings.initialize(values['notificationSettings']);
    this._nested.connectedUser.initialize(values['connectedUser']);
    this._nested.identityProvider.initialize(values['identityProvider']);
    this._nested.operation.initialize(values['operation']);
    this._nested.wizard.initialize(values['wizard']);
    this._nested.setting.initialize(values['setting']);
    this._nested.privacySettings.initialize(values['privacySettings']);
    this._nested.record.initialize(values['record']);
    this._nested.userAlert.initialize(values['userAlert']);
    this._nested.systemAlert.initialize(values['systemAlert']);
    this._nested.document.initialize(values['document']);
    this._nested.token.initialize(values['token']);
    this._nested.reference.initialize(values['reference']);
    this._nested.product.initialize(values['product']);
    this.initialized$.next(true);
  }

  /**
   * Returns the nested accessor for translation messages in `general`.
   */
  get general(): I18n$General {
    return this._nested.general;
  }

  /**
   * Returns the nested accessor for translation messages in `error`.
   */
  get error(): I18n$Error {
    return this._nested.error;
  }

  /**
   * Returns the nested accessor for translation messages in `menu`.
   */
  get menu(): I18n$Menu {
    return this._nested.menu;
  }

  /**
   * Returns the nested accessor for translation messages in `login`.
   */
  get login(): I18n$Login {
    return this._nested.login;
  }

  /**
   * Returns the nested accessor for translation messages in `password`.
   */
  get password(): I18n$Password {
    return this._nested.password;
  }

  /**
   * Returns the nested accessor for translation messages in `pendingAgreements`.
   */
  get pendingAgreements(): I18n$PendingAgreements {
    return this._nested.pendingAgreements;
  }

  /**
   * Returns the nested accessor for translation messages in `securityQuestion`.
   */
  get securityQuestion(): I18n$SecurityQuestion {
    return this._nested.securityQuestion;
  }

  /**
   * Returns the nested accessor for translation messages in `dashboard`.
   */
  get dashboard(): I18n$Dashboard {
    return this._nested.dashboard;
  }

  /**
   * Returns the nested accessor for translation messages in `account`.
   */
  get account(): I18n$Account {
    return this._nested.account;
  }

  /**
   * Returns the nested accessor for translation messages in `transaction`.
   */
  get transaction(): I18n$Transaction {
    return this._nested.transaction;
  }

  /**
   * Returns the nested accessor for translation messages in `voucher`.
   */
  get voucher(): I18n$Voucher {
    return this._nested.voucher;
  }

  /**
   * Returns the nested accessor for translation messages in `field`.
   */
  get field(): I18n$Field {
    return this._nested.field;
  }

  /**
   * Returns the nested accessor for translation messages in `user`.
   */
  get user(): I18n$User {
    return this._nested.user;
  }

  /**
   * Returns the nested accessor for translation messages in `operatorGroup`.
   */
  get operatorGroup(): I18n$OperatorGroup {
    return this._nested.operatorGroup;
  }

  /**
   * Returns the nested accessor for translation messages in `userStatus`.
   */
  get userStatus(): I18n$UserStatus {
    return this._nested.userStatus;
  }

  /**
   * Returns the nested accessor for translation messages in `agreements`.
   */
  get agreements(): I18n$Agreements {
    return this._nested.agreements;
  }

  /**
   * Returns the nested accessor for translation messages in `groupMembership`.
   */
  get groupMembership(): I18n$GroupMembership {
    return this._nested.groupMembership;
  }

  /**
   * Returns the nested accessor for translation messages in `brokers`.
   */
  get brokers(): I18n$Brokers {
    return this._nested.brokers;
  }

  /**
   * Returns the nested accessor for translation messages in `phone`.
   */
  get phone(): I18n$Phone {
    return this._nested.phone;
  }

  /**
   * Returns the nested accessor for translation messages in `address`.
   */
  get address(): I18n$Address {
    return this._nested.address;
  }

  /**
   * Returns the nested accessor for translation messages in `ad`.
   */
  get ad(): I18n$Ad {
    return this._nested.ad;
  }

  /**
   * Returns the nested accessor for translation messages in `notification`.
   */
  get notification(): I18n$Notification {
    return this._nested.notification;
  }

  /**
   * Returns the nested accessor for translation messages in `notificationSettings`.
   */
  get notificationSettings(): I18n$NotificationSettings {
    return this._nested.notificationSettings;
  }

  /**
   * Returns the nested accessor for translation messages in `connectedUser`.
   */
  get connectedUser(): I18n$ConnectedUser {
    return this._nested.connectedUser;
  }

  /**
   * Returns the nested accessor for translation messages in `identityProvider`.
   */
  get identityProvider(): I18n$IdentityProvider {
    return this._nested.identityProvider;
  }

  /**
   * Returns the nested accessor for translation messages in `operation`.
   */
  get operation(): I18n$Operation {
    return this._nested.operation;
  }

  /**
   * Returns the nested accessor for translation messages in `wizard`.
   */
  get wizard(): I18n$Wizard {
    return this._nested.wizard;
  }

  /**
   * Returns the nested accessor for translation messages in `setting`.
   */
  get setting(): I18n$Setting {
    return this._nested.setting;
  }

  /**
   * Returns the nested accessor for translation messages in `privacySettings`.
   */
  get privacySettings(): I18n$PrivacySettings {
    return this._nested.privacySettings;
  }

  /**
   * Returns the nested accessor for translation messages in `record`.
   */
  get record(): I18n$Record {
    return this._nested.record;
  }

  /**
   * Returns the nested accessor for translation messages in `userAlert`.
   */
  get userAlert(): I18n$UserAlert {
    return this._nested.userAlert;
  }

  /**
   * Returns the nested accessor for translation messages in `systemAlert`.
   */
  get systemAlert(): I18n$SystemAlert {
    return this._nested.systemAlert;
  }

  /**
   * Returns the nested accessor for translation messages in `document`.
   */
  get document(): I18n$Document {
    return this._nested.document;
  }

  /**
   * Returns the nested accessor for translation messages in `token`.
   */
  get token(): I18n$Token {
    return this._nested.token;
  }

  /**
   * Returns the nested accessor for translation messages in `reference`.
   */
  get reference(): I18n$Reference {
    return this._nested.reference;
  }

  /**
   * Returns the nested accessor for translation messages in `product`.
   */
  get product(): I18n$Product {
    return this._nested.product;
  }
}

export class I18n$General {

  private _translations: Translations = new Translations('general');

  private _nested = {
    sendMedium: new I18n$General$SendMedium(),
    sessionExpired: new I18n$General$SessionExpired(),
    datePart: new I18n$General$DatePart(),
    month: new I18n$General$Month(),
    timeField: new I18n$General$TimeField(),
    weekday: new I18n$General$Weekday(),
    range: new I18n$General$Range(),
    fileSize: new I18n$General$FileSize(),
    results: new I18n$General$Results(),
    geolocation: new I18n$General$Geolocation()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.sendMedium.defaultValues = defaultValues['sendMedium'];
    this._nested.sessionExpired.defaultValues = defaultValues['sessionExpired'];
    this._nested.datePart.defaultValues = defaultValues['datePart'];
    this._nested.month.defaultValues = defaultValues['month'];
    this._nested.timeField.defaultValues = defaultValues['timeField'];
    this._nested.weekday.defaultValues = defaultValues['weekday'];
    this._nested.range.defaultValues = defaultValues['range'];
    this._nested.fileSize.defaultValues = defaultValues['fileSize'];
    this._nested.results.defaultValues = defaultValues['results'];
    this._nested.geolocation.defaultValues = defaultValues['geolocation'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.sendMedium.initialize(values['sendMedium']);
    this._nested.sessionExpired.initialize(values['sessionExpired']);
    this._nested.datePart.initialize(values['datePart']);
    this._nested.month.initialize(values['month']);
    this._nested.timeField.initialize(values['timeField']);
    this._nested.weekday.initialize(values['weekday']);
    this._nested.range.initialize(values['range']);
    this._nested.fileSize.initialize(values['fileSize']);
    this._nested.results.initialize(values['results']);
    this._nested.geolocation.initialize(values['geolocation']);
  }

  /**
   * Returns the value of translation message for key `by`.
   * Default value: `By`
   */
  get by(): string {
    return this._translations.get('by');
  }

  /**
   * Returns the value of translation message for key `changedBy`.
   * Default value: `Changed by`
   */
  get changedBy(): string {
    return this._translations.get('changedBy');
  }

  /**
   * Returns the value of translation message for key `type`.
   * Default value: `Type`
   */
  get type(): string {
    return this._translations.get('type');
  }

  /**
   * Returns the value of translation message for key `code`.
   * Default value: `Code`
   */
  get code(): string {
    return this._translations.get('code');
  }

  /**
   * Returns the value of translation message for key `period`.
   * Default value: `Period`
   */
  get period(): string {
    return this._translations.get('period');
  }

  /**
   * Returns the value of translation message for key `period.to`.
   * Default value: `to`
   */
  get periodTo(): string {
    return this._translations.get('period.to');
  }

  /**
   * Returns the value of translation message for key `now`.
   * Default value: `Now`
   */
  get now(): string {
    return this._translations.get('now');
  }

  /**
   * Returns the value of translation message for key `action`.
   * Default value: `Action`
   */
  get action(): string {
    return this._translations.get('action');
  }

  /**
   * Returns the value of translation message for key `actions`.
   * Default value: `Actions`
   */
  get actions(): string {
    return this._translations.get('actions');
  }

  /**
   * Returns the value of translation message for key `add`.
   * Default value: `Add`
   */
  get add(): string {
    return this._translations.get('add');
  }

  /**
   * Returns the value of translation message for key `date`.
   * Default value: `Date`
   */
  get date(): string {
    return this._translations.get('date');
  }

  /**
   * Returns the value of translation message for key `performedBy`.
   * Default value: `Performed by`
   */
  get performedBy(): string {
    return this._translations.get('performedBy');
  }

  /**
   * Returns the value of translation message for key `status`.
   * Default value: `Status`
   */
  get status(): string {
    return this._translations.get('status');
  }

  /**
   * Returns the value of translation message for key `comments`.
   * Default value: `Comments`
   */
  get comments(): string {
    return this._translations.get('comments');
  }

  /**
   * Returns the value of translation message for key `futureDate`.
   * Default value: `Future date`
   */
  get futureDate(): string {
    return this._translations.get('futureDate');
  }

  /**
   * Returns the value of translation message for key `beginDate`.
   * Default value: `Begin date`
   */
  get beginDate(): string {
    return this._translations.get('beginDate');
  }

  /**
   * Returns the value of translation message for key `endDate`.
   * Default value: `End date`
   */
  get endDate(): string {
    return this._translations.get('endDate');
  }

  /**
   * Returns the value of translation message for key `creationDate`.
   * Default value: `Creation date`
   */
  get creationDate(): string {
    return this._translations.get('creationDate');
  }

  /**
   * Returns the value of translation message for key `expirationDate`.
   * Default value: `Expiration date`
   */
  get expirationDate(): string {
    return this._translations.get('expirationDate');
  }

  /**
   * Returns the value of translation message for key `expirationBeginDate`.
   * Default value: `Expiration begin date`
   */
  get expirationBeginDate(): string {
    return this._translations.get('expirationBeginDate');
  }

  /**
   * Returns the value of translation message for key `expirationEndDate`.
   * Default value: `Expiration end date`
   */
  get expirationEndDate(): string {
    return this._translations.get('expirationEndDate');
  }

  /**
   * Returns the value of translation message for key `newExpirationDate`.
   * Default value: `New expiration date`
   */
  get newExpirationDate(): string {
    return this._translations.get('newExpirationDate');
  }

  /**
   * Returns the value of translation message for key `notApplied`.
   * Default value: `Not applied`
   */
  get notApplied(): string {
    return this._translations.get('notApplied');
  }

  /**
   * Returns the value of translation message for key `notAppliedSelect`.
   * Default value: `Not applied (select to apply)`
   */
  get notAppliedSelect(): string {
    return this._translations.get('notAppliedSelect');
  }

  /**
   * Returns the value of translation message for key `user`.
   * Default value: `User`
   */
  get user(): string {
    return this._translations.get('user');
  }

  /**
   * Returns the value of translation message for key `operator`.
   * Default value: `Operator`
   */
  get operator(): string {
    return this._translations.get('operator');
  }

  /**
   * Returns the value of translation message for key `name`.
   * Default value: `Name`
   */
  get name(): string {
    return this._translations.get('name');
  }

  /**
   * Returns the value of translation message for key `to`.
   * Default value: `to`
   */
  get to(): string {
    return this._translations.get('to');
  }

  /**
   * Returns the value of translation message for key `description`.
   * Default value: `Description`
   */
  get description(): string {
    return this._translations.get('description');
  }

  /**
   * Returns the value of translation message for key `details`.
   * Default value: `Details`
   */
  get details(): string {
    return this._translations.get('details');
  }

  /**
   * Returns the value of translation message for key `download`.
   * Default value: `Download`
   */
  get download(): string {
    return this._translations.get('download');
  }

  /**
   * Returns the value of translation message for key `downloadAs`.
   * Default value: `Download as {format}`
   */
  downloadAs(format: string | number): string {
    return this._translations.get('downloadAs', {
      format: format
    });
  }

  /**
   * Returns the value of translation message for key `image`.
   * Default value: `Image`
   */
  get image(): string {
    return this._translations.get('image');
  }

  /**
   * Returns the value of translation message for key `keywords`.
   * Default value: `Keywords`
   */
  get keywords(): string {
    return this._translations.get('keywords');
  }

  /**
   * Returns the value of translation message for key `distanceFilter`.
   * Default value: `Distance`
   */
  get distanceFilter(): string {
    return this._translations.get('distanceFilter');
  }

  /**
   * Returns the value of translation message for key `orderBy`.
   * Default value: `Order by`
   */
  get orderBy(): string {
    return this._translations.get('orderBy');
  }

  /**
   * Returns the value of translation message for key `orderBy.relevance`.
   * Default value: `Relevance`
   */
  get orderByRelevance(): string {
    return this._translations.get('orderBy.relevance');
  }

  /**
   * Returns the value of translation message for key `print`.
   * Default value: `Print`
   */
  get print(): string {
    return this._translations.get('print');
  }

  /**
   * Returns the value of translation message for key `printed`.
   * Default value: `Printed`
   */
  get printed(): string {
    return this._translations.get('printed');
  }

  /**
   * Returns the value of translation message for key `all`.
   * Default value: `All`
   */
  get all(): string {
    return this._translations.get('all');
  }

  /**
   * Returns the value of translation message for key `copyToClipboard`.
   * Default value: `Copy to clipboard`
   */
  get copyToClipboard(): string {
    return this._translations.get('copyToClipboard');
  }

  /**
   * Returns the value of translation message for key `copyToClipboard.done`.
   * Default value: `Copied!`
   */
  get copyToClipboardDone(): string {
    return this._translations.get('copyToClipboard.done');
  }

  /**
   * Returns the value of translation message for key `showFilters`.
   * Default value: `Show filters`
   */
  get showFilters(): string {
    return this._translations.get('showFilters');
  }

  /**
   * Returns the value of translation message for key `hideFilters`.
   * Default value: `Hide filters`
   */
  get hideFilters(): string {
    return this._translations.get('hideFilters');
  }

  /**
   * Returns the value of translation message for key `moreFilters`.
   * Default value: `More filters`
   */
  get moreFilters(): string {
    return this._translations.get('moreFilters');
  }

  /**
   * Returns the value of translation message for key `showMoreFilters`.
   * Default value: `Show more filters`
   */
  get showMoreFilters(): string {
    return this._translations.get('showMoreFilters');
  }

  /**
   * Returns the value of translation message for key `lessFilters`.
   * Default value: `Less filters`
   */
  get lessFilters(): string {
    return this._translations.get('lessFilters');
  }

  /**
   * Returns the value of translation message for key `showLessFilters`.
   * Default value: `Show less filters`
   */
  get showLessFilters(): string {
    return this._translations.get('showLessFilters');
  }

  /**
   * Returns the value of translation message for key `enabled`.
   * Default value: `Enabled`
   */
  get enabled(): string {
    return this._translations.get('enabled');
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `Disabled`
   */
  get disabled(): string {
    return this._translations.get('disabled');
  }

  /**
   * Returns the value of translation message for key `back`.
   * Default value: `Back`
   */
  get back(): string {
    return this._translations.get('back');
  }

  /**
   * Returns the value of translation message for key `previous`.
   * Default value: `Previous`
   */
  get previous(): string {
    return this._translations.get('previous');
  }

  /**
   * Returns the value of translation message for key `next`.
   * Default value: `Next`
   */
  get next(): string {
    return this._translations.get('next');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `View`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `skip`.
   * Default value: `Skip`
   */
  get skip(): string {
    return this._translations.get('skip');
  }

  /**
   * Returns the value of translation message for key `viewHistory`.
   * Default value: `View history`
   */
  get viewHistory(): string {
    return this._translations.get('viewHistory');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `confirm`.
   * Default value: `Confirm`
   */
  get confirm(): string {
    return this._translations.get('confirm');
  }

  /**
   * Returns the value of translation message for key `cancel`.
   * Default value: `Cancel`
   */
  get cancel(): string {
    return this._translations.get('cancel');
  }

  /**
   * Returns the value of translation message for key `close`.
   * Default value: `Close`
   */
  get close(): string {
    return this._translations.get('close');
  }

  /**
   * Returns the value of translation message for key `submit`.
   * Default value: `Submit`
   */
  get submit(): string {
    return this._translations.get('submit');
  }

  /**
   * Returns the value of translation message for key `finish`.
   * Default value: `Finish`
   */
  get finish(): string {
    return this._translations.get('finish');
  }

  /**
   * Returns the value of translation message for key `remove`.
   * Default value: `Remove`
   */
  get remove(): string {
    return this._translations.get('remove');
  }

  /**
   * Returns the value of translation message for key `remove.confirm`.
   * Default value: `Are you sure to remove the item {item}?`
   */
  removeConfirm(item: string | number): string {
    return this._translations.get('remove.confirm', {
      item: item
    });
  }

  /**
   * Returns the value of translation message for key `remove.done`.
   * Default value: `The item {item} was removed`
   */
  removeDone(item: string | number): string {
    return this._translations.get('remove.done', {
      item: item
    });
  }

  /**
   * Returns the value of translation message for key `remove.tooltip`.
   * Default value: `Remove {item}`
   */
  removeTooltip(item: string | number): string {
    return this._translations.get('remove.tooltip', {
      item: item
    });
  }

  /**
   * Returns the value of translation message for key `remoteAddress`.
   * Default value: `IP address`
   */
  get remoteAddress(): string {
    return this._translations.get('remoteAddress');
  }

  /**
   * Returns the value of translation message for key `save`.
   * Default value: `Save`
   */
  get save(): string {
    return this._translations.get('save');
  }

  /**
   * Returns the value of translation message for key `addNew`.
   * Default value: `Add new`
   */
  get addNew(): string {
    return this._translations.get('addNew');
  }

  /**
   * Returns the value of translation message for key `yes`.
   * Default value: `Yes`
   */
  get yes(): string {
    return this._translations.get('yes');
  }

  /**
   * Returns the value of translation message for key `no`.
   * Default value: `No`
   */
  get no(): string {
    return this._translations.get('no');
  }

  /**
   * Returns the value of translation message for key `notSet`.
   * Default value: `Not set`
   */
  get notSet(): string {
    return this._translations.get('notSet');
  }

  /**
   * Returns the value of translation message for key `share`.
   * Default value: `Share`
   */
  get share(): string {
    return this._translations.get('share');
  }

  /**
   * Returns the value of translation message for key `map`.
   * Default value: `Map`
   */
  get map(): string {
    return this._translations.get('map');
  }

  /**
   * Returns the value of translation message for key `map.view`.
   * Default value: `View map`
   */
  get mapView(): string {
    return this._translations.get('map.view');
  }

  /**
   * Returns the value of translation message for key `noOptionsSelected`.
   * Default value: `No options selected`
   */
  get noOptionsSelected(): string {
    return this._translations.get('noOptionsSelected');
  }

  /**
   * Returns the value of translation message for key `noOptionSelected`.
   * Default value: `No option selected`
   */
  get noOptionSelected(): string {
    return this._translations.get('noOptionSelected');
  }

  /**
   * Returns the value of translation message for key `removeItemConfirm`.
   * Default value: `Are you sure to remove this item?`
   */
  get removeItemConfirm(): string {
    return this._translations.get('removeItemConfirm');
  }

  /**
   * Returns the value of translation message for key `removeItemDone`.
   * Default value: `The item has been removed`
   */
  get removeItemDone(): string {
    return this._translations.get('removeItemDone');
  }

  /**
   * Returns the value of translation message for key `currency`.
   * Default value: `Currency`
   */
  get currency(): string {
    return this._translations.get('currency');
  }

  /**
   * Returns the value of translation message for key `images`.
   * Default value: `Images`
   */
  get images(): string {
    return this._translations.get('images');
  }

  /**
   * Returns the value of translation message for key `usersOfBroker`.
   * Default value: `Users of the broker`
   */
  get usersOfBroker(): string {
    return this._translations.get('usersOfBroker');
  }

  /**
   * Returns the value of translation message for key `sendCode`.
   * Default value: `Send code`
   */
  get sendCode(): string {
    return this._translations.get('sendCode');
  }

  /**
   * Returns the value of translation message for key `sentCodeTo`.
   * Default value: `The verification code was sent to {to}`
   */
  sentCodeTo(to: string | number): string {
    return this._translations.get('sentCodeTo', {
      to: to
    });
  }

  /**
   * Returns the value of translation message for key `reloadPage`.
   * Default value: `Reload page`
   */
  get reloadPage(): string {
    return this._translations.get('reloadPage');
  }

  /**
   * Returns the value of translation message for key `rangeTo`.
   * Default value: `to`
   */
  get rangeTo(): string {
    return this._translations.get('rangeTo');
  }

  /**
   * Returns the nested accessor for translation messages in `sendMedium`.
   */
  get sendMedium(): I18n$General$SendMedium {
    return this._nested.sendMedium;
  }

  /**
   * Returns the nested accessor for translation messages in `sessionExpired`.
   */
  get sessionExpired(): I18n$General$SessionExpired {
    return this._nested.sessionExpired;
  }

  /**
   * Returns the nested accessor for translation messages in `datePart`.
   */
  get datePart(): I18n$General$DatePart {
    return this._nested.datePart;
  }

  /**
   * Returns the nested accessor for translation messages in `month`.
   */
  get month(): I18n$General$Month {
    return this._nested.month;
  }

  /**
   * Returns the nested accessor for translation messages in `timeField`.
   */
  get timeField(): I18n$General$TimeField {
    return this._nested.timeField;
  }

  /**
   * Returns the nested accessor for translation messages in `weekday`.
   */
  get weekday(): I18n$General$Weekday {
    return this._nested.weekday;
  }

  /**
   * Returns the nested accessor for translation messages in `range`.
   */
  get range(): I18n$General$Range {
    return this._nested.range;
  }

  /**
   * Returns the nested accessor for translation messages in `fileSize`.
   */
  get fileSize(): I18n$General$FileSize {
    return this._nested.fileSize;
  }

  /**
   * Returns the nested accessor for translation messages in `results`.
   */
  get results(): I18n$General$Results {
    return this._nested.results;
  }

  /**
   * Returns the nested accessor for translation messages in `geolocation`.
   */
  get geolocation(): I18n$General$Geolocation {
    return this._nested.geolocation;
  }
}

export class I18n$General$SendMedium {

  private _translations: Translations = new Translations('general.sendMedium');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `email`.
   * Default value: `E-mail`
   */
  get email(): string {
    return this._translations.get('email');
  }

  /**
   * Returns the value of translation message for key `sms`.
   * Default value: `SMS`
   */
  get sms(): string {
    return this._translations.get('sms');
  }
}

export class I18n$General$SessionExpired {

  private _translations: Translations = new Translations('general.sessionExpired');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Session expired`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `message`.
   * Default value: `You have been logged-out.<br>You can keep viewing the same page or login again now.`
   */
  get message(): string {
    return this._translations.get('message');
  }

  /**
   * Returns the value of translation message for key `loginAgain`.
   * Default value: `Login again`
   */
  get loginAgain(): string {
    return this._translations.get('loginAgain');
  }
}

export class I18n$General$DatePart {

  private _translations: Translations = new Translations('general.datePart');

  private _nested = {
    long: new I18n$General$DatePart$Long()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.long.defaultValues = defaultValues['long'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.long.initialize(values['long']);
  }

  /**
   * Returns the nested accessor for translation messages in `long`.
   */
  get long(): I18n$General$DatePart$Long {
    return this._nested.long;
  }
}

export class I18n$General$DatePart$Long {

  private _translations: Translations = new Translations('general.datePart.long');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `year`.
   * Default value: `Year`
   */
  get year(): string {
    return this._translations.get('year');
  }

  /**
   * Returns the value of translation message for key `month`.
   * Default value: `Month`
   */
  get month(): string {
    return this._translations.get('month');
  }

  /**
   * Returns the value of translation message for key `day`.
   * Default value: `Day`
   */
  get day(): string {
    return this._translations.get('day');
  }
}

export class I18n$General$Month {

  private _translations: Translations = new Translations('general.month');

  private _nested = {
    long: new I18n$General$Month$Long(),
    short: new I18n$General$Month$Short()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.long.defaultValues = defaultValues['long'];
    this._nested.short.defaultValues = defaultValues['short'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.long.initialize(values['long']);
    this._nested.short.initialize(values['short']);
  }

  /**
   * Returns the nested accessor for translation messages in `long`.
   */
  get long(): I18n$General$Month$Long {
    return this._nested.long;
  }

  /**
   * Returns the nested accessor for translation messages in `short`.
   */
  get short(): I18n$General$Month$Short {
    return this._nested.short;
  }
}

export class I18n$General$Month$Long {

  private _translations: Translations = new Translations('general.month.long');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `jan`.
   * Default value: `January`
   */
  get jan(): string {
    return this._translations.get('jan');
  }

  /**
   * Returns the value of translation message for key `feb`.
   * Default value: `February`
   */
  get feb(): string {
    return this._translations.get('feb');
  }

  /**
   * Returns the value of translation message for key `mar`.
   * Default value: `March`
   */
  get mar(): string {
    return this._translations.get('mar');
  }

  /**
   * Returns the value of translation message for key `apr`.
   * Default value: `April`
   */
  get apr(): string {
    return this._translations.get('apr');
  }

  /**
   * Returns the value of translation message for key `may`.
   * Default value: `May`
   */
  get may(): string {
    return this._translations.get('may');
  }

  /**
   * Returns the value of translation message for key `jun`.
   * Default value: `June`
   */
  get jun(): string {
    return this._translations.get('jun');
  }

  /**
   * Returns the value of translation message for key `jul`.
   * Default value: `July`
   */
  get jul(): string {
    return this._translations.get('jul');
  }

  /**
   * Returns the value of translation message for key `aug`.
   * Default value: `August`
   */
  get aug(): string {
    return this._translations.get('aug');
  }

  /**
   * Returns the value of translation message for key `sep`.
   * Default value: `September`
   */
  get sep(): string {
    return this._translations.get('sep');
  }

  /**
   * Returns the value of translation message for key `oct`.
   * Default value: `October`
   */
  get oct(): string {
    return this._translations.get('oct');
  }

  /**
   * Returns the value of translation message for key `nov`.
   * Default value: `November`
   */
  get nov(): string {
    return this._translations.get('nov');
  }

  /**
   * Returns the value of translation message for key `dec`.
   * Default value: `December`
   */
  get dec(): string {
    return this._translations.get('dec');
  }
}

export class I18n$General$Month$Short {

  private _translations: Translations = new Translations('general.month.short');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `jan`.
   * Default value: `Jan`
   */
  get jan(): string {
    return this._translations.get('jan');
  }

  /**
   * Returns the value of translation message for key `feb`.
   * Default value: `Feb`
   */
  get feb(): string {
    return this._translations.get('feb');
  }

  /**
   * Returns the value of translation message for key `mar`.
   * Default value: `Mar`
   */
  get mar(): string {
    return this._translations.get('mar');
  }

  /**
   * Returns the value of translation message for key `apr`.
   * Default value: `Apr`
   */
  get apr(): string {
    return this._translations.get('apr');
  }

  /**
   * Returns the value of translation message for key `may`.
   * Default value: `May`
   */
  get may(): string {
    return this._translations.get('may');
  }

  /**
   * Returns the value of translation message for key `jun`.
   * Default value: `Jun`
   */
  get jun(): string {
    return this._translations.get('jun');
  }

  /**
   * Returns the value of translation message for key `jul`.
   * Default value: `Jul`
   */
  get jul(): string {
    return this._translations.get('jul');
  }

  /**
   * Returns the value of translation message for key `aug`.
   * Default value: `Aug`
   */
  get aug(): string {
    return this._translations.get('aug');
  }

  /**
   * Returns the value of translation message for key `sep`.
   * Default value: `Sep`
   */
  get sep(): string {
    return this._translations.get('sep');
  }

  /**
   * Returns the value of translation message for key `oct`.
   * Default value: `Oct`
   */
  get oct(): string {
    return this._translations.get('oct');
  }

  /**
   * Returns the value of translation message for key `nov`.
   * Default value: `Nov`
   */
  get nov(): string {
    return this._translations.get('nov');
  }

  /**
   * Returns the value of translation message for key `dec`.
   * Default value: `Dec`
   */
  get dec(): string {
    return this._translations.get('dec');
  }
}

export class I18n$General$TimeField {

  private _translations: Translations = new Translations('general.timeField');

  private _nested = {
    plural: new I18n$General$TimeField$Plural(),
    singular: new I18n$General$TimeField$Singular()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.plural.defaultValues = defaultValues['plural'];
    this._nested.singular.defaultValues = defaultValues['singular'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.plural.initialize(values['plural']);
    this._nested.singular.initialize(values['singular']);
  }

  /**
   * Returns the value of translation message for key `pattern`.
   * Default value: `{amount} {field}`
   */
  pattern($: {amount: string | number, field: string | number}): string {
    return this._translations.get('pattern', {
      amount: $.amount,
      field: $.field
    });
  }

  /**
   * Returns the nested accessor for translation messages in `plural`.
   */
  get plural(): I18n$General$TimeField$Plural {
    return this._nested.plural;
  }

  /**
   * Returns the nested accessor for translation messages in `singular`.
   */
  get singular(): I18n$General$TimeField$Singular {
    return this._nested.singular;
  }
}

export class I18n$General$TimeField$Plural {

  private _translations: Translations = new Translations('general.timeField.plural');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `days`.
   * Default value: `Days`
   */
  get days(): string {
    return this._translations.get('days');
  }

  /**
   * Returns the value of translation message for key `hours`.
   * Default value: `Hours`
   */
  get hours(): string {
    return this._translations.get('hours');
  }

  /**
   * Returns the value of translation message for key `millis`.
   * Default value: `Milliseconds`
   */
  get millis(): string {
    return this._translations.get('millis');
  }

  /**
   * Returns the value of translation message for key `minutes`.
   * Default value: `Minutes`
   */
  get minutes(): string {
    return this._translations.get('minutes');
  }

  /**
   * Returns the value of translation message for key `months`.
   * Default value: `Months`
   */
  get months(): string {
    return this._translations.get('months');
  }

  /**
   * Returns the value of translation message for key `seconds`.
   * Default value: `Seconds`
   */
  get seconds(): string {
    return this._translations.get('seconds');
  }

  /**
   * Returns the value of translation message for key `weeks`.
   * Default value: `Weeks`
   */
  get weeks(): string {
    return this._translations.get('weeks');
  }

  /**
   * Returns the value of translation message for key `years`.
   * Default value: `Years`
   */
  get years(): string {
    return this._translations.get('years');
  }
}

export class I18n$General$TimeField$Singular {

  private _translations: Translations = new Translations('general.timeField.singular');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `day`.
   * Default value: `Day`
   */
  get day(): string {
    return this._translations.get('day');
  }

  /**
   * Returns the value of translation message for key `hour`.
   * Default value: `Hour`
   */
  get hour(): string {
    return this._translations.get('hour');
  }

  /**
   * Returns the value of translation message for key `milli`.
   * Default value: `Millisecond`
   */
  get milli(): string {
    return this._translations.get('milli');
  }

  /**
   * Returns the value of translation message for key `minute`.
   * Default value: `Minute`
   */
  get minute(): string {
    return this._translations.get('minute');
  }

  /**
   * Returns the value of translation message for key `month`.
   * Default value: `Month`
   */
  get month(): string {
    return this._translations.get('month');
  }

  /**
   * Returns the value of translation message for key `second`.
   * Default value: `Second`
   */
  get second(): string {
    return this._translations.get('second');
  }

  /**
   * Returns the value of translation message for key `week`.
   * Default value: `Week`
   */
  get week(): string {
    return this._translations.get('week');
  }

  /**
   * Returns the value of translation message for key `year`.
   * Default value: `Year`
   */
  get year(): string {
    return this._translations.get('year');
  }
}

export class I18n$General$Weekday {

  private _translations: Translations = new Translations('general.weekday');

  private _nested = {
    min: new I18n$General$Weekday$Min(),
    long: new I18n$General$Weekday$Long()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.min.defaultValues = defaultValues['min'];
    this._nested.long.defaultValues = defaultValues['long'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.min.initialize(values['min']);
    this._nested.long.initialize(values['long']);
  }

  /**
   * Returns the nested accessor for translation messages in `min`.
   */
  get min(): I18n$General$Weekday$Min {
    return this._nested.min;
  }

  /**
   * Returns the nested accessor for translation messages in `long`.
   */
  get long(): I18n$General$Weekday$Long {
    return this._nested.long;
  }
}

export class I18n$General$Weekday$Min {

  private _translations: Translations = new Translations('general.weekday.min');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `sun`.
   * Default value: `S`
   */
  get sun(): string {
    return this._translations.get('sun');
  }

  /**
   * Returns the value of translation message for key `mon`.
   * Default value: `M`
   */
  get mon(): string {
    return this._translations.get('mon');
  }

  /**
   * Returns the value of translation message for key `tue`.
   * Default value: `T`
   */
  get tue(): string {
    return this._translations.get('tue');
  }

  /**
   * Returns the value of translation message for key `wed`.
   * Default value: `W`
   */
  get wed(): string {
    return this._translations.get('wed');
  }

  /**
   * Returns the value of translation message for key `thu`.
   * Default value: `T`
   */
  get thu(): string {
    return this._translations.get('thu');
  }

  /**
   * Returns the value of translation message for key `fri`.
   * Default value: `F`
   */
  get fri(): string {
    return this._translations.get('fri');
  }

  /**
   * Returns the value of translation message for key `sat`.
   * Default value: `S`
   */
  get sat(): string {
    return this._translations.get('sat');
  }
}

export class I18n$General$Weekday$Long {

  private _translations: Translations = new Translations('general.weekday.long');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `sun`.
   * Default value: `Sunday`
   */
  get sun(): string {
    return this._translations.get('sun');
  }

  /**
   * Returns the value of translation message for key `mon`.
   * Default value: `Monday`
   */
  get mon(): string {
    return this._translations.get('mon');
  }

  /**
   * Returns the value of translation message for key `tue`.
   * Default value: `Tuesday`
   */
  get tue(): string {
    return this._translations.get('tue');
  }

  /**
   * Returns the value of translation message for key `wed`.
   * Default value: `Wednesday`
   */
  get wed(): string {
    return this._translations.get('wed');
  }

  /**
   * Returns the value of translation message for key `thu`.
   * Default value: `Thursday`
   */
  get thu(): string {
    return this._translations.get('thu');
  }

  /**
   * Returns the value of translation message for key `fri`.
   * Default value: `Friday`
   */
  get fri(): string {
    return this._translations.get('fri');
  }

  /**
   * Returns the value of translation message for key `sat`.
   * Default value: `Saturday`
   */
  get sat(): string {
    return this._translations.get('sat');
  }
}

export class I18n$General$Range {

  private _translations: Translations = new Translations('general.range');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `fromTo`.
   * Default value: `From {min} to {max}`
   */
  fromTo($: {min: string | number, max: string | number}): string {
    return this._translations.get('fromTo', {
      min: $.min,
      max: $.max
    });
  }

  /**
   * Returns the value of translation message for key `from`.
   * Default value: `From {min}`
   */
  from(min: string | number): string {
    return this._translations.get('from', {
      min: min
    });
  }

  /**
   * Returns the value of translation message for key `to`.
   * Default value: `Up to {max}`
   */
  to(max: string | number): string {
    return this._translations.get('to', {
      max: max
    });
  }
}

export class I18n$General$FileSize {

  private _translations: Translations = new Translations('general.fileSize');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `b`.
   * Default value: `{n} bytes`
   */
  b(n: string | number): string {
    return this._translations.get('b', {
      n: n
    });
  }

  /**
   * Returns the value of translation message for key `k`.
   * Default value: `{n}KB`
   */
  k(n: string | number): string {
    return this._translations.get('k', {
      n: n
    });
  }

  /**
   * Returns the value of translation message for key `m`.
   * Default value: `{n}MB`
   */
  m(n: string | number): string {
    return this._translations.get('m', {
      n: n
    });
  }
}

export class I18n$General$Results {

  private _translations: Translations = new Translations('general.results');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `withTotal`.
   * Default value: `Showing {first} - {last} of {total} results`
   */
  withTotal($: {first: string | number, last: string | number, total: string | number}): string {
    return this._translations.get('withTotal', {
      first: $.first,
      last: $.last,
      total: $.total
    });
  }

  /**
   * Returns the value of translation message for key `noTotal`.
   * Default value: `Showing {first} - {last} results`
   */
  noTotal($: {first: string | number, last: string | number}): string {
    return this._translations.get('noTotal', {
      first: $.first,
      last: $.last
    });
  }

  /**
   * Returns the value of translation message for key `none`.
   * Default value: `No results match the search criteria`
   */
  get none(): string {
    return this._translations.get('none');
  }

  /**
   * Returns the value of translation message for key `nextXxs`.
   * Default value: `Next`
   */
  get nextXxs(): string {
    return this._translations.get('nextXxs');
  }

  /**
   * Returns the value of translation message for key `previousXxs`.
   * Default value: `Previous`
   */
  get previousXxs(): string {
    return this._translations.get('previousXxs');
  }
}

export class I18n$General$Geolocation {

  private _translations: Translations = new Translations('general.geolocation');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `kilometersFrom`.
   * Default value: `km from`
   */
  get kilometersFrom(): string {
    return this._translations.get('kilometersFrom');
  }

  /**
   * Returns the value of translation message for key `milesFrom`.
   * Default value: `miles from`
   */
  get milesFrom(): string {
    return this._translations.get('milesFrom');
  }

  /**
   * Returns the value of translation message for key `current`.
   * Default value: `Current location`
   */
  get current(): string {
    return this._translations.get('current');
  }

  /**
   * Returns the value of translation message for key `myAddress`.
   * Default value: `My address`
   */
  get myAddress(): string {
    return this._translations.get('myAddress');
  }
}

export class I18n$Error {

  private _translations: Translations = new Translations('error');

  private _nested = {
    notFound: new I18n$Error$NotFound(),
    unauthorized: new I18n$Error$Unauthorized(),
    securityAnswer: new I18n$Error$SecurityAnswer(),
    field: new I18n$Error$Field(),
    geolocation: new I18n$Error$Geolocation()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.notFound.defaultValues = defaultValues['notFound'];
    this._nested.unauthorized.defaultValues = defaultValues['unauthorized'];
    this._nested.securityAnswer.defaultValues = defaultValues['securityAnswer'];
    this._nested.field.defaultValues = defaultValues['field'];
    this._nested.geolocation.defaultValues = defaultValues['geolocation'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.notFound.initialize(values['notFound']);
    this._nested.unauthorized.initialize(values['unauthorized']);
    this._nested.securityAnswer.initialize(values['securityAnswer']);
    this._nested.field.initialize(values['field']);
    this._nested.geolocation.initialize(values['geolocation']);
  }

  /**
   * Returns the value of translation message for key `general`.
   * Default value: `There was an unexpected error while processing your request`
   */
  get general(): string {
    return this._translations.get('general');
  }

  /**
   * Returns the value of translation message for key `serverOffline`.
   * Default value: `The server couldn't be contacted.<br>Please, try again later.`
   */
  get serverOffline(): string {
    return this._translations.get('serverOffline');
  }

  /**
   * Returns the value of translation message for key `invalidRequest`.
   * Default value: `It is not possible to connect to the server.<br>Please make sure you are connected to the Internet and try again in a few seconds.`
   */
  get invalidRequest(): string {
    return this._translations.get('invalidRequest');
  }

  /**
   * Returns the value of translation message for key `queryParse`.
   * Default value: `Invalid keywords`
   */
  get queryParse(): string {
    return this._translations.get('queryParse');
  }

  /**
   * Returns the value of translation message for key `uploadSizeExceeded`.
   * Default value: `The uploaded file exceeds the maximum allowed size of {size}`
   */
  uploadSizeExceeded(size: string | number): string {
    return this._translations.get('uploadSizeExceeded', {
      size: size
    });
  }

  /**
   * Returns the value of translation message for key `maxItems`.
   * Default value: `Cannot add more than {max} elements`
   */
  maxItems(max: string | number): string {
    return this._translations.get('maxItems', {
      max: max
    });
  }

  /**
   * Returns the value of translation message for key `validation`.
   * Default value: `The action couldn't be processed, as there were validation errors`
   */
  get validation(): string {
    return this._translations.get('validation');
  }

  /**
   * Returns the value of translation message for key `staleEntity`.
   * Default value: `This data cannot be saved because it has been modified by someone else.<br>Please, load the page again and restart the operation.`
   */
  get staleEntity(): string {
    return this._translations.get('staleEntity');
  }

  /**
   * Returns the value of translation message for key `removeDataInUse`.
   * Default value: `This item cannot be removed because it is currently in use.`
   */
  get removeDataInUse(): string {
    return this._translations.get('removeDataInUse');
  }

  /**
   * Returns the value of translation message for key `login`.
   * Default value: `The given name / password are incorrect. Please, try again.`
   */
  get login(): string {
    return this._translations.get('login');
  }

  /**
   * Returns the value of translation message for key `remoteAddressBlocked`.
   * Default value: `Your IP address is blocked for exceeding login attempts`
   */
  get remoteAddressBlocked(): string {
    return this._translations.get('remoteAddressBlocked');
  }

  /**
   * Returns the value of translation message for key `permission`.
   * Default value: `You don't have sufficient permissions to perform the requested action`
   */
  get permission(): string {
    return this._translations.get('permission');
  }

  /**
   * Returns the value of translation message for key `loggedOut`.
   * Default value: `You have been disconnected. Please, login again and repeat the operation.`
   */
  get loggedOut(): string {
    return this._translations.get('loggedOut');
  }

  /**
   * Returns the value of translation message for key `otp`.
   * Default value: `There was an error when sending the password. Please, try again later.`
   */
  get otp(): string {
    return this._translations.get('otp');
  }

  /**
   * Returns the value of translation message for key `illegalAction`.
   * Default value: `The action you attempted to perform is invalid`
   */
  get illegalAction(): string {
    return this._translations.get('illegalAction');
  }

  /**
   * Returns the nested accessor for translation messages in `notFound`.
   */
  get notFound(): I18n$Error$NotFound {
    return this._nested.notFound;
  }

  /**
   * Returns the nested accessor for translation messages in `unauthorized`.
   */
  get unauthorized(): I18n$Error$Unauthorized {
    return this._nested.unauthorized;
  }

  /**
   * Returns the nested accessor for translation messages in `securityAnswer`.
   */
  get securityAnswer(): I18n$Error$SecurityAnswer {
    return this._nested.securityAnswer;
  }

  /**
   * Returns the nested accessor for translation messages in `field`.
   */
  get field(): I18n$Error$Field {
    return this._nested.field;
  }

  /**
   * Returns the nested accessor for translation messages in `geolocation`.
   */
  get geolocation(): I18n$Error$Geolocation {
    return this._nested.geolocation;
  }
}

export class I18n$Error$NotFound {

  private _translations: Translations = new Translations('error.notFound');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `location`.
   * Default value: `The location you typed or tried to access was not found`
   */
  get location(): string {
    return this._translations.get('location');
  }

  /**
   * Returns the value of translation message for key `type`.
   * Default value: `The requested data could not be found: {type}`
   */
  type(type: string | number): string {
    return this._translations.get('type', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `typeKey`.
   * Default value: `The requested data could not be found: {type} with key {key}`
   */
  typeKey($: {type: string | number, key: string | number}): string {
    return this._translations.get('typeKey', {
      type: $.type,
      key: $.key
    });
  }
}

export class I18n$Error$Unauthorized {

  private _translations: Translations = new Translations('error.unauthorized');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `address`.
   * Default value: `Your IP address is not allowed to login`
   */
  get address(): string {
    return this._translations.get('address');
  }

  /**
   * Returns the value of translation message for key `url`.
   * Default value: `Access is not allowed from this URL`
   */
  get url(): string {
    return this._translations.get('url');
  }
}

export class I18n$Error$SecurityAnswer {

  private _translations: Translations = new Translations('error.securityAnswer');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `invalid`.
   * Default value: `The given security answer is invalid`
   */
  get invalid(): string {
    return this._translations.get('invalid');
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `By exceeding the number of security question attempts, this request has been aborted. Please, contact the administration`
   */
  get disabled(): string {
    return this._translations.get('disabled');
  }
}

export class I18n$Error$Field {

  private _translations: Translations = new Translations('error.field');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `invalid`.
   * Default value: `This field is invalid`
   */
  get invalid(): string {
    return this._translations.get('invalid');
  }

  /**
   * Returns the value of translation message for key `required`.
   * Default value: `This field is required`
   */
  get required(): string {
    return this._translations.get('required');
  }

  /**
   * Returns the value of translation message for key `passwordsMatch`.
   * Default value: `The passwords don't match`
   */
  get passwordsMatch(): string {
    return this._translations.get('passwordsMatch');
  }

  /**
   * Returns the value of translation message for key `minLength`.
   * Default value: `Should have at least {min} characters`
   */
  minLength(min: string | number): string {
    return this._translations.get('minLength', {
      min: min
    });
  }

  /**
   * Returns the value of translation message for key `number`.
   * Default value: `Invalid numeric value`
   */
  get number(): string {
    return this._translations.get('number');
  }

  /**
   * Returns the value of translation message for key `date`.
   * Default value: `Invalid date`
   */
  get date(): string {
    return this._translations.get('date');
  }

  /**
   * Returns the value of translation message for key `minDate`.
   * Default value: `Should be {min} or after`
   */
  minDate(min: string | number): string {
    return this._translations.get('minDate', {
      min: min
    });
  }

  /**
   * Returns the value of translation message for key `maxDate`.
   * Default value: `Should be {max} or before`
   */
  maxDate(max: string | number): string {
    return this._translations.get('maxDate', {
      max: max
    });
  }
}

export class I18n$Error$Geolocation {

  private _translations: Translations = new Translations('error.geolocation');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `denied`.
   * Default value: `No permission to get the current location. Please, grant this permission in your browser.`
   */
  get denied(): string {
    return this._translations.get('denied');
  }

  /**
   * Returns the value of translation message for key `unavailable`.
   * Default value: `The current location is unavailable`
   */
  get unavailable(): string {
    return this._translations.get('unavailable');
  }

  /**
   * Returns the value of translation message for key `general`.
   * Default value: `Error getting the current location`
   */
  get general(): string {
    return this._translations.get('general');
  }
}

export class I18n$Menu {

  private _translations: Translations = new Translations('menu');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `login`.
   * Default value: `Login`
   */
  get login(): string {
    return this._translations.get('login');
  }

  /**
   * Returns the value of translation message for key `register`.
   * Default value: `Register`
   */
  get register(): string {
    return this._translations.get('register');
  }

  /**
   * Returns the value of translation message for key `logout`.
   * Default value: `Logout`
   */
  get logout(): string {
    return this._translations.get('logout');
  }

  /**
   * Returns the value of translation message for key `shoppingCart`.
   * Default value: `Shopping cart`
   */
  get shoppingCart(): string {
    return this._translations.get('shoppingCart');
  }

  /**
   * Returns the value of translation message for key `home`.
   * Default value: `Home`
   */
  get home(): string {
    return this._translations.get('home');
  }

  /**
   * Returns the value of translation message for key `dashboard`.
   * Default value: `Dashboard`
   */
  get dashboard(): string {
    return this._translations.get('dashboard');
  }

  /**
   * Returns the value of translation message for key `banking`.
   * Default value: `Banking`
   */
  get banking(): string {
    return this._translations.get('banking');
  }

  /**
   * Returns the value of translation message for key `banking.account`.
   * Default value: `Account`
   */
  get bankingAccount(): string {
    return this._translations.get('banking.account');
  }

  /**
   * Returns the value of translation message for key `banking.payUser`.
   * Default value: `Payment to user`
   */
  get bankingPayUser(): string {
    return this._translations.get('banking.payUser');
  }

  /**
   * Returns the value of translation message for key `banking.paySystem`.
   * Default value: `Payment to system`
   */
  get bankingPaySystem(): string {
    return this._translations.get('banking.paySystem');
  }

  /**
   * Returns the value of translation message for key `banking.paySelf`.
   * Default value: `Payment to self`
   */
  get bankingPaySelf(): string {
    return this._translations.get('banking.paySelf');
  }

  /**
   * Returns the value of translation message for key `banking.requestPaymentFromUser`.
   * Default value: `Request payment from user`
   */
  get bankingRequestPaymentFromUser(): string {
    return this._translations.get('banking.requestPaymentFromUser');
  }

  /**
   * Returns the value of translation message for key `banking.requestPaymentFromSystem`.
   * Default value: `Request payment from system`
   */
  get bankingRequestPaymentFromSystem(): string {
    return this._translations.get('banking.requestPaymentFromSystem');
  }

  /**
   * Returns the value of translation message for key `banking.pos`.
   * Default value: `Receive payment`
   */
  get bankingPos(): string {
    return this._translations.get('banking.pos');
  }

  /**
   * Returns the value of translation message for key `banking.receiveQrPayment`.
   * Default value: `Receive QR-code`
   */
  get bankingReceiveQrPayment(): string {
    return this._translations.get('banking.receiveQrPayment');
  }

  /**
   * Returns the value of translation message for key `banking.scheduledPayments`.
   * Default value: `Scheduled payments`
   */
  get bankingScheduledPayments(): string {
    return this._translations.get('banking.scheduledPayments');
  }

  /**
   * Returns the value of translation message for key `banking.scheduledPaymentsOverview`.
   * Default value: `Scheduled payments overview`
   */
  get bankingScheduledPaymentsOverview(): string {
    return this._translations.get('banking.scheduledPaymentsOverview');
  }

  /**
   * Returns the value of translation message for key `banking.pendingMyAuth`.
   * Default value: `Awaiting my authorization`
   */
  get bankingPendingMyAuth(): string {
    return this._translations.get('banking.pendingMyAuth');
  }

  /**
   * Returns the value of translation message for key `banking.authorizations`.
   * Default value: `Payment authorizations`
   */
  get bankingAuthorizations(): string {
    return this._translations.get('banking.authorizations');
  }

  /**
   * Returns the value of translation message for key `banking.paymentRequests`.
   * Default value: `Payment requests`
   */
  get bankingPaymentRequests(): string {
    return this._translations.get('banking.paymentRequests');
  }

  /**
   * Returns the value of translation message for key `banking.paymentRequestsOverview`.
   * Default value: `Payment requests overview`
   */
  get bankingPaymentRequestsOverview(): string {
    return this._translations.get('banking.paymentRequestsOverview');
  }

  /**
   * Returns the value of translation message for key `banking.searchVouchers`.
   * Default value: `Search vouchers`
   */
  get bankingSearchVouchers(): string {
    return this._translations.get('banking.searchVouchers');
  }

  /**
   * Returns the value of translation message for key `banking.generateVouchers`.
   * Default value: `Generate vouchers`
   */
  get bankingGenerateVouchers(): string {
    return this._translations.get('banking.generateVouchers');
  }

  /**
   * Returns the value of translation message for key `banking.buyVouchers`.
   * Default value: `Buy vouchers`
   */
  get bankingBuyVouchers(): string {
    return this._translations.get('banking.buyVouchers');
  }

  /**
   * Returns the value of translation message for key `banking.boughtVouchers`.
   * Default value: `View bought vouchers`
   */
  get bankingBoughtVouchers(): string {
    return this._translations.get('banking.boughtVouchers');
  }

  /**
   * Returns the value of translation message for key `banking.redeemVoucher`.
   * Default value: `Redeem voucher`
   */
  get bankingRedeemVoucher(): string {
    return this._translations.get('banking.redeemVoucher');
  }

  /**
   * Returns the value of translation message for key `banking.redeemedVouchers`.
   * Default value: `View redeemed`
   */
  get bankingRedeemedVouchers(): string {
    return this._translations.get('banking.redeemedVouchers');
  }

  /**
   * Returns the value of translation message for key `banking.transfersOverview`.
   * Default value: `Transfers overview`
   */
  get bankingTransfersOverview(): string {
    return this._translations.get('banking.transfersOverview');
  }

  /**
   * Returns the value of translation message for key `banking.userBalancesOverview`.
   * Default value: `User balances overview`
   */
  get bankingUserBalancesOverview(): string {
    return this._translations.get('banking.userBalancesOverview');
  }

  /**
   * Returns the value of translation message for key `banking.accountBalanceLimits`.
   * Default value: `Account balance limits`
   */
  get bankingAccountBalanceLimits(): string {
    return this._translations.get('banking.accountBalanceLimits');
  }

  /**
   * Returns the value of translation message for key `banking.accountPaymentLimits`.
   * Default value: `Account payment limits`
   */
  get bankingAccountPaymentLimits(): string {
    return this._translations.get('banking.accountPaymentLimits');
  }

  /**
   * Returns the value of translation message for key `operators`.
   * Default value: `Operators`
   */
  get operators(): string {
    return this._translations.get('operators');
  }

  /**
   * Returns the value of translation message for key `operators.operators`.
   * Default value: `Operators`
   */
  get operatorsOperators(): string {
    return this._translations.get('operators.operators');
  }

  /**
   * Returns the value of translation message for key `operators.register`.
   * Default value: `Register operator`
   */
  get operatorsRegister(): string {
    return this._translations.get('operators.register');
  }

  /**
   * Returns the value of translation message for key `operators.groups`.
   * Default value: `Operator groups`
   */
  get operatorsGroups(): string {
    return this._translations.get('operators.groups');
  }

  /**
   * Returns the value of translation message for key `brokering`.
   * Default value: `Brokering`
   */
  get brokering(): string {
    return this._translations.get('brokering');
  }

  /**
   * Returns the value of translation message for key `brokering.users`.
   * Default value: `Users`
   */
  get brokeringUsers(): string {
    return this._translations.get('brokering.users');
  }

  /**
   * Returns the value of translation message for key `brokering.register`.
   * Default value: `Register user`
   */
  get brokeringRegister(): string {
    return this._translations.get('brokering.register');
  }

  /**
   * Returns the value of translation message for key `marketplace`.
   * Default value: `Marketplace`
   */
  get marketplace(): string {
    return this._translations.get('marketplace');
  }

  /**
   * Returns the value of translation message for key `marketplace.users`.
   * Default value: `Users`
   */
  get marketplaceUsers(): string {
    return this._translations.get('marketplace.users');
  }

  /**
   * Returns the value of translation message for key `marketplace.register`.
   * Default value: `Register user`
   */
  get marketplaceRegister(): string {
    return this._translations.get('marketplace.register');
  }

  /**
   * Returns the value of translation message for key `marketplace.directory`.
   * Default value: `Directory`
   */
  get marketplaceDirectory(): string {
    return this._translations.get('marketplace.directory');
  }

  /**
   * Returns the value of translation message for key `marketplace.userSearch`.
   * Default value: `Users`
   */
  get marketplaceUserSearch(): string {
    return this._translations.get('marketplace.userSearch');
  }

  /**
   * Returns the value of translation message for key `marketplace.businessDirectory`.
   * Default value: `Business directory`
   */
  get marketplaceBusinessDirectory(): string {
    return this._translations.get('marketplace.businessDirectory');
  }

  /**
   * Returns the value of translation message for key `marketplace.advertisements`.
   * Default value: `Advertisements`
   */
  get marketplaceAdvertisements(): string {
    return this._translations.get('marketplace.advertisements');
  }

  /**
   * Returns the value of translation message for key `marketplace.adInterests`.
   * Default value: `Advertisement interests`
   */
  get marketplaceAdInterests(): string {
    return this._translations.get('marketplace.adInterests');
  }

  /**
   * Returns the value of translation message for key `marketplace.deliveryMethods`.
   * Default value: `Delivery methods`
   */
  get marketplaceDeliveryMethods(): string {
    return this._translations.get('marketplace.deliveryMethods');
  }

  /**
   * Returns the value of translation message for key `marketplace.webshopSettings`.
   * Default value: `Web shop settings`
   */
  get marketplaceWebshopSettings(): string {
    return this._translations.get('marketplace.webshopSettings');
  }

  /**
   * Returns the value of translation message for key `marketplace.myAdvertisements`.
   * Default value: `My advertisements`
   */
  get marketplaceMyAdvertisements(): string {
    return this._translations.get('marketplace.myAdvertisements');
  }

  /**
   * Returns the value of translation message for key `marketplace.myPurchases`.
   * Default value: `My purchases`
   */
  get marketplaceMyPurchases(): string {
    return this._translations.get('marketplace.myPurchases');
  }

  /**
   * Returns the value of translation message for key `marketplace.mySales`.
   * Default value: `My sales`
   */
  get marketplaceMySales(): string {
    return this._translations.get('marketplace.mySales');
  }

  /**
   * Returns the value of translation message for key `marketplace.myWebshop`.
   * Default value: `My web shop`
   */
  get marketplaceMyWebshop(): string {
    return this._translations.get('marketplace.myWebshop');
  }

  /**
   * Returns the value of translation message for key `marketplace.unansweredQuestions`.
   * Default value: `Unanswered questions`
   */
  get marketplaceUnansweredQuestions(): string {
    return this._translations.get('marketplace.unansweredQuestions');
  }

  /**
   * Returns the value of translation message for key `marketplace.connectedUsers`.
   * Default value: `Connected users`
   */
  get marketplaceConnectedUsers(): string {
    return this._translations.get('marketplace.connectedUsers');
  }

  /**
   * Returns the value of translation message for key `marketplace.userAlerts`.
   * Default value: `User alerts`
   */
  get marketplaceUserAlerts(): string {
    return this._translations.get('marketplace.userAlerts');
  }

  /**
   * Returns the value of translation message for key `personal`.
   * Default value: `Personal`
   */
  get personal(): string {
    return this._translations.get('personal');
  }

  /**
   * Returns the value of translation message for key `personal.documents`.
   * Default value: `Documents`
   */
  get personalDocuments(): string {
    return this._translations.get('personal.documents');
  }

  /**
   * Returns the value of translation message for key `personal.viewProfile`.
   * Default value: `My profile`
   */
  get personalViewProfile(): string {
    return this._translations.get('personal.viewProfile');
  }

  /**
   * Returns the value of translation message for key `personal.editProfile`.
   * Default value: `Edit profile`
   */
  get personalEditProfile(): string {
    return this._translations.get('personal.editProfile');
  }

  /**
   * Returns the value of translation message for key `personal.contacts`.
   * Default value: `Contacts`
   */
  get personalContacts(): string {
    return this._translations.get('personal.contacts');
  }

  /**
   * Returns the value of translation message for key `personal.password`.
   * Default value: `Password`
   */
  get personalPassword(): string {
    return this._translations.get('personal.password');
  }

  /**
   * Returns the value of translation message for key `personal.passwords`.
   * Default value: `Passwords`
   */
  get personalPasswords(): string {
    return this._translations.get('personal.passwords');
  }

  /**
   * Returns the value of translation message for key `personal.identityProviders`.
   * Default value: `Identity providers`
   */
  get personalIdentityProviders(): string {
    return this._translations.get('personal.identityProviders');
  }

  /**
   * Returns the value of translation message for key `personal.agreements`.
   * Default value: `Agreements`
   */
  get personalAgreements(): string {
    return this._translations.get('personal.agreements');
  }

  /**
   * Returns the value of translation message for key `personal.notifications`.
   * Default value: `Notifications`
   */
  get personalNotifications(): string {
    return this._translations.get('personal.notifications');
  }

  /**
   * Returns the value of translation message for key `personal.notificationSettings`.
   * Default value: `Notification settings`
   */
  get personalNotificationSettings(): string {
    return this._translations.get('personal.notificationSettings');
  }

  /**
   * Returns the value of translation message for key `personal.settings`.
   * Default value: `Settings`
   */
  get personalSettings(): string {
    return this._translations.get('personal.settings');
  }

  /**
   * Returns the value of translation message for key `personal.privacySettings`.
   * Default value: `Privacy settings`
   */
  get personalPrivacySettings(): string {
    return this._translations.get('personal.privacySettings');
  }

  /**
   * Returns the value of translation message for key `personal.references`.
   * Default value: `References`
   */
  get personalReferences(): string {
    return this._translations.get('personal.references');
  }

  /**
   * Returns the value of translation message for key `content`.
   * Default value: `Information`
   */
  get content(): string {
    return this._translations.get('content');
  }
}

export class I18n$Login {

  private _translations: Translations = new Translations('login');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Login`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Login`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `message`.
   * Default value: `You can login with your username and password`
   */
  get message(): string {
    return this._translations.get('message');
  }

  /**
   * Returns the value of translation message for key `disconnected`.
   * Default value: `You have been disconnected.<br>Please, login again in order to view the requested page.`
   */
  get disconnected(): string {
    return this._translations.get('disconnected');
  }

  /**
   * Returns the value of translation message for key `principal`.
   * Default value: `User`
   */
  get principal(): string {
    return this._translations.get('principal');
  }

  /**
   * Returns the value of translation message for key `forgotPassword`.
   * Default value: `Forgot your password?`
   */
  get forgotPassword(): string {
    return this._translations.get('forgotPassword');
  }

  /**
   * Returns the value of translation message for key `register`.
   * Default value: `Not a user yet? Register here.`
   */
  get register(): string {
    return this._translations.get('register');
  }
}

export class I18n$Password {

  private _translations: Translations = new Translations('password');

  private _nested = {
    error: new I18n$Password$Error(),
    title: new I18n$Password$Title(),
    mobileTitle: new I18n$Password$MobileTitle(),
    forgotten: new I18n$Password$Forgotten(),
    expired: new I18n$Password$Expired(),
    status: new I18n$Password$Status(),
    action: new I18n$Password$Action()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.error.defaultValues = defaultValues['error'];
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.forgotten.defaultValues = defaultValues['forgotten'];
    this._nested.expired.defaultValues = defaultValues['expired'];
    this._nested.status.defaultValues = defaultValues['status'];
    this._nested.action.defaultValues = defaultValues['action'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.error.initialize(values['error']);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.forgotten.initialize(values['forgotten']);
    this._nested.expired.initialize(values['expired']);
    this._nested.status.initialize(values['status']);
    this._nested.action.initialize(values['action']);
  }

  /**
   * Returns the value of translation message for key `confirmationMessage`.
   * Default value: `Supply your {passwordType} to confirm this operation`
   */
  confirmationMessage(passwordType: string | number): string {
    return this._translations.get('confirmationMessage', {
      passwordType: passwordType
    });
  }

  /**
   * Returns the value of translation message for key `confirm.noPassword`.
   * Default value: `In order to confirm you need a {passwordType}, but you do not have any`
   */
  confirmNoPassword(passwordType: string | number): string {
    return this._translations.get('confirm.noPassword', {
      passwordType: passwordType
    });
  }

  /**
   * Returns the value of translation message for key `confirm.mode`.
   * Default value: `Confirm with`
   */
  get confirmMode(): string {
    return this._translations.get('confirm.mode');
  }

  /**
   * Returns the value of translation message for key `confirm.mode.device`.
   * Default value: `Mobile phone`
   */
  get confirmModeDevice(): string {
    return this._translations.get('confirm.mode.device');
  }

  /**
   * Returns the value of translation message for key `confirm.mode.password`.
   * Default value: `Password`
   */
  get confirmModePassword(): string {
    return this._translations.get('confirm.mode.password');
  }

  /**
   * Returns the value of translation message for key `confirm.device.active`.
   * Default value: `In order to confirm, scan this QR-code with your mobile phone`
   */
  get confirmDeviceActive(): string {
    return this._translations.get('confirm.device.active');
  }

  /**
   * Returns the value of translation message for key `confirm.device.none`.
   * Default value: `In order to confirm you must have a trusted mobile phone but you do not have any`
   */
  get confirmDeviceNone(): string {
    return this._translations.get('confirm.device.none');
  }

  /**
   * Returns the value of translation message for key `confirm.deviceOrPassword.active`.
   * Default value: `In order to confirm, either scan this QR-code with your mobile phone or supply your {password}`
   */
  confirmDeviceOrPasswordActive(password: string | number): string {
    return this._translations.get('confirm.deviceOrPassword.active', {
      password: password
    });
  }

  /**
   * Returns the value of translation message for key `confirm.deviceOrPassword.none`.
   * Default value: `In order to confirm you must have a trusted mobile phone or supply your {password} but you do not have any`
   */
  confirmDeviceOrPasswordNone(password: string | number): string {
    return this._translations.get('confirm.deviceOrPassword.none', {
      password: password
    });
  }

  /**
   * Returns the value of translation message for key `confirm.deviceOrOtp.noMediums`.
   * Default value: `In order to confirm you need either a trusted mobile phone (and you have none) or a confirmation password, but there are no possible mediums to receive it.<br>Please, contact the administration.`
   */
  get confirmDeviceOrOtpNoMediums(): string {
    return this._translations.get('confirm.deviceOrOtp.noMediums');
  }

  /**
   * Returns the value of translation message for key `confirm.deviceOrOtp.active`.
   * Default value: `In order to confirm, either scan this QR-code with your mobile phone, use the previously sent confirmation password or request a new one`
   */
  get confirmDeviceOrOtpActive(): string {
    return this._translations.get('confirm.deviceOrOtp.active');
  }

  /**
   * Returns the value of translation message for key `confirm.deviceOrOtp.request`.
   * Default value: `In order to confirm, either scan this QR-code with your mobile phone, or request a confirmation password below`
   */
  get confirmDeviceOrOtpRequest(): string {
    return this._translations.get('confirm.deviceOrOtp.request');
  }

  /**
   * Returns the value of translation message for key `confirm.otp.noMediums`.
   * Default value: `In order to confirm you need a confirmation password, but there are no possible mediums to receive it.<br>Please, contact the administration.`
   */
  get confirmOtpNoMediums(): string {
    return this._translations.get('confirm.otp.noMediums');
  }

  /**
   * Returns the value of translation message for key `confirm.otp.active`.
   * Default value: `You can use the previously sent confirmation password or request a new one`
   */
  get confirmOtpActive(): string {
    return this._translations.get('confirm.otp.active');
  }

  /**
   * Returns the value of translation message for key `confirm.otp.request`.
   * Default value: `Please, request a confirmation password below in order to confirm`
   */
  get confirmOtpRequest(): string {
    return this._translations.get('confirm.otp.request');
  }

  /**
   * Returns the value of translation message for key `otp.sent`.
   * Default value: `The password was sent to {dest}`
   */
  otpSent(dest: string | number): string {
    return this._translations.get('otp.sent', {
      dest: dest
    });
  }

  /**
   * Returns the value of translation message for key `otp.receiveBy`.
   * Default value: `Get by {medium}`
   */
  otpReceiveBy(medium: string | number): string {
    return this._translations.get('otp.receiveBy', {
      medium: medium
    });
  }

  /**
   * Returns the value of translation message for key `otp.receiveBy.sent`.
   * Default value: `{medium} sent`
   */
  otpReceiveBySent(medium: string | number): string {
    return this._translations.get('otp.receiveBy.sent', {
      medium: medium
    });
  }

  /**
   * Returns the value of translation message for key `oldPassword`.
   * Default value: `Old password`
   */
  get oldPassword(): string {
    return this._translations.get('oldPassword');
  }

  /**
   * Returns the value of translation message for key `newPassword`.
   * Default value: `New password`
   */
  get newPassword(): string {
    return this._translations.get('newPassword');
  }

  /**
   * Returns the value of translation message for key `passwordConfirmation`.
   * Default value: `Password confirmation`
   */
  get passwordConfirmation(): string {
    return this._translations.get('passwordConfirmation');
  }

  /**
   * Returns the value of translation message for key `statusSince`.
   * Default value: `Since {date}`
   */
  statusSince(date: string | number): string {
    return this._translations.get('statusSince', {
      date: date
    });
  }

  /**
   * Returns the nested accessor for translation messages in `error`.
   */
  get error(): I18n$Password$Error {
    return this._nested.error;
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Password$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Password$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `forgotten`.
   */
  get forgotten(): I18n$Password$Forgotten {
    return this._nested.forgotten;
  }

  /**
   * Returns the nested accessor for translation messages in `expired`.
   */
  get expired(): I18n$Password$Expired {
    return this._nested.expired;
  }

  /**
   * Returns the nested accessor for translation messages in `status`.
   */
  get status(): I18n$Password$Status {
    return this._nested.status;
  }

  /**
   * Returns the nested accessor for translation messages in `action`.
   */
  get action(): I18n$Password$Action {
    return this._nested.action;
  }
}

export class I18n$Password$Error {

  private _translations: Translations = new Translations('password.error');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `Your password has been disabled. Please, contact the administration.`
   */
  get disabled(): string {
    return this._translations.get('disabled');
  }

  /**
   * Returns the value of translation message for key `reset`.
   * Default value: `Your password has been reset.`
   */
  get reset(): string {
    return this._translations.get('reset');
  }

  /**
   * Returns the value of translation message for key `indefinitelyBlocked`.
   * Default value: `Your password has been disabled by exceeding the maximum tries. Please, contact the administration.`
   */
  get indefinitelyBlocked(): string {
    return this._translations.get('indefinitelyBlocked');
  }

  /**
   * Returns the value of translation message for key `temporarilyBlocked`.
   * Default value: `Your password is temporarily blocked by exceeding the maximum tries.`
   */
  get temporarilyBlocked(): string {
    return this._translations.get('temporarilyBlocked');
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `Your password has expired. Please, contact the administration.`
   */
  get expired(): string {
    return this._translations.get('expired');
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Your password is pending activation. Please, contact the administration.`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `invalid`.
   * Default value: `The given {type} is invalid`
   */
  invalid(type: string | number): string {
    return this._translations.get('invalid', {
      type: type
    });
  }
}

export class I18n$Password$Title {

  private _translations: Translations = new Translations('password.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `change.self`.
   * Default value: `Change your password`
   */
  get changeSelf(): string {
    return this._translations.get('change.self');
  }

  /**
   * Returns the value of translation message for key `change.user`.
   * Default value: `Change user password`
   */
  get changeUser(): string {
    return this._translations.get('change.user');
  }

  /**
   * Returns the value of translation message for key `forgotten`.
   * Default value: `User identification / password recovery`
   */
  get forgotten(): string {
    return this._translations.get('forgotten');
  }

  /**
   * Returns the value of translation message for key `manage.single.self`.
   * Default value: `Manage your password`
   */
  get manageSingleSelf(): string {
    return this._translations.get('manage.single.self');
  }

  /**
   * Returns the value of translation message for key `manage.multiple.self`.
   * Default value: `Manage your passwords`
   */
  get manageMultipleSelf(): string {
    return this._translations.get('manage.multiple.self');
  }

  /**
   * Returns the value of translation message for key `manage.single.user`.
   * Default value: `Manage user password`
   */
  get manageSingleUser(): string {
    return this._translations.get('manage.single.user');
  }

  /**
   * Returns the value of translation message for key `manage.multiple.user`.
   * Default value: `Manage user passwords`
   */
  get manageMultipleUser(): string {
    return this._translations.get('manage.multiple.user');
  }

  /**
   * Returns the value of translation message for key `securityAnswer`.
   * Default value: `Set your security answer`
   */
  get securityAnswer(): string {
    return this._translations.get('securityAnswer');
  }
}

export class I18n$Password$MobileTitle {

  private _translations: Translations = new Translations('password.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `change.self`.
   * Default value: `Password change`
   */
  get changeSelf(): string {
    return this._translations.get('change.self');
  }

  /**
   * Returns the value of translation message for key `change.user`.
   * Default value: `Password change`
   */
  get changeUser(): string {
    return this._translations.get('change.user');
  }

  /**
   * Returns the value of translation message for key `forgotten`.
   * Default value: `User / password recovery`
   */
  get forgotten(): string {
    return this._translations.get('forgotten');
  }

  /**
   * Returns the value of translation message for key `manage.single.self`.
   * Default value: `Password`
   */
  get manageSingleSelf(): string {
    return this._translations.get('manage.single.self');
  }

  /**
   * Returns the value of translation message for key `manage.multiple.self`.
   * Default value: `Passwords`
   */
  get manageMultipleSelf(): string {
    return this._translations.get('manage.multiple.self');
  }

  /**
   * Returns the value of translation message for key `manage.single.user`.
   * Default value: `User password`
   */
  get manageSingleUser(): string {
    return this._translations.get('manage.single.user');
  }

  /**
   * Returns the value of translation message for key `manage.multiple.user`.
   * Default value: `User passwords`
   */
  get manageMultipleUser(): string {
    return this._translations.get('manage.multiple.user');
  }

  /**
   * Returns the value of translation message for key `securityAnswer`.
   * Default value: `Security answer`
   */
  get securityAnswer(): string {
    return this._translations.get('securityAnswer');
  }
}

export class I18n$Password$Forgotten {

  private _translations: Translations = new Translations('password.forgotten');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `preface`.
   * Default value: `Here you can recover your user identification and change your password. Fill in your user identification below, and you will receive a verification code. You can use one of the following:`
   */
  get preface(): string {
    return this._translations.get('preface');
  }

  /**
   * Returns the value of translation message for key `principal`.
   * Default value: `User`
   */
  get principal(): string {
    return this._translations.get('principal');
  }

  /**
   * Returns the value of translation message for key `captcha`.
   * Default value: `Captcha validation`
   */
  get captcha(): string {
    return this._translations.get('captcha');
  }

  /**
   * Returns the value of translation message for key `code`.
   * Default value: `Verification code`
   */
  get code(): string {
    return this._translations.get('code');
  }

  /**
   * Returns the value of translation message for key `code.sent`.
   * Default value: `The verification code was sent to {to}`
   */
  codeSent(to: string | number): string {
    return this._translations.get('code.sent', {
      to: to
    });
  }

  /**
   * Returns the value of translation message for key `sendMedium`.
   * Default value: `Receive code by`
   */
  get sendMedium(): string {
    return this._translations.get('sendMedium');
  }

  /**
   * Returns the value of translation message for key `generate`.
   * Default value: `Generate password`
   */
  get generate(): string {
    return this._translations.get('generate');
  }

  /**
   * Returns the value of translation message for key `generated.message`.
   * Default value: `Once you submit, a new password will be generated and sent to your e-mail address`
   */
  get generatedMessage(): string {
    return this._translations.get('generated.message');
  }

  /**
   * Returns the value of translation message for key `generated.done.email`.
   * Default value: `You should receive shortly an e-mail with your new password.`
   */
  get generatedDoneEmail(): string {
    return this._translations.get('generated.done.email');
  }

  /**
   * Returns the value of translation message for key `generated.done.sms`.
   * Default value: `You should receive shortly an SMS message with your new password.`
   */
  get generatedDoneSms(): string {
    return this._translations.get('generated.done.sms');
  }

  /**
   * Returns the value of translation message for key `manual.done`.
   * Default value: `Your password has been successfully changed. You can now use it to login.`
   */
  get manualDone(): string {
    return this._translations.get('manual.done');
  }

  /**
   * Returns the value of translation message for key `title.changePassword`.
   * Default value: `Change your password`
   */
  get titleChangePassword(): string {
    return this._translations.get('title.changePassword');
  }
}

export class I18n$Password$Expired {

  private _translations: Translations = new Translations('password.expired');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `preface`.
   * Default value: `Your {type} has expired.`
   */
  preface(type: string | number): string {
    return this._translations.get('preface', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `message.manual`.
   * Default value: `In order to proceed, you must change it.`
   */
  get messageManual(): string {
    return this._translations.get('message.manual');
  }

  /**
   * Returns the value of translation message for key `message.generated`.
   * Default value: `In order to proceed, a new value must be generated.<br>This value will only be displayed once, so, make sure you either memorize it or write it down.`
   */
  get messageGenerated(): string {
    return this._translations.get('message.generated');
  }

  /**
   * Returns the value of translation message for key `generatedValue`.
   * Default value: `The value for {type} is <data>{value}</data>.<br>This value won't be displayed again, so, make sure you either memorize it or write it down.`
   */
  generatedValue($: {type: string | number, value: string | number}): string {
    return this._translations.get('generatedValue', {
      type: $.type,
      value: $.value
    });
  }

  /**
   * Returns the value of translation message for key `generateNew`.
   * Default value: `Generate new`
   */
  get generateNew(): string {
    return this._translations.get('generateNew');
  }

  /**
   * Returns the value of translation message for key `changed`.
   * Default value: `Your {type} was changed`
   */
  changed(type: string | number): string {
    return this._translations.get('changed', {
      type: type
    });
  }
}

export class I18n$Password$Status {

  private _translations: Translations = new Translations('password.status');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `active`.
   * Default value: `Active`
   */
  get active(): string {
    return this._translations.get('active');
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `Disabled`
   */
  get disabled(): string {
    return this._translations.get('disabled');
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `Expired`
   */
  get expired(): string {
    return this._translations.get('expired');
  }

  /**
   * Returns the value of translation message for key `indefinitelyBlocked`.
   * Default value: `Blocked`
   */
  get indefinitelyBlocked(): string {
    return this._translations.get('indefinitelyBlocked');
  }

  /**
   * Returns the value of translation message for key `neverCreated`.
   * Default value: `Never created`
   */
  get neverCreated(): string {
    return this._translations.get('neverCreated');
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Pending`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `reset`.
   * Default value: `Reset`
   */
  get reset(): string {
    return this._translations.get('reset');
  }

  /**
   * Returns the value of translation message for key `temporarilyBlocked`.
   * Default value: `Temporarily blocked`
   */
  get temporarilyBlocked(): string {
    return this._translations.get('temporarilyBlocked');
  }
}

export class I18n$Password$Action {

  private _translations: Translations = new Translations('password.action');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `change`.
   * Default value: `Change`
   */
  get change(): string {
    return this._translations.get('change');
  }

  /**
   * Returns the value of translation message for key `change.done`.
   * Default value: `Your {type} was changed`
   */
  changeDone(type: string | number): string {
    return this._translations.get('change.done', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `change.generated.confirm`.
   * Default value: `This will generate a new {type}, and the value will be displayed only once. Are you sure?`
   */
  changeGeneratedConfirm(type: string | number): string {
    return this._translations.get('change.generated.confirm', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `change.generated.done`.
   * Default value: `The value for {type} is <data>{value}</data>.<br>Make sure to memorize it, as it won't be displayed again.`
   */
  changeGeneratedDone($: {type: string | number, value: string | number}): string {
    return this._translations.get('change.generated.done', {
      type: $.type,
      value: $.value
    });
  }

  /**
   * Returns the value of translation message for key `unblock`.
   * Default value: `Unblock`
   */
  get unblock(): string {
    return this._translations.get('unblock');
  }

  /**
   * Returns the value of translation message for key `unblock.confirm`.
   * Default value: `Are you sure to unblock your {type}?`
   */
  unblockConfirm(type: string | number): string {
    return this._translations.get('unblock.confirm', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `unblock.done`.
   * Default value: `Your {type} was unblocked`
   */
  unblockDone(type: string | number): string {
    return this._translations.get('unblock.done', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `activate`.
   * Default value: `Activate`
   */
  get activate(): string {
    return this._translations.get('activate');
  }

  /**
   * Returns the value of translation message for key `activate.confirm`.
   * Default value: `This will activate your {type}, and the generated value will be displayed only once. Are you sure?`
   */
  activateConfirm(type: string | number): string {
    return this._translations.get('activate.confirm', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `enable`.
   * Default value: `Enable`
   */
  get enable(): string {
    return this._translations.get('enable');
  }

  /**
   * Returns the value of translation message for key `enable.confirm`.
   * Default value: `Are you sure to enable your {type}?`
   */
  enableConfirm(type: string | number): string {
    return this._translations.get('enable.confirm', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `enable.done`.
   * Default value: `Your {type} was enabled`
   */
  enableDone(type: string | number): string {
    return this._translations.get('enable.done', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `disable`.
   * Default value: `Disable`
   */
  get disable(): string {
    return this._translations.get('disable');
  }

  /**
   * Returns the value of translation message for key `disable.confirm`.
   * Default value: `Are you sure to disable your {type}?`
   */
  disableConfirm(type: string | number): string {
    return this._translations.get('disable.confirm', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `disable.done`.
   * Default value: `Your {type} was disabled`
   */
  disableDone(type: string | number): string {
    return this._translations.get('disable.done', {
      type: type
    });
  }
}

export class I18n$PendingAgreements {

  private _translations: Translations = new Translations('pendingAgreements');

  private _nested = {
    title: new I18n$PendingAgreements$Title(),
    mobileTitle: new I18n$PendingAgreements$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `message.previouslyAccepted`.
   * Default value: `The registration agreement has been updated.<br><br>In order to continue, you must agree with the new terms.`
   */
  get messagePreviouslyAccepted(): string {
    return this._translations.get('message.previouslyAccepted');
  }

  /**
   * Returns the value of translation message for key `message.firstTime`.
   * Default value: `In order to complete your registration, you must agree with these terms.`
   */
  get messageFirstTime(): string {
    return this._translations.get('message.firstTime');
  }

  /**
   * Returns the value of translation message for key `agree`.
   * Default value: `I agree with the following registration agreements: {agreements}`
   */
  agree(agreements: string | number): string {
    return this._translations.get('agree', {
      agreements: agreements
    });
  }

  /**
   * Returns the value of translation message for key `preface`.
   * Default value: `I hereby declare that I have read and agree with the following:`
   */
  get preface(): string {
    return this._translations.get('preface');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$PendingAgreements$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$PendingAgreements$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$PendingAgreements$Title {

  private _translations: Translations = new Translations('pendingAgreements.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `previouslyAccepted`.
   * Default value: `Updated agreement`
   */
  get previouslyAccepted(): string {
    return this._translations.get('previouslyAccepted');
  }

  /**
   * Returns the value of translation message for key `firstTime`.
   * Default value: `Registration agreement`
   */
  get firstTime(): string {
    return this._translations.get('firstTime');
  }
}

export class I18n$PendingAgreements$MobileTitle {

  private _translations: Translations = new Translations('pendingAgreements.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `previouslyAccepted`.
   * Default value: `Updated agreement`
   */
  get previouslyAccepted(): string {
    return this._translations.get('previouslyAccepted');
  }

  /**
   * Returns the value of translation message for key `firstTime`.
   * Default value: `Registration agreement`
   */
  get firstTime(): string {
    return this._translations.get('firstTime');
  }
}

export class I18n$SecurityQuestion {

  private _translations: Translations = new Translations('securityQuestion');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `message`.
   * Default value: `The security question is required in case you need to reset your password. Once set, if you need to change it, contact the administration.`
   */
  get message(): string {
    return this._translations.get('message');
  }

  /**
   * Returns the value of translation message for key `question`.
   * Default value: `Security question`
   */
  get question(): string {
    return this._translations.get('question');
  }

  /**
   * Returns the value of translation message for key `answer`.
   * Default value: `Your answer`
   */
  get answer(): string {
    return this._translations.get('answer');
  }

  /**
   * Returns the value of translation message for key `set`.
   * Default value: `Your security answer was set`
   */
  get set(): string {
    return this._translations.get('set');
  }
}

export class I18n$Dashboard {

  private _translations: Translations = new Translations('dashboard');

  private _nested = {
    action: new I18n$Dashboard$Action(),
    passwords: new I18n$Dashboard$Passwords()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.action.defaultValues = defaultValues['action'];
    this._nested.passwords.defaultValues = defaultValues['passwords'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.action.initialize(values['action']);
    this._nested.passwords.initialize(values['passwords']);
  }

  /**
   * Returns the value of translation message for key `quickAccess`.
   * Default value: `Quick access`
   */
  get quickAccess(): string {
    return this._translations.get('quickAccess');
  }

  /**
   * Returns the value of translation message for key `quickAccess.shortcutTemplate`.
   * Default value: `{shortcut}: {label}`
   */
  quickAccessShortcutTemplate($: {shortcut: string | number, label: string | number}): string {
    return this._translations.get('quickAccess.shortcutTemplate', {
      shortcut: $.shortcut,
      label: $.label
    });
  }

  /**
   * Returns the value of translation message for key `accounts`.
   * Default value: `Accounts`
   */
  get accounts(): string {
    return this._translations.get('accounts');
  }

  /**
   * Returns the value of translation message for key `accountStatus`.
   * Default value: `Account status`
   */
  get accountStatus(): string {
    return this._translations.get('accountStatus');
  }

  /**
   * Returns the value of translation message for key `lastIncomingPayments`.
   * Default value: `Last incoming payments`
   */
  get lastIncomingPayments(): string {
    return this._translations.get('lastIncomingPayments');
  }

  /**
   * Returns the value of translation message for key `noIncomingPayments`.
   * Default value: `No incoming payments`
   */
  get noIncomingPayments(): string {
    return this._translations.get('noIncomingPayments');
  }

  /**
   * Returns the value of translation message for key `latestAds`.
   * Default value: `Latest advertisements`
   */
  get latestAds(): string {
    return this._translations.get('latestAds');
  }

  /**
   * Returns the value of translation message for key `latestUsers`.
   * Default value: `Latest users`
   */
  get latestUsers(): string {
    return this._translations.get('latestUsers');
  }

  /**
   * Returns the nested accessor for translation messages in `action`.
   */
  get action(): I18n$Dashboard$Action {
    return this._nested.action;
  }

  /**
   * Returns the nested accessor for translation messages in `passwords`.
   */
  get passwords(): I18n$Dashboard$Passwords {
    return this._nested.passwords;
  }
}

export class I18n$Dashboard$Action {

  private _translations: Translations = new Translations('dashboard.action');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `account`.
   * Default value: `Account`
   */
  get account(): string {
    return this._translations.get('account');
  }

  /**
   * Returns the value of translation message for key `payUser`.
   * Default value: `Pay user`
   */
  get payUser(): string {
    return this._translations.get('payUser');
  }

  /**
   * Returns the value of translation message for key `paySystem`.
   * Default value: `Pay system`
   */
  get paySystem(): string {
    return this._translations.get('paySystem');
  }

  /**
   * Returns the value of translation message for key `pos`.
   * Default value: `Receive payment`
   */
  get pos(): string {
    return this._translations.get('pos');
  }

  /**
   * Returns the value of translation message for key `receiveQRPayment`.
   * Default value: `Receive QR payment`
   */
  get receiveqrpayment(): string {
    return this._translations.get('receiveQRPayment');
  }

  /**
   * Returns the value of translation message for key `contacts`.
   * Default value: `Contacts`
   */
  get contacts(): string {
    return this._translations.get('contacts');
  }

  /**
   * Returns the value of translation message for key `directory`.
   * Default value: `Directory`
   */
  get directory(): string {
    return this._translations.get('directory');
  }

  /**
   * Returns the value of translation message for key `advertisements`.
   * Default value: `Marketplace`
   */
  get advertisements(): string {
    return this._translations.get('advertisements');
  }

  /**
   * Returns the value of translation message for key `editProfile`.
   * Default value: `Edit profile`
   */
  get editProfile(): string {
    return this._translations.get('editProfile');
  }

  /**
   * Returns the value of translation message for key `password`.
   * Default value: `Password`
   */
  get password(): string {
    return this._translations.get('password');
  }

  /**
   * Returns the value of translation message for key `passwords`.
   * Default value: `Passwords`
   */
  get passwords(): string {
    return this._translations.get('passwords');
  }

  /**
   * Returns the value of translation message for key `switchTheme`.
   * Default value: `Switch theme`
   */
  get switchTheme(): string {
    return this._translations.get('switchTheme');
  }

  /**
   * Returns the value of translation message for key `connectedUsers`.
   * Default value: `Connected users`
   */
  get connectedUsers(): string {
    return this._translations.get('connectedUsers');
  }
}

export class I18n$Dashboard$Passwords {

  private _translations: Translations = new Translations('dashboard.passwords');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `Your {type} has expired.`
   */
  expired(type: string | number): string {
    return this._translations.get('expired', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `reset`.
   * Default value: `Your {type} has reset.`
   */
  reset(type: string | number): string {
    return this._translations.get('reset', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Your {type} is pending generation.`
   */
  pending(type: string | number): string {
    return this._translations.get('pending', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `neverCreated`.
   * Default value: `Your {type} needs to be set.`
   */
  neverCreated(type: string | number): string {
    return this._translations.get('neverCreated', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `securityAnswer`.
   * Default value: `You should set the security question, which will be required in case you need to reset your password.`
   */
  get securityAnswer(): string {
    return this._translations.get('securityAnswer');
  }

  /**
   * Returns the value of translation message for key `proceed`.
   * Default value: `Click here to proceed`
   */
  get proceed(): string {
    return this._translations.get('proceed');
  }
}

export class I18n$Account {

  private _translations: Translations = new Translations('account');

  private _nested = {
    orderBy: new I18n$Account$OrderBy(),
    userBalances: new I18n$Account$UserBalances(),
    limits: new I18n$Account$Limits(),
    balanceLimits: new I18n$Account$BalanceLimits(),
    paymentLimits: new I18n$Account$PaymentLimits()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.orderBy.defaultValues = defaultValues['orderBy'];
    this._nested.userBalances.defaultValues = defaultValues['userBalances'];
    this._nested.limits.defaultValues = defaultValues['limits'];
    this._nested.balanceLimits.defaultValues = defaultValues['balanceLimits'];
    this._nested.paymentLimits.defaultValues = defaultValues['paymentLimits'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.orderBy.initialize(values['orderBy']);
    this._nested.userBalances.initialize(values['userBalances']);
    this._nested.limits.initialize(values['limits']);
    this._nested.balanceLimits.initialize(values['balanceLimits']);
    this._nested.paymentLimits.initialize(values['paymentLimits']);
  }

  /**
   * Returns the value of translation message for key `account`.
   * Default value: `Account`
   */
  get account(): string {
    return this._translations.get('account');
  }

  /**
   * Returns the value of translation message for key `number`.
   * Default value: `Account number`
   */
  get number(): string {
    return this._translations.get('number');
  }

  /**
   * Returns the value of translation message for key `transferFilter`.
   * Default value: `Filter`
   */
  get transferFilter(): string {
    return this._translations.get('transferFilter');
  }

  /**
   * Returns the value of translation message for key `minAmount`.
   * Default value: `From amount`
   */
  get minAmount(): string {
    return this._translations.get('minAmount');
  }

  /**
   * Returns the value of translation message for key `maxAmount`.
   * Default value: `To amount`
   */
  get maxAmount(): string {
    return this._translations.get('maxAmount');
  }

  /**
   * Returns the value of translation message for key `direction`.
   * Default value: `Direction`
   */
  get direction(): string {
    return this._translations.get('direction');
  }

  /**
   * Returns the value of translation message for key `incoming`.
   * Default value: `Incoming`
   */
  get incoming(): string {
    return this._translations.get('incoming');
  }

  /**
   * Returns the value of translation message for key `outgoing`.
   * Default value: `Outgoing`
   */
  get outgoing(): string {
    return this._translations.get('outgoing');
  }

  /**
   * Returns the value of translation message for key `balance`.
   * Default value: `Balance`
   */
  get balance(): string {
    return this._translations.get('balance');
  }

  /**
   * Returns the value of translation message for key `reservedAmount`.
   * Default value: `Reserved amount`
   */
  get reservedAmount(): string {
    return this._translations.get('reservedAmount');
  }

  /**
   * Returns the value of translation message for key `availableBalance`.
   * Default value: `Available balance`
   */
  get availableBalance(): string {
    return this._translations.get('availableBalance');
  }

  /**
   * Returns the value of translation message for key `negativeLimit`.
   * Default value: `Negative limit`
   */
  get negativeLimit(): string {
    return this._translations.get('negativeLimit');
  }

  /**
   * Returns the value of translation message for key `positiveLimit`.
   * Default value: `Positive limit`
   */
  get positiveLimit(): string {
    return this._translations.get('positiveLimit');
  }

  /**
   * Returns the value of translation message for key `balanceOn`.
   * Default value: `Balance on {date}`
   */
  balanceOn(date: string | number): string {
    return this._translations.get('balanceOn', {
      date: date
    });
  }

  /**
   * Returns the value of translation message for key `totalIncome`.
   * Default value: `Total received`
   */
  get totalIncome(): string {
    return this._translations.get('totalIncome');
  }

  /**
   * Returns the value of translation message for key `totalOutflow`.
   * Default value: `Total paid`
   */
  get totalOutflow(): string {
    return this._translations.get('totalOutflow');
  }

  /**
   * Returns the value of translation message for key `netInflow`.
   * Default value: `Net income`
   */
  get netInflow(): string {
    return this._translations.get('netInflow');
  }

  /**
   * Returns the value of translation message for key `noAccounts`.
   * Default value: `You have no accounts`
   */
  get noAccounts(): string {
    return this._translations.get('noAccounts');
  }

  /**
   * Returns the value of translation message for key `system`.
   * Default value: `System account`
   */
  get system(): string {
    return this._translations.get('system');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Account`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the nested accessor for translation messages in `orderBy`.
   */
  get orderBy(): I18n$Account$OrderBy {
    return this._nested.orderBy;
  }

  /**
   * Returns the nested accessor for translation messages in `userBalances`.
   */
  get userBalances(): I18n$Account$UserBalances {
    return this._nested.userBalances;
  }

  /**
   * Returns the nested accessor for translation messages in `limits`.
   */
  get limits(): I18n$Account$Limits {
    return this._nested.limits;
  }

  /**
   * Returns the nested accessor for translation messages in `balanceLimits`.
   */
  get balanceLimits(): I18n$Account$BalanceLimits {
    return this._nested.balanceLimits;
  }

  /**
   * Returns the nested accessor for translation messages in `paymentLimits`.
   */
  get paymentLimits(): I18n$Account$PaymentLimits {
    return this._nested.paymentLimits;
  }
}

export class I18n$Account$OrderBy {

  private _translations: Translations = new Translations('account.orderBy');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `dateDesc`.
   * Default value: `Date (newest first)`
   */
  get dateDesc(): string {
    return this._translations.get('dateDesc');
  }

  /**
   * Returns the value of translation message for key `dateAsc`.
   * Default value: `Date (oldest first)`
   */
  get dateAsc(): string {
    return this._translations.get('dateAsc');
  }

  /**
   * Returns the value of translation message for key `amountAsc`.
   * Default value: `Amount (lowest first)`
   */
  get amountAsc(): string {
    return this._translations.get('amountAsc');
  }

  /**
   * Returns the value of translation message for key `amountDesc`.
   * Default value: `Amount (highest first)`
   */
  get amountDesc(): string {
    return this._translations.get('amountDesc');
  }
}

export class I18n$Account$UserBalances {

  private _translations: Translations = new Translations('account.userBalances');

  private _nested = {
    orderBy: new I18n$Account$UserBalances$OrderBy()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.orderBy.defaultValues = defaultValues['orderBy'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.orderBy.initialize(values['orderBy']);
  }

  /**
   * Returns the value of translation message for key `negativeSince`.
   * Default value: `Negative since`
   */
  get negativeSince(): string {
    return this._translations.get('negativeSince');
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `User balances`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `User balances`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `minBalance`.
   * Default value: `From balance`
   */
  get minBalance(): string {
    return this._translations.get('minBalance');
  }

  /**
   * Returns the value of translation message for key `maxBalance`.
   * Default value: `To balance`
   */
  get maxBalance(): string {
    return this._translations.get('maxBalance');
  }

  /**
   * Returns the value of translation message for key `balancesSum`.
   * Default value: `Balances sum`
   */
  get balancesSum(): string {
    return this._translations.get('balancesSum');
  }

  /**
   * Returns the value of translation message for key `balancesAverage`.
   * Default value: `Balances average`
   */
  get balancesAverage(): string {
    return this._translations.get('balancesAverage');
  }

  /**
   * Returns the value of translation message for key `balancesCount`.
   * Default value: `Balances count`
   */
  get balancesCount(): string {
    return this._translations.get('balancesCount');
  }

  /**
   * Returns the value of translation message for key `total`.
   * Default value: `Total`
   */
  get total(): string {
    return this._translations.get('total');
  }

  /**
   * Returns the value of translation message for key `fromYellowBalance`.
   * Default value: `From yellow balance`
   */
  get fromYellowBalance(): string {
    return this._translations.get('fromYellowBalance');
  }

  /**
   * Returns the value of translation message for key `toYellowBalance`.
   * Default value: `To yellow balance`
   */
  get toYellowBalance(): string {
    return this._translations.get('toYellowBalance');
  }

  /**
   * Returns the value of translation message for key `beginNegativeSince`.
   * Default value: `Negative after`
   */
  get beginNegativeSince(): string {
    return this._translations.get('beginNegativeSince');
  }

  /**
   * Returns the value of translation message for key `endNegativeSince`.
   * Default value: `Negative before`
   */
  get endNegativeSince(): string {
    return this._translations.get('endNegativeSince');
  }

  /**
   * Returns the nested accessor for translation messages in `orderBy`.
   */
  get orderBy(): I18n$Account$UserBalances$OrderBy {
    return this._nested.orderBy;
  }
}

export class I18n$Account$UserBalances$OrderBy {

  private _translations: Translations = new Translations('account.userBalances.orderBy');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `alphabeticallyDesc`.
   * Default value: `Name (A-Z)`
   */
  get alphabeticallyDesc(): string {
    return this._translations.get('alphabeticallyDesc');
  }

  /**
   * Returns the value of translation message for key `alphabeticallyAsc`.
   * Default value: `Name (Z-A)`
   */
  get alphabeticallyAsc(): string {
    return this._translations.get('alphabeticallyAsc');
  }

  /**
   * Returns the value of translation message for key `balanceAsc`.
   * Default value: `Balance (lowest first)`
   */
  get balanceAsc(): string {
    return this._translations.get('balanceAsc');
  }

  /**
   * Returns the value of translation message for key `balanceDesc`.
   * Default value: `Balance (highest first)`
   */
  get balanceDesc(): string {
    return this._translations.get('balanceDesc');
  }
}

export class I18n$Account$Limits {

  private _translations: Translations = new Translations('account.limits');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `unlimited`.
   * Default value: `Unlimited`
   */
  get unlimited(): string {
    return this._translations.get('unlimited');
  }

  /**
   * Returns the value of translation message for key `mode`.
   * Default value: `Mode`
   */
  get mode(): string {
    return this._translations.get('mode');
  }

  /**
   * Returns the value of translation message for key `personalized`.
   * Default value: `Personalized`
   */
  get personalized(): string {
    return this._translations.get('personalized');
  }

  /**
   * Returns the value of translation message for key `productDefault`.
   * Default value: `Product default`
   */
  get productDefault(): string {
    return this._translations.get('productDefault');
  }
}

export class I18n$Account$BalanceLimits {

  private _translations: Translations = new Translations('account.balanceLimits');

  private _nested = {
    title: new I18n$Account$BalanceLimits$Title(),
    mobileTitle: new I18n$Account$BalanceLimits$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `negativeLimit`.
   * Default value: `Negative balance limit`
   */
  get negativeLimit(): string {
    return this._translations.get('negativeLimit');
  }

  /**
   * Returns the value of translation message for key `positiveLimit`.
   * Default value: `Positive balance limit`
   */
  get positiveLimit(): string {
    return this._translations.get('positiveLimit');
  }

  /**
   * Returns the value of translation message for key `personalizedNegativeLimit`.
   * Default value: `Personalized negative limit`
   */
  get personalizedNegativeLimit(): string {
    return this._translations.get('personalizedNegativeLimit');
  }

  /**
   * Returns the value of translation message for key `personalizedPositiveLimit`.
   * Default value: `Personalized positive limit`
   */
  get personalizedPositiveLimit(): string {
    return this._translations.get('personalizedPositiveLimit');
  }

  /**
   * Returns the value of translation message for key `fromNegativeLimit`.
   * Default value: `From negative limit`
   */
  get fromNegativeLimit(): string {
    return this._translations.get('fromNegativeLimit');
  }

  /**
   * Returns the value of translation message for key `toNegativeLimit`.
   * Default value: `To negative limit`
   */
  get toNegativeLimit(): string {
    return this._translations.get('toNegativeLimit');
  }

  /**
   * Returns the value of translation message for key `fromPositiveLimit`.
   * Default value: `From positive limit`
   */
  get fromPositiveLimit(): string {
    return this._translations.get('fromPositiveLimit');
  }

  /**
   * Returns the value of translation message for key `toPositiveLimit`.
   * Default value: `To positive limit`
   */
  get toPositiveLimit(): string {
    return this._translations.get('toPositiveLimit');
  }

  /**
   * Returns the value of translation message for key `negative`.
   * Default value: `Negative`
   */
  get negative(): string {
    return this._translations.get('negative');
  }

  /**
   * Returns the value of translation message for key `positive`.
   * Default value: `Positive`
   */
  get positive(): string {
    return this._translations.get('positive');
  }

  /**
   * Returns the value of translation message for key `confirm`.
   * Default value: `You must confirm to apply the new balance limits`
   */
  get confirm(): string {
    return this._translations.get('confirm');
  }

  /**
   * Returns the value of translation message for key `saved`.
   * Default value: `The balance limits were saved`
   */
  get saved(): string {
    return this._translations.get('saved');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Account$BalanceLimits$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Account$BalanceLimits$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$Account$BalanceLimits$Title {

  private _translations: Translations = new Translations('account.balanceLimits.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Account balance limits`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Account balance limits details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Account balance limits details`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Account balance limits history`
   */
  get history(): string {
    return this._translations.get('history');
  }

  /**
   * Returns the value of translation message for key `overview`.
   * Default value: `Account balance limits overview`
   */
  get overview(): string {
    return this._translations.get('overview');
  }
}

export class I18n$Account$BalanceLimits$MobileTitle {

  private _translations: Translations = new Translations('account.balanceLimits.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Balance limits`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Balance limits details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Balance limits details`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Balance limits history`
   */
  get history(): string {
    return this._translations.get('history');
  }

  /**
   * Returns the value of translation message for key `overview`.
   * Default value: `Balance limits overview`
   */
  get overview(): string {
    return this._translations.get('overview');
  }
}

export class I18n$Account$PaymentLimits {

  private _translations: Translations = new Translations('account.paymentLimits');

  private _nested = {
    title: new I18n$Account$PaymentLimits$Title(),
    mobileTitle: new I18n$Account$PaymentLimits$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `paymentLimit`.
   * Default value: `Payment limit`
   */
  get paymentLimit(): string {
    return this._translations.get('paymentLimit');
  }

  /**
   * Returns the value of translation message for key `dailyLimit`.
   * Default value: `Daily limit`
   */
  get dailyLimit(): string {
    return this._translations.get('dailyLimit');
  }

  /**
   * Returns the value of translation message for key `weeklyLimit`.
   * Default value: `Weekly limit`
   */
  get weeklyLimit(): string {
    return this._translations.get('weeklyLimit');
  }

  /**
   * Returns the value of translation message for key `monthlyLimit`.
   * Default value: `Monthly limit`
   */
  get monthlyLimit(): string {
    return this._translations.get('monthlyLimit');
  }

  /**
   * Returns the value of translation message for key `personalizedPaymentLimit`.
   * Default value: `Personalized payment limit`
   */
  get personalizedPaymentLimit(): string {
    return this._translations.get('personalizedPaymentLimit');
  }

  /**
   * Returns the value of translation message for key `personalizedDailyLimit`.
   * Default value: `Personalized daily limit`
   */
  get personalizedDailyLimit(): string {
    return this._translations.get('personalizedDailyLimit');
  }

  /**
   * Returns the value of translation message for key `personalizedWeeklyLimit`.
   * Default value: `Personalized weekly limit`
   */
  get personalizedWeeklyLimit(): string {
    return this._translations.get('personalizedWeeklyLimit');
  }

  /**
   * Returns the value of translation message for key `personalizedMonthlyLimit`.
   * Default value: `Personalized monthly limit`
   */
  get personalizedMonthlyLimit(): string {
    return this._translations.get('personalizedMonthlyLimit');
  }

  /**
   * Returns the value of translation message for key `fromPaymentLimit`.
   * Default value: `From payment limit`
   */
  get fromPaymentLimit(): string {
    return this._translations.get('fromPaymentLimit');
  }

  /**
   * Returns the value of translation message for key `fromDailyLimit`.
   * Default value: `From daily limit`
   */
  get fromDailyLimit(): string {
    return this._translations.get('fromDailyLimit');
  }

  /**
   * Returns the value of translation message for key `fromWeeklyLimit`.
   * Default value: `From weekly limit`
   */
  get fromWeeklyLimit(): string {
    return this._translations.get('fromWeeklyLimit');
  }

  /**
   * Returns the value of translation message for key `fromMonthlyLimit`.
   * Default value: `From monthly limit`
   */
  get fromMonthlyLimit(): string {
    return this._translations.get('fromMonthlyLimit');
  }

  /**
   * Returns the value of translation message for key `toPaymentLimit`.
   * Default value: `To payment limit`
   */
  get toPaymentLimit(): string {
    return this._translations.get('toPaymentLimit');
  }

  /**
   * Returns the value of translation message for key `toDailyLimit`.
   * Default value: `To daily limit`
   */
  get toDailyLimit(): string {
    return this._translations.get('toDailyLimit');
  }

  /**
   * Returns the value of translation message for key `toWeeklyLimit`.
   * Default value: `To weekly limit`
   */
  get toWeeklyLimit(): string {
    return this._translations.get('toWeeklyLimit');
  }

  /**
   * Returns the value of translation message for key `toMonthlyLimit`.
   * Default value: `To monthly limit`
   */
  get toMonthlyLimit(): string {
    return this._translations.get('toMonthlyLimit');
  }

  /**
   * Returns the value of translation message for key `confirm`.
   * Default value: `You must confirm to apply the new payment limits`
   */
  get confirm(): string {
    return this._translations.get('confirm');
  }

  /**
   * Returns the value of translation message for key `saved`.
   * Default value: `The payment limits were saved`
   */
  get saved(): string {
    return this._translations.get('saved');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Account$PaymentLimits$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Account$PaymentLimits$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$Account$PaymentLimits$Title {

  private _translations: Translations = new Translations('account.paymentLimits.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Accounts payment limits`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Account payment limits details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Account payment limits details`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Account payment limits history`
   */
  get history(): string {
    return this._translations.get('history');
  }

  /**
   * Returns the value of translation message for key `overview`.
   * Default value: `Account payment limits overview`
   */
  get overview(): string {
    return this._translations.get('overview');
  }
}

export class I18n$Account$PaymentLimits$MobileTitle {

  private _translations: Translations = new Translations('account.paymentLimits.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Payment limits`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Payment limits details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Payment limits details`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Payment limits history`
   */
  get history(): string {
    return this._translations.get('history');
  }

  /**
   * Returns the value of translation message for key `overview`.
   * Default value: `Payment limits overview`
   */
  get overview(): string {
    return this._translations.get('overview');
  }
}

export class I18n$Transaction {

  private _translations: Translations = new Translations('transaction');

  private _nested = {
    transferkind: new I18n$Transaction$Transferkind(),
    schedulingStatus: new I18n$Transaction$SchedulingStatus(),
    status: new I18n$Transaction$Status(),
    title: new I18n$Transaction$Title(),
    mobileTitle: new I18n$Transaction$MobileTitle(),
    error: new I18n$Transaction$Error()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.transferkind.defaultValues = defaultValues['transferkind'];
    this._nested.schedulingStatus.defaultValues = defaultValues['schedulingStatus'];
    this._nested.status.defaultValues = defaultValues['status'];
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.error.defaultValues = defaultValues['error'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.transferkind.initialize(values['transferkind']);
    this._nested.schedulingStatus.initialize(values['schedulingStatus']);
    this._nested.status.initialize(values['status']);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.error.initialize(values['error']);
  }

  /**
   * Returns the value of translation message for key `number`.
   * Default value: `Transaction number`
   */
  get number(): string {
    return this._translations.get('number');
  }

  /**
   * Returns the value of translation message for key `amount`.
   * Default value: `Amount`
   */
  get amount(): string {
    return this._translations.get('amount');
  }

  /**
   * Returns the value of translation message for key `type`.
   * Default value: `Payment type`
   */
  get type(): string {
    return this._translations.get('type');
  }

  /**
   * Returns the value of translation message for key `fromTo`.
   * Default value: `From / to`
   */
  get fromTo(): string {
    return this._translations.get('fromTo');
  }

  /**
   * Returns the value of translation message for key `fromTo.text`.
   * Default value: `{from} to {to}`
   */
  fromToText($: {from: string | number, to: string | number}): string {
    return this._translations.get('fromTo.text', {
      from: $.from,
      to: $.to
    });
  }

  /**
   * Returns the value of translation message for key `from`.
   * Default value: `From`
   */
  get from(): string {
    return this._translations.get('from');
  }

  /**
   * Returns the value of translation message for key `to`.
   * Default value: `To`
   */
  get to(): string {
    return this._translations.get('to');
  }

  /**
   * Returns the value of translation message for key `sender`.
   * Default value: `Sender`
   */
  get sender(): string {
    return this._translations.get('sender');
  }

  /**
   * Returns the value of translation message for key `receiver`.
   * Default value: `Receiver`
   */
  get receiver(): string {
    return this._translations.get('receiver');
  }

  /**
   * Returns the value of translation message for key `senderOrReceiver`.
   * Default value: `Sender or receiver`
   */
  get senderOrReceiver(): string {
    return this._translations.get('senderOrReceiver');
  }

  /**
   * Returns the value of translation message for key `sent`.
   * Default value: `Sent`
   */
  get sent(): string {
    return this._translations.get('sent');
  }

  /**
   * Returns the value of translation message for key `received`.
   * Default value: `Received`
   */
  get received(): string {
    return this._translations.get('received');
  }

  /**
   * Returns the value of translation message for key `direction`.
   * Default value: `Direction`
   */
  get direction(): string {
    return this._translations.get('direction');
  }

  /**
   * Returns the value of translation message for key `account`.
   * Default value: `Account`
   */
  get account(): string {
    return this._translations.get('account');
  }

  /**
   * Returns the value of translation message for key `fromAccount`.
   * Default value: `From account`
   */
  get fromAccount(): string {
    return this._translations.get('fromAccount');
  }

  /**
   * Returns the value of translation message for key `fromUser`.
   * Default value: `From user`
   */
  get fromUser(): string {
    return this._translations.get('fromUser');
  }

  /**
   * Returns the value of translation message for key `toAccount`.
   * Default value: `To account`
   */
  get toAccount(): string {
    return this._translations.get('toAccount');
  }

  /**
   * Returns the value of translation message for key `toUser`.
   * Default value: `To user`
   */
  get toUser(): string {
    return this._translations.get('toUser');
  }

  /**
   * Returns the value of translation message for key `requiresAuthorization`.
   * Default value: `The payment will require authorization`
   */
  get requiresAuthorization(): string {
    return this._translations.get('requiresAuthorization');
  }

  /**
   * Returns the value of translation message for key `appliedFees`.
   * Default value: `Applied fees`
   */
  get appliedFees(): string {
    return this._translations.get('appliedFees');
  }

  /**
   * Returns the value of translation message for key `totalAmount`.
   * Default value: `Total amount`
   */
  get totalAmount(): string {
    return this._translations.get('totalAmount');
  }

  /**
   * Returns the value of translation message for key `dueAmount`.
   * Default value: `Due amount`
   */
  get dueAmount(): string {
    return this._translations.get('dueAmount');
  }

  /**
   * Returns the value of translation message for key `dueDate`.
   * Default value: `Due date`
   */
  get dueDate(): string {
    return this._translations.get('dueDate');
  }

  /**
   * Returns the value of translation message for key `processDate`.
   * Default value: `Process date`
   */
  get processDate(): string {
    return this._translations.get('processDate');
  }

  /**
   * Returns the value of translation message for key `processDateTooltip`.
   * Default value: `Select this option to schedule processing`
   */
  get processDateTooltip(): string {
    return this._translations.get('processDateTooltip');
  }

  /**
   * Returns the value of translation message for key `nextOccurrence`.
   * Default value: `Next occurrence`
   */
  get nextOccurrence(): string {
    return this._translations.get('nextOccurrence');
  }

  /**
   * Returns the value of translation message for key `channel`.
   * Default value: `Channel`
   */
  get channel(): string {
    return this._translations.get('channel');
  }

  /**
   * Returns the value of translation message for key `receivedBy`.
   * Default value: `Received by`
   */
  get receivedBy(): string {
    return this._translations.get('receivedBy');
  }

  /**
   * Returns the value of translation message for key `chargedBack`.
   * Default value: `Charged back`
   */
  get chargedBack(): string {
    return this._translations.get('chargedBack');
  }

  /**
   * Returns the value of translation message for key `chargebackOf`.
   * Default value: `Chargeback of`
   */
  get chargebackOf(): string {
    return this._translations.get('chargebackOf');
  }

  /**
   * Returns the value of translation message for key `chargedBackBy`.
   * Default value: `Charged back by`
   */
  get chargedBackBy(): string {
    return this._translations.get('chargedBackBy');
  }

  /**
   * Returns the value of translation message for key `authorizationComments`.
   * Default value: `Authorization comments`
   */
  get authorizationComments(): string {
    return this._translations.get('authorizationComments');
  }

  /**
   * Returns the value of translation message for key `actionPerformedBy`.
   * Default value: `Action performed by`
   */
  get actionPerformedBy(): string {
    return this._translations.get('actionPerformedBy');
  }

  /**
   * Returns the value of translation message for key `accountBalance`.
   * Default value: `Account balance`
   */
  get accountBalance(): string {
    return this._translations.get('accountBalance');
  }

  /**
   * Returns the value of translation message for key `installments`.
   * Default value: `Installments`
   */
  get installments(): string {
    return this._translations.get('installments');
  }

  /**
   * Returns the value of translation message for key `installmentNumber`.
   * Default value: `Number`
   */
  get installmentNumber(): string {
    return this._translations.get('installmentNumber');
  }

  /**
   * Returns the value of translation message for key `installmentNumberOfTotal`.
   * Default value: `{number} of {total}`
   */
  installmentNumberOfTotal($: {number: string | number, total: string | number}): string {
    return this._translations.get('installmentNumberOfTotal', {
      number: $.number,
      total: $.total
    });
  }

  /**
   * Returns the value of translation message for key `occurrences`.
   * Default value: `Ocurrences`
   */
  get occurrences(): string {
    return this._translations.get('occurrences');
  }

  /**
   * Returns the value of translation message for key `noAccounts`.
   * Default value: `You don't have any accounts to perform the payment`
   */
  get noAccounts(): string {
    return this._translations.get('noAccounts');
  }

  /**
   * Returns the value of translation message for key `noTypes`.
   * Default value: `There are no possible payment types`
   */
  get noTypes(): string {
    return this._translations.get('noTypes');
  }

  /**
   * Returns the value of translation message for key `noTypesSelection`.
   * Default value: `There are no possible payment types for this account and user`
   */
  get noTypesSelection(): string {
    return this._translations.get('noTypesSelection');
  }

  /**
   * Returns the value of translation message for key `transferKinds`.
   * Default value: `Transfer kinds`
   */
  get transferKinds(): string {
    return this._translations.get('transferKinds');
  }

  /**
   * Returns the value of translation message for key `scheduling`.
   * Default value: `Scheduling`
   */
  get scheduling(): string {
    return this._translations.get('scheduling');
  }

  /**
   * Returns the value of translation message for key `scheduling.direct`.
   * Default value: `Pay now`
   */
  get schedulingDirect(): string {
    return this._translations.get('scheduling.direct');
  }

  /**
   * Returns the value of translation message for key `scheduling.single`.
   * Default value: `Scheduled`
   */
  get schedulingSingle(): string {
    return this._translations.get('scheduling.single');
  }

  /**
   * Returns the value of translation message for key `scheduling.installments`.
   * Default value: `Monthly installments`
   */
  get schedulingInstallments(): string {
    return this._translations.get('scheduling.installments');
  }

  /**
   * Returns the value of translation message for key `scheduling.recurring`.
   * Default value: `Repeat monthly`
   */
  get schedulingRecurring(): string {
    return this._translations.get('scheduling.recurring');
  }

  /**
   * Returns the value of translation message for key `recurringPayment`.
   * Default value: `Recurring payment`
   */
  get recurringPayment(): string {
    return this._translations.get('recurringPayment');
  }

  /**
   * Returns the value of translation message for key `recurringPayment.nowManual`.
   * Default value: `Repeats until manually canceled, starting now`
   */
  get recurringPaymentNowManual(): string {
    return this._translations.get('recurringPayment.nowManual');
  }

  /**
   * Returns the value of translation message for key `recurringPayment.dateManual`.
   * Default value: `Repeats until manually canceled, starting at {date}`
   */
  recurringPaymentDateManual(date: string | number): string {
    return this._translations.get('recurringPayment.dateManual', {
      date: date
    });
  }

  /**
   * Returns the value of translation message for key `recurringPayment.nowFixed`.
   * Default value: `Repeats {count} times, starting now`
   */
  recurringPaymentNowFixed(count: string | number): string {
    return this._translations.get('recurringPayment.nowFixed', {
      count: count
    });
  }

  /**
   * Returns the value of translation message for key `recurringPayment.dateFixed`.
   * Default value: `Repeats {count} times, starting at {date}`
   */
  recurringPaymentDateFixed($: {count: string | number, date: string | number}): string {
    return this._translations.get('recurringPayment.dateFixed', {
      count: $.count,
      date: $.date
    });
  }

  /**
   * Returns the value of translation message for key `installmentsCount`.
   * Default value: `Number of installments`
   */
  get installmentsCount(): string {
    return this._translations.get('installmentsCount');
  }

  /**
   * Returns the value of translation message for key `firstInstallment`.
   * Default value: `First installment`
   */
  get firstInstallment(): string {
    return this._translations.get('firstInstallment');
  }

  /**
   * Returns the value of translation message for key `firstInstallment.date`.
   * Default value: `First installment date`
   */
  get firstInstallmentDate(): string {
    return this._translations.get('firstInstallment.date');
  }

  /**
   * Returns the value of translation message for key `repeatUntil`.
   * Default value: `Repeat until`
   */
  get repeatUntil(): string {
    return this._translations.get('repeatUntil');
  }

  /**
   * Returns the value of translation message for key `repeatUntil.manual`.
   * Default value: `Manually canceled`
   */
  get repeatUntilManual(): string {
    return this._translations.get('repeatUntil.manual');
  }

  /**
   * Returns the value of translation message for key `repeatUntil.fixed`.
   * Default value: `Fixed number of occurrences`
   */
  get repeatUntilFixed(): string {
    return this._translations.get('repeatUntil.fixed');
  }

  /**
   * Returns the value of translation message for key `occurrencesCount`.
   * Default value: `Number of occurrences`
   */
  get occurrencesCount(): string {
    return this._translations.get('occurrencesCount');
  }

  /**
   * Returns the value of translation message for key `firstOccurrence`.
   * Default value: `First occurrence`
   */
  get firstOccurrence(): string {
    return this._translations.get('firstOccurrence');
  }

  /**
   * Returns the value of translation message for key `firstOccurrence.date`.
   * Default value: `First occurrence date`
   */
  get firstOccurrenceDate(): string {
    return this._translations.get('firstOccurrence.date');
  }

  /**
   * Returns the value of translation message for key `processed`.
   * Default value: `The payment was successfully processed`
   */
  get processed(): string {
    return this._translations.get('processed');
  }

  /**
   * Returns the value of translation message for key `processed.withNumber`.
   * Default value: `The payment with transaction number {number} was successfully processed`
   */
  processedWithNumber(number: string | number): string {
    return this._translations.get('processed.withNumber', {
      number: number
    });
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `The payment was submitted for further authorization`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `pending.withNumber`.
   * Default value: `The payment with transaction number {number} was submitted for further authorization`
   */
  pendingWithNumber(number: string | number): string {
    return this._translations.get('pending.withNumber', {
      number: number
    });
  }

  /**
   * Returns the value of translation message for key `processedPaymentRequest`.
   * Default value: `The payment request was successfully processed`
   */
  get processedPaymentRequest(): string {
    return this._translations.get('processedPaymentRequest');
  }

  /**
   * Returns the value of translation message for key `processedPaymentRequest.withNumber`.
   * Default value: `The payment request with transaction number {number} was successfully processed`
   */
  processedPaymentRequestWithNumber(number: string | number): string {
    return this._translations.get('processedPaymentRequest.withNumber', {
      number: number
    });
  }

  /**
   * Returns the value of translation message for key `acceptedScheduledPaymentRequest`.
   * Default value: `The payment request was accepted and scheduled to be processed on {processDate}`
   */
  acceptedScheduledPaymentRequest(processDate: string | number): string {
    return this._translations.get('acceptedScheduledPaymentRequest', {
      processDate: processDate
    });
  }

  /**
   * Returns the value of translation message for key `done.view`.
   * Default value: `View payment`
   */
  get doneView(): string {
    return this._translations.get('done.view');
  }

  /**
   * Returns the value of translation message for key `done.new`.
   * Default value: `New payment`
   */
  get doneNew(): string {
    return this._translations.get('done.new');
  }

  /**
   * Returns the value of translation message for key `ticketShareTitle`.
   * Default value: `Invitation to perform a payment`
   */
  get ticketShareTitle(): string {
    return this._translations.get('ticketShareTitle');
  }

  /**
   * Returns the value of translation message for key `ticketShareText`.
   * Default value: `{user} has invited you to pay {amount}`
   */
  ticketShareText($: {user: string | number, amount: string | number}): string {
    return this._translations.get('ticketShareText', {
      user: $.user,
      amount: $.amount
    });
  }

  /**
   * Returns the value of translation message for key `ticketShareUrl`.
   * Default value: `URL to share`
   */
  get ticketShareUrl(): string {
    return this._translations.get('ticketShareUrl');
  }

  /**
   * Returns the value of translation message for key `viewAuthorizations`.
   * Default value: `View authorizations`
   */
  get viewAuthorizations(): string {
    return this._translations.get('viewAuthorizations');
  }

  /**
   * Returns the value of translation message for key `viewThisTransfer`.
   * Default value: `View this transfer`
   */
  get viewThisTransfer(): string {
    return this._translations.get('viewThisTransfer');
  }

  /**
   * Returns the value of translation message for key `authorizePending`.
   * Default value: `Authorize pending payment`
   */
  get authorizePending(): string {
    return this._translations.get('authorizePending');
  }

  /**
   * Returns the value of translation message for key `authorizePending.done.stillPending`.
   * Default value: `The payment still needs another authorization in order to be processed`
   */
  get authorizePendingDoneStillPending(): string {
    return this._translations.get('authorizePending.done.stillPending');
  }

  /**
   * Returns the value of translation message for key `authorizePending.done`.
   * Default value: `The payment was authorized`
   */
  get authorizePendingDone(): string {
    return this._translations.get('authorizePending.done');
  }

  /**
   * Returns the value of translation message for key `denyPending`.
   * Default value: `Deny pending payment`
   */
  get denyPending(): string {
    return this._translations.get('denyPending');
  }

  /**
   * Returns the value of translation message for key `denyPending.done`.
   * Default value: `The payment was denied`
   */
  get denyPendingDone(): string {
    return this._translations.get('denyPending.done');
  }

  /**
   * Returns the value of translation message for key `cancelAuthorization`.
   * Default value: `Cancel the authorization process`
   */
  get cancelAuthorization(): string {
    return this._translations.get('cancelAuthorization');
  }

  /**
   * Returns the value of translation message for key `cancelAuthorization.done`.
   * Default value: `The payment authorization was canceled`
   */
  get cancelAuthorizationDone(): string {
    return this._translations.get('cancelAuthorization.done');
  }

  /**
   * Returns the value of translation message for key `blockScheduling`.
   * Default value: `Block scheduling`
   */
  get blockScheduling(): string {
    return this._translations.get('blockScheduling');
  }

  /**
   * Returns the value of translation message for key `blockScheduling.message`.
   * Default value: `This will prevent scheduled installments from being automatically processed`
   */
  get blockSchedulingMessage(): string {
    return this._translations.get('blockScheduling.message');
  }

  /**
   * Returns the value of translation message for key `blockScheduling.done`.
   * Default value: `This scheduled payment will no longer be automatically processed`
   */
  get blockSchedulingDone(): string {
    return this._translations.get('blockScheduling.done');
  }

  /**
   * Returns the value of translation message for key `unblockScheduling`.
   * Default value: `Unblock scheduling`
   */
  get unblockScheduling(): string {
    return this._translations.get('unblockScheduling');
  }

  /**
   * Returns the value of translation message for key `unblockScheduling.message`.
   * Default value: `This will resume automatic processing for scheduled installments`
   */
  get unblockSchedulingMessage(): string {
    return this._translations.get('unblockScheduling.message');
  }

  /**
   * Returns the value of translation message for key `unblockScheduling.done`.
   * Default value: `This scheduled payment will be automatically processed`
   */
  get unblockSchedulingDone(): string {
    return this._translations.get('unblockScheduling.done');
  }

  /**
   * Returns the value of translation message for key `cancelScheduled`.
   * Default value: `Cancel this scheduled payment`
   */
  get cancelScheduled(): string {
    return this._translations.get('cancelScheduled');
  }

  /**
   * Returns the value of translation message for key `cancelScheduled.message`.
   * Default value: `This will permanently cancel this scheduled payment`
   */
  get cancelScheduledMessage(): string {
    return this._translations.get('cancelScheduled.message');
  }

  /**
   * Returns the value of translation message for key `cancelScheduled.done`.
   * Default value: `This scheduled payment has been canceled`
   */
  get cancelScheduledDone(): string {
    return this._translations.get('cancelScheduled.done');
  }

  /**
   * Returns the value of translation message for key `settleScheduled`.
   * Default value: `Settle the scheduled payment`
   */
  get settleScheduled(): string {
    return this._translations.get('settleScheduled');
  }

  /**
   * Returns the value of translation message for key `settleScheduled.message`.
   * Default value: `This will permanently mark all remaining installments as settled`
   */
  get settleScheduledMessage(): string {
    return this._translations.get('settleScheduled.message');
  }

  /**
   * Returns the value of translation message for key `settleScheduled.done`.
   * Default value: `This scheduled payment has been settled`
   */
  get settleScheduledDone(): string {
    return this._translations.get('settleScheduled.done');
  }

  /**
   * Returns the value of translation message for key `processScheduled`.
   * Default value: `Process this scheduled payment`
   */
  get processScheduled(): string {
    return this._translations.get('processScheduled');
  }

  /**
   * Returns the value of translation message for key `processScheduled.message`.
   * Default value: `Are you sure to process now this scheduled payment?`
   */
  get processScheduledMessage(): string {
    return this._translations.get('processScheduled.message');
  }

  /**
   * Returns the value of translation message for key `processScheduled.done`.
   * Default value: `This scheduled payment was processed`
   */
  get processScheduledDone(): string {
    return this._translations.get('processScheduled.done');
  }

  /**
   * Returns the value of translation message for key `cancelRecurring`.
   * Default value: `Cancel this recurring payment`
   */
  get cancelRecurring(): string {
    return this._translations.get('cancelRecurring');
  }

  /**
   * Returns the value of translation message for key `cancelRecurring.message`.
   * Default value: `This will permanently cancel the recurring payment and prevent any future occurrence`
   */
  get cancelRecurringMessage(): string {
    return this._translations.get('cancelRecurring.message');
  }

  /**
   * Returns the value of translation message for key `cancelRecurring.done`.
   * Default value: `This recurring payment has been canceled`
   */
  get cancelRecurringDone(): string {
    return this._translations.get('cancelRecurring.done');
  }

  /**
   * Returns the value of translation message for key `chargebackTransfer`.
   * Default value: `Chargeback this transfer`
   */
  get chargebackTransfer(): string {
    return this._translations.get('chargebackTransfer');
  }

  /**
   * Returns the value of translation message for key `chargebackTransfer.message`.
   * Default value: `This will return the amount of this transfer to the payer`
   */
  get chargebackTransferMessage(): string {
    return this._translations.get('chargebackTransfer.message');
  }

  /**
   * Returns the value of translation message for key `chargebackTransfer.done`.
   * Default value: `This transfer was charged back`
   */
  get chargebackTransferDone(): string {
    return this._translations.get('chargebackTransfer.done');
  }

  /**
   * Returns the value of translation message for key `processInstallment`.
   * Default value: `Process this installment`
   */
  get processInstallment(): string {
    return this._translations.get('processInstallment');
  }

  /**
   * Returns the value of translation message for key `processInstallment.message`.
   * Default value: `Are you sure to process now the installment number {number}?`
   */
  processInstallmentMessage(number: string | number): string {
    return this._translations.get('processInstallment.message', {
      number: number
    });
  }

  /**
   * Returns the value of translation message for key `processInstallment.done`.
   * Default value: `The installment was processed`
   */
  get processInstallmentDone(): string {
    return this._translations.get('processInstallment.done');
  }

  /**
   * Returns the value of translation message for key `settleInstallment`.
   * Default value: `Settle this installment`
   */
  get settleInstallment(): string {
    return this._translations.get('settleInstallment');
  }

  /**
   * Returns the value of translation message for key `settleInstallment.message`.
   * Default value: `Are you sure to settle the installment number {number}?`
   */
  settleInstallmentMessage(number: string | number): string {
    return this._translations.get('settleInstallment.message', {
      number: number
    });
  }

  /**
   * Returns the value of translation message for key `settleInstallment.done`.
   * Default value: `The installment was settled`
   */
  get settleInstallmentDone(): string {
    return this._translations.get('settleInstallment.done');
  }

  /**
   * Returns the value of translation message for key `processFailedOccurrence`.
   * Default value: `Process this failed occurrence`
   */
  get processFailedOccurrence(): string {
    return this._translations.get('processFailedOccurrence');
  }

  /**
   * Returns the value of translation message for key `processFailedOccurrence.message`.
   * Default value: `Are you sure to process now the occurrence number {number}?`
   */
  processFailedOccurrenceMessage(number: string | number): string {
    return this._translations.get('processFailedOccurrence.message', {
      number: number
    });
  }

  /**
   * Returns the value of translation message for key `processFailedOccurrence.done`.
   * Default value: `The occurrence was processed`
   */
  get processFailedOccurrenceDone(): string {
    return this._translations.get('processFailedOccurrence.done');
  }

  /**
   * Returns the value of translation message for key `acceptPaymentRequest`.
   * Default value: `Accept this payment request`
   */
  get acceptPaymentRequest(): string {
    return this._translations.get('acceptPaymentRequest');
  }

  /**
   * Returns the value of translation message for key `acceptPaymentRequest.done`.
   * Default value: `The payment request was accepted`
   */
  get acceptPaymentRequestDone(): string {
    return this._translations.get('acceptPaymentRequest.done');
  }

  /**
   * Returns the value of translation message for key `cancelPaymentRequest`.
   * Default value: `Cancel this payment request`
   */
  get cancelPaymentRequest(): string {
    return this._translations.get('cancelPaymentRequest');
  }

  /**
   * Returns the value of translation message for key `cancelPaymentRequest.done`.
   * Default value: `The payment request was canceled`
   */
  get cancelPaymentRequestDone(): string {
    return this._translations.get('cancelPaymentRequest.done');
  }

  /**
   * Returns the value of translation message for key `rejectPaymentRequest`.
   * Default value: `Deny this payment request`
   */
  get rejectPaymentRequest(): string {
    return this._translations.get('rejectPaymentRequest');
  }

  /**
   * Returns the value of translation message for key `rejectPaymentRequest.done`.
   * Default value: `The payment request was denied`
   */
  get rejectPaymentRequestDone(): string {
    return this._translations.get('rejectPaymentRequest.done');
  }

  /**
   * Returns the value of translation message for key `changePaymentRequestExpiration`.
   * Default value: `Change expiration date`
   */
  get changePaymentRequestExpiration(): string {
    return this._translations.get('changePaymentRequestExpiration');
  }

  /**
   * Returns the value of translation message for key `changePaymentRequestExpiration.done`.
   * Default value: `The payment request expiration date was changed`
   */
  get changePaymentRequestExpirationDone(): string {
    return this._translations.get('changePaymentRequestExpiration.done');
  }

  /**
   * Returns the value of translation message for key `reschedulePaymentRequest`.
   * Default value: `Reschedule this recurring payment`
   */
  get reschedulePaymentRequest(): string {
    return this._translations.get('reschedulePaymentRequest');
  }

  /**
   * Returns the value of translation message for key `reschedulePaymentRequest.done`.
   * Default value: `The payment request was reschedule`
   */
  get reschedulePaymentRequestDone(): string {
    return this._translations.get('reschedulePaymentRequest.done');
  }

  /**
   * Returns the value of translation message for key `confirmPaymentRequest`.
   * Default value: `Are you sure to send this payment request?`
   */
  get confirmPaymentRequest(): string {
    return this._translations.get('confirmPaymentRequest');
  }

  /**
   * Returns the value of translation message for key `firstOccurrenceIsImmediate`.
   * Default value: `First occurrence is immediate`
   */
  get firstOccurrenceIsImmediate(): string {
    return this._translations.get('firstOccurrenceIsImmediate');
  }

  /**
   * Returns the value of translation message for key `firstInstallmentIsImmediate`.
   * Default value: `First installment is immediate`
   */
  get firstInstallmentIsImmediate(): string {
    return this._translations.get('firstInstallmentIsImmediate');
  }

  /**
   * Returns the nested accessor for translation messages in `transferkind`.
   */
  get transferkind(): I18n$Transaction$Transferkind {
    return this._nested.transferkind;
  }

  /**
   * Returns the nested accessor for translation messages in `schedulingStatus`.
   */
  get schedulingStatus(): I18n$Transaction$SchedulingStatus {
    return this._nested.schedulingStatus;
  }

  /**
   * Returns the nested accessor for translation messages in `status`.
   */
  get status(): I18n$Transaction$Status {
    return this._nested.status;
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Transaction$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Transaction$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `error`.
   */
  get error(): I18n$Transaction$Error {
    return this._nested.error;
  }
}

export class I18n$Transaction$Transferkind {

  private _translations: Translations = new Translations('transaction.transferkind');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `accountFee`.
   * Default value: `Account fee`
   */
  get accountFee(): string {
    return this._translations.get('accountFee');
  }

  /**
   * Returns the value of translation message for key `chargeback`.
   * Default value: `Chargeback`
   */
  get chargeback(): string {
    return this._translations.get('chargeback');
  }

  /**
   * Returns the value of translation message for key `import`.
   * Default value: `Import`
   */
  get import(): string {
    return this._translations.get('import');
  }

  /**
   * Returns the value of translation message for key `initialCredit`.
   * Default value: `Initial credit`
   */
  get initialCredit(): string {
    return this._translations.get('initialCredit');
  }

  /**
   * Returns the value of translation message for key `installment`.
   * Default value: `Installment`
   */
  get installment(): string {
    return this._translations.get('installment');
  }

  /**
   * Returns the value of translation message for key `payment`.
   * Default value: `Payment`
   */
  get payment(): string {
    return this._translations.get('payment');
  }

  /**
   * Returns the value of translation message for key `transferFee`.
   * Default value: `Transfer fee`
   */
  get transferFee(): string {
    return this._translations.get('transferFee');
  }
}

export class I18n$Transaction$SchedulingStatus {

  private _translations: Translations = new Translations('transaction.schedulingStatus');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `direct`.
   * Default value: `Direct payment`
   */
  get direct(): string {
    return this._translations.get('direct');
  }

  /**
   * Returns the value of translation message for key `scheduledToDate`.
   * Default value: `Scheduled to {date}`
   */
  scheduledToDate(date: string | number): string {
    return this._translations.get('scheduledToDate', {
      date: date
    });
  }

  /**
   * Returns the value of translation message for key `openInstallments`.
   * Default value: `{count} installments, next on {dueDate}`
   */
  openInstallments($: {count: string | number, dueDate: string | number}): string {
    return this._translations.get('openInstallments', {
      count: $.count,
      dueDate: $.dueDate
    });
  }

  /**
   * Returns the value of translation message for key `closedInstallments`.
   * Default value: `{count} installments`
   */
  closedInstallments(count: string | number): string {
    return this._translations.get('closedInstallments', {
      count: count
    });
  }

  /**
   * Returns the value of translation message for key `closedRecurring`.
   * Default value: `Closed recurring payment`
   */
  get closedRecurring(): string {
    return this._translations.get('closedRecurring');
  }

  /**
   * Returns the value of translation message for key `canceledRecurring`.
   * Default value: `Canceled recurring payment`
   */
  get canceledRecurring(): string {
    return this._translations.get('canceledRecurring');
  }

  /**
   * Returns the value of translation message for key `openRecurring`.
   * Default value: `Recurring payment, next on {date}`
   */
  openRecurring(date: string | number): string {
    return this._translations.get('openRecurring', {
      date: date
    });
  }
}

export class I18n$Transaction$Status {

  private _translations: Translations = new Translations('transaction.status');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `open`.
   * Default value: `Open`
   */
  get open(): string {
    return this._translations.get('open');
  }

  /**
   * Returns the value of translation message for key `closed`.
   * Default value: `Closed`
   */
  get closed(): string {
    return this._translations.get('closed');
  }

  /**
   * Returns the value of translation message for key `canceled`.
   * Default value: `Canceled`
   */
  get canceled(): string {
    return this._translations.get('canceled');
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `Expired`
   */
  get expired(): string {
    return this._translations.get('expired');
  }

  /**
   * Returns the value of translation message for key `approved`.
   * Default value: `Approved`
   */
  get approved(): string {
    return this._translations.get('approved');
  }

  /**
   * Returns the value of translation message for key `processed`.
   * Default value: `Processed`
   */
  get processed(): string {
    return this._translations.get('processed');
  }

  /**
   * Returns the value of translation message for key `authorized`.
   * Default value: `Authorized`
   */
  get authorized(): string {
    return this._translations.get('authorized');
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Pending authorization`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `denied`.
   * Default value: `Denied`
   */
  get denied(): string {
    return this._translations.get('denied');
  }

  /**
   * Returns the value of translation message for key `blocked`.
   * Default value: `Blocked`
   */
  get blocked(): string {
    return this._translations.get('blocked');
  }

  /**
   * Returns the value of translation message for key `scheduled`.
   * Default value: `Scheduled`
   */
  get scheduled(): string {
    return this._translations.get('scheduled');
  }

  /**
   * Returns the value of translation message for key `failed`.
   * Default value: `Failed`
   */
  get failed(): string {
    return this._translations.get('failed');
  }

  /**
   * Returns the value of translation message for key `settled`.
   * Default value: `Settled`
   */
  get settled(): string {
    return this._translations.get('settled');
  }
}

export class I18n$Transaction$Title {

  private _translations: Translations = new Translations('transaction.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `pos`.
   * Default value: `Receive payment`
   */
  get pos(): string {
    return this._translations.get('pos');
  }

  /**
   * Returns the value of translation message for key `paymentSystemToSystem`.
   * Default value: `Payment between system accounts`
   */
  get paymentSystemToSystem(): string {
    return this._translations.get('paymentSystemToSystem');
  }

  /**
   * Returns the value of translation message for key `paymentSystemToUser`.
   * Default value: `Payment from system to user`
   */
  get paymentSystemToUser(): string {
    return this._translations.get('paymentSystemToUser');
  }

  /**
   * Returns the value of translation message for key `paymentToSystem`.
   * Default value: `Payment to system`
   */
  get paymentToSystem(): string {
    return this._translations.get('paymentToSystem');
  }

  /**
   * Returns the value of translation message for key `paymentToSelf`.
   * Default value: `Payment between own accounts`
   */
  get paymentToSelf(): string {
    return this._translations.get('paymentToSelf');
  }

  /**
   * Returns the value of translation message for key `paymentToUser`.
   * Default value: `Payment to user`
   */
  get paymentToUser(): string {
    return this._translations.get('paymentToUser');
  }

  /**
   * Returns the value of translation message for key `paymentConfirmation`.
   * Default value: `Payment confirmation`
   */
  get paymentConfirmation(): string {
    return this._translations.get('paymentConfirmation');
  }

  /**
   * Returns the value of translation message for key `pendingPayment`.
   * Default value: `Payment submitted for authorization`
   */
  get pendingPayment(): string {
    return this._translations.get('pendingPayment');
  }

  /**
   * Returns the value of translation message for key `processedPayment`.
   * Default value: `Payment performed`
   */
  get processedPayment(): string {
    return this._translations.get('processedPayment');
  }

  /**
   * Returns the value of translation message for key `pendingMyAuthorization`.
   * Default value: `Pending my authorization`
   */
  get pendingMyAuthorization(): string {
    return this._translations.get('pendingMyAuthorization');
  }

  /**
   * Returns the value of translation message for key `authorizations`.
   * Default value: `Payment authorizations`
   */
  get authorizations(): string {
    return this._translations.get('authorizations');
  }

  /**
   * Returns the value of translation message for key `authorizationHistory`.
   * Default value: `Authorization history`
   */
  get authorizationHistory(): string {
    return this._translations.get('authorizationHistory');
  }

  /**
   * Returns the value of translation message for key `scheduled`.
   * Default value: `Scheduled payments`
   */
  get scheduled(): string {
    return this._translations.get('scheduled');
  }

  /**
   * Returns the value of translation message for key `details.payment`.
   * Default value: `Payment details`
   */
  get detailsPayment(): string {
    return this._translations.get('details.payment');
  }

  /**
   * Returns the value of translation message for key `details.scheduled`.
   * Default value: `Scheduled payment details`
   */
  get detailsScheduled(): string {
    return this._translations.get('details.scheduled');
  }

  /**
   * Returns the value of translation message for key `details.recurring`.
   * Default value: `Recurring payment details`
   */
  get detailsRecurring(): string {
    return this._translations.get('details.recurring');
  }

  /**
   * Returns the value of translation message for key `details.request`.
   * Default value: `Payment request details`
   */
  get detailsRequest(): string {
    return this._translations.get('details.request');
  }

  /**
   * Returns the value of translation message for key `details.chargeback`.
   * Default value: `Chargeback details`
   */
  get detailsChargeback(): string {
    return this._translations.get('details.chargeback');
  }

  /**
   * Returns the value of translation message for key `details.ticket`.
   * Default value: `Ticket details`
   */
  get detailsTicket(): string {
    return this._translations.get('details.ticket');
  }

  /**
   * Returns the value of translation message for key `details.external`.
   * Default value: `External payment details`
   */
  get detailsExternal(): string {
    return this._translations.get('details.external');
  }

  /**
   * Returns the value of translation message for key `details.transfer`.
   * Default value: `Transfer details`
   */
  get detailsTransfer(): string {
    return this._translations.get('details.transfer');
  }

  /**
   * Returns the value of translation message for key `parentTransfer`.
   * Default value: `Transfer that generated this one`
   */
  get parentTransfer(): string {
    return this._translations.get('parentTransfer');
  }

  /**
   * Returns the value of translation message for key `childTransfers`.
   * Default value: `Transfers generated by this one`
   */
  get childTransfers(): string {
    return this._translations.get('childTransfers');
  }

  /**
   * Returns the value of translation message for key `transfersOverview`.
   * Default value: `Transfers overview`
   */
  get transfersOverview(): string {
    return this._translations.get('transfersOverview');
  }

  /**
   * Returns the value of translation message for key `receiveQrPayment`.
   * Default value: `Receive QR-code payment`
   */
  get receiveQrPayment(): string {
    return this._translations.get('receiveQrPayment');
  }

  /**
   * Returns the value of translation message for key `paymentRequestSent`.
   * Default value: `Payment request sent`
   */
  get paymentRequestSent(): string {
    return this._translations.get('paymentRequestSent');
  }

  /**
   * Returns the value of translation message for key `paymentRequestSystemToUser`.
   * Default value: `Payment request from user`
   */
  get paymentRequestSystemToUser(): string {
    return this._translations.get('paymentRequestSystemToUser');
  }

  /**
   * Returns the value of translation message for key `paymentRequestToSystem`.
   * Default value: `Payment request from system`
   */
  get paymentRequestToSystem(): string {
    return this._translations.get('paymentRequestToSystem');
  }

  /**
   * Returns the value of translation message for key `paymentRequestToUser`.
   * Default value: `Payment request from user`
   */
  get paymentRequestToUser(): string {
    return this._translations.get('paymentRequestToUser');
  }

  /**
   * Returns the value of translation message for key `paymentRequests`.
   * Default value: `Payment requests`
   */
  get paymentRequests(): string {
    return this._translations.get('paymentRequests');
  }

  /**
   * Returns the value of translation message for key `paymentRequestsOverview`.
   * Default value: `Payment requests overview`
   */
  get paymentRequestsOverview(): string {
    return this._translations.get('paymentRequestsOverview');
  }
}

export class I18n$Transaction$MobileTitle {

  private _translations: Translations = new Translations('transaction.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `pos`.
   * Default value: `Receive payment`
   */
  get pos(): string {
    return this._translations.get('pos');
  }

  /**
   * Returns the value of translation message for key `paymentSystemToSystem`.
   * Default value: `Pay system`
   */
  get paymentSystemToSystem(): string {
    return this._translations.get('paymentSystemToSystem');
  }

  /**
   * Returns the value of translation message for key `paymentSystemToUser`.
   * Default value: `Pay user`
   */
  get paymentSystemToUser(): string {
    return this._translations.get('paymentSystemToUser');
  }

  /**
   * Returns the value of translation message for key `paymentToSystem`.
   * Default value: `Pay system`
   */
  get paymentToSystem(): string {
    return this._translations.get('paymentToSystem');
  }

  /**
   * Returns the value of translation message for key `paymentToSelf`.
   * Default value: `Pay self`
   */
  get paymentToSelf(): string {
    return this._translations.get('paymentToSelf');
  }

  /**
   * Returns the value of translation message for key `paymentToUser`.
   * Default value: `Pay user`
   */
  get paymentToUser(): string {
    return this._translations.get('paymentToUser');
  }

  /**
   * Returns the value of translation message for key `paymentConfirmation`.
   * Default value: `Confirmation`
   */
  get paymentConfirmation(): string {
    return this._translations.get('paymentConfirmation');
  }

  /**
   * Returns the value of translation message for key `pendingPayment`.
   * Default value: `Pending authorization`
   */
  get pendingPayment(): string {
    return this._translations.get('pendingPayment');
  }

  /**
   * Returns the value of translation message for key `processedPayment`.
   * Default value: `Payment done`
   */
  get processedPayment(): string {
    return this._translations.get('processedPayment');
  }

  /**
   * Returns the value of translation message for key `pendingMyAuthorization`.
   * Default value: `To authorize`
   */
  get pendingMyAuthorization(): string {
    return this._translations.get('pendingMyAuthorization');
  }

  /**
   * Returns the value of translation message for key `authorizations`.
   * Default value: `Authorizations`
   */
  get authorizations(): string {
    return this._translations.get('authorizations');
  }

  /**
   * Returns the value of translation message for key `authorizationHistory`.
   * Default value: `History`
   */
  get authorizationHistory(): string {
    return this._translations.get('authorizationHistory');
  }

  /**
   * Returns the value of translation message for key `scheduled`.
   * Default value: `Scheduled payments`
   */
  get scheduled(): string {
    return this._translations.get('scheduled');
  }

  /**
   * Returns the value of translation message for key `details.payment`.
   * Default value: `Payment`
   */
  get detailsPayment(): string {
    return this._translations.get('details.payment');
  }

  /**
   * Returns the value of translation message for key `details.scheduled`.
   * Default value: `Scheduled payment`
   */
  get detailsScheduled(): string {
    return this._translations.get('details.scheduled');
  }

  /**
   * Returns the value of translation message for key `details.recurring`.
   * Default value: `Recurring payment`
   */
  get detailsRecurring(): string {
    return this._translations.get('details.recurring');
  }

  /**
   * Returns the value of translation message for key `details.request`.
   * Default value: `Payment request`
   */
  get detailsRequest(): string {
    return this._translations.get('details.request');
  }

  /**
   * Returns the value of translation message for key `details.chargeback`.
   * Default value: `Chargeback`
   */
  get detailsChargeback(): string {
    return this._translations.get('details.chargeback');
  }

  /**
   * Returns the value of translation message for key `details.ticket`.
   * Default value: `Ticket`
   */
  get detailsTicket(): string {
    return this._translations.get('details.ticket');
  }

  /**
   * Returns the value of translation message for key `details.external`.
   * Default value: `External payment`
   */
  get detailsExternal(): string {
    return this._translations.get('details.external');
  }

  /**
   * Returns the value of translation message for key `details.transfer`.
   * Default value: `Transfer`
   */
  get detailsTransfer(): string {
    return this._translations.get('details.transfer');
  }

  /**
   * Returns the value of translation message for key `parentTransfer`.
   * Default value: `Originating transfer`
   */
  get parentTransfer(): string {
    return this._translations.get('parentTransfer');
  }

  /**
   * Returns the value of translation message for key `childTransfers`.
   * Default value: `Originated transfers`
   */
  get childTransfers(): string {
    return this._translations.get('childTransfers');
  }

  /**
   * Returns the value of translation message for key `transfersOverview`.
   * Default value: `Transfers overview`
   */
  get transfersOverview(): string {
    return this._translations.get('transfersOverview');
  }

  /**
   * Returns the value of translation message for key `receiveQrPayment`.
   * Default value: `QR-code payment`
   */
  get receiveQrPayment(): string {
    return this._translations.get('receiveQrPayment');
  }

  /**
   * Returns the value of translation message for key `paymentRequestSent`.
   * Default value: `Payment request sent`
   */
  get paymentRequestSent(): string {
    return this._translations.get('paymentRequestSent');
  }

  /**
   * Returns the value of translation message for key `paymentRequestSystemToUser`.
   * Default value: `Payment request`
   */
  get paymentRequestSystemToUser(): string {
    return this._translations.get('paymentRequestSystemToUser');
  }

  /**
   * Returns the value of translation message for key `paymentRequestToSystem`.
   * Default value: `Payment request`
   */
  get paymentRequestToSystem(): string {
    return this._translations.get('paymentRequestToSystem');
  }

  /**
   * Returns the value of translation message for key `paymentRequestToUser`.
   * Default value: `Payment request`
   */
  get paymentRequestToUser(): string {
    return this._translations.get('paymentRequestToUser');
  }

  /**
   * Returns the value of translation message for key `paymentRequests`.
   * Default value: `Payment requests`
   */
  get paymentRequests(): string {
    return this._translations.get('paymentRequests');
  }

  /**
   * Returns the value of translation message for key `paymentRequestsOverview`.
   * Default value: `Payment requests overview`
   */
  get paymentRequestsOverview(): string {
    return this._translations.get('paymentRequestsOverview');
  }
}

export class I18n$Transaction$Error {

  private _translations: Translations = new Translations('transaction.error');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `minTime`.
   * Default value: `A minimum period of time should be awaited to make a payment of this type.`
   */
  get minTime(): string {
    return this._translations.get('minTime');
  }

  /**
   * Returns the value of translation message for key `balance`.
   * Default value: `Insufficient balance to perform this operation`
   */
  get balance(): string {
    return this._translations.get('balance');
  }

  /**
   * Returns the value of translation message for key `upperLimit`.
   * Default value: `You cannot perform this payment because the upper balance limit of the destination account has been exceeded`
   */
  get upperLimit(): string {
    return this._translations.get('upperLimit');
  }

  /**
   * Returns the value of translation message for key `daily.amount`.
   * Default value: `The maximum daily amount of {amount} was exceeded`
   */
  dailyAmount(amount: string | number): string {
    return this._translations.get('daily.amount', {
      amount: amount
    });
  }

  /**
   * Returns the value of translation message for key `daily.count`.
   * Default value: `The maximum allowed number of payments per day is {count}`
   */
  dailyCount(count: string | number): string {
    return this._translations.get('daily.count', {
      count: count
    });
  }

  /**
   * Returns the value of translation message for key `weekly.amount`.
   * Default value: `The maximum weekly amount of {amount} was exceeded`
   */
  weeklyAmount(amount: string | number): string {
    return this._translations.get('weekly.amount', {
      amount: amount
    });
  }

  /**
   * Returns the value of translation message for key `weekly.count`.
   * Default value: `The maximum allowed number of payments per week is {count}`
   */
  weeklyCount(count: string | number): string {
    return this._translations.get('weekly.count', {
      count: count
    });
  }

  /**
   * Returns the value of translation message for key `monthly.amount`.
   * Default value: `The maximum monthly amount of {amount} was exceeded`
   */
  monthlyAmount(amount: string | number): string {
    return this._translations.get('monthly.amount', {
      amount: amount
    });
  }

  /**
   * Returns the value of translation message for key `monthly.count`.
   * Default value: `The maximum allowed number of payments per month is {count}`
   */
  monthlyCount(count: string | number): string {
    return this._translations.get('monthly.count', {
      count: count
    });
  }
}

export class I18n$Voucher {

  private _translations: Translations = new Translations('voucher');

  private _nested = {
    error: new I18n$Voucher$Error(),
    redeem: new I18n$Voucher$Redeem(),
    status: new I18n$Voucher$Status(),
    mobileTitle: new I18n$Voucher$MobileTitle(),
    title: new I18n$Voucher$Title(),
    buy: new I18n$Voucher$Buy(),
    generate: new I18n$Voucher$Generate(),
    cancel: new I18n$Voucher$Cancel(),
    sort: new I18n$Voucher$Sort()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.error.defaultValues = defaultValues['error'];
    this._nested.redeem.defaultValues = defaultValues['redeem'];
    this._nested.status.defaultValues = defaultValues['status'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.buy.defaultValues = defaultValues['buy'];
    this._nested.generate.defaultValues = defaultValues['generate'];
    this._nested.cancel.defaultValues = defaultValues['cancel'];
    this._nested.sort.defaultValues = defaultValues['sort'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.error.initialize(values['error']);
    this._nested.redeem.initialize(values['redeem']);
    this._nested.status.initialize(values['status']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.title.initialize(values['title']);
    this._nested.buy.initialize(values['buy']);
    this._nested.generate.initialize(values['generate']);
    this._nested.cancel.initialize(values['cancel']);
    this._nested.sort.initialize(values['sort']);
  }

  /**
   * Returns the value of translation message for key `boughtType`.
   * Default value: `Bought`
   */
  get boughtType(): string {
    return this._translations.get('boughtType');
  }

  /**
   * Returns the value of translation message for key `generatedType`.
   * Default value: `Generated`
   */
  get generatedType(): string {
    return this._translations.get('generatedType');
  }

  /**
   * Returns the value of translation message for key `originAccount`.
   * Default value: `Origin account`
   */
  get originAccount(): string {
    return this._translations.get('originAccount');
  }

  /**
   * Returns the value of translation message for key `numberOfVouchers`.
   * Default value: `Number of vouchers`
   */
  get numberOfVouchers(): string {
    return this._translations.get('numberOfVouchers');
  }

  /**
   * Returns the value of translation message for key `amountPerVoucher`.
   * Default value: `Amount per voucher`
   */
  get amountPerVoucher(): string {
    return this._translations.get('amountPerVoucher');
  }

  /**
   * Returns the value of translation message for key `buyerGroups`.
   * Default value: `Buyer groups`
   */
  get buyerGroups(): string {
    return this._translations.get('buyerGroups');
  }

  /**
   * Returns the value of translation message for key `redeemerGroups`.
   * Default value: `Redeemer groups`
   */
  get redeemerGroups(): string {
    return this._translations.get('redeemerGroups');
  }

  /**
   * Returns the value of translation message for key `creationType`.
   * Default value: `Creation type`
   */
  get creationType(): string {
    return this._translations.get('creationType');
  }

  /**
   * Returns the value of translation message for key `cancelAndRefund`.
   * Default value: `Cancel & refund`
   */
  get cancelAndRefund(): string {
    return this._translations.get('cancelAndRefund');
  }

  /**
   * Returns the value of translation message for key `cancelDone`.
   * Default value: `This voucher has been canceled.`
   */
  get cancelDone(): string {
    return this._translations.get('cancelDone');
  }

  /**
   * Returns the value of translation message for key `cancelConfirmation`.
   * Default value: `Are you sure to cancel this voucher?`
   */
  get cancelConfirmation(): string {
    return this._translations.get('cancelConfirmation');
  }

  /**
   * Returns the value of translation message for key `cancelPackConfirmation`.
   * Default value: `There are other vouchers belonging to the same pack that will be also canceled. Are you sure to continue?`
   */
  get cancelPackConfirmation(): string {
    return this._translations.get('cancelPackConfirmation');
  }

  /**
   * Returns the value of translation message for key `token`.
   * Default value: `Voucher code`
   */
  get token(): string {
    return this._translations.get('token');
  }

  /**
   * Returns the value of translation message for key `owner`.
   * Default value: `Owner`
   */
  get owner(): string {
    return this._translations.get('owner');
  }

  /**
   * Returns the value of translation message for key `changeExpirationDate`.
   * Default value: `Change expiration date`
   */
  get changeExpirationDate(): string {
    return this._translations.get('changeExpirationDate');
  }

  /**
   * Returns the value of translation message for key `expirationDateChanged`.
   * Default value: `Expiration date changed`
   */
  get expirationDateChanged(): string {
    return this._translations.get('expirationDateChanged');
  }

  /**
   * Returns the value of translation message for key `refundPayment`.
   * Default value: `Refund payment`
   */
  get refundPayment(): string {
    return this._translations.get('refundPayment');
  }

  /**
   * Returns the value of translation message for key `refundDate`.
   * Default value: `Refund date`
   */
  get refundDate(): string {
    return this._translations.get('refundDate');
  }

  /**
   * Returns the nested accessor for translation messages in `error`.
   */
  get error(): I18n$Voucher$Error {
    return this._nested.error;
  }

  /**
   * Returns the nested accessor for translation messages in `redeem`.
   */
  get redeem(): I18n$Voucher$Redeem {
    return this._nested.redeem;
  }

  /**
   * Returns the nested accessor for translation messages in `status`.
   */
  get status(): I18n$Voucher$Status {
    return this._nested.status;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Voucher$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Voucher$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `buy`.
   */
  get buy(): I18n$Voucher$Buy {
    return this._nested.buy;
  }

  /**
   * Returns the nested accessor for translation messages in `generate`.
   */
  get generate(): I18n$Voucher$Generate {
    return this._nested.generate;
  }

  /**
   * Returns the nested accessor for translation messages in `cancel`.
   */
  get cancel(): I18n$Voucher$Cancel {
    return this._nested.cancel;
  }

  /**
   * Returns the nested accessor for translation messages in `sort`.
   */
  get sort(): I18n$Voucher$Sort {
    return this._nested.sort;
  }
}

export class I18n$Voucher$Error {

  private _translations: Translations = new Translations('voucher.error');

  private _nested = {
    buy: new I18n$Voucher$Error$Buy(),
    redeem: new I18n$Voucher$Error$Redeem()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.buy.defaultValues = defaultValues['buy'];
    this._nested.redeem.defaultValues = defaultValues['redeem'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.buy.initialize(values['buy']);
    this._nested.redeem.initialize(values['redeem']);
  }

  /**
   * Returns the value of translation message for key `totalOpenAmount`.
   * Default value: `The total amount of all open vouchers would exceed {maxAmount}, as defined in this voucher type. The current total open amount is {currentAmount}.`
   */
  totalOpenAmount($: {maxAmount: string | number, currentAmount: string | number}): string {
    return this._translations.get('totalOpenAmount', {
      maxAmount: $.maxAmount,
      currentAmount: $.currentAmount
    });
  }

  /**
   * Returns the nested accessor for translation messages in `buy`.
   */
  get buy(): I18n$Voucher$Error$Buy {
    return this._nested.buy;
  }

  /**
   * Returns the nested accessor for translation messages in `redeem`.
   */
  get redeem(): I18n$Voucher$Error$Redeem {
    return this._nested.redeem;
  }
}

export class I18n$Voucher$Error$Buy {

  private _translations: Translations = new Translations('voucher.error.buy');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `amountForPeriod`.
   * Default value: `Buying on this voucher type is limited by period. Until {date} only {amount} is available for buying.`
   */
  amountForPeriod($: {date: string | number, amount: string | number}): string {
    return this._translations.get('amountForPeriod', {
      date: $.date,
      amount: $.amount
    });
  }

  /**
   * Returns the value of translation message for key `openAmount`.
   * Default value: `The current user exceeds the maximum allowed open amount of {maxAmount} for vouchers of this type. The current open amount is {currentAmount}.`
   */
  openAmount($: {maxAmount: string | number, currentAmount: string | number}): string {
    return this._translations.get('openAmount', {
      maxAmount: $.maxAmount,
      currentAmount: $.currentAmount
    });
  }

  /**
   * Returns the value of translation message for key `notAllowedForUser`.
   * Default value: `The current user is not allowed to buy vouchers from this type.`
   */
  get notAllowedForUser(): string {
    return this._translations.get('notAllowedForUser');
  }
}

export class I18n$Voucher$Error$Redeem {

  private _translations: Translations = new Translations('voucher.error.redeem');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `status`.
   * Default value: `This voucher cannot be redeemed. Its current status is: {status}.`
   */
  status(status: string | number): string {
    return this._translations.get('status', {
      status: status
    });
  }

  /**
   * Returns the value of translation message for key `user`.
   * Default value: `The current user cannot redeem vouchers from this type.`
   */
  get user(): string {
    return this._translations.get('user');
  }

  /**
   * Returns the value of translation message for key `notAllowedYet`.
   * Default value: `This voucher cannot be redeemed before {beginDate}.`
   */
  notAllowedYet(beginDate: string | number): string {
    return this._translations.get('notAllowedYet', {
      beginDate: beginDate
    });
  }

  /**
   * Returns the value of translation message for key `notAllowedToday`.
   * Default value: `This voucher cannot be redeemed today. The days allowed for redeeming are: {allowedDays}.`
   */
  notAllowedToday(allowedDays: string | number): string {
    return this._translations.get('notAllowedToday', {
      allowedDays: allowedDays
    });
  }

  /**
   * Returns the value of translation message for key `userBlocked`.
   * Default value: `You have been blocked by exceeding the number of allowed attempts.`
   */
  get userBlocked(): string {
    return this._translations.get('userBlocked');
  }
}

export class I18n$Voucher$Redeem {

  private _translations: Translations = new Translations('voucher.redeem');

  private _nested = {
    error: new I18n$Voucher$Redeem$Error()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.error.defaultValues = defaultValues['error'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.error.initialize(values['error']);
  }

  /**
   * Returns the value of translation message for key `confirm`.
   * Default value: `The voucher details are given below. Please, review it below and confirm this action.`
   */
  get confirm(): string {
    return this._translations.get('confirm');
  }

  /**
   * Returns the value of translation message for key `done`.
   * Default value: `The voucher was redeemed successfully.`
   */
  get done(): string {
    return this._translations.get('done');
  }

  /**
   * Returns the value of translation message for key `date`.
   * Default value: `Redeeming date`
   */
  get date(): string {
    return this._translations.get('date');
  }

  /**
   * Returns the value of translation message for key `redeemer`.
   * Default value: `Redeemer`
   */
  get redeemer(): string {
    return this._translations.get('redeemer');
  }

  /**
   * Returns the value of translation message for key `payment`.
   * Default value: `Redeem payment`
   */
  get payment(): string {
    return this._translations.get('payment');
  }

  /**
   * Returns the nested accessor for translation messages in `error`.
   */
  get error(): I18n$Voucher$Redeem$Error {
    return this._nested.error;
  }
}

export class I18n$Voucher$Redeem$Error {

  private _translations: Translations = new Translations('voucher.redeem.error');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `status`.
   * Default value: `This voucher cannot be redeemed. Its current status is: {status}.`
   */
  status(status: string | number): string {
    return this._translations.get('status', {
      status: status
    });
  }

  /**
   * Returns the value of translation message for key `user`.
   * Default value: `The current user cannot redeem vouchers from this type.`
   */
  get user(): string {
    return this._translations.get('user');
  }

  /**
   * Returns the value of translation message for key `notAllowedYet`.
   * Default value: `This voucher cannot be redeemed before {beginDate}.`
   */
  notAllowedYet(beginDate: string | number): string {
    return this._translations.get('notAllowedYet', {
      beginDate: beginDate
    });
  }

  /**
   * Returns the value of translation message for key `notAllowedToday`.
   * Default value: `This voucher cannot be redeemed today. The days allowed for redeeming are: {allowedDays}.`
   */
  notAllowedToday(allowedDays: string | number): string {
    return this._translations.get('notAllowedToday', {
      allowedDays: allowedDays
    });
  }

  /**
   * Returns the value of translation message for key `userBlocked`.
   * Default value: `You have been blocked by exceeding the number of allowed attempts.`
   */
  get userBlocked(): string {
    return this._translations.get('userBlocked');
  }
}

export class I18n$Voucher$Status {

  private _translations: Translations = new Translations('voucher.status');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `redeemed`.
   * Default value: `Redeemed`
   */
  get redeemed(): string {
    return this._translations.get('redeemed');
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Pending`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `open`.
   * Default value: `Open`
   */
  get open(): string {
    return this._translations.get('open');
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `Expired`
   */
  get expired(): string {
    return this._translations.get('expired');
  }

  /**
   * Returns the value of translation message for key `canceled`.
   * Default value: `Canceled`
   */
  get canceled(): string {
    return this._translations.get('canceled');
  }
}

export class I18n$Voucher$MobileTitle {

  private _translations: Translations = new Translations('voucher.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `buy`.
   * Default value: `Buy vouchers`
   */
  get buy(): string {
    return this._translations.get('buy');
  }

  /**
   * Returns the value of translation message for key `buyConfirmation`.
   * Default value: `Buy confirmation`
   */
  get buyConfirmation(): string {
    return this._translations.get('buyConfirmation');
  }

  /**
   * Returns the value of translation message for key `bought`.
   * Default value: `Bought vouchers`
   */
  get bought(): string {
    return this._translations.get('bought');
  }

  /**
   * Returns the value of translation message for key `redeem`.
   * Default value: `Redeem voucher`
   */
  get redeem(): string {
    return this._translations.get('redeem');
  }

  /**
   * Returns the value of translation message for key `redeemed`.
   * Default value: `Redeemed vouchers`
   */
  get redeemed(): string {
    return this._translations.get('redeemed');
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Search vouchers`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `generate`.
   * Default value: `Generate vouchers`
   */
  get generate(): string {
    return this._translations.get('generate');
  }

  /**
   * Returns the value of translation message for key `generateConfirmation`.
   * Default value: `Generate confirmation`
   */
  get generateConfirmation(): string {
    return this._translations.get('generateConfirmation');
  }
}

export class I18n$Voucher$Title {

  private _translations: Translations = new Translations('voucher.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `buy`.
   * Default value: `Buy vouchers`
   */
  get buy(): string {
    return this._translations.get('buy');
  }

  /**
   * Returns the value of translation message for key `buyConfirmation`.
   * Default value: `Buy confirmation`
   */
  get buyConfirmation(): string {
    return this._translations.get('buyConfirmation');
  }

  /**
   * Returns the value of translation message for key `searchBought`.
   * Default value: `Search bought vouchers`
   */
  get searchBought(): string {
    return this._translations.get('searchBought');
  }

  /**
   * Returns the value of translation message for key `redeem`.
   * Default value: `Redeem voucher`
   */
  get redeem(): string {
    return this._translations.get('redeem');
  }

  /**
   * Returns the value of translation message for key `redeemed`.
   * Default value: `Redeemed vouchers`
   */
  get redeemed(): string {
    return this._translations.get('redeemed');
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Search vouchers`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `generate`.
   * Default value: `Generate vouchers`
   */
  get generate(): string {
    return this._translations.get('generate');
  }

  /**
   * Returns the value of translation message for key `generateConfirmation`.
   * Default value: `Generate confirmation`
   */
  get generateConfirmation(): string {
    return this._translations.get('generateConfirmation');
  }
}

export class I18n$Voucher$Buy {

  private _translations: Translations = new Translations('voucher.buy');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `amountRange`.
   * Default value: `Amount range`
   */
  get amountRange(): string {
    return this._translations.get('amountRange');
  }

  /**
   * Returns the value of translation message for key `buyer`.
   * Default value: `Buyer`
   */
  get buyer(): string {
    return this._translations.get('buyer');
  }

  /**
   * Returns the value of translation message for key `done`.
   * Default value: `The voucher(s) has been bought.`
   */
  get done(): string {
    return this._translations.get('done');
  }

  /**
   * Returns the value of translation message for key `minTimeToRedeem`.
   * Default value: `Can be redeemed`
   */
  get minTimeToRedeem(): string {
    return this._translations.get('minTimeToRedeem');
  }

  /**
   * Returns the value of translation message for key `minTimeToRedeem.afterBuy`.
   * Default value: `{interval} after buying`
   */
  minTimeToRedeemAfterBuy(interval: string | number): string {
    return this._translations.get('minTimeToRedeem.afterBuy', {
      interval: interval
    });
  }

  /**
   * Returns the value of translation message for key `payment`.
   * Default value: `Buy payment`
   */
  get payment(): string {
    return this._translations.get('payment');
  }
}

export class I18n$Voucher$Generate {

  private _translations: Translations = new Translations('voucher.generate');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `done`.
   * Default value: `The voucher(s) has been generated.`
   */
  get done(): string {
    return this._translations.get('done');
  }
}

export class I18n$Voucher$Cancel {

  private _translations: Translations = new Translations('voucher.cancel');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `done`.
   * Default value: `This voucher has been canceled.`
   */
  get done(): string {
    return this._translations.get('done');
  }

  /**
   * Returns the value of translation message for key `packConfirmation`.
   * Default value: `There are other vouchers belonging to the same pack that will be also canceled. Are you sure to continue?`
   */
  get packConfirmation(): string {
    return this._translations.get('packConfirmation');
  }

  /**
   * Returns the value of translation message for key `refundConfirmation`.
   * Default value: `Are you sure to cancel and refund this voucher?`
   */
  get refundConfirmation(): string {
    return this._translations.get('refundConfirmation');
  }

  /**
   * Returns the value of translation message for key `confirmation`.
   * Default value: `Are you sure to cancel this voucher?`
   */
  get confirmation(): string {
    return this._translations.get('confirmation');
  }
}

export class I18n$Voucher$Sort {

  private _translations: Translations = new Translations('voucher.sort');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `creationDateDesc`.
   * Default value: `Creation date descending`
   */
  get creationDateDesc(): string {
    return this._translations.get('creationDateDesc');
  }

  /**
   * Returns the value of translation message for key `creationDateAsc`.
   * Default value: `Creation date ascending`
   */
  get creationDateAsc(): string {
    return this._translations.get('creationDateAsc');
  }

  /**
   * Returns the value of translation message for key `expirationDateDesc`.
   * Default value: `Expiration date descending`
   */
  get expirationDateDesc(): string {
    return this._translations.get('expirationDateDesc');
  }

  /**
   * Returns the value of translation message for key `expirationDateAsc`.
   * Default value: `Expiration date ascending`
   */
  get expirationDateAsc(): string {
    return this._translations.get('expirationDateAsc');
  }

  /**
   * Returns the value of translation message for key `redeemDateDesc`.
   * Default value: `Redeem date descending`
   */
  get redeemDateDesc(): string {
    return this._translations.get('redeemDateDesc');
  }

  /**
   * Returns the value of translation message for key `redeemDateAsc`.
   * Default value: `Redeem date ascending`
   */
  get redeemDateAsc(): string {
    return this._translations.get('redeemDateAsc');
  }
}

export class I18n$Field {

  private _translations: Translations = new Translations('field');

  private _nested = {
    date: new I18n$Field$Date(),
    privacy: new I18n$Field$Privacy(),
    image: new I18n$Field$Image(),
    file: new I18n$Field$File(),
    user: new I18n$Field$User(),
    scanQr: new I18n$Field$ScanQr(),
    html: new I18n$Field$Html()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.date.defaultValues = defaultValues['date'];
    this._nested.privacy.defaultValues = defaultValues['privacy'];
    this._nested.image.defaultValues = defaultValues['image'];
    this._nested.file.defaultValues = defaultValues['file'];
    this._nested.user.defaultValues = defaultValues['user'];
    this._nested.scanQr.defaultValues = defaultValues['scanQr'];
    this._nested.html.defaultValues = defaultValues['html'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.date.initialize(values['date']);
    this._nested.privacy.initialize(values['privacy']);
    this._nested.image.initialize(values['image']);
    this._nested.file.initialize(values['file']);
    this._nested.user.initialize(values['user']);
    this._nested.scanQr.initialize(values['scanQr']);
    this._nested.html.initialize(values['html']);
  }

  /**
   * Returns the nested accessor for translation messages in `date`.
   */
  get date(): I18n$Field$Date {
    return this._nested.date;
  }

  /**
   * Returns the nested accessor for translation messages in `privacy`.
   */
  get privacy(): I18n$Field$Privacy {
    return this._nested.privacy;
  }

  /**
   * Returns the nested accessor for translation messages in `image`.
   */
  get image(): I18n$Field$Image {
    return this._nested.image;
  }

  /**
   * Returns the nested accessor for translation messages in `file`.
   */
  get file(): I18n$Field$File {
    return this._nested.file;
  }

  /**
   * Returns the nested accessor for translation messages in `user`.
   */
  get user(): I18n$Field$User {
    return this._nested.user;
  }

  /**
   * Returns the nested accessor for translation messages in `scanQr`.
   */
  get scanQr(): I18n$Field$ScanQr {
    return this._nested.scanQr;
  }

  /**
   * Returns the nested accessor for translation messages in `html`.
   */
  get html(): I18n$Field$Html {
    return this._nested.html;
  }
}

export class I18n$Field$Date {

  private _translations: Translations = new Translations('field.date');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `clear`.
   * Default value: `Clear`
   */
  get clear(): string {
    return this._translations.get('clear');
  }

  /**
   * Returns the value of translation message for key `today`.
   * Default value: `Today`
   */
  get today(): string {
    return this._translations.get('today');
  }
}

export class I18n$Field$Privacy {

  private _translations: Translations = new Translations('field.privacy');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `name`.
   * Default value: `Privacy`
   */
  get name(): string {
    return this._translations.get('name');
  }

  /**
   * Returns the value of translation message for key `private.tooltip`.
   * Default value: `This field is private. Click to allow other to view it.`
   */
  get privateTooltip(): string {
    return this._translations.get('private.tooltip');
  }

  /**
   * Returns the value of translation message for key `public.tooltip`.
   * Default value: `This field is visible by others. Click to make it private.`
   */
  get publicTooltip(): string {
    return this._translations.get('public.tooltip');
  }
}

export class I18n$Field$Image {

  private _translations: Translations = new Translations('field.image');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `noImage`.
   * Default value: `No image`
   */
  get noImage(): string {
    return this._translations.get('noImage');
  }

  /**
   * Returns the value of translation message for key `noImages`.
   * Default value: `No images`
   */
  get noImages(): string {
    return this._translations.get('noImages');
  }

  /**
   * Returns the value of translation message for key `upload`.
   * Default value: `Upload a new image`
   */
  get upload(): string {
    return this._translations.get('upload');
  }

  /**
   * Returns the value of translation message for key `manage`.
   * Default value: `Reorder or remove images`
   */
  get manage(): string {
    return this._translations.get('manage');
  }

  /**
   * Returns the value of translation message for key `remove`.
   * Default value: `Remove this image`
   */
  get remove(): string {
    return this._translations.get('remove');
  }

  /**
   * Returns the value of translation message for key `manageMessage`.
   * Default value: `You can drag / drop images to reorder them`
   */
  get manageMessage(): string {
    return this._translations.get('manageMessage');
  }

  /**
   * Returns the value of translation message for key `manageAfterConfirm`.
   * Default value: `After confirmation, please make sure to click the Save button in order for the changes to be applied.`
   */
  get manageAfterConfirm(): string {
    return this._translations.get('manageAfterConfirm');
  }
}

export class I18n$Field$File {

  private _translations: Translations = new Translations('field.file');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `noFile`.
   * Default value: `No file`
   */
  get noFile(): string {
    return this._translations.get('noFile');
  }

  /**
   * Returns the value of translation message for key `noFiles`.
   * Default value: `No files`
   */
  get noFiles(): string {
    return this._translations.get('noFiles');
  }

  /**
   * Returns the value of translation message for key `upload`.
   * Default value: `Upload a new file`
   */
  get upload(): string {
    return this._translations.get('upload');
  }

  /**
   * Returns the value of translation message for key `manage`.
   * Default value: `Reorder or remove files`
   */
  get manage(): string {
    return this._translations.get('manage');
  }

  /**
   * Returns the value of translation message for key `remove`.
   * Default value: `Remove this file`
   */
  get remove(): string {
    return this._translations.get('remove');
  }

  /**
   * Returns the value of translation message for key `manage.message`.
   * Default value: `You can drag / drop files to reorder them`
   */
  get manageMessage(): string {
    return this._translations.get('manage.message');
  }
}

export class I18n$Field$User {

  private _translations: Translations = new Translations('field.user');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `placeholder.allowSearch`.
   * Default value: `Type to search`
   */
  get placeholderAllowSearch(): string {
    return this._translations.get('placeholder.allowSearch');
  }

  /**
   * Returns the value of translation message for key `placeholder.principal`.
   * Default value: `Type the user identifier`
   */
  get placeholderPrincipal(): string {
    return this._translations.get('placeholder.principal');
  }

  /**
   * Returns the value of translation message for key `contact.tooltip`.
   * Default value: `Pick from your contact list`
   */
  get contactTooltip(): string {
    return this._translations.get('contact.tooltip');
  }

  /**
   * Returns the value of translation message for key `contact.title`.
   * Default value: `Select a contact`
   */
  get contactTitle(): string {
    return this._translations.get('contact.title');
  }

  /**
   * Returns the value of translation message for key `contact.empty`.
   * Default value: `Your contact list is empty`
   */
  get contactEmpty(): string {
    return this._translations.get('contact.empty');
  }

  /**
   * Returns the value of translation message for key `scanQrCode.tooltip`.
   * Default value: `Scan a QR-code with your camera`
   */
  get scanQrCodeTooltip(): string {
    return this._translations.get('scanQrCode.tooltip');
  }
}

export class I18n$Field$ScanQr {

  private _translations: Translations = new Translations('field.scanQr');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Scan QR-code`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `noCameras`.
   * Default value: `No cameras found on this device.`
   */
  get noCameras(): string {
    return this._translations.get('noCameras');
  }

  /**
   * Returns the value of translation message for key `noPermission`.
   * Default value: `In order to scan a QR-code, please, grant permission for the application to access your camera.`
   */
  get noPermission(): string {
    return this._translations.get('noPermission');
  }
}

export class I18n$Field$Html {

  private _translations: Translations = new Translations('field.html');

  private _nested = {
    link: new I18n$Field$Html$Link(),
    image: new I18n$Field$Html$Image()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.link.defaultValues = defaultValues['link'];
    this._nested.image.defaultValues = defaultValues['image'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.link.initialize(values['link']);
    this._nested.image.initialize(values['image']);
  }

  /**
   * Returns the value of translation message for key `undo`.
   * Default value: `Undo`
   */
  get undo(): string {
    return this._translations.get('undo');
  }

  /**
   * Returns the value of translation message for key `redo`.
   * Default value: `Redo`
   */
  get redo(): string {
    return this._translations.get('redo');
  }

  /**
   * Returns the value of translation message for key `font`.
   * Default value: `Font`
   */
  get font(): string {
    return this._translations.get('font');
  }

  /**
   * Returns the value of translation message for key `font.default`.
   * Default value: `Default font`
   */
  get fontDefault(): string {
    return this._translations.get('font.default');
  }

  /**
   * Returns the value of translation message for key `font.sansSerif`.
   * Default value: `Sans serif`
   */
  get fontSansSerif(): string {
    return this._translations.get('font.sansSerif');
  }

  /**
   * Returns the value of translation message for key `font.serif`.
   * Default value: `Serif`
   */
  get fontSerif(): string {
    return this._translations.get('font.serif');
  }

  /**
   * Returns the value of translation message for key `font.monospace`.
   * Default value: `Monospace`
   */
  get fontMonospace(): string {
    return this._translations.get('font.monospace');
  }

  /**
   * Returns the value of translation message for key `size`.
   * Default value: `Size`
   */
  get size(): string {
    return this._translations.get('size');
  }

  /**
   * Returns the value of translation message for key `size.1`.
   * Default value: `Tiny`
   */
  get size1(): string {
    return this._translations.get('size.1');
  }

  /**
   * Returns the value of translation message for key `size.2`.
   * Default value: `Small`
   */
  get size2(): string {
    return this._translations.get('size.2');
  }

  /**
   * Returns the value of translation message for key `size.3`.
   * Default value: `Medium`
   */
  get size3(): string {
    return this._translations.get('size.3');
  }

  /**
   * Returns the value of translation message for key `size.4`.
   * Default value: `Medium-larger`
   */
  get size4(): string {
    return this._translations.get('size.4');
  }

  /**
   * Returns the value of translation message for key `size.5`.
   * Default value: `Large`
   */
  get size5(): string {
    return this._translations.get('size.5');
  }

  /**
   * Returns the value of translation message for key `size.6`.
   * Default value: `Huge`
   */
  get size6(): string {
    return this._translations.get('size.6');
  }

  /**
   * Returns the value of translation message for key `size.7`.
   * Default value: `Maximum`
   */
  get size7(): string {
    return this._translations.get('size.7');
  }

  /**
   * Returns the value of translation message for key `block`.
   * Default value: `Formatting`
   */
  get block(): string {
    return this._translations.get('block');
  }

  /**
   * Returns the value of translation message for key `block.h1`.
   * Default value: `Title 1`
   */
  get blockH1(): string {
    return this._translations.get('block.h1');
  }

  /**
   * Returns the value of translation message for key `block.h2`.
   * Default value: `Title 2`
   */
  get blockH2(): string {
    return this._translations.get('block.h2');
  }

  /**
   * Returns the value of translation message for key `block.h3`.
   * Default value: `Title 3`
   */
  get blockH3(): string {
    return this._translations.get('block.h3');
  }

  /**
   * Returns the value of translation message for key `block.h4`.
   * Default value: `Title 4`
   */
  get blockH4(): string {
    return this._translations.get('block.h4');
  }

  /**
   * Returns the value of translation message for key `block.h5`.
   * Default value: `Title 5`
   */
  get blockH5(): string {
    return this._translations.get('block.h5');
  }

  /**
   * Returns the value of translation message for key `block.h6`.
   * Default value: `Title 6`
   */
  get blockH6(): string {
    return this._translations.get('block.h6');
  }

  /**
   * Returns the value of translation message for key `block.p`.
   * Default value: `Paragraph`
   */
  get blockP(): string {
    return this._translations.get('block.p');
  }

  /**
   * Returns the value of translation message for key `block.pre`.
   * Default value: `Preformatted`
   */
  get blockPre(): string {
    return this._translations.get('block.pre');
  }

  /**
   * Returns the value of translation message for key `color`.
   * Default value: `Font color`
   */
  get color(): string {
    return this._translations.get('color');
  }

  /**
   * Returns the value of translation message for key `backgroundColor`.
   * Default value: `Background color`
   */
  get backgroundColor(): string {
    return this._translations.get('backgroundColor');
  }

  /**
   * Returns the value of translation message for key `align.left`.
   * Default value: `Left`
   */
  get alignLeft(): string {
    return this._translations.get('align.left');
  }

  /**
   * Returns the value of translation message for key `align.right`.
   * Default value: `Right`
   */
  get alignRight(): string {
    return this._translations.get('align.right');
  }

  /**
   * Returns the value of translation message for key `align.center`.
   * Default value: `Center`
   */
  get alignCenter(): string {
    return this._translations.get('align.center');
  }

  /**
   * Returns the value of translation message for key `align.justify`.
   * Default value: `Justify`
   */
  get alignJustify(): string {
    return this._translations.get('align.justify');
  }

  /**
   * Returns the value of translation message for key `bold`.
   * Default value: `Bold`
   */
  get bold(): string {
    return this._translations.get('bold');
  }

  /**
   * Returns the value of translation message for key `italic`.
   * Default value: `Italic`
   */
  get italic(): string {
    return this._translations.get('italic');
  }

  /**
   * Returns the value of translation message for key `underline`.
   * Default value: `Underline`
   */
  get underline(): string {
    return this._translations.get('underline');
  }

  /**
   * Returns the value of translation message for key `strikethrough`.
   * Default value: `Strikethrough`
   */
  get strikethrough(): string {
    return this._translations.get('strikethrough');
  }

  /**
   * Returns the value of translation message for key `subscript`.
   * Default value: `Subscript`
   */
  get subscript(): string {
    return this._translations.get('subscript');
  }

  /**
   * Returns the value of translation message for key `superscript`.
   * Default value: `Superscript`
   */
  get superscript(): string {
    return this._translations.get('superscript');
  }

  /**
   * Returns the value of translation message for key `removeFormat`.
   * Default value: `Remove format`
   */
  get removeFormat(): string {
    return this._translations.get('removeFormat');
  }

  /**
   * Returns the value of translation message for key `list.bulleted`.
   * Default value: `Bulleted list`
   */
  get listBulleted(): string {
    return this._translations.get('list.bulleted');
  }

  /**
   * Returns the value of translation message for key `list.numbered`.
   * Default value: `Numbered list`
   */
  get listNumbered(): string {
    return this._translations.get('list.numbered');
  }

  /**
   * Returns the value of translation message for key `indent.less`.
   * Default value: `Decrease indentation`
   */
  get indentLess(): string {
    return this._translations.get('indent.less');
  }

  /**
   * Returns the value of translation message for key `indent.more`.
   * Default value: `Increase indentation`
   */
  get indentMore(): string {
    return this._translations.get('indent.more');
  }

  /**
   * Returns the value of translation message for key `source`.
   * Default value: `Edit the HTML source`
   */
  get source(): string {
    return this._translations.get('source');
  }

  /**
   * Returns the value of translation message for key `unlink`.
   * Default value: `Remove hyperlink`
   */
  get unlink(): string {
    return this._translations.get('unlink');
  }

  /**
   * Returns the nested accessor for translation messages in `link`.
   */
  get link(): I18n$Field$Html$Link {
    return this._nested.link;
  }

  /**
   * Returns the nested accessor for translation messages in `image`.
   */
  get image(): I18n$Field$Html$Image {
    return this._nested.image;
  }
}

export class I18n$Field$Html$Link {

  private _translations: Translations = new Translations('field.html.link');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `tooltip`.
   * Default value: `Insert hyperlink`
   */
  get tooltip(): string {
    return this._translations.get('tooltip');
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Hyperlink properties`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `href`.
   * Default value: `Hyperlink location`
   */
  get href(): string {
    return this._translations.get('href');
  }

  /**
   * Returns the value of translation message for key `text`.
   * Default value: `Displayed text`
   */
  get text(): string {
    return this._translations.get('text');
  }
}

export class I18n$Field$Html$Image {

  private _translations: Translations = new Translations('field.html.image');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `tooltip`.
   * Default value: `Insert image`
   */
  get tooltip(): string {
    return this._translations.get('tooltip');
  }

  /**
   * Returns the value of translation message for key `title.insert`.
   * Default value: `Select the image to insert`
   */
  get titleInsert(): string {
    return this._translations.get('title.insert');
  }

  /**
   * Returns the value of translation message for key `title.properties`.
   * Default value: `Image properties`
   */
  get titleProperties(): string {
    return this._translations.get('title.properties');
  }

  /**
   * Returns the value of translation message for key `source.url`.
   * Default value: `Insert the image from the Internet`
   */
  get sourceUrl(): string {
    return this._translations.get('source.url');
  }

  /**
   * Returns the value of translation message for key `url`.
   * Default value: `Image URL`
   */
  get url(): string {
    return this._translations.get('url');
  }

  /**
   * Returns the value of translation message for key `category`.
   * Default value: `Category`
   */
  get category(): string {
    return this._translations.get('category');
  }

  /**
   * Returns the value of translation message for key `source.existing`.
   * Default value: `Select a previously uploaded image`
   */
  get sourceExisting(): string {
    return this._translations.get('source.existing');
  }

  /**
   * Returns the value of translation message for key `noImages`.
   * Default value: `There are no existing images`
   */
  get noImages(): string {
    return this._translations.get('noImages');
  }

  /**
   * Returns the value of translation message for key `upload`.
   * Default value: `Upload new`
   */
  get upload(): string {
    return this._translations.get('upload');
  }

  /**
   * Returns the value of translation message for key `width`.
   * Default value: `Width`
   */
  get width(): string {
    return this._translations.get('width');
  }

  /**
   * Returns the value of translation message for key `height`.
   * Default value: `Height`
   */
  get height(): string {
    return this._translations.get('height');
  }

  /**
   * Returns the value of translation message for key `contrain`.
   * Default value: `Keep aspect ratio`
   */
  get contrain(): string {
    return this._translations.get('contrain');
  }

  /**
   * Returns the value of translation message for key `float`.
   * Default value: `Align`
   */
  get float(): string {
    return this._translations.get('float');
  }

  /**
   * Returns the value of translation message for key `floatNone`.
   * Default value: `None`
   */
  get floatNone(): string {
    return this._translations.get('floatNone');
  }

  /**
   * Returns the value of translation message for key `floatLeft`.
   * Default value: `Left`
   */
  get floatLeft(): string {
    return this._translations.get('floatLeft');
  }

  /**
   * Returns the value of translation message for key `floatRight`.
   * Default value: `Right`
   */
  get floatRight(): string {
    return this._translations.get('floatRight');
  }

  /**
   * Returns the value of translation message for key `marginTop`.
   * Default value: `Top margin`
   */
  get marginTop(): string {
    return this._translations.get('marginTop');
  }

  /**
   * Returns the value of translation message for key `marginBottom`.
   * Default value: `Bottom margin`
   */
  get marginBottom(): string {
    return this._translations.get('marginBottom');
  }

  /**
   * Returns the value of translation message for key `marginLeft`.
   * Default value: `Left margin`
   */
  get marginLeft(): string {
    return this._translations.get('marginLeft');
  }

  /**
   * Returns the value of translation message for key `marginRight`.
   * Default value: `Right margin`
   */
  get marginRight(): string {
    return this._translations.get('marginRight');
  }

  /**
   * Returns the value of translation message for key `border`.
   * Default value: `Border`
   */
  get border(): string {
    return this._translations.get('border');
  }

  /**
   * Returns the value of translation message for key `textExample`.
   * Default value: `This is an example text. It shows how the image will be positioned when there is text besides the image.`
   */
  get textExample(): string {
    return this._translations.get('textExample');
  }
}

export class I18n$User {

  private _translations: Translations = new Translations('user');

  private _nested = {
    title: new I18n$User$Title(),
    mobileTitle: new I18n$User$MobileTitle(),
    profile: new I18n$User$Profile(),
    registration: new I18n$User$Registration(),
    orderBy: new I18n$User$OrderBy()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.profile.defaultValues = defaultValues['profile'];
    this._nested.registration.defaultValues = defaultValues['registration'];
    this._nested.orderBy.defaultValues = defaultValues['orderBy'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.profile.initialize(values['profile']);
    this._nested.registration.initialize(values['registration']);
    this._nested.orderBy.initialize(values['orderBy']);
  }

  /**
   * Returns the value of translation message for key `group`.
   * Default value: `Group`
   */
  get group(): string {
    return this._translations.get('group');
  }

  /**
   * Returns the value of translation message for key `broker`.
   * Default value: `Broker`
   */
  get broker(): string {
    return this._translations.get('broker');
  }

  /**
   * Returns the value of translation message for key `brokers`.
   * Default value: `Brokers`
   */
  get brokers(): string {
    return this._translations.get('brokers');
  }

  /**
   * Returns the value of translation message for key `groups`.
   * Default value: `Groups`
   */
  get groups(): string {
    return this._translations.get('groups');
  }

  /**
   * Returns the value of translation message for key `groupSet`.
   * Default value: `Group set`
   */
  get groupSet(): string {
    return this._translations.get('groupSet');
  }

  /**
   * Returns the value of translation message for key `group.filter`.
   * Default value: `Groups`
   */
  get groupFilter(): string {
    return this._translations.get('group.filter');
  }

  /**
   * Returns the value of translation message for key `registrationDate`.
   * Default value: `Registration date`
   */
  get registrationDate(): string {
    return this._translations.get('registrationDate');
  }

  /**
   * Returns the value of translation message for key `activationDate`.
   * Default value: `Activation date`
   */
  get activationDate(): string {
    return this._translations.get('activationDate');
  }

  /**
   * Returns the value of translation message for key `name`.
   * Default value: `Full name`
   */
  get name(): string {
    return this._translations.get('name');
  }

  /**
   * Returns the value of translation message for key `username`.
   * Default value: `Login name`
   */
  get username(): string {
    return this._translations.get('username');
  }

  /**
   * Returns the value of translation message for key `email`.
   * Default value: `E-mail`
   */
  get email(): string {
    return this._translations.get('email');
  }

  /**
   * Returns the value of translation message for key `email.pending`.
   * Default value: `E-mail pending validation`
   */
  get emailPending(): string {
    return this._translations.get('email.pending');
  }

  /**
   * Returns the value of translation message for key `operator.owner`.
   * Default value: `Operator owner`
   */
  get operatorOwner(): string {
    return this._translations.get('operator.owner');
  }

  /**
   * Returns the value of translation message for key `operator.noGroup`.
   * Default value: `No group (has all permissions)`
   */
  get operatorNoGroup(): string {
    return this._translations.get('operator.noGroup');
  }

  /**
   * Returns the value of translation message for key `operator.registration.active`.
   * Default value: `The operator {operator} has been activated.`
   */
  operatorRegistrationActive(operator: string | number): string {
    return this._translations.get('operator.registration.active', {
      operator: operator
    });
  }

  /**
   * Returns the value of translation message for key `operator.registration.inactive`.
   * Default value: `The operator {operator} has been registered, however, still needs activatation by the administration.`
   */
  operatorRegistrationInactive(operator: string | number): string {
    return this._translations.get('operator.registration.inactive', {
      operator: operator
    });
  }

  /**
   * Returns the value of translation message for key `operator.registration.pending`.
   * Default value: `The operator {operator} has been registered, however, still needs to validate their registration by confirming the e-mail.`
   */
  operatorRegistrationPending(operator: string | number): string {
    return this._translations.get('operator.registration.pending', {
      operator: operator
    });
  }

  /**
   * Returns the value of translation message for key `operator.registration.addAnother`.
   * Default value: `Register another operator`
   */
  get operatorRegistrationAddAnother(): string {
    return this._translations.get('operator.registration.addAnother');
  }

  /**
   * Returns the value of translation message for key `noImage`.
   * Default value: `No profile image`
   */
  get noImage(): string {
    return this._translations.get('noImage');
  }

  /**
   * Returns the value of translation message for key `noImages`.
   * Default value: `No profile images`
   */
  get noImages(): string {
    return this._translations.get('noImages');
  }

  /**
   * Returns the value of translation message for key `address.define`.
   * Default value: `Define address`
   */
  get addressDefine(): string {
    return this._translations.get('address.define');
  }

  /**
   * Returns the value of translation message for key `address.add`.
   * Default value: `Add address`
   */
  get addressAdd(): string {
    return this._translations.get('address.add');
  }

  /**
   * Returns the value of translation message for key `address.remove`.
   * Default value: `Remove this address`
   */
  get addressRemove(): string {
    return this._translations.get('address.remove');
  }

  /**
   * Returns the value of translation message for key `address.none`.
   * Default value: `There are currently no addresses`
   */
  get addressNone(): string {
    return this._translations.get('address.none');
  }

  /**
   * Returns the value of translation message for key `phone.add`.
   * Default value: `Add phone`
   */
  get phoneAdd(): string {
    return this._translations.get('phone.add');
  }

  /**
   * Returns the value of translation message for key `phone.add.mobile`.
   * Default value: `Add mobile phone`
   */
  get phoneAddMobile(): string {
    return this._translations.get('phone.add.mobile');
  }

  /**
   * Returns the value of translation message for key `phone.add.landLine`.
   * Default value: `Add land-line phone`
   */
  get phoneAddLandLine(): string {
    return this._translations.get('phone.add.landLine');
  }

  /**
   * Returns the value of translation message for key `phone.remove`.
   * Default value: `Remove this phone`
   */
  get phoneRemove(): string {
    return this._translations.get('phone.remove');
  }

  /**
   * Returns the value of translation message for key `phone.none`.
   * Default value: `There are currently no phones`
   */
  get phoneNone(): string {
    return this._translations.get('phone.none');
  }

  /**
   * Returns the value of translation message for key `contactInfo`.
   * Default value: `Contact information`
   */
  get contactInfo(): string {
    return this._translations.get('contactInfo');
  }

  /**
   * Returns the value of translation message for key `contactInfo.add`.
   * Default value: `Add contact`
   */
  get contactInfoAdd(): string {
    return this._translations.get('contactInfo.add');
  }

  /**
   * Returns the value of translation message for key `contactInfo.remove`.
   * Default value: `Remove contact`
   */
  get contactInfoRemove(): string {
    return this._translations.get('contactInfo.remove');
  }

  /**
   * Returns the value of translation message for key `contactInfo.none`.
   * Default value: `There are currently no additional contacts`
   */
  get contactInfoNone(): string {
    return this._translations.get('contactInfo.none');
  }

  /**
   * Returns the value of translation message for key `contactInfo.atAddress`.
   * Default value: `At`
   */
  get contactInfoAtAddress(): string {
    return this._translations.get('contactInfo.atAddress');
  }

  /**
   * Returns the value of translation message for key `confirmation.message`.
   * Default value: `To save your profile, provide your {type}`
   */
  confirmationMessage(type: string | number): string {
    return this._translations.get('confirmation.message', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `profileSaved`.
   * Default value: `The profile was saved`
   */
  get profileSaved(): string {
    return this._translations.get('profileSaved');
  }

  /**
   * Returns the value of translation message for key `newEmailConfirmed`.
   * Default value: `Your new e-mail address was successfully confirmed`
   */
  get newEmailConfirmed(): string {
    return this._translations.get('newEmailConfirmed');
  }

  /**
   * Returns the value of translation message for key `passwordConfirmation`.
   * Default value: `{type} confirmation`
   */
  passwordConfirmation(type: string | number): string {
    return this._translations.get('passwordConfirmation', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `securityQuestion.message`.
   * Default value: `If you happen to forget your password, you will need to correctly answer the security question in order to reset the password.<br>This can be set later, but keep in mind that the password recovery won't work without it.`
   */
  get securityQuestionMessage(): string {
    return this._translations.get('securityQuestion.message');
  }

  /**
   * Returns the value of translation message for key `securityQuestion.empty`.
   * Default value: `Leave blank`
   */
  get securityQuestionEmpty(): string {
    return this._translations.get('securityQuestion.empty');
  }

  /**
   * Returns the value of translation message for key `captcha`.
   * Default value: `Visual validation`
   */
  get captcha(): string {
    return this._translations.get('captcha');
  }

  /**
   * Returns the value of translation message for key `contact`.
   * Default value: `Contact`
   */
  get contact(): string {
    return this._translations.get('contact');
  }

  /**
   * Returns the value of translation message for key `creationBegin`.
   * Default value: `Registered after`
   */
  get creationBegin(): string {
    return this._translations.get('creationBegin');
  }

  /**
   * Returns the value of translation message for key `creationEnd`.
   * Default value: `Registered before`
   */
  get creationEnd(): string {
    return this._translations.get('creationEnd');
  }

  /**
   * Returns the value of translation message for key `acceptedAgreements`.
   * Default value: `Accepted agreements`
   */
  get acceptedAgreements(): string {
    return this._translations.get('acceptedAgreements');
  }

  /**
   * Returns the value of translation message for key `notAcceptedAgreements`.
   * Default value: `Not accepted agreements`
   */
  get notAcceptedAgreements(): string {
    return this._translations.get('notAcceptedAgreements');
  }

  /**
   * Returns the value of translation message for key `assignedProducts`.
   * Default value: `Assigned products`
   */
  get assignedProducts(): string {
    return this._translations.get('assignedProducts');
  }

  /**
   * Returns the value of translation message for key `beginUserActivationDate`.
   * Default value: `Activated after`
   */
  get beginUserActivationDate(): string {
    return this._translations.get('beginUserActivationDate');
  }

  /**
   * Returns the value of translation message for key `endUserActivationDate`.
   * Default value: `Activated before`
   */
  get endUserActivationDate(): string {
    return this._translations.get('endUserActivationDate');
  }

  /**
   * Returns the value of translation message for key `beginLastLoginDate`.
   * Default value: `Last login after`
   */
  get beginLastLoginDate(): string {
    return this._translations.get('beginLastLoginDate');
  }

  /**
   * Returns the value of translation message for key `endLastLoginDate`.
   * Default value: `Last login before`
   */
  get endLastLoginDate(): string {
    return this._translations.get('endLastLoginDate');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$User$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$User$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `profile`.
   */
  get profile(): I18n$User$Profile {
    return this._nested.profile;
  }

  /**
   * Returns the nested accessor for translation messages in `registration`.
   */
  get registration(): I18n$User$Registration {
    return this._nested.registration;
  }

  /**
   * Returns the nested accessor for translation messages in `orderBy`.
   */
  get orderBy(): I18n$User$OrderBy {
    return this._nested.orderBy;
  }
}

export class I18n$User$Title {

  private _translations: Translations = new Translations('user.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `myProfile`.
   * Default value: `My profile`
   */
  get myProfile(): string {
    return this._translations.get('myProfile');
  }

  /**
   * Returns the value of translation message for key `editProfile`.
   * Default value: `Edit profile`
   */
  get editProfile(): string {
    return this._translations.get('editProfile');
  }

  /**
   * Returns the value of translation message for key `image`.
   * Default value: `Profile image`
   */
  get image(): string {
    return this._translations.get('image');
  }

  /**
   * Returns the value of translation message for key `images`.
   * Default value: `Profile images`
   */
  get images(): string {
    return this._translations.get('images');
  }

  /**
   * Returns the value of translation message for key `fields`.
   * Default value: `Profile fields`
   */
  get fields(): string {
    return this._translations.get('fields');
  }

  /**
   * Returns the value of translation message for key `phones`.
   * Default value: `Phones`
   */
  get phones(): string {
    return this._translations.get('phones');
  }

  /**
   * Returns the value of translation message for key `addresses`.
   * Default value: `Addresses`
   */
  get addresses(): string {
    return this._translations.get('addresses');
  }

  /**
   * Returns the value of translation message for key `contactInfos`.
   * Default value: `Additional contacts`
   */
  get contactInfos(): string {
    return this._translations.get('contactInfos');
  }

  /**
   * Returns the value of translation message for key `confirmation`.
   * Default value: `Confirmation`
   */
  get confirmation(): string {
    return this._translations.get('confirmation');
  }

  /**
   * Returns the value of translation message for key `registration`.
   * Default value: `User registration`
   */
  get registration(): string {
    return this._translations.get('registration');
  }

  /**
   * Returns the value of translation message for key `registration.confirmation`.
   * Default value: `Registration confirmation`
   */
  get registrationConfirmation(): string {
    return this._translations.get('registration.confirmation');
  }

  /**
   * Returns the value of translation message for key `registration.done`.
   * Default value: `Registration successful`
   */
  get registrationDone(): string {
    return this._translations.get('registration.done');
  }

  /**
   * Returns the value of translation message for key `contactList`.
   * Default value: `Contact list`
   */
  get contactList(): string {
    return this._translations.get('contactList');
  }

  /**
   * Returns the value of translation message for key `addContact`.
   * Default value: `Add a new contact`
   */
  get addContact(): string {
    return this._translations.get('addContact');
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Users search`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `directory`.
   * Default value: `Business directory`
   */
  get directory(): string {
    return this._translations.get('directory');
  }

  /**
   * Returns the value of translation message for key `myOperators`.
   * Default value: `Operators`
   */
  get myOperators(): string {
    return this._translations.get('myOperators');
  }

  /**
   * Returns the value of translation message for key `userOperators`.
   * Default value: `User operators`
   */
  get userOperators(): string {
    return this._translations.get('userOperators');
  }

  /**
   * Returns the value of translation message for key `operatorRegistration`.
   * Default value: `Operator registration`
   */
  get operatorRegistration(): string {
    return this._translations.get('operatorRegistration');
  }

  /**
   * Returns the value of translation message for key `myBrokerings`.
   * Default value: `Assigned members`
   */
  get myBrokerings(): string {
    return this._translations.get('myBrokerings');
  }

  /**
   * Returns the value of translation message for key `userBrokerings`.
   * Default value: `Broker assigned members`
   */
  get userBrokerings(): string {
    return this._translations.get('userBrokerings');
  }
}

export class I18n$User$MobileTitle {

  private _translations: Translations = new Translations('user.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `myProfile`.
   * Default value: `My profile`
   */
  get myProfile(): string {
    return this._translations.get('myProfile');
  }

  /**
   * Returns the value of translation message for key `userProfile`.
   * Default value: `User profile`
   */
  get userProfile(): string {
    return this._translations.get('userProfile');
  }

  /**
   * Returns the value of translation message for key `editProfile`.
   * Default value: `Edit profile`
   */
  get editProfile(): string {
    return this._translations.get('editProfile');
  }

  /**
   * Returns the value of translation message for key `image`.
   * Default value: `Profile image`
   */
  get image(): string {
    return this._translations.get('image');
  }

  /**
   * Returns the value of translation message for key `images`.
   * Default value: `Profile images`
   */
  get images(): string {
    return this._translations.get('images');
  }

  /**
   * Returns the value of translation message for key `fields`.
   * Default value: `Profile fields`
   */
  get fields(): string {
    return this._translations.get('fields');
  }

  /**
   * Returns the value of translation message for key `phones`.
   * Default value: `Phones`
   */
  get phones(): string {
    return this._translations.get('phones');
  }

  /**
   * Returns the value of translation message for key `addresses`.
   * Default value: `Addresses`
   */
  get addresses(): string {
    return this._translations.get('addresses');
  }

  /**
   * Returns the value of translation message for key `contactInfos`.
   * Default value: `Additional contacts`
   */
  get contactInfos(): string {
    return this._translations.get('contactInfos');
  }

  /**
   * Returns the value of translation message for key `confirmation`.
   * Default value: `Confirmation`
   */
  get confirmation(): string {
    return this._translations.get('confirmation');
  }

  /**
   * Returns the value of translation message for key `registration`.
   * Default value: `Registration`
   */
  get registration(): string {
    return this._translations.get('registration');
  }

  /**
   * Returns the value of translation message for key `registration.confirmation`.
   * Default value: `Confirmation`
   */
  get registrationConfirmation(): string {
    return this._translations.get('registration.confirmation');
  }

  /**
   * Returns the value of translation message for key `registration.done`.
   * Default value: `Success`
   */
  get registrationDone(): string {
    return this._translations.get('registration.done');
  }

  /**
   * Returns the value of translation message for key `contactList`.
   * Default value: `Contacts`
   */
  get contactList(): string {
    return this._translations.get('contactList');
  }

  /**
   * Returns the value of translation message for key `addContact`.
   * Default value: `New contact`
   */
  get addContact(): string {
    return this._translations.get('addContact');
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Users`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `directory`.
   * Default value: `Directory`
   */
  get directory(): string {
    return this._translations.get('directory');
  }

  /**
   * Returns the value of translation message for key `myOperators`.
   * Default value: `Operators`
   */
  get myOperators(): string {
    return this._translations.get('myOperators');
  }

  /**
   * Returns the value of translation message for key `userOperators`.
   * Default value: `Operators`
   */
  get userOperators(): string {
    return this._translations.get('userOperators');
  }

  /**
   * Returns the value of translation message for key `operatorRegistration`.
   * Default value: `New operator`
   */
  get operatorRegistration(): string {
    return this._translations.get('operatorRegistration');
  }

  /**
   * Returns the value of translation message for key `myBrokerings`.
   * Default value: `Assigned members`
   */
  get myBrokerings(): string {
    return this._translations.get('myBrokerings');
  }

  /**
   * Returns the value of translation message for key `userBrokerings`.
   * Default value: `Broker members`
   */
  get userBrokerings(): string {
    return this._translations.get('userBrokerings');
  }
}

export class I18n$User$Profile {

  private _translations: Translations = new Translations('user.profile');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `noPermission`.
   * Default value: `You don't have permission to view the profile of this user`
   */
  get noPermission(): string {
    return this._translations.get('noPermission');
  }

  /**
   * Returns the value of translation message for key `showActions`.
   * Default value: `Show actions`
   */
  get showActions(): string {
    return this._translations.get('showActions');
  }

  /**
   * Returns the value of translation message for key `hideActions`.
   * Default value: `Hide actions`
   */
  get hideActions(): string {
    return this._translations.get('hideActions');
  }

  /**
   * Returns the value of translation message for key `banking`.
   * Default value: `Banking`
   */
  get banking(): string {
    return this._translations.get('banking');
  }

  /**
   * Returns the value of translation message for key `management`.
   * Default value: `Management`
   */
  get management(): string {
    return this._translations.get('management');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit profile`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `managePasswords`.
   * Default value: `Manage passwords`
   */
  get managePasswords(): string {
    return this._translations.get('managePasswords');
  }

  /**
   * Returns the value of translation message for key `viewIdentityProviders`.
   * Default value: `View identity providers`
   */
  get viewIdentityProviders(): string {
    return this._translations.get('viewIdentityProviders');
  }

  /**
   * Returns the value of translation message for key `addContact`.
   * Default value: `Add to contacts`
   */
  get addContact(): string {
    return this._translations.get('addContact');
  }

  /**
   * Returns the value of translation message for key `addContact.done`.
   * Default value: `{user} was added to your contact list`
   */
  addContactDone(user: string | number): string {
    return this._translations.get('addContact.done', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `removeContact`.
   * Default value: `Remove from contacts`
   */
  get removeContact(): string {
    return this._translations.get('removeContact');
  }

  /**
   * Returns the value of translation message for key `removeContact.done`.
   * Default value: `{user} was removed from your contact list`
   */
  removeContactDone(user: string | number): string {
    return this._translations.get('removeContact.done', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `pay`.
   * Default value: `Make payment`
   */
  get pay(): string {
    return this._translations.get('pay');
  }

  /**
   * Returns the value of translation message for key `paySystemToUser`.
   * Default value: `Payment system to user`
   */
  get paySystemToUser(): string {
    return this._translations.get('paySystemToUser');
  }

  /**
   * Returns the value of translation message for key `payAsUserToSystem`.
   * Default value: `Payment user to system`
   */
  get payAsUserToSystem(): string {
    return this._translations.get('payAsUserToSystem');
  }

  /**
   * Returns the value of translation message for key `payAsUserToUser`.
   * Default value: `Payment user to user`
   */
  get payAsUserToUser(): string {
    return this._translations.get('payAsUserToUser');
  }

  /**
   * Returns the value of translation message for key `payAsUserToSelf`.
   * Default value: `Payment user to self`
   */
  get payAsUserToSelf(): string {
    return this._translations.get('payAsUserToSelf');
  }

  /**
   * Returns the value of translation message for key `requestPaymentAsUserFromUser`.
   * Default value: `Request payment from user to user`
   */
  get requestPaymentAsUserFromUser(): string {
    return this._translations.get('requestPaymentAsUserFromUser');
  }

  /**
   * Returns the value of translation message for key `requestPaymentFromUser`.
   * Default value: `Request payment from user`
   */
  get requestPaymentFromUser(): string {
    return this._translations.get('requestPaymentFromUser');
  }

  /**
   * Returns the value of translation message for key `requestPaymentAsUserFromSystem`.
   * Default value: `Request payment from system to user`
   */
  get requestPaymentAsUserFromSystem(): string {
    return this._translations.get('requestPaymentAsUserFromSystem');
  }

  /**
   * Returns the value of translation message for key `requestPaymentFromSystem`.
   * Default value: `Request payment from system`
   */
  get requestPaymentFromSystem(): string {
    return this._translations.get('requestPaymentFromSystem');
  }

  /**
   * Returns the value of translation message for key `purchases`.
   * Default value: `Purchases`
   */
  get purchases(): string {
    return this._translations.get('purchases');
  }

  /**
   * Returns the value of translation message for key `sales`.
   * Default value: `Sales`
   */
  get sales(): string {
    return this._translations.get('sales');
  }

  /**
   * Returns the value of translation message for key `viewAccount`.
   * Default value: `View {account}`
   */
  viewAccount(account: string | number): string {
    return this._translations.get('viewAccount', {
      account: account
    });
  }

  /**
   * Returns the value of translation message for key `viewScheduledPayments`.
   * Default value: `View scheduled payments`
   */
  get viewScheduledPayments(): string {
    return this._translations.get('viewScheduledPayments');
  }

  /**
   * Returns the value of translation message for key `viewAuthorizedPayments`.
   * Default value: `View payment authorizations`
   */
  get viewAuthorizedPayments(): string {
    return this._translations.get('viewAuthorizedPayments');
  }

  /**
   * Returns the value of translation message for key `viewPaymentRequests`.
   * Default value: `View payment requests`
   */
  get viewPaymentRequests(): string {
    return this._translations.get('viewPaymentRequests');
  }

  /**
   * Returns the value of translation message for key `viewAds`.
   * Default value: `View advertisements`
   */
  get viewAds(): string {
    return this._translations.get('viewAds');
  }

  /**
   * Returns the value of translation message for key `viewBrokerings`.
   * Default value: `View assigned members`
   */
  get viewBrokerings(): string {
    return this._translations.get('viewBrokerings');
  }

  /**
   * Returns the value of translation message for key `viewBrokers`.
   * Default value: `View brokers`
   */
  get viewBrokers(): string {
    return this._translations.get('viewBrokers');
  }

  /**
   * Returns the value of translation message for key `viewOperators`.
   * Default value: `View operators`
   */
  get viewOperators(): string {
    return this._translations.get('viewOperators');
  }

  /**
   * Returns the value of translation message for key `viewWebshop`.
   * Default value: `View web shop`
   */
  get viewWebshop(): string {
    return this._translations.get('viewWebshop');
  }

  /**
   * Returns the value of translation message for key `adInterests`.
   * Default value: `Ad interests`
   */
  get adInterests(): string {
    return this._translations.get('adInterests');
  }

  /**
   * Returns the value of translation message for key `deliveryMethods`.
   * Default value: `Delivery methods`
   */
  get deliveryMethods(): string {
    return this._translations.get('deliveryMethods');
  }

  /**
   * Returns the value of translation message for key `webshopSettings`.
   * Default value: `Web shop settings`
   */
  get webshopSettings(): string {
    return this._translations.get('webshopSettings');
  }

  /**
   * Returns the value of translation message for key `status.user`.
   * Default value: `User status`
   */
  get statusUser(): string {
    return this._translations.get('status.user');
  }

  /**
   * Returns the value of translation message for key `status.operator`.
   * Default value: `Operator status`
   */
  get statusOperator(): string {
    return this._translations.get('status.operator');
  }

  /**
   * Returns the value of translation message for key `group.user`.
   * Default value: `User group`
   */
  get groupUser(): string {
    return this._translations.get('group.user');
  }

  /**
   * Returns the value of translation message for key `group.operator`.
   * Default value: `Operator group`
   */
  get groupOperator(): string {
    return this._translations.get('group.operator');
  }

  /**
   * Returns the value of translation message for key `agreements`.
   * Default value: `Agreements`
   */
  get agreements(): string {
    return this._translations.get('agreements');
  }

  /**
   * Returns the value of translation message for key `viewRedeemedVouchers`.
   * Default value: `View redeemed vouchers`
   */
  get viewRedeemedVouchers(): string {
    return this._translations.get('viewRedeemedVouchers');
  }

  /**
   * Returns the value of translation message for key `redeemVoucher`.
   * Default value: `Redeem voucher`
   */
  get redeemVoucher(): string {
    return this._translations.get('redeemVoucher');
  }

  /**
   * Returns the value of translation message for key `viewBoughtVouchers`.
   * Default value: `View bought vouchers`
   */
  get viewBoughtVouchers(): string {
    return this._translations.get('viewBoughtVouchers');
  }

  /**
   * Returns the value of translation message for key `buyVouchers`.
   * Default value: `Buy vouchers`
   */
  get buyVouchers(): string {
    return this._translations.get('buyVouchers');
  }

  /**
   * Returns the value of translation message for key `notificationSettings`.
   * Default value: `Notification settings`
   */
  get notificationSettings(): string {
    return this._translations.get('notificationSettings');
  }

  /**
   * Returns the value of translation message for key `products`.
   * Default value: `Products`
   */
  get products(): string {
    return this._translations.get('products');
  }

  /**
   * Returns the value of translation message for key `accountsBalanceLimits`.
   * Default value: `Account balance limits`
   */
  get accountsBalanceLimits(): string {
    return this._translations.get('accountsBalanceLimits');
  }

  /**
   * Returns the value of translation message for key `accountsPaymentLimits`.
   * Default value: `Account payment limits`
   */
  get accountsPaymentLimits(): string {
    return this._translations.get('accountsPaymentLimits');
  }

  /**
   * Returns the value of translation message for key `privacySettings`.
   * Default value: `Privacy settings`
   */
  get privacySettings(): string {
    return this._translations.get('privacySettings');
  }

  /**
   * Returns the value of translation message for key `references`.
   * Default value: `References`
   */
  get references(): string {
    return this._translations.get('references');
  }
}

export class I18n$User$Registration {

  private _translations: Translations = new Translations('user.registration');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `group.public`.
   * Default value: `Choose the group you want to participate`
   */
  get groupPublic(): string {
    return this._translations.get('group.public');
  }

  /**
   * Returns the value of translation message for key `group.manager`.
   * Default value: `Choose the group for the new user`
   */
  get groupManager(): string {
    return this._translations.get('group.manager');
  }

  /**
   * Returns the value of translation message for key `skipActivationEmail`.
   * Default value: `Skip activation e-mail`
   */
  get skipActivationEmail(): string {
    return this._translations.get('skipActivationEmail');
  }

  /**
   * Returns the value of translation message for key `password.assign`.
   * Default value: `Assign password`
   */
  get passwordAssign(): string {
    return this._translations.get('password.assign');
  }

  /**
   * Returns the value of translation message for key `password.forceChange`.
   * Default value: `Force user to change`
   */
  get passwordForceChange(): string {
    return this._translations.get('password.forceChange');
  }

  /**
   * Returns the value of translation message for key `active.public`.
   * Default value: `You have been successfully registered, and your account is now active.`
   */
  get activePublic(): string {
    return this._translations.get('active.public');
  }

  /**
   * Returns the value of translation message for key `inactive.public`.
   * Default value: `Your account was successfully created.<br>However, you will need to be activated by the administration.<br>You will be notified when your account is active.`
   */
  get inactivePublic(): string {
    return this._translations.get('inactive.public');
  }

  /**
   * Returns the value of translation message for key `pending.public`.
   * Default value: `Your registration has been submitted, and needs to be verified.<br>You should receive an e-mail shortly with instructions on how to activate your account.<br>If you don't receive the e-mail, make sure to check your spam / junk folder.`
   */
  get pendingPublic(): string {
    return this._translations.get('pending.public');
  }

  /**
   * Returns the value of translation message for key `active.manager`.
   * Default value: `The user's account for {user} has been activated.`
   */
  activeManager(user: string | number): string {
    return this._translations.get('active.manager', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `inactive.manager`.
   * Default value: `The user {user} has been registered, however, still needs activatation by the administration.`
   */
  inactiveManager(user: string | number): string {
    return this._translations.get('inactive.manager', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `pending.manager`.
   * Default value: `The user {user} has been registered, however, still needs to validate their registration by confirming the e-mail.`
   */
  pendingManager(user: string | number): string {
    return this._translations.get('pending.manager', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `principal.single`.
   * Default value: `You can use your {principal} ({value}) on {channels}`
   */
  principalSingle($: {principal: string | number, value: string | number, channels: string | number}): string {
    return this._translations.get('principal.single', {
      principal: $.principal,
      value: $.value,
      channels: $.channels
    });
  }

  /**
   * Returns the value of translation message for key `principal.multiple.preface`.
   * Default value: `You can login with the following data:`
   */
  get principalMultiplePreface(): string {
    return this._translations.get('principal.multiple.preface');
  }

  /**
   * Returns the value of translation message for key `principal.multiple.item`.
   * Default value: `<b>{principal}</b> ({value}): can be used on {channels}`
   */
  principalMultipleItem($: {principal: string | number, value: string | number, channels: string | number}): string {
    return this._translations.get('principal.multiple.item', {
      principal: $.principal,
      value: $.value,
      channels: $.channels
    });
  }

  /**
   * Returns the value of translation message for key `generatedPasswords.none`.
   * Default value: `You can now login with the password you have informed.`
   */
  get generatedPasswordsNone(): string {
    return this._translations.get('generatedPasswords.none');
  }

  /**
   * Returns the value of translation message for key `generatedPasswords.single`.
   * Default value: `You will receive an e-mail shortly with your generated {type}.`
   */
  generatedPasswordsSingle(type: string | number): string {
    return this._translations.get('generatedPasswords.single', {
      type: type
    });
  }

  /**
   * Returns the value of translation message for key `generatedPasswords.multiple`.
   * Default value: `You will receive an e-mail shortly with the following generated passwords: {types}.`
   */
  generatedPasswordsMultiple(types: string | number): string {
    return this._translations.get('generatedPasswords.multiple', {
      types: types
    });
  }

  /**
   * Returns the value of translation message for key `viewProfile`.
   * Default value: `View profile`
   */
  get viewProfile(): string {
    return this._translations.get('viewProfile');
  }

  /**
   * Returns the value of translation message for key `registerAnotherUser`.
   * Default value: `Register another user`
   */
  get registerAnotherUser(): string {
    return this._translations.get('registerAnotherUser');
  }
}

export class I18n$User$OrderBy {

  private _translations: Translations = new Translations('user.orderBy');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `alphabeticallyAsc`.
   * Default value: `Name (A-Z)`
   */
  get alphabeticallyAsc(): string {
    return this._translations.get('alphabeticallyAsc');
  }

  /**
   * Returns the value of translation message for key `alphabeticallyDesc`.
   * Default value: `Name (Z-A)`
   */
  get alphabeticallyDesc(): string {
    return this._translations.get('alphabeticallyDesc');
  }
}

export class I18n$OperatorGroup {

  private _translations: Translations = new Translations('operatorGroup');

  private _nested = {
    title: new I18n$OperatorGroup$Title(),
    mobileTitle: new I18n$OperatorGroup$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `accountAccess`.
   * Default value: `Account visibility`
   */
  get accountAccess(): string {
    return this._translations.get('accountAccess');
  }

  /**
   * Returns the value of translation message for key `accountAccess.full`.
   * Default value: `Full`
   */
  get accountAccessFull(): string {
    return this._translations.get('accountAccess.full');
  }

  /**
   * Returns the value of translation message for key `accountAccess.incoming`.
   * Default value: `Only incoming payments`
   */
  get accountAccessIncoming(): string {
    return this._translations.get('accountAccess.incoming');
  }

  /**
   * Returns the value of translation message for key `accountAccess.outgoing`.
   * Default value: `Only outgoing payments`
   */
  get accountAccessOutgoing(): string {
    return this._translations.get('accountAccess.outgoing');
  }

  /**
   * Returns the value of translation message for key `accountAccess.own`.
   * Default value: `Received or paid by operator`
   */
  get accountAccessOwn(): string {
    return this._translations.get('accountAccess.own');
  }

  /**
   * Returns the value of translation message for key `accountAccess.none`.
   * Default value: `Not visible`
   */
  get accountAccessNone(): string {
    return this._translations.get('accountAccess.none');
  }

  /**
   * Returns the value of translation message for key `performPayments`.
   * Default value: `Perform payments`
   */
  get performPayments(): string {
    return this._translations.get('performPayments');
  }

  /**
   * Returns the value of translation message for key `performPayments.requiresAuthorization.view`.
   * Default value: `, requires authorization`
   */
  get performPaymentsRequiresAuthorizationView(): string {
    return this._translations.get('performPayments.requiresAuthorization.view');
  }

  /**
   * Returns the value of translation message for key `performPayments.maxAmountPerDay.view`.
   * Default value: `, max. {max} per day`
   */
  performPaymentsMaxAmountPerDayView(max: string | number): string {
    return this._translations.get('performPayments.maxAmountPerDay.view', {
      max: max
    });
  }

  /**
   * Returns the value of translation message for key `performPayments.requiresAuthorization`.
   * Default value: `Requires authorization`
   */
  get performPaymentsRequiresAuthorization(): string {
    return this._translations.get('performPayments.requiresAuthorization');
  }

  /**
   * Returns the value of translation message for key `performPayments.maxAmountPerDay`.
   * Default value: `Daily limit`
   */
  get performPaymentsMaxAmountPerDay(): string {
    return this._translations.get('performPayments.maxAmountPerDay');
  }

  /**
   * Returns the value of translation message for key `authorizePayments`.
   * Default value: `Authorize payments`
   */
  get authorizePayments(): string {
    return this._translations.get('authorizePayments');
  }

  /**
   * Returns the value of translation message for key `paymentNotifications`.
   * Default value: `Payment notifications`
   */
  get paymentNotifications(): string {
    return this._translations.get('paymentNotifications');
  }

  /**
   * Returns the value of translation message for key `paymentNotifications.above`.
   * Default value: `Only notify payments above`
   */
  get paymentNotificationsAbove(): string {
    return this._translations.get('paymentNotifications.above');
  }

  /**
   * Returns the value of translation message for key `paymentNotifications.below`.
   * Default value: `Only notify payments below`
   */
  get paymentNotificationsBelow(): string {
    return this._translations.get('paymentNotifications.below');
  }

  /**
   * Returns the value of translation message for key `chargebackPayments`.
   * Default value: `Chargeback payments`
   */
  get chargebackPayments(): string {
    return this._translations.get('chargebackPayments');
  }

  /**
   * Returns the value of translation message for key `restrictPaymentsToUsers`.
   * Default value: `Restrict payments to`
   */
  get restrictPaymentsToUsers(): string {
    return this._translations.get('restrictPaymentsToUsers');
  }

  /**
   * Returns the value of translation message for key `editOwnProfile`.
   * Default value: `Edit own profile`
   */
  get editOwnProfile(): string {
    return this._translations.get('editOwnProfile');
  }

  /**
   * Returns the value of translation message for key `notifications`.
   * Default value: `Notifications`
   */
  get notifications(): string {
    return this._translations.get('notifications');
  }

  /**
   * Returns the value of translation message for key `viewAdvertisements`.
   * Default value: `View advertisements`
   */
  get viewAdvertisements(): string {
    return this._translations.get('viewAdvertisements');
  }

  /**
   * Returns the value of translation message for key `brokering`.
   * Default value: `Perform brokering operations`
   */
  get brokering(): string {
    return this._translations.get('brokering');
  }

  /**
   * Returns the value of translation message for key `runOperations`.
   * Default value: `Run operations`
   */
  get runOperations(): string {
    return this._translations.get('runOperations');
  }

  /**
   * Returns the value of translation message for key `created`.
   * Default value: `The operator group was created`
   */
  get created(): string {
    return this._translations.get('created');
  }

  /**
   * Returns the value of translation message for key `saved`.
   * Default value: `The operator group was saved`
   */
  get saved(): string {
    return this._translations.get('saved');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$OperatorGroup$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$OperatorGroup$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$OperatorGroup$Title {

  private _translations: Translations = new Translations('operatorGroup.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Operator groups`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Operator group`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `New operator group`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit operator group`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `permissions`.
   * Default value: `Permissions`
   */
  get permissions(): string {
    return this._translations.get('permissions');
  }

  /**
   * Returns the value of translation message for key `accountAccess`.
   * Default value: `Account access`
   */
  get accountAccess(): string {
    return this._translations.get('accountAccess');
  }

  /**
   * Returns the value of translation message for key `generalAccount`.
   * Default value: `General account operations`
   */
  get generalAccount(): string {
    return this._translations.get('generalAccount');
  }
}

export class I18n$OperatorGroup$MobileTitle {

  private _translations: Translations = new Translations('operatorGroup.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Operator groups`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Operator group`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `New group`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit group`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `permissions`.
   * Default value: `Permissions`
   */
  get permissions(): string {
    return this._translations.get('permissions');
  }

  /**
   * Returns the value of translation message for key `accountAccess`.
   * Default value: `Account access`
   */
  get accountAccess(): string {
    return this._translations.get('accountAccess');
  }

  /**
   * Returns the value of translation message for key `generalAccount`.
   * Default value: `General operations`
   */
  get generalAccount(): string {
    return this._translations.get('generalAccount');
  }
}

export class I18n$UserStatus {

  private _translations: Translations = new Translations('userStatus');

  private _nested = {
    confirm: new I18n$UserStatus$Confirm(),
    done: new I18n$UserStatus$Done(),
    title: new I18n$UserStatus$Title(),
    mobileTitle: new I18n$UserStatus$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.confirm.defaultValues = defaultValues['confirm'];
    this._nested.done.defaultValues = defaultValues['done'];
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.confirm.initialize(values['confirm']);
    this._nested.done.initialize(values['done']);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `current`.
   * Default value: `Current status`
   */
  get current(): string {
    return this._translations.get('current');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `New status`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `active`.
   * Default value: `Active`
   */
  get active(): string {
    return this._translations.get('active');
  }

  /**
   * Returns the value of translation message for key `blocked`.
   * Default value: `Access blocked`
   */
  get blocked(): string {
    return this._translations.get('blocked');
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `Disabled`
   */
  get disabled(): string {
    return this._translations.get('disabled');
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Pending activation`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `purged`.
   * Default value: `Purged (all private data is erased)`
   */
  get purged(): string {
    return this._translations.get('purged');
  }

  /**
   * Returns the value of translation message for key `removed`.
   * Default value: `Removed (no private data is erased)`
   */
  get removed(): string {
    return this._translations.get('removed');
  }

  /**
   * Returns the nested accessor for translation messages in `confirm`.
   */
  get confirm(): I18n$UserStatus$Confirm {
    return this._nested.confirm;
  }

  /**
   * Returns the nested accessor for translation messages in `done`.
   */
  get done(): I18n$UserStatus$Done {
    return this._nested.done;
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$UserStatus$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$UserStatus$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$UserStatus$Confirm {

  private _translations: Translations = new Translations('userStatus.confirm');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `active`.
   * Default value: `Are you sure to activate {user}?`
   */
  active(user: string | number): string {
    return this._translations.get('active', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `blocked`.
   * Default value: `Are you sure to block access to {user}?`
   */
  blocked(user: string | number): string {
    return this._translations.get('blocked', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `Are you sure to disable {user}?`
   */
  disabled(user: string | number): string {
    return this._translations.get('disabled', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `purged`.
   * Default value: `Are you sure to permanently remove {user} and remove all private data?\nThis action is irreversible!`
   */
  purged(user: string | number): string {
    return this._translations.get('purged', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `removed`.
   * Default value: `Are you sure to permanently remove {user}?\nThis action is irreversible!`
   */
  removed(user: string | number): string {
    return this._translations.get('removed', {
      user: user
    });
  }
}

export class I18n$UserStatus$Done {

  private _translations: Translations = new Translations('userStatus.done');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `active`.
   * Default value: `{user} was activated`
   */
  active(user: string | number): string {
    return this._translations.get('active', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `blocked`.
   * Default value: `{user} was blocked`
   */
  blocked(user: string | number): string {
    return this._translations.get('blocked', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `{user} was disabled`
   */
  disabled(user: string | number): string {
    return this._translations.get('disabled', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `purged`.
   * Default value: `{user} was permanently removed, together with all personal data`
   */
  purged(user: string | number): string {
    return this._translations.get('purged', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `removed`.
   * Default value: `{user} was permanently removed`
   */
  removed(user: string | number): string {
    return this._translations.get('removed', {
      user: user
    });
  }
}

export class I18n$UserStatus$Title {

  private _translations: Translations = new Translations('userStatus.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `status.user`.
   * Default value: `User status`
   */
  get statusUser(): string {
    return this._translations.get('status.user');
  }

  /**
   * Returns the value of translation message for key `status.operator`.
   * Default value: `Operator status`
   */
  get statusOperator(): string {
    return this._translations.get('status.operator');
  }

  /**
   * Returns the value of translation message for key `change.user`.
   * Default value: `Change user status`
   */
  get changeUser(): string {
    return this._translations.get('change.user');
  }

  /**
   * Returns the value of translation message for key `change.operator`.
   * Default value: `Change operator status`
   */
  get changeOperator(): string {
    return this._translations.get('change.operator');
  }

  /**
   * Returns the value of translation message for key `history.user`.
   * Default value: `User status history`
   */
  get historyUser(): string {
    return this._translations.get('history.user');
  }

  /**
   * Returns the value of translation message for key `history.operator`.
   * Default value: `Operator status history`
   */
  get historyOperator(): string {
    return this._translations.get('history.operator');
  }
}

export class I18n$UserStatus$MobileTitle {

  private _translations: Translations = new Translations('userStatus.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `status.user`.
   * Default value: `User status`
   */
  get statusUser(): string {
    return this._translations.get('status.user');
  }

  /**
   * Returns the value of translation message for key `status.operator`.
   * Default value: `Operator status`
   */
  get statusOperator(): string {
    return this._translations.get('status.operator');
  }

  /**
   * Returns the value of translation message for key `change.user`.
   * Default value: `Change status`
   */
  get changeUser(): string {
    return this._translations.get('change.user');
  }

  /**
   * Returns the value of translation message for key `change.operator`.
   * Default value: `Change status`
   */
  get changeOperator(): string {
    return this._translations.get('change.operator');
  }

  /**
   * Returns the value of translation message for key `history.user`.
   * Default value: `Status history`
   */
  get historyUser(): string {
    return this._translations.get('history.user');
  }

  /**
   * Returns the value of translation message for key `history.operator`.
   * Default value: `Status history`
   */
  get historyOperator(): string {
    return this._translations.get('history.operator');
  }
}

export class I18n$Agreements {

  private _translations: Translations = new Translations('agreements');

  private _nested = {
    title: new I18n$Agreements$Title(),
    mobileTitle: new I18n$Agreements$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `agreement`.
   * Default value: `Agreement`
   */
  get agreement(): string {
    return this._translations.get('agreement');
  }

  /**
   * Returns the value of translation message for key `required`.
   * Default value: `Required agreements`
   */
  get required(): string {
    return this._translations.get('required');
  }

  /**
   * Returns the value of translation message for key `optional`.
   * Default value: `Optional agreements`
   */
  get optional(): string {
    return this._translations.get('optional');
  }

  /**
   * Returns the value of translation message for key `optional.saved`.
   * Default value: `The selected agreements have been saved`
   */
  get optionalSaved(): string {
    return this._translations.get('optional.saved');
  }

  /**
   * Returns the value of translation message for key `accepted`.
   * Default value: `Accepted`
   */
  get accepted(): string {
    return this._translations.get('accepted');
  }

  /**
   * Returns the value of translation message for key `noAccepted`.
   * Default value: `No accepted agreements`
   */
  get noAccepted(): string {
    return this._translations.get('noAccepted');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Agreements$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Agreements$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$Agreements$Title {

  private _translations: Translations = new Translations('agreements.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `accepted`.
   * Default value: `Accepted agreements`
   */
  get accepted(): string {
    return this._translations.get('accepted');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Agreements history`
   */
  get history(): string {
    return this._translations.get('history');
  }
}

export class I18n$Agreements$MobileTitle {

  private _translations: Translations = new Translations('agreements.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `accepted`.
   * Default value: `Agreements`
   */
  get accepted(): string {
    return this._translations.get('accepted');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Agreements history`
   */
  get history(): string {
    return this._translations.get('history');
  }
}

export class I18n$GroupMembership {

  private _translations: Translations = new Translations('groupMembership');

  private _nested = {
    title: new I18n$GroupMembership$Title(),
    mobileTitle: new I18n$GroupMembership$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `current`.
   * Default value: `Current group`
   */
  get current(): string {
    return this._translations.get('current');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `New group`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `confirm`.
   * Default value: `Are you sure to change {user} to group {group}?`
   */
  confirm($: {user: string | number, group: string | number}): string {
    return this._translations.get('confirm', {
      user: $.user,
      group: $.group
    });
  }

  /**
   * Returns the value of translation message for key `confirm.aliasOperator`.
   * Default value: `Are you sure to grant {user} the same permissions as the owner?`
   */
  confirmAliasOperator(user: string | number): string {
    return this._translations.get('confirm.aliasOperator', {
      user: user
    });
  }

  /**
   * Returns the value of translation message for key `done.user`.
   * Default value: `The user group was changed`
   */
  get doneUser(): string {
    return this._translations.get('done.user');
  }

  /**
   * Returns the value of translation message for key `done.operator`.
   * Default value: `The operator group was changed`
   */
  get doneOperator(): string {
    return this._translations.get('done.operator');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$GroupMembership$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$GroupMembership$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$GroupMembership$Title {

  private _translations: Translations = new Translations('groupMembership.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `group.user`.
   * Default value: `User group`
   */
  get groupUser(): string {
    return this._translations.get('group.user');
  }

  /**
   * Returns the value of translation message for key `group.operator`.
   * Default value: `Operator group`
   */
  get groupOperator(): string {
    return this._translations.get('group.operator');
  }

  /**
   * Returns the value of translation message for key `change.user`.
   * Default value: `Change user group`
   */
  get changeUser(): string {
    return this._translations.get('change.user');
  }

  /**
   * Returns the value of translation message for key `change.operator`.
   * Default value: `Change group`
   */
  get changeOperator(): string {
    return this._translations.get('change.operator');
  }

  /**
   * Returns the value of translation message for key `history.user`.
   * Default value: `User group history`
   */
  get historyUser(): string {
    return this._translations.get('history.user');
  }

  /**
   * Returns the value of translation message for key `history.operator`.
   * Default value: `Operator group history`
   */
  get historyOperator(): string {
    return this._translations.get('history.operator');
  }
}

export class I18n$GroupMembership$MobileTitle {

  private _translations: Translations = new Translations('groupMembership.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `group.user`.
   * Default value: `User group`
   */
  get groupUser(): string {
    return this._translations.get('group.user');
  }

  /**
   * Returns the value of translation message for key `group.operator`.
   * Default value: `Operator group`
   */
  get groupOperator(): string {
    return this._translations.get('group.operator');
  }

  /**
   * Returns the value of translation message for key `change.user`.
   * Default value: `Change group`
   */
  get changeUser(): string {
    return this._translations.get('change.user');
  }

  /**
   * Returns the value of translation message for key `change.operator`.
   * Default value: `Change group`
   */
  get changeOperator(): string {
    return this._translations.get('change.operator');
  }

  /**
   * Returns the value of translation message for key `history.user`.
   * Default value: `Group history`
   */
  get historyUser(): string {
    return this._translations.get('history.user');
  }

  /**
   * Returns the value of translation message for key `history.operator`.
   * Default value: `Group history`
   */
  get historyOperator(): string {
    return this._translations.get('history.operator');
  }
}

export class I18n$Brokers {

  private _translations: Translations = new Translations('brokers');

  private _nested = {
    title: new I18n$Brokers$Title(),
    mobileTitle: new I18n$Brokers$MobileTitle(),
    action: new I18n$Brokers$Action()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.action.defaultValues = defaultValues['action'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.action.initialize(values['action']);
  }

  /**
   * Returns the value of translation message for key `mainBroker`.
   * Default value: `Main broker`
   */
  get mainBroker(): string {
    return this._translations.get('mainBroker');
  }

  /**
   * Returns the value of translation message for key `setMain`.
   * Default value: `Set main`
   */
  get setMain(): string {
    return this._translations.get('setMain');
  }

  /**
   * Returns the value of translation message for key `broker`.
   * Default value: `Broker`
   */
  get broker(): string {
    return this._translations.get('broker');
  }

  /**
   * Returns the value of translation message for key `brokerAdded`.
   * Default value: `The broker has been added successfully`
   */
  get brokerAdded(): string {
    return this._translations.get('brokerAdded');
  }

  /**
   * Returns the value of translation message for key `administration`.
   * Default value: `The administration`
   */
  get administration(): string {
    return this._translations.get('administration');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Brokers$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Brokers$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `action`.
   */
  get action(): I18n$Brokers$Action {
    return this._nested.action;
  }
}

export class I18n$Brokers$Title {

  private _translations: Translations = new Translations('brokers.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Brokers`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `Add broker`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Brokers history`
   */
  get history(): string {
    return this._translations.get('history');
  }
}

export class I18n$Brokers$MobileTitle {

  private _translations: Translations = new Translations('brokers.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Brokers`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `Add broker`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Brokers history`
   */
  get history(): string {
    return this._translations.get('history');
  }
}

export class I18n$Brokers$Action {

  private _translations: Translations = new Translations('brokers.action');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `add`.
   * Default value: `Added as broker`
   */
  get add(): string {
    return this._translations.get('add');
  }

  /**
   * Returns the value of translation message for key `remove`.
   * Default value: `Removed a broker`
   */
  get remove(): string {
    return this._translations.get('remove');
  }

  /**
   * Returns the value of translation message for key `setMain`.
   * Default value: `Set as main`
   */
  get setMain(): string {
    return this._translations.get('setMain');
  }
}

export class I18n$Phone {

  private _translations: Translations = new Translations('phone');

  private _nested = {
    error: new I18n$Phone$Error(),
    verify: new I18n$Phone$Verify()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.error.defaultValues = defaultValues['error'];
    this._nested.verify.defaultValues = defaultValues['verify'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.error.initialize(values['error']);
    this._nested.verify.initialize(values['verify']);
  }

  /**
   * Returns the value of translation message for key `mobile`.
   * Default value: `Mobile phone`
   */
  get mobile(): string {
    return this._translations.get('mobile');
  }

  /**
   * Returns the value of translation message for key `landLine`.
   * Default value: `Land-line phone`
   */
  get landLine(): string {
    return this._translations.get('landLine');
  }

  /**
   * Returns the value of translation message for key `name.mobile`.
   * Default value: `Mobile phone name`
   */
  get nameMobile(): string {
    return this._translations.get('name.mobile');
  }

  /**
   * Returns the value of translation message for key `name.landLine`.
   * Default value: `Land-line phone name`
   */
  get nameLandLine(): string {
    return this._translations.get('name.landLine');
  }

  /**
   * Returns the value of translation message for key `number`.
   * Default value: `Number`
   */
  get number(): string {
    return this._translations.get('number');
  }

  /**
   * Returns the value of translation message for key `number.mobile`.
   * Default value: `Mobile phone number`
   */
  get numberMobile(): string {
    return this._translations.get('number.mobile');
  }

  /**
   * Returns the value of translation message for key `number.landLine`.
   * Default value: `Land-line phone number`
   */
  get numberLandLine(): string {
    return this._translations.get('number.landLine');
  }

  /**
   * Returns the value of translation message for key `phoneNumber`.
   * Default value: `Phone number`
   */
  get phoneNumber(): string {
    return this._translations.get('phoneNumber');
  }

  /**
   * Returns the value of translation message for key `extension`.
   * Default value: `Land-line extension`
   */
  get extension(): string {
    return this._translations.get('extension');
  }

  /**
   * Returns the value of translation message for key `extensionValue`.
   * Default value: `ext. {value}`
   */
  extensionValue(value: string | number): string {
    return this._translations.get('extensionValue', {
      value: value
    });
  }

  /**
   * Returns the value of translation message for key `numberExtensionValue`.
   * Default value: `{number} ext. {extension}`
   */
  numberExtensionValue($: {number: string | number, extension: string | number}): string {
    return this._translations.get('numberExtensionValue', {
      number: $.number,
      extension: $.extension
    });
  }

  /**
   * Returns the value of translation message for key `enabledSms`.
   * Default value: `Enabled for SMS`
   */
  get enabledSms(): string {
    return this._translations.get('enabledSms');
  }

  /**
   * Returns the value of translation message for key `verified`.
   * Default value: `Verified`
   */
  get verified(): string {
    return this._translations.get('verified');
  }

  /**
   * Returns the nested accessor for translation messages in `error`.
   */
  get error(): I18n$Phone$Error {
    return this._nested.error;
  }

  /**
   * Returns the nested accessor for translation messages in `verify`.
   */
  get verify(): I18n$Phone$Verify {
    return this._nested.verify;
  }
}

export class I18n$Phone$Error {

  private _translations: Translations = new Translations('phone.error');

  private _nested = {
    verify: new I18n$Phone$Error$Verify()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.verify.defaultValues = defaultValues['verify'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.verify.initialize(values['verify']);
  }

  /**
   * Returns the nested accessor for translation messages in `verify`.
   */
  get verify(): I18n$Phone$Error$Verify {
    return this._nested.verify;
  }
}

export class I18n$Phone$Error$Verify {

  private _translations: Translations = new Translations('phone.error.verify');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `The verification code was not sent or has expired.<br> Please, send the code again to your phone and restart the process.`
   */
  get expired(): string {
    return this._translations.get('expired');
  }

  /**
   * Returns the value of translation message for key `invalid`.
   * Default value: `Invalid verification code`
   */
  get invalid(): string {
    return this._translations.get('invalid');
  }

  /**
   * Returns the value of translation message for key `maxAttempts`.
   * Default value: `You have exceeded the number of allowed attempts.<br>Please, send the code again to your phone and restart the process.`
   */
  get maxAttempts(): string {
    return this._translations.get('maxAttempts');
  }
}

export class I18n$Phone$Verify {

  private _translations: Translations = new Translations('phone.verify');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Verify {number} for SMS`
   */
  title(number: string | number): string {
    return this._translations.get('title', {
      number: number
    });
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Verification`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `code`.
   * Default value: `Code`
   */
  get code(): string {
    return this._translations.get('code');
  }

  /**
   * Returns the value of translation message for key `send`.
   * Default value: `Send`
   */
  get send(): string {
    return this._translations.get('send');
  }

  /**
   * Returns the value of translation message for key `message`.
   * Default value: `Click the button above to send the verification code to your phone`
   */
  get message(): string {
    return this._translations.get('message');
  }

  /**
   * Returns the value of translation message for key `done`.
   * Default value: `The verification code was sent to {number}`
   */
  done(number: string | number): string {
    return this._translations.get('done', {
      number: number
    });
  }
}

export class I18n$Address {

  private _translations: Translations = new Translations('address');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `address`.
   * Default value: `Address`
   */
  get address(): string {
    return this._translations.get('address');
  }

  /**
   * Returns the value of translation message for key `line1`.
   * Default value: `Address line 1`
   */
  get line1(): string {
    return this._translations.get('line1');
  }

  /**
   * Returns the value of translation message for key `line2`.
   * Default value: `Address line 2`
   */
  get line2(): string {
    return this._translations.get('line2');
  }

  /**
   * Returns the value of translation message for key `buildingNumber`.
   * Default value: `Building number`
   */
  get buildingNumber(): string {
    return this._translations.get('buildingNumber');
  }

  /**
   * Returns the value of translation message for key `city`.
   * Default value: `City`
   */
  get city(): string {
    return this._translations.get('city');
  }

  /**
   * Returns the value of translation message for key `complement`.
   * Default value: `Complement`
   */
  get complement(): string {
    return this._translations.get('complement');
  }

  /**
   * Returns the value of translation message for key `country`.
   * Default value: `Country`
   */
  get country(): string {
    return this._translations.get('country');
  }

  /**
   * Returns the value of translation message for key `neighborhood`.
   * Default value: `Neighborhood`
   */
  get neighborhood(): string {
    return this._translations.get('neighborhood');
  }

  /**
   * Returns the value of translation message for key `poBox`.
   * Default value: `Post-office box`
   */
  get poBox(): string {
    return this._translations.get('poBox');
  }

  /**
   * Returns the value of translation message for key `region`.
   * Default value: `Region / state`
   */
  get region(): string {
    return this._translations.get('region');
  }

  /**
   * Returns the value of translation message for key `street`.
   * Default value: `Street`
   */
  get street(): string {
    return this._translations.get('street');
  }

  /**
   * Returns the value of translation message for key `zip`.
   * Default value: `Zip code`
   */
  get zip(): string {
    return this._translations.get('zip');
  }
}

export class I18n$Ad {

  private _translations: Translations = new Translations('ad');

  private _nested = {
    adjustedQuantity: new I18n$Ad$AdjustedQuantity(),
    error: new I18n$Ad$Error(),
    type: new I18n$Ad$Type(),
    orderBy: new I18n$Ad$OrderBy(),
    status: new I18n$Ad$Status(),
    orderStatus: new I18n$Ad$OrderStatus(),
    title: new I18n$Ad$Title(),
    mobileTitle: new I18n$Ad$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.adjustedQuantity.defaultValues = defaultValues['adjustedQuantity'];
    this._nested.error.defaultValues = defaultValues['error'];
    this._nested.type.defaultValues = defaultValues['type'];
    this._nested.orderBy.defaultValues = defaultValues['orderBy'];
    this._nested.status.defaultValues = defaultValues['status'];
    this._nested.orderStatus.defaultValues = defaultValues['orderStatus'];
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.adjustedQuantity.initialize(values['adjustedQuantity']);
    this._nested.error.initialize(values['error']);
    this._nested.type.initialize(values['type']);
    this._nested.orderBy.initialize(values['orderBy']);
    this._nested.status.initialize(values['status']);
    this._nested.orderStatus.initialize(values['orderStatus']);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `accept`.
   * Default value: `Accept`
   */
  get accept(): string {
    return this._translations.get('accept');
  }

  /**
   * Returns the value of translation message for key `acceptOrder`.
   * Default value: `Accept order`
   */
  get acceptOrder(): string {
    return this._translations.get('acceptOrder');
  }

  /**
   * Returns the value of translation message for key `addedProduct`.
   * Default value: `The product was added to cart`
   */
  get addedProduct(): string {
    return this._translations.get('addedProduct');
  }

  /**
   * Returns the value of translation message for key `addedProductOrder`.
   * Default value: `The product was added to the order`
   */
  get addedProductOrder(): string {
    return this._translations.get('addedProductOrder');
  }

  /**
   * Returns the value of translation message for key `addedProductAlreadyInCart`.
   * Default value: `The product was added to cart (this item has been added previously to your cart)`
   */
  get addedProductAlreadyInCart(): string {
    return this._translations.get('addedProductAlreadyInCart');
  }

  /**
   * Returns the value of translation message for key `addToCart`.
   * Default value: `Add to cart`
   */
  get addToCart(): string {
    return this._translations.get('addToCart');
  }

  /**
   * Returns the value of translation message for key `adInterestCreated`.
   * Default value: `The ad interest was created`
   */
  get adInterestCreated(): string {
    return this._translations.get('adInterestCreated');
  }

  /**
   * Returns the value of translation message for key `adInterestSaved`.
   * Default value: `The ad interest was saved`
   */
  get adInterestSaved(): string {
    return this._translations.get('adInterestSaved');
  }

  /**
   * Returns the value of translation message for key `addProducts`.
   * Default value: `Add products`
   */
  get addProducts(): string {
    return this._translations.get('addProducts');
  }

  /**
   * Returns the value of translation message for key `adSaved`.
   * Default value: `The advertisement was saved`
   */
  get adSaved(): string {
    return this._translations.get('adSaved');
  }

  /**
   * Returns the value of translation message for key `adHidden`.
   * Default value: `The advertisement has been hidden`
   */
  get adHidden(): string {
    return this._translations.get('adHidden');
  }

  /**
   * Returns the value of translation message for key `adUnhidden`.
   * Default value: `The advertisement is now visible`
   */
  get adUnhidden(): string {
    return this._translations.get('adUnhidden');
  }

  /**
   * Returns the value of translation message for key `allowDecimalQuantity`.
   * Default value: `Allow decimal quantity`
   */
  get allowDecimalQuantity(): string {
    return this._translations.get('allowDecimalQuantity');
  }

  /**
   * Returns the value of translation message for key `answer`.
   * Default value: `Answer`
   */
  get answer(): string {
    return this._translations.get('answer');
  }

  /**
   * Returns the value of translation message for key `articlesNotice`.
   * Default value: `Please notice, some articles in your shopping cart:<br> {notice}`
   */
  articlesNotice(notice: string | number): string {
    return this._translations.get('articlesNotice', {
      notice: notice
    });
  }

  /**
   * Returns the value of translation message for key `authorize`.
   * Default value: `Authorize`
   */
  get authorize(): string {
    return this._translations.get('authorize');
  }

  /**
   * Returns the value of translation message for key `authorized`.
   * Default value: `The advertisement has been authorized`
   */
  get authorized(): string {
    return this._translations.get('authorized');
  }

  /**
   * Returns the value of translation message for key `askQuestion`.
   * Default value: `Ask a question`
   */
  get askQuestion(): string {
    return this._translations.get('askQuestion');
  }

  /**
   * Returns the value of translation message for key `available`.
   * Default value: `Available`
   */
  get available(): string {
    return this._translations.get('available');
  }

  /**
   * Returns the value of translation message for key `notAvailable`.
   * Default value: `Not available`
   */
  get notAvailable(): string {
    return this._translations.get('notAvailable');
  }

  /**
   * Returns the value of translation message for key `backToDraft`.
   * Default value: `The advertisement is now in draft mode`
   */
  get backToDraft(): string {
    return this._translations.get('backToDraft');
  }

  /**
   * Returns the value of translation message for key `basePrice`.
   * Default value: `Base price`
   */
  get basePrice(): string {
    return this._translations.get('basePrice');
  }

  /**
   * Returns the value of translation message for key `beginDate`.
   * Default value: `Published begin date`
   */
  get beginDate(): string {
    return this._translations.get('beginDate');
  }

  /**
   * Returns the value of translation message for key `cartEmpty`.
   * Default value: `This cart is empty. Search marketplace for products and services to buy`
   */
  get cartEmpty(): string {
    return this._translations.get('cartEmpty');
  }

  /**
   * Returns the value of translation message for key `checkout`.
   * Default value: `Checkout`
   */
  get checkout(): string {
    return this._translations.get('checkout');
  }

  /**
   * Returns the value of translation message for key `changeQuantity`.
   * Default value: `Change quantity`
   */
  get changeQuantity(): string {
    return this._translations.get('changeQuantity');
  }

  /**
   * Returns the value of translation message for key `chargeType`.
   * Default value: `Charge type`
   */
  get chargeType(): string {
    return this._translations.get('chargeType');
  }

  /**
   * Returns the value of translation message for key `chooseSeller`.
   * Default value: `Choose a seller from the list below to continue with the shopping cart process`
   */
  get chooseSeller(): string {
    return this._translations.get('chooseSeller');
  }

  /**
   * Returns the value of translation message for key `chooseDeliveryMethod`.
   * Default value: `Choose delivery method`
   */
  get chooseDeliveryMethod(): string {
    return this._translations.get('chooseDeliveryMethod');
  }

  /**
   * Returns the value of translation message for key `chooseDeliveryAddress`.
   * Default value: `Choose delivery address`
   */
  get chooseDeliveryAddress(): string {
    return this._translations.get('chooseDeliveryAddress');
  }

  /**
   * Returns the value of translation message for key `choosePaymentType`.
   * Default value: `Choose payment type`
   */
  get choosePaymentType(): string {
    return this._translations.get('choosePaymentType');
  }

  /**
   * Returns the value of translation message for key `customAddress`.
   * Default value: `Custom address`
   */
  get customAddress(): string {
    return this._translations.get('customAddress');
  }

  /**
   * Returns the value of translation message for key `customDeliveryMethod`.
   * Default value: `Custom delivery method`
   */
  get customDeliveryMethod(): string {
    return this._translations.get('customDeliveryMethod');
  }

  /**
   * Returns the value of translation message for key `customQuantity`.
   * Default value: `Custom quantity...`
   */
  get customQuantity(): string {
    return this._translations.get('customQuantity');
  }

  /**
   * Returns the value of translation message for key `discount`.
   * Default value: `Discount %`
   */
  get discount(): string {
    return this._translations.get('discount');
  }

  /**
   * Returns the value of translation message for key `endDate`.
   * Default value: `Published end date`
   */
  get endDate(): string {
    return this._translations.get('endDate');
  }

  /**
   * Returns the value of translation message for key `deliveryAddress`.
   * Default value: `Delivery address`
   */
  get deliveryAddress(): string {
    return this._translations.get('deliveryAddress');
  }

  /**
   * Returns the value of translation message for key `deliveryInformation`.
   * Default value: `Delivery information`
   */
  get deliveryInformation(): string {
    return this._translations.get('deliveryInformation');
  }

  /**
   * Returns the value of translation message for key `deliveryPrice`.
   * Default value: `Delivery price`
   */
  get deliveryPrice(): string {
    return this._translations.get('deliveryPrice');
  }

  /**
   * Returns the value of translation message for key `deliveryMethod`.
   * Default value: `Delivery method`
   */
  get deliveryMethod(): string {
    return this._translations.get('deliveryMethod');
  }

  /**
   * Returns the value of translation message for key `deliveryMethods`.
   * Default value: `Delivery methods`
   */
  get deliveryMethods(): string {
    return this._translations.get('deliveryMethods');
  }

  /**
   * Returns the value of translation message for key `deliveryPriceToBeConfirmed`.
   * Default value: `The delivery price is not yet known and the total amount is not the final one. After the seller has set the delivery price, you still can reject or confirm the order.`
   */
  get deliveryPriceToBeConfirmed(): string {
    return this._translations.get('deliveryPriceToBeConfirmed');
  }

  /**
   * Returns the value of translation message for key `deliveryMethodCreated`.
   * Default value: `The delivery method was created`
   */
  get deliveryMethodCreated(): string {
    return this._translations.get('deliveryMethodCreated');
  }

  /**
   * Returns the value of translation message for key `deliveryMethodSaved`.
   * Default value: `The delivery method was saved`
   */
  get deliveryMethodSaved(): string {
    return this._translations.get('deliveryMethodSaved');
  }

  /**
   * Returns the value of translation message for key `fixed`.
   * Default value: `Fixed`
   */
  get fixed(): string {
    return this._translations.get('fixed');
  }

  /**
   * Returns the value of translation message for key `hasImages`.
   * Default value: `With images`
   */
  get hasImages(): string {
    return this._translations.get('hasImages');
  }

  /**
   * Returns the value of translation message for key `item`.
   * Default value: `Item`
   */
  get item(): string {
    return this._translations.get('item');
  }

  /**
   * Returns the value of translation message for key `items`.
   * Default value: `Items`
   */
  get items(): string {
    return this._translations.get('items');
  }

  /**
   * Returns the value of translation message for key `itemsNone`.
   * Default value: `There are currently no products`
   */
  get itemsNone(): string {
    return this._translations.get('itemsNone');
  }

  /**
   * Returns the value of translation message for key `itemNotAvailable`.
   * Default value: `Not available`
   */
  get itemNotAvailable(): string {
    return this._translations.get('itemNotAvailable');
  }

  /**
   * Returns the value of translation message for key `itemsNoLongerAvailable`.
   * Default value: `- are no longer available.<br>`
   */
  get itemsNoLongerAvailable(): string {
    return this._translations.get('itemsNoLongerAvailable');
  }

  /**
   * Returns the value of translation message for key `itemsOutOfStock`.
   * Default value: `- are out of stock.<br>`
   */
  get itemsOutOfStock(): string {
    return this._translations.get('itemsOutOfStock');
  }

  /**
   * Returns the value of translation message for key `lowBalance`.
   * Default value: `- are exceeding your {currency} balance.`
   */
  lowBalance(currency: string | number): string {
    return this._translations.get('lowBalance', {
      currency: currency
    });
  }

  /**
   * Returns the value of translation message for key `minPrice`.
   * Default value: `Min. price`
   */
  get minPrice(): string {
    return this._translations.get('minPrice');
  }

  /**
   * Returns the value of translation message for key `maxPrice`.
   * Default value: `Max. price`
   */
  get maxPrice(): string {
    return this._translations.get('maxPrice');
  }

  /**
   * Returns the value of translation message for key `minDeliveryTime`.
   * Default value: `Min. delivery time`
   */
  get minDeliveryTime(): string {
    return this._translations.get('minDeliveryTime');
  }

  /**
   * Returns the value of translation message for key `maxDeliveryTime`.
   * Default value: `Max. delivery time`
   */
  get maxDeliveryTime(): string {
    return this._translations.get('maxDeliveryTime');
  }

  /**
   * Returns the value of translation message for key `matchFields`.
   * Default value: `Match the following ad fields`
   */
  get matchFields(): string {
    return this._translations.get('matchFields');
  }

  /**
   * Returns the value of translation message for key `name`.
   * Default value: `Title`
   */
  get name(): string {
    return this._translations.get('name');
  }

  /**
   * Returns the value of translation message for key `negotiated`.
   * Default value: `Negotiated`
   */
  get negotiated(): string {
    return this._translations.get('negotiated');
  }

  /**
   * Returns the value of translation message for key `noRemarksGiven`.
   * Default value: `No remarks given`
   */
  get noRemarksGiven(): string {
    return this._translations.get('noRemarksGiven');
  }

  /**
   * Returns the value of translation message for key `noDeliveryMethodsAvailable`.
   * Default value: `No delivery methods for the selected currency`
   */
  get noDeliveryMethodsAvailable(): string {
    return this._translations.get('noDeliveryMethodsAvailable');
  }

  /**
   * Returns the value of translation message for key `owner`.
   * Default value: `Publisher`
   */
  get owner(): string {
    return this._translations.get('owner');
  }

  /**
   * Returns the value of translation message for key `price`.
   * Default value: `Price`
   */
  get price(): string {
    return this._translations.get('price');
  }

  /**
   * Returns the value of translation message for key `questionAsked`.
   * Default value: `The question has been submitted to the seller`
   */
  get questionAsked(): string {
    return this._translations.get('questionAsked');
  }

  /**
   * Returns the value of translation message for key `questionRemoved`.
   * Default value: `The question was removed`
   */
  get questionRemoved(): string {
    return this._translations.get('questionRemoved');
  }

  /**
   * Returns the value of translation message for key `category`.
   * Default value: `Category`
   */
  get category(): string {
    return this._translations.get('category');
  }

  /**
   * Returns the value of translation message for key `categories`.
   * Default value: `Categories`
   */
  get categories(): string {
    return this._translations.get('categories');
  }

  /**
   * Returns the value of translation message for key `creationDate`.
   * Default value: `Creation date`
   */
  get creationDate(): string {
    return this._translations.get('creationDate');
  }

  /**
   * Returns the value of translation message for key `byOwner`.
   * Default value: `By {owner}`
   */
  byOwner(owner: string | number): string {
    return this._translations.get('byOwner', {
      owner: owner
    });
  }

  /**
   * Returns the value of translation message for key `showAllCategories`.
   * Default value: `Show all`
   */
  get showAllCategories(): string {
    return this._translations.get('showAllCategories');
  }

  /**
   * Returns the value of translation message for key `rootCategory`.
   * Default value: `Main`
   */
  get rootCategory(): string {
    return this._translations.get('rootCategory');
  }

  /**
   * Returns the value of translation message for key `orderAccepted`.
   * Default value: `The order was processed`
   */
  get orderAccepted(): string {
    return this._translations.get('orderAccepted');
  }

  /**
   * Returns the value of translation message for key `orderRejected`.
   * Default value: `The order was rejected`
   */
  get orderRejected(): string {
    return this._translations.get('orderRejected');
  }

  /**
   * Returns the value of translation message for key `orderSavedAsDraft`.
   * Default value: `The order was saved as draft`
   */
  get orderSavedAsDraft(): string {
    return this._translations.get('orderSavedAsDraft');
  }

  /**
   * Returns the value of translation message for key `orderSubmittedToBuyer`.
   * Default value: `The order was submitted to buyer`
   */
  get orderSubmittedToBuyer(): string {
    return this._translations.get('orderSubmittedToBuyer');
  }

  /**
   * Returns the value of translation message for key `publicationPeriod`.
   * Default value: `Publication period`
   */
  get publicationPeriod(): string {
    return this._translations.get('publicationPeriod');
  }

  /**
   * Returns the value of translation message for key `productNumberMask`.
   * Default value: `Mask`
   */
  get productNumberMask(): string {
    return this._translations.get('productNumberMask');
  }

  /**
   * Returns the value of translation message for key `promotionalPeriod`.
   * Default value: `Promotional period`
   */
  get promotionalPeriod(): string {
    return this._translations.get('promotionalPeriod');
  }

  /**
   * Returns the value of translation message for key `promotionalPrice`.
   * Default value: `Promotional price`
   */
  get promotionalPrice(): string {
    return this._translations.get('promotionalPrice');
  }

  /**
   * Returns the value of translation message for key `products`.
   * Default value: `Products`
   */
  get products(): string {
    return this._translations.get('products');
  }

  /**
   * Returns the value of translation message for key `product`.
   * Default value: `Product`
   */
  get product(): string {
    return this._translations.get('product');
  }

  /**
   * Returns the value of translation message for key `generated`.
   * Default value: `Generated`
   */
  get generated(): string {
    return this._translations.get('generated');
  }

  /**
   * Returns the value of translation message for key `manual`.
   * Default value: `Manual`
   */
  get manual(): string {
    return this._translations.get('manual');
  }

  /**
   * Returns the value of translation message for key `number`.
   * Default value: `Number`
   */
  get number(): string {
    return this._translations.get('number');
  }

  /**
   * Returns the value of translation message for key `orderNumber`.
   * Default value: `Order number`
   */
  get orderNumber(): string {
    return this._translations.get('orderNumber');
  }

  /**
   * Returns the value of translation message for key `prefix`.
   * Default value: `Prefix`
   */
  get prefix(): string {
    return this._translations.get('prefix');
  }

  /**
   * Returns the value of translation message for key `length`.
   * Default value: `Length`
   */
  get length(): string {
    return this._translations.get('length');
  }

  /**
   * Returns the value of translation message for key `suffix`.
   * Default value: `Suffix`
   */
  get suffix(): string {
    return this._translations.get('suffix');
  }

  /**
   * Returns the value of translation message for key `quantity`.
   * Default value: `Quantity`
   */
  get quantity(): string {
    return this._translations.get('quantity');
  }

  /**
   * Returns the value of translation message for key `question`.
   * Default value: `Question`
   */
  get question(): string {
    return this._translations.get('question');
  }

  /**
   * Returns the value of translation message for key `questionAnswered`.
   * Default value: `The answer was submitted`
   */
  get questionAnswered(): string {
    return this._translations.get('questionAnswered');
  }

  /**
   * Returns the value of translation message for key `reject`.
   * Default value: `Reject`
   */
  get reject(): string {
    return this._translations.get('reject');
  }

  /**
   * Returns the value of translation message for key `rejectOrder`.
   * Default value: `Reject order`
   */
  get rejectOrder(): string {
    return this._translations.get('rejectOrder');
  }

  /**
   * Returns the value of translation message for key `rejected`.
   * Default value: `The advertisement has been rejected`
   */
  get rejected(): string {
    return this._translations.get('rejected');
  }

  /**
   * Returns the value of translation message for key `showAddressOnMap`.
   * Default value: `Show address on map`
   */
  get showAddressOnMap(): string {
    return this._translations.get('showAddressOnMap');
  }

  /**
   * Returns the value of translation message for key `saveAndInsertNew`.
   * Default value: `Save and insert new`
   */
  get saveAndInsertNew(): string {
    return this._translations.get('saveAndInsertNew');
  }

  /**
   * Returns the value of translation message for key `saveDraft`.
   * Default value: `Save draft`
   */
  get saveDraft(): string {
    return this._translations.get('saveDraft');
  }

  /**
   * Returns the value of translation message for key `setAsDraft`.
   * Default value: `Set as draft to edit`
   */
  get setAsDraft(): string {
    return this._translations.get('setAsDraft');
  }

  /**
   * Returns the value of translation message for key `setPromotionalPeriod`.
   * Default value: `Set promotional period`
   */
  get setPromotionalPeriod(): string {
    return this._translations.get('setPromotionalPeriod');
  }

  /**
   * Returns the value of translation message for key `submitForAuthorization`.
   * Default value: `Submit for authorization`
   */
  get submitForAuthorization(): string {
    return this._translations.get('submitForAuthorization');
  }

  /**
   * Returns the value of translation message for key `submitToBuyer`.
   * Default value: `Submit to buyer`
   */
  get submitToBuyer(): string {
    return this._translations.get('submitToBuyer');
  }

  /**
   * Returns the value of translation message for key `submitToBuyerConfirmation`.
   * Default value: `Are you sure to submit this order to the buyer? After this step, no further changes will be allowed in this order, and it will be awaiting for buyer's approval.`
   */
  get submitToBuyerConfirmation(): string {
    return this._translations.get('submitToBuyerConfirmation');
  }

  /**
   * Returns the value of translation message for key `subtotal`.
   * Default value: `Subtotal`
   */
  get subtotal(): string {
    return this._translations.get('subtotal');
  }

  /**
   * Returns the value of translation message for key `stockType`.
   * Default value: `Stock type`
   */
  get stockType(): string {
    return this._translations.get('stockType');
  }

  /**
   * Returns the value of translation message for key `pendingForAuth`.
   * Default value: `The advertisement has been submitted for further authorization`
   */
  get pendingForAuth(): string {
    return this._translations.get('pendingForAuth');
  }

  /**
   * Returns the value of translation message for key `hide`.
   * Default value: `Hide`
   */
  get hide(): string {
    return this._translations.get('hide');
  }

  /**
   * Returns the value of translation message for key `unhide`.
   * Default value: `Unhide`
   */
  get unhide(): string {
    return this._translations.get('unhide');
  }

  /**
   * Returns the value of translation message for key `setDeliveryMethod`.
   * Default value: `Set delivery method`
   */
  get setDeliveryMethod(): string {
    return this._translations.get('setDeliveryMethod');
  }

  /**
   * Returns the value of translation message for key `lowStockNotification`.
   * Default value: `Low stock notification`
   */
  get lowStockNotification(): string {
    return this._translations.get('lowStockNotification');
  }

  /**
   * Returns the value of translation message for key `stockQuantity`.
   * Default value: `In stock quantity`
   */
  get stockQuantity(): string {
    return this._translations.get('stockQuantity');
  }

  /**
   * Returns the value of translation message for key `unlimitedStock`.
   * Default value: `Unlimited stock`
   */
  get unlimitedStock(): string {
    return this._translations.get('unlimitedStock');
  }

  /**
   * Returns the value of translation message for key `unlimited`.
   * Default value: `Unlimited`
   */
  get unlimited(): string {
    return this._translations.get('unlimited');
  }

  /**
   * Returns the value of translation message for key `unitPrice`.
   * Default value: `Unit price`
   */
  get unitPrice(): string {
    return this._translations.get('unitPrice');
  }

  /**
   * Returns the value of translation message for key `minAllowedInCart`.
   * Default value: `Minimum allowed in cart`
   */
  get minAllowedInCart(): string {
    return this._translations.get('minAllowedInCart');
  }

  /**
   * Returns the value of translation message for key `maxAllowedInCart`.
   * Default value: `Maximum allowed in cart`
   */
  get maxAllowedInCart(): string {
    return this._translations.get('maxAllowedInCart');
  }

  /**
   * Returns the value of translation message for key `productNumber`.
   * Default value: `Product number`
   */
  get productNumber(): string {
    return this._translations.get('productNumber');
  }

  /**
   * Returns the value of translation message for key `outOfStock`.
   * Default value: `Out of stock`
   */
  get outOfStock(): string {
    return this._translations.get('outOfStock');
  }

  /**
   * Returns the value of translation message for key `authorizationNotes`.
   * Default value: `Authorization notes`
   */
  get authorizationNotes(): string {
    return this._translations.get('authorizationNotes');
  }

  /**
   * Returns the value of translation message for key `questionsAndAnswers`.
   * Default value: `Questions & Answers`
   */
  get questionsAndAnswers(): string {
    return this._translations.get('questionsAndAnswers');
  }

  /**
   * Returns the value of translation message for key `removeQuestion`.
   * Default value: `Remove question`
   */
  get removeQuestion(): string {
    return this._translations.get('removeQuestion');
  }

  /**
   * Returns the value of translation message for key `reserveAmount`.
   * Default value: `This amount will be reserved when the order is confirmed, and will be debited from your account once the order is accepted by the seller.`
   */
  get reserveAmount(): string {
    return this._translations.get('reserveAmount');
  }

  /**
   * Returns the value of translation message for key `order`.
   * Default value: `Order`
   */
  get order(): string {
    return this._translations.get('order');
  }

  /**
   * Returns the value of translation message for key `orderWaitingForSellersApproval`.
   * Default value: `The order has been created and is waiting for sellers approval`
   */
  get orderWaitingForSellersApproval(): string {
    return this._translations.get('orderWaitingForSellersApproval');
  }

  /**
   * Returns the value of translation message for key `total`.
   * Default value: `Total price`
   */
  get total(): string {
    return this._translations.get('total');
  }

  /**
   * Returns the value of translation message for key `toBeConfirmedBySeller`.
   * Default value: `To be confirmed by seller`
   */
  get toBeConfirmedBySeller(): string {
    return this._translations.get('toBeConfirmedBySeller');
  }

  /**
   * Returns the value of translation message for key `webshopSettingsSaved`.
   * Default value: `The web shop settings were saved`
   */
  get webshopSettingsSaved(): string {
    return this._translations.get('webshopSettingsSaved');
  }

  /**
   * Returns the value of translation message for key `requiringMyConfirmation`.
   * Default value: `Requiring my confirmation`
   */
  get requiringMyConfirmation(): string {
    return this._translations.get('requiringMyConfirmation');
  }

  /**
   * Returns the value of translation message for key `buyer`.
   * Default value: `Buyer`
   */
  get buyer(): string {
    return this._translations.get('buyer');
  }

  /**
   * Returns the value of translation message for key `seller`.
   * Default value: `Seller`
   */
  get seller(): string {
    return this._translations.get('seller');
  }

  /**
   * Returns the value of translation message for key `stock`.
   * Default value: `Stock`
   */
  get stock(): string {
    return this._translations.get('stock');
  }

  /**
   * Returns the value of translation message for key `waitingForBuyersApproval`.
   * Default value: `Waiting for buyers approval`
   */
  get waitingForBuyersApproval(): string {
    return this._translations.get('waitingForBuyersApproval');
  }

  /**
   * Returns the value of translation message for key `waitingForSellersApproval`.
   * Default value: `Waiting for sellers approval`
   */
  get waitingForSellersApproval(): string {
    return this._translations.get('waitingForSellersApproval');
  }

  /**
   * Returns the value of translation message for key `remarks`.
   * Default value: `Remarks`
   */
  get remarks(): string {
    return this._translations.get('remarks');
  }

  /**
   * Returns the nested accessor for translation messages in `adjustedQuantity`.
   */
  get adjustedQuantity(): I18n$Ad$AdjustedQuantity {
    return this._nested.adjustedQuantity;
  }

  /**
   * Returns the nested accessor for translation messages in `error`.
   */
  get error(): I18n$Ad$Error {
    return this._nested.error;
  }

  /**
   * Returns the nested accessor for translation messages in `type`.
   */
  get type(): I18n$Ad$Type {
    return this._nested.type;
  }

  /**
   * Returns the nested accessor for translation messages in `orderBy`.
   */
  get orderBy(): I18n$Ad$OrderBy {
    return this._nested.orderBy;
  }

  /**
   * Returns the nested accessor for translation messages in `status`.
   */
  get status(): I18n$Ad$Status {
    return this._nested.status;
  }

  /**
   * Returns the nested accessor for translation messages in `orderStatus`.
   */
  get orderStatus(): I18n$Ad$OrderStatus {
    return this._nested.orderStatus;
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Ad$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Ad$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$Ad$AdjustedQuantity {

  private _translations: Translations = new Translations('ad.adjustedQuantity');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `max`.
   * Default value: `- the quantity demanded cannot be delivered, because there is a maximum of items you are allowed to have in your shopping cart. The quantity of this article is automatically reduced.<br>`
   */
  get max(): string {
    return this._translations.get('max');
  }

  /**
   * Returns the value of translation message for key `min`.
   * Default value: `- the quantity demanded cannot be delivered, because there is a minimum of items you are allowed to have in your shopping cart. The quantity of this article is automatically increased.<br>`
   */
  get min(): string {
    return this._translations.get('min');
  }

  /**
   * Returns the value of translation message for key `stock`.
   * Default value: `- the quantity demanded cannot be delivered, because the article is almost out of stock. The quantity of this article is automatically reduced.<br>`
   */
  get stock(): string {
    return this._translations.get('stock');
  }
}

export class I18n$Ad$Error {

  private _translations: Translations = new Translations('ad.error');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `cannotBuyFromSeller`.
   * Default value: `At the moment, you are not allowed to buy products from this user. Please contact your administrator.`
   */
  get cannotBuyFromSeller(): string {
    return this._translations.get('cannotBuyFromSeller');
  }

  /**
   * Returns the value of translation message for key `cannotProceedToCheckout`.
   * Default value: `You can not proceed with checkout because some items are unavailable or you do not have enough balance`
   */
  get cannotProceedToCheckout(): string {
    return this._translations.get('cannotProceedToCheckout');
  }

  /**
   * Returns the value of translation message for key `notEnoughStock`.
   * Default value: `The quantity demanded cannot be delivered, because the article is almost out of stock.`
   */
  get notEnoughStock(): string {
    return this._translations.get('notEnoughStock');
  }
}

export class I18n$Ad$Type {

  private _translations: Translations = new Translations('ad.type');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `simple`.
   * Default value: `Advertisement`
   */
  get simple(): string {
    return this._translations.get('simple');
  }

  /**
   * Returns the value of translation message for key `webshop`.
   * Default value: `Web shop`
   */
  get webshop(): string {
    return this._translations.get('webshop');
  }
}

export class I18n$Ad$OrderBy {

  private _translations: Translations = new Translations('ad.orderBy');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `date`.
   * Default value: `Last published`
   */
  get date(): string {
    return this._translations.get('date');
  }

  /**
   * Returns the value of translation message for key `distance`.
   * Default value: `Distance`
   */
  get distance(): string {
    return this._translations.get('distance');
  }

  /**
   * Returns the value of translation message for key `priceAsc`.
   * Default value: `Lowest price`
   */
  get priceAsc(): string {
    return this._translations.get('priceAsc');
  }

  /**
   * Returns the value of translation message for key `priceDesc`.
   * Default value: `Highest price`
   */
  get priceDesc(): string {
    return this._translations.get('priceDesc');
  }

  /**
   * Returns the value of translation message for key `relevance`.
   * Default value: `Relevance`
   */
  get relevance(): string {
    return this._translations.get('relevance');
  }
}

export class I18n$Ad$Status {

  private _translations: Translations = new Translations('ad.status');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `active`.
   * Default value: `Published`
   */
  get active(): string {
    return this._translations.get('active');
  }

  /**
   * Returns the value of translation message for key `disabled`.
   * Default value: `Disabled`
   */
  get disabled(): string {
    return this._translations.get('disabled');
  }

  /**
   * Returns the value of translation message for key `draft`.
   * Default value: `Draft`
   */
  get draft(): string {
    return this._translations.get('draft');
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `Expired`
   */
  get expired(): string {
    return this._translations.get('expired');
  }

  /**
   * Returns the value of translation message for key `hidden`.
   * Default value: `Hidden`
   */
  get hidden(): string {
    return this._translations.get('hidden');
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Pending`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `scheduled`.
   * Default value: `Scheduled`
   */
  get scheduled(): string {
    return this._translations.get('scheduled');
  }
}

export class I18n$Ad$OrderStatus {

  private _translations: Translations = new Translations('ad.orderStatus');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `draft`.
   * Default value: `Draft`
   */
  get draft(): string {
    return this._translations.get('draft');
  }

  /**
   * Returns the value of translation message for key `completed`.
   * Default value: `Completed`
   */
  get completed(): string {
    return this._translations.get('completed');
  }

  /**
   * Returns the value of translation message for key `rejectedByBuyer`.
   * Default value: `Rejected by buyer`
   */
  get rejectedByBuyer(): string {
    return this._translations.get('rejectedByBuyer');
  }

  /**
   * Returns the value of translation message for key `rejectedBySeller`.
   * Default value: `Rejected by seller`
   */
  get rejectedBySeller(): string {
    return this._translations.get('rejectedBySeller');
  }

  /**
   * Returns the value of translation message for key `paymentPending`.
   * Default value: `Payment pending`
   */
  get paymentPending(): string {
    return this._translations.get('paymentPending');
  }

  /**
   * Returns the value of translation message for key `paymentDenied`.
   * Default value: `Payment denied`
   */
  get paymentDenied(): string {
    return this._translations.get('paymentDenied');
  }

  /**
   * Returns the value of translation message for key `paymentCanceled`.
   * Default value: `Payment canceled`
   */
  get paymentCanceled(): string {
    return this._translations.get('paymentCanceled');
  }

  /**
   * Returns the value of translation message for key `paymentExpired`.
   * Default value: `Payment expired`
   */
  get paymentExpired(): string {
    return this._translations.get('paymentExpired');
  }

  /**
   * Returns the value of translation message for key `pendingBuyer`.
   * Default value: `Pending by buyer`
   */
  get pendingBuyer(): string {
    return this._translations.get('pendingBuyer');
  }

  /**
   * Returns the value of translation message for key `pendingSeller`.
   * Default value: `Pending by seller`
   */
  get pendingSeller(): string {
    return this._translations.get('pendingSeller');
  }

  /**
   * Returns the value of translation message for key `disposed`.
   * Default value: `Disposed`
   */
  get disposed(): string {
    return this._translations.get('disposed');
  }
}

export class I18n$Ad$Title {

  private _translations: Translations = new Translations('ad.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Search advertisements`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `myAdvertisements`.
   * Default value: `My advertisements`
   */
  get myAdvertisements(): string {
    return this._translations.get('myAdvertisements');
  }

  /**
   * Returns the value of translation message for key `myWebshop`.
   * Default value: `My web shop`
   */
  get myWebshop(): string {
    return this._translations.get('myWebshop');
  }

  /**
   * Returns the value of translation message for key `viewAdvertisements`.
   * Default value: `View advertisements`
   */
  get viewAdvertisements(): string {
    return this._translations.get('viewAdvertisements');
  }

  /**
   * Returns the value of translation message for key `viewWebshop`.
   * Default value: `View web shop`
   */
  get viewWebshop(): string {
    return this._translations.get('viewWebshop');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `New advertisement`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit advertisement`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `purchases`.
   * Default value: `Purchases`
   */
  get purchases(): string {
    return this._translations.get('purchases');
  }

  /**
   * Returns the value of translation message for key `sales`.
   * Default value: `Sales`
   */
  get sales(): string {
    return this._translations.get('sales');
  }

  /**
   * Returns the value of translation message for key `order`.
   * Default value: `Order details`
   */
  get order(): string {
    return this._translations.get('order');
  }

  /**
   * Returns the value of translation message for key `newOrder`.
   * Default value: `Create web shop order`
   */
  get newOrder(): string {
    return this._translations.get('newOrder');
  }

  /**
   * Returns the value of translation message for key `shoppingCart`.
   * Default value: `Shopping cart`
   */
  get shoppingCart(): string {
    return this._translations.get('shoppingCart');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Order history`
   */
  get history(): string {
    return this._translations.get('history');
  }

  /**
   * Returns the value of translation message for key `deliveryAddress`.
   * Default value: `Delivery address`
   */
  get deliveryAddress(): string {
    return this._translations.get('deliveryAddress');
  }

  /**
   * Returns the value of translation message for key `deliveryMethod`.
   * Default value: `Delivery method`
   */
  get deliveryMethod(): string {
    return this._translations.get('deliveryMethod');
  }

  /**
   * Returns the value of translation message for key `deliveryMethodNew`.
   * Default value: `New delivery method`
   */
  get deliveryMethodNew(): string {
    return this._translations.get('deliveryMethodNew');
  }

  /**
   * Returns the value of translation message for key `deliveryMethods`.
   * Default value: `Delivery methods`
   */
  get deliveryMethods(): string {
    return this._translations.get('deliveryMethods');
  }

  /**
   * Returns the value of translation message for key `paymentType`.
   * Default value: `Payment type`
   */
  get paymentType(): string {
    return this._translations.get('paymentType');
  }

  /**
   * Returns the value of translation message for key `confirmOrder`.
   * Default value: `Confirm order`
   */
  get confirmOrder(): string {
    return this._translations.get('confirmOrder');
  }

  /**
   * Returns the value of translation message for key `webshopSettings`.
   * Default value: `Web shop settings`
   */
  get webshopSettings(): string {
    return this._translations.get('webshopSettings');
  }

  /**
   * Returns the value of translation message for key `unansweredQuestions`.
   * Default value: `Unanswered questions`
   */
  get unansweredQuestions(): string {
    return this._translations.get('unansweredQuestions');
  }

  /**
   * Returns the value of translation message for key `answerQuestion`.
   * Default value: `Answer question`
   */
  get answerQuestion(): string {
    return this._translations.get('answerQuestion');
  }

  /**
   * Returns the value of translation message for key `adInterests`.
   * Default value: `Advertisement interests`
   */
  get adInterests(): string {
    return this._translations.get('adInterests');
  }

  /**
   * Returns the value of translation message for key `adInterestNew`.
   * Default value: `New advertisement interest`
   */
  get adInterestNew(): string {
    return this._translations.get('adInterestNew');
  }

  /**
   * Returns the value of translation message for key `adInterest`.
   * Default value: `Advertisement interest`
   */
  get adInterest(): string {
    return this._translations.get('adInterest');
  }
}

export class I18n$Ad$MobileTitle {

  private _translations: Translations = new Translations('ad.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Advertisements`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `myAdvertisements`.
   * Default value: `My advertisements`
   */
  get myAdvertisements(): string {
    return this._translations.get('myAdvertisements');
  }

  /**
   * Returns the value of translation message for key `myWebshop`.
   * Default value: `My web shop`
   */
  get myWebshop(): string {
    return this._translations.get('myWebshop');
  }

  /**
   * Returns the value of translation message for key `viewAdvertisements`.
   * Default value: `View advertisements`
   */
  get viewAdvertisements(): string {
    return this._translations.get('viewAdvertisements');
  }

  /**
   * Returns the value of translation message for key `viewWebshop`.
   * Default value: `View web shop`
   */
  get viewWebshop(): string {
    return this._translations.get('viewWebshop');
  }

  /**
   * Returns the value of translation message for key `details`.
   * Default value: `Advertisement`
   */
  get details(): string {
    return this._translations.get('details');
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `New advertisement`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit advertisement`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `purchases`.
   * Default value: `Purchases`
   */
  get purchases(): string {
    return this._translations.get('purchases');
  }

  /**
   * Returns the value of translation message for key `sales`.
   * Default value: `Sales`
   */
  get sales(): string {
    return this._translations.get('sales');
  }

  /**
   * Returns the value of translation message for key `order`.
   * Default value: `Order details`
   */
  get order(): string {
    return this._translations.get('order');
  }

  /**
   * Returns the value of translation message for key `newOrder`.
   * Default value: `Create web shop order`
   */
  get newOrder(): string {
    return this._translations.get('newOrder');
  }

  /**
   * Returns the value of translation message for key `shoppingCart`.
   * Default value: `Shopping cart`
   */
  get shoppingCart(): string {
    return this._translations.get('shoppingCart');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Order history`
   */
  get history(): string {
    return this._translations.get('history');
  }

  /**
   * Returns the value of translation message for key `deliveryAddress`.
   * Default value: `Delivery address`
   */
  get deliveryAddress(): string {
    return this._translations.get('deliveryAddress');
  }

  /**
   * Returns the value of translation message for key `deliveryMethod`.
   * Default value: `Delivery method`
   */
  get deliveryMethod(): string {
    return this._translations.get('deliveryMethod');
  }

  /**
   * Returns the value of translation message for key `deliveryMethodNew`.
   * Default value: `New delivery method`
   */
  get deliveryMethodNew(): string {
    return this._translations.get('deliveryMethodNew');
  }

  /**
   * Returns the value of translation message for key `deliveryMethods`.
   * Default value: `Delivery methods`
   */
  get deliveryMethods(): string {
    return this._translations.get('deliveryMethods');
  }

  /**
   * Returns the value of translation message for key `paymentType`.
   * Default value: `Payment type`
   */
  get paymentType(): string {
    return this._translations.get('paymentType');
  }

  /**
   * Returns the value of translation message for key `confirmOrder`.
   * Default value: `Confirm order`
   */
  get confirmOrder(): string {
    return this._translations.get('confirmOrder');
  }

  /**
   * Returns the value of translation message for key `webshopSettings`.
   * Default value: `Web shop settings`
   */
  get webshopSettings(): string {
    return this._translations.get('webshopSettings');
  }

  /**
   * Returns the value of translation message for key `unansweredQuestions`.
   * Default value: `Unanswered questions`
   */
  get unansweredQuestions(): string {
    return this._translations.get('unansweredQuestions');
  }

  /**
   * Returns the value of translation message for key `answerQuestion`.
   * Default value: `Answer question`
   */
  get answerQuestion(): string {
    return this._translations.get('answerQuestion');
  }

  /**
   * Returns the value of translation message for key `adInterests`.
   * Default value: `Advertisement interests`
   */
  get adInterests(): string {
    return this._translations.get('adInterests');
  }

  /**
   * Returns the value of translation message for key `adInterestNew`.
   * Default value: `New advertisement interest`
   */
  get adInterestNew(): string {
    return this._translations.get('adInterestNew');
  }

  /**
   * Returns the value of translation message for key `adInterest`.
   * Default value: `Advertisement interest`
   */
  get adInterest(): string {
    return this._translations.get('adInterest');
  }
}

export class I18n$Notification {

  private _translations: Translations = new Translations('notification');

  private _nested = {
    actions: new I18n$Notification$Actions(),
    admin: new I18n$Notification$Admin(),
    user: new I18n$Notification$User()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.actions.defaultValues = defaultValues['actions'];
    this._nested.admin.defaultValues = defaultValues['admin'];
    this._nested.user.defaultValues = defaultValues['user'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.actions.initialize(values['actions']);
    this._nested.admin.initialize(values['admin']);
    this._nested.user.initialize(values['user']);
  }

  /**
   * Returns the value of translation message for key `message`.
   * Default value: `Message`
   */
  get message(): string {
    return this._translations.get('message');
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Notifications`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Notifications`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `onlyUnread`.
   * Default value: `Unread only`
   */
  get onlyUnread(): string {
    return this._translations.get('onlyUnread');
  }

  /**
   * Returns the nested accessor for translation messages in `actions`.
   */
  get actions(): I18n$Notification$Actions {
    return this._nested.actions;
  }

  /**
   * Returns the nested accessor for translation messages in `admin`.
   */
  get admin(): I18n$Notification$Admin {
    return this._nested.admin;
  }

  /**
   * Returns the nested accessor for translation messages in `user`.
   */
  get user(): I18n$Notification$User {
    return this._nested.user;
  }
}

export class I18n$Notification$Actions {

  private _translations: Translations = new Translations('notification.actions');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `remove`.
   * Default value: `Remove this notification`
   */
  get remove(): string {
    return this._translations.get('remove');
  }

  /**
   * Returns the value of translation message for key `removeAll`.
   * Default value: `Remove all`
   */
  get removeAll(): string {
    return this._translations.get('removeAll');
  }

  /**
   * Returns the value of translation message for key `markAllRead`.
   * Default value: `Mark all as read`
   */
  get markAllRead(): string {
    return this._translations.get('markAllRead');
  }
}

export class I18n$Notification$Admin {

  private _translations: Translations = new Translations('notification.admin');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `adPendingAuthorization`.
   * Default value: `Ad pending for authorization`
   */
  get adPendingAuthorization(): string {
    return this._translations.get('adPendingAuthorization');
  }

  /**
   * Returns the value of translation message for key `applicationErrors`.
   * Default value: `Application errors`
   */
  get applicationErrors(): string {
    return this._translations.get('applicationErrors');
  }

  /**
   * Returns the value of translation message for key `externalPaymentExpired`.
   * Default value: `External payment expired`
   */
  get externalPaymentExpired(): string {
    return this._translations.get('externalPaymentExpired');
  }

  /**
   * Returns the value of translation message for key `externalPaymentPerformedFailed`.
   * Default value: `External payment could not be delivered`
   */
  get externalPaymentPerformedFailed(): string {
    return this._translations.get('externalPaymentPerformedFailed');
  }

  /**
   * Returns the value of translation message for key `generatedVouchersAboutToExpire`.
   * Default value: `Generated vouchers about to expire`
   */
  get generatedVouchersAboutToExpire(): string {
    return this._translations.get('generatedVouchersAboutToExpire');
  }

  /**
   * Returns the value of translation message for key `generatedVouchersExpired`.
   * Default value: `Generated vouchers expiration`
   */
  get generatedVouchersExpired(): string {
    return this._translations.get('generatedVouchersExpired');
  }

  /**
   * Returns the value of translation message for key `networkCreated`.
   * Default value: `Network created`
   */
  get networkCreated(): string {
    return this._translations.get('networkCreated');
  }

  /**
   * Returns the value of translation message for key `paymentAwaitingAuthorization`.
   * Default value: `Payments pending by authorization`
   */
  get paymentAwaitingAuthorization(): string {
    return this._translations.get('paymentAwaitingAuthorization');
  }

  /**
   * Returns the value of translation message for key `paymentPerformed`.
   * Default value: `Payments`
   */
  get paymentPerformed(): string {
    return this._translations.get('paymentPerformed');
  }

  /**
   * Returns the value of translation message for key `systemAlert`.
   * Default value: `System alerts`
   */
  get systemAlert(): string {
    return this._translations.get('systemAlert');
  }

  /**
   * Returns the value of translation message for key `userAlert`.
   * Default value: `User alerts`
   */
  get userAlert(): string {
    return this._translations.get('userAlert');
  }

  /**
   * Returns the value of translation message for key `userRegistration`.
   * Default value: `New registered users`
   */
  get userRegistration(): string {
    return this._translations.get('userRegistration');
  }

  /**
   * Returns the value of translation message for key `voucherBuyingAboutToExpire`.
   * Default value: `Voucher buying about to expire`
   */
  get voucherBuyingAboutToExpire(): string {
    return this._translations.get('voucherBuyingAboutToExpire');
  }
}

export class I18n$Notification$User {

  private _translations: Translations = new Translations('notification.user');

  private _nested = {
    account: new I18n$Notification$User$Account(),
    brokering: new I18n$Notification$User$Brokering(),
    buyer: new I18n$Notification$User$Buyer(),
    feedback: new I18n$Notification$User$Feedback(),
    personal: new I18n$Notification$User$Personal(),
    reference: new I18n$Notification$User$Reference(),
    seller: new I18n$Notification$User$Seller()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.account.defaultValues = defaultValues['account'];
    this._nested.brokering.defaultValues = defaultValues['brokering'];
    this._nested.buyer.defaultValues = defaultValues['buyer'];
    this._nested.feedback.defaultValues = defaultValues['feedback'];
    this._nested.personal.defaultValues = defaultValues['personal'];
    this._nested.reference.defaultValues = defaultValues['reference'];
    this._nested.seller.defaultValues = defaultValues['seller'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.account.initialize(values['account']);
    this._nested.brokering.initialize(values['brokering']);
    this._nested.buyer.initialize(values['buyer']);
    this._nested.feedback.initialize(values['feedback']);
    this._nested.personal.initialize(values['personal']);
    this._nested.reference.initialize(values['reference']);
    this._nested.seller.initialize(values['seller']);
  }

  /**
   * Returns the nested accessor for translation messages in `account`.
   */
  get account(): I18n$Notification$User$Account {
    return this._nested.account;
  }

  /**
   * Returns the nested accessor for translation messages in `brokering`.
   */
  get brokering(): I18n$Notification$User$Brokering {
    return this._nested.brokering;
  }

  /**
   * Returns the nested accessor for translation messages in `buyer`.
   */
  get buyer(): I18n$Notification$User$Buyer {
    return this._nested.buyer;
  }

  /**
   * Returns the nested accessor for translation messages in `feedback`.
   */
  get feedback(): I18n$Notification$User$Feedback {
    return this._nested.feedback;
  }

  /**
   * Returns the nested accessor for translation messages in `personal`.
   */
  get personal(): I18n$Notification$User$Personal {
    return this._nested.personal;
  }

  /**
   * Returns the nested accessor for translation messages in `reference`.
   */
  get reference(): I18n$Notification$User$Reference {
    return this._nested.reference;
  }

  /**
   * Returns the nested accessor for translation messages in `seller`.
   */
  get seller(): I18n$Notification$User$Seller {
    return this._nested.seller;
  }
}

export class I18n$Notification$User$Account {

  private _translations: Translations = new Translations('notification.user.account');

  private _nested = {
    operator: new I18n$Notification$User$Account$Operator()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.operator.defaultValues = defaultValues['operator'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.operator.initialize(values['operator']);
  }

  /**
   * Returns the value of translation message for key `allNonSmsPerformedPayments`.
   * Default value: `Payment performed`
   */
  get allNonSmsPerformedPayments(): string {
    return this._translations.get('allNonSmsPerformedPayments');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentCanceled`.
   * Default value: `Authorized payment canceled`
   */
  get authorizedPaymentCanceled(): string {
    return this._translations.get('authorizedPaymentCanceled');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentDenied`.
   * Default value: `Authorized payment denied`
   */
  get authorizedPaymentDenied(): string {
    return this._translations.get('authorizedPaymentDenied');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentExpired`.
   * Default value: `Authorized payment expired`
   */
  get authorizedPaymentExpired(): string {
    return this._translations.get('authorizedPaymentExpired');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentSucceeded`.
   * Default value: `Authorized payment successful`
   */
  get authorizedPaymentSucceeded(): string {
    return this._translations.get('authorizedPaymentSucceeded');
  }

  /**
   * Returns the value of translation message for key `boughtVouchersAboutToExpire`.
   * Default value: `Bought vouchers will expire in a few days`
   */
  get boughtVouchersAboutToExpire(): string {
    return this._translations.get('boughtVouchersAboutToExpire');
  }

  /**
   * Returns the value of translation message for key `boughtVouchersExpirationDateChanged`.
   * Default value: `Bought voucher expiration date was changed`
   */
  get boughtVouchersExpirationDateChanged(): string {
    return this._translations.get('boughtVouchersExpirationDateChanged');
  }

  /**
   * Returns the value of translation message for key `boughtVouchersExpired`.
   * Default value: `Bought voucher have expired`
   */
  get boughtVouchersExpired(): string {
    return this._translations.get('boughtVouchersExpired');
  }

  /**
   * Returns the value of translation message for key `externalPaymentExpired`.
   * Default value: `External payment expired`
   */
  get externalPaymentExpired(): string {
    return this._translations.get('externalPaymentExpired');
  }

  /**
   * Returns the value of translation message for key `externalPaymentPerformedFailed`.
   * Default value: `External payment could not be delivered`
   */
  get externalPaymentPerformedFailed(): string {
    return this._translations.get('externalPaymentPerformedFailed');
  }

  /**
   * Returns the value of translation message for key `externalPaymentReceivedFailed`.
   * Default value: `External payment could not be received`
   */
  get externalPaymentReceivedFailed(): string {
    return this._translations.get('externalPaymentReceivedFailed');
  }

  /**
   * Returns the value of translation message for key `incomingRecurringPaymentCanceled`.
   * Default value: `Incoming recurring payment was canceled`
   */
  get incomingRecurringPaymentCanceled(): string {
    return this._translations.get('incomingRecurringPaymentCanceled');
  }

  /**
   * Returns the value of translation message for key `incomingRecurringPaymentFailed`.
   * Default value: `Incoming recurring payment has failed`
   */
  get incomingRecurringPaymentFailed(): string {
    return this._translations.get('incomingRecurringPaymentFailed');
  }

  /**
   * Returns the value of translation message for key `incomingRecurringPaymentReceived`.
   * Default value: `Incoming recurring payment was received`
   */
  get incomingRecurringPaymentReceived(): string {
    return this._translations.get('incomingRecurringPaymentReceived');
  }

  /**
   * Returns the value of translation message for key `incomingScheduledPaymentCanceled`.
   * Default value: `Incoming scheduled payment canceled`
   */
  get incomingScheduledPaymentCanceled(): string {
    return this._translations.get('incomingScheduledPaymentCanceled');
  }

  /**
   * Returns the value of translation message for key `incomingScheduledPaymentFailed`.
   * Default value: `Incoming scheduled payment failed`
   */
  get incomingScheduledPaymentFailed(): string {
    return this._translations.get('incomingScheduledPaymentFailed');
  }

  /**
   * Returns the value of translation message for key `incomingScheduledPaymentReceived`.
   * Default value: `Scheduled payment received`
   */
  get incomingScheduledPaymentReceived(): string {
    return this._translations.get('incomingScheduledPaymentReceived');
  }

  /**
   * Returns the value of translation message for key `limitChange`.
   * Default value: `Account limit changed`
   */
  get limitChange(): string {
    return this._translations.get('limitChange');
  }

  /**
   * Returns the value of translation message for key `paymentAwaitingAuthorization`.
   * Default value: `Payment awaiting authorization`
   */
  get paymentAwaitingAuthorization(): string {
    return this._translations.get('paymentAwaitingAuthorization');
  }

  /**
   * Returns the value of translation message for key `paymentReceived`.
   * Default value: `Payment received`
   */
  get paymentReceived(): string {
    return this._translations.get('paymentReceived');
  }

  /**
   * Returns the value of translation message for key `paymentRequestCanceled`.
   * Default value: `Payment request canceled`
   */
  get paymentRequestCanceled(): string {
    return this._translations.get('paymentRequestCanceled');
  }

  /**
   * Returns the value of translation message for key `paymentRequestDenied`.
   * Default value: `Payment request denied`
   */
  get paymentRequestDenied(): string {
    return this._translations.get('paymentRequestDenied');
  }

  /**
   * Returns the value of translation message for key `paymentRequestExpirationDateChanged`.
   * Default value: `Payment request expiration date changed`
   */
  get paymentRequestExpirationDateChanged(): string {
    return this._translations.get('paymentRequestExpirationDateChanged');
  }

  /**
   * Returns the value of translation message for key `paymentRequestExpired`.
   * Default value: `Payment request expired`
   */
  get paymentRequestExpired(): string {
    return this._translations.get('paymentRequestExpired');
  }

  /**
   * Returns the value of translation message for key `paymentRequestProcessed`.
   * Default value: `Payment request processed`
   */
  get paymentRequestProcessed(): string {
    return this._translations.get('paymentRequestProcessed');
  }

  /**
   * Returns the value of translation message for key `paymentRequestReceived`.
   * Default value: `Payment request received`
   */
  get paymentRequestReceived(): string {
    return this._translations.get('paymentRequestReceived');
  }

  /**
   * Returns the value of translation message for key `recurringPaymentFailed`.
   * Default value: `Recurring payment occurrence has failed`
   */
  get recurringPaymentFailed(): string {
    return this._translations.get('recurringPaymentFailed');
  }

  /**
   * Returns the value of translation message for key `recurringPaymentOcurrenceProcessed`.
   * Default value: `Recurring payment was processed`
   */
  get recurringPaymentOcurrenceProcessed(): string {
    return this._translations.get('recurringPaymentOcurrenceProcessed');
  }

  /**
   * Returns the value of translation message for key `scheduledPaymentFailed`.
   * Default value: `Scheduled payment failed`
   */
  get scheduledPaymentFailed(): string {
    return this._translations.get('scheduledPaymentFailed');
  }

  /**
   * Returns the value of translation message for key `scheduledPaymentInstallmentProcessed`.
   * Default value: `Scheduled payment installment was processed`
   */
  get scheduledPaymentInstallmentProcessed(): string {
    return this._translations.get('scheduledPaymentInstallmentProcessed');
  }

  /**
   * Returns the value of translation message for key `scheduledPaymentRequestFailed`.
   * Default value: `Scheduled payment request failed`
   */
  get scheduledPaymentRequestFailed(): string {
    return this._translations.get('scheduledPaymentRequestFailed');
  }

  /**
   * Returns the value of translation message for key `sentPaymentRequestExpirationDateChanged`.
   * Default value: `Sent payment request expiration date changed`
   */
  get sentPaymentRequestExpirationDateChanged(): string {
    return this._translations.get('sentPaymentRequestExpirationDateChanged');
  }

  /**
   * Returns the value of translation message for key `smsPerformedPayment`.
   * Default value: `SMS performed payment`
   */
  get smsPerformedPayment(): string {
    return this._translations.get('smsPerformedPayment');
  }

  /**
   * Returns the value of translation message for key `ticketWebhookFailed`.
   * Default value: `Ticket approval could not be notified through webhook`
   */
  get ticketWebhookFailed(): string {
    return this._translations.get('ticketWebhookFailed');
  }

  /**
   * Returns the nested accessor for translation messages in `operator`.
   */
  get operator(): I18n$Notification$User$Account$Operator {
    return this._nested.operator;
  }
}

export class I18n$Notification$User$Account$Operator {

  private _translations: Translations = new Translations('notification.user.account.operator');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentApprovedStillPending`.
   * Default value: `Pending payment by operator approved but still pending further authorization`
   */
  get authorizedPaymentApprovedStillPending(): string {
    return this._translations.get('authorizedPaymentApprovedStillPending');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentCanceled`.
   * Default value: `Pending payment by operator was canceled`
   */
  get authorizedPaymentCanceled(): string {
    return this._translations.get('authorizedPaymentCanceled');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentDenied`.
   * Default value: `Pending payment by operator was denied`
   */
  get authorizedPaymentDenied(): string {
    return this._translations.get('authorizedPaymentDenied');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentExpired`.
   * Default value: `Authorized payment by operator has expired`
   */
  get authorizedPaymentExpired(): string {
    return this._translations.get('authorizedPaymentExpired');
  }

  /**
   * Returns the value of translation message for key `authorizedPaymentSucceeded`.
   * Default value: `Pending payment by operator successful`
   */
  get authorizedPaymentSucceeded(): string {
    return this._translations.get('authorizedPaymentSucceeded');
  }

  /**
   * Returns the value of translation message for key `paymentAwaitingAuthorization`.
   * Default value: `Operator payment awaiting authorization`
   */
  get paymentAwaitingAuthorization(): string {
    return this._translations.get('paymentAwaitingAuthorization');
  }
}

export class I18n$Notification$User$Brokering {

  private _translations: Translations = new Translations('notification.user.brokering');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `adPendingAuthorization`.
   * Default value: `Ad is pending for authorization`
   */
  get adPendingAuthorization(): string {
    return this._translations.get('adPendingAuthorization');
  }

  /**
   * Returns the value of translation message for key `memberAssigned`.
   * Default value: `Member assigned`
   */
  get memberAssigned(): string {
    return this._translations.get('memberAssigned');
  }

  /**
   * Returns the value of translation message for key `memberUnassigned`.
   * Default value: `Member unassigned`
   */
  get memberUnassigned(): string {
    return this._translations.get('memberUnassigned');
  }
}

export class I18n$Notification$User$Buyer {

  private _translations: Translations = new Translations('notification.user.buyer');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `adInterestNotification`.
   * Default value: `New ad matching interest`
   */
  get adInterestNotification(): string {
    return this._translations.get('adInterestNotification');
  }

  /**
   * Returns the value of translation message for key `adQuestionAnswered`.
   * Default value: `Ad question answered`
   */
  get adQuestionAnswered(): string {
    return this._translations.get('adQuestionAnswered');
  }

  /**
   * Returns the value of translation message for key `orderCanceled`.
   * Default value: `Purchase order canceled`
   */
  get orderCanceled(): string {
    return this._translations.get('orderCanceled');
  }

  /**
   * Returns the value of translation message for key `orderPaymentCanceled`.
   * Default value: `Purchase order payment canceled`
   */
  get orderPaymentCanceled(): string {
    return this._translations.get('orderPaymentCanceled');
  }

  /**
   * Returns the value of translation message for key `orderPaymentDenied`.
   * Default value: `Purchase order payment denied`
   */
  get orderPaymentDenied(): string {
    return this._translations.get('orderPaymentDenied');
  }

  /**
   * Returns the value of translation message for key `orderPaymentExpired`.
   * Default value: `Purchase order payment expired`
   */
  get orderPaymentExpired(): string {
    return this._translations.get('orderPaymentExpired');
  }

  /**
   * Returns the value of translation message for key `orderPending`.
   * Default value: `Pending order`
   */
  get orderPending(): string {
    return this._translations.get('orderPending');
  }

  /**
   * Returns the value of translation message for key `orderPendingAuthorization`.
   * Default value: `Purchase order awaiting payment authorization`
   */
  get orderPendingAuthorization(): string {
    return this._translations.get('orderPendingAuthorization');
  }

  /**
   * Returns the value of translation message for key `orderPendingDeliveryData`.
   * Default value: `Order awaiting delivery information`
   */
  get orderPendingDeliveryData(): string {
    return this._translations.get('orderPendingDeliveryData');
  }

  /**
   * Returns the value of translation message for key `orderProcessedBySeller`.
   * Default value: `Order accepted by seller`
   */
  get orderProcessedBySeller(): string {
    return this._translations.get('orderProcessedBySeller');
  }

  /**
   * Returns the value of translation message for key `orderRejectedBySeller`.
   * Default value: `Order rejected by seller`
   */
  get orderRejectedBySeller(): string {
    return this._translations.get('orderRejectedBySeller');
  }

  /**
   * Returns the value of translation message for key `buyerSalePending`.
   * Default value: `Order created`
   */
  get buyerSalePending(): string {
    return this._translations.get('buyerSalePending');
  }

  /**
   * Returns the value of translation message for key `buyerSaleRejectedBySeller`.
   * Default value: `Sale order canceled`
   */
  get buyerSaleRejectedBySeller(): string {
    return this._translations.get('buyerSaleRejectedBySeller');
  }
}

export class I18n$Notification$User$Feedback {

  private _translations: Translations = new Translations('notification.user.feedback');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `changed`.
   * Default value: `Feedback changed`
   */
  get changed(): string {
    return this._translations.get('changed');
  }

  /**
   * Returns the value of translation message for key `created`.
   * Default value: `Feedback received`
   */
  get created(): string {
    return this._translations.get('created');
  }

  /**
   * Returns the value of translation message for key `expirationReminder`.
   * Default value: `Feedback reminder`
   */
  get expirationReminder(): string {
    return this._translations.get('expirationReminder');
  }

  /**
   * Returns the value of translation message for key `optional`.
   * Default value: `Feedback optional`
   */
  get optional(): string {
    return this._translations.get('optional');
  }

  /**
   * Returns the value of translation message for key `replyCreated`.
   * Default value: `Feedback reply received`
   */
  get replyCreated(): string {
    return this._translations.get('replyCreated');
  }

  /**
   * Returns the value of translation message for key `required`.
   * Default value: `Feedback required`
   */
  get required(): string {
    return this._translations.get('required');
  }
}

export class I18n$Notification$User$Personal {

  private _translations: Translations = new Translations('notification.user.personal');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `brokerAssigned`.
   * Default value: `Broker assigned`
   */
  get brokerAssigned(): string {
    return this._translations.get('brokerAssigned');
  }

  /**
   * Returns the value of translation message for key `brokerUnassigned`.
   * Default value: `Broker unassigned`
   */
  get brokerUnassigned(): string {
    return this._translations.get('brokerUnassigned');
  }

  /**
   * Returns the value of translation message for key `maxSmsPerMonthReached`.
   * Default value: `Maximum SMS per month reached`
   */
  get maxSmsPerMonthReached(): string {
    return this._translations.get('maxSmsPerMonthReached');
  }

  /**
   * Returns the value of translation message for key `newToken`.
   * Default value: `New token / card`
   */
  get newToken(): string {
    return this._translations.get('newToken');
  }

  /**
   * Returns the value of translation message for key `newTokenPendingActivation`.
   * Default value: `New token / card pending activation`
   */
  get newTokenPendingActivation(): string {
    return this._translations.get('newTokenPendingActivation');
  }

  /**
   * Returns the value of translation message for key `passwordStatusChanged`.
   * Default value: `Password status changed`
   */
  get passwordStatusChanged(): string {
    return this._translations.get('passwordStatusChanged');
  }

  /**
   * Returns the value of translation message for key `tokenStatusChanged`.
   * Default value: `Token / card status changed`
   */
  get tokenStatusChanged(): string {
    return this._translations.get('tokenStatusChanged');
  }

  /**
   * Returns the value of translation message for key `userStatusChanged`.
   * Default value: `User status changed`
   */
  get userStatusChanged(): string {
    return this._translations.get('userStatusChanged');
  }
}

export class I18n$Notification$User$Reference {

  private _translations: Translations = new Translations('notification.user.reference');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `changed`.
   * Default value: `Reference changed`
   */
  get changed(): string {
    return this._translations.get('changed');
  }

  /**
   * Returns the value of translation message for key `created`.
   * Default value: `Reference received`
   */
  get created(): string {
    return this._translations.get('created');
  }
}

export class I18n$Notification$User$Seller {

  private _translations: Translations = new Translations('notification.user.seller');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `adAuthorized`.
   * Default value: `Advertisement authorized`
   */
  get adAuthorized(): string {
    return this._translations.get('adAuthorized');
  }

  /**
   * Returns the value of translation message for key `adExpired`.
   * Default value: `Advertisement expired`
   */
  get adExpired(): string {
    return this._translations.get('adExpired');
  }

  /**
   * Returns the value of translation message for key `adLowStock`.
   * Default value: `Low quantity of article`
   */
  get adLowStock(): string {
    return this._translations.get('adLowStock');
  }

  /**
   * Returns the value of translation message for key `adOutOfStock`.
   * Default value: `Article out of stock`
   */
  get adOutOfStock(): string {
    return this._translations.get('adOutOfStock');
  }

  /**
   * Returns the value of translation message for key `adQuestionCreated`.
   * Default value: `New ad question`
   */
  get adQuestionCreated(): string {
    return this._translations.get('adQuestionCreated');
  }

  /**
   * Returns the value of translation message for key `adRejected`.
   * Default value: `Advertisement rejected`
   */
  get adRejected(): string {
    return this._translations.get('adRejected');
  }

  /**
   * Returns the value of translation message for key `orderCanceled`.
   * Default value: `Sale order canceled`
   */
  get orderCanceled(): string {
    return this._translations.get('orderCanceled');
  }

  /**
   * Returns the value of translation message for key `orderCreated`.
   * Default value: `New web shop order`
   */
  get orderCreated(): string {
    return this._translations.get('orderCreated');
  }

  /**
   * Returns the value of translation message for key `orderPaymentCanceled`.
   * Default value: `Sale order payment canceled`
   */
  get orderPaymentCanceled(): string {
    return this._translations.get('orderPaymentCanceled');
  }

  /**
   * Returns the value of translation message for key `orderPaymentDenied`.
   * Default value: `Sale order payment denied`
   */
  get orderPaymentDenied(): string {
    return this._translations.get('orderPaymentDenied');
  }

  /**
   * Returns the value of translation message for key `orderPaymentExpired`.
   * Default value: `Sale order payment expired`
   */
  get orderPaymentExpired(): string {
    return this._translations.get('orderPaymentExpired');
  }

  /**
   * Returns the value of translation message for key `orderPendingAuthorization`.
   * Default value: `Sale order awaiting payment authorization`
   */
  get orderPendingAuthorization(): string {
    return this._translations.get('orderPendingAuthorization');
  }

  /**
   * Returns the value of translation message for key `orderPendingDeliveryData`.
   * Default value: `Delivery information requested`
   */
  get orderPendingDeliveryData(): string {
    return this._translations.get('orderPendingDeliveryData');
  }

  /**
   * Returns the value of translation message for key `orderProcessedByBuyer`.
   * Default value: `Order accepted by buyer`
   */
  get orderProcessedByBuyer(): string {
    return this._translations.get('orderProcessedByBuyer');
  }

  /**
   * Returns the value of translation message for key `orderRejectedByBuyer`.
   * Default value: `Order rejected`
   */
  get orderRejectedByBuyer(): string {
    return this._translations.get('orderRejectedByBuyer');
  }

  /**
   * Returns the value of translation message for key `saleProcessedByBuyer`.
   * Default value: `Sale realized`
   */
  get saleProcessedByBuyer(): string {
    return this._translations.get('saleProcessedByBuyer');
  }
}

export class I18n$NotificationSettings {

  private _translations: Translations = new Translations('notificationSettings');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Notification settings`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Notification settings`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `notAvailableSettings`.
   * Default value: `You are not allowed to change any settings.`
   */
  get notAvailableSettings(): string {
    return this._translations.get('notAvailableSettings');
  }

  /**
   * Returns the value of translation message for key `forwardMessages`.
   * Default value: `Forward internal messages to your email address`
   */
  get forwardMessages(): string {
    return this._translations.get('forwardMessages');
  }

  /**
   * Returns the value of translation message for key `notifications`.
   * Default value: `Notifications`
   */
  get notifications(): string {
    return this._translations.get('notifications');
  }

  /**
   * Returns the value of translation message for key `internalNotification`.
   * Default value: `Internal notification`
   */
  get internalNotification(): string {
    return this._translations.get('internalNotification');
  }

  /**
   * Returns the value of translation message for key `accounts`.
   * Default value: `Accounts`
   */
  get accounts(): string {
    return this._translations.get('accounts');
  }

  /**
   * Returns the value of translation message for key `personal`.
   * Default value: `Personal`
   */
  get personal(): string {
    return this._translations.get('personal');
  }

  /**
   * Returns the value of translation message for key `payments`.
   * Default value: `Payments`
   */
  get payments(): string {
    return this._translations.get('payments');
  }

  /**
   * Returns the value of translation message for key `marketplaceAsBuyer`.
   * Default value: `Marketplace as buyer`
   */
  get marketplaceAsBuyer(): string {
    return this._translations.get('marketplaceAsBuyer');
  }

  /**
   * Returns the value of translation message for key `marketplaceAsSeller`.
   * Default value: `Marketplace as seller`
   */
  get marketplaceAsSeller(): string {
    return this._translations.get('marketplaceAsSeller');
  }

  /**
   * Returns the value of translation message for key `feedbackAndReferences`.
   * Default value: `Feedback and references`
   */
  get feedbackAndReferences(): string {
    return this._translations.get('feedbackAndReferences');
  }

  /**
   * Returns the value of translation message for key `smsCount`.
   * Default value: `You have used {count} of {total} free SMS messages this month.`
   */
  smsCount($: {count: string | number, total: string | number}): string {
    return this._translations.get('smsCount', {
      count: $.count,
      total: $.total
    });
  }

  /**
   * Returns the value of translation message for key `paymentNotifications.above`.
   * Default value: `Only notify payments above`
   */
  get paymentNotificationsAbove(): string {
    return this._translations.get('paymentNotifications.above');
  }

  /**
   * Returns the value of translation message for key `paymentNotifications.below`.
   * Default value: `Only notify payments below`
   */
  get paymentNotificationsBelow(): string {
    return this._translations.get('paymentNotifications.below');
  }

  /**
   * Returns the value of translation message for key `saved`.
   * Default value: `The notification settings were saved`
   */
  get saved(): string {
    return this._translations.get('saved');
  }

  /**
   * Returns the value of translation message for key `enableOrDisable`.
   * Default value: `Enable or disable {section}`
   */
  enableOrDisable(section: string | number): string {
    return this._translations.get('enableOrDisable', {
      section: section
    });
  }

  /**
   * Returns the value of translation message for key `enableAll`.
   * Default value: `Enable all`
   */
  get enableAll(): string {
    return this._translations.get('enableAll');
  }

  /**
   * Returns the value of translation message for key `disableAll`.
   * Default value: `Disable all`
   */
  get disableAll(): string {
    return this._translations.get('disableAll');
  }
}

export class I18n$ConnectedUser {

  private _translations: Translations = new Translations('connectedUser');

  private _nested = {
    viewConnected: new I18n$ConnectedUser$ViewConnected()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.viewConnected.defaultValues = defaultValues['viewConnected'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.viewConnected.initialize(values['viewConnected']);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Connected users`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Connected users`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `loggedInAt`.
   * Default value: `Logged in at`
   */
  get loggedInAt(): string {
    return this._translations.get('loggedInAt');
  }

  /**
   * Returns the value of translation message for key `channel`.
   * Default value: `Channel`
   */
  get channel(): string {
    return this._translations.get('channel');
  }

  /**
   * Returns the value of translation message for key `ipAddress`.
   * Default value: `IP Address`
   */
  get ipAddress(): string {
    return this._translations.get('ipAddress');
  }

  /**
   * Returns the value of translation message for key `disconnect`.
   * Default value: `Disconnect user`
   */
  get disconnect(): string {
    return this._translations.get('disconnect');
  }

  /**
   * Returns the value of translation message for key `showConnected`.
   * Default value: `Show connected`
   */
  get showConnected(): string {
    return this._translations.get('showConnected');
  }

  /**
   * Returns the value of translation message for key `disconnected`.
   * Default value: `{user} has been disconnected`
   */
  disconnected(user: string | number): string {
    return this._translations.get('disconnected', {
      user: user
    });
  }

  /**
   * Returns the nested accessor for translation messages in `viewConnected`.
   */
  get viewConnected(): I18n$ConnectedUser$ViewConnected {
    return this._nested.viewConnected;
  }
}

export class I18n$ConnectedUser$ViewConnected {

  private _translations: Translations = new Translations('connectedUser.viewConnected');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `operator`.
   * Default value: `View connected operators`
   */
  get operator(): string {
    return this._translations.get('operator');
  }

  /**
   * Returns the value of translation message for key `broker`.
   * Default value: `View connected brokers`
   */
  get broker(): string {
    return this._translations.get('broker');
  }

  /**
   * Returns the value of translation message for key `admin`.
   * Default value: `View connected admins`
   */
  get admin(): string {
    return this._translations.get('admin');
  }

  /**
   * Returns the value of translation message for key `member`.
   * Default value: `View connected members`
   */
  get member(): string {
    return this._translations.get('member');
  }
}

export class I18n$IdentityProvider {

  private _translations: Translations = new Translations('identityProvider');

  private _nested = {
    title: new I18n$IdentityProvider$Title(),
    mobileTitle: new I18n$IdentityProvider$MobileTitle(),
    action: new I18n$IdentityProvider$Action()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.action.defaultValues = defaultValues['action'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.action.initialize(values['action']);
  }

  /**
   * Returns the value of translation message for key `popup`.
   * Default value: `Contacting {provider}. Please, wait...`
   */
  popup(provider: string | number): string {
    return this._translations.get('popup', {
      provider: provider
    });
  }

  /**
   * Returns the value of translation message for key `login`.
   * Default value: `Continue with <b>{provider}</b>`
   */
  login(provider: string | number): string {
    return this._translations.get('login', {
      provider: provider
    });
  }

  /**
   * Returns the value of translation message for key `login.noMatch`.
   * Default value: `No user found with e-mail {email}. You will need to login with your regular user and password. After logging-in, your {app} account will be automatically linked, so, on the next time, the 'Continue with {provider}' functionality will work directly.`
   */
  loginNoMatch($: {email: string | number, app: string | number, provider: string | number}): string {
    return this._translations.get('login.noMatch', {
      email: $.email,
      app: $.app,
      provider: $.provider
    });
  }

  /**
   * Returns the value of translation message for key `login.noEmail`.
   * Default value: `Couldn't read an e-mail address from your {provider} account. You will need to login with your regular user and password. After logging-in, your {app} account will be automatically linked, so, on the next time, the 'Continue with {provider}' functionality will work directly.`
   */
  loginNoEmail($: {provider: string | number, app: string | number}): string {
    return this._translations.get('login.noEmail', {
      provider: $.provider,
      app: $.app
    });
  }

  /**
   * Returns the value of translation message for key `registration`.
   * Default value: `Register faster with your identity provider:`
   */
  get registration(): string {
    return this._translations.get('registration');
  }

  /**
   * Returns the value of translation message for key `registration.disclaimer`.
   * Default value: `<b>Disclaimer:</b> None of your {app} data will be shared with these providers, and the only purpose of reading your personal data from them is to fill in the registration form and logging you in after you're registered.`
   */
  registrationDisclaimer(app: string | number): string {
    return this._translations.get('registration.disclaimer', {
      app: app
    });
  }

  /**
   * Returns the value of translation message for key `disclaimer`.
   * Default value: `<b>Disclaimer</b>: None of your {app} data will be shared with any provider. The only data read from the providers are your display name and e-mail, with the sole purpose to logging-in faster on {app}.`
   */
  disclaimer(app: string | number): string {
    return this._translations.get('disclaimer', {
      app: app
    });
  }

  /**
   * Returns the value of translation message for key `noResults`.
   * Default value: `There are not identity providers added yet.`
   */
  get noResults(): string {
    return this._translations.get('noResults');
  }

  /**
   * Returns the value of translation message for key `connectedOn`.
   * Default value: `Connected on {date}`
   */
  connectedOn(date: string | number): string {
    return this._translations.get('connectedOn', {
      date: date
    });
  }

  /**
   * Returns the value of translation message for key `disconnected`.
   * Default value: `Disconnected`
   */
  get disconnected(): string {
    return this._translations.get('disconnected');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$IdentityProvider$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$IdentityProvider$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `action`.
   */
  get action(): I18n$IdentityProvider$Action {
    return this._nested.action;
  }
}

export class I18n$IdentityProvider$Title {

  private _translations: Translations = new Translations('identityProvider.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `manage.self`.
   * Default value: `Manage your identity providers`
   */
  get manageSelf(): string {
    return this._translations.get('manage.self');
  }

  /**
   * Returns the value of translation message for key `manage.user`.
   * Default value: `Manage user identity providers`
   */
  get manageUser(): string {
    return this._translations.get('manage.user');
  }
}

export class I18n$IdentityProvider$MobileTitle {

  private _translations: Translations = new Translations('identityProvider.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `manage.self`.
   * Default value: `Identity providers`
   */
  get manageSelf(): string {
    return this._translations.get('manage.self');
  }

  /**
   * Returns the value of translation message for key `manage.user`.
   * Default value: `Identity providers`
   */
  get manageUser(): string {
    return this._translations.get('manage.user');
  }
}

export class I18n$IdentityProvider$Action {

  private _translations: Translations = new Translations('identityProvider.action');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `connect`.
   * Default value: `Connect`
   */
  get connect(): string {
    return this._translations.get('connect');
  }

  /**
   * Returns the value of translation message for key `connect.done`.
   * Default value: `You can now login as {name} using {provider}`
   */
  connectDone($: {name: string | number, provider: string | number}): string {
    return this._translations.get('connect.done', {
      name: $.name,
      provider: $.provider
    });
  }

  /**
   * Returns the value of translation message for key `disconnect`.
   * Default value: `Disconnect`
   */
  get disconnect(): string {
    return this._translations.get('disconnect');
  }

  /**
   * Returns the value of translation message for key `disconnect.confirm`.
   * Default value: `This will disable the 'Continue with {provider}' functionality. Are you sure?`
   */
  disconnectConfirm(provider: string | number): string {
    return this._translations.get('disconnect.confirm', {
      provider: provider
    });
  }

  /**
   * Returns the value of translation message for key `disconnect.done`.
   * Default value: `The login with {provider} has been disabled`
   */
  disconnectDone(provider: string | number): string {
    return this._translations.get('disconnect.done', {
      provider: provider
    });
  }
}

export class I18n$Operation {

  private _translations: Translations = new Translations('operation');

  private _nested = {
    mobileTitle: new I18n$Operation$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `user`.
   * Default value: `User`
   */
  get user(): string {
    return this._translations.get('user');
  }

  /**
   * Returns the value of translation message for key `ad`.
   * Default value: `Advertisement`
   */
  get ad(): string {
    return this._translations.get('ad');
  }

  /**
   * Returns the value of translation message for key `transfer`.
   * Default value: `Transfer`
   */
  get transfer(): string {
    return this._translations.get('transfer');
  }

  /**
   * Returns the value of translation message for key `fileUpload`.
   * Default value: `File upload`
   */
  get fileUpload(): string {
    return this._translations.get('fileUpload');
  }

  /**
   * Returns the value of translation message for key `redirecting`.
   * Default value: `You are being redirected...`
   */
  get redirecting(): string {
    return this._translations.get('redirecting');
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Operation$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$Operation$MobileTitle {

  private _translations: Translations = new Translations('operation.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `result`.
   * Default value: `Result`
   */
  get result(): string {
    return this._translations.get('result');
  }
}

export class I18n$Wizard {

  private _translations: Translations = new Translations('wizard');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `alreadyExecuted`.
   * Default value: `This step was already executed`
   */
  get alreadyExecuted(): string {
    return this._translations.get('alreadyExecuted');
  }

  /**
   * Returns the value of translation message for key `emailVerificationCode`.
   * Default value: `E-mail verification code`
   */
  get emailVerificationCode(): string {
    return this._translations.get('emailVerificationCode');
  }

  /**
   * Returns the value of translation message for key `smsVerificationCode`.
   * Default value: `SMS verification code`
   */
  get smsVerificationCode(): string {
    return this._translations.get('smsVerificationCode');
  }

  /**
   * Returns the value of translation message for key `codeSent`.
   * Default value: `Code sent`
   */
  get codeSent(): string {
    return this._translations.get('codeSent');
  }
}

export class I18n$Setting {

  private _translations: Translations = new Translations('setting');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Settings`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Settings`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `theme`.
   * Default value: `Theme`
   */
  get theme(): string {
    return this._translations.get('theme');
  }

  /**
   * Returns the value of translation message for key `theme.light`.
   * Default value: `Light`
   */
  get themeLight(): string {
    return this._translations.get('theme.light');
  }

  /**
   * Returns the value of translation message for key `theme.dark`.
   * Default value: `Dark`
   */
  get themeDark(): string {
    return this._translations.get('theme.dark');
  }
}

export class I18n$PrivacySettings {

  private _translations: Translations = new Translations('privacySettings');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Privacy settings`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `Privacy settings`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the value of translation message for key `enableControl`.
   * Default value: `Enable privacy control`
   */
  get enableControl(): string {
    return this._translations.get('enableControl');
  }

  /**
   * Returns the value of translation message for key `controlsSection`.
   * Default value: `Departments allowed to access private data`
   */
  get controlsSection(): string {
    return this._translations.get('controlsSection');
  }

  /**
   * Returns the value of translation message for key `information`.
   * Default value: `In this page it is possible to set whether access to those fields is restricted, and how those fields may be used.`
   */
  get information(): string {
    return this._translations.get('information');
  }

  /**
   * Returns the value of translation message for key `dataSubjectToControls`.
   * Default value: `Personal data subject to privacy control:`
   */
  get dataSubjectToControls(): string {
    return this._translations.get('dataSubjectToControls');
  }

  /**
   * Returns the value of translation message for key `saved`.
   * Default value: `The privacy settings were saved`
   */
  get saved(): string {
    return this._translations.get('saved');
  }
}

export class I18n$Record {

  private _translations: Translations = new Translations('record');

  private _nested = {
    title: new I18n$Record$Title(),
    mobileTitle: new I18n$Record$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `createdBy`.
   * Default value: `Created by`
   */
  get createdBy(): string {
    return this._translations.get('createdBy');
  }

  /**
   * Returns the value of translation message for key `lastModifiedBy`.
   * Default value: `Last modified by`
   */
  get lastModifiedBy(): string {
    return this._translations.get('lastModifiedBy');
  }

  /**
   * Returns the value of translation message for key `lastModificationDate`.
   * Default value: `Last modified at`
   */
  get lastModificationDate(): string {
    return this._translations.get('lastModificationDate');
  }

  /**
   * Returns the value of translation message for key `action`.
   * Default value: `{type} ({count})`
   */
  action($: {type: string | number, count: string | number}): string {
    return this._translations.get('action', {
      type: $.type,
      count: $.count
    });
  }

  /**
   * Returns the value of translation message for key `fields`.
   * Default value: `Fields`
   */
  get fields(): string {
    return this._translations.get('fields');
  }

  /**
   * Returns the value of translation message for key `created`.
   * Default value: `The {name} was created`
   */
  created(name: string | number): string {
    return this._translations.get('created', {
      name: name
    });
  }

  /**
   * Returns the value of translation message for key `saved`.
   * Default value: `The {name} was saved`
   */
  saved(name: string | number): string {
    return this._translations.get('saved', {
      name: name
    });
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Record$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Record$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$Record$Title {

  private _translations: Translations = new Translations('record.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `details`.
   * Default value: `{name} details`
   */
  details(name: string | number): string {
    return this._translations.get('details', {
      name: name
    });
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `Create new {name}`
   */
  new(name: string | number): string {
    return this._translations.get('new', {
      name: name
    });
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit {name}`
   */
  edit(name: string | number): string {
    return this._translations.get('edit', {
      name: name
    });
  }
}

export class I18n$Record$MobileTitle {

  private _translations: Translations = new Translations('record.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `details`.
   * Default value: `{name} details`
   */
  details(name: string | number): string {
    return this._translations.get('details', {
      name: name
    });
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `Create new {name}`
   */
  new(name: string | number): string {
    return this._translations.get('new', {
      name: name
    });
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit {name}`
   */
  edit(name: string | number): string {
    return this._translations.get('edit', {
      name: name
    });
  }
}

export class I18n$UserAlert {

  private _translations: Translations = new Translations('userAlert');

  private _nested = {
    type: new I18n$UserAlert$Type()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.type.defaultValues = defaultValues['type'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.type.initialize(values['type']);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Search user alerts`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `text`.
   * Default value: `Text`
   */
  get text(): string {
    return this._translations.get('text');
  }

  /**
   * Returns the value of translation message for key `mobileTitle`.
   * Default value: `User alerts`
   */
  get mobileTitle(): string {
    return this._translations.get('mobileTitle');
  }

  /**
   * Returns the nested accessor for translation messages in `type`.
   */
  get type(): I18n$UserAlert$Type {
    return this._nested.type;
  }
}

export class I18n$UserAlert$Type {

  private _translations: Translations = new Translations('userAlert.type');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `title`.
   * Default value: `Type`
   */
  get title(): string {
    return this._translations.get('title');
  }

  /**
   * Returns the value of translation message for key `custom`.
   * Default value: `Custom`
   */
  get custom(): string {
    return this._translations.get('custom');
  }

  /**
   * Returns the value of translation message for key `givenVeryBadRefs`.
   * Default value: `User gave too many 'very bad' references`
   */
  get givenVeryBadRefs(): string {
    return this._translations.get('givenVeryBadRefs');
  }

  /**
   * Returns the value of translation message for key `insufficientBalanceForInitialCredit`.
   * Default value: `Insufficient balance for an account's initial credit`
   */
  get insufficientBalanceForInitialCredit(): string {
    return this._translations.get('insufficientBalanceForInitialCredit');
  }

  /**
   * Returns the value of translation message for key `maxDeviceActivationAttemptsReached`.
   * Default value: `Max device activation attempts reached`
   */
  get maxDeviceActivationAttemptsReached(): string {
    return this._translations.get('maxDeviceActivationAttemptsReached');
  }

  /**
   * Returns the value of translation message for key `maxDeviceConfirmationCheckAttemptsReached`.
   * Default value: `Max device confirmation check attempts reached`
   */
  get maxDeviceConfirmationCheckAttemptsReached(): string {
    return this._translations.get('maxDeviceConfirmationCheckAttemptsReached');
  }

  /**
   * Returns the value of translation message for key `maxTokenActivationAttemptsReached`.
   * Default value: `Max token activation attempts reached`
   */
  get maxTokenActivationAttemptsReached(): string {
    return this._translations.get('maxTokenActivationAttemptsReached');
  }

  /**
   * Returns the value of translation message for key `maxUserLocalizationAttemptsReached`.
   * Default value: `Max user localization attempts reached`
   */
  get maxUserLocalizationAttemptsReached(): string {
    return this._translations.get('maxUserLocalizationAttemptsReached');
  }

  /**
   * Returns the value of translation message for key `maxVoucherRedeemAttemptsReached`.
   * Default value: `Max voucher redeem attempts reached`
   */
  get maxVoucherRedeemAttemptsReached(): string {
    return this._translations.get('maxVoucherRedeemAttemptsReached');
  }

  /**
   * Returns the value of translation message for key `moveUserAutomaticallyFailed`.
   * Default value: `Move user automatically to group failed`
   */
  get moveUserAutomaticallyFailed(): string {
    return this._translations.get('moveUserAutomaticallyFailed');
  }

  /**
   * Returns the value of translation message for key `passwordDisabledByTries`.
   * Default value: `Password is indefinitely blocked by exceeding attempts`
   */
  get passwordDisabledByTries(): string {
    return this._translations.get('passwordDisabledByTries');
  }

  /**
   * Returns the value of translation message for key `passwordTemporarilyBlocked`.
   * Default value: `Password temporarily blocked by exceeding attempts`
   */
  get passwordTemporarilyBlocked(): string {
    return this._translations.get('passwordTemporarilyBlocked');
  }

  /**
   * Returns the value of translation message for key `receivedVeryBadRefs`.
   * Default value: `User received too many 'very bad' references`
   */
  get receivedVeryBadRefs(): string {
    return this._translations.get('receivedVeryBadRefs');
  }

  /**
   * Returns the value of translation message for key `scheduledPaymentFailed`.
   * Default value: `Scheduled payment failed`
   */
  get scheduledPaymentFailed(): string {
    return this._translations.get('scheduledPaymentFailed');
  }
}

export class I18n$SystemAlert {

  private _translations: Translations = new Translations('systemAlert');

  private _nested = {
    type: new I18n$SystemAlert$Type()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.type.defaultValues = defaultValues['type'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.type.initialize(values['type']);
  }

  /**
   * Returns the nested accessor for translation messages in `type`.
   */
  get type(): I18n$SystemAlert$Type {
    return this._nested.type;
  }
}

export class I18n$SystemAlert$Type {

  private _translations: Translations = new Translations('systemAlert.type');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `accountFeeChargedNoFailures`.
   * Default value: `Account fee has finished without any failures`
   */
  get accountFeeChargedNoFailures(): string {
    return this._translations.get('accountFeeChargedNoFailures');
  }

  /**
   * Returns the value of translation message for key `accountFeeChargedWithFailures`.
   * Default value: `Account fee has finished with at least one failure`
   */
  get accountFeeChargedWithFailures(): string {
    return this._translations.get('accountFeeChargedWithFailures');
  }

  /**
   * Returns the value of translation message for key `applicationRestarted`.
   * Default value: `Application restarted`
   */
  get applicationRestarted(): string {
    return this._translations.get('applicationRestarted');
  }

  /**
   * Returns the value of translation message for key `custom`.
   * Default value: `Custom`
   */
  get custom(): string {
    return this._translations.get('custom');
  }

  /**
   * Returns the value of translation message for key `maxGlobalSmsReached`.
   * Default value: `The global maximum of SMS messages per month has been reached`
   */
  get maxGlobalSmsReached(): string {
    return this._translations.get('maxGlobalSmsReached');
  }

  /**
   * Returns the value of translation message for key `maxIncorrectLoginAttempts`.
   * Default value: `Max incorrect login attempts for invalid user`
   */
  get maxIncorrectLoginAttempts(): string {
    return this._translations.get('maxIncorrectLoginAttempts');
  }
}

export class I18n$Document {

  private _translations: Translations = new Translations('document');

  private _nested = {
    title: new I18n$Document$Title(),
    mobileTitle: new I18n$Document$MobileTitle()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
  }

  /**
   * Returns the value of translation message for key `enable`.
   * Default value: `Enable`
   */
  get enable(): string {
    return this._translations.get('enable');
  }

  /**
   * Returns the value of translation message for key `userVisible`.
   * Default value: `Visible for members`
   */
  get userVisible(): string {
    return this._translations.get('userVisible');
  }

  /**
   * Returns the value of translation message for key `brokerVisible`.
   * Default value: `Visible for brokers`
   */
  get brokerVisible(): string {
    return this._translations.get('brokerVisible');
  }

  /**
   * Returns the value of translation message for key `brokerManageable`.
   * Default value: `Manageable by broker`
   */
  get brokerManageable(): string {
    return this._translations.get('brokerManageable');
  }

  /**
   * Returns the value of translation message for key `replaceDocument`.
   * Default value: `Replace document`
   */
  get replaceDocument(): string {
    return this._translations.get('replaceDocument');
  }

  /**
   * Returns the value of translation message for key `newDocument`.
   * Default value: `New document`
   */
  get newDocument(): string {
    return this._translations.get('newDocument');
  }

  /**
   * Returns the value of translation message for key `document`.
   * Default value: `Document`
   */
  get document(): string {
    return this._translations.get('document');
  }

  /**
   * Returns the value of translation message for key `savedSuccessfully`.
   * Default value: `Saved successfully`
   */
  get savedSuccessfully(): string {
    return this._translations.get('savedSuccessfully');
  }

  /**
   * Returns the value of translation message for key `process`.
   * Default value: `Process dynamic document`
   */
  get process(): string {
    return this._translations.get('process');
  }

  /**
   * Returns the value of translation message for key `category`.
   * Default value: `Category`
   */
  get category(): string {
    return this._translations.get('category');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Document$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Document$MobileTitle {
    return this._nested.mobileTitle;
  }
}

export class I18n$Document$Title {

  private _translations: Translations = new Translations('document.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `Create new document`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Document details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Document details`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Documents`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Documents`
   */
  get search(): string {
    return this._translations.get('search');
  }
}

export class I18n$Document$MobileTitle {

  private _translations: Translations = new Translations('document.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `Create new document`
   */
  get new(): string {
    return this._translations.get('new');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Document details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Document details`
   */
  get edit(): string {
    return this._translations.get('edit');
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Documents`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `Documents`
   */
  get search(): string {
    return this._translations.get('search');
  }
}

export class I18n$Token {

  private _translations: Translations = new Translations('token');

  private _nested = {
    title: new I18n$Token$Title(),
    mobileTitle: new I18n$Token$MobileTitle(),
    action: new I18n$Token$Action(),
    status: new I18n$Token$Status()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.action.defaultValues = defaultValues['action'];
    this._nested.status.defaultValues = defaultValues['status'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.action.initialize(values['action']);
    this._nested.status.initialize(values['status']);
  }

  /**
   * Returns the value of translation message for key `value`.
   * Default value: `Value`
   */
  get value(): string {
    return this._translations.get('value');
  }

  /**
   * Returns the value of translation message for key `label`.
   * Default value: `Label`
   */
  get label(): string {
    return this._translations.get('label');
  }

  /**
   * Returns the value of translation message for key `activationDeadline`.
   * Default value: `Activation deadline`
   */
  get activationDeadline(): string {
    return this._translations.get('activationDeadline');
  }

  /**
   * Returns the value of translation message for key `noDeadline`.
   * Default value: `No deadline`
   */
  get noDeadline(): string {
    return this._translations.get('noDeadline');
  }

  /**
   * Returns the value of translation message for key `expiryDate`.
   * Default value: `Expiry date`
   */
  get expiryDate(): string {
    return this._translations.get('expiryDate');
  }

  /**
   * Returns the value of translation message for key `noExpiryDate`.
   * Default value: `Without expiry`
   */
  get noExpiryDate(): string {
    return this._translations.get('noExpiryDate');
  }

  /**
   * Returns the value of translation message for key `activationDate`.
   * Default value: `Activation date`
   */
  get activationDate(): string {
    return this._translations.get('activationDate');
  }

  /**
   * Returns the value of translation message for key `creationDate`.
   * Default value: `Creation date`
   */
  get creationDate(): string {
    return this._translations.get('creationDate');
  }

  /**
   * Returns the value of translation message for key `activationBeginDate`.
   * Default value: `Activation begin date`
   */
  get activationBeginDate(): string {
    return this._translations.get('activationBeginDate');
  }

  /**
   * Returns the value of translation message for key `activationEndDate`.
   * Default value: `Activation end date`
   */
  get activationEndDate(): string {
    return this._translations.get('activationEndDate');
  }

  /**
   * Returns the value of translation message for key `expiryBeginDate`.
   * Default value: `Expiry begin date`
   */
  get expiryBeginDate(): string {
    return this._translations.get('expiryBeginDate');
  }

  /**
   * Returns the value of translation message for key `expiryEndDate`.
   * Default value: `Expiry end date`
   */
  get expiryEndDate(): string {
    return this._translations.get('expiryEndDate');
  }

  /**
   * Returns the value of translation message for key `unassigned`.
   * Default value: `Unassigned`
   */
  get unassigned(): string {
    return this._translations.get('unassigned');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Token$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Token$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `action`.
   */
  get action(): I18n$Token$Action {
    return this._nested.action;
  }

  /**
   * Returns the nested accessor for translation messages in `status`.
   */
  get status(): I18n$Token$Status {
    return this._nested.status;
  }
}

export class I18n$Token$Title {

  private _translations: Translations = new Translations('token.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `new`.
   * Default value: `{0} details`
   */
  new(arg0: string | number): string {
    return this._translations.get('new', {
      arg0: arg0
    });
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `{0} details`
   */
  view(arg0: string | number): string {
    return this._translations.get('view', {
      arg0: arg0
    });
  }

  /**
   * Returns the value of translation message for key `assign`.
   * Default value: `Assign`
   */
  get assign(): string {
    return this._translations.get('assign');
  }
}

export class I18n$Token$MobileTitle {

  private _translations: Translations = new Translations('token.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `{0} details`
   */
  view(arg0: string | number): string {
    return this._translations.get('view', {
      arg0: arg0
    });
  }
}

export class I18n$Token$Action {

  private _translations: Translations = new Translations('token.action');

  private _nested = {
    done: new I18n$Token$Action$Done(),
    message: new I18n$Token$Action$Message()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.done.defaultValues = defaultValues['done'];
    this._nested.message.defaultValues = defaultValues['message'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.done.initialize(values['done']);
    this._nested.message.initialize(values['message']);
  }

  /**
   * Returns the value of translation message for key `activate`.
   * Default value: `Activate`
   */
  get activate(): string {
    return this._translations.get('activate');
  }

  /**
   * Returns the value of translation message for key `assign`.
   * Default value: `Assign`
   */
  get assign(): string {
    return this._translations.get('assign');
  }

  /**
   * Returns the value of translation message for key `block`.
   * Default value: `Block`
   */
  get block(): string {
    return this._translations.get('block');
  }

  /**
   * Returns the value of translation message for key `cancel`.
   * Default value: `Cancel`
   */
  get cancel(): string {
    return this._translations.get('cancel');
  }

  /**
   * Returns the value of translation message for key `changeDeadline`.
   * Default value: `Change deadline`
   */
  get changeDeadline(): string {
    return this._translations.get('changeDeadline');
  }

  /**
   * Returns the value of translation message for key `changeExpiry`.
   * Default value: `Change expiry`
   */
  get changeExpiry(): string {
    return this._translations.get('changeExpiry');
  }

  /**
   * Returns the value of translation message for key `unblock`.
   * Default value: `Unblock`
   */
  get unblock(): string {
    return this._translations.get('unblock');
  }

  /**
   * Returns the nested accessor for translation messages in `done`.
   */
  get done(): I18n$Token$Action$Done {
    return this._nested.done;
  }

  /**
   * Returns the nested accessor for translation messages in `message`.
   */
  get message(): I18n$Token$Action$Message {
    return this._nested.message;
  }
}

export class I18n$Token$Action$Done {

  private _translations: Translations = new Translations('token.action.done');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `activated`.
   * Default value: `The token was activated`
   */
  get activated(): string {
    return this._translations.get('activated');
  }

  /**
   * Returns the value of translation message for key `assigned`.
   * Default value: `The token was assigned`
   */
  get assigned(): string {
    return this._translations.get('assigned');
  }

  /**
   * Returns the value of translation message for key `blocked`.
   * Default value: `The token was blocked`
   */
  get blocked(): string {
    return this._translations.get('blocked');
  }

  /**
   * Returns the value of translation message for key `canceled`.
   * Default value: `The token was canceled`
   */
  get canceled(): string {
    return this._translations.get('canceled');
  }

  /**
   * Returns the value of translation message for key `created`.
   * Default value: `The token was created`
   */
  get created(): string {
    return this._translations.get('created');
  }

  /**
   * Returns the value of translation message for key `deadlineChanged`.
   * Default value: `The token deadline was changed`
   */
  get deadlineChanged(): string {
    return this._translations.get('deadlineChanged');
  }

  /**
   * Returns the value of translation message for key `expiryChanged`.
   * Default value: `The token expiry was changed`
   */
  get expiryChanged(): string {
    return this._translations.get('expiryChanged');
  }

  /**
   * Returns the value of translation message for key `unblocked`.
   * Default value: `The token was unblocked`
   */
  get unblocked(): string {
    return this._translations.get('unblocked');
  }
}

export class I18n$Token$Action$Message {

  private _translations: Translations = new Translations('token.action.message');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `cancel`.
   * Default value: `You are about to cancel the token. Be aware that this is a permanent action. Are you sure you want to change the token status to canceled?`
   */
  get cancel(): string {
    return this._translations.get('cancel');
  }
}

export class I18n$Token$Status {

  private _translations: Translations = new Translations('token.status');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `activationExpired`.
   * Default value: `Activation expired`
   */
  get activationExpired(): string {
    return this._translations.get('activationExpired');
  }

  /**
   * Returns the value of translation message for key `active`.
   * Default value: `Active`
   */
  get active(): string {
    return this._translations.get('active');
  }

  /**
   * Returns the value of translation message for key `blocked`.
   * Default value: `Blocked`
   */
  get blocked(): string {
    return this._translations.get('blocked');
  }

  /**
   * Returns the value of translation message for key `canceled`.
   * Default value: `Canceled`
   */
  get canceled(): string {
    return this._translations.get('canceled');
  }

  /**
   * Returns the value of translation message for key `expired`.
   * Default value: `Expired`
   */
  get expired(): string {
    return this._translations.get('expired');
  }

  /**
   * Returns the value of translation message for key `pending`.
   * Default value: `Pending activation`
   */
  get pending(): string {
    return this._translations.get('pending');
  }

  /**
   * Returns the value of translation message for key `unassigned`.
   * Default value: `Unassigned`
   */
  get unassigned(): string {
    return this._translations.get('unassigned');
  }
}

export class I18n$Reference {

  private _translations: Translations = new Translations('reference');

  private _nested = {
    count: new I18n$Reference$Count(),
    title: new I18n$Reference$Title(),
    mobileTitle: new I18n$Reference$MobileTitle(),
    direction: new I18n$Reference$Direction(),
    level: new I18n$Reference$Level()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.count.defaultValues = defaultValues['count'];
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.direction.defaultValues = defaultValues['direction'];
    this._nested.level.defaultValues = defaultValues['level'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.count.initialize(values['count']);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.direction.initialize(values['direction']);
    this._nested.level.initialize(values['level']);
  }

  /**
   * Returns the value of translation message for key `set`.
   * Default value: `Set reference`
   */
  get set(): string {
    return this._translations.get('set');
  }

  /**
   * Returns the value of translation message for key `referenceSet`.
   * Default value: `The reference has been given successfully`
   */
  get referenceSet(): string {
    return this._translations.get('referenceSet');
  }

  /**
   * Returns the value of translation message for key `from`.
   * Default value: `From`
   */
  get from(): string {
    return this._translations.get('from');
  }

  /**
   * Returns the value of translation message for key `to`.
   * Default value: `To`
   */
  get to(): string {
    return this._translations.get('to');
  }

  /**
   * Returns the value of translation message for key `notGiven`.
   * Default value: `Not given yet`
   */
  get notGiven(): string {
    return this._translations.get('notGiven');
  }

  /**
   * Returns the value of translation message for key `value`.
   * Default value: `Value`
   */
  get value(): string {
    return this._translations.get('value');
  }

  /**
   * Returns the value of translation message for key `allTime`.
   * Default value: `All time`
   */
  get allTime(): string {
    return this._translations.get('allTime');
  }

  /**
   * Returns the value of translation message for key `last30Days`.
   * Default value: `Last 30 days`
   */
  get last30Days(): string {
    return this._translations.get('last30Days');
  }

  /**
   * Returns the value of translation message for key `total`.
   * Default value: `Total`
   */
  get total(): string {
    return this._translations.get('total');
  }

  /**
   * Returns the value of translation message for key `percentagePositive`.
   * Default value: `Percentage positive`
   */
  get percentagePositive(): string {
    return this._translations.get('percentagePositive');
  }

  /**
   * Returns the nested accessor for translation messages in `count`.
   */
  get count(): I18n$Reference$Count {
    return this._nested.count;
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Reference$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Reference$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `direction`.
   */
  get direction(): I18n$Reference$Direction {
    return this._nested.direction;
  }

  /**
   * Returns the nested accessor for translation messages in `level`.
   */
  get level(): I18n$Reference$Level {
    return this._nested.level;
  }
}

export class I18n$Reference$Count {

  private _translations: Translations = new Translations('reference.count');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `single`.
   * Default value: `(1 reference)`
   */
  get single(): string {
    return this._translations.get('single');
  }

  /**
   * Returns the value of translation message for key `multi`.
   * Default value: `({count} references)`
   */
  multi(count: string | number): string {
    return this._translations.get('multi', {
      count: count
    });
  }
}

export class I18n$Reference$Title {

  private _translations: Translations = new Translations('reference.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `References`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Reference details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `set`.
   * Default value: `Set new reference`
   */
  get set(): string {
    return this._translations.get('set');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit given reference`
   */
  get edit(): string {
    return this._translations.get('edit');
  }
}

export class I18n$Reference$MobileTitle {

  private _translations: Translations = new Translations('reference.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `search`.
   * Default value: `References`
   */
  get search(): string {
    return this._translations.get('search');
  }

  /**
   * Returns the value of translation message for key `view`.
   * Default value: `Reference details`
   */
  get view(): string {
    return this._translations.get('view');
  }

  /**
   * Returns the value of translation message for key `set`.
   * Default value: `Set new reference`
   */
  get set(): string {
    return this._translations.get('set');
  }

  /**
   * Returns the value of translation message for key `edit`.
   * Default value: `Edit given reference`
   */
  get edit(): string {
    return this._translations.get('edit');
  }
}

export class I18n$Reference$Direction {

  private _translations: Translations = new Translations('reference.direction');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `direction`.
   * Default value: `Direction`
   */
  get direction(): string {
    return this._translations.get('direction');
  }

  /**
   * Returns the value of translation message for key `received`.
   * Default value: `Received`
   */
  get received(): string {
    return this._translations.get('received');
  }

  /**
   * Returns the value of translation message for key `given`.
   * Default value: `Given`
   */
  get given(): string {
    return this._translations.get('given');
  }
}

export class I18n$Reference$Level {

  private _translations: Translations = new Translations('reference.level');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `level`.
   * Default value: `Level`
   */
  get level(): string {
    return this._translations.get('level');
  }

  /**
   * Returns the value of translation message for key `bad`.
   * Default value: `Bad`
   */
  get bad(): string {
    return this._translations.get('bad');
  }

  /**
   * Returns the value of translation message for key `veryBad`.
   * Default value: `Very bad`
   */
  get veryBad(): string {
    return this._translations.get('veryBad');
  }

  /**
   * Returns the value of translation message for key `good`.
   * Default value: `Good`
   */
  get good(): string {
    return this._translations.get('good');
  }

  /**
   * Returns the value of translation message for key `veryGood`.
   * Default value: `Very good`
   */
  get veryGood(): string {
    return this._translations.get('veryGood');
  }

  /**
   * Returns the value of translation message for key `neutral`.
   * Default value: `Neutral`
   */
  get neutral(): string {
    return this._translations.get('neutral');
  }
}

export class I18n$Product {

  private _translations: Translations = new Translations('product');

  private _nested = {
    title: new I18n$Product$Title(),
    mobileTitle: new I18n$Product$MobileTitle(),
    assigned: new I18n$Product$Assigned(),
    kind: new I18n$Product$Kind()
  };

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
    this._nested.title.defaultValues = defaultValues['title'];
    this._nested.mobileTitle.defaultValues = defaultValues['mobileTitle'];
    this._nested.assigned.defaultValues = defaultValues['assigned'];
    this._nested.kind.defaultValues = defaultValues['kind'];
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
    this._nested.title.initialize(values['title']);
    this._nested.mobileTitle.initialize(values['mobileTitle']);
    this._nested.assigned.initialize(values['assigned']);
    this._nested.kind.initialize(values['kind']);
  }

  /**
   * Returns the value of translation message for key `assign`.
   * Default value: `Assign`
   */
  get assign(): string {
    return this._translations.get('assign');
  }

  /**
   * Returns the value of translation message for key `unassign`.
   * Default value: `Unassign`
   */
  get unassign(): string {
    return this._translations.get('unassign');
  }

  /**
   * Returns the value of translation message for key `assignIndividualProduct`.
   * Default value: `Assign individual product`
   */
  get assignIndividualProduct(): string {
    return this._translations.get('assignIndividualProduct');
  }

  /**
   * Returns the value of translation message for key `userAccount`.
   * Default value: `User account`
   */
  get userAccount(): string {
    return this._translations.get('userAccount');
  }

  /**
   * Returns the value of translation message for key `product`.
   * Default value: `Product`
   */
  get product(): string {
    return this._translations.get('product');
  }

  /**
   * Returns the value of translation message for key `action`.
   * Default value: `Action`
   */
  get action(): string {
    return this._translations.get('action');
  }

  /**
   * Returns the value of translation message for key `productAssigned`.
   * Default value: `The product was assigned to the user`
   */
  get productAssigned(): string {
    return this._translations.get('productAssigned');
  }

  /**
   * Returns the nested accessor for translation messages in `title`.
   */
  get title(): I18n$Product$Title {
    return this._nested.title;
  }

  /**
   * Returns the nested accessor for translation messages in `mobileTitle`.
   */
  get mobileTitle(): I18n$Product$MobileTitle {
    return this._nested.mobileTitle;
  }

  /**
   * Returns the nested accessor for translation messages in `assigned`.
   */
  get assigned(): I18n$Product$Assigned {
    return this._nested.assigned;
  }

  /**
   * Returns the nested accessor for translation messages in `kind`.
   */
  get kind(): I18n$Product$Kind {
    return this._nested.kind;
  }
}

export class I18n$Product$Title {

  private _translations: Translations = new Translations('product.title');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Assigned products`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Assigned products history`
   */
  get history(): string {
    return this._translations.get('history');
  }
}

export class I18n$Product$MobileTitle {

  private _translations: Translations = new Translations('product.mobileTitle');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `list`.
   * Default value: `Assigned products`
   */
  get list(): string {
    return this._translations.get('list');
  }

  /**
   * Returns the value of translation message for key `history`.
   * Default value: `Assigned products history`
   */
  get history(): string {
    return this._translations.get('history');
  }
}

export class I18n$Product$Assigned {

  private _translations: Translations = new Translations('product.assigned');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `individual`.
   * Default value: `Products assigned individually to user`
   */
  get individual(): string {
    return this._translations.get('individual');
  }

  /**
   * Returns the value of translation message for key `group`.
   * Default value: `Products assigned to user's group`
   */
  get group(): string {
    return this._translations.get('group');
  }

  /**
   * Returns the value of translation message for key `groupSet`.
   * Default value: `Products assigned to group set`
   */
  get groupSet(): string {
    return this._translations.get('groupSet');
  }
}

export class I18n$Product$Kind {

  private _translations: Translations = new Translations('product.kind');

  /**
   * Sets the default translations, that is, the values returned in case the specific
   * keys are not found.
   */
  set defaultValues(defaultValues: Object) {
    defaultValues = defaultValues || {};
    this._translations.defaultValues = defaultValues;
  }

  /**
   * Initializes the translation values.
   * @param values The translations values.
   */
  initialize(values: Object) {
    values = values || {};
    this._translations.initialize(values);
  }

  /**
   * Returns the value of translation message for key `administrator`.
   * Default value: `Administrator`
   */
  get administrator(): string {
    return this._translations.get('administrator');
  }

  /**
   * Returns the value of translation message for key `broker`.
   * Default value: `Broker`
   */
  get broker(): string {
    return this._translations.get('broker');
  }

  /**
   * Returns the value of translation message for key `member`.
   * Default value: `Member`
   */
  get member(): string {
    return this._translations.get('member');
  }
}

