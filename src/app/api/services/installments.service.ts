/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { InstallmentDataForSearch } from '../models/installment-data-for-search';
import { InstallmentOverviewDataForSearch } from '../models/installment-overview-data-for-search';
import { InstallmentOverviewResult } from '../models/installment-overview-result';
import { InstallmentResult } from '../models/installment-result';
import { InstallmentStatusEnum } from '../models/installment-status-enum';
import { TransOrderByEnum } from '../models/trans-order-by-enum';
import { TransactionAuthorizationStatusEnum } from '../models/transaction-authorization-status-enum';
import { TransactionKind } from '../models/transaction-kind';
import { Transfer } from '../models/transfer';
import { TransferDirectionEnum } from '../models/transfer-direction-enum';


/**
 * Provides search and actions over specific to scheduled payment installments and recurring payment occurrences. Both are generically treated as `Installments`.
 */
@Injectable({
  providedIn: 'root',
})
export class InstallmentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getInstallmentsDataForSearch
   */
  static readonly GetInstallmentsDataForSearchPath = '/{owner}/installments/data-for-search';

  /**
   * Returns data for searching installments of an account owner.
   *
   * Returns data which can be used to filter a installment search
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInstallmentsDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInstallmentsDataForSearch$Response(params: {

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
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<InstallmentDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.GetInstallmentsDataForSearchPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstallmentDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching installments of an account owner.
   *
   * Returns data which can be used to filter a installment search
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInstallmentsDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInstallmentsDataForSearch(params: {

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
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<InstallmentDataForSearch> {

    return this.getInstallmentsDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<InstallmentDataForSearch>) => r.body as InstallmentDataForSearch)
    );
  }

  /**
   * Path part for operation searchInstallments
   */
  static readonly SearchInstallmentsPath = '/{owner}/installments';

  /**
   * Searches installments of an account owner.
   *
   * Returns the installments of a given account owner that match the specified criteria. Each result will will be relative to this owner. The amount may be positive or negative, depending on whether this owner has performed or received the transaction.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchInstallments()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchInstallments$Response(params: {

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
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The account types
     */
    accountTypes?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<InstallmentResult>>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.SearchInstallmentsPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.query('fields', params.fields, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('accountTypes', params.accountTypes, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('authorizationPerformedBy', params.authorizationPerformedBy, {});
      rb.query('authorizationStatuses', params.authorizationStatuses, {});
      rb.query('authorized', params.authorized, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('datePeriod', params.datePeriod, {});
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
      rb.query('transferTypes', params.transferTypes, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InstallmentResult>>;
      })
    );
  }

  /**
   * Searches installments of an account owner.
   *
   * Returns the installments of a given account owner that match the specified criteria. Each result will will be relative to this owner. The amount may be positive or negative, depending on whether this owner has performed or received the transaction.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchInstallments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchInstallments(params: {

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
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The account types
     */
    accountTypes?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<Array<InstallmentResult>> {

    return this.searchInstallments$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InstallmentResult>>) => r.body as Array<InstallmentResult>)
    );
  }

  /**
   * Path part for operation exportInstallments
   */
  static readonly ExportInstallmentsPath = '/{owner}/installments/export/{format}';

  /**
   * Exports the owner installments search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /{owner}/installments/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportInstallments()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportInstallments$Response(params: {

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
     * The format to export the data
     */
    format: string;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The account types
     */
    accountTypes?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.ExportInstallmentsPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('format', params.format, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('accountTypes', params.accountTypes, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('authorizationPerformedBy', params.authorizationPerformedBy, {});
      rb.query('authorizationStatuses', params.authorizationStatuses, {});
      rb.query('authorized', params.authorized, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('datePeriod', params.datePeriod, {});
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
   * Exports the owner installments search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /{owner}/installments/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportInstallments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportInstallments(params: {

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
     * The format to export the data
     */
    format: string;

    /**
     * References to access clients (id or token) used to perform / receive the transfer.
     */
    accessClients?: Array<string>;

    /**
     * The account types
     */
    accountTypes?: Array<string>;

    /**
     * The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    amountRange?: Array<string>;

    /**
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The transaction number of the matching transfer
     */
    transactionNumber?: string;

    /**
     * Reference to the transfer filters, which filters transfers by type. May be either the internal id or qualified transfer filter internal name, in the format &#x60;accountType.transferFilter&#x60;.
     */
    transferFilters?: Array<string>;

    /**
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<Blob> {

    return this.exportInstallments$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getInstallmentsOverviewDataForSearch
   */
  static readonly GetInstallmentsOverviewDataForSearchPath = '/installments/data-for-search';

  /**
   * Returns data for searching installments regardless of a owner.
   *
   * Returns data which can be used to filter a installment search
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInstallmentsOverviewDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInstallmentsOverviewDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<InstallmentOverviewDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.GetInstallmentsOverviewDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstallmentOverviewDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching installments regardless of a owner.
   *
   * Returns data which can be used to filter a installment search
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInstallmentsOverviewDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInstallmentsOverviewDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<InstallmentOverviewDataForSearch> {

    return this.getInstallmentsOverviewDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<InstallmentOverviewDataForSearch>) => r.body as InstallmentOverviewDataForSearch)
    );
  }

  /**
   * Path part for operation searchInstallmentsOverview
   */
  static readonly SearchInstallmentsOverviewPath = '/installments';

  /**
   * Searches installments regardless of a owner.
   *
   * Searches installments regardless of a owner that match the specified criteria.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchInstallmentsOverview()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchInstallmentsOverview$Response(params?: {

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
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The currencies internal names or ids.
     */
    currencies?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * The source account types internal names or ids.
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The source account types internal names or ids.
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
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<InstallmentOverviewResult>>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.SearchInstallmentsOverviewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('authorizationPerformedBy', params.authorizationPerformedBy, {});
      rb.query('authorizationStatuses', params.authorizationStatuses, {});
      rb.query('authorized', params.authorized, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('currencies', params.currencies, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('excludedIds', params.excludedIds, {});
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
      rb.query('toAccountTypes', params.toAccountTypes, {});
      rb.query('transactionNumber', params.transactionNumber, {});
      rb.query('transferFilters', params.transferFilters, {});
      rb.query('transferTypes', params.transferTypes, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InstallmentOverviewResult>>;
      })
    );
  }

  /**
   * Searches installments regardless of a owner.
   *
   * Searches installments regardless of a owner that match the specified criteria.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchInstallmentsOverview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchInstallmentsOverview(params?: {

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
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The currencies internal names or ids.
     */
    currencies?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * The source account types internal names or ids.
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The source account types internal names or ids.
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
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<Array<InstallmentOverviewResult>> {

    return this.searchInstallmentsOverview$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InstallmentOverviewResult>>) => r.body as Array<InstallmentOverviewResult>)
    );
  }

  /**
   * Path part for operation exportInstallmentsOverview
   */
  static readonly ExportInstallmentsOverviewPath = '/installments/export/{format}';

  /**
   * Exports the installments overview search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /installments/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportInstallmentsOverview()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportInstallmentsOverview$Response(params: {

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
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The currencies internal names or ids.
     */
    currencies?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * The source account types internal names or ids.
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The source account types internal names or ids.
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
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.ExportInstallmentsOverviewPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('accessClients', params.accessClients, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('authorizationPerformedBy', params.authorizationPerformedBy, {});
      rb.query('authorizationStatuses', params.authorizationStatuses, {});
      rb.query('authorized', params.authorized, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('by', params.by, {});
      rb.query('channels', params.channels, {});
      rb.query('currencies', params.currencies, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('excludedIds', params.excludedIds, {});
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
      rb.query('toAccountTypes', params.toAccountTypes, {});
      rb.query('transactionNumber', params.transactionNumber, {});
      rb.query('transferFilters', params.transferFilters, {});
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
   * Exports the installments overview search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /installments/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportInstallmentsOverview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportInstallmentsOverview(params: {

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
     * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
     */
    authorizationPerformedBy?: string;

    /**
     * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

    /**
     * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (&#x60;payment&#x60;, &#x60;order&#x60;, &#x60;recurringPayment&#x60; or &#x60;scheduledPayment&#x60;).
     */
    authorized?: boolean;

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
     * The currencies internal names or ids.
     */
    currencies?: Array<string>;

    /**
     * The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * List of transfers ids to be excluded from the result.
     */
    excludedIds?: Array<string>;

    /**
     * The source account types internal names or ids.
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
    kinds?: Array<TransactionKind>;
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
     * Possible statuses for installments.
     */
    statuses?: Array<InstallmentStatusEnum>;

    /**
     * The source account types internal names or ids.
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
     * Reference to the transfer types for filter. May be either the internal id or qualified transfer type internal name, in the format &#x60;accountType.transferType&#x60;.
     */
    transferTypes?: Array<string>;

    /**
     * Reference a user that should have either received / performed the transfer.
     */
    user?: string;

  }): Observable<Blob> {

    return this.exportInstallmentsOverview$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation processInstallment
   */
  static readonly ProcessInstallmentPath = '/installments/{key}/process';

  /**
   * Processes a installment, generating its corresponding transfer.
   *
   * Processes an installment. The installment status must be either `scheduled`, `failed` or `blocked`. This action must be performed by the payer or manager.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processInstallment()` instead.
   *
   * This method doesn't expect any request body.
   */
  processInstallment$Response(params: {

    /**
     * Either the id or a string in the form &#x60;number@transaction&#x60;, beging transaction either the id or transaction number.
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<Transfer>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.ProcessInstallmentPath, 'post');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Transfer>;
      })
    );
  }

  /**
   * Processes a installment, generating its corresponding transfer.
   *
   * Processes an installment. The installment status must be either `scheduled`, `failed` or `blocked`. This action must be performed by the payer or manager.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `processInstallment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processInstallment(params: {

    /**
     * Either the id or a string in the form &#x60;number@transaction&#x60;, beging transaction either the id or transaction number.
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<Transfer> {

    return this.processInstallment$Response(params).pipe(
      map((r: StrictHttpResponse<Transfer>) => r.body as Transfer)
    );
  }

  /**
   * Path part for operation settleInstallment
   */
  static readonly SettleInstallmentPath = '/installments/{key}/settle';

  /**
   * Settles a scheduled payment installment.
   *
   * Settles a single installment. It must be a scheduled payment installment (not recurring payment), and the status must be either `scheduled`, `failed` or `blocked`. This action must be performed by the payment receiver or manager.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settleInstallment()` instead.
   *
   * This method doesn't expect any request body.
   */
  settleInstallment$Response(params: {

    /**
     * Either the id or a string in the form &#x60;number@transaction&#x60;, beging transaction either the id or transaction number.
     */
    key: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InstallmentsService.SettleInstallmentPath, 'post');
    if (params) {

      rb.path('key', params.key, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

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
   * Settles a scheduled payment installment.
   *
   * Settles a single installment. It must be a scheduled payment installment (not recurring payment), and the status must be either `scheduled`, `failed` or `blocked`. This action must be performed by the payment receiver or manager.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settleInstallment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settleInstallment(params: {

    /**
     * Either the id or a string in the form &#x60;number@transaction&#x60;, beging transaction either the id or transaction number.
     */
    key: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<void> {

    return this.settleInstallment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
