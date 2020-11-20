/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ChangePassword } from '../models/change-password';
import { DataForUserPasswords } from '../models/data-for-user-passwords';
import { PasswordStatusAndActions } from '../models/password-status-and-actions';
import { PasswordStatusAndType } from '../models/password-status-and-type';
import { SendMediumEnum } from '../models/send-medium-enum';
import { SetSecurityAnswer } from '../models/set-security-answer';


/**
 * Management of a user's passwords.
 */
@Injectable({
  providedIn: 'root',
})
export class PasswordsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserPasswordsData
   */
  static readonly GetUserPasswordsDataPath = '/{user}/passwords/{type}';

  /**
   * Returns complete data of the given password the given user have.
   *
   * Returns the password status and the permissions on which operations are enabled for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserPasswordsData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPasswordsData$Response(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<PasswordStatusAndActions>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.GetUserPasswordsDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordStatusAndActions>;
      })
    );
  }

  /**
   * Returns complete data of the given password the given user have.
   *
   * Returns the password status and the permissions on which operations are enabled for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserPasswordsData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPasswordsData(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<PasswordStatusAndActions> {

    return this.getUserPasswordsData$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordStatusAndActions>) => r.body as PasswordStatusAndActions)
    );
  }

  /**
   * Path part for operation getUserPasswordsListData
   */
  static readonly GetUserPasswordsListDataPath = '/{user}/passwords/list-data';

  /**
   * Returns complete data for each passwords the given user have.
   *
   * Returns the passwords, with their statuses, for a given user. Also, permissions on which operations are enabled are also returned. It is also returned additional data - the confirmation password input, in case some action is needed; and the security question data, in case the security answer is pending.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserPasswordsListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPasswordsListData$Response(params: {

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

  }): Observable<StrictHttpResponse<DataForUserPasswords>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.GetUserPasswordsListDataPath, 'get');
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
        return r as StrictHttpResponse<DataForUserPasswords>;
      })
    );
  }

  /**
   * Returns complete data for each passwords the given user have.
   *
   * Returns the passwords, with their statuses, for a given user. Also, permissions on which operations are enabled are also returned. It is also returned additional data - the confirmation password input, in case some action is needed; and the security question data, in case the security answer is pending.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserPasswordsListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserPasswordsListData(params: {

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

  }): Observable<DataForUserPasswords> {

    return this.getUserPasswordsListData$Response(params).pipe(
      map((r: StrictHttpResponse<DataForUserPasswords>) => r.body as DataForUserPasswords)
    );
  }

  /**
   * Path part for operation listUserPasswords
   */
  static readonly ListUserPasswordsPath = '/{user}/passwords';

  /**
   * Returns the status for each passwords the given user have.
   *
   * Returns the passwords, with their statuses, for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listUserPasswords()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserPasswords$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<PasswordStatusAndType>>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.ListUserPasswordsPath, 'get');
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
        return r as StrictHttpResponse<Array<PasswordStatusAndType>>;
      })
    );
  }

  /**
   * Returns the status for each passwords the given user have.
   *
   * Returns the passwords, with their statuses, for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listUserPasswords$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserPasswords(params: {

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

  }): Observable<Array<PasswordStatusAndType>> {

    return this.listUserPasswords$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PasswordStatusAndType>>) => r.body as Array<PasswordStatusAndType>)
    );
  }

  /**
   * Path part for operation changePassword
   */
  static readonly ChangePasswordPath = '/{user}/passwords/{type}/change';

  /**
   * Changes a manual password.
   *
   * Changes a manual password of the given user. When the user is changing his own password he needs to pass in the `oldPassword` as well. When an adminitrator / broker is changing the password of a managed user, he/she can optionally force the password change on next login.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;
  
    /**
     * The parameters for password change
     */
    body: ChangePassword
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.ChangePasswordPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

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
   * Changes a manual password.
   *
   * Changes a manual password of the given user. When the user is changing his own password he needs to pass in the `oldPassword` as well. When an adminitrator / broker is changing the password of a managed user, he/she can optionally force the password change on next login.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;
  
    /**
     * The parameters for password change
     */
    body: ChangePassword
  }): Observable<void> {

    return this.changePassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation changeGenerated
   */
  static readonly ChangeGeneratedPath = '/passwords/{type}/change-generated';

  /**
   * Generates a new value for an active generated password.
   *
   * Generates a new password whose type's `mode` is  `generated`.
   *  Only the password owner can perform this operation and the password
   *  status must be `active`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeGenerated()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeGenerated$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.ChangeGeneratedPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('type', params.type, {});

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
   * Generates a new value for an active generated password.
   *
   * Generates a new password whose type's `mode` is  `generated`.
   *  Only the password owner can perform this operation and the password
   *  status must be `active`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changeGenerated$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeGenerated(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<string> {

    return this.changeGenerated$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation generatePassword
   */
  static readonly GeneratePasswordPath = '/passwords/{type}/generate';

  /**
   * Generates the value of a generated password for the first time or if expired.
   *
   * Generates the value of a password whose type's `mode` is `generated`. Only the password owner can perform this operation, and only in one of these conditions:
   *
   * - If the password `status` is `neverCreated` it
   *   can only be generated if the password doesn't require the administrator
   *   authorization to generate. This can be configured in the password type.
   *
   * - The password can be generated if its `status` is one of the
   *   following: `pending`,
   *   `expired` or `reset`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generatePassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePassword$Response(params: {

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.GeneratePasswordPath, 'post');
    if (params) {

      rb.path('type', params.type, {});

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
   * Generates the value of a generated password for the first time or if expired.
   *
   * Generates the value of a password whose type's `mode` is `generated`. Only the password owner can perform this operation, and only in one of these conditions:
   *
   * - If the password `status` is `neverCreated` it
   *   can only be generated if the password doesn't require the administrator
   *   authorization to generate. This can be configured in the password type.
   *
   * - The password can be generated if its `status` is one of the
   *   following: `pending`,
   *   `expired` or `reset`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generatePassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePassword(params: {

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<string> {

    return this.generatePassword$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation allowGeneration
   */
  static readonly AllowGenerationPath = '/{user}/passwords/{type}/allow-generation';

  /**
   * Allows the given user to generate the password for the first time for the given type.
   *
   * Only valid if type's mode is `generated`, it's  marked as requiring administrator authorization and the password status is `neverCreated`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `allowGeneration()` instead.
   *
   * This method doesn't expect any request body.
   */
  allowGeneration$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.AllowGenerationPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

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
   * Allows the given user to generate the password for the first time for the given type.
   *
   * Only valid if type's mode is `generated`, it's  marked as requiring administrator authorization and the password status is `neverCreated`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `allowGeneration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  allowGeneration(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<void> {

    return this.allowGeneration$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation resetGeneratedPassword
   */
  static readonly ResetGeneratedPasswordPath = '/{user}/passwords/{type}/reset-generated';

  /**
   * Resets a generated password, allowing it to be generated again.
   *
   * Resets a generated password. This can only be done by administrators / brokers over managed users, and allow them to generate the password value again.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetGeneratedPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetGeneratedPassword$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.ResetGeneratedPasswordPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

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
   * Resets a generated password, allowing it to be generated again.
   *
   * Resets a generated password. This can only be done by administrators / brokers over managed users, and allow them to generate the password value again.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resetGeneratedPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetGeneratedPassword(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<void> {

    return this.resetGeneratedPassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation resetAndSendPassword
   */
  static readonly ResetAndSendPasswordPath = '/{user}/passwords/{type}/reset-and-send';

  /**
   * Generates a new value for a manual password and send it to the user via e-mail.
   *
   * Resets a manual password to a generated value and send it to the user.
   *   Can also be used to reset and send the main channel's access password if
   *   it is generated. The new password is initially expired, so the user
   * needs
   *   to change it on first login.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetAndSendPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetAndSendPassword$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

    /**
     * The send mediums for which the password will be send. If nothing is specified will send though all available mediums.
     */
    sendMediums?: Array<SendMediumEnum>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.ResetAndSendPasswordPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});
      rb.query('sendMediums', params.sendMediums, {});

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
   * Generates a new value for a manual password and send it to the user via e-mail.
   *
   * Resets a manual password to a generated value and send it to the user.
   *   Can also be used to reset and send the main channel's access password if
   *   it is generated. The new password is initially expired, so the user
   * needs
   *   to change it on first login.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resetAndSendPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetAndSendPassword(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Either the id or internal name of the password type
     */
    type: string;

    /**
     * The send mediums for which the password will be send. If nothing is specified will send though all available mediums.
     */
    sendMediums?: Array<SendMediumEnum>;

  }): Observable<void> {

    return this.resetAndSendPassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation disablePassword
   */
  static readonly DisablePasswordPath = '/{user}/passwords/{type}/disable';

  /**
   * Disables a password, making it unusable until manually re-enabled.
   *
   * Disables a password. It cannot be used again until enabled again.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disablePassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  disablePassword$Response(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.DisablePasswordPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

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
   * Disables a password, making it unusable until manually re-enabled.
   *
   * Disables a password. It cannot be used again until enabled again.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `disablePassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disablePassword(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<void> {

    return this.disablePassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation enablePassword
   */
  static readonly EnablePasswordPath = '/{user}/passwords/{type}/enable';

  /**
   * Re-enables a disabled a password.
   *
   * Re-enables a password that was previously disabled.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `enablePassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  enablePassword$Response(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.EnablePasswordPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

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
   * Re-enables a disabled a password.
   *
   * Re-enables a password that was previously disabled.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `enablePassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  enablePassword(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<void> {

    return this.enablePassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation unblockPassword
   */
  static readonly UnblockPasswordPath = '/{user}/passwords/{type}/unblock';

  /**
   * Unblocks a password that has been blocked by exceeding the wrong tries.
   *
   * The password is unblocked if its status is either  `temporarilyBlocked` or `indefinitelyBlocked`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unblockPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  unblockPassword$Response(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.UnblockPasswordPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

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
   * Unblocks a password that has been blocked by exceeding the wrong tries.
   *
   * The password is unblocked if its status is either  `temporarilyBlocked` or `indefinitelyBlocked`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `unblockPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unblockPassword(params: {

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
     * Either the id or internal name of the password type
     */
    type: string;

  }): Observable<void> {

    return this.unblockPassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation setSecurityAnswer
   */
  static readonly SetSecurityAnswerPath = '/security-answer';

  /**
   * Sets the security answer if the current authenticated user.
   *
   * The security question can be enabled in the configuration, and is used on the forgot password process. This method only works if the security answer is pending and enabled. If the user wants to change the security answer, first an admin must remove the current answer via `DELETE /{user}/security-answer`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setSecurityAnswer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setSecurityAnswer$Response(params: {
      body: SetSecurityAnswer
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.SetSecurityAnswerPath, 'post');
    if (params) {


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
   * Sets the security answer if the current authenticated user.
   *
   * The security question can be enabled in the configuration, and is used on the forgot password process. This method only works if the security answer is pending and enabled. If the user wants to change the security answer, first an admin must remove the current answer via `DELETE /{user}/security-answer`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setSecurityAnswer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setSecurityAnswer(params: {
      body: SetSecurityAnswer
  }): Observable<void> {

    return this.setSecurityAnswer$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation resetUserSecurityAnswer
   */
  static readonly ResetUserSecurityAnswerPath = '/{user}/security-answer';

  /**
   * Resets a user security answer, allowing they to change it.
   *
   * This operation must be performed as a manager of the user. It resets the current security answer, allowing the user to set a new one.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetUserSecurityAnswer()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetUserSecurityAnswer$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordsService.ResetUserSecurityAnswerPath, 'delete');
    if (params) {

      rb.path('user', params.user, {});

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
   * Resets a user security answer, allowing they to change it.
   *
   * This operation must be performed as a manager of the user. It resets the current security answer, allowing the user to set a new one.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resetUserSecurityAnswer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetUserSecurityAnswer(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<void> {

    return this.resetUserSecurityAnswer$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
