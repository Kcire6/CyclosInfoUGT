/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CodeVerificationStatusEnum } from '../models/code-verification-status-enum';
import { PasswordInput } from '../models/password-input';
import { PhoneDataForEdit } from '../models/phone-data-for-edit';
import { PhoneDataForNew } from '../models/phone-data-for-new';
import { PhoneEdit } from '../models/phone-edit';
import { PhoneKind } from '../models/phone-kind';
import { PhoneNew } from '../models/phone-new';
import { PhoneResult } from '../models/phone-result';
import { PhoneView } from '../models/phone-view';
import { UserPhonesListData } from '../models/user-phones-list-data';


/**
 * Management of user phones, which is done separatedly from the raw user profile fields.
 */
@Injectable({
  providedIn: 'root',
})
export class PhonesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserPhonesListData
   */
  static readonly GetUserPhonesListDataPath = '/{user}/phones/list-data';

  /**
   * Returns data for listing a user's phones.
   *
   * Returns data containing the (visible) user phones, plus additional data related to phones.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserPhonesListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPhonesListData$Response(params: {

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

  }): Observable<StrictHttpResponse<UserPhonesListData>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.GetUserPhonesListDataPath, 'get');
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
        return r as StrictHttpResponse<UserPhonesListData>;
      })
    );
  }

  /**
   * Returns data for listing a user's phones.
   *
   * Returns data containing the (visible) user phones, plus additional data related to phones.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserPhonesListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPhonesListData(params: {

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

  }): Observable<UserPhonesListData> {

    return this.getUserPhonesListData$Response(params).pipe(
      map((r: StrictHttpResponse<UserPhonesListData>) => r.body as UserPhonesListData)
    );
  }

  /**
   * Path part for operation listPhonesByUser
   */
  static readonly ListPhonesByUserPath = '/{user}/phones';

  /**
   * Lists all (visible) user phones.
   *
   * Returns a list with all phones of the given user that the currently authenticated user can see.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listPhonesByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPhonesByUser$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<PhoneResult>>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.ListPhonesByUserPath, 'get');
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
        return r as StrictHttpResponse<Array<PhoneResult>>;
      })
    );
  }

  /**
   * Lists all (visible) user phones.
   *
   * Returns a list with all phones of the given user that the currently authenticated user can see.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listPhonesByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPhonesByUser(params: {

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

  }): Observable<Array<PhoneResult>> {

    return this.listPhonesByUser$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PhoneResult>>) => r.body as Array<PhoneResult>)
    );
  }

  /**
   * Path part for operation createPhone
   */
  static readonly CreatePhonePath = '/{user}/phones';

  /**
   * Creates a new phone for the given user.
   *
   * Creates a new phone for the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPhone()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPhone$Response(params: {

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
     * The phone to be created
     */
    body: PhoneNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.CreatePhonePath, 'post');
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
   * Creates a new phone for the given user.
   *
   * Creates a new phone for the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPhone$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPhone(params: {

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
     * The phone to be created
     */
    body: PhoneNew
  }): Observable<string> {

    return this.createPhone$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getPhoneDataForNew
   */
  static readonly GetPhoneDataForNewPath = '/{user}/phones/data-for-new';

  /**
   * Returns data to create a new phone.
   *
   * Returns configuration data for creating a phone for the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPhoneDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPhoneDataForNew$Response(params: {

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
    type: PhoneKind;

  }): Observable<StrictHttpResponse<PhoneDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.GetPhoneDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PhoneDataForNew>;
      })
    );
  }

  /**
   * Returns data to create a new phone.
   *
   * Returns configuration data for creating a phone for the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPhoneDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPhoneDataForNew(params: {

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
    type: PhoneKind;

  }): Observable<PhoneDataForNew> {

    return this.getPhoneDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<PhoneDataForNew>) => r.body as PhoneDataForNew)
    );
  }

  /**
   * Path part for operation getPhoneDataForEdit
   */
  static readonly GetPhoneDataForEditPath = '/phones/{id}/data-for-edit';

  /**
   * Returns data to edit an existing phone.
   *
   * Returns configuration data for editing a phone, plus the current `PhoneEdit` object that can be altered and sent back
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPhoneDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPhoneDataForEdit$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<PhoneDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.GetPhoneDataForEditPath, 'get');
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
        return r as StrictHttpResponse<PhoneDataForEdit>;
      })
    );
  }

  /**
   * Returns data to edit an existing phone.
   *
   * Returns configuration data for editing a phone, plus the current `PhoneEdit` object that can be altered and sent back
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPhoneDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPhoneDataForEdit(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<PhoneDataForEdit> {

    return this.getPhoneDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<PhoneDataForEdit>) => r.body as PhoneDataForEdit)
    );
  }

  /**
   * Path part for operation viewPhone
   */
  static readonly ViewPhonePath = '/phones/{id}';

  /**
   * Returns details of a specific phone.
   *
   * Returns information about a phone, located by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewPhone()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewPhone$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<PhoneView>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.ViewPhonePath, 'get');
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
        return r as StrictHttpResponse<PhoneView>;
      })
    );
  }

  /**
   * Returns details of a specific phone.
   *
   * Returns information about a phone, located by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewPhone$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewPhone(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<PhoneView> {

    return this.viewPhone$Response(params).pipe(
      map((r: StrictHttpResponse<PhoneView>) => r.body as PhoneView)
    );
  }

  /**
   * Path part for operation updatePhone
   */
  static readonly UpdatePhonePath = '/phones/{id}';

  /**
   * Updates an existing phone.
   *
   * Updates an existing phone
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePhone()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePhone$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The phone to be edited
     */
    body: PhoneEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.UpdatePhonePath, 'put');
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
   * Updates an existing phone.
   *
   * Updates an existing phone
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePhone$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePhone(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The phone to be edited
     */
    body: PhoneEdit
  }): Observable<void> {

    return this.updatePhone$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePhone
   */
  static readonly DeletePhonePath = '/phones/{id}';

  /**
   * Removes a phone.
   *
   * Removes a phone
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePhone()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePhone$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.DeletePhonePath, 'delete');
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
   * Removes a phone.
   *
   * Removes a phone
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePhone$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePhone(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<void> {

    return this.deletePhone$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPasswordInputForRemovePhone
   */
  static readonly GetPasswordInputForRemovePhonePath = '/phones/{id}/password-for-remove';

  /**
   * Returns a confirmation `PasswordInput` for removing a phone, if any.
   *
   * If a confirmation password is required to remove a phone, clients should invoke this operation prior to effectively removing the phone, which will return the data regarding the confirmation password.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPasswordInputForRemovePhone()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForRemovePhone$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<PasswordInput>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.GetPasswordInputForRemovePhonePath, 'get');
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
   * Returns a confirmation `PasswordInput` for removing a phone, if any.
   *
   * If a confirmation password is required to remove a phone, clients should invoke this operation prior to effectively removing the phone, which will return the data regarding the confirmation password.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPasswordInputForRemovePhone$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForRemovePhone(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<PasswordInput> {

    return this.getPasswordInputForRemovePhone$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordInput>) => r.body as PasswordInput)
    );
  }

  /**
   * Path part for operation sendPhoneVerificationCode
   */
  static readonly SendPhoneVerificationCodePath = '/phones/{id}/send-verification-code';

  /**
   * Sends the verification code for a user to verify the mobile phone.
   *
   * Sends an SMS text with a verification code the user can use to verify his mobile phone. Only verified phones can be used for receiving SMS notifications or to operate in the SMS operations channel. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendPhoneVerificationCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendPhoneVerificationCode$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.SendPhoneVerificationCodePath, 'post');
    if (params) {

      rb.path('id', params.id, {});

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
   * Sends the verification code for a user to verify the mobile phone.
   *
   * Sends an SMS text with a verification code the user can use to verify his mobile phone. Only verified phones can be used for receiving SMS notifications or to operate in the SMS operations channel. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sendPhoneVerificationCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendPhoneVerificationCode(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<string> {

    return this.sendPhoneVerificationCode$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation verifyPhone
   */
  static readonly VerifyPhonePath = '/phones/{id}/verify';

  /**
   * Marks a phone as verified if the code matches.
   *
   * Verifies a mobile phone by submitting the code received by SMS. Only verified phones can be enabled for receiving SMS notifications or to operate in the SMS operations channel. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified when saving the phone.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyPhone()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyPhone$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The verification code received by SMS
     */
    code: string;

  }): Observable<StrictHttpResponse<CodeVerificationStatusEnum>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.VerifyPhonePath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('code', params.code, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CodeVerificationStatusEnum>;
      })
    );
  }

  /**
   * Marks a phone as verified if the code matches.
   *
   * Verifies a mobile phone by submitting the code received by SMS. Only verified phones can be enabled for receiving SMS notifications or to operate in the SMS operations channel. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified when saving the phone.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `verifyPhone$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyPhone(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The verification code received by SMS
     */
    code: string;

  }): Observable<CodeVerificationStatusEnum> {

    return this.verifyPhone$Response(params).pipe(
      map((r: StrictHttpResponse<CodeVerificationStatusEnum>) => r.body as CodeVerificationStatusEnum)
    );
  }

  /**
   * Path part for operation enablePhoneForSms
   */
  static readonly EnablePhoneForSmsPath = '/phones/{id}/enable-for-sms';

  /**
   * Marks a phone as enabled to receive SMS notifications and operate in the SMS channel.
   *
   * Marks a phone as enabled to receive SMS notifications and operate in. Only allowed if is a verified mobile phone not already enabled for SMS. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified when saving it.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `enablePhoneForSms()` instead.
   *
   * This method doesn't expect any request body.
   */
  enablePhoneForSms$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.EnablePhoneForSmsPath, 'post');
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
   * Marks a phone as enabled to receive SMS notifications and operate in the SMS channel.
   *
   * Marks a phone as enabled to receive SMS notifications and operate in. Only allowed if is a verified mobile phone not already enabled for SMS. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified when saving it.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `enablePhoneForSms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  enablePhoneForSms(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.enablePhoneForSms$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation disablePhoneForSms
   */
  static readonly DisablePhoneForSmsPath = '/phones/{id}/disable-for-sms';

  /**
   * Marks a phone as disabled to receive SMS notifications and operate in the SMS channel.
   *
   * Marks a phone as disabled to receive SMS notifications and operate in. If the confirmation password is enabled, it must be passed in. Only allowed if is a verified mobile phone not already enabled for SMS. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified when saving it.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disablePhoneForSms()` instead.
   *
   * This method doesn't expect any request body.
   */
  disablePhoneForSms$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.DisablePhoneForSmsPath, 'post');
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
   * Marks a phone as disabled to receive SMS notifications and operate in the SMS channel.
   *
   * Marks a phone as disabled to receive SMS notifications and operate in. If the confirmation password is enabled, it must be passed in. Only allowed if is a verified mobile phone not already enabled for SMS. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified when saving it.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `disablePhoneForSms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disablePhoneForSms(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<void> {

    return this.disablePhoneForSms$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPasswordInputForDisablePhoneForSms
   */
  static readonly GetPasswordInputForDisablePhoneForSmsPath = '/phones/{id}/password-for-disable-sms';

  /**
   * Returns a confirmation `PasswordInput` for disabling SMS of a phone, if any.
   *
   * If a confirmation password is required to disable a phone from sending / receiving SMS, clients should invoke this operation prior to effectively disabling SMS, which will return the data regarding the confirmation password.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPasswordInputForDisablePhoneForSms()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForDisablePhoneForSms$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<PasswordInput>> {

    const rb = new RequestBuilder(this.rootUrl, PhonesService.GetPasswordInputForDisablePhoneForSmsPath, 'get');
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
   * Returns a confirmation `PasswordInput` for disabling SMS of a phone, if any.
   *
   * If a confirmation password is required to disable a phone from sending / receiving SMS, clients should invoke this operation prior to effectively disabling SMS, which will return the data regarding the confirmation password.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPasswordInputForDisablePhoneForSms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPasswordInputForDisablePhoneForSms(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<PasswordInput> {

    return this.getPasswordInputForDisablePhoneForSms$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordInput>) => r.body as PasswordInput)
    );
  }

}
