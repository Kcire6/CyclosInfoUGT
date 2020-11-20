/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BuyVoucher } from '../models/buy-voucher';
import { ChangeVoucherExpirationDate } from '../models/change-voucher-expiration-date';
import { GenerateVoucher } from '../models/generate-voucher';
import { ImageSizeEnum } from '../models/image-size-enum';
import { RedeemVoucher } from '../models/redeem-voucher';
import { UserVouchersDataForSearch } from '../models/user-vouchers-data-for-search';
import { VoucherBoughtResult } from '../models/voucher-bought-result';
import { VoucherCreationTypeEnum } from '../models/voucher-creation-type-enum';
import { VoucherDataForBuy } from '../models/voucher-data-for-buy';
import { VoucherDataForGenerate } from '../models/voucher-data-for-generate';
import { VoucherDataForRedeem } from '../models/voucher-data-for-redeem';
import { VoucherInitialDataForRedeem } from '../models/voucher-initial-data-for-redeem';
import { VoucherOrderByEnum } from '../models/voucher-order-by-enum';
import { VoucherRedeemResult } from '../models/voucher-redeem-result';
import { VoucherRelationEnum } from '../models/voucher-relation-enum';
import { VoucherResult } from '../models/voucher-result';
import { VoucherStatusEnum } from '../models/voucher-status-enum';
import { VoucherTypeDetailed } from '../models/voucher-type-detailed';
import { VoucherView } from '../models/voucher-view';
import { VouchersDataForSearch } from '../models/vouchers-data-for-search';


/**
 * Vouchers are the way by which a user (possibly not registered in the system) can buy at places that accepts tickets. The shop / seller will then redeem the voucher.
 */
