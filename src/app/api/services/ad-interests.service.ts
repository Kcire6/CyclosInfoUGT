/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AdInterestDataForEdit } from '../models/ad-interest-data-for-edit';
import { AdInterestDataForNew } from '../models/ad-interest-data-for-new';
import { AdInterestEdit } from '../models/ad-interest-edit';
import { AdInterestNew } from '../models/ad-interest-new';
import { AdInterestView } from '../models/ad-interest-view';
import { UserAdInterestsListData } from '../models/user-ad-interests-list-data';


/**
 * Provides access to advertisement interests, which are criteria registered by users to be notified when new matching advertisements are published.
 */
@Injectable({
  providedIn: 'root',
})
export class AdInterestsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserAdInterestsListData
   */
  static readonly GetUserAdInterestsListDataPath = '/{user}/marketplace-interests/list-data';

  /**
   * Returns data for advertisement interests listing of the given user.
   *
   * Returns data for advertisement interests listing of the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserAdInterestsListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAdInterestsListData$Response(params: {

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

  }): Observable<StrictHttpResponse<UserAdInterestsListData>> {

    const rb = new RequestBuilder(this.rootUrl, AdInterestsService.GetUserAdInterestsListDataPath, 'get');
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
        return r as StrictHttpResponse<UserAdInterestsListData>;
      })
    );
  }

  /**
   * Returns data for advertisement interests listing of the given user.
   *
   * Returns data for advertisement interests listing of the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserAdInterestsListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAdInterestsListData(params: {

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

  }): Observable<UserAdInterestsListData> {

    return this.getUserAdInterestsListData$Response(params).pipe(
      map((r: StrictHttpResponse<UserAdInterestsListData>) => r.body as UserAdInterestsListData)
    );
  }

  /**
   * Path part for operation getAdInterestDataForNew
   */
  static readonly GetAdInterestDataForNewPath = '/{user}/marketplace-interests/data-for-new';

  /**
   * Returns data for creating a new advertisement interest for a given user.
   *
   * Returns data for creating a new advertisement interest for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdInterestDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdInterestDataForNew$Response(params: {

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

  }): Observable<StrictHttpResponse<AdInterestDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, AdInterestsService.GetAdInterestDataForNewPath, 'get');
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
        return r as StrictHttpResponse<AdInterestDataForNew>;
      })
    );
  }

  /**
   * Returns data for creating a new advertisement interest for a given user.
   *
   * Returns data for creating a new advertisement interest for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdInterestDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdInterestDataForNew(params: {

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

  }): Observable<AdInterestDataForNew> {

    return this.getAdInterestDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<AdInterestDataForNew>) => r.body as AdInterestDataForNew)
    );
  }

  /**
   * Path part for operation createAdInterest
   */
  static readonly CreateAdInterestPath = '/{user}/marketplace-interests';

  /**
   * Creates a new advertisement interest for a given user.
   *
   * Creates a new advertisement interest for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAdInterest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAdInterest$Response(params: {

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
     * The advertisement interest to be created.
     */
    body: AdInterestNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AdInterestsService.CreateAdInterestPath, 'post');
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
   * Creates a new advertisement interest for a given user.
   *
   * Creates a new advertisement interest for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAdInterest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAdInterest(params: {

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
     * The advertisement interest to be created.
     */
    body: AdInterestNew
  }): Observable<string> {

    return this.createAdInterest$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getAdInterestDataForEdit
   */
  static readonly GetAdInterestDataForEditPath = '/marketplace-interests/{id}/data-for-edit';

  /**
   * Returns data for modifying an advertisement interest.
   *
   * Returns data for modifying an advertisement interest.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdInterestDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdInterestDataForEdit$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<AdInterestDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, AdInterestsService.GetAdInterestDataForEditPath, 'get');
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
        return r as StrictHttpResponse<AdInterestDataForEdit>;
      })
    );
  }

  /**
   * Returns data for modifying an advertisement interest.
   *
   * Returns data for modifying an advertisement interest.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdInterestDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdInterestDataForEdit(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<AdInterestDataForEdit> {

    return this.getAdInterestDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<AdInterestDataForEdit>) => r.body as AdInterestDataForEdit)
    );
  }

  /**
   * Path part for operation viewAdInterest
   */
  static readonly ViewAdInterestPath = '/marketplace-interests/{id}';

  /**
   * Returns details of an advertisement interest.
   *
   * Returns details of an advertisement interest.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewAdInterest()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewAdInterest$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<AdInterestView>> {

    const rb = new RequestBuilder(this.rootUrl, AdInterestsService.ViewAdInterestPath, 'get');
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
        return r as StrictHttpResponse<AdInterestView>;
      })
    );
  }

  /**
   * Returns details of an advertisement interest.
   *
   * Returns details of an advertisement interest.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewAdInterest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewAdInterest(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<AdInterestView> {

    return this.viewAdInterest$Response(params).pipe(
      map((r: StrictHttpResponse<AdInterestView>) => r.body as AdInterestView)
    );
  }

  /**
   * Path part for operation updateAdInterest
   */
  static readonly UpdateAdInterestPath = '/marketplace-interests/{id}';

  /**
   * Updates an existing advertisement interest.
   *
   * Updates an existing advertisement interest.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAdInterest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdInterest$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The advertisement interest to be edited.
     */
    body: AdInterestEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdInterestsService.UpdateAdInterestPath, 'put');
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
   * Updates an existing advertisement interest.
   *
   * Updates an existing advertisement interest.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAdInterest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdInterest(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The advertisement interest to be edited.
     */
    body: AdInterestEdit
  }): Observable<void> {

    return this.updateAdInterest$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteAdInterest
   */
  static readonly DeleteAdInterestPath = '/marketplace-interests/{id}';

  /**
   * Removes an advertisement interest.
   *
   * Removes an advertisement interest.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAdInterest()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdInterest$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdInterestsService.DeleteAdInterestPath, 'delete');
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
   * Removes an advertisement interest.
   *
   * Removes an advertisement interest.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAdInterest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdInterest(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteAdInterest$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
