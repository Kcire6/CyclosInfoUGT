/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserProductAssignmentData } from '../models/user-product-assignment-data';


/**
 * Viewing and managing the assigned products to a user.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductAssignmentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserProductsData
   */
  static readonly GetUserProductsDataPath = '/{user}/products';

  /**
   * Returns the user individual products and the change history.
   *
   * Returns data containing information regarding the products assigned to the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserProductsData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProductsData$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<UserProductAssignmentData>> {

    const rb = new RequestBuilder(this.rootUrl, ProductAssignmentService.GetUserProductsDataPath, 'get');
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
        return r as StrictHttpResponse<UserProductAssignmentData>;
      })
    );
  }

  /**
   * Returns the user individual products and the change history.
   *
   * Returns data containing information regarding the products assigned to the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserProductsData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProductsData(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<UserProductAssignmentData> {

    return this.getUserProductsData$Response(params).pipe(
      map((r: StrictHttpResponse<UserProductAssignmentData>) => r.body as UserProductAssignmentData)
    );
  }

  /**
   * Path part for operation assignIndividualProduct
   */
  static readonly AssignIndividualProductPath = '/{user}/products/{product}';

  /**
   * Assigns a product to an individual user.
   *
   * Assigns a product to an individual user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignIndividualProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignIndividualProduct$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Product internal name or identifier
     */
    product: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductAssignmentService.AssignIndividualProductPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('product', params.product, {});

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
   * Assigns a product to an individual user.
   *
   * Assigns a product to an individual user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assignIndividualProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignIndividualProduct(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Product internal name or identifier
     */
    product: string;

  }): Observable<void> {

    return this.assignIndividualProduct$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation unassignIndividualProduct
   */
  static readonly UnassignIndividualProductPath = '/{user}/products/{product}';

  /**
   * Unassigns a product to an individual user.
   *
   * Unassigns a product to an individual user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unassignIndividualProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  unassignIndividualProduct$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Product internal name or identifier
     */
    product: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductAssignmentService.UnassignIndividualProductPath, 'delete');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('product', params.product, {});

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
   * Unassigns a product to an individual user.
   *
   * Unassigns a product to an individual user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `unassignIndividualProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unassignIndividualProduct(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Product internal name or identifier
     */
    product: string;

  }): Observable<void> {

    return this.unassignIndividualProduct$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
