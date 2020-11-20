/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CurrencyAmountSummary } from '../models/currency-amount-summary';
import { TransOrderByEnum } from '../models/trans-order-by-enum';
import { TransferDataForSearch } from '../models/transfer-data-for-search';
import { TransferKind } from '../models/transfer-kind';
import { TransferResult } from '../models/transfer-result';
import { TransferView } from '../models/transfer-view';


/**
 * Provides access to balance transfers (also called transfers). A transfer represents the actual and definitive transfer of funds between two accounts.
 */
@Injectable({
  providedIn: 'root',
})
export class TransfersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTransferDataForSearch
   */
  static readonly GetTransferDataForSearchPath = '/transfers/data-for-search';

  /**
   * Returns configuration data for searching transfers over multiple accounts.
   *
   * Returns configuration data for searching transfers over multiple accounts.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTransferDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransferDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<TransferDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, TransfersService.GetTransferDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferDataForSearch>;
      })
    );
  }

  /**
   * Returns configuration data for searching transfers over multiple accounts.
   *
   * Returns configuration data for searching transfers over multiple accounts.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTransferDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransferDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<TransferDataForSearch> {

    return this.getTransferDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<TransferDataForSearch>) => r.body as TransferDataForSearch)
    );
  }

  /**
   * Path part for operation searchTransfers
   */
  static readonly SearchTransfersPath = '/transfers';

  /**
   * Searches for transfers over multiple accounts.
   *
   * Searches for transfers over multiple accounts. Only transfers which can really be seen are returned. So, admins can search over any visible member / system accounts. Brokers can search over their managed members or themselves, and regular members can only search own transfers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchTransfers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTransfers$Response(params?: {

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
     * Either ids or internal names of the currency
     */
    currencies?: Array<string>;

    /**
     * Use &#x60;currencies&#x60; instead.
     *
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Use &#x60;fromAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the origin account type
     */
    fromAccountType?: string;

    /**
     * Either ids or internal names of the origin account type
     */
    fromAccountTypes?: Array<string>;

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
     * Use &#x60;toAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the destination account type
     */
    toAccountType?: string;

    /**
     * Either ids or internal names of the destination account type
     */
    toAccountTypes?: Array<string>;

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

  }): Observable<StrictHttpResponse<Array<TransferResult>>> {

    const rb = new RequestBuilder(this.rootUrl, TransfersService.SearchTransfersPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('chargedBack', params.chargedBack, {});
      rb.query('currencies', params.currencies, {});
      rb.query('currency', params.currency, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('excludedIds', params.excludedIds, {});
      rb.query('fromAccountType', params.fromAccountType, {});
      rb.query('fromAccountTypes', params.fromAccountTypes, {});
      rb.query('fromCurrentAccessClient', params.fromCurrentAccessClient, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGeneratedByAccessClient', params.includeGeneratedByAccessClient, {});
      rb.query('kinds', params.kinds, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('toAccountType', params.toAccountType, {});
      rb.query('toAccountTypes', params.toAccountTypes, {});
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
        return r as StrictHttpResponse<Array<TransferResult>>;
      })
    );
  }

  /**
   * Searches for transfers over multiple accounts.
   *
   * Searches for transfers over multiple accounts. Only transfers which can really be seen are returned. So, admins can search over any visible member / system accounts. Brokers can search over their managed members or themselves, and regular members can only search own transfers.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchTransfers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTransfers(params?: {

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
     * Either ids or internal names of the currency
     */
    currencies?: Array<string>;

    /**
     * Use &#x60;currencies&#x60; instead.
     *
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Use &#x60;fromAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the origin account type
     */
    fromAccountType?: string;

    /**
     * Either ids or internal names of the origin account type
     */
    fromAccountTypes?: Array<string>;

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
     * Use &#x60;toAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the destination account type
     */
    toAccountType?: string;

    /**
     * Either ids or internal names of the destination account type
     */
    toAccountTypes?: Array<string>;

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

  }): Observable<Array<TransferResult>> {

    return this.searchTransfers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TransferResult>>) => r.body as Array<TransferResult>)
    );
  }

  /**
   * Path part for operation searchTransfersSummary
   */
  static readonly SearchTransfersSummaryPath = '/transfers/summary';

  /**
   * Returns totals per currency for the transfers search.
   *
   * For each returned currency, according to the visibility and filters, a summary is returned for the total visible transactions.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchTransfersSummary()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTransfersSummary$Response(params?: {

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
     * Either ids or internal names of the currency
     */
    currencies?: Array<string>;

    /**
     * Use &#x60;currencies&#x60; instead.
     *
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Use &#x60;fromAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the origin account type
     */
    fromAccountType?: string;

    /**
     * Either ids or internal names of the origin account type
     */
    fromAccountTypes?: Array<string>;

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
     * Use &#x60;toAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the destination account type
     */
    toAccountType?: string;

    /**
     * Either ids or internal names of the destination account type
     */
    toAccountTypes?: Array<string>;

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

  }): Observable<StrictHttpResponse<Array<CurrencyAmountSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, TransfersService.SearchTransfersSummaryPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('chargedBack', params.chargedBack, {});
      rb.query('currencies', params.currencies, {});
      rb.query('currency', params.currency, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('excludedIds', params.excludedIds, {});
      rb.query('fromAccountType', params.fromAccountType, {});
      rb.query('fromAccountTypes', params.fromAccountTypes, {});
      rb.query('fromCurrentAccessClient', params.fromCurrentAccessClient, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGeneratedByAccessClient', params.includeGeneratedByAccessClient, {});
      rb.query('kinds', params.kinds, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('toAccountType', params.toAccountType, {});
      rb.query('toAccountTypes', params.toAccountTypes, {});
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
        return r as StrictHttpResponse<Array<CurrencyAmountSummary>>;
      })
    );
  }

  /**
   * Returns totals per currency for the transfers search.
   *
   * For each returned currency, according to the visibility and filters, a summary is returned for the total visible transactions.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchTransfersSummary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTransfersSummary(params?: {

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
     * Either ids or internal names of the currency
     */
    currencies?: Array<string>;

    /**
     * Use &#x60;currencies&#x60; instead.
     *
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Use &#x60;fromAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the origin account type
     */
    fromAccountType?: string;

    /**
     * Either ids or internal names of the origin account type
     */
    fromAccountTypes?: Array<string>;

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
     * Use &#x60;toAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the destination account type
     */
    toAccountType?: string;

    /**
     * Either ids or internal names of the destination account type
     */
    toAccountTypes?: Array<string>;

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

  }): Observable<Array<CurrencyAmountSummary>> {

    return this.searchTransfersSummary$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CurrencyAmountSummary>>) => r.body as Array<CurrencyAmountSummary>)
    );
  }

  /**
   * Path part for operation exportTransfers
   */
  static readonly ExportTransfersPath = '/transfers/export/{format}';

  /**
   * Exports the transfers search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /transfers/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportTransfers()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportTransfers$Response(params: {

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
     * Either ids or internal names of the currency
     */
    currencies?: Array<string>;

    /**
     * Use &#x60;currencies&#x60; instead.
     *
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Use &#x60;fromAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the origin account type
     */
    fromAccountType?: string;

    /**
     * Either ids or internal names of the origin account type
     */
    fromAccountTypes?: Array<string>;

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
     * Use &#x60;toAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the destination account type
     */
    toAccountType?: string;

    /**
     * Either ids or internal names of the destination account type
     */
    toAccountTypes?: Array<string>;

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

    const rb = new RequestBuilder(this.rootUrl, TransfersService.ExportTransfersPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('chargedBack', params.chargedBack, {});
      rb.query('currencies', params.currencies, {});
      rb.query('currency', params.currency, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('excludedIds', params.excludedIds, {});
      rb.query('fromAccountType', params.fromAccountType, {});
      rb.query('fromAccountTypes', params.fromAccountTypes, {});
      rb.query('fromCurrentAccessClient', params.fromCurrentAccessClient, {});
      rb.query('groups', params.groups, {});
      rb.query('includeGeneratedByAccessClient', params.includeGeneratedByAccessClient, {});
      rb.query('kinds', params.kinds, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('toAccountType', params.toAccountType, {});
      rb.query('toAccountTypes', params.toAccountTypes, {});
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
   * Exports the transfers search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /transfers/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportTransfers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportTransfers(params: {

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
     * Either ids or internal names of the currency
     */
    currencies?: Array<string>;

    /**
     * Use &#x60;currencies&#x60; instead.
     *
     * Either id or internal name of the currency
     */
    currency?: string;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * Use &#x60;fromAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the origin account type
     */
    fromAccountType?: string;

    /**
     * Either ids or internal names of the origin account type
     */
    fromAccountTypes?: Array<string>;

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
     * Use &#x60;toAccountTypes&#x60; instead.
     *
     * Either ids or internal names of the destination account type
     */
    toAccountType?: string;

    /**
     * Either ids or internal names of the destination account type
     */
    toAccountTypes?: Array<string>;

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

    return this.exportTransfers$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation viewTransfer
   */
  static readonly ViewTransferPath = '/transfers/{key}';

  /**
   * Returns details about a transfer.
   *
   * Returns details about a transfer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewTransfer$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

  }): Observable<StrictHttpResponse<TransferView>> {

    const rb = new RequestBuilder(this.rootUrl, TransfersService.ViewTransferPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferView>;
      })
    );
  }

  /**
   * Returns details about a transfer.
   *
   * Returns details about a transfer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewTransfer(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

  }): Observable<TransferView> {

    return this.viewTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<TransferView>) => r.body as TransferView)
    );
  }

  /**
   * Path part for operation exportTransfer
   */
  static readonly ExportTransferPath = '/transfers/{key}/export/{format}';

  /**
   * Exports the transfer details to a file.
   *
   * Exports the transfer details to a file. The available formats are available in `TransferView`
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportTransfer$Response(params: {

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * The format to export the data
     */
    format: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, TransfersService.ExportTransferPath, 'get');
    if (params) {

      rb.path('key', params.key, {});
      rb.path('format', params.format, {});

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
   * Exports the transfer details to a file.
   *
   * Exports the transfer details to a file. The available formats are available in `TransferView`
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportTransfer(params: {

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * The format to export the data
     */
    format: string;

  }): Observable<Blob> {

    return this.exportTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation chargebackTransfer
   */
  static readonly ChargebackTransferPath = '/transfers/{key}/chargeback';

  /**
   * Perform the chargeback of a transfer.
   *
   * The chargeback generates a new transaction with `kind` = `chargeback`. A new transfer is generated with the same from / to, and negative amount. This will effectively return the amount to the original account. Only top-level transfers can be charged back. For example, a transfer used to charge a fee cannot be charged back. Also, the hability to chargeback a transfer depends on permissions and configuration like the maximum allowed time for the chargeback.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `chargebackTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  chargebackTransfer$Response(params: {

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TransfersService.ChargebackTransferPath, 'post');
    if (params) {

      rb.path('key', params.key, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Perform the chargeback of a transfer.
   *
   * The chargeback generates a new transaction with `kind` = `chargeback`. A new transfer is generated with the same from / to, and negative amount. This will effectively return the amount to the original account. Only top-level transfers can be charged back. For example, a transfer used to charge a fee cannot be charged back. Also, the hability to chargeback a transfer depends on permissions and configuration like the maximum allowed time for the chargeback.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `chargebackTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  chargebackTransfer(params: {

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<string> {

    return this.chargebackTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
