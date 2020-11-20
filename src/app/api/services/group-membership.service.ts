/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ChangeGroupMembershipParams } from '../models/change-group-membership-params';
import { GroupMembershipData } from '../models/group-membership-data';


/**
 * Viewing and setting the group of a user / operator.
 */
@Injectable({
  providedIn: 'root',
})
export class GroupMembershipService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getGroupMembershipData
   */
  static readonly GetGroupMembershipDataPath = '/{user}/group';

  /**
   * Returns the current user / operator group and the change history.
   *
   * Returns data containing information regarding the user / operator group membership
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupMembershipData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupMembershipData$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<GroupMembershipData>> {

    const rb = new RequestBuilder(this.rootUrl, GroupMembershipService.GetGroupMembershipDataPath, 'get');
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
        return r as StrictHttpResponse<GroupMembershipData>;
      })
    );
  }

  /**
   * Returns the current user / operator group and the change history.
   *
   * Returns data containing information regarding the user / operator group membership
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getGroupMembershipData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupMembershipData(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<GroupMembershipData> {

    return this.getGroupMembershipData$Response(params).pipe(
      map((r: StrictHttpResponse<GroupMembershipData>) => r.body as GroupMembershipData)
    );
  }

  /**
   * Path part for operation changeGroupMembership
   */
  static readonly ChangeGroupMembershipPath = '/{user}/group';

  /**
   * Changes the user / operator group.
   *
   * Sets the new user / operator group. Depending on the new group, new permissions are granted / revoked to / from the user / operator.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeGroupMembership()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeGroupMembership$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;
  
    /**
     * The parameters for changing the group
     */
    body: ChangeGroupMembershipParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GroupMembershipService.ChangeGroupMembershipPath, 'post');
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
   * Changes the user / operator group.
   *
   * Sets the new user / operator group. Depending on the new group, new permissions are granted / revoked to / from the user / operator.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changeGroupMembership$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeGroupMembership(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;
  
    /**
     * The parameters for changing the group
     */
    body: ChangeGroupMembershipParams
  }): Observable<void> {

    return this.changeGroupMembership$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