@Injectable({
  providedIn: 'root',
})
export class VouchersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getVouchersDataForSearch
   */
  static readonly GetVouchersDataForSearchPath = '/vouchers/data-for-search';

  /**
   * Returns data for searching vouchers as admin.
   *
   * Returns configuration data used to search vouchers as admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVouchersDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVouchersDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<VouchersDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GetVouchersDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VouchersDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching vouchers as admin.
   *
   * Returns configuration data used to search vouchers as admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVouchersDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVouchersDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<VouchersDataForSearch> {

    return this.getVouchersDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<VouchersDataForSearch>) => r.body as VouchersDataForSearch)
    );
  }

  /**
   * Path part for operation searchVouchers
   */
  static readonly SearchVouchersPath = '/vouchers';

  /**
   * Searches for vouchers as admin.
   *
   * Returns the list of matching vouchers the authenticated admin can view
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchVouchers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchVouchers$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The minimum / maximum voucher amount
     */
    amountRange?: Array<string>;

    /**
     * The buyer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    buyer?: string;

    /**
     * The ids or internal names of buyers groups
     */
    buyerGroups?: Array<string>;

    /**
     * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;
    creationType?: VoucherCreationTypeEnum;

    /**
     * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;
    orderBy?: VoucherOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * If it is passed, filter if the voucher was printed or not.
     */
    printed?: boolean;

    /**
     * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    redeemPeriod?: Array<string>;

    /**
     * The redeemer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    redeemer?: string;

    /**
     * The ids or internal names of redeemers groups
     */
    redeemerGroups?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<VoucherStatusEnum>;

    /**
     * The voucher token (with or without mask)
     */
    token?: string;

    /**
     * The ids or internal names of voucher types
     */
    types?: Array<string>;

  }): Observable<StrictHttpResponse<Array<VoucherResult>>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.SearchVouchersPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('buyer', params.buyer, {});
      rb.query('buyerGroups', params.buyerGroups, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('creationType', params.creationType, {});
      rb.query('expirationPeriod', params.expirationPeriod, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('printed', params.printed, {});
      rb.query('redeemPeriod', params.redeemPeriod, {});
      rb.query('redeemer', params.redeemer, {});
      rb.query('redeemerGroups', params.redeemerGroups, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('token', params.token, {});
      rb.query('types', params.types, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VoucherResult>>;
      })
    );
  }

  /**
   * Searches for vouchers as admin.
   *
   * Returns the list of matching vouchers the authenticated admin can view
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchVouchers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchVouchers(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The minimum / maximum voucher amount
     */
    amountRange?: Array<string>;

    /**
     * The buyer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    buyer?: string;

    /**
     * The ids or internal names of buyers groups
     */
    buyerGroups?: Array<string>;

    /**
     * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;
    creationType?: VoucherCreationTypeEnum;

    /**
     * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;
    orderBy?: VoucherOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * If it is passed, filter if the voucher was printed or not.
     */
    printed?: boolean;

    /**
     * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    redeemPeriod?: Array<string>;

    /**
     * The redeemer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    redeemer?: string;

    /**
     * The ids or internal names of redeemers groups
     */
    redeemerGroups?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<VoucherStatusEnum>;

    /**
     * The voucher token (with or without mask)
     */
    token?: string;

    /**
     * The ids or internal names of voucher types
     */
    types?: Array<string>;

  }): Observable<Array<VoucherResult>> {

    return this.searchVouchers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VoucherResult>>) => r.body as Array<VoucherResult>)
    );
  }

  /**
   * Path part for operation exportVouchers
   */
  static readonly ExportVouchersPath = '/vouchers/export/{format}';

  /**
   * Exports the vouchers search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /vouchers/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportVouchers()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportVouchers$Response(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * The minimum / maximum voucher amount
     */
    amountRange?: Array<string>;

    /**
     * The buyer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    buyer?: string;

    /**
     * The ids or internal names of buyers groups
     */
    buyerGroups?: Array<string>;

    /**
     * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;
    creationType?: VoucherCreationTypeEnum;

    /**
     * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;
    orderBy?: VoucherOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * If it is passed, filter if the voucher was printed or not.
     */
    printed?: boolean;

    /**
     * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    redeemPeriod?: Array<string>;

    /**
     * The redeemer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    redeemer?: string;

    /**
     * The ids or internal names of redeemers groups
     */
    redeemerGroups?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<VoucherStatusEnum>;

    /**
     * The voucher token (with or without mask)
     */
    token?: string;

    /**
     * The ids or internal names of voucher types
     */
    types?: Array<string>;

    /**
     * Should the exported vouchers be marked as printed? By default doesn&#x27;t mark vouchers as printed.
     */
    markAsPrinted?: boolean;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.ExportVouchersPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('buyer', params.buyer, {});
      rb.query('buyerGroups', params.buyerGroups, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('creationType', params.creationType, {});
      rb.query('expirationPeriod', params.expirationPeriod, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('printed', params.printed, {});
      rb.query('redeemPeriod', params.redeemPeriod, {});
      rb.query('redeemer', params.redeemer, {});
      rb.query('redeemerGroups', params.redeemerGroups, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('token', params.token, {});
      rb.query('types', params.types, {});
      rb.query('markAsPrinted', params.markAsPrinted, {});

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
   * Exports the vouchers search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /vouchers/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportVouchers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportVouchers(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * The minimum / maximum voucher amount
     */
    amountRange?: Array<string>;

    /**
     * The buyer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    buyer?: string;

    /**
     * The ids or internal names of buyers groups
     */
    buyerGroups?: Array<string>;

    /**
     * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;
    creationType?: VoucherCreationTypeEnum;

    /**
     * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;
    orderBy?: VoucherOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * If it is passed, filter if the voucher was printed or not.
     */
    printed?: boolean;

    /**
     * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    redeemPeriod?: Array<string>;

    /**
     * The redeemer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    redeemer?: string;

    /**
     * The ids or internal names of redeemers groups
     */
    redeemerGroups?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<VoucherStatusEnum>;

    /**
     * The voucher token (with or without mask)
     */
    token?: string;

    /**
     * The ids or internal names of voucher types
     */
    types?: Array<string>;

    /**
     * Should the exported vouchers be marked as printed? By default doesn&#x27;t mark vouchers as printed.
     */
    markAsPrinted?: boolean;

  }): Observable<Blob> {

    return this.exportVouchers$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getVoucherDataForGenerate
   */
  static readonly GetVoucherDataForGeneratePath = '/vouchers/data-for-generate';

  /**
   * Returns data for generate vouchers of a specified type or the list of types to generate.
   *
   * If a type is passed it returns the data for generate vouchers, otherwise it returns the list of types the authenticated user can generate. If a user is passed it return its data
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVoucherDataForGenerate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherDataForGenerate$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix\ the value with a single quote (like in Excel spreadsheets);
     */
    user?: string;

    /**
     * Either the &#x60;id&#x60; or &#x60;internalName&#x60; of the voucher type. Left empty to get the list of available types for generate.
     */
    type?: string;

  }): Observable<StrictHttpResponse<VoucherDataForGenerate>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GetVoucherDataForGeneratePath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('user', params.user, {});
      rb.query('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VoucherDataForGenerate>;
      })
    );
  }

  /**
   * Returns data for generate vouchers of a specified type or the list of types to generate.
   *
   * If a type is passed it returns the data for generate vouchers, otherwise it returns the list of types the authenticated user can generate. If a user is passed it return its data
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVoucherDataForGenerate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherDataForGenerate(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix\ the value with a single quote (like in Excel spreadsheets);
     */
    user?: string;

    /**
     * Either the &#x60;id&#x60; or &#x60;internalName&#x60; of the voucher type. Left empty to get the list of available types for generate.
     */
    type?: string;

  }): Observable<VoucherDataForGenerate> {

    return this.getVoucherDataForGenerate$Response(params).pipe(
      map((r: StrictHttpResponse<VoucherDataForGenerate>) => r.body as VoucherDataForGenerate)
    );
  }

  /**
   * Path part for operation generateVouchers
   */
  static readonly GenerateVouchersPath = '/vouchers/generate';

  /**
   * Generate one or more vouchers.
   *
   * Generate vouchers. If a user is passed it will be the vouchers' owner.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateVouchers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateVouchers$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The generate voucher parameters
     */
    body: GenerateVoucher
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GenerateVouchersPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Generate one or more vouchers.
   *
   * Generate vouchers. If a user is passed it will be the vouchers' owner.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generateVouchers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateVouchers(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The generate voucher parameters
     */
    body: GenerateVoucher
  }): Observable<Array<string>> {

    return this.generateVouchers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation viewVoucher
   */
  static readonly ViewVoucherPath = '/vouchers/{key}';

  /**
   * Returns data for a particular voucher.
   *
   * Returns details about a particular voucher, as well as the transactions used to buy and redeem, and the permissions for authenticated over it.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewVoucher()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewVoucher$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#x27;&#x60;).
     */
    key: string;

  }): Observable<StrictHttpResponse<VoucherView>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.ViewVoucherPath, 'get');
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
        return r as StrictHttpResponse<VoucherView>;
      })
    );
  }

  /**
   * Returns data for a particular voucher.
   *
   * Returns details about a particular voucher, as well as the transactions used to buy and redeem, and the permissions for authenticated over it.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewVoucher$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewVoucher(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#x27;&#x60;).
     */
    key: string;

  }): Observable<VoucherView> {

    return this.viewVoucher$Response(params).pipe(
      map((r: StrictHttpResponse<VoucherView>) => r.body as VoucherView)
    );
  }

  /**
   * Path part for operation exportVoucher
   */
  static readonly ExportVoucherPath = '/vouchers/{key}/export/{format}';

  /**
   * Exports a voucher details as file.
   *
   * Generates a file containing the voucher details. The available export formats are returned in `VoucherView`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportVoucher()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportVoucher$Response(params: {

    /**
     * The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#x27;&#x60;).
     */
    key: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Should the exported voucher be marked as printed? By default doesn&#x27;t mark vouchers as printed.
     */
    markAsPrinted?: boolean;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.ExportVoucherPath, 'get');
    if (params) {

      rb.path('key', params.key, {});
      rb.path('format', params.format, {});
      rb.query('markAsPrinted', params.markAsPrinted, {});

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
   * Exports a voucher details as file.
   *
   * Generates a file containing the voucher details. The available export formats are returned in `VoucherView`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportVoucher$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportVoucher(params: {

    /**
     * The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#x27;&#x60;).
     */
    key: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Should the exported voucher be marked as printed? By default doesn&#x27;t mark vouchers as printed.
     */
    markAsPrinted?: boolean;

  }): Observable<Blob> {

    return this.exportVoucher$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getVoucherQrCode
   */
  static readonly GetVoucherQrCodePath = '/vouchers/{key}/qr-code';

  /**
   * Returns the QR-code image for the given voucher.
   *
   * The api documentation page, using swagger-ui (or any direct usage of an image tag), generates a second  request to show the image contents on the preview. This is a new GET request, without passing-in the authentication parameters. As this path requires authentication, the image is shown broken, but the first request works as expected, returning the image content. Optionally, to solve the problem described above and allow to authenticate the user when using sessions, a `sessionToken` or `accessClientToken` plus a `channel` query parameters could be specified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVoucherQrCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherQrCode$Response(params: {

    /**
     * The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#x27;&#x60;).
     */
    key: string;
    size?: ImageSizeEnum;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GetVoucherQrCodePath, 'get');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('size', params.size, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'image/png'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Returns the QR-code image for the given voucher.
   *
   * The api documentation page, using swagger-ui (or any direct usage of an image tag), generates a second  request to show the image contents on the preview. This is a new GET request, without passing-in the authentication parameters. As this path requires authentication, the image is shown broken, but the first request works as expected, returning the image content. Optionally, to solve the problem described above and allow to authenticate the user when using sessions, a `sessionToken` or `accessClientToken` plus a `channel` query parameters could be specified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVoucherQrCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherQrCode(params: {

    /**
     * The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#x27;&#x60;).
     */
    key: string;
    size?: ImageSizeEnum;

  }): Observable<Blob> {

    return this.getVoucherQrCode$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation changeVoucherExpirationDate
   */
  static readonly ChangeVoucherExpirationDatePath = '/vouchers/{key}/change-expiration';

  /**
   * Changes the voucher expiration.
   *
   * Change the expiration date of a voucher in status  `open` or `expired`. This can be done only by admin with permission to change the expiration.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeVoucherExpirationDate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeVoucherExpirationDate$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or token.
     */
    key: string;
  
    /**
     * The parameters to change the voucher's expiration date
     */
    body: ChangeVoucherExpirationDate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.ChangeVoucherExpirationDatePath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('key', params.key, {});

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
   * Changes the voucher expiration.
   *
   * Change the expiration date of a voucher in status  `open` or `expired`. This can be done only by admin with permission to change the expiration.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changeVoucherExpirationDate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeVoucherExpirationDate(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or token.
     */
    key: string;
  
    /**
     * The parameters to change the voucher's expiration date
     */
    body: ChangeVoucherExpirationDate
  }): Observable<void> {

    return this.changeVoucherExpirationDate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cancelVoucher
   */
  static readonly CancelVoucherPath = '/vouchers/{key}/cancel';

  /**
   * Cancels the voucher.
   *
   * Cancels a voucher in status `open`, `expired` or `pending`. If its creation type is `bought` also refund the buyer. This can be done by users with permission to refund over its open or expired vouchers, or by admins with permission to cancel/refund for generated/bought vouchers respectively.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelVoucher()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelVoucher$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or token.
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.CancelVoucherPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('key', params.key, {});

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
   * Cancels the voucher.
   *
   * Cancels a voucher in status `open`, `expired` or `pending`. If its creation type is `bought` also refund the buyer. This can be done by users with permission to refund over its open or expired vouchers, or by admins with permission to cancel/refund for generated/bought vouchers respectively.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelVoucher$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelVoucher(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or token.
     */
    key: string;

  }): Observable<void> {

    return this.cancelVoucher$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserVouchersDataForSearch
   */
  static readonly GetUserVouchersDataForSearchPath = '/{user}/vouchers/data-for-search';

  /**
   * Returns data for searching vouchers a user has bought or redeemed.
   *
   * Returns configuration data used to search vouchers the user has either bought (default) or redeemed (if `relation` is `redeemed`)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserVouchersDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserVouchersDataForSearch$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * Indicates the relation used to filter the vouchers.
     */
    relation?: VoucherRelationEnum;

  }): Observable<StrictHttpResponse<UserVouchersDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GetUserVouchersDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('relation', params.relation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserVouchersDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching vouchers a user has bought or redeemed.
   *
   * Returns configuration data used to search vouchers the user has either bought (default) or redeemed (if `relation` is `redeemed`)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserVouchersDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserVouchersDataForSearch(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * Indicates the relation used to filter the vouchers.
     */
    relation?: VoucherRelationEnum;

  }): Observable<UserVouchersDataForSearch> {

    return this.getUserVouchersDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<UserVouchersDataForSearch>) => r.body as UserVouchersDataForSearch)
    );
  }

  /**
   * Path part for operation searchUserVouchers
   */
  static readonly SearchUserVouchersPath = '/{user}/vouchers';

  /**
   * Searches for vouchers a user has bought or redeemed.
   *
   * Returns the list of matching vouchers the given user has either bought (default) or redeemed (if `type` is `redeemed`)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUserVouchers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserVouchers$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The minimum / maximum voucher amount
     */
    amountRange?: Array<string>;

    /**
     * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The user who perform the redeem action. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    redeemBy?: string;

    /**
     * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    redeemPeriod?: Array<string>;
    relation?: VoucherRelationEnum;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<VoucherStatusEnum>;

    /**
     * The voucher token (with or without mask)
     */
    token?: string;

    /**
     * The ids or internal names of voucher types
     */
    types?: Array<string>;

  }): Observable<StrictHttpResponse<Array<VoucherResult>>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.SearchUserVouchersPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('amountRange', params.amountRange, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('expirationPeriod', params.expirationPeriod, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('redeemBy', params.redeemBy, {});
      rb.query('redeemPeriod', params.redeemPeriod, {});
      rb.query('relation', params.relation, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('token', params.token, {});
      rb.query('types', params.types, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VoucherResult>>;
      })
    );
  }

  /**
   * Searches for vouchers a user has bought or redeemed.
   *
   * Returns the list of matching vouchers the given user has either bought (default) or redeemed (if `type` is `redeemed`)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUserVouchers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserVouchers(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The minimum / maximum voucher amount
     */
    amountRange?: Array<string>;

    /**
     * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The user who perform the redeem action. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    redeemBy?: string;

    /**
     * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    redeemPeriod?: Array<string>;
    relation?: VoucherRelationEnum;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<VoucherStatusEnum>;

    /**
     * The voucher token (with or without mask)
     */
    token?: string;

    /**
     * The ids or internal names of voucher types
     */
    types?: Array<string>;

  }): Observable<Array<VoucherResult>> {

    return this.searchUserVouchers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VoucherResult>>) => r.body as Array<VoucherResult>)
    );
  }

  /**
   * Path part for operation listVoucherTypesForBuy
   */
  static readonly ListVoucherTypesForBuyPath = '/{user}/vouchers/types-for-buy';

  /**
   * Returns the voucher types the authenticated user can buy vouchers to the given user.
   *
   * Use `GET /{user}/vouchers/data-for-buy` without passing a type instead.
   *
   *
   * List the voucher types the user can buy to another user (or himself)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listVoucherTypesForBuy()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  listVoucherTypesForBuy$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

  }): Observable<StrictHttpResponse<Array<VoucherTypeDetailed>>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.ListVoucherTypesForBuyPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VoucherTypeDetailed>>;
      })
    );
  }

  /**
   * Returns the voucher types the authenticated user can buy vouchers to the given user.
   *
   * Use `GET /{user}/vouchers/data-for-buy` without passing a type instead.
   *
   *
   * List the voucher types the user can buy to another user (or himself)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listVoucherTypesForBuy$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  listVoucherTypesForBuy(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

  }): Observable<Array<VoucherTypeDetailed>> {

    return this.listVoucherTypesForBuy$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VoucherTypeDetailed>>) => r.body as Array<VoucherTypeDetailed>)
    );
  }

  /**
   * Path part for operation getVoucherDataForBuy
   */
  static readonly GetVoucherDataForBuyPath = '/{user}/vouchers/data-for-buy';

  /**
   * Returns data for buying a voucher of a specified type or the list of types to buy.
   *
   * If a type is passed it returns the data for buying vouchers, otherwise it returns the list of types the atuhenticated user can buy to the given user (or himself).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVoucherDataForBuy()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherDataForBuy$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * Either the &#x60;id&#x60; or &#x60;internalName&#x60; of the voucher type. Left empty to get the list of available types for buy.
     */
    type?: string;

  }): Observable<StrictHttpResponse<VoucherDataForBuy>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GetVoucherDataForBuyPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VoucherDataForBuy>;
      })
    );
  }

  /**
   * Returns data for buying a voucher of a specified type or the list of types to buy.
   *
   * If a type is passed it returns the data for buying vouchers, otherwise it returns the list of types the atuhenticated user can buy to the given user (or himself).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVoucherDataForBuy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherDataForBuy(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * Either the &#x60;id&#x60; or &#x60;internalName&#x60; of the voucher type. Left empty to get the list of available types for buy.
     */
    type?: string;

  }): Observable<VoucherDataForBuy> {

    return this.getVoucherDataForBuy$Response(params).pipe(
      map((r: StrictHttpResponse<VoucherDataForBuy>) => r.body as VoucherDataForBuy)
    );
  }

  /**
   * Path part for operation buyVouchers
   */
  static readonly BuyVouchersPath = '/{user}/vouchers/buy';

  /**
   * Buys one or more vouchers for the given user.
   *
   * Buys vouchers. If the payment type has custom fields, the values should be passed as well. This service only returns the vouchers list, if  you need information about the voucher status please use  /{user}/vouchers/buy-with-status.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyVouchers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyVouchers$Response(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The buy voucher parameters
     */
    body: BuyVoucher
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.BuyVouchersPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Buys one or more vouchers for the given user.
   *
   * Buys vouchers. If the payment type has custom fields, the values should be passed as well. This service only returns the vouchers list, if  you need information about the voucher status please use  /{user}/vouchers/buy-with-status.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `buyVouchers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyVouchers(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The buy voucher parameters
     */
    body: BuyVoucher
  }): Observable<Array<string>> {

    return this.buyVouchers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation buyVouchersWithStatus
   */
  static readonly BuyVouchersWithStatusPath = '/{user}/vouchers/buy-with-status';

  /**
   * Buys one or more vouchers for the given user returning the status.
   *
   * Buys vouchers. If the payment type has custom fields, the values should  be passed as well. The status returned in the result is shared by all vouchers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyVouchersWithStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyVouchersWithStatus$Response(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The buy voucher parameters
     */
    body: BuyVoucher
  }): Observable<StrictHttpResponse<VoucherBoughtResult>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.BuyVouchersWithStatusPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VoucherBoughtResult>;
      })
    );
  }

  /**
   * Buys one or more vouchers for the given user returning the status.
   *
   * Buys vouchers. If the payment type has custom fields, the values should  be passed as well. The status returned in the result is shared by all vouchers.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `buyVouchersWithStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyVouchersWithStatus(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The buy voucher parameters
     */
    body: BuyVoucher
  }): Observable<VoucherBoughtResult> {

    return this.buyVouchersWithStatus$Response(params).pipe(
      map((r: StrictHttpResponse<VoucherBoughtResult>) => r.body as VoucherBoughtResult)
    );
  }

  /**
   * Path part for operation getVoucherInitialDataForRedeem
   */
  static readonly GetVoucherInitialDataForRedeemPath = '/{user}/vouchers/data-for-redeem';

  /**
   * Returns initial data for redeeming vouchers.
   *
   * Returns initial data for redeeming vouchers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVoucherInitialDataForRedeem()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherInitialDataForRedeem$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

  }): Observable<StrictHttpResponse<VoucherInitialDataForRedeem>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GetVoucherInitialDataForRedeemPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VoucherInitialDataForRedeem>;
      })
    );
  }

  /**
   * Returns initial data for redeeming vouchers.
   *
   * Returns initial data for redeeming vouchers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVoucherInitialDataForRedeem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherInitialDataForRedeem(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

  }): Observable<VoucherInitialDataForRedeem> {

    return this.getVoucherInitialDataForRedeem$Response(params).pipe(
      map((r: StrictHttpResponse<VoucherInitialDataForRedeem>) => r.body as VoucherInitialDataForRedeem)
    );
  }

  /**
   * Path part for operation getVoucherDataForRedeem
   */
  static readonly GetVoucherDataForRedeemPath = '/{user}/vouchers/{token}/data-for-redeem';

  /**
   * Returns data for redeeming a voucher by token.
   *
   * Data for redeeming a specific voucher
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVoucherDataForRedeem()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherDataForRedeem$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The voucher token to be redeemed
     */
    token: string;

  }): Observable<StrictHttpResponse<VoucherDataForRedeem>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.GetVoucherDataForRedeemPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.path('token', params.token, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VoucherDataForRedeem>;
      })
    );
  }

  /**
   * Returns data for redeeming a voucher by token.
   *
   * Data for redeeming a specific voucher
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVoucherDataForRedeem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVoucherDataForRedeem(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

    /**
     * The voucher token to be redeemed
     */
    token: string;

  }): Observable<VoucherDataForRedeem> {

    return this.getVoucherDataForRedeem$Response(params).pipe(
      map((r: StrictHttpResponse<VoucherDataForRedeem>) => r.body as VoucherDataForRedeem)
    );
  }

  /**
   * Path part for operation redeemVoucher
   */
  static readonly RedeemVoucherPath = '/{user}/vouchers/{token}/redeem';

  /**
   * Redeems a voucher for the given user.
   *
   * Redeems a voucher
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `redeemVoucher()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  redeemVoucher$Response(params: {

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
     * The voucher token to be redeemed
     */
    token: string;
  
    /**
     * Additional redeem data
     */
    body?: RedeemVoucher
  }): Observable<StrictHttpResponse<VoucherRedeemResult>> {

    const rb = new RequestBuilder(this.rootUrl, VouchersService.RedeemVoucherPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('token', params.token, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VoucherRedeemResult>;
      })
    );
  }

  /**
   * Redeems a voucher for the given user.
   *
   * Redeems a voucher
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `redeemVoucher$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  redeemVoucher(params: {

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
     * The voucher token to be redeemed
     */
    token: string;
  
    /**
     * Additional redeem data
     */
    body?: RedeemVoucher
  }): Observable<VoucherRedeemResult> {

    return this.redeemVoucher$Response(params).pipe(
      map((r: StrictHttpResponse<VoucherRedeemResult>) => r.body as VoucherRedeemResult)
    );
  }

}
