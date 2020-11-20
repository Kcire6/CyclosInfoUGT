/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AccountBalanceLimitsData } from '../models/account-balance-limits-data';
import { DataForBalanceLimitsSearch } from '../models/data-for-balance-limits-search';
import { GeneralAccountBalanceLimitsResult } from '../models/general-account-balance-limits-result';
import { SetAccountBalanceLimits } from '../models/set-account-balance-limits';
import { UserAccountBalanceLimitsListData } from '../models/user-account-balance-limits-list-data';


/**
 * Provides access to the balance limits of user accounts, as well as setting them.
 */
@Injectable({
  providedIn: 'root',
})
export class BalanceLimitsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDataForUserBalanceLimits
   */
  static readonly GetDataForUserBalanceLimitsPath = '/{user}/accounts/data-for-balance-limits';

  /**
   * Returns data regarding the limits of all accounts of a given user.
   *
   * Returns data regarding the limits of all accounts of a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForUserBalanceLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForUserBalanceLimits$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<UserAccountBalanceLimitsListData>> {

    const rb = new RequestBuilder(this.rootUrl, BalanceLimitsService.GetDataForUserBalanceLimitsPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserAccountBalanceLimitsListData>;
      })
    );
  }

  /**
   * Returns data regarding the limits of all accounts of a given user.
   *
   * Returns data regarding the limits of all accounts of a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForUserBalanceLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForUserBalanceLimits(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<UserAccountBalanceLimitsListData> {

    return this.getDataForUserBalanceLimits$Response(params).pipe(
      map((r: StrictHttpResponse<UserAccountBalanceLimitsListData>) => r.body as UserAccountBalanceLimitsListData)
    );
  }

  /**
   * Path part for operation getAccountBalanceLimits
   */
  static readonly GetAccountBalanceLimitsPath = '/{user}/accounts/{accountType}/balance-limits';

  /**
   * Returns data for the limits of a given account.
   *
   * Returns the data needed to edit the limits of the given account, plus the history of limit changes.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountBalanceLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalanceLimits$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<AccountBalanceLimitsData>> {

    const rb = new RequestBuilder(this.rootUrl, BalanceLimitsService.GetAccountBalanceLimitsPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('accountType', params.accountType, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountBalanceLimitsData>;
      })
    );
  }

  /**
   * Returns data for the limits of a given account.
   *
   * Returns the data needed to edit the limits of the given account, plus the history of limit changes.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAccountBalanceLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalanceLimits(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<AccountBalanceLimitsData> {

    return this.getAccountBalanceLimits$Response(params).pipe(
      map((r: StrictHttpResponse<AccountBalanceLimitsData>) => r.body as AccountBalanceLimitsData)
    );
  }

  /**
   * Path part for operation setAccountBalanceLimits
   */
  static readonly SetAccountBalanceLimitsPath = '/{user}/accounts/{accountType}/balance-limits';

  /**
   * Sets the limits for a given user account.
   *
   * Saves the account limits. The lower limit may be customized or default, while the upper limit may also be set to unlimited.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setAccountBalanceLimits()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setAccountBalanceLimits$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The new account balance limits
     */
    body?: SetAccountBalanceLimits
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BalanceLimitsService.SetAccountBalanceLimitsPath, 'put');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('accountType', params.accountType, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Sets the limits for a given user account.
   *
   * Saves the account limits. The lower limit may be customized or default, while the upper limit may also be set to unlimited.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setAccountBalanceLimits$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setAccountBalanceLimits(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The account type internal name or id
     */
    accountType: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The new account balance limits
     */
    body?: SetAccountBalanceLimits
  }): Observable<void> {

    return this.setAccountBalanceLimits$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAccountBalanceLimitsData
   */
  static readonly GetAccountBalanceLimitsDataPath = '/accounts/data-for-balance-limits';

  /**
   * Returns data for a general search of account balance limits.
   *
   * Returns data for a general search of account balance limits.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountBalanceLimitsData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalanceLimitsData$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DataForBalanceLimitsSearch>> {

    const rb = new RequestBuilder(this.rootUrl, BalanceLimitsService.GetAccountBalanceLimitsDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForBalanceLimitsSearch>;
      })
    );
  }

  /**
   * Returns data for a general search of account balance limits.
   *
   * Returns data for a general search of account balance limits.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAccountBalanceLimitsData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalanceLimitsData(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DataForBalanceLimitsSearch> {

    return this.getAccountBalanceLimitsData$Response(params).pipe(
      map((r: StrictHttpResponse<DataForBalanceLimitsSearch>) => r.body as DataForBalanceLimitsSearch)
    );
  }

  /**
   * Path part for operation searchAccountBalanceLimits
   */
  static readonly SearchAccountBalanceLimitsPath = '/accounts/balance-limits';

  /**
   * Searches for account balance limits.
   *
   * Searches for account balance limits, according to the given filters.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchAccountBalanceLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAccountBalanceLimits$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Either the ids or identification methods of users&#x27; broker
     */
    broker?: string;

    /**
     * Either the ids or identification methods of users&#x27; broker
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that performed the change
     */
    by?: string;

    /**
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) lower limit.
     */
    customLimit?: boolean;

    /**
     * The minimum / maximum customized limit. Is only used when &#x60;customLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) upper limit.
     */
    customUpperLimit?: boolean;

    /**
     * The minimum / maximum customized upper limit. Is only used when &#x60;customUpperLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customUpperLimitRange?: Array<string>;

    /**
     * Either the ids or internal names of user group
     */
    groups?: Array<string>;

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
     * Either the id or identifier of the account owner
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<GeneralAccountBalanceLimitsResult>>> {

    const rb = new RequestBuilder(this.rootUrl, BalanceLimitsService.SearchAccountBalanceLimitsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('accountType', params.accountType, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('currency', params.currency, {});
      rb.query('customLimit', params.customLimit, {});
      rb.query('customLimitRange', params.customLimitRange, {});
      rb.query('customUpperLimit', params.customUpperLimit, {});
      rb.query('customUpperLimitRange', params.customUpperLimitRange, {});
      rb.query('groups', params.groups, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GeneralAccountBalanceLimitsResult>>;
      })
    );
  }

  /**
   * Searches for account balance limits.
   *
   * Searches for account balance limits, according to the given filters.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchAccountBalanceLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAccountBalanceLimits(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Either the ids or identification methods of users&#x27; broker
     */
    broker?: string;

    /**
     * Either the ids or identification methods of users&#x27; broker
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that performed the change
     */
    by?: string;

    /**
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) lower limit.
     */
    customLimit?: boolean;

    /**
     * The minimum / maximum customized limit. Is only used when &#x60;customLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) upper limit.
     */
    customUpperLimit?: boolean;

    /**
     * The minimum / maximum customized upper limit. Is only used when &#x60;customUpperLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customUpperLimitRange?: Array<string>;

    /**
     * Either the ids or internal names of user group
     */
    groups?: Array<string>;

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
     * Either the id or identifier of the account owner
     */
    user?: string;

  }): Observable<Array<GeneralAccountBalanceLimitsResult>> {

    return this.searchAccountBalanceLimits$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GeneralAccountBalanceLimitsResult>>) => r.body as Array<GeneralAccountBalanceLimitsResult>)
    );
  }

  /**
   * Path part for operation exportAccountBalanceLimits
   */
  static readonly ExportAccountBalanceLimitsPath = '/accounts/balance-limits/export/{format}';

  /**
   * Exports the account balance limits results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /accounts/data-for-balance-limits`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportAccountBalanceLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAccountBalanceLimits$Response(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Either the ids or identification methods of users&#x27; broker
     */
    broker?: string;

    /**
     * Either the ids or identification methods of users&#x27; broker
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that performed the change
     */
    by?: string;

    /**
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) lower limit.
     */
    customLimit?: boolean;

    /**
     * The minimum / maximum customized limit. Is only used when &#x60;customLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) upper limit.
     */
    customUpperLimit?: boolean;

    /**
     * The minimum / maximum customized upper limit. Is only used when &#x60;customUpperLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customUpperLimitRange?: Array<string>;

    /**
     * Either the ids or internal names of user group
     */
    groups?: Array<string>;

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
     * Either the id or identifier of the account owner
     */
    user?: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, BalanceLimitsService.ExportAccountBalanceLimitsPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('accountType', params.accountType, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('currency', params.currency, {});
      rb.query('customLimit', params.customLimit, {});
      rb.query('customLimitRange', params.customLimitRange, {});
      rb.query('customUpperLimit', params.customUpperLimit, {});
      rb.query('customUpperLimitRange', params.customUpperLimitRange, {});
      rb.query('groups', params.groups, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
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
   * Exports the account balance limits results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /accounts/data-for-balance-limits`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportAccountBalanceLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAccountBalanceLimits(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

    /**
     * Use &#x60;brokers&#x60; instead.
     *
     * Either the ids or identification methods of users&#x27; broker
     */
    broker?: string;

    /**
     * Either the ids or identification methods of users&#x27; broker
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that performed the change
     */
    by?: string;

    /**
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) lower limit.
     */
    customLimit?: boolean;

    /**
     * The minimum / maximum customized limit. Is only used when &#x60;customLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) upper limit.
     */
    customUpperLimit?: boolean;

    /**
     * The minimum / maximum customized upper limit. Is only used when &#x60;customUpperLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customUpperLimitRange?: Array<string>;

    /**
     * Either the ids or internal names of user group
     */
    groups?: Array<string>;

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
     * Either the id or identifier of the account owner
     */
    user?: string;

  }): Observable<Blob> {

    return this.exportAccountBalanceLimits$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
