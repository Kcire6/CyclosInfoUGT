/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ShoppingCartCheckout } from '../models/shopping-cart-checkout';
import { ShoppingCartDataForCheckout } from '../models/shopping-cart-data-for-checkout';
import { ShoppingCartResult } from '../models/shopping-cart-result';
import { ShoppingCartView } from '../models/shopping-cart-view';


/**
 * Provides access to shopping carts. Users can add webshop advertisements to the shopping cart, and then check-out them, performing the payment. For each user, one shopping cart is created per currency and seller. A shopping cart is an early stage or an `Order`. once checked out, use the operations in the `Orders` tag to access it.
 */
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getShoppingCarts
   */
  static readonly GetShoppingCartsPath = '/shopping-carts';

  /**
   * Returns the shopping carts list.
   *
   * Returns the shopping carts for the authenticated user. Each cart contains  all webshop ads offered by the same seller and in the same currency.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShoppingCarts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoppingCarts$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<Array<ShoppingCartResult>>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.GetShoppingCartsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ShoppingCartResult>>;
      })
    );
  }

  /**
   * Returns the shopping carts list.
   *
   * Returns the shopping carts for the authenticated user. Each cart contains  all webshop ads offered by the same seller and in the same currency.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getShoppingCarts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoppingCarts(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<Array<ShoppingCartResult>> {

    return this.getShoppingCarts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ShoppingCartResult>>) => r.body as Array<ShoppingCartResult>)
    );
  }

  /**
   * Path part for operation getShoppingCartDetails
   */
  static readonly GetShoppingCartDetailsPath = '/shopping-carts/{id}';

  /**
   * Returns details of a shopping cart.
   *
   * Returns the details of a shopping cart by id with all webshop ads offered by the same seller and in the same currency.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShoppingCartDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoppingCartDetails$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<ShoppingCartView>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.GetShoppingCartDetailsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShoppingCartView>;
      })
    );
  }

  /**
   * Returns details of a shopping cart.
   *
   * Returns the details of a shopping cart by id with all webshop ads offered by the same seller and in the same currency.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getShoppingCartDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoppingCartDetails(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<ShoppingCartView> {

    return this.getShoppingCartDetails$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartView>) => r.body as ShoppingCartView)
    );
  }

  /**
   * Path part for operation removeShoppingCart
   */
  static readonly RemoveShoppingCartPath = '/shopping-carts/{id}';

  /**
   * Removes a shopping cart.
   *
   * Removes the given shopping cart by id and returns the total number of the webshop ads in the remaining all carts.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeShoppingCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeShoppingCart$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.RemoveShoppingCartPath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Removes a shopping cart.
   *
   * Removes the given shopping cart by id and returns the total number of the webshop ads in the remaining all carts.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `removeShoppingCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeShoppingCart(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<number> {

    return this.removeShoppingCart$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation adjustAndGetShoppingCartDetails
   */
  static readonly AdjustAndGetShoppingCartDetailsPath = '/shopping-carts/{id}/adjust';

  /**
   * Adjusts a shopping cart items, returning its details.
   *
   * Works like `GET /shopping-carts/{id}`, but first adjusts the status of all items. For each item checks both the availability and the quantity, setting to corresponding `availability` or `quantityAdjustment` property if anything was modified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adjustAndGetShoppingCartDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  adjustAndGetShoppingCartDetails$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<ShoppingCartView>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.AdjustAndGetShoppingCartDetailsPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShoppingCartView>;
      })
    );
  }

  /**
   * Adjusts a shopping cart items, returning its details.
   *
   * Works like `GET /shopping-carts/{id}`, but first adjusts the status of all items. For each item checks both the availability and the quantity, setting to corresponding `availability` or `quantityAdjustment` property if anything was modified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adjustAndGetShoppingCartDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adjustAndGetShoppingCartDetails(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<ShoppingCartView> {

    return this.adjustAndGetShoppingCartDetails$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartView>) => r.body as ShoppingCartView)
    );
  }

  /**
   * Path part for operation modifyItemQuantityOnShoppingCart
   */
  static readonly ModifyItemQuantityOnShoppingCartPath = '/shopping-carts/items/{ad}';

  /**
   * Modifies the corresponding cart with the new quantity for the given webshop ad.
   *
   * Modifies the corresponding shopping cart with the new quantity for the  given webshop ad only if it was already added to the cart of the authenticted user and returns the total number of webshop ads in all carts. For those quantity-limited products the given quantity could have been  adjusted to met the restrictions. You can view the adjustment applied to  each item when retrieving the details of a shopping cart. if you want to  remove the adjustment just send a new request to modify the quantity  and specify the current quantity (i.e the already adjusted and returned  in the details of the shopping cart) as the parameter.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifyItemQuantityOnShoppingCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  modifyItemQuantityOnShoppingCart$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The new quantity for the given webshop ad. It could be a decimal  number only if the corresponding webshop ad allows it. If zero then the webshop ad is removed from the cart.
     */
    quantity: number;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.ModifyItemQuantityOnShoppingCartPath, 'put');
    if (params) {

      rb.path('ad', params.ad, {});
      rb.query('quantity', params.quantity, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Modifies the corresponding cart with the new quantity for the given webshop ad.
   *
   * Modifies the corresponding shopping cart with the new quantity for the  given webshop ad only if it was already added to the cart of the authenticted user and returns the total number of webshop ads in all carts. For those quantity-limited products the given quantity could have been  adjusted to met the restrictions. You can view the adjustment applied to  each item when retrieving the details of a shopping cart. if you want to  remove the adjustment just send a new request to modify the quantity  and specify the current quantity (i.e the already adjusted and returned  in the details of the shopping cart) as the parameter.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `modifyItemQuantityOnShoppingCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  modifyItemQuantityOnShoppingCart(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The new quantity for the given webshop ad. It could be a decimal  number only if the corresponding webshop ad allows it. If zero then the webshop ad is removed from the cart.
     */
    quantity: number;

  }): Observable<number> {

    return this.modifyItemQuantityOnShoppingCart$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation addItemToShoppingCart
   */
  static readonly AddItemToShoppingCartPath = '/shopping-carts/items/{ad}';

  /**
   * Adds the given webshop ad to the corresponding shopping cart.
   *
   * Adds the given webshop ad to the corresponding shopping cart according to the seller and currency and returns the total number of webshop ads in all carts. Optionally a quantity can be specified. The different shopping carts are created dynamically according to the seller and currency.
   * E.g if the user adds the following webshop ads (i.e items):
   * - 1 from Seller1 in Dolars;
   * - 2 from Seller1 in Euros;
   * - 1 from Seller2 un Dolars.
   *
   * Then the following three carts will be created for the authenticated user:
   *
   * - 1 cart containing 1 item offered by Seller1 in Dolars;
   * - 1 cart containing 2 items offered by Seller1 in Euros;
   * - 1 cart containing 1 item offered by Seller2 in Dolars.
   *
   * Finally, the total number of wbshop ads returned will be 4. For those quantity-limited products the given quantity could have been adjusted to meet the restrictions. You can view the adjustment applied to each item when retrieving the details of a shopping cart. if you want to remove the adjustment just send a new request to modify the quantity (using `PUT /shopping-carts/items/{ad}`) and specify the current quantity (i.e the already adjusted and returned in the details of the shopping cart) as the parameter.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addItemToShoppingCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  addItemToShoppingCart$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The quantity being added. It could be a decimal number only if the  corresponding webshop ad allows it.
     */
    quantity?: number;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.AddItemToShoppingCartPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});
      rb.query('quantity', params.quantity, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Adds the given webshop ad to the corresponding shopping cart.
   *
   * Adds the given webshop ad to the corresponding shopping cart according to the seller and currency and returns the total number of webshop ads in all carts. Optionally a quantity can be specified. The different shopping carts are created dynamically according to the seller and currency.
   * E.g if the user adds the following webshop ads (i.e items):
   * - 1 from Seller1 in Dolars;
   * - 2 from Seller1 in Euros;
   * - 1 from Seller2 un Dolars.
   *
   * Then the following three carts will be created for the authenticated user:
   *
   * - 1 cart containing 1 item offered by Seller1 in Dolars;
   * - 1 cart containing 2 items offered by Seller1 in Euros;
   * - 1 cart containing 1 item offered by Seller2 in Dolars.
   *
   * Finally, the total number of wbshop ads returned will be 4. For those quantity-limited products the given quantity could have been adjusted to meet the restrictions. You can view the adjustment applied to each item when retrieving the details of a shopping cart. if you want to remove the adjustment just send a new request to modify the quantity (using `PUT /shopping-carts/items/{ad}`) and specify the current quantity (i.e the already adjusted and returned in the details of the shopping cart) as the parameter.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addItemToShoppingCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addItemToShoppingCart(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The quantity being added. It could be a decimal number only if the  corresponding webshop ad allows it.
     */
    quantity?: number;

  }): Observable<number> {

    return this.addItemToShoppingCart$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation removeItemFromShoppingCart
   */
  static readonly RemoveItemFromShoppingCartPath = '/shopping-carts/items/{ad}';

  /**
   * Removes the given webshop ad from the corresponding shopping cart.
   *
   * Removes the given webshop ad from the corresponding shopping cart according to the seller and currency and returns the total number of the remaining webshop ads in all carts.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeItemFromShoppingCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeItemFromShoppingCart$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.RemoveItemFromShoppingCartPath, 'delete');
    if (params) {

      rb.path('ad', params.ad, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Removes the given webshop ad from the corresponding shopping cart.
   *
   * Removes the given webshop ad from the corresponding shopping cart according to the seller and currency and returns the total number of the remaining webshop ads in all carts.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `removeItemFromShoppingCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeItemFromShoppingCart(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<number> {

    return this.removeItemFromShoppingCart$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getShoppingCartDataForCheckout
   */
  static readonly GetShoppingCartDataForCheckoutPath = '/shopping-carts/{id}/data-for-checkout';

  /**
   * Returns configuration data for check-out a shopping cart.
   *
   * Returns configuration data for check-out the given shopping cart by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShoppingCartDataForCheckout()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoppingCartDataForCheckout$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<ShoppingCartDataForCheckout>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.GetShoppingCartDataForCheckoutPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShoppingCartDataForCheckout>;
      })
    );
  }

  /**
   * Returns configuration data for check-out a shopping cart.
   *
   * Returns configuration data for check-out the given shopping cart by id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getShoppingCartDataForCheckout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoppingCartDataForCheckout(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<ShoppingCartDataForCheckout> {

    return this.getShoppingCartDataForCheckout$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartDataForCheckout>) => r.body as ShoppingCartDataForCheckout)
    );
  }

  /**
   * Path part for operation checkoutShoppingCart
   */
  static readonly CheckoutShoppingCartPath = '/shopping-carts/{id}/checkout';

  /**
   * Checks out a shopping cart.
   *
   * Checks out the given shopping cart associated to the authenticated user. After the check-out the purchase order will be awaiting for the seller's  acceptance (i. e with status `pendingSeller`).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkoutShoppingCart()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  checkoutShoppingCart$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The data for check-out.
     */
    body: ShoppingCartCheckout
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartsService.CheckoutShoppingCartPath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Checks out a shopping cart.
   *
   * Checks out the given shopping cart associated to the authenticated user. After the check-out the purchase order will be awaiting for the seller's  acceptance (i. e with status `pendingSeller`).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `checkoutShoppingCart$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  checkoutShoppingCart(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The data for check-out.
     */
    body: ShoppingCartCheckout
  }): Observable<number> {

    return this.checkoutShoppingCart$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
