/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AcceptOrderByBuyer } from '../models/accept-order-by-buyer';
import { AcceptOrderBySeller } from '../models/accept-order-by-seller';
import { OrderDataForAcceptByBuyer } from '../models/order-data-for-accept-by-buyer';
import { OrderDataForEdit } from '../models/order-data-for-edit';
import { OrderDataForNew } from '../models/order-data-for-new';
import { OrderDataForSearch } from '../models/order-data-for-search';
import { OrderDataForSetDeliveryMethod } from '../models/order-data-for-set-delivery-method';
import { OrderEdit } from '../models/order-edit';
import { OrderNew } from '../models/order-new';
import { OrderStatusEnum } from '../models/order-status-enum';
import { OrderView } from '../models/order-view';
import { RejectOrder } from '../models/reject-order';
import { SetDeliveryMethod } from '../models/set-delivery-method';
import { UserOrderResult } from '../models/user-order-result';


/**
 * An order contains a set of items from a seller, to a buyer in a certain currency. Orders can be created in 2 ways: either via a shopping cart checkout (by the buyer, using the operations in the `ShoppingCarts` tag to access it. ) or directly by the seller. Once created, the order must be approved by the other party until its payment is finally performed.
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchUserOrders
   */
  static readonly SearchUserOrdersPath = '/{user}/orders';

  /**
   * Searches for orders of a specific user.
   *
   * Returns a page of orders that match a given criteria for a given user. The authenticated user must be the seller, buyer or a manager user with permission to view purchases or sales. A list of statuses is accepted but at this moment only one status can be specified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUserOrders()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserOrders$Response(params: {

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
     * The minimum / maximum order creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * The generated order number according to the webshop settings.
     */
    number?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The product number (with the mask if there is one) of an advertisement contained in the orders.
     */
    productNumber?: string;

    /**
     * Either id or an identification, such as login name, e-mail, etc, for the seller or buyer according whether we are searching for purchases or sales. The allowed identification methods are those the authenticated user can use on keywords search.
     */
    relatedUser?: string;

    /**
     * Are we searching for sales or purchases? If not specified it&#x27;s assumed purchases (i.e &#x60;false&#x60;)
     */
    sales?: boolean;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<OrderStatusEnum>;

  }): Observable<StrictHttpResponse<Array<UserOrderResult>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.SearchUserOrdersPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('creationPeriod', params.creationPeriod, {});
      rb.query('number', params.number, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('productNumber', params.productNumber, {});
      rb.query('relatedUser', params.relatedUser, {});
      rb.query('sales', params.sales, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserOrderResult>>;
      })
    );
  }

  /**
   * Searches for orders of a specific user.
   *
   * Returns a page of orders that match a given criteria for a given user. The authenticated user must be the seller, buyer or a manager user with permission to view purchases or sales. A list of statuses is accepted but at this moment only one status can be specified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUserOrders$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserOrders(params: {

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
     * The minimum / maximum order creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
     */
    creationPeriod?: Array<string>;

    /**
     * The generated order number according to the webshop settings.
     */
    number?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * The product number (with the mask if there is one) of an advertisement contained in the orders.
     */
    productNumber?: string;

    /**
     * Either id or an identification, such as login name, e-mail, etc, for the seller or buyer according whether we are searching for purchases or sales. The allowed identification methods are those the authenticated user can use on keywords search.
     */
    relatedUser?: string;

    /**
     * Are we searching for sales or purchases? If not specified it&#x27;s assumed purchases (i.e &#x60;false&#x60;)
     */
    sales?: boolean;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;
    statuses?: Array<OrderStatusEnum>;

  }): Observable<Array<UserOrderResult>> {

    return this.searchUserOrders$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserOrderResult>>) => r.body as Array<UserOrderResult>)
    );
  }

  /**
   * Path part for operation createOrder
   */
  static readonly CreateOrderPath = '/{user}/orders';

  /**
   * Creates a new order as the seller for a specific buyer.
   *
   * Creates a new order as the seller (i.e the user given in the path must resolve to the authenticated user) for a specific buyer (given in the request body). By default the status of the order will be `draft`. If the order contains all the required information and the seller wants to send it to the buyer then he can do it changing the `draft` boolean field to `false` before submit.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrder$Response(params: {

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
     * The order to be created with status `draft`
     */
    body: OrderNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.CreateOrderPath, 'post');
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
   * Creates a new order as the seller for a specific buyer.
   *
   * Creates a new order as the seller (i.e the user given in the path must resolve to the authenticated user) for a specific buyer (given in the request body). By default the status of the order will be `draft`. If the order contains all the required information and the seller wants to send it to the buyer then he can do it changing the `draft` boolean field to `false` before submit.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrder(params: {

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
     * The order to be created with status `draft`
     */
    body: OrderNew
  }): Observable<string> {

    return this.createOrder$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getOrderDataForNew
   */
  static readonly GetOrderDataForNewPath = '/{user}/orders/data-for-new';

  /**
   * Returns data for creating orders as the seller for a specific buyer.
   *
   * The authenticated user must be the seller (i.e the user given in the path must resolve to the authenticated user) with webshop enable permission.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForNew$Response(params: {

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
     * The user for whom the order will be created. It could be a user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix\ the value with a single quote (like in Excel spreadsheets);
     */
    buyer: string;

    /**
     * Either id or internal name of the currency for the new order. If not given a list with the available currencies for the given buyer will be returned. At the moment of create the order a currency is required.
     */
    currency?: string;

  }): Observable<StrictHttpResponse<OrderDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.GetOrderDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('buyer', params.buyer, {});
      rb.query('currency', params.currency, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDataForNew>;
      })
    );
  }

  /**
   * Returns data for creating orders as the seller for a specific buyer.
   *
   * The authenticated user must be the seller (i.e the user given in the path must resolve to the authenticated user) with webshop enable permission.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForNew(params: {

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
     * The user for whom the order will be created. It could be a user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix\ the value with a single quote (like in Excel spreadsheets);
     */
    buyer: string;

    /**
     * Either id or internal name of the currency for the new order. If not given a list with the available currencies for the given buyer will be returned. At the moment of create the order a currency is required.
     */
    currency?: string;

  }): Observable<OrderDataForNew> {

    return this.getOrderDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<OrderDataForNew>) => r.body as OrderDataForNew)
    );
  }

  /**
   * Path part for operation getOrderDataForSearch
   */
  static readonly GetOrderDataForSearchPath = '/{user}/orders/data-for-search';

  /**
   * Returns data for searching orders (purchases / sales) of a specific user.
   *
   * The authenticated user must be the seller, buyer or a manager user with permission to view purchases or sales.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForSearch$Response(params: {

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
     * Whether we are getting data for searching purchases or sales. If not specified it&#x27;s assumed purchases (i.e false)
     */
    sales?: boolean;

  }): Observable<StrictHttpResponse<OrderDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.GetOrderDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('sales', params.sales, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching orders (purchases / sales) of a specific user.
   *
   * The authenticated user must be the seller, buyer or a manager user with permission to view purchases or sales.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForSearch(params: {

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
     * Whether we are getting data for searching purchases or sales. If not specified it&#x27;s assumed purchases (i.e false)
     */
    sales?: boolean;

  }): Observable<OrderDataForSearch> {

    return this.getOrderDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<OrderDataForSearch>) => r.body as OrderDataForSearch)
    );
  }

  /**
   * Path part for operation viewOrder
   */
  static readonly ViewOrderPath = '/orders/{order}';

  /**
   * Returns details of an order.
   *
   * Returns detailed information of an order.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewOrder$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<OrderView>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ViewOrderPath, 'get');
    if (params) {

      rb.path('order', params.order, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderView>;
      })
    );
  }

  /**
   * Returns details of an order.
   *
   * Returns detailed information of an order.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewOrder(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<OrderView> {

    return this.viewOrder$Response(params).pipe(
      map((r: StrictHttpResponse<OrderView>) => r.body as OrderView)
    );
  }

  /**
   * Path part for operation updateOrder
   */
  static readonly UpdateOrderPath = '/orders/{order}';

  /**
   * Updates an existing order.
   *
   * Updates an existing order.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The order to be edited.
     */
    body: OrderEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.UpdateOrderPath, 'put');
    if (params) {

      rb.path('order', params.order, {});

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
   * Updates an existing order.
   *
   * Updates an existing order.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The order to be edited.
     */
    body: OrderEdit
  }): Observable<void> {

    return this.updateOrder$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteOrder
   */
  static readonly DeleteOrderPath = '/orders/{order}';

  /**
   * Removes an order.
   *
   * Removes an order.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.DeleteOrderPath, 'delete');
    if (params) {

      rb.path('order', params.order, {});

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
   * Removes an order.
   *
   * Removes an order.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<void> {

    return this.deleteOrder$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exportOrder
   */
  static readonly ExportOrderPath = '/orders/{order}/export/{format}';

  /**
   * Exports the order details to a file.
   *
   * Exports the order details to a file. The available formats are available in `OrderView`
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportOrder$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

    /**
     * The format to export the data
     */
    format: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ExportOrderPath, 'get');
    if (params) {

      rb.path('order', params.order, {});
      rb.path('format', params.format, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Exports the order details to a file.
   *
   * Exports the order details to a file. The available formats are available in `OrderView`
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exportOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportOrder(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

    /**
     * The format to export the data
     */
    format: string;

  }): Observable<Blob> {

    return this.exportOrder$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getOrderDataForEdit
   */
  static readonly GetOrderDataForEditPath = '/orders/{order}/data-for-edit';

  /**
   * Returns data for modifying an order as the seller.
   *
   * Returns data for modifying an order as the seller.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForEdit$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<StrictHttpResponse<OrderDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.GetOrderDataForEditPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('order', params.order, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDataForEdit>;
      })
    );
  }

  /**
   * Returns data for modifying an order as the seller.
   *
   * Returns data for modifying an order as the seller.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForEdit(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<OrderDataForEdit> {

    return this.getOrderDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<OrderDataForEdit>) => r.body as OrderDataForEdit)
    );
  }

  /**
   * Path part for operation getDataForSetDeliveryMethod
   */
  static readonly GetDataForSetDeliveryMethodPath = '/orders/{order}/seller/data-for-set-delivery';

  /**
   * Returns configuration data to set delivery method data by seller.
   *
   * Returns configuration data to set delivery method data by seller of an order given by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForSetDeliveryMethod()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForSetDeliveryMethod$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<StrictHttpResponse<OrderDataForSetDeliveryMethod>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.GetDataForSetDeliveryMethodPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('order', params.order, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDataForSetDeliveryMethod>;
      })
    );
  }

  /**
   * Returns configuration data to set delivery method data by seller.
   *
   * Returns configuration data to set delivery method data by seller of an order given by id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForSetDeliveryMethod$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForSetDeliveryMethod(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<OrderDataForSetDeliveryMethod> {

    return this.getDataForSetDeliveryMethod$Response(params).pipe(
      map((r: StrictHttpResponse<OrderDataForSetDeliveryMethod>) => r.body as OrderDataForSetDeliveryMethod)
    );
  }

  /**
   * Path part for operation setDeliveryMethod
   */
  static readonly SetDeliveryMethodPath = '/orders/{order}/seller/set-delivery';

  /**
   * Sets delivery method data by seller.
   *
   * Sets the delivery method data by seller for the order given by id. This operation can be used only if the order is in status `pendingSeller` and has not already set delivery method data. After the delivery method has been set the order will be enter in status `pendingBuyer` to be accepted by buyer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setDeliveryMethod()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setDeliveryMethod$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The parameters for setting the delivery method.
     */
    body?: SetDeliveryMethod
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.SetDeliveryMethodPath, 'post');
    if (params) {

      rb.path('order', params.order, {});

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
   * Sets delivery method data by seller.
   *
   * Sets the delivery method data by seller for the order given by id. This operation can be used only if the order is in status `pendingSeller` and has not already set delivery method data. After the delivery method has been set the order will be enter in status `pendingBuyer` to be accepted by buyer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setDeliveryMethod$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setDeliveryMethod(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The parameters for setting the delivery method.
     */
    body?: SetDeliveryMethod
  }): Observable<void> {

    return this.setDeliveryMethod$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getOrderDataForAcceptByBuyer
   */
  static readonly GetOrderDataForAcceptByBuyerPath = '/orders/{order}/buyer/data-for-accept';

  /**
   * Returns configuration data for accept an order by buyer.
   *
   * Returns configuration data for accept an order given by id as the buyer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderDataForAcceptByBuyer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForAcceptByBuyer$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<StrictHttpResponse<OrderDataForAcceptByBuyer>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.GetOrderDataForAcceptByBuyerPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('order', params.order, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDataForAcceptByBuyer>;
      })
    );
  }

  /**
   * Returns configuration data for accept an order by buyer.
   *
   * Returns configuration data for accept an order given by id as the buyer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderDataForAcceptByBuyer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderDataForAcceptByBuyer(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

  }): Observable<OrderDataForAcceptByBuyer> {

    return this.getOrderDataForAcceptByBuyer$Response(params).pipe(
      map((r: StrictHttpResponse<OrderDataForAcceptByBuyer>) => r.body as OrderDataForAcceptByBuyer)
    );
  }

  /**
   * Path part for operation acceptOrderByBuyer
   */
  static readonly AcceptOrderByBuyerPath = '/orders/{order}/buyer/accept';

  /**
   * Accepts a pending order by buyer.
   *
   * Accepts a pending order by buyer generating the corresponding payment. The order status must be `pendingBuyer` to be accepted by the authenticated user (i.e the buyer).
   * The `paymentType` and the `confirmationPassword` are required under the following circumstances:
   * `paymentType`: Only required if the order was generated as a sale by the  seller and not from the shopping cart check-out (Sales are not supported yet).
   * `confirmationPassword`: Only required if at check-out a delivery method was not set or its charge type is `negotiatied`.
   * The possible statuses after an order acceptance are: - `paymentPending`: if the generated payment is awaiting authorization; - `completed`: if the payment was done.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `acceptOrderByBuyer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  acceptOrderByBuyer$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The parameters for accepting the order.
     */
    body?: AcceptOrderByBuyer
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.AcceptOrderByBuyerPath, 'post');
    if (params) {

      rb.path('order', params.order, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

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
   * Accepts a pending order by buyer.
   *
   * Accepts a pending order by buyer generating the corresponding payment. The order status must be `pendingBuyer` to be accepted by the authenticated user (i.e the buyer).
   * The `paymentType` and the `confirmationPassword` are required under the following circumstances:
   * `paymentType`: Only required if the order was generated as a sale by the  seller and not from the shopping cart check-out (Sales are not supported yet).
   * `confirmationPassword`: Only required if at check-out a delivery method was not set or its charge type is `negotiatied`.
   * The possible statuses after an order acceptance are: - `paymentPending`: if the generated payment is awaiting authorization; - `completed`: if the payment was done.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `acceptOrderByBuyer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  acceptOrderByBuyer(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The parameters for accepting the order.
     */
    body?: AcceptOrderByBuyer
  }): Observable<void> {

    return this.acceptOrderByBuyer$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation acceptOrderBySeller
   */
  static readonly AcceptOrderBySellerPath = '/orders/{order}/seller/accept';

  /**
   * Accepts a pending order by seller.
   *
   * Accepts a pending order by seller generating the corresponding payment. The order status must be `pendingSeller` to be accepted by the authenticated user (i.e seller). The possible statuses after order acceptance are:
   * - `paymentPending`: if the generated payment is awaiting for authorization; - `completed`: if the payment was done.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `acceptOrderBySeller()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  acceptOrderBySeller$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The parameters for accepting the order.
     */
    body?: AcceptOrderBySeller
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.AcceptOrderBySellerPath, 'post');
    if (params) {

      rb.path('order', params.order, {});

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
   * Accepts a pending order by seller.
   *
   * Accepts a pending order by seller generating the corresponding payment. The order status must be `pendingSeller` to be accepted by the authenticated user (i.e seller). The possible statuses after order acceptance are:
   * - `paymentPending`: if the generated payment is awaiting for authorization; - `completed`: if the payment was done.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `acceptOrderBySeller$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  acceptOrderBySeller(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The parameters for accepting the order.
     */
    body?: AcceptOrderBySeller
  }): Observable<void> {

    return this.acceptOrderBySeller$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation rejectOrder
   */
  static readonly RejectOrderPath = '/orders/{order}/reject';

  /**
   * Rejects a pending order.
   *
   * Rejects a pending order by buyer or seller. The order status must be `pendingBuyer` or `pendingSeller` to be rejected by the authenticated user (buyer/seller). The possible statuses after an order rejection are:
   * - `rejectedBySeller`: if the authenticated user is the seller; - `rejectedByBuyer`: if the authenticated user is the buyer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rejectOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rejectOrder$Response(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The parameters for rejecting the order.
     */
    body?: RejectOrder
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.RejectOrderPath, 'post');
    if (params) {

      rb.path('order', params.order, {});

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
   * Rejects a pending order.
   *
   * Rejects a pending order by buyer or seller. The order status must be `pendingBuyer` or `pendingSeller` to be rejected by the authenticated user (buyer/seller). The possible statuses after an order rejection are:
   * - `rejectedBySeller`: if the authenticated user is the seller; - `rejectedByBuyer`: if the authenticated user is the buyer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rejectOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rejectOrder(params: {

    /**
     * Either the order id or number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    order: string;
  
    /**
     * The parameters for rejecting the order.
     */
    body?: RejectOrder
  }): Observable<void> {

    return this.rejectOrder$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
