/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { EntityReference } from '../models/entity-reference';
import { OperatorGroupDataForEdit } from '../models/operator-group-data-for-edit';
import { OperatorGroupDataForNew } from '../models/operator-group-data-for-new';
import { OperatorGroupEdit } from '../models/operator-group-edit';
import { OperatorGroupNew } from '../models/operator-group-new';
import { OperatorGroupView } from '../models/operator-group-view';
import { UserOperatorGroupsListData } from '../models/user-operator-groups-list-data';


/**
 * Operations over operator groups, which users can create to define which permissions their operators will have.
 */
@Injectable({
  providedIn: 'root',
})
export class OperatorGroupsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserOperatorGroupsListData
   */
  static readonly GetUserOperatorGroupsListDataPath = '/{user}/operator-groups/list-data';

  /**
   * Returns data for operator groups listing of the given user.
   *
   * Returns data containing the operator groups beloging to the given user, plus additional data related to them.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserOperatorGroupsListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserOperatorGroupsListData$Response(params: {

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

  }): Observable<StrictHttpResponse<UserOperatorGroupsListData>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.GetUserOperatorGroupsListDataPath, 'get');
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
        return r as StrictHttpResponse<UserOperatorGroupsListData>;
      })
    );
  }

  /**
   * Returns data for operator groups listing of the given user.
   *
   * Returns data containing the operator groups beloging to the given user, plus additional data related to them.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserOperatorGroupsListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserOperatorGroupsListData(params: {

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

  }): Observable<UserOperatorGroupsListData> {

    return this.getUserOperatorGroupsListData$Response(params).pipe(
      map((r: StrictHttpResponse<UserOperatorGroupsListData>) => r.body as UserOperatorGroupsListData)
    );
  }

  /**
   * Path part for operation listOperatorGroupsByUser
   */
  static readonly ListOperatorGroupsByUserPath = '/{user}/operator-groups';

  /**
   * Lists all operator groups for a given user.
   *
   * Returns a list with the operator groups of the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOperatorGroupsByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperatorGroupsByUser$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<EntityReference>>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.ListOperatorGroupsByUserPath, 'get');
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
        return r as StrictHttpResponse<Array<EntityReference>>;
      })
    );
  }

  /**
   * Lists all operator groups for a given user.
   *
   * Returns a list with the operator groups of the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOperatorGroupsByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperatorGroupsByUser(params: {

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

  }): Observable<Array<EntityReference>> {

    return this.listOperatorGroupsByUser$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EntityReference>>) => r.body as Array<EntityReference>)
    );
  }

  /**
   * Path part for operation createOperatorGroup
   */
  static readonly CreateOperatorGroupPath = '/{user}/operator-groups';

  /**
   * Creates a new operator group for the given user.
   *
   * Creates a new operator group for the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOperatorGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOperatorGroup$Response(params: {

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
     * The operator group to be created
     */
    body: OperatorGroupNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.CreateOperatorGroupPath, 'post');
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
   * Creates a new operator group for the given user.
   *
   * Creates a new operator group for the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOperatorGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOperatorGroup(params: {

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
     * The operator group to be created
     */
    body: OperatorGroupNew
  }): Observable<string> {

    return this.createOperatorGroup$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getOperatorGroupDataForNew
   */
  static readonly GetOperatorGroupDataForNewPath = '/{user}/operator-groups/data-for-new';

  /**
   * Returns data for creating an operator group.
   *
   * Returns configuration data for creating an operator group, such as which operations are available.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperatorGroupDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperatorGroupDataForNew$Response(params: {

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

  }): Observable<StrictHttpResponse<OperatorGroupDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.GetOperatorGroupDataForNewPath, 'get');
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
        return r as StrictHttpResponse<OperatorGroupDataForNew>;
      })
    );
  }

  /**
   * Returns data for creating an operator group.
   *
   * Returns configuration data for creating an operator group, such as which operations are available.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOperatorGroupDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperatorGroupDataForNew(params: {

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

  }): Observable<OperatorGroupDataForNew> {

    return this.getOperatorGroupDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<OperatorGroupDataForNew>) => r.body as OperatorGroupDataForNew)
    );
  }

  /**
   * Path part for operation getOperatorGroupDataForEdit
   */
  static readonly GetOperatorGroupDataForEditPath = '/operator-groups/{id}/data-for-edit';

  /**
   * Returns data for editing an operator group.
   *
   * Returns configuration data for editing an operator group, such as which operations are available.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperatorGroupDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperatorGroupDataForEdit$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<OperatorGroupDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.GetOperatorGroupDataForEditPath, 'get');
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
        return r as StrictHttpResponse<OperatorGroupDataForEdit>;
      })
    );
  }

  /**
   * Returns data for editing an operator group.
   *
   * Returns configuration data for editing an operator group, such as which operations are available.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOperatorGroupDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperatorGroupDataForEdit(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<OperatorGroupDataForEdit> {

    return this.getOperatorGroupDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<OperatorGroupDataForEdit>) => r.body as OperatorGroupDataForEdit)
    );
  }

  /**
   * Path part for operation viewOperatorGroup
   */
  static readonly ViewOperatorGroupPath = '/operator-groups/{id}';

  /**
   * Returns details of a specific operator group.
   *
   * Returns information about an operator group, located by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewOperatorGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewOperatorGroup$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<OperatorGroupView>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.ViewOperatorGroupPath, 'get');
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
        return r as StrictHttpResponse<OperatorGroupView>;
      })
    );
  }

  /**
   * Returns details of a specific operator group.
   *
   * Returns information about an operator group, located by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewOperatorGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewOperatorGroup(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<OperatorGroupView> {

    return this.viewOperatorGroup$Response(params).pipe(
      map((r: StrictHttpResponse<OperatorGroupView>) => r.body as OperatorGroupView)
    );
  }

  /**
   * Path part for operation updateOperatorGroup
   */
  static readonly UpdateOperatorGroupPath = '/operator-groups/{id}';

  /**
   * Updates an existing operator group.
   *
   * Updates an existing operator group.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOperatorGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOperatorGroup$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The operator group to be edited
     */
    body: OperatorGroupEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.UpdateOperatorGroupPath, 'put');
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
   * Updates an existing operator group.
   *
   * Updates an existing operator group.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateOperatorGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOperatorGroup(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The operator group to be edited
     */
    body: OperatorGroupEdit
  }): Observable<void> {

    return this.updateOperatorGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteOperatorGroup
   */
  static readonly DeleteOperatorGroupPath = '/operator-groups/{id}';

  /**
   * Removes an operator group.
   *
   * Removes an operator group.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOperatorGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOperatorGroup$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OperatorGroupsService.DeleteOperatorGroupPath, 'delete');
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
   * Removes an operator group.
   *
   * Removes an operator group.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteOperatorGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOperatorGroup(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteOperatorGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
