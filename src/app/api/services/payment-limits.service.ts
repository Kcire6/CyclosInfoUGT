/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AccountPaymentLimitsData } from '../models/account-payment-limits-data';
import { DataForPaymentLimitsSearch } from '../models/data-for-payment-limits-search';
import { GeneralAccountPaymentLimitsResult } from '../models/general-account-payment-limits-result';
import { SetAccountPaymentLimits } from '../models/set-account-payment-limits';
import { UserAccountPaymentLimitsListData } from '../models/user-account-payment-limits-list-data';


/**
 * Provides access to the payment limits of user accounts, as well as setting them.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentLimitsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDataForUserPaymentLimits
   */
  static readonly GetDataForUserPaymentLimitsPath = '/{user}/accounts/data-for-payment-limits';

  /**
   * Returns data regarding the limits of all accounts of a given user.
   *
   * Returns data regarding the limits of all accounts of a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForUserPaymentLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForUserPaymentLimits$Response(params: {

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

  }): Observable<StrictHttpResponse<UserAccountPaymentLimitsListData>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentLimitsService.GetDataForUserPaymentLimitsPath, 'get');
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
        return r as StrictHttpResponse<UserAccountPaymentLimitsListData>;
      })
    );
  }

  /**
   * Returns data regarding the limits of all accounts of a given user.
   *
   * Returns data regarding the limits of all accounts of a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForUserPaymentLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForUserPaymentLimits(params: {

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

  }): Observable<UserAccountPaymentLimitsListData> {

    return this.getDataForUserPaymentLimits$Response(params).pipe(
      map((r: StrictHttpResponse<UserAccountPaymentLimitsListData>) => r.body as UserAccountPaymentLimitsListData)
    );
  }

  /**
   * Path part for operation getAccountPaymentLimits
   */
  static readonly GetAccountPaymentLimitsPath = '/{user}/accounts/{accountType}/payment-limits';

  /**
   * Returns data for the limits of a given account.
   *
   * Returns the data needed to edit the limits of the given account, plus the history of limit changes.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountPaymentLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountPaymentLimits$Response(params: {

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

  }): Observable<StrictHttpResponse<AccountPaymentLimitsData>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentLimitsService.GetAccountPaymentLimitsPath, 'get');
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
        return r as StrictHttpResponse<AccountPaymentLimitsData>;
      })
    );
  }

  /**
   * Returns data for the limits of a given account.
   *
   * Returns the data needed to edit the limits of the given account, plus the history of limit changes.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAccountPaymentLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountPaymentLimits(params: {

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

  }): Observable<AccountPaymentLimitsData> {

    return this.getAccountPaymentLimits$Response(params).pipe(
      map((r: StrictHttpResponse<AccountPaymentLimitsData>) => r.body as AccountPaymentLimitsData)
    );
  }

  /**
   * Path part for operation setAccountPaymentLimits
   */
  static readonly SetAccountPaymentLimitsPath = '/{user}/accounts/{accountType}/payment-limits';

  /**
   * Sets the limits for a given user account.
   *
   * Saves the account limits. The lower limit may be customized or default, while the upper limit may also be set to unlimited.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setAccountPaymentLimits()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setAccountPaymentLimits$Response(params: {

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
     * The new account payment limits
     */
    body?: SetAccountPaymentLimits
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentLimitsService.SetAccountPaymentLimitsPath, 'put');
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
   * To access the full response (for headers, for example), `setAccountPaymentLimits$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setAccountPaymentLimits(params: {

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
     * The new account payment limits
     */
    body?: SetAccountPaymentLimits
  }): Observable<void> {

    return this.setAccountPaymentLimits$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAccountPaymentLimitsData
   */
  static readonly GetAccountPaymentLimitsDataPath = '/accounts/data-for-payment-limits';

  /**
   * Returns data for a general search of account payment limits.
   *
   * Returns data for a general search of account payment limits.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountPaymentLimitsData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountPaymentLimitsData$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DataForPaymentLimitsSearch>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentLimitsService.GetAccountPaymentLimitsDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForPaymentLimitsSearch>;
      })
    );
  }

  /**
   * Returns data for a general search of account payment limits.
   *
   * Returns data for a general search of account payment limits.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAccountPaymentLimitsData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountPaymentLimitsData(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DataForPaymentLimitsSearch> {

    return this.getAccountPaymentLimitsData$Response(params).pipe(
      map((r: StrictHttpResponse<DataForPaymentLimitsSearch>) => r.body as DataForPaymentLimitsSearch)
    );
  }

  /**
   * Path part for operation searchAccountPaymentLimits
   */
  static readonly SearchAccountPaymentLimitsPath = '/accounts/payment-limits';

  /**
   * Searches for account payment limits.
   *
   * Searches for account payment limits, according to the given filters.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchAccountPaymentLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAccountPaymentLimits$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

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
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount limit.
     */
    customAmountLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount limit. Is only used when &#x60;customAmountLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per day limit.
     */
    customAmountPerDayLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per day limit. Is only used when &#x60;customAmountPerDayLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerDayLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per month limit.
     */
    customAmountPerMonthLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per month limit. Is only used when &#x60;customAmountPerMonthLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerMonthLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per week limit.
     */
    customAmountPerWeekLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per week limit. Is only used when &#x60;customAmountPerWeekLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerWeekLimitRange?: Array<string>;

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

  }): Observable<StrictHttpResponse<Array<GeneralAccountPaymentLimitsResult>>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentLimitsService.SearchAccountPaymentLimitsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('accountType', params.accountType, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('currency', params.currency, {});
      rb.query('customAmountLimit', params.customAmountLimit, {});
      rb.query('customAmountLimitRange', params.customAmountLimitRange, {});
      rb.query('customAmountPerDayLimit', params.customAmountPerDayLimit, {});
      rb.query('customAmountPerDayLimitRange', params.customAmountPerDayLimitRange, {});
      rb.query('customAmountPerMonthLimit', params.customAmountPerMonthLimit, {});
      rb.query('customAmountPerMonthLimitRange', params.customAmountPerMonthLimitRange, {});
      rb.query('customAmountPerWeekLimit', params.customAmountPerWeekLimit, {});
      rb.query('customAmountPerWeekLimitRange', params.customAmountPerWeekLimitRange, {});
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
        return r as StrictHttpResponse<Array<GeneralAccountPaymentLimitsResult>>;
      })
    );
  }

  /**
   * Searches for account payment limits.
   *
   * Searches for account payment limits, according to the given filters.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchAccountPaymentLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAccountPaymentLimits(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

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
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount limit.
     */
    customAmountLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount limit. Is only used when &#x60;customAmountLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per day limit.
     */
    customAmountPerDayLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per day limit. Is only used when &#x60;customAmountPerDayLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerDayLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per month limit.
     */
    customAmountPerMonthLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per month limit. Is only used when &#x60;customAmountPerMonthLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerMonthLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per week limit.
     */
    customAmountPerWeekLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per week limit. Is only used when &#x60;customAmountPerWeekLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerWeekLimitRange?: Array<string>;

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

  }): Observable<Array<GeneralAccountPaymentLimitsResult>> {

    return this.searchAccountPaymentLimits$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GeneralAccountPaymentLimitsResult>>) => r.body as Array<GeneralAccountPaymentLimitsResult>)
    );
  }

  /**
   * Path part for operation exportAccountPaymentLimits
   */
  static readonly ExportAccountPaymentLimitsPath = '/accounts/payment-limits/export/{format}';

  /**
   * Exports the account payment limits results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /accounts/data-for-payment-limits`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportAccountPaymentLimits()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAccountPaymentLimits$Response(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

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
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount limit.
     */
    customAmountLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount limit. Is only used when &#x60;customAmountLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per day limit.
     */
    customAmountPerDayLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per day limit. Is only used when &#x60;customAmountPerDayLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerDayLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per month limit.
     */
    customAmountPerMonthLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per month limit. Is only used when &#x60;customAmountPerMonthLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerMonthLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per week limit.
     */
    customAmountPerWeekLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per week limit. Is only used when &#x60;customAmountPerWeekLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerWeekLimitRange?: Array<string>;

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

    const rb = new RequestBuilder(this.rootUrl, PaymentLimitsService.ExportAccountPaymentLimitsPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('accountType', params.accountType, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('currency', params.currency, {});
      rb.query('customAmountLimit', params.customAmountLimit, {});
      rb.query('customAmountLimitRange', params.customAmountLimitRange, {});
      rb.query('customAmountPerDayLimit', params.customAmountPerDayLimit, {});
      rb.query('customAmountPerDayLimitRange', params.customAmountPerDayLimitRange, {});
      rb.query('customAmountPerMonthLimit', params.customAmountPerMonthLimit, {});
      rb.query('customAmountPerMonthLimitRange', params.customAmountPerMonthLimitRange, {});
      rb.query('customAmountPerWeekLimit', params.customAmountPerWeekLimit, {});
      rb.query('customAmountPerWeekLimitRange', params.customAmountPerWeekLimitRange, {});
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
   * Exports the account payment limits results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /accounts/data-for-payment-limits`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportAccountPaymentLimits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAccountPaymentLimits(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal name of the account type
     */
    accountType?: string;

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
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount limit.
     */
    customAmountLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount limit. Is only used when &#x60;customAmountLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per day limit.
     */
    customAmountPerDayLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per day limit. Is only used when &#x60;customAmountPerDayLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerDayLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per month limit.
     */
    customAmountPerMonthLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per month limit. Is only used when &#x60;customAmountPerMonthLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerMonthLimitRange?: Array<string>;

    /**
     * When set, returns only accounts that have a custom (if true) or have default (false) payment amount per week limit.
     */
    customAmountPerWeekLimit?: boolean;

    /**
     * The minimum / maximum customized payment amount per week limit. Is only used when &#x60;customAmountPerWeekLimit&#x60; is set to true. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    customAmountPerWeekLimitRange?: Array<string>;

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

    return this.exportAccountPaymentLimits$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
