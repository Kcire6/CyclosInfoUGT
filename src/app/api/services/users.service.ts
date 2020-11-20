/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DataForEditFullProfile } from '../models/data-for-edit-full-profile';
import { FullProfileEdit } from '../models/full-profile-edit';
import { FullProfileEditResult } from '../models/full-profile-edit-result';
import { GroupForRegistration } from '../models/group-for-registration';
import { RoleEnum } from '../models/role-enum';
import { UserAddressResultEnum } from '../models/user-address-result-enum';
import { UserDataForEdit } from '../models/user-data-for-edit';
import { UserDataForMap } from '../models/user-data-for-map';
import { UserDataForNew } from '../models/user-data-for-new';
import { UserDataForSearch } from '../models/user-data-for-search';
import { UserEdit } from '../models/user-edit';
import { UserNew } from '../models/user-new';
import { UserOrderByEnum } from '../models/user-order-by-enum';
import { UserRegistrationResult } from '../models/user-registration-result';
import { UserResult } from '../models/user-result';
import { UserStatusEnum } from '../models/user-status-enum';
import { UserView } from '../models/user-view';


/**
 * User searching, registration and profile modification. Also provides access to the user map directory.
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserDataForSearch
   */
  static readonly GetUserDataForSearchPath = '/users/data-for-search';

  /**
   * Get configuration data for searching users.
   *
   * Returns data with the current configuration regarding the user search
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * When set, will be data for searching assigned members of the given broker (id, identification method or &#x60;self&#x60;)
     */
    broker?: string;

    /**
     * Set to true if you want to use as group filters those defined in the &#x27;User search in menu&#x27; configuration setting. Otherwise the group filters would be those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

  }): Observable<StrictHttpResponse<UserDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('broker', params.broker, {});
      rb.query('fromMenu', params.fromMenu, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDataForSearch>;
      })
    );
  }

  /**
   * Get configuration data for searching users.
   *
   * Returns data with the current configuration regarding the user search
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * When set, will be data for searching assigned members of the given broker (id, identification method or &#x60;self&#x60;)
     */
    broker?: string;

    /**
     * Set to true if you want to use as group filters those defined in the &#x27;User search in menu&#x27; configuration setting. Otherwise the group filters would be those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

  }): Observable<UserDataForSearch> {

    return this.getUserDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<UserDataForSearch>) => r.body as UserDataForSearch)
    );
  }

  /**
   * Path part for operation searchUsers
   */
  static readonly SearchUsersPath = '/users';

  /**
   * Search for users.
   *
   * Returns a page of users that match a given criteria. The fields returned depend on the products, in the profile fields of other users setting. Only fields (both basic or custom) marked to be returned on user list are returned. If no fields are set to be returned, or if the `ignoreProfileFieldsInList` flag is true in the given query then the resulting objects will have the `display` and `shortDisplay` filled in.  However, those fields are not returned when another profile field is returned, preventing duplicated data to be returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * Indicates the (managed) user to exclude contacts when &#x60;excludecontacts&#x60; is set. Defaults to the logged user.
     */
    contactsOwner?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; will not return any user that is already a contact of the user indicated on &#x60;contactsOwner&#x60; (the logged user if not set).
     */
    excludeContacts?: boolean;

    /**
     * When set to true the search will be restricted to those groups defined for the user search menu, if false then for those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UserOrderByEnum;

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
    roles?: Array<RoleEnum>;

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

  }): Observable<StrictHttpResponse<Array<UserResult>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.SearchUsersPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('acceptedAgreements', params.acceptedAgreements, {});
      rb.query('activationPeriod', params.activationPeriod, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('brokers', params.brokers, {});
      rb.query('contactsOwner', params.contactsOwner, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('excludeContacts', params.excludeContacts, {});
      rb.query('fromMenu', params.fromMenu, {});
      rb.query('groups', params.groups, {});
      rb.query('ignoreProfileFieldsInList', params.ignoreProfileFieldsInList, {});
      rb.query('includeGroup', params.includeGroup, {});
      rb.query('includeGroupSet', params.includeGroupSet, {});
      rb.query('keywords', params.keywords, {});
      rb.query('lastLoginPeriod', params.lastLoginPeriod, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('mainBrokerOnly', params.mainBrokerOnly, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('notAcceptedAgreements', params.notAcceptedAgreements, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('products', params.products, {});
      rb.query('productsIndividuallyAssigned', params.productsIndividuallyAssigned, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('roles', params.roles, {});
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
        return r as StrictHttpResponse<Array<UserResult>>;
      })
    );
  }

  /**
   * Search for users.
   *
   * Returns a page of users that match a given criteria. The fields returned depend on the products, in the profile fields of other users setting. Only fields (both basic or custom) marked to be returned on user list are returned. If no fields are set to be returned, or if the `ignoreProfileFieldsInList` flag is true in the given query then the resulting objects will have the `display` and `shortDisplay` filled in.  However, those fields are not returned when another profile field is returned, preventing duplicated data to be returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * Indicates the (managed) user to exclude contacts when &#x60;excludecontacts&#x60; is set. Defaults to the logged user.
     */
    contactsOwner?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; will not return any user that is already a contact of the user indicated on &#x60;contactsOwner&#x60; (the logged user if not set).
     */
    excludeContacts?: boolean;

    /**
     * When set to true the search will be restricted to those groups defined for the user search menu, if false then for those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UserOrderByEnum;

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
    roles?: Array<RoleEnum>;

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

  }): Observable<Array<UserResult>> {

    return this.searchUsers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserResult>>) => r.body as Array<UserResult>)
    );
  }

  /**
   * Path part for operation createUser
   */
  static readonly CreateUserPath = '/users';

  /**
   * Registers a new user.
   *
   * Can either be a public registration, requiring no authorization, or a user registration by an administrator or broker. The public registration normally requires a CAPTCHA challenge to prevent bots. On user registration the following data is also created:
   * * Address;
   * * Mobile phone;
   * * Landline phone;
   * * Images.
   *
   * After the registration those data are managed separately than the user profile data.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params: {
  
    /**
     * The user to be registered
     */
    body: UserNew
  }): Observable<StrictHttpResponse<UserRegistrationResult>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.CreateUserPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserRegistrationResult>;
      })
    );
  }

  /**
   * Registers a new user.
   *
   * Can either be a public registration, requiring no authorization, or a user registration by an administrator or broker. The public registration normally requires a CAPTCHA challenge to prevent bots. On user registration the following data is also created:
   * * Address;
   * * Mobile phone;
   * * Landline phone;
   * * Images.
   *
   * After the registration those data are managed separately than the user profile data.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params: {
  
    /**
     * The user to be registered
     */
    body: UserNew
  }): Observable<UserRegistrationResult> {

    return this.createUser$Response(params).pipe(
      map((r: StrictHttpResponse<UserRegistrationResult>) => r.body as UserRegistrationResult)
    );
  }

  /**
   * Path part for operation exportUsers
   */
  static readonly ExportUsersPath = '/users/export/{format}';

  /**
   * Exports the user search results to a file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /users/data-for-search`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportUsers$Response(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * Indicates the (managed) user to exclude contacts when &#x60;excludecontacts&#x60; is set. Defaults to the logged user.
     */
    contactsOwner?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; will not return any user that is already a contact of the user indicated on &#x60;contactsOwner&#x60; (the logged user if not set).
     */
    excludeContacts?: boolean;

    /**
     * When set to true the search will be restricted to those groups defined for the user search menu, if false then for those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UserOrderByEnum;

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
    roles?: Array<RoleEnum>;

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

    const rb = new RequestBuilder(this.rootUrl, UsersService.ExportUsersPath, 'get');
    if (params) {

      rb.path('format', params.format, {});
      rb.query('acceptedAgreements', params.acceptedAgreements, {});
      rb.query('activationPeriod', params.activationPeriod, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('brokers', params.brokers, {});
      rb.query('contactsOwner', params.contactsOwner, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('excludeContacts', params.excludeContacts, {});
      rb.query('fromMenu', params.fromMenu, {});
      rb.query('groups', params.groups, {});
      rb.query('ignoreProfileFieldsInList', params.ignoreProfileFieldsInList, {});
      rb.query('includeGroup', params.includeGroup, {});
      rb.query('includeGroupSet', params.includeGroupSet, {});
      rb.query('keywords', params.keywords, {});
      rb.query('lastLoginPeriod', params.lastLoginPeriod, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('mainBrokerOnly', params.mainBrokerOnly, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('notAcceptedAgreements', params.notAcceptedAgreements, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('products', params.products, {});
      rb.query('productsIndividuallyAssigned', params.productsIndividuallyAssigned, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('roles', params.roles, {});
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
   * Exports the user search results to a file.
   *
   * Generates a file containing the search results. The available export formats are returned in `GET /users/data-for-search`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportUsers(params: {

    /**
     * The format to export the data
     */
    format: string;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * Indicates the (managed) user to exclude contacts when &#x60;excludecontacts&#x60; is set. Defaults to the logged user.
     */
    contactsOwner?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; will not return any user that is already a contact of the user indicated on &#x60;contactsOwner&#x60; (the logged user if not set).
     */
    excludeContacts?: boolean;

    /**
     * When set to true the search will be restricted to those groups defined for the user search menu, if false then for those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UserOrderByEnum;

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
    roles?: Array<RoleEnum>;

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

    return this.exportUsers$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation validateUserRegistrationField
   */
  static readonly ValidateUserRegistrationFieldPath = '/users/validate/{group}/{field}';

  /**
   * Validates the value of a single field for user registration.
   *
   * Validates the value of a field which will be used for registering a user, returning either `204 No Content` if the field is valid or `200` with the error description if the field is invalid. Notice that the result is the validation error. If a `422` status code is returned it means that either the given `field` is invalid or the given `value` is empty.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateUserRegistrationField()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateUserRegistrationField$Response(params: {

    /**
     * The internal name or id of the group in which the user is being registered
     */
    group: string;

    /**
     * One of: &#x60;name&#x60; (full name), &#x60;username&#x60; (login name), &#x60;email&#x60;, &#x60;mobilePhone&#x60;, &#x60;landLinePhone&#x60; or the internal name of a custom field.
     */
    field: string;

    /**
     * The value to be validated
     */
    value: string;

    /**
     * Flag required only when the authenticated user is a member and a broker, in that case we need to distingish between both. If true then the groups returned will be those allowed as member, otherwise will return the goups allowed as broker.
     */
    asMember?: boolean;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ValidateUserRegistrationFieldPath, 'get');
    if (params) {

      rb.path('group', params.group, {});
      rb.path('field', params.field, {});
      rb.query('value', params.value, {});
      rb.query('asMember', params.asMember, {});

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
   * Validates the value of a single field for user registration.
   *
   * Validates the value of a field which will be used for registering a user, returning either `204 No Content` if the field is valid or `200` with the error description if the field is invalid. Notice that the result is the validation error. If a `422` status code is returned it means that either the given `field` is invalid or the given `value` is empty.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateUserRegistrationField$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateUserRegistrationField(params: {

    /**
     * The internal name or id of the group in which the user is being registered
     */
    group: string;

    /**
     * One of: &#x60;name&#x60; (full name), &#x60;username&#x60; (login name), &#x60;email&#x60;, &#x60;mobilePhone&#x60;, &#x60;landLinePhone&#x60; or the internal name of a custom field.
     */
    field: string;

    /**
     * The value to be validated
     */
    value: string;

    /**
     * Flag required only when the authenticated user is a member and a broker, in that case we need to distingish between both. If true then the groups returned will be those allowed as member, otherwise will return the goups allowed as broker.
     */
    asMember?: boolean;

  }): Observable<string> {

    return this.validateUserRegistrationField$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getGroupsForUserRegistration
   */
  static readonly GetGroupsForUserRegistrationPath = '/users/groups-for-registration';

  /**
   * Returns the groups the authenticated user or guest can register on.
   *
   * Returns the list of groups the authenticated user can use to perform a new user registration. If authenticated as guest, will return the groups currently set for public registration. When there is an authenticated administrator, broker or member, will be the configured groups for new users.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupsForUserRegistration()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupsForUserRegistration$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Flag required only when the authenticated user is a member and a broker, in that case we need to distingish between both. If true then the groups returned will be those allowed as member, otherwise will return the goups allowed as broker.
     */
    asMember?: boolean;

  }): Observable<StrictHttpResponse<Array<GroupForRegistration>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetGroupsForUserRegistrationPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('asMember', params.asMember, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GroupForRegistration>>;
      })
    );
  }

  /**
   * Returns the groups the authenticated user or guest can register on.
   *
   * Returns the list of groups the authenticated user can use to perform a new user registration. If authenticated as guest, will return the groups currently set for public registration. When there is an authenticated administrator, broker or member, will be the configured groups for new users.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getGroupsForUserRegistration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupsForUserRegistration(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Flag required only when the authenticated user is a member and a broker, in that case we need to distingish between both. If true then the groups returned will be those allowed as member, otherwise will return the goups allowed as broker.
     */
    asMember?: boolean;

  }): Observable<Array<GroupForRegistration>> {

    return this.getGroupsForUserRegistration$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GroupForRegistration>>) => r.body as Array<GroupForRegistration>)
    );
  }

  /**
   * Path part for operation validateUserRegistrationDeprecated
   */
  static readonly ValidateUserRegistrationDeprecatedPath = '/users/validate/registration/{key}';

  /**
   * Validates an user registration via a key sent by e-mail.
   *
   * Use `POST /validate/registration/{key}` instead.
   *
   *
   * When a user is registered, and the configuration enables the validation, an e-mail is sent to user e-mail, with a link to verify it. In this case, only after verifying the e-mail the user is activated. This operation effectively verifies the e-mail and performs the user activation. However, depending on the settings, the initial user status might be blocked or inactive.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateUserRegistrationDeprecated()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  validateUserRegistrationDeprecated$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The validation key sent via e-mail
     */
    key: string;

  }): Observable<StrictHttpResponse<UserRegistrationResult>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ValidateUserRegistrationDeprecatedPath, 'post');
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
        return r as StrictHttpResponse<UserRegistrationResult>;
      })
    );
  }

  /**
   * Validates an user registration via a key sent by e-mail.
   *
   * Use `POST /validate/registration/{key}` instead.
   *
   *
   * When a user is registered, and the configuration enables the validation, an e-mail is sent to user e-mail, with a link to verify it. In this case, only after verifying the e-mail the user is activated. This operation effectively verifies the e-mail and performs the user activation. However, depending on the settings, the initial user status might be blocked or inactive.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateUserRegistrationDeprecated$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  validateUserRegistrationDeprecated(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The validation key sent via e-mail
     */
    key: string;

  }): Observable<UserRegistrationResult> {

    return this.validateUserRegistrationDeprecated$Response(params).pipe(
      map((r: StrictHttpResponse<UserRegistrationResult>) => r.body as UserRegistrationResult)
    );
  }

  /**
   * Path part for operation validateEmailChangeDeprecated
   */
  static readonly ValidateEmailChangeDeprecatedPath = '/users/validate/email-change/{key}';

  /**
   * Validates an e-mail via a validation key.
   *
   * Use `POST /validate/email-change/{key}`
   *
   *
   * When the user e-mail is changed, and the configuration enables the validation, an e-mail is sent to the new user e-mail, with a link to verify it. In this case, only after verifying the new e-mail it is effectively set as the new e-mail. This operation effectively verifies the new e-mail.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateEmailChangeDeprecated()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  validateEmailChangeDeprecated$Response(params: {

    /**
     * The validation key sent via e-mail
     */
    key: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ValidateEmailChangeDeprecatedPath, 'post');
    if (params) {

      rb.path('key', params.key, {});

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
   * Validates an e-mail via a validation key.
   *
   * Use `POST /validate/email-change/{key}`
   *
   *
   * When the user e-mail is changed, and the configuration enables the validation, an e-mail is sent to the new user e-mail, with a link to verify it. In this case, only after verifying the new e-mail it is effectively set as the new e-mail. This operation effectively verifies the new e-mail.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateEmailChangeDeprecated$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  validateEmailChangeDeprecated(params: {

    /**
     * The validation key sent via e-mail
     */
    key: string;

  }): Observable<string> {

    return this.validateEmailChangeDeprecated$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getUserDataForNew
   */
  static readonly GetUserDataForNewPath = '/users/data-for-new';

  /**
   * Get configuration data for registering new users.
   *
   * Almost every aspect of a user profile is configurable in Cyclos, such as enabled basic profile fields, custom profile fields, address fields, phone configuration and so on. As such, if a front-end needs to be robust to such a dynamic nature, it should get this information in order to create a correct registration form.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDataForNew$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The intial group for the new user
     */
    group: string;

    /**
     * The broker for the new user. Only used if the authenticated user is an administrator.
     */
    broker?: string;

    /**
     * Flag required only when the authenticated user is a member and a broker, in that case we need to distingish between both. If true then the configuration data for registering new users as member will be returned, otherwise will return the configuration data for registering as broker.
     */
    asMember?: boolean;

  }): Observable<StrictHttpResponse<UserDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('group', params.group, {});
      rb.query('broker', params.broker, {});
      rb.query('asMember', params.asMember, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDataForNew>;
      })
    );
  }

  /**
   * Get configuration data for registering new users.
   *
   * Almost every aspect of a user profile is configurable in Cyclos, such as enabled basic profile fields, custom profile fields, address fields, phone configuration and so on. As such, if a front-end needs to be robust to such a dynamic nature, it should get this information in order to create a correct registration form.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDataForNew(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The intial group for the new user
     */
    group: string;

    /**
     * The broker for the new user. Only used if the authenticated user is an administrator.
     */
    broker?: string;

    /**
     * Flag required only when the authenticated user is a member and a broker, in that case we need to distingish between both. If true then the configuration data for registering new users as member will be returned, otherwise will return the configuration data for registering as broker.
     */
    asMember?: boolean;

  }): Observable<UserDataForNew> {

    return this.getUserDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<UserDataForNew>) => r.body as UserDataForNew)
    );
  }

  /**
   * Path part for operation viewUser
   */
  static readonly ViewUserPath = '/users/{user}';

  /**
   * View a user / operator details.
   *
   * Returns the profile information of either a user or operator.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewUser$Response(params: {

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

  }): Observable<StrictHttpResponse<UserView>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ViewUserPath, 'get');
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
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  /**
   * View a user / operator details.
   *
   * Returns the profile information of either a user or operator.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewUser(params: {

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

  }): Observable<UserView> {

    return this.viewUser$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/users/{user}';

  /**
   * Save a user / operator profile fields.
   *
   * Saves the user / operator profile felds. Only the basic fields (full name, login name, e-mail) and custom fields can be saved with this operation. Addresses, phones and images must be managed either via the full profile (`GET /users/{user}/data-for-edit-profile` / `PUT /users/{user}/profile`) or through their own paths.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: {

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
     * The user / operator to be saved
     */
    body: UserEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UpdateUserPath, 'put');
    if (params) {

      rb.path('user', params.user, {});
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
   * Save a user / operator profile fields.
   *
   * Saves the user / operator profile felds. Only the basic fields (full name, login name, e-mail) and custom fields can be saved with this operation. Addresses, phones and images must be managed either via the full profile (`GET /users/{user}/data-for-edit-profile` / `PUT /users/{user}/profile`) or through their own paths.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: {

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
     * The user / operator to be saved
     */
    body: UserEdit
  }): Observable<void> {

    return this.updateUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePendingUser
   */
  static readonly DeletePendingUserPath = '/users/{user}';

  /**
   * Permanently removes a pending user.
   *
   * This operation physically removes user pending registration validation, that is, the user `status` is `pending`. If the user registration was ever validated, this operation will fail.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePendingUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePendingUser$Response(params: {

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

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.DeletePendingUserPath, 'delete');
    if (params) {

      rb.path('user', params.user, {});

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
   * Permanently removes a pending user.
   *
   * This operation physically removes user pending registration validation, that is, the user `status` is `pending`. If the user registration was ever validated, this operation will fail.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePendingUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePendingUser(params: {

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

  }): Observable<void> {

    return this.deletePendingUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserDataForEdit
   */
  static readonly GetUserDataForEditPath = '/users/{user}/data-for-edit';

  /**
   * Get configuration data to edit a user / operator profile.
   *
   * Returns data to edit a user / operator profile fields.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDataForEdit$Response(params: {

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

  }): Observable<StrictHttpResponse<UserDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserDataForEditPath, 'get');
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
        return r as StrictHttpResponse<UserDataForEdit>;
      })
    );
  }

  /**
   * Get configuration data to edit a user / operator profile.
   *
   * Returns data to edit a user / operator profile fields.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDataForEdit(params: {

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

  }): Observable<UserDataForEdit> {

    return this.getUserDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<UserDataForEdit>) => r.body as UserDataForEdit)
    );
  }

  /**
   * Path part for operation getDataForEditFullProfile
   */
  static readonly GetDataForEditFullProfilePath = '/users/{user}/data-for-edit-profile';

  /**
   * Returns data for editing the full profile of a user / operator.
   *
   * The returned data contains all profile-related elements of a user or operator - profile fields, phones, addresses, images and additional contact information. Operators cannot have addresses, images or additional contact information, so these will not be sent.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForEditFullProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForEditFullProfile$Response(params: {

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

  }): Observable<StrictHttpResponse<DataForEditFullProfile>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetDataForEditFullProfilePath, 'get');
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
        return r as StrictHttpResponse<DataForEditFullProfile>;
      })
    );
  }

  /**
   * Returns data for editing the full profile of a user / operator.
   *
   * The returned data contains all profile-related elements of a user or operator - profile fields, phones, addresses, images and additional contact information. Operators cannot have addresses, images or additional contact information, so these will not be sent.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForEditFullProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForEditFullProfile(params: {

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

  }): Observable<DataForEditFullProfile> {

    return this.getDataForEditFullProfile$Response(params).pipe(
      map((r: StrictHttpResponse<DataForEditFullProfile>) => r.body as DataForEditFullProfile)
    );
  }

  /**
   * Path part for operation saveUserFullProfile
   */
  static readonly SaveUserFullProfilePath = '/users/{user}/profile';

  /**
   * Saves the full profile at once.
   *
   * Saves in a single, transactional operation, the full user / operator profile: edition of the profile fields and creating / modifying / removing phones, addresses, additional contacts and images. Operators can never have addresses, additional contacts or images, so they don't apply to operators.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveUserFullProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUserFullProfile$Response(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The full profile data
     */
    body: FullProfileEdit
  }): Observable<StrictHttpResponse<FullProfileEditResult>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.SaveUserFullProfilePath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
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
        return r as StrictHttpResponse<FullProfileEditResult>;
      })
    );
  }

  /**
   * Saves the full profile at once.
   *
   * Saves in a single, transactional operation, the full user / operator profile: edition of the profile fields and creating / modifying / removing phones, addresses, additional contacts and images. Operators can never have addresses, additional contacts or images, so they don't apply to operators.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveUserFullProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUserFullProfile(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The full profile data
     */
    body: FullProfileEdit
  }): Observable<FullProfileEditResult> {

    return this.saveUserFullProfile$Response(params).pipe(
      map((r: StrictHttpResponse<FullProfileEditResult>) => r.body as FullProfileEditResult)
    );
  }

  /**
   * Path part for operation getDataForMapDirectory
   */
  static readonly GetDataForMapDirectoryPath = '/users/map/data-for-search';

  /**
   * Get configuration data for searching the user directory (map).
   *
   * Returns data with the current configuration regarding the user directory (map).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForMapDirectory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForMapDirectory$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<UserDataForMap>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetDataForMapDirectoryPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDataForMap>;
      })
    );
  }

  /**
   * Get configuration data for searching the user directory (map).
   *
   * Returns data with the current configuration regarding the user directory (map).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForMapDirectory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForMapDirectory(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<UserDataForMap> {

    return this.getDataForMapDirectory$Response(params).pipe(
      map((r: StrictHttpResponse<UserDataForMap>) => r.body as UserDataForMap)
    );
  }

  /**
   * Path part for operation searchMapDirectory
   */
  static readonly SearchMapDirectoryPath = '/users/map';

  /**
   * Search the user directory (map).
   *
   * Returns a page of users in the map directory that match a given criteria
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchMapDirectory()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMapDirectory$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * Indicates the (managed) user to exclude contacts when &#x60;excludecontacts&#x60; is set. Defaults to the logged user.
     */
    contactsOwner?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; will not return any user that is already a contact of the user indicated on &#x60;contactsOwner&#x60; (the logged user if not set).
     */
    excludeContacts?: boolean;

    /**
     * When set to true the search will be restricted to those groups defined for the user search menu, if false then for those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UserOrderByEnum;

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
    roles?: Array<RoleEnum>;

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

  }): Observable<StrictHttpResponse<Array<UserResult>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.SearchMapDirectoryPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('acceptedAgreements', params.acceptedAgreements, {});
      rb.query('activationPeriod', params.activationPeriod, {});
      rb.query('addressResult', params.addressResult, {});
      rb.query('brokers', params.brokers, {});
      rb.query('contactsOwner', params.contactsOwner, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('excludeContacts', params.excludeContacts, {});
      rb.query('fromMenu', params.fromMenu, {});
      rb.query('groups', params.groups, {});
      rb.query('ignoreProfileFieldsInList', params.ignoreProfileFieldsInList, {});
      rb.query('includeGroup', params.includeGroup, {});
      rb.query('includeGroupSet', params.includeGroupSet, {});
      rb.query('keywords', params.keywords, {});
      rb.query('lastLoginPeriod', params.lastLoginPeriod, {});
      rb.query('latitude', params.latitude, {});
      rb.query('longitude', params.longitude, {});
      rb.query('mainBrokerOnly', params.mainBrokerOnly, {});
      rb.query('maxDistance', params.maxDistance, {});
      rb.query('notAcceptedAgreements', params.notAcceptedAgreements, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('products', params.products, {});
      rb.query('productsIndividuallyAssigned', params.productsIndividuallyAssigned, {});
      rb.query('profileFields', params.profileFields, {});
      rb.query('roles', params.roles, {});
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
        return r as StrictHttpResponse<Array<UserResult>>;
      })
    );
  }

  /**
   * Search the user directory (map).
   *
   * Returns a page of users in the map directory that match a given criteria
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchMapDirectory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMapDirectory(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or internal names of agreements the user must have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    acceptedAgreements?: Array<string>;

    /**
     * The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    activationPeriod?: Array<string>;
    addressResult?: UserAddressResultEnum;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * Indicates the (managed) user to exclude contacts when &#x60;excludecontacts&#x60; is set. Defaults to the logged user.
     */
    contactsOwner?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60; will not return any user that is already a contact of the user indicated on &#x60;contactsOwner&#x60; (the logged user if not set).
     */
    excludeContacts?: boolean;

    /**
     * When set to true the search will be restricted to those groups defined for the user search menu, if false then for those defined in the &#x27;Search users on groups&#x27; product setting (or in the configuration in case of guests).
     */
    fromMenu?: boolean;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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
     * Either id or internal names of agreements the user must not have accepted. Ignored if the logged user isn&#x27;t an admin or broker with permission to view the user agreement log.
     */
    notAcceptedAgreements?: Array<string>;
    orderBy?: UserOrderByEnum;

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
    roles?: Array<RoleEnum>;

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

  }): Observable<Array<UserResult>> {

    return this.searchMapDirectory$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserResult>>) => r.body as Array<UserResult>)
    );
  }

}
