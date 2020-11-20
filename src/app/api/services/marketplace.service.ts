/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AdAddressResultEnum } from '../models/ad-address-result-enum';
import { AdDataForEdit } from '../models/ad-data-for-edit';
import { AdDataForNew } from '../models/ad-data-for-new';
import { AdDataForSearch } from '../models/ad-data-for-search';
import { AdEdit } from '../models/ad-edit';
import { AdKind } from '../models/ad-kind';
import { AdNew } from '../models/ad-new';
import { AdOrderByEnum } from '../models/ad-order-by-enum';
import { AdResult } from '../models/ad-result';
import { AdStatusEnum } from '../models/ad-status-enum';
import { AdView } from '../models/ad-view';
import { UserAdsDataForSearch } from '../models/user-ads-data-for-search';


/**
 * Provides access to the marketplace, that is, searching or managing advertisements. The name `marketplace` is used on paths instead of `ads` or `advertisements` because one of the use cases of this API is to be used directly by pages from the browser, and ad-blocking browser extensions would normally deny such requests.
 */
@Injectable({
  providedIn: 'root',
})
export class MarketplaceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAdDataForSearch
   */
  static readonly GetAdDataForSearchPath = '/marketplace/data-for-search';

  /**
   * Returns configuration data for searching advertisements.
   *
   * Returns data needed on for a general advertisements search.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched.
     */
    kind?: AdKind;

    /**
     * If the authenticated is a broker, passing the &#x60;true&#x60; value will indicate the advertisements to be searched are from managed users of that broker. The default is &#x60;false&#x60;.
     */
    brokered?: boolean;

  }): Observable<StrictHttpResponse<AdDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.GetAdDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('kind', params.kind, {});
      rb.query('brokered', params.brokered, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdDataForSearch>;
      })
    );
  }

  /**
   * Returns configuration data for searching advertisements.
   *
   * Returns data needed on for a general advertisements search.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched.
     */
    kind?: AdKind;

    /**
     * If the authenticated is a broker, passing the &#x60;true&#x60; value will indicate the advertisements to be searched are from managed users of that broker. The default is &#x60;false&#x60;.
     */
    brokered?: boolean;

  }): Observable<AdDataForSearch> {

    return this.getAdDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<AdDataForSearch>) => r.body as AdDataForSearch)
    );
  }

  /**
   * Path part for operation searchAds
   */
  static readonly SearchAdsPath = '/marketplace';

  /**
   * Searches for advertisements.
   *
   * Returns a page of advertisements that match a given criteria.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchAds()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAds$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
    addressResult?: AdAddressResultEnum;

    /**
     * Use &#x60;brokers&#x60; instead.
     */
    broker?: string;

    /**
     * Either ids or an identifications, such as login name, e-mail, etc, for the brokers of the advertisement owner. Can only be used when searching with a broker himself or admin.
     */
    brokers?: Array<string>;

    /**
     * Either id or internal name of a category
     */
    category?: string;

    /**
     * Either id or internal name of a currency for the price
     */
    currency?: string;

    /**
     * Advertisement custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;

    /**
     * Array of either id or internal names of user groups the advertisement owner must belong to
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; only advertisements with images are returned
     */
    hasImages?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;
    kind?: AdKind;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;
    orderBy?: AdOrderByEnum;

    /**
     * Use &#x60;user&#x60; instead.
     *
     * Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.
     */
    owner?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The minumum / maximum price. Used only if a currency is specified. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    priceRange?: Array<string>;

    /**
     * Textual search for a product number for webshop only.
     */
    productNumber?: string;

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
     * The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    publicationPeriod?: Array<string>;

    /**
     * Whether to return the editable property. Passing &#x60;true&#x60; will impact the performance a bit, as for each returned advertisement some statuses and permissions need to be checked.
     */
    returnEditable?: boolean;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<AdStatusEnum>;

    /**
     * Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<AdResult>>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.SearchAdsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('broker', params.broker, {});
      rb.query('brokers', params.brokers, {});
      rb.query('category', params.category, {});
      rb.query('currency', params.currency, {});
      rb.query('customFields', params.customFields, {});
      rb.query('expirationPeriod', params.expirationPeriod, {});
      rb.query('groups', params.groups, {});
      rb.query('hasImages', params.hasImages, {});
      rb.query('keywords', params.keywords, {});
      rb.query('kind', params.kind, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('owner', params.owner, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('priceRange', params.priceRange, {});
      rb.query('productNumber', params.productNumber, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('publicationPeriod', params.publicationPeriod, {});
      rb.query('returnEditable', params.returnEditable, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdResult>>;
      })
    );
  }

  /**
   * Searches for advertisements.
   *
   * Returns a page of advertisements that match a given criteria.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchAds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchAds(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
    addressResult?: AdAddressResultEnum;

    /**
     * Use &#x60;brokers&#x60; instead.
     */
    broker?: string;

    /**
     * Either ids or an identifications, such as login name, e-mail, etc, for the brokers of the advertisement owner. Can only be used when searching with a broker himself or admin.
     */
    brokers?: Array<string>;

    /**
     * Either id or internal name of a category
     */
    category?: string;

    /**
     * Either id or internal name of a currency for the price
     */
    currency?: string;

    /**
     * Advertisement custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;

    /**
     * Array of either id or internal names of user groups the advertisement owner must belong to
     */
    groups?: Array<string>;

    /**
     * When set to &#x60;true&#x60; only advertisements with images are returned
     */
    hasImages?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;
    kind?: AdKind;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;
    orderBy?: AdOrderByEnum;

    /**
     * Use &#x60;user&#x60; instead.
     *
     * Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.
     */
    owner?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The minumum / maximum price. Used only if a currency is specified. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    priceRange?: Array<string>;

    /**
     * Textual search for a product number for webshop only.
     */
    productNumber?: string;

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
     * The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    publicationPeriod?: Array<string>;

    /**
     * Whether to return the editable property. Passing &#x60;true&#x60; will impact the performance a bit, as for each returned advertisement some statuses and permissions need to be checked.
     */
    returnEditable?: boolean;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<AdStatusEnum>;

    /**
     * Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.
     */
    user?: string;

  }): Observable<Array<AdResult>> {

    return this.searchAds$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AdResult>>) => r.body as Array<AdResult>)
    );
  }

  /**
   * Path part for operation getUserAdsDataForSearch
   */
  static readonly GetUserAdsDataForSearchPath = '/{user}/marketplace/data-for-search';

  /**
   * Returns configuration data for searching advertisements of a user.
   *
   * Returns data needed on for a user's advertisements search.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserAdsDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAdsDataForSearch$Response(params: {

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
     * Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched.
     */
    kind?: AdKind;

  }): Observable<StrictHttpResponse<UserAdsDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.GetUserAdsDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('kind', params.kind, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserAdsDataForSearch>;
      })
    );
  }

  /**
   * Returns configuration data for searching advertisements of a user.
   *
   * Returns data needed on for a user's advertisements search.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserAdsDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAdsDataForSearch(params: {

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
     * Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched.
     */
    kind?: AdKind;

  }): Observable<UserAdsDataForSearch> {

    return this.getUserAdsDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<UserAdsDataForSearch>) => r.body as UserAdsDataForSearch)
    );
  }

  /**
   * Path part for operation getAdDataForNew
   */
  static readonly GetAdDataForNewPath = '/{user}/marketplace/data-for-new';

  /**
   * Returns configuration data for creating a new advertisement for a user and kind.
   *
   * Returns data for creating a new advertisement for the given user. The `kind` should be informed. If not set, `simple` is assumed. Currently only `simple` advertisements can be created through this API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdDataForNew$Response(params: {

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
     * Indicates the advertisement id to be based on by copying some data (e.g publication period) to the new advertisement.
     */
    basedOnId?: string;
    kind?: AdKind;

  }): Observable<StrictHttpResponse<AdDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.GetAdDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('basedOnId', params.basedOnId, {});
      rb.query('kind', params.kind, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdDataForNew>;
      })
    );
  }

  /**
   * Returns configuration data for creating a new advertisement for a user and kind.
   *
   * Returns data for creating a new advertisement for the given user. The `kind` should be informed. If not set, `simple` is assumed. Currently only `simple` advertisements can be created through this API.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdDataForNew(params: {

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
     * Indicates the advertisement id to be based on by copying some data (e.g publication period) to the new advertisement.
     */
    basedOnId?: string;
    kind?: AdKind;

  }): Observable<AdDataForNew> {

    return this.getAdDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<AdDataForNew>) => r.body as AdDataForNew)
    );
  }

  /**
   * Path part for operation searchUserAds
   */
  static readonly SearchUserAdsPath = '/{user}/marketplace';

  /**
   * Searches for advertisements of a specific user.
   *
   * Returns a page of advertisements that match a given criteria for a given  user. Equivallent to calling `GET /marketplace?owner={user}`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUserAds()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserAds$Response(params: {

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
    addressResult?: AdAddressResultEnum;

    /**
     * Either id or internal name of a category
     */
    category?: string;

    /**
     * Either id or internal name of a currency for the price
     */
    currency?: string;

    /**
     * Advertisement custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; only advertisements with images are returned
     */
    hasImages?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;
    kind?: AdKind;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;
    orderBy?: AdOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The minumum / maximum price. Used only if a currency is specified. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    priceRange?: Array<string>;

    /**
     * Textual search for a product number for webshop only.
     */
    productNumber?: string;

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
     * The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    publicationPeriod?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<AdStatusEnum>;

  }): Observable<StrictHttpResponse<Array<AdResult>>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.SearchUserAdsPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('category', params.category, {});
      rb.query('currency', params.currency, {});
      rb.query('customFields', params.customFields, {});
      rb.query('expirationPeriod', params.expirationPeriod, {});
      rb.query('hasImages', params.hasImages, {});
      rb.query('keywords', params.keywords, {});
      rb.query('kind', params.kind, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('priceRange', params.priceRange, {});
      rb.query('productNumber', params.productNumber, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('publicationPeriod', params.publicationPeriod, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdResult>>;
      })
    );
  }

  /**
   * Searches for advertisements of a specific user.
   *
   * Returns a page of advertisements that match a given criteria for a given  user. Equivallent to calling `GET /marketplace?owner={user}`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUserAds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserAds(params: {

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
    addressResult?: AdAddressResultEnum;

    /**
     * Either id or internal name of a category
     */
    category?: string;

    /**
     * Either id or internal name of a currency for the price
     */
    currency?: string;

    /**
     * Advertisement custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    expirationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; only advertisements with images are returned
     */
    hasImages?: boolean;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;
    kind?: AdKind;

    /**
     * The reference latitude for distance searches
     */
    latitude?: number;

    /**
     * The reference longitude for distance searches
     */
    longitude?: number;

    /**
     * Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.
     */
    maxDistance?: number;
    orderBy?: AdOrderByEnum;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The minumum / maximum price. Used only if a currency is specified. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    priceRange?: Array<string>;

    /**
     * Textual search for a product number for webshop only.
     */
    productNumber?: string;

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
     * The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    publicationPeriod?: Array<string>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<AdStatusEnum>;

  }): Observable<Array<AdResult>> {

    return this.searchUserAds$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AdResult>>) => r.body as Array<AdResult>)
    );
  }

  /**
   * Path part for operation createAd
   */
  static readonly CreateAdPath = '/{user}/marketplace';

  /**
   * Creates a new advertisement for the given user.
   *
   * Creates a new advertisement for the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAd()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAd$Response(params: {

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
     * The advertisement to be created.
     */
    body: AdNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.CreateAdPath, 'post');
    if (params) {

      rb.path('user', params.user, {});

      rb.body(params.body, 'application/json');
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
   * Creates a new advertisement for the given user.
   *
   * Creates a new advertisement for the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAd$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAd(params: {

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
     * The advertisement to be created.
     */
    body: AdNew
  }): Observable<string> {

    return this.createAd$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getAdDataForEdit
   */
  static readonly GetAdDataForEditPath = '/marketplace/{ad}/data-for-edit';

  /**
   * Returns configuration data for editing an advertisement.
   *
   * Returns configuration data which can be used to edit an advertisement.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdDataForEdit$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<AdDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.GetAdDataForEditPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdDataForEdit>;
      })
    );
  }

  /**
   * Returns configuration data for editing an advertisement.
   *
   * Returns configuration data which can be used to edit an advertisement.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdDataForEdit(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<AdDataForEdit> {

    return this.getAdDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<AdDataForEdit>) => r.body as AdDataForEdit)
    );
  }

  /**
   * Path part for operation viewAd
   */
  static readonly ViewAdPath = '/marketplace/{ad}';

  /**
   * Returns details of an advertisement.
   *
   * Returns detailed information of an advertisement.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewAd()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewAd$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<AdView>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.ViewAdPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdView>;
      })
    );
  }

  /**
   * Returns details of an advertisement.
   *
   * Returns detailed information of an advertisement.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewAd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewAd(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<AdView> {

    return this.viewAd$Response(params).pipe(
      map((r: StrictHttpResponse<AdView>) => r.body as AdView)
    );
  }

  /**
   * Path part for operation updateAd
   */
  static readonly UpdateAdPath = '/marketplace/{ad}';

  /**
   * Updates an existing advertisement.
   *
   * Updates an existing advertisement.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAd()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAd$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
  
    /**
     * The advertisement to be edited.
     */
    body: AdEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.UpdateAdPath, 'put');
    if (params) {

      rb.path('ad', params.ad, {});

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
   * Updates an existing advertisement.
   *
   * Updates an existing advertisement.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAd$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAd(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
  
    /**
     * The advertisement to be edited.
     */
    body: AdEdit
  }): Observable<void> {

    return this.updateAd$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteAd
   */
  static readonly DeleteAdPath = '/marketplace/{ad}';

  /**
   * Removes an advertisement.
   *
   * Removes an advertisement by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAd()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAd$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.DeleteAdPath, 'delete');
    if (params) {

      rb.path('ad', params.ad, {});

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
   * Removes an advertisement.
   *
   * Removes an advertisement by id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAd(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<void> {

    return this.deleteAd$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exportAd
   */
  static readonly ExportAdPath = '/marketplace/{ad}/export/{format}';

  /**
   * Exports the advertisement details to a file.
   *
   * Exports the advertisement details to a file. The available formats are available in `AdView`
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportAd()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAd$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The format to export the data
     */
    format: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.ExportAdPath, 'get');
    if (params) {

      rb.path('ad', params.ad, {});
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
   * Exports the advertisement details to a file.
   *
   * Exports the advertisement details to a file. The available formats are available in `AdView`
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportAd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAd(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The format to export the data
     */
    format: string;

  }): Observable<Blob> {

    return this.exportAd$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation hideAd
   */
  static readonly HideAdPath = '/marketplace/{ad}/hide';

  /**
   * Hides an advertisement by id.
   *
   * Hides an advertisement thus making it visible only for the owner and its managers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hideAd()` instead.
   *
   * This method doesn't expect any request body.
   */
  hideAd$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.HideAdPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});

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
   * Hides an advertisement by id.
   *
   * Hides an advertisement thus making it visible only for the owner and its managers.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hideAd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  hideAd(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<void> {

    return this.hideAd$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation unhideAd
   */
  static readonly UnhideAdPath = '/marketplace/{ad}/unhide';

  /**
   * Unhides an advertisement by id.
   *
   * Unhides an advertisement thus making it visible for other members.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unhideAd()` instead.
   *
   * This method doesn't expect any request body.
   */
  unhideAd$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.UnhideAdPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});

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
   * Unhides an advertisement by id.
   *
   * Unhides an advertisement thus making it visible for other members.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `unhideAd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unhideAd(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<void> {

    return this.unhideAd$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation setAdAsDraft
   */
  static readonly SetAdAsDraftPath = '/marketplace/{ad}/set-as-draft';

  /**
   * Change the advertisement status to `draft`.
   *
   * Change the advertisement status to `draft` thus making it only visible for the owner.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setAdAsDraft()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  setAdAsDraft$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
  
    /**
     * The comments for the action. Only if the authenticated user is a manager of the advertisement's owner with permissions to manage pending ads.
     */
    body?: string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.SetAdAsDraftPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});

      rb.body(params.body, 'text/plain');
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
   * Change the advertisement status to `draft`.
   *
   * Change the advertisement status to `draft` thus making it only visible for the owner.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setAdAsDraft$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  setAdAsDraft(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
  
    /**
     * The comments for the action. Only if the authenticated user is a manager of the advertisement's owner with permissions to manage pending ads.
     */
    body?: string
  }): Observable<void> {

    return this.setAdAsDraft$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation submitAdForAuthorization
   */
  static readonly SubmitAdForAuthorizationPath = '/marketplace/{ad}/request-authorization';

  /**
   * Request for authorization for an advertisement.
   *
   * Request for authorization for an advertisement. Only if the system is configured to require authorizations and the authenticated user is the owner of the advertisement. The advertisement will remain in status `pending` until approved or rejected.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitAdForAuthorization()` instead.
   *
   * This method doesn't expect any request body.
   */
  submitAdForAuthorization$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.SubmitAdForAuthorizationPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});

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
   * Request for authorization for an advertisement.
   *
   * Request for authorization for an advertisement. Only if the system is configured to require authorizations and the authenticated user is the owner of the advertisement. The advertisement will remain in status `pending` until approved or rejected.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `submitAdForAuthorization$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  submitAdForAuthorization(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<void> {

    return this.submitAdForAuthorization$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation approveAd
   */
  static readonly ApproveAdPath = '/marketplace/{ad}/approve';

  /**
   * Approves a pending advertisement.
   *
   * Change the advertisement status from `pending` to `active`, making it publcly visible.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveAd()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveAd$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.ApproveAdPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});

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
   * Approves a pending advertisement.
   *
   * Change the advertisement status from `pending` to `active`, making it publcly visible.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `approveAd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveAd(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<void> {

    return this.approveAd$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation rejectAd
   */
  static readonly RejectAdPath = '/marketplace/{ad}/reject';

  /**
   * Rejects a pending advertisement.
   *
   * Change the advertisement status from `pending` to `draft`, making it visible only to its owner. A comment text is set in the request body.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rejectAd()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  rejectAd$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
  
    /**
     * The comments for the action.
     */
    body?: string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MarketplaceService.RejectAdPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});

      rb.body(params.body, 'text/plain');
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
   * Rejects a pending advertisement.
   *
   * Change the advertisement status from `pending` to `draft`, making it visible only to its owner. A comment text is set in the request body.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rejectAd$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  rejectAd(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
  
    /**
     * The comments for the action.
     */
    body?: string
  }): Observable<void> {

    return this.rejectAd$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
