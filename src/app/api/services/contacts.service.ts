/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ContactDataForEdit } from '../models/contact-data-for-edit';
import { ContactDataForNew } from '../models/contact-data-for-new';
import { ContactEdit } from '../models/contact-edit';
import { ContactListDataForSearch } from '../models/contact-list-data-for-search';
import { ContactNew } from '../models/contact-new';
import { ContactOrderByEnum } from '../models/contact-order-by-enum';
import { ContactResult } from '../models/contact-result';
import { ContactView } from '../models/contact-view';
import { UserResult } from '../models/user-result';


/**
 * Management of a user contact list.
 */
@Injectable({
  providedIn: 'root',
})
export class ContactsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchContacts
   */
  static readonly SearchContactsPath = '/{user}/contacts';

  /**
   * Search users which are contacts of a specific user.
   *
   * Returns a page of users that are contacts of the given user. This path works as such for backwards compatibility reason. In general, seaching the contact list of a user should use the `GET /{user}/contact-list` operation instead. That way contact custom fields will be properly handled. However the `GET /{user}/contacts` operation is kept for simple cases where only the contact users, not the contact relation are desired. The fields returned depend on the products, in the profile fields of other users setting. Only fields (both basic or custom) marked to be returned on user list are returned. If no fields are set to be returned, the resulting objects will have the `display` and `shortDisplay` filled in. However, those fields are not returned when another profile field is returned, preventing duplicated data to be returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchContacts()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchContacts$Response(params: {

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
     * When set to &#x60;true&#x60;, instead of returning users with corresponding profile fields set on list, will return them with &#x60;display&#x60; and &#x60;shortDisplay&#x60;.
     */
    ignoreProfileFieldsInList?: boolean;

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

  }): Observable<StrictHttpResponse<Array<UserResult>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.SearchContactsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('ignoreProfileFieldsInList', params.ignoreProfileFieldsInList, {});
      rb.query('includeGroup', params.includeGroup, {});
      rb.query('includeGroupSet', params.includeGroupSet, {});
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
        return r as StrictHttpResponse<Array<UserResult>>;
      })
    );
  }

  /**
   * Search users which are contacts of a specific user.
   *
   * Returns a page of users that are contacts of the given user. This path works as such for backwards compatibility reason. In general, seaching the contact list of a user should use the `GET /{user}/contact-list` operation instead. That way contact custom fields will be properly handled. However the `GET /{user}/contacts` operation is kept for simple cases where only the contact users, not the contact relation are desired. The fields returned depend on the products, in the profile fields of other users setting. Only fields (both basic or custom) marked to be returned on user list are returned. If no fields are set to be returned, the resulting objects will have the `display` and `shortDisplay` filled in. However, those fields are not returned when another profile field is returned, preventing duplicated data to be returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchContacts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchContacts(params: {

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
     * When set to &#x60;true&#x60;, instead of returning users with corresponding profile fields set on list, will return them with &#x60;display&#x60; and &#x60;shortDisplay&#x60;.
     */
    ignoreProfileFieldsInList?: boolean;

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

  }): Observable<Array<UserResult>> {

    return this.searchContacts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserResult>>) => r.body as Array<UserResult>)
    );
  }

  /**
   * Path part for operation searchContactList
   */
  static readonly SearchContactListPath = '/{user}/contact-list';

  /**
   * Searches the contact list of a given user.
   *
   * Returns a page of contacts, which have the contacted user and custom field values for custom fields set to be returned on the list. This operation is preferred over `GET /{user}/contacts` because it returns contact custom fields, while `GET /{user}/contacts` returns users which are contacts, with the profile fields configured to be returned in a regular users search.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchContactList()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchContactList$Response(params: {

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
     * Concat custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customValues&#x3D;extraDate:|2001-12-31&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;
    orderBy?: ContactOrderByEnum;

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

  }): Observable<StrictHttpResponse<Array<ContactResult>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.SearchContactListPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('customFields', params.customFields, {});
      rb.query('keywords', params.keywords, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContactResult>>;
      })
    );
  }

  /**
   * Searches the contact list of a given user.
   *
   * Returns a page of contacts, which have the contacted user and custom field values for custom fields set to be returned on the list. This operation is preferred over `GET /{user}/contacts` because it returns contact custom fields, while `GET /{user}/contacts` returns users which are contacts, with the profile fields configured to be returned in a regular users search.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchContactList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchContactList(params: {

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
     * Concat custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, &#x60;customFields&#x3D;field1:value1,field2:value2&#x60;. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, &#x60;customFields&#x3D;tradeType:offer|search,extraDate:2000-01-01|2001-12-31&#x60; would match results whose custom field with internal name &#x60;tradeType&#x60; is either &#x60;offer&#x60; or &#x60;search&#x60;, and whose &#x60;extraDate&#x60; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like &#x60;customValues&#x3D;extraDate:|2001-12-31&#x60;.
     */
    customFields?: Array<string>;

    /**
     * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
     */
    keywords?: string;
    orderBy?: ContactOrderByEnum;

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

  }): Observable<Array<ContactResult>> {

    return this.searchContactList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContactResult>>) => r.body as Array<ContactResult>)
    );
  }

  /**
   * Path part for operation createContact
   */
  static readonly CreateContactPath = '/{user}/contact-list';

  /**
   * Creates a new contact.
   *
   * Creates a new contact for the given owner. The contact user needs to be set in the request body, as well as contact custom fields, if any.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createContact()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createContact$Response(params: {

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
     * The contact to be added
     */
    body: ContactNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.CreateContactPath, 'post');
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
   * Creates a new contact.
   *
   * Creates a new contact for the given owner. The contact user needs to be set in the request body, as well as contact custom fields, if any.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createContact$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createContact(params: {

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
     * The contact to be added
     */
    body: ContactNew
  }): Observable<string> {

    return this.createContact$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getContactListDataForSearch
   */
  static readonly GetContactListDataForSearchPath = '/{user}/contact-list/data-for-search';

  /**
   * Returns configuration data used when searching for contacts.
   *
   * Returns data for searching a user's contact list, such as the contact custom fields which are set for being used as search filters.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactListDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactListDataForSearch$Response(params: {

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

  }): Observable<StrictHttpResponse<ContactListDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.GetContactListDataForSearchPath, 'get');
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
        return r as StrictHttpResponse<ContactListDataForSearch>;
      })
    );
  }

  /**
   * Returns configuration data used when searching for contacts.
   *
   * Returns data for searching a user's contact list, such as the contact custom fields which are set for being used as search filters.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getContactListDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactListDataForSearch(params: {

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

  }): Observable<ContactListDataForSearch> {

    return this.getContactListDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<ContactListDataForSearch>) => r.body as ContactListDataForSearch)
    );
  }

  /**
   * Path part for operation getContactListDataForNew
   */
  static readonly GetContactListDataForNewPath = '/{user}/contact-list/data-for-new';

  /**
   * Returns configuration data for creating a new contact.
   *
   * Returns data, such as a given contact user details and contact custom fields, for creating a new contact. The contact user is optional. If informed, the result will contain additional details about that user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactListDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactListDataForNew$Response(params: {

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
     * The (optional) user to which will be the contact
     */
    contactUser?: string;

  }): Observable<StrictHttpResponse<ContactDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.GetContactListDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('contactUser', params.contactUser, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContactDataForNew>;
      })
    );
  }

  /**
   * Returns configuration data for creating a new contact.
   *
   * Returns data, such as a given contact user details and contact custom fields, for creating a new contact. The contact user is optional. If informed, the result will contain additional details about that user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getContactListDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactListDataForNew(params: {

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
     * The (optional) user to which will be the contact
     */
    contactUser?: string;

  }): Observable<ContactDataForNew> {

    return this.getContactListDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<ContactDataForNew>) => r.body as ContactDataForNew)
    );
  }

  /**
   * Path part for operation getContactDataForEdit
   */
  static readonly GetContactDataForEditPath = '/contact-list/{id}/data-for-edit';

  /**
   * Returns data to edit an existing contact.
   *
   * Returns configuration data for editing a contact, plus the current `ContactEdit` object that can be altered and sent back
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactDataForEdit$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<ContactDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.GetContactDataForEditPath, 'get');
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
        return r as StrictHttpResponse<ContactDataForEdit>;
      })
    );
  }

  /**
   * Returns data to edit an existing contact.
   *
   * Returns configuration data for editing a contact, plus the current `ContactEdit` object that can be altered and sent back
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getContactDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactDataForEdit(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<ContactDataForEdit> {

    return this.getContactDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<ContactDataForEdit>) => r.body as ContactDataForEdit)
    );
  }

  /**
   * Path part for operation viewContact
   */
  static readonly ViewContactPath = '/contact-list/{id}';

  /**
   * Returns details of a specific contact.
   *
   * Returns information about a contact, located by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewContact()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewContact$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<ContactView>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ViewContactPath, 'get');
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
        return r as StrictHttpResponse<ContactView>;
      })
    );
  }

  /**
   * Returns details of a specific contact.
   *
   * Returns information about a contact, located by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewContact$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewContact(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<ContactView> {

    return this.viewContact$Response(params).pipe(
      map((r: StrictHttpResponse<ContactView>) => r.body as ContactView)
    );
  }

  /**
   * Path part for operation updateContact
   */
  static readonly UpdateContactPath = '/contact-list/{id}';

  /**
   * Updates an existing contact.
   *
   * Updates an existing contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateContact()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateContact$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The contact to be edited
     */
    body: ContactEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.UpdateContactPath, 'put');
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
   * Updates an existing contact.
   *
   * Updates an existing contact
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateContact$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateContact(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The contact to be edited
     */
    body: ContactEdit
  }): Observable<void> {

    return this.updateContact$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteContact
   */
  static readonly DeleteContactPath = '/contact-list/{id}';

  /**
   * Removes a contact.
   *
   * Removes a contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteContact()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContact$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.DeleteContactPath, 'delete');
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
   * Removes a contact.
   *
   * Removes a contact
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteContact$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContact(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteContact$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
