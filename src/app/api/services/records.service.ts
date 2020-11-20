/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GeneralRecordsDataForSearch } from '../models/general-records-data-for-search';
import { OwnerRecordPermissions } from '../models/owner-record-permissions';
import { RecordDataForEdit } from '../models/record-data-for-edit';
import { RecordDataForNew } from '../models/record-data-for-new';
import { RecordDataForSearch } from '../models/record-data-for-search';
import { RecordEdit } from '../models/record-edit';
import { RecordNew } from '../models/record-new';
import { RecordResult } from '../models/record-result';
import { RecordType } from '../models/record-type';
import { RecordView } from '../models/record-view';
import { RecordWithOwnerResult } from '../models/record-with-owner-result';
import { SharedRecordsDataForSearch } from '../models/shared-records-data-for-search';


/**
 * Provides access to custom records
 */
@Injectable({
  providedIn: 'root',
})
export class RecordsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listRecordTypesByOwner
   */
  static readonly ListRecordTypesByOwnerPath = '/{owner}/record-types';

  /**
   * Lists the record types over a user or system.
   *
   * Returns the record types the authenticated user can view over the given user or system if the `system` owner is used.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listRecordTypesByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRecordTypesByOwner$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<OwnerRecordPermissions>>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.ListRecordTypesByOwnerPath, 'get');
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
        return r as StrictHttpResponse<Array<OwnerRecordPermissions>>;
      })
    );
  }

  /**
   * Lists the record types over a user or system.
   *
   * Returns the record types the authenticated user can view over the given user or system if the `system` owner is used.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listRecordTypesByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRecordTypesByOwner(params: {

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

  }): Observable<Array<OwnerRecordPermissions>> {

    return this.listRecordTypesByOwner$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OwnerRecordPermissions>>) => r.body as Array<OwnerRecordPermissions>)
    );
  }

  /**
   * Path part for operation getRecordTypeByOwner
   */
  static readonly GetRecordTypeByOwnerPath = '/{owner}/record-types/{type}';

  /**
   * Returns a single record type over a user or system.
   *
   * Returns the a specific record type the authenticated user can view over the given user or system if the `system` owner is used.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordTypeByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordTypeByOwner$Response(params: {

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

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

  }): Observable<StrictHttpResponse<OwnerRecordPermissions>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.GetRecordTypeByOwnerPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OwnerRecordPermissions>;
      })
    );
  }

  /**
   * Returns a single record type over a user or system.
   *
   * Returns the a specific record type the authenticated user can view over the given user or system if the `system` owner is used.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecordTypeByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordTypeByOwner(params: {

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

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

  }): Observable<OwnerRecordPermissions> {

    return this.getRecordTypeByOwner$Response(params).pipe(
      map((r: StrictHttpResponse<OwnerRecordPermissions>) => r.body as OwnerRecordPermissions)
    );
  }

  /**
   * Path part for operation getRecordDataForOwnerSearch
   */
  static readonly GetRecordDataForOwnerSearchPath = '/{owner}/records/{type}/data-for-search';

  /**
   * Returns data for searching records of a specific type and owner.
   *
   * Returns data for searching records of a specific type, either for system or user records, depending on the `owner` parameter.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordDataForOwnerSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForOwnerSearch$Response(params: {

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

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

  }): Observable<StrictHttpResponse<RecordDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.GetRecordDataForOwnerSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RecordDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching records of a specific type and owner.
   *
   * Returns data for searching records of a specific type, either for system or user records, depending on the `owner` parameter.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecordDataForOwnerSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForOwnerSearch(params: {

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

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

  }): Observable<RecordDataForSearch> {

    return this.getRecordDataForOwnerSearch$Response(params).pipe(
      map((r: StrictHttpResponse<RecordDataForSearch>) => r.body as RecordDataForSearch)
    );
  }

  /**
   * Path part for operation searchOwnerRecords
   */
  static readonly SearchOwnerRecordsPath = '/{owner}/records/{type}';

  /**
   * Searches for records of a specific type and owner.
   *
   * Returns records matching the search criteria, for a specific type,  either for system or user records, depending on the `owner` parameter. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOwnerRecords()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOwnerRecords$Response(params: {

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

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

  }): Observable<StrictHttpResponse<Array<RecordResult>>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.SearchOwnerRecordsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('type', params.type, {});
      rb.query('createdBy', params.createdBy, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('customFields', params.customFields, {});
      rb.query('keywords', params.keywords, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RecordResult>>;
      })
    );
  }

  /**
   * Searches for records of a specific type and owner.
   *
   * Returns records matching the search criteria, for a specific type,  either for system or user records, depending on the `owner` parameter. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchOwnerRecords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOwnerRecords(params: {

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

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

  }): Observable<Array<RecordResult>> {

    return this.searchOwnerRecords$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RecordResult>>) => r.body as Array<RecordResult>)
    );
  }

  /**
   * Path part for operation createRecord
   */
  static readonly CreateRecordPath = '/{owner}/records/{type}';

  /**
   * Creates a new record for the given owner and type.
   *
   * Creates a new record for the given owner and type. If the owner is `system` will be a system record. Otherwise will be a user record.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRecord$Response(params: {

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
     * Either the identifier or internal name of the record type
     */
    type: string;
  
    /**
     * The record to be created
     */
    body: RecordNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.CreateRecordPath, 'post');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('type', params.type, {});

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
   * Creates a new record for the given owner and type.
   *
   * Creates a new record for the given owner and type. If the owner is `system` will be a system record. Otherwise will be a user record.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRecord(params: {

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
     * Either the identifier or internal name of the record type
     */
    type: string;
  
    /**
     * The record to be created
     */
    body: RecordNew
  }): Observable<string> {

    return this.createRecord$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation exportOwnerRecords
   */
  static readonly ExportOwnerRecordsPath = '/{owner}/records/{type}/export/{format}';

  /**
   * Exports the records search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /{owner}/records/{type}/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportOwnerRecords()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportOwnerRecords$Response(params: {

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
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.ExportOwnerRecordsPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.path('type', params.type, {});
      rb.path('format', params.format, {});
      rb.query('createdBy', params.createdBy, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('customFields', params.customFields, {});
      rb.query('keywords', params.keywords, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});

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
   * Exports the records search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /{owner}/records/{type}/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportOwnerRecords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportOwnerRecords(params: {

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
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

  }): Observable<Blob> {

    return this.exportOwnerRecords$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getRecordDataForNew
   */
  static readonly GetRecordDataForNewPath = '/{owner}/records/{type}/data-for-new';

  /**
   * Returns data to create a new record.
   *
   * Returns configuration data for creating a record for the given owner and type. If the owner is `system` will be a system record. Otherwise will be a user record.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForNew$Response(params: {

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

    /**
     * The record type to be created
     */
    type: string;

  }): Observable<StrictHttpResponse<RecordDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.GetRecordDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RecordDataForNew>;
      })
    );
  }

  /**
   * Returns data to create a new record.
   *
   * Returns configuration data for creating a record for the given owner and type. If the owner is `system` will be a system record. Otherwise will be a user record.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecordDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForNew(params: {

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

    /**
     * The record type to be created
     */
    type: string;

  }): Observable<RecordDataForNew> {

    return this.getRecordDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<RecordDataForNew>) => r.body as RecordDataForNew)
    );
  }

  /**
   * Path part for operation getRecordDataForEdit
   */
  static readonly GetRecordDataForEditPath = '/records/{id}/data-for-edit';

  /**
   * Returns data to edit an existing record.
   *
   * Returns configuration data for editing a record, plus the current `RecordEdit` object that can be altered and sent back
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForEdit$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<RecordDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.GetRecordDataForEditPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RecordDataForEdit>;
      })
    );
  }

  /**
   * Returns data to edit an existing record.
   *
   * Returns configuration data for editing a record, plus the current `RecordEdit` object that can be altered and sent back
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecordDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForEdit(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<RecordDataForEdit> {

    return this.getRecordDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<RecordDataForEdit>) => r.body as RecordDataForEdit)
    );
  }

  /**
   * Path part for operation viewRecord
   */
  static readonly ViewRecordPath = '/records/{id}';

  /**
   * Returns details of a specific record.
   *
   * Returns information about a record, located by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewRecord$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<RecordView>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.ViewRecordPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RecordView>;
      })
    );
  }

  /**
   * Returns details of a specific record.
   *
   * Returns information about a record, located by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewRecord(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<RecordView> {

    return this.viewRecord$Response(params).pipe(
      map((r: StrictHttpResponse<RecordView>) => r.body as RecordView)
    );
  }

  /**
   * Path part for operation updateRecord
   */
  static readonly UpdateRecordPath = '/records/{id}';

  /**
   * Updates an existing record.
   *
   * Updates an existing record
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRecord$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The record to be edited
     */
    body: RecordEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.UpdateRecordPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

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
   * Updates an existing record.
   *
   * Updates an existing record
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRecord(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The record to be edited
     */
    body: RecordEdit
  }): Observable<void> {

    return this.updateRecord$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteRecord
   */
  static readonly DeleteRecordPath = '/records/{id}';

  /**
   * Removes a record.
   *
   * Removes a record
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRecord$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.DeleteRecordPath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

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
   * Removes a record.
   *
   * Removes a record
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRecord(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteRecord$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation listRecordTypesForGeneralSearch
   */
  static readonly ListRecordTypesForGeneralSearchPath = '/general-records/record-types';

  /**
   * Lists the record types for general search.
   *
   * Returns the record types the authenticated user can use to search records in general, that is, without being of a particular user, but any managed user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listRecordTypesForGeneralSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRecordTypesForGeneralSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<Array<RecordType>>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.ListRecordTypesForGeneralSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RecordType>>;
      })
    );
  }

  /**
   * Lists the record types for general search.
   *
   * Returns the record types the authenticated user can use to search records in general, that is, without being of a particular user, but any managed user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listRecordTypesForGeneralSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRecordTypesForGeneralSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<Array<RecordType>> {

    return this.listRecordTypesForGeneralSearch$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RecordType>>) => r.body as Array<RecordType>)
    );
  }

  /**
   * Path part for operation getRecordDataForGeneralSearch
   */
  static readonly GetRecordDataForGeneralSearchPath = '/general-records/{type}/data-for-search';

  /**
   * Returns data for searching records of a type over any owner.
   *
   * Returns data for searching records of a specific type over any owner. Is not tied to a particular owner (user or system), hence, is considered a general search.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordDataForGeneralSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForGeneralSearch$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

  }): Observable<StrictHttpResponse<GeneralRecordsDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.GetRecordDataForGeneralSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralRecordsDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching records of a type over any owner.
   *
   * Returns data for searching records of a specific type over any owner. Is not tied to a particular owner (user or system), hence, is considered a general search.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecordDataForGeneralSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForGeneralSearch(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

  }): Observable<GeneralRecordsDataForSearch> {

    return this.getRecordDataForGeneralSearch$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralRecordsDataForSearch>) => r.body as GeneralRecordsDataForSearch)
    );
  }

  /**
   * Path part for operation searchGeneralRecords
   */
  static readonly SearchGeneralRecordsPath = '/general-records/{type}';

  /**
   * Searches for records of a specific type over any owner.
   *
   * Returns records matching the search criteria, for a specific type. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchGeneralRecords()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchGeneralRecords$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<RecordWithOwnerResult>>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.SearchGeneralRecordsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('type', params.type, {});
      rb.query('brokers', params.brokers, {});
      rb.query('createdBy', params.createdBy, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('customFields', params.customFields, {});
      rb.query('groups', params.groups, {});
      rb.query('keywords', params.keywords, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RecordWithOwnerResult>>;
      })
    );
  }

  /**
   * Searches for records of a specific type over any owner.
   *
   * Returns records matching the search criteria, for a specific type. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchGeneralRecords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchGeneralRecords(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<Array<RecordWithOwnerResult>> {

    return this.searchGeneralRecords$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RecordWithOwnerResult>>) => r.body as Array<RecordWithOwnerResult>)
    );
  }

  /**
   * Path part for operation exportGeneralRecords
   */
  static readonly ExportGeneralRecordsPath = '/general-records/{type}/export/{format}';

  /**
   * Exports the general records search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /general-records/{type}/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportGeneralRecords()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportGeneralRecords$Response(params: {

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.ExportGeneralRecordsPath, 'get');
    if (params) {

      rb.path('type', params.type, {});
      rb.path('format', params.format, {});
      rb.query('brokers', params.brokers, {});
      rb.query('createdBy', params.createdBy, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('customFields', params.customFields, {});
      rb.query('groups', params.groups, {});
      rb.query('keywords', params.keywords, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('profileFields', params.profileFields, {});
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
   * Exports the general records search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /general-records/{type}/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportGeneralRecords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportGeneralRecords(params: {

    /**
     * Either the identifier or internal name of the record type
     */
    type: string;

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<Blob> {

    return this.exportGeneralRecords$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getRecordDataForSharedSearch
   */
  static readonly GetRecordDataForSharedSearchPath = '/shared-records/data-for-search';

  /**
   * Returns data for searching records with shared fields.
   *
   * Returns data for searching records from multiple types, using shared fields. Only user records can be shared this way.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordDataForSharedSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForSharedSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<SharedRecordsDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.GetRecordDataForSharedSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SharedRecordsDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching records with shared fields.
   *
   * Returns data for searching records from multiple types, using shared fields. Only user records can be shared this way.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecordDataForSharedSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordDataForSharedSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<SharedRecordsDataForSearch> {

    return this.getRecordDataForSharedSearch$Response(params).pipe(
      map((r: StrictHttpResponse<SharedRecordsDataForSearch>) => r.body as SharedRecordsDataForSearch)
    );
  }

  /**
   * Path part for operation searchSharedRecords
   */
  static readonly SearchSharedRecordsPath = '/shared-records';

  /**
   * Searches for records with shared fields.
   *
   * Returns records matching the search criteria, using shared fields. This allows searching over multiple record types that use shared fields. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchSharedRecords()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchSharedRecords$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the ids or identification methods of record types
     */
    types?: Array<string>;

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<RecordWithOwnerResult>>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.SearchSharedRecordsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('brokers', params.brokers, {});
      rb.query('createdBy', params.createdBy, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('customFields', params.customFields, {});
      rb.query('groups', params.groups, {});
      rb.query('keywords', params.keywords, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('types', params.types, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RecordWithOwnerResult>>;
      })
    );
  }

  /**
   * Searches for records with shared fields.
   *
   * Returns records matching the search criteria, using shared fields. This allows searching over multiple record types that use shared fields. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchSharedRecords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchSharedRecords(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the ids or identification methods of record types
     */
    types?: Array<string>;

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<Array<RecordWithOwnerResult>> {

    return this.searchSharedRecords$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RecordWithOwnerResult>>) => r.body as Array<RecordWithOwnerResult>)
    );
  }

  /**
   * Path part for operation exportSharedRecords
   */
  static readonly ExportSharedRecordsPath = '/shared-records/export/{format}';

  /**
   * Exports the shared fields records search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /transfers/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportSharedRecords()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportSharedRecords$Response(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the ids or identification methods of record types
     */
    types?: Array<string>;

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, RecordsService.ExportSharedRecordsPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('brokers', params.brokers, {});
      rb.query('createdBy', params.createdBy, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('customFields', params.customFields, {});
      rb.query('groups', params.groups, {});
      rb.query('keywords', params.keywords, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('types', params.types, {});
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
   * Exports the shared fields records search results as file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /transfers/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportSharedRecords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportSharedRecords(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either the ids or identification methods of record owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * Either the id or identifier of the user that created the record
     */
    createdBy?: string;

    /**
     * The minimum / maximum record creation date
     */
    creationPeriod?: Array<string>;

    /**
     * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customFields&#x3D;extraDate:|2001-12-31&#x60;. A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: &#x60;customFields&#x3D;dynamic:a|b|c&#x60;. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: &#x60;customFields&#x3D;dynamic:&#x27;business&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Either the ids or internal names of record owners&#x27; groups
     */
    groups?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

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

    /**
     * Either the ids or identification methods of record types
     */
    types?: Array<string>;

    /**
     * Either the id or identifier of the record owner
     */
    user?: string;

  }): Observable<Blob> {

    return this.exportSharedRecords$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
