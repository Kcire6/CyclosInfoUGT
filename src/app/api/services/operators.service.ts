/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GeneralOperatorsDataForSearch } from '../models/general-operators-data-for-search';
import { OperatorDataForNew } from '../models/operator-data-for-new';
import { OperatorNew } from '../models/operator-new';
import { OperatorResult } from '../models/operator-result';
import { UserOperatorsDataForSearch } from '../models/user-operators-data-for-search';
import { UserRegistrationResult } from '../models/user-registration-result';
import { UserStatusEnum } from '../models/user-status-enum';


/**
 * Operations over operators, which are users created by other users to manage their data. The registration of operators is performed in this tag, but the view and edition of profile fields or full profile is performed in the `Users` tag, within `/users/{user}/...` paths. This is because operators are a special kind of users.
 */
@Injectable({
  providedIn: 'root',
})
export class OperatorsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserOperatorsDataForSearch
   */
  static readonly GetUserOperatorsDataForSearchPath = '/{user}/operators/data-for-search';

  /**
   * Get configuration data for searching operators of the given user.
   *
   * Returns data with the current configuration regarding the operators of the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserOperatorsDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserOperatorsDataForSearch$Response(params: {

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

  }): Observable<StrictHttpResponse<UserOperatorsDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorsService.GetUserOperatorsDataForSearchPath, 'get');
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
        return r as StrictHttpResponse<UserOperatorsDataForSearch>;
      })
    );
  }

  /**
   * Get configuration data for searching operators of the given user.
   *
   * Returns data with the current configuration regarding the operators of the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserOperatorsDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserOperatorsDataForSearch(params: {

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

  }): Observable<UserOperatorsDataForSearch> {

    return this.getUserOperatorsDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<UserOperatorsDataForSearch>) => r.body as UserOperatorsDataForSearch)
    );
  }

  /**
   * Path part for operation searchUserOperators
   */
  static readonly SearchUserOperatorsPath = '/{user}/operators';

  /**
   * Search the operators of a given user.
   *
   * Returns a page of operators that match a given criteria. To view an operator profile, use `GET /users/{operator}`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUserOperators()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserOperators$Response(params: {

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

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, instead of returning users with corresponding profile fields set on list, will return them with &#x60;display&#x60; and &#x60;shortDisplay&#x60;.
     */
    ignoreProfileFieldsInList?: boolean;

    /**
     * An array of operator group ids
     */
    operatorGroups?: Array<string>;

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
    statuses?: Array<UserStatusEnum>;

  }): Observable<StrictHttpResponse<Array<OperatorResult>>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorsService.SearchUserOperatorsPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.query('fields', params.fields, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('ignoreProfileFieldsInList', params.ignoreProfileFieldsInList, {});
      rb.query('operatorGroups', params.operatorGroups, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OperatorResult>>;
      })
    );
  }

  /**
   * Search the operators of a given user.
   *
   * Returns a page of operators that match a given criteria. To view an operator profile, use `GET /users/{operator}`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUserOperators$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserOperators(params: {

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

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * When set to &#x60;true&#x60;, instead of returning users with corresponding profile fields set on list, will return them with &#x60;display&#x60; and &#x60;shortDisplay&#x60;.
     */
    ignoreProfileFieldsInList?: boolean;

    /**
     * An array of operator group ids
     */
    operatorGroups?: Array<string>;

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
    statuses?: Array<UserStatusEnum>;

  }): Observable<Array<OperatorResult>> {

    return this.searchUserOperators$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OperatorResult>>) => r.body as Array<OperatorResult>)
    );
  }

  /**
   * Path part for operation registerOperator
   */
  static readonly RegisterOperatorPath = '/{user}/operators';

  /**
   * Registers a new operator.
   *
   * Registers an operator, together with his password and phones.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerOperator()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerOperator$Response(params: {

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
     * The operator to be registered
     */
    body: OperatorNew
  }): Observable<StrictHttpResponse<UserRegistrationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorsService.RegisterOperatorPath, 'post');
    if (params) {

      rb.path('user', params.user, {});

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
   * Registers a new operator.
   *
   * Registers an operator, together with his password and phones.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `registerOperator$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerOperator(params: {

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
     * The operator to be registered
     */
    body: OperatorNew
  }): Observable<UserRegistrationResult> {

    return this.registerOperator$Response(params).pipe(
      map((r: StrictHttpResponse<UserRegistrationResult>) => r.body as UserRegistrationResult)
    );
  }

  /**
   * Path part for operation getGeneralOperatorsDataForSearch
   */
  static readonly GetGeneralOperatorsDataForSearchPath = '/operators/data-for-search';

  /**
   * Get configuration data for searching operators of any managed user.
   *
   * Returns data with the current configuration regarding the search of operators of managed users. This is meant to be used by either administrators or brokers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGeneralOperatorsDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneralOperatorsDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<GeneralOperatorsDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorsService.GetGeneralOperatorsDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralOperatorsDataForSearch>;
      })
    );
  }

  /**
   * Get configuration data for searching operators of any managed user.
   *
   * Returns data with the current configuration regarding the search of operators of managed users. This is meant to be used by either administrators or brokers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getGeneralOperatorsDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneralOperatorsDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<GeneralOperatorsDataForSearch> {

    return this.getGeneralOperatorsDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralOperatorsDataForSearch>) => r.body as GeneralOperatorsDataForSearch)
    );
  }

  /**
   * Path part for operation searchGeneralOperators
   */
  static readonly SearchGeneralOperatorsPath = '/operators';

  /**
   * Search the visible operators (of any managed user).
   *
   * Returns a page of operators that match a given criteria. To view an operator profile, use `GET /users/{operator}`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchGeneralOperators()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchGeneralOperators$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40.
     */
    pageSize?: number;

    /**
     * Either id or internal names of user groups / group sets
     */
    userGroups?: Array<string>;

    /**
     * Either id or a principal (login name, e-mail, etc) of the user broker
     */
    broker?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;
    statuses?: Array<UserStatusEnum>;

  }): Observable<StrictHttpResponse<Array<OperatorResult>>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorsService.SearchGeneralOperatorsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('userGroups', params.userGroups, {});
      rb.query('broker', params.broker, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('statuses', params.statuses, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OperatorResult>>;
      })
    );
  }

  /**
   * Search the visible operators (of any managed user).
   *
   * Returns a page of operators that match a given criteria. To view an operator profile, use `GET /users/{operator}`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchGeneralOperators$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchGeneralOperators(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40.
     */
    pageSize?: number;

    /**
     * Either id or internal names of user groups / group sets
     */
    userGroups?: Array<string>;

    /**
     * Either id or a principal (login name, e-mail, etc) of the user broker
     */
    broker?: string;

    /**
     * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;
    statuses?: Array<UserStatusEnum>;

  }): Observable<Array<OperatorResult>> {

    return this.searchGeneralOperators$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OperatorResult>>) => r.body as Array<OperatorResult>)
    );
  }

  /**
   * Path part for operation getOperatorDataForNew
   */
  static readonly GetOperatorDataForNewPath = '/{user}/operators/data-for-new';

  /**
   * Get configuration data for registering a new operator.
   *
   * Contains all configuration needed for registering an operator, such as the enabled profile fields and the password(s).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperatorDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperatorDataForNew$Response(params: {

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
     * The operator group. If no group is set, will return the list of operator groups for this owner. If a group is pre-set, will return only that group.
     */
    group?: string;

  }): Observable<StrictHttpResponse<OperatorDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorsService.GetOperatorDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('group', params.group, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperatorDataForNew>;
      })
    );
  }

  /**
   * Get configuration data for registering a new operator.
   *
   * Contains all configuration needed for registering an operator, such as the enabled profile fields and the password(s).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOperatorDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperatorDataForNew(params: {

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
     * The operator group. If no group is set, will return the list of operator groups for this owner. If a group is pre-set, will return only that group.
     */
    group?: string;

  }): Observable<OperatorDataForNew> {

    return this.getOperatorDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<OperatorDataForNew>) => r.body as OperatorDataForNew)
    );
  }

}
