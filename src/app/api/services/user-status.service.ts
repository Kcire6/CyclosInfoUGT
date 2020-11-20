/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ChangeUserStatusParams } from '../models/change-user-status-params';
import { UserStatusData } from '../models/user-status-data';


/**
 * Viewing and setting the status of a user / operator. Examples of statuses are active, blocked, disabled, removed and purged.
 */
@Injectable({
  providedIn: 'root',
})
export class UserStatusService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserStatus
   */
  static readonly GetUserStatusPath = '/{user}/status';

  /**
   * Returns the current user status and the status history.
   *
   * Returns data containing information regarding the user status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatus$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<UserStatusData>> {

    const rb = new RequestBuilder(this.rootUrl, UserStatusService.GetUserStatusPath, 'get');
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
        return r as StrictHttpResponse<UserStatusData>;
      })
    );
  }

  /**
   * Returns the current user status and the status history.
   *
   * Returns data containing information regarding the user status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatus(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<UserStatusData> {

    return this.getUserStatus$Response(params).pipe(
      map((r: StrictHttpResponse<UserStatusData>) => r.body as UserStatusData)
    );
  }

  /**
   * Path part for operation changeUserStatus
   */
  static readonly ChangeUserStatusPath = '/{user}/status';

  /**
   * Sets the new user status.
   *
   * Sets the new user status. Managers have permissions to which statuses are allowed. Some statuses are transient ( `active`, `blocked` and `disabled`) while others are terminal (`removed` and `purged`). The `pending` status can never be managed by this operation, but by validating the user registration.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeUserStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeUserStatus$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;
  
    /**
     * The parameters for changing the status
     */
    body: ChangeUserStatusParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserStatusService.ChangeUserStatusPath, 'post');
    if (params) {

      rb.path('user', params.user, {});

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
   * Sets the new user status.
   *
   * Sets the new user status. Managers have permissions to which statuses are allowed. Some statuses are transient ( `active`, `blocked` and `disabled`) while others are terminal (`removed` and `purged`). The `pending` status can never be managed by this operation, but by validating the user registration.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changeUserStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeUserStatus(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;
  
    /**
     * The parameters for changing the status
     */
    body: ChangeUserStatusParams
  }): Observable<void> {

    return this.changeUserStatus$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
