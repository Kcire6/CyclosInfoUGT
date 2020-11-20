/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ContactInfoDataForEdit } from '../models/contact-info-data-for-edit';
import { ContactInfoDataForNew } from '../models/contact-info-data-for-new';
import { ContactInfoEdit } from '../models/contact-info-edit';
import { ContactInfoNew } from '../models/contact-info-new';
import { ContactInfoResult } from '../models/contact-info-result';
import { ContactInfoView } from '../models/contact-info-view';
import { PasswordInput } from '../models/password-input';
import { UserContactInfosListData } from '../models/user-contact-infos-list-data';


/**
 * Management of user's additional contact information, which can either represent contact information for specific employees (e.g. a salesman) or distinct subsidiary offices of the same company.
 */
@Injectable({
  providedIn: 'root',
})
export class ContactInfosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserContactInfosListData
   */
  static readonly GetUserContactInfosListDataPath = '/{user}/contact-infos/list-data';

  /**
   * Returns data for listing additional contact informations of the given user.
   *
   * Returns data containing the (visible) user additional contact informations, plus additional data related to them.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserContactInfosListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserContactInfosListData$Response(params: {

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

  }): Observable<StrictHttpResponse<UserContactInfosListData>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.GetUserContactInfosListDataPath, 'get');
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
        return r as StrictHttpResponse<UserContactInfosListData>;
      })
    );
  }

  /**
   * Returns data for listing additional contact informations of the given user.
   *
   * Returns data containing the (visible) user additional contact informations, plus additional data related to them.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserContactInfosListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserContactInfosListData(params: {

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

  }): Observable<UserContactInfosListData> {

    return this.getUserContactInfosListData$Response(params).pipe(
      map((r: StrictHttpResponse<UserContactInfosListData>) => r.body as UserContactInfosListData)
    );
  }

  /**
   * Path part for operation listContactInfosByUser
   */
  static readonly ListContactInfosByUserPath = '/{user}/contact-infos';

  /**
   * Lists all (visible) additional contact informations for the user.
   *
   * Returns a list with all additional contact informations of the given user that the currently authenticated user can see.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listContactInfosByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  listContactInfosByUser$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<ContactInfoResult>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.ListContactInfosByUserPath, 'get');
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
        return r as StrictHttpResponse<Array<ContactInfoResult>>;
      })
    );
  }

  /**
   * Lists all (visible) additional contact informations for the user.
   *
   * Returns a list with all additional contact informations of the given user that the currently authenticated user can see.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listContactInfosByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listContactInfosByUser(params: {

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

  }): Observable<Array<ContactInfoResult>> {

    return this.listContactInfosByUser$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContactInfoResult>>) => r.body as Array<ContactInfoResult>)
    );
  }

  /**
   * Path part for operation createContactInfo
   */
  static readonly CreateContactInfoPath = '/{user}/contact-infos';

  /**
   * Creates a new additional contact information for the given user.
   *
   * Creates a new additional contact information for the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createContactInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createContactInfo$Response(params: {

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
     * The additional contact information to be created
     */
    body: ContactInfoNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.CreateContactInfoPath, 'post');
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
   * Creates a new additional contact information for the given user.
   *
   * Creates a new additional contact information for the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createContactInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createContactInfo(params: {

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
     * The additional contact information to be created
     */
    body: ContactInfoNew
  }): Observable<string> {

    return this.createContactInfo$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getContactInfoDataForNew
   */
  static readonly GetContactInfoDataForNewPath = '/{user}/contact-infos/data-for-new';

  /**
   * Returns data to create a new additional contact information.
   *
   * Returns configuration data for creating an additional contact information for the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactInfoDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactInfoDataForNew$Response(params: {

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

  }): Observable<StrictHttpResponse<ContactInfoDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.GetContactInfoDataForNewPath, 'get');
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
        return r as StrictHttpResponse<ContactInfoDataForNew>;
      })
    );
  }

  /**
   * Returns data to create a new additional contact information.
   *
   * Returns configuration data for creating an additional contact information for the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getContactInfoDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactInfoDataForNew(params: {

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

  }): Observable<ContactInfoDataForNew> {

    return this.getContactInfoDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<ContactInfoDataForNew>) => r.body as ContactInfoDataForNew)
    );
  }

  /**
   * Path part for operation getContactInfoDataForEdit
   */
  static readonly GetContactInfoDataForEditPath = '/contact-infos/{id}/data-for-edit';

  /**
   * Returns data to edit an existing additional contact information.
   *
   * Returns configuration data for editing an additional contact information, plus the current ContactInfoEdit object that can be altered and posted back.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactInfoDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactInfoDataForEdit$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<ContactInfoDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.GetContactInfoDataForEditPath, 'get');
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
        return r as StrictHttpResponse<ContactInfoDataForEdit>;
      })
    );
  }

  /**
   * Returns data to edit an existing additional contact information.
   *
   * Returns configuration data for editing an additional contact information, plus the current ContactInfoEdit object that can be altered and posted back.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getContactInfoDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactInfoDataForEdit(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<ContactInfoDataForEdit> {

    return this.getContactInfoDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<ContactInfoDataForEdit>) => r.body as ContactInfoDataForEdit)
    );
  }

  /**
   * Path part for operation viewContactInfo
   */
  static readonly ViewContactInfoPath = '/contact-infos/{id}';

  /**
   * Returns details of a specific additional contact information.
   *
   * Returns information about an additional contact information by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewContactInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewContactInfo$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<ContactInfoView>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.ViewContactInfoPath, 'get');
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
        return r as StrictHttpResponse<ContactInfoView>;
      })
    );
  }

  /**
   * Returns details of a specific additional contact information.
   *
   * Returns information about an additional contact information by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewContactInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewContactInfo(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<ContactInfoView> {

    return this.viewContactInfo$Response(params).pipe(
      map((r: StrictHttpResponse<ContactInfoView>) => r.body as ContactInfoView)
    );
  }

  /**
   * Path part for operation updateContactInfo
   */
  static readonly UpdateContactInfoPath = '/contact-infos/{id}';

  /**
   * Updates an existing additional contact information.
   *
   * Updates an existing additional contact information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateContactInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateContactInfo$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The additional contact information to be edited
     */
    body: ContactInfoEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.UpdateContactInfoPath, 'put');
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
   * Updates an existing additional contact information.
   *
   * Updates an existing additional contact information
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateContactInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateContactInfo(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The additional contact information to be edited
     */
    body: ContactInfoEdit
  }): Observable<void> {

    return this.updateContactInfo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteContactInfo
   */
  static readonly DeleteContactInfoPath = '/contact-infos/{id}';

  /**
   * Removes an existing additional contact information.
   *
   * Removes an existing additional contact information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteContactInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContactInfo$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.DeleteContactInfoPath, 'delete');
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
   * Removes an existing additional contact information.
   *
   * Removes an existing additional contact information
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteContactInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContactInfo(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<void> {

    return this.deleteContactInfo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPasswordInputForRemoveContactInfo
   */
  static readonly GetPasswordInputForRemoveContactInfoPath = '/contact-infos/{id}/password-for-remove';

  /**
   * Returns a confirmation `PasswordInput` for removing an additional contact information, if any.
   *
   * If a confirmation password is required to remove an additional contact infomation, clients should invoke this operation prior to effectively removing it, which will return the data regarding the confirmation password.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPasswordInputForRemoveContactInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForRemoveContactInfo$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<PasswordInput>> {

    const rb = new RequestBuilder(this.rootUrl, ContactInfosService.GetPasswordInputForRemoveContactInfoPath, 'get');
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
   * Returns a confirmation `PasswordInput` for removing an additional contact information, if any.
   *
   * If a confirmation password is required to remove an additional contact infomation, clients should invoke this operation prior to effectively removing it, which will return the data regarding the confirmation password.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPasswordInputForRemoveContactInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForRemoveContactInfo(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<PasswordInput> {

    return this.getPasswordInputForRemoveContactInfo$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordInput>) => r.body as PasswordInput)
    );
  }

}
