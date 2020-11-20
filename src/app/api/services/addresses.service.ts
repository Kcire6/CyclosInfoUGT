/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Address } from '../models/address';
import { AddressDataForEdit } from '../models/address-data-for-edit';
import { AddressDataForNew } from '../models/address-data-for-new';
import { AddressEdit } from '../models/address-edit';
import { AddressNew } from '../models/address-new';
import { AddressResult } from '../models/address-result';
import { AddressView } from '../models/address-view';
import { Country } from '../models/country';
import { PasswordInput } from '../models/password-input';
import { UserAddressesListData } from '../models/user-addresses-list-data';


/**
 * Management of user addresses, which is done separatedly from the raw user profile fields.
 */
@Injectable({
  providedIn: 'root',
})
export class AddressesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserAddressesListData
   */
  static readonly GetUserAddressesListDataPath = '/{user}/addresses/list-data';

  /**
   * Returns data for addresses listing of the given user.
   *
   * Returns data containing the (visible) user addresses, plus additional data related to addresses.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserAddressesListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAddressesListData$Response(params: {

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

  }): Observable<StrictHttpResponse<UserAddressesListData>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.GetUserAddressesListDataPath, 'get');
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
        return r as StrictHttpResponse<UserAddressesListData>;
      })
    );
  }

  /**
   * Returns data for addresses listing of the given user.
   *
   * Returns data containing the (visible) user addresses, plus additional data related to addresses.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserAddressesListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAddressesListData(params: {

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

  }): Observable<UserAddressesListData> {

    return this.getUserAddressesListData$Response(params).pipe(
      map((r: StrictHttpResponse<UserAddressesListData>) => r.body as UserAddressesListData)
    );
  }

  /**
   * Path part for operation listAddressesByUser
   */
  static readonly ListAddressesByUserPath = '/{user}/addresses';

  /**
   * Lists all (visible) user addresses.
   *
   * Returns a list with all addresses of the given user that the currently authenticated user can see.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAddressesByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAddressesByUser$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<AddressResult>>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.ListAddressesByUserPath, 'get');
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
        return r as StrictHttpResponse<Array<AddressResult>>;
      })
    );
  }

  /**
   * Lists all (visible) user addresses.
   *
   * Returns a list with all addresses of the given user that the currently authenticated user can see.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listAddressesByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAddressesByUser(params: {

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

  }): Observable<Array<AddressResult>> {

    return this.listAddressesByUser$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AddressResult>>) => r.body as Array<AddressResult>)
    );
  }

  /**
   * Path part for operation createAddress
   */
  static readonly CreateAddressPath = '/{user}/addresses';

  /**
   * Creates a new address for the given user.
   *
   * Creates a new address for the given user. If it is set to be the default one, the previous default (if any) will no longer be the default address for that user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAddress$Response(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The address to be created
     */
    body: AddressNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.CreateAddressPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

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
   * Creates a new address for the given user.
   *
   * Creates a new address for the given user. If it is set to be the default one, the previous default (if any) will no longer be the default address for that user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAddress(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The address to be created
     */
    body: AddressNew
  }): Observable<string> {

    return this.createAddress$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getUserPrimaryAddress
   */
  static readonly GetUserPrimaryAddressPath = '/{user}/addresses/primary';

  /**
   * Returns the primary address of a given user.
   *
   * Returns the primary (default) address of the given user, in case it is visible
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserPrimaryAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPrimaryAddress$Response(params: {

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

  }): Observable<StrictHttpResponse<Address>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.GetUserPrimaryAddressPath, 'get');
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
        return r as StrictHttpResponse<Address>;
      })
    );
  }

  /**
   * Returns the primary address of a given user.
   *
   * Returns the primary (default) address of the given user, in case it is visible
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserPrimaryAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPrimaryAddress(params: {

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

  }): Observable<Address> {

    return this.getUserPrimaryAddress$Response(params).pipe(
      map((r: StrictHttpResponse<Address>) => r.body as Address)
    );
  }

  /**
   * Path part for operation getAddressDataForNew
   */
  static readonly GetAddressDataForNewPath = '/{user}/addresses/data-for-new';

  /**
   * Returns data to create a new address.
   *
   * Returns configuration data for creating an address for the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddressDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressDataForNew$Response(params: {

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

  }): Observable<StrictHttpResponse<AddressDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.GetAddressDataForNewPath, 'get');
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
        return r as StrictHttpResponse<AddressDataForNew>;
      })
    );
  }

  /**
   * Returns data to create a new address.
   *
   * Returns configuration data for creating an address for the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAddressDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressDataForNew(params: {

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

  }): Observable<AddressDataForNew> {

    return this.getAddressDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<AddressDataForNew>) => r.body as AddressDataForNew)
    );
  }

  /**
   * Path part for operation getAddressDataForEdit
   */
  static readonly GetAddressDataForEditPath = '/addresses/{id}/data-for-edit';

  /**
   * Returns data to edit an existing address.
   *
   * Returns configuration data for editing an address, plus the current AddressEdit object that can be altered and sent back
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddressDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressDataForEdit$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<AddressDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.GetAddressDataForEditPath, 'get');
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
        return r as StrictHttpResponse<AddressDataForEdit>;
      })
    );
  }

  /**
   * Returns data to edit an existing address.
   *
   * Returns configuration data for editing an address, plus the current AddressEdit object that can be altered and sent back
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAddressDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressDataForEdit(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<AddressDataForEdit> {

    return this.getAddressDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<AddressDataForEdit>) => r.body as AddressDataForEdit)
    );
  }

  /**
   * Path part for operation viewAddress
   */
  static readonly ViewAddressPath = '/addresses/{id}';

  /**
   * Returns details of a specific address.
   *
   * Returns information about an address, located by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewAddress$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<AddressView>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.ViewAddressPath, 'get');
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
        return r as StrictHttpResponse<AddressView>;
      })
    );
  }

  /**
   * Returns details of a specific address.
   *
   * Returns information about an address, located by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewAddress(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<AddressView> {

    return this.viewAddress$Response(params).pipe(
      map((r: StrictHttpResponse<AddressView>) => r.body as AddressView)
    );
  }

  /**
   * Path part for operation updateAddress
   */
  static readonly UpdateAddressPath = '/addresses/{id}';

  /**
   * Updates an existing address.
   *
   * Updates an existing address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAddress$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The address to be edited
     */
    body: AddressEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.UpdateAddressPath, 'put');
    if (params) {

      rb.path('id', params.id, {});
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
   * Updates an existing address.
   *
   * Updates an existing address
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAddress(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The address to be edited
     */
    body: AddressEdit
  }): Observable<void> {

    return this.updateAddress$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteAddress
   */
  static readonly DeleteAddressPath = '/addresses/{id}';

  /**
   * Removes an address.
   *
   * Removes an address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAddress$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.DeleteAddressPath, 'delete');
    if (params) {

      rb.path('id', params.id, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

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
   * Removes an address.
   *
   * Removes an address
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAddress(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<void> {

    return this.deleteAddress$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPasswordInputForRemoveAddress
   */
  static readonly GetPasswordInputForRemoveAddressPath = '/addresses/{id}/password-for-remove';

  /**
   * Returns a confirmation `PasswordInput` for removing an address, if any.
   *
   * If a confirmation password is required to remove an address, clients should invoke this operation prior to effectively removing the address, which will return the data regarding the confirmation password.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPasswordInputForRemoveAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForRemoveAddress$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<PasswordInput>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.GetPasswordInputForRemoveAddressPath, 'get');
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
        return r as StrictHttpResponse<PasswordInput>;
      })
    );
  }

  /**
   * Returns a confirmation `PasswordInput` for removing an address, if any.
   *
   * If a confirmation password is required to remove an address, clients should invoke this operation prior to effectively removing the address, which will return the data regarding the confirmation password.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPasswordInputForRemoveAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForRemoveAddress(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<PasswordInput> {

    return this.getPasswordInputForRemoveAddress$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordInput>) => r.body as PasswordInput)
    );
  }

  /**
   * Path part for operation listCountries
   */
  static readonly ListCountriesPath = '/addresses/countries';

  /**
   * Lists all known countries with the ISO code and display name.
   *
   * The country code is the 2-letter, `ISO 3166-1 alpha-2` code, and the display name is returned in the authenticated user's language.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listCountries()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCountries$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Country>>> {

    const rb = new RequestBuilder(this.rootUrl, AddressesService.ListCountriesPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Country>>;
      })
    );
  }

  /**
   * Lists all known countries with the ISO code and display name.
   *
   * The country code is the 2-letter, `ISO 3166-1 alpha-2` code, and the display name is returned in the authenticated user's language.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listCountries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCountries(params?: {

  }): Observable<Array<Country>> {

    return this.listCountries$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Country>>) => r.body as Array<Country>)
    );
  }

}
