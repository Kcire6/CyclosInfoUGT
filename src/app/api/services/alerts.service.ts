/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserAlert } from '../models/user-alert';
import { UserAlertDataForSearch } from '../models/user-alert-data-for-search';
import { UserAlertTypeEnum } from '../models/user-alert-type-enum';


/**
 * Provides access to alerts generated in the system. Currently only user alerts are supported (system alerts are not).
 */
@Injectable({
  providedIn: 'root',
})
export class AlertsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchUserAlerts
   */
  static readonly SearchUserAlertsPath = '/alerts/user';

  /**
   * Searches for user alerts.
   *
   * Searches for user alerts according to a give set of filters.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUserAlerts()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserAlerts$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the ids or identification methods the alert user&#x27;s brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum alert date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * Either the ids or internal names of the alert user
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
     * The types of user alerts to search
     */
    types?: Array<UserAlertTypeEnum>;

    /**
     * Either the id or identifier of the alert user
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<UserAlert>>> {

    const rb = new RequestBuilder(this.rootUrl, AlertsService.SearchUserAlertsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('brokers', params.brokers, {});
      rb.query('datePeriod', params.datePeriod, {});
      rb.query('groups', params.groups, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
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
        return r as StrictHttpResponse<Array<UserAlert>>;
      })
    );
  }

  /**
   * Searches for user alerts.
   *
   * Searches for user alerts according to a give set of filters.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUserAlerts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserAlerts(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the ids or identification methods the alert user&#x27;s brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum alert date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    datePeriod?: Array<string>;

    /**
     * Either the ids or internal names of the alert user
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
     * The types of user alerts to search
     */
    types?: Array<UserAlertTypeEnum>;

    /**
     * Either the id or identifier of the alert user
     */
    user?: string;

  }): Observable<Array<UserAlert>> {

    return this.searchUserAlerts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAlert>>) => r.body as Array<UserAlert>)
    );
  }

  /**
   * Path part for operation getUserAlertDataForSearch
   */
  static readonly GetUserAlertDataForSearchPath = '/alerts/user/data-for-search';

  /**
   * Returns configuration data for searching user alerts.
   *
   * Returns configuration data for searching user alerts.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserAlertDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAlertDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<UserAlertDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, AlertsService.GetUserAlertDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserAlertDataForSearch>;
      })
    );
  }

  /**
   * Returns configuration data for searching user alerts.
   *
   * Returns configuration data for searching user alerts.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserAlertDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAlertDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<UserAlertDataForSearch> {

    return this.getUserAlertDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<UserAlertDataForSearch>) => r.body as UserAlertDataForSearch)
    );
  }

}
