/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DeliveryMethodDataForEdit } from '../models/delivery-method-data-for-edit';
import { DeliveryMethodDataForNew } from '../models/delivery-method-data-for-new';
import { DeliveryMethodEdit } from '../models/delivery-method-edit';
import { DeliveryMethodNew } from '../models/delivery-method-new';
import { DeliveryMethodView } from '../models/delivery-method-view';
import { UserDeliveryMethodsListData } from '../models/user-delivery-methods-list-data';


/**
 * Provides access to webshop delivery methods, which must be selected for an order to be created. A delivery method can have either a fixed amount or be negotiated between the seller and the buyer.
 */
@Injectable({
  providedIn: 'root',
})
export class DeliveryMethodsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserDeliveryMethodsListData
   */
  static readonly GetUserDeliveryMethodsListDataPath = '/{user}/delivery-methods/list-data';

  /**
   * Returns data for webshop delivery methods listing of the given user.
   *
   * Returns the user webshop delivery methods, plus additional data related to them.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserDeliveryMethodsListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDeliveryMethodsListData$Response(params: {

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

  }): Observable<StrictHttpResponse<UserDeliveryMethodsListData>> {

    const rb = new RequestBuilder(this.rootUrl, DeliveryMethodsService.GetUserDeliveryMethodsListDataPath, 'get');
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
        return r as StrictHttpResponse<UserDeliveryMethodsListData>;
      })
    );
  }

  /**
   * Returns data for webshop delivery methods listing of the given user.
   *
   * Returns the user webshop delivery methods, plus additional data related to them.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserDeliveryMethodsListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDeliveryMethodsListData(params: {

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

  }): Observable<UserDeliveryMethodsListData> {

    return this.getUserDeliveryMethodsListData$Response(params).pipe(
      map((r: StrictHttpResponse<UserDeliveryMethodsListData>) => r.body as UserDeliveryMethodsListData)
    );
  }

  /**
   * Path part for operation getDeliveryMethodDataForNew
   */
  static readonly GetDeliveryMethodDataForNewPath = '/{user}/delivery-methods/data-for-new';

  /**
   * Returns data for creating a new webshop delivery method for a given user.
   *
   * Returns data for creating a new webshop delivery method for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliveryMethodDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryMethodDataForNew$Response(params: {

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

  }): Observable<StrictHttpResponse<DeliveryMethodDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, DeliveryMethodsService.GetDeliveryMethodDataForNewPath, 'get');
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
        return r as StrictHttpResponse<DeliveryMethodDataForNew>;
      })
    );
  }

  /**
   * Returns data for creating a new webshop delivery method for a given user.
   *
   * Returns data for creating a new webshop delivery method for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDeliveryMethodDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryMethodDataForNew(params: {

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

  }): Observable<DeliveryMethodDataForNew> {

    return this.getDeliveryMethodDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<DeliveryMethodDataForNew>) => r.body as DeliveryMethodDataForNew)
    );
  }

  /**
   * Path part for operation createDeliveryMethod
   */
  static readonly CreateDeliveryMethodPath = '/{user}/delivery-methods';

  /**
   * Creates a new webshop delivery method for a given user.
   *
   * Creates a new webshop delivery method for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDeliveryMethod()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDeliveryMethod$Response(params: {

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
     * The delivery method to be created.
     */
    body: DeliveryMethodNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DeliveryMethodsService.CreateDeliveryMethodPath, 'post');
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
   * Creates a new webshop delivery method for a given user.
   *
   * Creates a new webshop delivery method for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createDeliveryMethod$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDeliveryMethod(params: {

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
     * The delivery method to be created.
     */
    body: DeliveryMethodNew
  }): Observable<string> {

    return this.createDeliveryMethod$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getDeliveryMethodDataForEdit
   */
  static readonly GetDeliveryMethodDataForEditPath = '/delivery-methods/{id}/data-for-edit';

  /**
   * Returns data for modifying a webshop delivery method.
   *
   * Returns data for modifying a webshop delivery method.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliveryMethodDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryMethodDataForEdit$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DeliveryMethodDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, DeliveryMethodsService.GetDeliveryMethodDataForEditPath, 'get');
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
        return r as StrictHttpResponse<DeliveryMethodDataForEdit>;
      })
    );
  }

  /**
   * Returns data for modifying a webshop delivery method.
   *
   * Returns data for modifying a webshop delivery method.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDeliveryMethodDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryMethodDataForEdit(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DeliveryMethodDataForEdit> {

    return this.getDeliveryMethodDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<DeliveryMethodDataForEdit>) => r.body as DeliveryMethodDataForEdit)
    );
  }

  /**
   * Path part for operation viewDeliveryMethod
   */
  static readonly ViewDeliveryMethodPath = '/delivery-methods/{id}';

  /**
   * Returns details of a webshop delivery method.
   *
   * Returns details of a webshop delivery method.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewDeliveryMethod()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewDeliveryMethod$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DeliveryMethodView>> {

    const rb = new RequestBuilder(this.rootUrl, DeliveryMethodsService.ViewDeliveryMethodPath, 'get');
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
        return r as StrictHttpResponse<DeliveryMethodView>;
      })
    );
  }

  /**
   * Returns details of a webshop delivery method.
   *
   * Returns details of a webshop delivery method.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewDeliveryMethod$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewDeliveryMethod(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DeliveryMethodView> {

    return this.viewDeliveryMethod$Response(params).pipe(
      map((r: StrictHttpResponse<DeliveryMethodView>) => r.body as DeliveryMethodView)
    );
  }

  /**
   * Path part for operation updateDeliveryMethod
   */
  static readonly UpdateDeliveryMethodPath = '/delivery-methods/{id}';

  /**
   * Updates an existing webshop delivery method.
   *
   * Updates an existing webshop delivery method.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDeliveryMethod()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDeliveryMethod$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The webshop delivery method to be edited.
     */
    body: DeliveryMethodEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeliveryMethodsService.UpdateDeliveryMethodPath, 'put');
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
   * Updates an existing webshop delivery method.
   *
   * Updates an existing webshop delivery method.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateDeliveryMethod$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDeliveryMethod(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The webshop delivery method to be edited.
     */
    body: DeliveryMethodEdit
  }): Observable<void> {

    return this.updateDeliveryMethod$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDeliveryMethod
   */
  static readonly DeleteDeliveryMethodPath = '/delivery-methods/{id}';

  /**
   * Removes a webshop delivery method.
   *
   * Removes a webshop delivery method.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDeliveryMethod()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeliveryMethod$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeliveryMethodsService.DeleteDeliveryMethodPath, 'delete');
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
   * Removes a webshop delivery method.
   *
   * Removes a webshop delivery method.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDeliveryMethod$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeliveryMethod(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteDeliveryMethod$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
