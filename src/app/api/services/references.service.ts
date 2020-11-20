/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ReferenceDataForSet } from '../models/reference-data-for-set';
import { ReferenceDirectionEnum } from '../models/reference-direction-enum';
import { ReferenceLevelEnum } from '../models/reference-level-enum';
import { ReferenceSet } from '../models/reference-set';
import { ReferenceStatistics } from '../models/reference-statistics';
import { ReferenceView } from '../models/reference-view';
import { UserReferenceDataForSearch } from '../models/user-reference-data-for-search';
import { UserReferenceResult } from '../models/user-reference-result';


/**
 * Provides access to (general) references, which are given from a user to another to show the satisfaction level.
 */
@Injectable({
  providedIn: 'root',
})
export class ReferencesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserReferencesDataForSearch
   */
  static readonly GetUserReferencesDataForSearchPath = '/{user}/references/data-for-search';

  /**
   * Returns data for searching references of a specific user.
   *
   * Returns data for searching references of a specific user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserReferencesDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReferencesDataForSearch$Response(params: {

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

  }): Observable<StrictHttpResponse<UserReferenceDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.GetUserReferencesDataForSearchPath, 'get');
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
        return r as StrictHttpResponse<UserReferenceDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching references of a specific user.
   *
   * Returns data for searching references of a specific user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserReferencesDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReferencesDataForSearch(params: {

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

  }): Observable<UserReferenceDataForSearch> {

    return this.getUserReferencesDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<UserReferenceDataForSearch>) => r.body as UserReferenceDataForSearch)
    );
  }

  /**
   * Path part for operation searchUserReferences
   */
  static readonly SearchUserReferencesPath = '/{user}/references';

  /**
   * Searches for references of a specific user.
   *
   * Returns references matching the search criteria, for a specific user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUserReferences()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserReferences$Response(params: {

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
    direction?: ReferenceDirectionEnum;

    /**
     * The levels to filter
     */
    levels?: Array<ReferenceLevelEnum>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The minimum / maximum reference date
     */
    period?: Array<string>;

    /**
     * The user that either gave or received the reference to the user specified in the path. Should be either the id or some other allowed identification (login name, email, etc).
     */
    relatedUser?: string;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

  }): Observable<StrictHttpResponse<Array<UserReferenceResult>>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.SearchUserReferencesPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.query('fields', params.fields, {});
      rb.query('direction', params.direction, {});
      rb.query('levels', params.levels, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('period', params.period, {});
      rb.query('relatedUser', params.relatedUser, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserReferenceResult>>;
      })
    );
  }

  /**
   * Searches for references of a specific user.
   *
   * Returns references matching the search criteria, for a specific user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUserReferences$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserReferences(params: {

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
    direction?: ReferenceDirectionEnum;

    /**
     * The levels to filter
     */
    levels?: Array<ReferenceLevelEnum>;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The minimum / maximum reference date
     */
    period?: Array<string>;

    /**
     * The user that either gave or received the reference to the user specified in the path. Should be either the id or some other allowed identification (login name, email, etc).
     */
    relatedUser?: string;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

  }): Observable<Array<UserReferenceResult>> {

    return this.searchUserReferences$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserReferenceResult>>) => r.body as Array<UserReferenceResult>)
    );
  }

  /**
   * Path part for operation getUserReferenceStatistics
   */
  static readonly GetUserReferenceStatisticsPath = '/{user}/references/statistics';

  /**
   * Returns statistics for a given user references.
   *
   * Returns statistics for a given user references.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserReferenceStatistics()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReferenceStatistics$Response(params: {

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
     * Whether to return statistics on received or given references. When not specified, defaults to received.
     */
    direction?: ReferenceDirectionEnum;

    /**
     * The requested periods for statistics. The result will have the &#x60;periods&#x60; field corresponding to the input periods. When not specified, the default is to return 2 periods: all time and last 30 days. The maximum allowed number of periods is 5. Each period can either be:
     *
     * - Single date: in ISO 8601 format, from that date and up.
     *   Example: &#x60;2019-10-30&#x60;;
     *
     * - 2 dates, split by pipe: Both in ISO 8601 format, specifying
     *   a period range. Example: &#x60;2019-10-01|2019-12-31T23:59:59.999&#x60;.
     */
    periods?: Array<string>;

  }): Observable<StrictHttpResponse<ReferenceStatistics>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.GetUserReferenceStatisticsPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.query('fields', params.fields, {});
      rb.query('direction', params.direction, {});
      rb.query('periods', params.periods, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReferenceStatistics>;
      })
    );
  }

  /**
   * Returns statistics for a given user references.
   *
   * Returns statistics for a given user references.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserReferenceStatistics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReferenceStatistics(params: {

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
     * Whether to return statistics on received or given references. When not specified, defaults to received.
     */
    direction?: ReferenceDirectionEnum;

    /**
     * The requested periods for statistics. The result will have the &#x60;periods&#x60; field corresponding to the input periods. When not specified, the default is to return 2 periods: all time and last 30 days. The maximum allowed number of periods is 5. Each period can either be:
     *
     * - Single date: in ISO 8601 format, from that date and up.
     *   Example: &#x60;2019-10-30&#x60;;
     *
     * - 2 dates, split by pipe: Both in ISO 8601 format, specifying
     *   a period range. Example: &#x60;2019-10-01|2019-12-31T23:59:59.999&#x60;.
     */
    periods?: Array<string>;

  }): Observable<ReferenceStatistics> {

    return this.getUserReferenceStatistics$Response(params).pipe(
      map((r: StrictHttpResponse<ReferenceStatistics>) => r.body as ReferenceStatistics)
    );
  }

  /**
   * Path part for operation getReferenceDataForSet
   */
  static readonly GetReferenceDataForSetPath = '/{from}/reference/{to}/data-for-set';

  /**
   * Returns details for setting a reference.
   *
   * Returns details for setting a reference.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReferenceDataForSet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReferenceDataForSet$Response(params: {

    /**
     * The user that will give the reference. Can be &#x60;self&#x60; for the currently authenticated user, or the id or some other allowed identifier (login name, e-mail, etc).
     */
    from: string;

    /**
     * The user that will receive the reference. Can be the id or some other allowed identifier (login name, e-mail, etc).
     */
    to: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<ReferenceDataForSet>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.GetReferenceDataForSetPath, 'get');
    if (params) {

      rb.path('from', params.from, {});
      rb.path('to', params.to, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReferenceDataForSet>;
      })
    );
  }

  /**
   * Returns details for setting a reference.
   *
   * Returns details for setting a reference.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getReferenceDataForSet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReferenceDataForSet(params: {

    /**
     * The user that will give the reference. Can be &#x60;self&#x60; for the currently authenticated user, or the id or some other allowed identifier (login name, e-mail, etc).
     */
    from: string;

    /**
     * The user that will receive the reference. Can be the id or some other allowed identifier (login name, e-mail, etc).
     */
    to: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<ReferenceDataForSet> {

    return this.getReferenceDataForSet$Response(params).pipe(
      map((r: StrictHttpResponse<ReferenceDataForSet>) => r.body as ReferenceDataForSet)
    );
  }

  /**
   * Path part for operation setReference
   */
  static readonly SetReferencePath = '/{from}/reference/{to}';

  /**
   * Creates or changes the reference between the given users.
   *
   * Creates or changes the reference between the given users.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setReference()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setReference$Response(params: {

    /**
     * The user that will give the reference. Can be &#x60;self&#x60; for the currently authenticated user, or the id or some other allowed identifier (login name, e-mail, etc).
     */
    from: string;

    /**
     * The user that will receive the reference. Can be the id or some other allowed identifier (login name, e-mail, etc).
     */
    to: string;
  
    /**
     * The reference details
     */
    body: ReferenceSet
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.SetReferencePath, 'post');
    if (params) {

      rb.path('from', params.from, {});
      rb.path('to', params.to, {});

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
   * Creates or changes the reference between the given users.
   *
   * Creates or changes the reference between the given users.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setReference$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setReference(params: {

    /**
     * The user that will give the reference. Can be &#x60;self&#x60; for the currently authenticated user, or the id or some other allowed identifier (login name, e-mail, etc).
     */
    from: string;

    /**
     * The user that will receive the reference. Can be the id or some other allowed identifier (login name, e-mail, etc).
     */
    to: string;
  
    /**
     * The reference details
     */
    body: ReferenceSet
  }): Observable<string> {

    return this.setReference$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation viewReference
   */
  static readonly ViewReferencePath = '/references/{id}';

  /**
   * Returns details of a specific reference.
   *
   * Returns details of a specific reference.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewReference()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewReference$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<ReferenceView>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.ViewReferencePath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReferenceView>;
      })
    );
  }

  /**
   * Returns details of a specific reference.
   *
   * Returns details of a specific reference.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewReference$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewReference(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<ReferenceView> {

    return this.viewReference$Response(params).pipe(
      map((r: StrictHttpResponse<ReferenceView>) => r.body as ReferenceView)
    );
  }

  /**
   * Path part for operation updateReference
   */
  static readonly UpdateReferencePath = '/references/{id}';

  /**
   * Updates an existing reference.
   *
   * Updates an existing reference.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReference()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReference$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The reference details
     */
    body: ReferenceSet
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.UpdateReferencePath, 'put');
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
   * Updates an existing reference.
   *
   * Updates an existing reference.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateReference$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReference(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The reference details
     */
    body: ReferenceSet
  }): Observable<void> {

    return this.updateReference$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteReference
   */
  static readonly DeleteReferencePath = '/references/{id}';

  /**
   * Removes a reference.
   *
   * Removes a reference
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReference()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReference$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.DeleteReferencePath, 'delete');
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
   * Removes a reference.
   *
   * Removes a reference
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteReference$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReference(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteReference$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getReferenceDataForEdit
   */
  static readonly GetReferenceDataForEditPath = '/references/{id}/data-for-edit';

  /**
   * Returns data to edit an existing reference.
   *
   * Returns configuration data for editing a reference, plus the current `ReferenceSet` object that can be altered and sent back.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReferenceDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReferenceDataForEdit$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<ReferenceDataForSet>> {

    const rb = new RequestBuilder(this.rootUrl, ReferencesService.GetReferenceDataForEditPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReferenceDataForSet>;
      })
    );
  }

  /**
   * Returns data to edit an existing reference.
   *
   * Returns configuration data for editing a reference, plus the current `ReferenceSet` object that can be altered and sent back.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getReferenceDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReferenceDataForEdit(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<ReferenceDataForSet> {

    return this.getReferenceDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<ReferenceDataForSet>) => r.body as ReferenceDataForSet)
    );
  }

}
