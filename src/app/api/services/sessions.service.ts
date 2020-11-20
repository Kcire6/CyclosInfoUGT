/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LoginUser } from '../models/login-user';
import { RoleEnum } from '../models/role-enum';
import { SessionDataForSearch } from '../models/session-data-for-search';
import { SessionResult } from '../models/session-result';
import { UserAuth } from '../models/user-auth';


/**
 * Operations for administrators managing sessions of other users.
 */
@Injectable({
  providedIn: 'root',
})
export class SessionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSessionDataForSearch
   */
  static readonly GetSessionDataForSearchPath = '/sessions/data-for-search';

  /**
   * Returns data for searching user sessions.
   *
   * Returns data for searching connected users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSessionDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSessionDataForSearch$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<SessionDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, SessionsService.GetSessionDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SessionDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching user sessions.
   *
   * Returns data for searching connected users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSessionDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSessionDataForSearch(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<SessionDataForSearch> {

    return this.getSessionDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<SessionDataForSearch>) => r.body as SessionDataForSearch)
    );
  }

  /**
   * Path part for operation searchSessions
   */
  static readonly SearchSessionsPath = '/sessions';

  /**
   * Search for sessions.
   *
   * Returns the sessions matching a given criteria.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchSessions()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchSessions$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or a principal (login name, e-mail, etc) of a broker. Used to filter the sessions of users brokered by the given broker.
     */
    broker?: string;

    /**
     * Internal names of the sessions channels that can be returned.
     */
    channels?: Array<string>;

    /**
     * Whether to exclude or not the current session.
     */
    excludeCurrentSession?: boolean;

    /**
     * Either id or a principal (login name, e-mail, etc) of a user. The owner member of the operators sessions Used to filter the operator sessions of the given user.
     */
    operatorsOf?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The role of the logged user in the sessions.
     */
    roles?: Array<RoleEnum>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Either id or a principal (login name, e-mail, etc) of the sessions owner.
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<SessionResult>>> {

    const rb = new RequestBuilder(this.rootUrl, SessionsService.SearchSessionsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('broker', params.broker, {});
      rb.query('channels', params.channels, {});
      rb.query('excludeCurrentSession', params.excludeCurrentSession, {});
      rb.query('operatorsOf', params.operatorsOf, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('roles', params.roles, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SessionResult>>;
      })
    );
  }

  /**
   * Search for sessions.
   *
   * Returns the sessions matching a given criteria.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchSessions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchSessions(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or a principal (login name, e-mail, etc) of a broker. Used to filter the sessions of users brokered by the given broker.
     */
    broker?: string;

    /**
     * Internal names of the sessions channels that can be returned.
     */
    channels?: Array<string>;

    /**
     * Whether to exclude or not the current session.
     */
    excludeCurrentSession?: boolean;

    /**
     * Either id or a principal (login name, e-mail, etc) of a user. The owner member of the operators sessions Used to filter the operator sessions of the given user.
     */
    operatorsOf?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The role of the logged user in the sessions.
     */
    roles?: Array<RoleEnum>;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Either id or a principal (login name, e-mail, etc) of the sessions owner.
     */
    user?: string;

  }): Observable<Array<SessionResult>> {

    return this.searchSessions$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SessionResult>>) => r.body as Array<SessionResult>)
    );
  }

  /**
   * Path part for operation loginUser
   */
  static readonly LoginUserPath = '/sessions';

  /**
   * Logins a user, returning data from the new session.
   *
   * Created a session for a given user. Must be executed as administrator with permissions. A channel can be specified (defaults to `main`) so the user can be logged in by some external actor (like an website) and then redirected to `<cyclos-root>?sessionToken=<session-token>`. It is also recommended to set in Cyclos the login and logout URLs in the configuration, so, when the user logs out, he will be redirected back to the previous website.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * Information about the user being logged in
     */
    body: LoginUser
  }): Observable<StrictHttpResponse<UserAuth>> {

    const rb = new RequestBuilder(this.rootUrl, SessionsService.LoginUserPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserAuth>;
      })
    );
  }

  /**
   * Logins a user, returning data from the new session.
   *
   * Created a session for a given user. Must be executed as administrator with permissions. A channel can be specified (defaults to `main`) so the user can be logged in by some external actor (like an website) and then redirected to `<cyclos-root>?sessionToken=<session-token>`. It is also recommended to set in Cyclos the login and logout URLs in the configuration, so, when the user logs out, he will be redirected back to the previous website.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * Information about the user being logged in
     */
    body: LoginUser
  }): Observable<UserAuth> {

    return this.loginUser$Response(params).pipe(
      map((r: StrictHttpResponse<UserAuth>) => r.body as UserAuth)
    );
  }

  /**
   * Path part for operation disconnectUserSessions
   */
  static readonly DisconnectUserSessionsPath = '/{user}/sessions';

  /**
   * Disconnects all sessions of a user.
   *
   * Disconnects all sessions of the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disconnectUserSessions()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconnectUserSessions$Response(params: {

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

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, SessionsService.DisconnectUserSessionsPath, 'delete');
    if (params) {

      rb.path('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'plain/text'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Disconnects all sessions of a user.
   *
   * Disconnects all sessions of the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `disconnectUserSessions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconnectUserSessions(params: {

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

  }): Observable<string> {

    return this.disconnectUserSessions$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation disconnectSession
   */
  static readonly DisconnectSessionPath = '/sessions/{sessionToken}';

  /**
   * Disconnects a session.
   *
   * Disconnects a session by its session token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disconnectSession()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconnectSession$Response(params: {

    /**
     * The session token
     */
    sessionToken: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SessionsService.DisconnectSessionPath, 'delete');
    if (params) {

      rb.path('sessionToken', params.sessionToken, {});

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
   * Disconnects a session.
   *
   * Disconnects a session by its session token
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `disconnectSession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconnectSession(params: {

    /**
     * The session token
     */
    sessionToken: string;

  }): Observable<void> {

    return this.disconnectSession$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
