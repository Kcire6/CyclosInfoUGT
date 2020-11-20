/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AccountBalanceHistoryResult } from '../models/account-balance-history-result';
import { AccountHistoryResult } from '../models/account-history-result';
import { AccountWithHistoryStatus } from '../models/account-with-history-status';
import { AccountWithStatus } from '../models/account-with-status';
import { DataForAccountHistory } from '../models/data-for-account-history';
import { DataForUserBalancesSearch } from '../models/data-for-user-balances-search';
import { TimeFieldEnum } from '../models/time-field-enum';
import { TransOrderByEnum } from '../models/trans-order-by-enum';
import { TransferDirectionEnum } from '../models/transfer-direction-enum';
import { TransferKind } from '../models/transfer-kind';
import { UserAddressResultEnum } from '../models/user-address-result-enum';
import { UserStatusEnum } from '../models/user-status-enum';
import { UserWithBalanceResult } from '../models/user-with-balance-result';
import { UsersWithBalanceOrderByEnum } from '../models/users-with-balance-order-by-enum';
import { UsersWithBalanceSummary } from '../models/users-with-balance-summary';


/**
 * Provides access to account information, such as the status (balance, credit limit and so on) and account history (list of balance transfers between accounts).
 */
@Injectable({
  providedIn: 'root',
})
export class AccountsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listAccountsByOwner
   */
  static readonly ListAccountsByOwnerPath = '/{owner}/accounts';

  /**
   * Lists accounts of the given owner with their statuses.
   *
   * Lists all visible accounts of the given user, or system accounts if the owner 'system' is used. Each account has status information, like the current balance, avaliable balance and so on. However, the returned data depend on the configuration, in the `Account status indicators` option, which is used to limit the amount of data returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAccountsByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAccountsByOwner$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

  }): Observable<StrictHttpResponse<Array<AccountWithStatus>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ListAccountsByOwnerPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AccountWithStatus>>;
      })
    );
  }

  /**
   * Lists accounts of the given owner with their statuses.
   *
   * Lists all visible accounts of the given user, or system accounts if the owner 'system' is used. Each account has status information, like the current balance, avaliable balance and so on. However, the returned data depend on the configuration, in the `Account status indicators` option, which is used to limit the amount of data returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listAccountsByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAccountsByOwner(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

  }): Observable<Array<AccountWithStatus>> {

    return this.listAccountsByOwner$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AccountWithStatus>>) => r.body as Array<AccountWithStatus>)
    );
  }

  /**
   * Path part for operation getAccountStatusByOwnerAndType
   */
  static readonly GetAccountStatusByOwnerAndTypePath = '/{owner}/accounts/{accountType}';

  /**
   * Returns the status of an account by owner and type.
   *
   * Returns the account status for a specific account. The account type may be either the identifier or internal name. The status will contain both instant status information, that is, the same fields as `AccountStatus`, plus status that depend on the input parameters, such as those defined in `AccountWithHistoryStatus`. The actual data inside the result depend on the configuration, in the `Account status indicators` option, which is used to limit the amount of data returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountStatusByOwnerAndType()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountStatusByOwnerAndType$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    broker?: string;

    /**
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    brokers?: Array<string>;

    /**
     * Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.
     */
    by?: string;

    /**
     * Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    channels?: Array<string>;

    /**
     * When set to either &#x60;true&#x60; will only return transfers that were charged-back. When set to &#x60;false&#x60;, will only return transfers that were not charged-back. When left blank will not filter by this creterion.
     */
    chargedBack?: boolean;

    /**
     * Transaction custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;rank:bronze|silver,documentDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;rank&#x60; is either &#x60;bronze&#x60; or &#x60;silver&#x60;, and whose &#x60;documentDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;documentDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a partial-match search using the dynamic value label. In this case a single value, prefixed or enclosed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60; or &#x60;customFields&#x3D;dynamic:&#x27;business&#x27;&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The description to search for.
     */
    description?: string;
    direction?: TransferDirectionEnum;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Flag indicating whether to include only transfers by the current access client.
     */
    fromCurrentAccessClient?: boolean;

    /**
     * Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    groups?: Array<string>;

    /**
     * Flag indicating whether to include or not the generated transfer. Only valid if there is at least one access client specified. For example if a &#x60;ticket&#x60; or &#x60;paymentRequest&#x60; was processed then a new transfer will be generated.
     */
    includeGeneratedByAccessClient?: boolean;

    /**
     * The kind of transfers to return
     */
    kinds?: Array<TransferKind>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, &#x60;loan.open&#x60; would be a valid internal name.
     */
    statuses?: Array<string>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Use &#x60;kinds&#x60; instead.
     */
    transferKinds?: Array<TransferKind>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<StrictHttpResponse<AccountWithHistoryStatus>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.GetAccountStatusByOwnerAndTypePath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('accountType', params.accountType, {});
      rb.query('fields', params.fields, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('chargedBack', params.chargedBack, {});
      rb.query('customFields', params.customFields, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('description', params.description, {});
      rb.query('direction', params.direction, {});
      rb.query('excludedIds', params.excludedIds, {});
      rb.query('fromCurrentAccessClient', params.fromCurrentAccessClient, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGeneratedByAccessClient', params.includeGeneratedByAccessClient, {});
      rb.query('kinds', params.kinds, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('transactionNumber', params.transactionNumber, {});
      rb.query('transferFilters', params.transferFilters, {});
      rb.query('transferKinds', params.transferKinds, {});
      rb.query('transferTypes', params.transferTypes, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountWithHistoryStatus>;
      })
    );
  }

  /**
   * Returns the status of an account by owner and type.
   *
   * Returns the account status for a specific account. The account type may be either the identifier or internal name. The status will contain both instant status information, that is, the same fields as `AccountStatus`, plus status that depend on the input parameters, such as those defined in `AccountWithHistoryStatus`. The actual data inside the result depend on the configuration, in the `Account status indicators` option, which is used to limit the amount of data returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAccountStatusByOwnerAndType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountStatusByOwnerAndType(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    broker?: string;

    /**
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    brokers?: Array<string>;

    /**
     * Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.
     */
    by?: string;

    /**
     * Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    channels?: Array<string>;

    /**
     * When set to either &#x60;true&#x60; will only return transfers that were charged-back. When set to &#x60;false&#x60;, will only return transfers that were not charged-back. When left blank will not filter by this creterion.
     */
    chargedBack?: boolean;

    /**
     * Transaction custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;rank:bronze|silver,documentDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;rank&#x60; is either &#x60;bronze&#x60; or &#x60;silver&#x60;, and whose &#x60;documentDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;documentDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a partial-match search using the dynamic value label. In this case a single value, prefixed or enclosed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60; or &#x60;customFields&#x3D;dynamic:&#x27;business&#x27;&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The description to search for.
     */
    description?: string;
    direction?: TransferDirectionEnum;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Flag indicating whether to include only transfers by the current access client.
     */
    fromCurrentAccessClient?: boolean;

    /**
     * Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    groups?: Array<string>;

    /**
     * Flag indicating whether to include or not the generated transfer. Only valid if there is at least one access client specified. For example if a &#x60;ticket&#x60; or &#x60;paymentRequest&#x60; was processed then a new transfer will be generated.
     */
    includeGeneratedByAccessClient?: boolean;

    /**
     * The kind of transfers to return
     */
    kinds?: Array<TransferKind>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, &#x60;loan.open&#x60; would be a valid internal name.
     */
    statuses?: Array<string>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Use &#x60;kinds&#x60; instead.
     */
    transferKinds?: Array<TransferKind>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<AccountWithHistoryStatus> {

    return this.getAccountStatusByOwnerAndType$Response(params).pipe(
      map((r: StrictHttpResponse<AccountWithHistoryStatus>) => r.body as AccountWithHistoryStatus)
    );
  }

  /**
   * Path part for operation getAccountHistoryDataByOwnerAndType
   */
  static readonly GetAccountHistoryDataByOwnerAndTypePath = '/{owner}/accounts/{accountType}/data-for-history';

  /**
   * Returns data for searching an account history by owner and type.
   *
   * Returns configuration data for searching entries in a specific account history, as well as status information for that account information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountHistoryDataByOwnerAndType()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountHistoryDataByOwnerAndType$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DataForAccountHistory>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.GetAccountHistoryDataByOwnerAndTypePath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('accountType', params.accountType, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForAccountHistory>;
      })
    );
  }

  /**
   * Returns data for searching an account history by owner and type.
   *
   * Returns configuration data for searching entries in a specific account history, as well as status information for that account information.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAccountHistoryDataByOwnerAndType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountHistoryDataByOwnerAndType(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DataForAccountHistory> {

    return this.getAccountHistoryDataByOwnerAndType$Response(params).pipe(
      map((r: StrictHttpResponse<DataForAccountHistory>) => r.body as DataForAccountHistory)
    );
  }

  /**
   * Path part for operation searchAccountHistory
   */
  static readonly SearchAccountHistoryPath = '/{owner}/accounts/{accountType}/history';

  /**
   * Search an account history.
   *
   * Returns a page of account history entries for a specific account, according to the given criteria
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchAccountHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAccountHistory$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    broker?: string;

    /**
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    brokers?: Array<string>;

    /**
     * Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.
     */
    by?: string;

    /**
     * Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    channels?: Array<string>;

    /**
     * When set to either &#x60;true&#x60; will only return transfers that were charged-back. When set to &#x60;false&#x60;, will only return transfers that were not charged-back. When left blank will not filter by this creterion.
     */
    chargedBack?: boolean;

    /**
     * Transaction custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;rank:bronze|silver,documentDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;rank&#x60; is either &#x60;bronze&#x60; or &#x60;silver&#x60;, and whose &#x60;documentDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;documentDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a partial-match search using the dynamic value label. In this case a single value, prefixed or enclosed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60; or &#x60;customFields&#x3D;dynamic:&#x27;business&#x27;&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The description to search for.
     */
    description?: string;
    direction?: TransferDirectionEnum;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Flag indicating whether to include only transfers by the current access client.
     */
    fromCurrentAccessClient?: boolean;

    /**
     * Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    groups?: Array<string>;

    /**
     * Flag indicating whether to include or not the generated transfer. Only valid if there is at least one access client specified. For example if a &#x60;ticket&#x60; or &#x60;paymentRequest&#x60; was processed then a new transfer will be generated.
     */
    includeGeneratedByAccessClient?: boolean;

    /**
     * The kind of transfers to return
     */
    kinds?: Array<TransferKind>;
    orderBy?: TransOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, &#x60;loan.open&#x60; would be a valid internal name.
     */
    statuses?: Array<string>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Use &#x60;kinds&#x60; instead.
     */
    transferKinds?: Array<TransferKind>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<AccountHistoryResult>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.SearchAccountHistoryPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('accountType', params.accountType, {});
      rb.query('fields', params.fields, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('chargedBack', params.chargedBack, {});
      rb.query('customFields', params.customFields, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('description', params.description, {});
      rb.query('direction', params.direction, {});
      rb.query('excludedIds', params.excludedIds, {});
      rb.query('fromCurrentAccessClient', params.fromCurrentAccessClient, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGeneratedByAccessClient', params.includeGeneratedByAccessClient, {});
      rb.query('kinds', params.kinds, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('transactionNumber', params.transactionNumber, {});
      rb.query('transferFilters', params.transferFilters, {});
      rb.query('transferKinds', params.transferKinds, {});
      rb.query('transferTypes', params.transferTypes, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AccountHistoryResult>>;
      })
    );
  }

  /**
   * Search an account history.
   *
   * Returns a page of account history entries for a specific account, according to the given criteria
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchAccountHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAccountHistory(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    broker?: string;

    /**
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    brokers?: Array<string>;

    /**
     * Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.
     */
    by?: string;

    /**
     * Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    channels?: Array<string>;

    /**
     * When set to either &#x60;true&#x60; will only return transfers that were charged-back. When set to &#x60;false&#x60;, will only return transfers that were not charged-back. When left blank will not filter by this creterion.
     */
    chargedBack?: boolean;

    /**
     * Transaction custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;rank:bronze|silver,documentDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;rank&#x60; is either &#x60;bronze&#x60; or &#x60;silver&#x60;, and whose &#x60;documentDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;documentDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a partial-match search using the dynamic value label. In this case a single value, prefixed or enclosed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60; or &#x60;customFields&#x3D;dynamic:&#x27;business&#x27;&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The description to search for.
     */
    description?: string;
    direction?: TransferDirectionEnum;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Flag indicating whether to include only transfers by the current access client.
     */
    fromCurrentAccessClient?: boolean;

    /**
     * Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    groups?: Array<string>;

    /**
     * Flag indicating whether to include or not the generated transfer. Only valid if there is at least one access client specified. For example if a &#x60;ticket&#x60; or &#x60;paymentRequest&#x60; was processed then a new transfer will be generated.
     */
    includeGeneratedByAccessClient?: boolean;

    /**
     * The kind of transfers to return
     */
    kinds?: Array<TransferKind>;
    orderBy?: TransOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, &#x60;loan.open&#x60; would be a valid internal name.
     */
    statuses?: Array<string>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Use &#x60;kinds&#x60; instead.
     */
    transferKinds?: Array<TransferKind>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<Array<AccountHistoryResult>> {

    return this.searchAccountHistory$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AccountHistoryResult>>) => r.body as Array<AccountHistoryResult>)
    );
  }

  /**
   * Path part for operation exportAccountHistory
   */
  static readonly ExportAccountHistoryPath = '/{owner}/accounts/{accountType}/export/{format}';

  /**
   * Exports the accounts history entries as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /{owner}/accounts/{accountType}/data-for-history`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportAccountHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAccountHistory$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    broker?: string;

    /**
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    brokers?: Array<string>;

    /**
     * Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.
     */
    by?: string;

    /**
     * Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    channels?: Array<string>;

    /**
     * When set to either &#x60;true&#x60; will only return transfers that were charged-back. When set to &#x60;false&#x60;, will only return transfers that were not charged-back. When left blank will not filter by this creterion.
     */
    chargedBack?: boolean;

    /**
     * Transaction custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;rank:bronze|silver,documentDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;rank&#x60; is either &#x60;bronze&#x60; or &#x60;silver&#x60;, and whose &#x60;documentDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;documentDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a partial-match search using the dynamic value label. In this case a single value, prefixed or enclosed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60; or &#x60;customFields&#x3D;dynamic:&#x27;business&#x27;&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The description to search for.
     */
    description?: string;
    direction?: TransferDirectionEnum;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Flag indicating whether to include only transfers by the current access client.
     */
    fromCurrentAccessClient?: boolean;

    /**
     * Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    groups?: Array<string>;

    /**
     * Flag indicating whether to include or not the generated transfer. Only valid if there is at least one access client specified. For example if a &#x60;ticket&#x60; or &#x60;paymentRequest&#x60; was processed then a new transfer will be generated.
     */
    includeGeneratedByAccessClient?: boolean;

    /**
     * The kind of transfers to return
     */
    kinds?: Array<TransferKind>;
    orderBy?: TransOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, &#x60;loan.open&#x60; would be a valid internal name.
     */
    statuses?: Array<string>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Use &#x60;kinds&#x60; instead.
     */
    transferKinds?: Array<TransferKind>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ExportAccountHistoryPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('accountType', params.accountType, {});
      rb.path('format', params.format, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('chargedBack', params.chargedBack, {});
      rb.query('customFields', params.customFields, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('description', params.description, {});
      rb.query('direction', params.direction, {});
      rb.query('excludedIds', params.excludedIds, {});
      rb.query('fromCurrentAccessClient', params.fromCurrentAccessClient, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGeneratedByAccessClient', params.includeGeneratedByAccessClient, {});
      rb.query('kinds', params.kinds, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('transactionNumber', params.transactionNumber, {});
      rb.query('transferFilters', params.transferFilters, {});
      rb.query('transferKinds', params.transferKinds, {});
      rb.query('transferTypes', params.transferTypes, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Exports the accounts history entries as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /{owner}/accounts/{accountType}/data-for-history`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportAccountHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAccountHistory(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    broker?: string;

    /**
     * Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.
     */
    brokers?: Array<string>;

    /**
     * Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.
     */
    by?: string;

    /**
     * Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    channels?: Array<string>;

    /**
     * When set to either &#x60;true&#x60; will only return transfers that were charged-back. When set to &#x60;false&#x60;, will only return transfers that were not charged-back. When left blank will not filter by this creterion.
     */
    chargedBack?: boolean;

    /**
     * Transaction custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;rank:bronze|silver,documentDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;rank&#x60; is either &#x60;bronze&#x60; or &#x60;silver&#x60;, and whose &#x60;documentDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;documentDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a partial-match search using the dynamic value label. In this case a single value, prefixed or enclosed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60; or &#x60;customFields&#x3D;dynamic:&#x27;business&#x27;&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The description to search for.
     */
    description?: string;
    direction?: TransferDirectionEnum;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Flag indicating whether to include only transfers by the current access client.
     */
    fromCurrentAccessClient?: boolean;

    /**
     * Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.
     */
    groups?: Array<string>;

    /**
     * Flag indicating whether to include or not the generated transfer. Only valid if there is at least one access client specified. For example if a &#x60;ticket&#x60; or &#x60;paymentRequest&#x60; was processed then a new transfer will be generated.
     */
    includeGeneratedByAccessClient?: boolean;

    /**
     * The kind of transfers to return
     */
    kinds?: Array<TransferKind>;
    orderBy?: TransOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, &#x60;loan.open&#x60; would be a valid internal name.
     */
    statuses?: Array<string>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Use &#x60;kinds&#x60; instead.
     */
    transferKinds?: Array<TransferKind>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<Blob> {

    return this.exportAccountHistory$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getAccountBalanceHistory
   */
  static readonly GetAccountBalanceHistoryPath = '/{owner}/accounts/{accountType}/balances-history';

  /**
   * Returns the account balances over time.
   *
   * Receives a period and an interval, returning the balance over each corresponding date. The maximum number of data points is 60, so it is possible to get the balances per day over 2 months. For larger periods, use weeks or months. When no period is given, assumes the beginning of current year or the account creation date, whichever is newer. When no interval is given, one is assumed. Also returns status of the given account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountBalanceHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalanceHistory$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The time unit for the data point interval
     */
    intervalUnit?: TimeFieldEnum;

    /**
     * A data point every X units. For example, it is possible to request the balance every 3 days. Defaults to 1.
     */
    intervalCount?: number;

  }): Observable<StrictHttpResponse<AccountBalanceHistoryResult>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.GetAccountBalanceHistoryPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('accountType', params.accountType, {});
      rb.query('fields', params.fields, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('intervalUnit', params.intervalUnit, {});
      rb.query('intervalCount', params.intervalCount, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountBalanceHistoryResult>;
      })
    );
  }

  /**
   * Returns the account balances over time.
   *
   * Receives a period and an interval, returning the balance over each corresponding date. The maximum number of data points is 60, so it is possible to get the balances per day over 2 months. For larger periods, use weeks or months. When no period is given, assumes the beginning of current year or the account creation date, whichever is newer. When no interval is given, one is assumed. Also returns status of the given account
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAccountBalanceHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalanceHistory(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * The time unit for the data point interval
     */
    intervalUnit?: TimeFieldEnum;

    /**
     * A data point every X units. For example, it is possible to request the balance every 3 days. Defaults to 1.
     */
    intervalCount?: number;

  }): Observable<AccountBalanceHistoryResult> {

    return this.getAccountBalanceHistory$Response(params).pipe(
      map((r: StrictHttpResponse<AccountBalanceHistoryResult>) => r.body as AccountBalanceHistoryResult)
    );
  }

  /**
   * Path part for operation getUserBalancesData
   */
  static readonly GetUserBalancesDataPath = '/accounts/data-for-user-balances';

  /**
   * Returns data for searching users together with their balances.
   *
   * Returns configuration data for searching users together with their balances. The account types are returned, and the account type needs to be passed in the other `user-balances` operations.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserBalancesData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserBalancesData$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DataForUserBalancesSearch>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.GetUserBalancesDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForUserBalancesSearch>;
      })
    );
  }

  /**
   * Returns data for searching users together with their balances.
   *
   * Returns configuration data for searching users together with their balances. The account types are returned, and the account type needs to be passed in the other `user-balances` operations.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserBalancesData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserBalancesData(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DataForUserBalancesSearch> {

    return this.getUserBalancesData$Response(params).pipe(
      map((r: StrictHttpResponse<DataForUserBalancesSearch>) => r.body as DataForUserBalancesSearch)
    );
  }

  /**
   * Path part for operation getUserBalancesSummary
   */
  static readonly GetUserBalancesSummaryPath = '/accounts/{accountType}/user-balances/summary';

  /**
   * Returns summarized information for the user balances search.
   *
   * Returns summaries for each balance level (if ranges are defined in either account type or filter), as well as the total summary.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserBalancesSummary()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserBalancesSummary$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The account type
     */
    accountType: string;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    balanceRange?: Array<number>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.
     */
    includeGroup?: boolean;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.
     */
    includeGroupSet?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    lastLoginPeriod?: Array<string>;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.
     */
    mainBrokerOnly?: boolean;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;

    /**
     * An array with 2 elements, describing the lower and upper medium balance bounds. Both of them need to be set as 2 element in the array, or it won&#x27;t be considered.
     */
    mediumBalanceRange?: Array<number>;

    /**
     * The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    negativeSincePeriod?: Array<string>;

    /**
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * Either id or internal names of products the users should have assigned. Ignored if the authenticated user isn&#x27;t an administrator.
     */
    products?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, the list specifid in &#x60;products&#x60; will only match users with those products assigned individually, not via group or group set. When set to &#x60;false&#x60; (default), the products will match any level (individual, group or group set).
     */
    productsIndividuallyAssigned?: boolean;

    /**
     * User profile fields, both basic (full name, login name, phone, e-mail, etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by &#x60;:&#x60; (colon). For example, &#x60;profileFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, &#x60;profileFields&#x3D;field1:valueA|valueB&#x60;. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x27;rank&#x27; is either bronze or silver, and whose &#x27;birthDate&#x27; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;profileFields&#x3D;birthDate:|2001-12-31&#x60;.
     * The basic profile fields have one of the following identifiers:
     * - &#x60;name&#x60; or &#x60;fullName&#x60;: Full name; - &#x60;username&#x60;, &#x60;loginName&#x60; or &#x60;login&#x60;: Login name; - &#x60;email&#x60;: E-mail; - &#x60;phone&#x60;: Phone; - &#x60;accountNumber&#x60;, &#x60;account&#x60;: Account number; - &#x60;image&#x60;: Image (accepts a boolean value, indicating that either it is required that users either have images or not).
     *
     * If address is an allowed profile field for search, specific address fields may be searched. The allowed ones are normally returned as the &#x60;addressFieldsInSearch&#x60; field in the corresponding result from a data-for-search request. The specific address fields are:
     * - &#x60;address&#x60;: Searches on any address field (not a specific field); - &#x60;address.address&#x60;: Searches on the fields that represent the street address, which are &#x60;addressLine1&#x60;, &#x60;addressLine2&#x60;, &#x60;street&#x60;, &#x60;buildingNumber&#x60; and &#x60;complement&#x60;. Note that normally only a subset of them should be enabled in the configuration (either line 1 / 2 or street + number + complement);
     * - &#x60;address.zip&#x60;: Searches for matching zip (postal) code; - &#x60;address.poBox&#x60;: Searches for matching postal box; - &#x60;address.neighborhood&#x60;: Searches by neighborhood; - &#x60;address.city&#x60;: Searches by city; - &#x60;address.region&#x60;: Searches by region (or state); - &#x60;address.country&#x60;: Searches by ISO 3166-1 alpha-2 country code. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;profileFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;profileFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    profileFields?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<UserStatusEnum>;

    /**
     * Indicated the users to be excluded from the result
     */
    usersToExclude?: Array<string>;

    /**
     * Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.
     */
    usersToInclude?: Array<string>;

  }): Observable<StrictHttpResponse<UsersWithBalanceSummary>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.GetUserBalancesSummaryPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('acceptedAgreements', params.acceptedAgreements, {});
      rb.path('accountType', params.accountType, {});
      rb.query('activationPeriod', params.activationPeriod, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('balanceRange', params.balanceRange, {});
      rb.query('brokers', params.brokers, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGroup', params.includeGroup, {});
      rb.query('includeGroupSet', params.includeGroupSet, {});
      rb.query('keywords', params.keywords, {});
      rb.query('lastLoginPeriod', params.lastLoginPeriod, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('mainBrokerOnly', params.mainBrokerOnly, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('mediumBalanceRange', params.mediumBalanceRange, {});
      rb.query('negativeSincePeriod', params.negativeSincePeriod, {});
      rb.query('notAcceptedAgreements', params.notAcceptedAgreements, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('products', params.products, {});
      rb.query('productsIndividuallyAssigned', params.productsIndividuallyAssigned, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('usersToExclude', params.usersToExclude, {});
      rb.query('usersToInclude', params.usersToInclude, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsersWithBalanceSummary>;
      })
    );
  }

  /**
   * Returns summarized information for the user balances search.
   *
   * Returns summaries for each balance level (if ranges are defined in either account type or filter), as well as the total summary.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserBalancesSummary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserBalancesSummary(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The account type
     */
    accountType: string;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    balanceRange?: Array<number>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.
     */
    includeGroup?: boolean;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.
     */
    includeGroupSet?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    lastLoginPeriod?: Array<string>;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.
     */
    mainBrokerOnly?: boolean;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;

    /**
     * An array with 2 elements, describing the lower and upper medium balance bounds. Both of them need to be set as 2 element in the array, or it won&#x27;t be considered.
     */
    mediumBalanceRange?: Array<number>;

    /**
     * The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    negativeSincePeriod?: Array<string>;

    /**
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * Either id or internal names of products the users should have assigned. Ignored if the authenticated user isn&#x27;t an administrator.
     */
    products?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, the list specifid in &#x60;products&#x60; will only match users with those products assigned individually, not via group or group set. When set to &#x60;false&#x60; (default), the products will match any level (individual, group or group set).
     */
    productsIndividuallyAssigned?: boolean;

    /**
     * User profile fields, both basic (full name, login name, phone, e-mail, etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by &#x60;:&#x60; (colon). For example, &#x60;profileFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, &#x60;profileFields&#x3D;field1:valueA|valueB&#x60;. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x27;rank&#x27; is either bronze or silver, and whose &#x27;birthDate&#x27; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;profileFields&#x3D;birthDate:|2001-12-31&#x60;.
     * The basic profile fields have one of the following identifiers:
     * - &#x60;name&#x60; or &#x60;fullName&#x60;: Full name; - &#x60;username&#x60;, &#x60;loginName&#x60; or &#x60;login&#x60;: Login name; - &#x60;email&#x60;: E-mail; - &#x60;phone&#x60;: Phone; - &#x60;accountNumber&#x60;, &#x60;account&#x60;: Account number; - &#x60;image&#x60;: Image (accepts a boolean value, indicating that either it is required that users either have images or not).
     *
     * If address is an allowed profile field for search, specific address fields may be searched. The allowed ones are normally returned as the &#x60;addressFieldsInSearch&#x60; field in the corresponding result from a data-for-search request. The specific address fields are:
     * - &#x60;address&#x60;: Searches on any address field (not a specific field); - &#x60;address.address&#x60;: Searches on the fields that represent the street address, which are &#x60;addressLine1&#x60;, &#x60;addressLine2&#x60;, &#x60;street&#x60;, &#x60;buildingNumber&#x60; and &#x60;complement&#x60;. Note that normally only a subset of them should be enabled in the configuration (either line 1 / 2 or street + number + complement);
     * - &#x60;address.zip&#x60;: Searches for matching zip (postal) code; - &#x60;address.poBox&#x60;: Searches for matching postal box; - &#x60;address.neighborhood&#x60;: Searches by neighborhood; - &#x60;address.city&#x60;: Searches by city; - &#x60;address.region&#x60;: Searches by region (or state); - &#x60;address.country&#x60;: Searches by ISO 3166-1 alpha-2 country code. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;profileFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;profileFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    profileFields?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<UserStatusEnum>;

    /**
     * Indicated the users to be excluded from the result
     */
    usersToExclude?: Array<string>;

    /**
     * Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.
     */
    usersToInclude?: Array<string>;

  }): Observable<UsersWithBalanceSummary> {

    return this.getUserBalancesSummary$Response(params).pipe(
      map((r: StrictHttpResponse<UsersWithBalanceSummary>) => r.body as UsersWithBalanceSummary)
    );
  }

  /**
   * Path part for operation searchUsersWithBalances
   */
  static readonly SearchUsersWithBalancesPath = '/accounts/{accountType}/user-balances';

  /**
   * Searches for users together with balance information.
   *
   * Returns the users, together with their balances
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUsersWithBalances()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsersWithBalances$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The account type
     */
    accountType: string;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    balanceRange?: Array<number>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.
     */
    includeGroup?: boolean;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.
     */
    includeGroupSet?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    lastLoginPeriod?: Array<string>;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.
     */
    mainBrokerOnly?: boolean;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;

    /**
     * An array with 2 elements, describing the lower and upper medium balance bounds. Both of them need to be set as 2 element in the array, or it won&#x27;t be considered.
     */
    mediumBalanceRange?: Array<number>;

    /**
     * The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    negativeSincePeriod?: Array<string>;

    /**
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UsersWithBalanceOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * Either id or internal names of products the users should have assigned. Ignored if the authenticated user isn&#x27;t an administrator.
     */
    products?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, the list specifid in &#x60;products&#x60; will only match users with those products assigned individually, not via group or group set. When set to &#x60;false&#x60; (default), the products will match any level (individual, group or group set).
     */
    productsIndividuallyAssigned?: boolean;

    /**
     * User profile fields, both basic (full name, login name, phone, e-mail, etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by &#x60;:&#x60; (colon). For example, &#x60;profileFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, &#x60;profileFields&#x3D;field1:valueA|valueB&#x60;. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x27;rank&#x27; is either bronze or silver, and whose &#x27;birthDate&#x27; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;profileFields&#x3D;birthDate:|2001-12-31&#x60;.
     * The basic profile fields have one of the following identifiers:
     * - &#x60;name&#x60; or &#x60;fullName&#x60;: Full name; - &#x60;username&#x60;, &#x60;loginName&#x60; or &#x60;login&#x60;: Login name; - &#x60;email&#x60;: E-mail; - &#x60;phone&#x60;: Phone; - &#x60;accountNumber&#x60;, &#x60;account&#x60;: Account number; - &#x60;image&#x60;: Image (accepts a boolean value, indicating that either it is required that users either have images or not).
     *
     * If address is an allowed profile field for search, specific address fields may be searched. The allowed ones are normally returned as the &#x60;addressFieldsInSearch&#x60; field in the corresponding result from a data-for-search request. The specific address fields are:
     * - &#x60;address&#x60;: Searches on any address field (not a specific field); - &#x60;address.address&#x60;: Searches on the fields that represent the street address, which are &#x60;addressLine1&#x60;, &#x60;addressLine2&#x60;, &#x60;street&#x60;, &#x60;buildingNumber&#x60; and &#x60;complement&#x60;. Note that normally only a subset of them should be enabled in the configuration (either line 1 / 2 or street + number + complement);
     * - &#x60;address.zip&#x60;: Searches for matching zip (postal) code; - &#x60;address.poBox&#x60;: Searches for matching postal box; - &#x60;address.neighborhood&#x60;: Searches by neighborhood; - &#x60;address.city&#x60;: Searches by city; - &#x60;address.region&#x60;: Searches by region (or state); - &#x60;address.country&#x60;: Searches by ISO 3166-1 alpha-2 country code. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;profileFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;profileFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    profileFields?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<UserStatusEnum>;

    /**
     * Indicated the users to be excluded from the result
     */
    usersToExclude?: Array<string>;

    /**
     * Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.
     */
    usersToInclude?: Array<string>;

  }): Observable<StrictHttpResponse<Array<UserWithBalanceResult>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.SearchUsersWithBalancesPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('acceptedAgreements', params.acceptedAgreements, {});
      rb.path('accountType', params.accountType, {});
      rb.query('activationPeriod', params.activationPeriod, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('balanceRange', params.balanceRange, {});
      rb.query('brokers', params.brokers, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGroup', params.includeGroup, {});
      rb.query('includeGroupSet', params.includeGroupSet, {});
      rb.query('keywords', params.keywords, {});
      rb.query('lastLoginPeriod', params.lastLoginPeriod, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('mainBrokerOnly', params.mainBrokerOnly, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('mediumBalanceRange', params.mediumBalanceRange, {});
      rb.query('negativeSincePeriod', params.negativeSincePeriod, {});
      rb.query('notAcceptedAgreements', params.notAcceptedAgreements, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('products', params.products, {});
      rb.query('productsIndividuallyAssigned', params.productsIndividuallyAssigned, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('usersToExclude', params.usersToExclude, {});
      rb.query('usersToInclude', params.usersToInclude, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserWithBalanceResult>>;
      })
    );
  }

  /**
   * Searches for users together with balance information.
   *
   * Returns the users, together with their balances
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUsersWithBalances$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsersWithBalances(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The account type
     */
    accountType: string;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    balanceRange?: Array<number>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.
     */
    includeGroup?: boolean;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.
     */
    includeGroupSet?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    lastLoginPeriod?: Array<string>;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.
     */
    mainBrokerOnly?: boolean;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;

    /**
     * An array with 2 elements, describing the lower and upper medium balance bounds. Both of them need to be set as 2 element in the array, or it won&#x27;t be considered.
     */
    mediumBalanceRange?: Array<number>;

    /**
     * The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    negativeSincePeriod?: Array<string>;

    /**
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UsersWithBalanceOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * Either id or internal names of products the users should have assigned. Ignored if the authenticated user isn&#x27;t an administrator.
     */
    products?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, the list specifid in &#x60;products&#x60; will only match users with those products assigned individually, not via group or group set. When set to &#x60;false&#x60; (default), the products will match any level (individual, group or group set).
     */
    productsIndividuallyAssigned?: boolean;

    /**
     * User profile fields, both basic (full name, login name, phone, e-mail, etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by &#x60;:&#x60; (colon). For example, &#x60;profileFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, &#x60;profileFields&#x3D;field1:valueA|valueB&#x60;. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x27;rank&#x27; is either bronze or silver, and whose &#x27;birthDate&#x27; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;profileFields&#x3D;birthDate:|2001-12-31&#x60;.
     * The basic profile fields have one of the following identifiers:
     * - &#x60;name&#x60; or &#x60;fullName&#x60;: Full name; - &#x60;username&#x60;, &#x60;loginName&#x60; or &#x60;login&#x60;: Login name; - &#x60;email&#x60;: E-mail; - &#x60;phone&#x60;: Phone; - &#x60;accountNumber&#x60;, &#x60;account&#x60;: Account number; - &#x60;image&#x60;: Image (accepts a boolean value, indicating that either it is required that users either have images or not).
     *
     * If address is an allowed profile field for search, specific address fields may be searched. The allowed ones are normally returned as the &#x60;addressFieldsInSearch&#x60; field in the corresponding result from a data-for-search request. The specific address fields are:
     * - &#x60;address&#x60;: Searches on any address field (not a specific field); - &#x60;address.address&#x60;: Searches on the fields that represent the street address, which are &#x60;addressLine1&#x60;, &#x60;addressLine2&#x60;, &#x60;street&#x60;, &#x60;buildingNumber&#x60; and &#x60;complement&#x60;. Note that normally only a subset of them should be enabled in the configuration (either line 1 / 2 or street + number + complement);
     * - &#x60;address.zip&#x60;: Searches for matching zip (postal) code; - &#x60;address.poBox&#x60;: Searches for matching postal box; - &#x60;address.neighborhood&#x60;: Searches by neighborhood; - &#x60;address.city&#x60;: Searches by city; - &#x60;address.region&#x60;: Searches by region (or state); - &#x60;address.country&#x60;: Searches by ISO 3166-1 alpha-2 country code. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;profileFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;profileFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    profileFields?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<UserStatusEnum>;

    /**
     * Indicated the users to be excluded from the result
     */
    usersToExclude?: Array<string>;

    /**
     * Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.
     */
    usersToInclude?: Array<string>;

  }): Observable<Array<UserWithBalanceResult>> {

    return this.searchUsersWithBalances$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserWithBalanceResult>>) => r.body as Array<UserWithBalanceResult>)
    );
  }

  /**
   * Path part for operation exportUsersWithBalances
   */
  static readonly ExportUsersWithBalancesPath = '/accounts/{accountType}/user-balances/export/{format}';

  /**
   * Exports the user listing together with their balances as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /accounts/data-for-user-balances`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportUsersWithBalances()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportUsersWithBalances$Response(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The account type
     */
    accountType: string;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    balanceRange?: Array<number>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.
     */
    includeGroup?: boolean;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.
     */
    includeGroupSet?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    lastLoginPeriod?: Array<string>;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.
     */
    mainBrokerOnly?: boolean;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;

    /**
     * An array with 2 elements, describing the lower and upper medium balance bounds. Both of them need to be set as 2 element in the array, or it won&#x27;t be considered.
     */
    mediumBalanceRange?: Array<number>;

    /**
     * The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    negativeSincePeriod?: Array<string>;

    /**
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UsersWithBalanceOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * Either id or internal names of products the users should have assigned. Ignored if the authenticated user isn&#x27;t an administrator.
     */
    products?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, the list specifid in &#x60;products&#x60; will only match users with those products assigned individually, not via group or group set. When set to &#x60;false&#x60; (default), the products will match any level (individual, group or group set).
     */
    productsIndividuallyAssigned?: boolean;

    /**
     * User profile fields, both basic (full name, login name, phone, e-mail, etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by &#x60;:&#x60; (colon). For example, &#x60;profileFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, &#x60;profileFields&#x3D;field1:valueA|valueB&#x60;. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x27;rank&#x27; is either bronze or silver, and whose &#x27;birthDate&#x27; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;profileFields&#x3D;birthDate:|2001-12-31&#x60;.
     * The basic profile fields have one of the following identifiers:
     * - &#x60;name&#x60; or &#x60;fullName&#x60;: Full name; - &#x60;username&#x60;, &#x60;loginName&#x60; or &#x60;login&#x60;: Login name; - &#x60;email&#x60;: E-mail; - &#x60;phone&#x60;: Phone; - &#x60;accountNumber&#x60;, &#x60;account&#x60;: Account number; - &#x60;image&#x60;: Image (accepts a boolean value, indicating that either it is required that users either have images or not).
     *
     * If address is an allowed profile field for search, specific address fields may be searched. The allowed ones are normally returned as the &#x60;addressFieldsInSearch&#x60; field in the corresponding result from a data-for-search request. The specific address fields are:
     * - &#x60;address&#x60;: Searches on any address field (not a specific field); - &#x60;address.address&#x60;: Searches on the fields that represent the street address, which are &#x60;addressLine1&#x60;, &#x60;addressLine2&#x60;, &#x60;street&#x60;, &#x60;buildingNumber&#x60; and &#x60;complement&#x60;. Note that normally only a subset of them should be enabled in the configuration (either line 1 / 2 or street + number + complement);
     * - &#x60;address.zip&#x60;: Searches for matching zip (postal) code; - &#x60;address.poBox&#x60;: Searches for matching postal box; - &#x60;address.neighborhood&#x60;: Searches by neighborhood; - &#x60;address.city&#x60;: Searches by city; - &#x60;address.region&#x60;: Searches by region (or state); - &#x60;address.country&#x60;: Searches by ISO 3166-1 alpha-2 country code. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;profileFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;profileFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    profileFields?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<UserStatusEnum>;

    /**
     * Indicated the users to be excluded from the result
     */
    usersToExclude?: Array<string>;

    /**
     * Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.
     */
    usersToInclude?: Array<string>;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ExportUsersWithBalancesPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('acceptedAgreements', params.acceptedAgreements, {});
      rb.path('accountType', params.accountType, {});
      rb.query('activationPeriod', params.activationPeriod, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('balanceRange', params.balanceRange, {});
      rb.query('brokers', params.brokers, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGroup', params.includeGroup, {});
      rb.query('includeGroupSet', params.includeGroupSet, {});
      rb.query('keywords', params.keywords, {});
      rb.query('lastLoginPeriod', params.lastLoginPeriod, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('mainBrokerOnly', params.mainBrokerOnly, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('mediumBalanceRange', params.mediumBalanceRange, {});
      rb.query('negativeSincePeriod', params.negativeSincePeriod, {});
      rb.query('notAcceptedAgreements', params.notAcceptedAgreements, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('products', params.products, {});
      rb.query('productsIndividuallyAssigned', params.productsIndividuallyAssigned, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('usersToExclude', params.usersToExclude, {});
      rb.query('usersToInclude', params.usersToInclude, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Exports the user listing together with their balances as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /accounts/data-for-user-balances`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportUsersWithBalances$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportUsersWithBalances(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The account type
     */
    accountType: string;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    balanceRange?: Array<number>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.
     */
    includeGroup?: boolean;

    /**
     * When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.
     */
    includeGroupSet?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    lastLoginPeriod?: Array<string>;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.
     */
    mainBrokerOnly?: boolean;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;

    /**
     * An array with 2 elements, describing the lower and upper medium balance bounds. Both of them need to be set as 2 element in the array, or it won&#x27;t be considered.
     */
    mediumBalanceRange?: Array<number>;

    /**
     * The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    negativeSincePeriod?: Array<string>;

    /**
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UsersWithBalanceOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * Either id or internal names of products the users should have assigned. Ignored if the authenticated user isn&#x27;t an administrator.
     */
    products?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, the list specifid in &#x60;products&#x60; will only match users with those products assigned individually, not via group or group set. When set to &#x60;false&#x60; (default), the products will match any level (individual, group or group set).
     */
    productsIndividuallyAssigned?: boolean;

    /**
     * User profile fields, both basic (full name, login name, phone, e-mail, etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by &#x60;:&#x60; (colon). For example, &#x60;profileFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, &#x60;profileFields&#x3D;field1:valueA|valueB&#x60;. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x27;rank&#x27; is either bronze or silver, and whose &#x27;birthDate&#x27; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;profileFields&#x3D;birthDate:|2001-12-31&#x60;.
     * The basic profile fields have one of the following identifiers:
     * - &#x60;name&#x60; or &#x60;fullName&#x60;: Full name; - &#x60;username&#x60;, &#x60;loginName&#x60; or &#x60;login&#x60;: Login name; - &#x60;email&#x60;: E-mail; - &#x60;phone&#x60;: Phone; - &#x60;accountNumber&#x60;, &#x60;account&#x60;: Account number; - &#x60;image&#x60;: Image (accepts a boolean value, indicating that either it is required that users either have images or not).
     *
     * If address is an allowed profile field for search, specific address fields may be searched. The allowed ones are normally returned as the &#x60;addressFieldsInSearch&#x60; field in the corresponding result from a data-for-search request. The specific address fields are:
     * - &#x60;address&#x60;: Searches on any address field (not a specific field); - &#x60;address.address&#x60;: Searches on the fields that represent the street address, which are &#x60;addressLine1&#x60;, &#x60;addressLine2&#x60;, &#x60;street&#x60;, &#x60;buildingNumber&#x60; and &#x60;complement&#x60;. Note that normally only a subset of them should be enabled in the configuration (either line 1 / 2 or street + number + complement);
     * - &#x60;address.zip&#x60;: Searches for matching zip (postal) code; - &#x60;address.poBox&#x60;: Searches for matching postal box; - &#x60;address.neighborhood&#x60;: Searches by neighborhood; - &#x60;address.city&#x60;: Searches by city; - &#x60;address.region&#x60;: Searches by region (or state); - &#x60;address.country&#x60;: Searches by ISO 3166-1 alpha-2 country code. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;profileFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;profileFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    profileFields?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<UserStatusEnum>;

    /**
     * Indicated the users to be excluded from the result
     */
    usersToExclude?: Array<string>;

    /**
     * Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.
     */
    usersToInclude?: Array<string>;

  }): Observable<Blob> {

    return this.exportUsersWithBalances$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
