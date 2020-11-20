/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Auth } from '../models/auth';
import { ChangeForgottenPassword } from '../models/change-forgotten-password';
import { DataForChangeForgottenPassword } from '../models/data-for-change-forgotten-password';
import { DataForLogin } from '../models/data-for-login';
import { ForgottenPasswordRequest } from '../models/forgotten-password-request';
import { ForgottenPasswordResponse } from '../models/forgotten-password-response';
import { LoginAuth } from '../models/login-auth';
import { PasswordInput } from '../models/password-input';
import { SendMediumEnum } from '../models/send-medium-enum';
import { SessionPropertiesEdit } from '../models/session-properties-edit';
import { SessionPropertiesView } from '../models/session-properties-view';


/**
 * Operations regarding the user authentication, such as login / logout, activating / deactivating an access client and obtaining the current authenticated user information.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCurrentAuth
   */
  static readonly GetCurrentAuthPath = '/auth';

  /**
   * Returns data about the currently authenticated user.
   *
   * Returns the logged user information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentAuth()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentAuth$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<Auth>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetCurrentAuthPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Auth>;
      })
    );
  }

  /**
   * Returns data about the currently authenticated user.
   *
   * Returns the logged user information.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCurrentAuth$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentAuth(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<Auth> {

    return this.getCurrentAuth$Response(params).pipe(
      map((r: StrictHttpResponse<Auth>) => r.body as Auth)
    );
  }

  /**
   * Path part for operation getDataForLogin
   */
  static readonly GetDataForLoginPath = '/auth/data-for-login';

  /**
   * Returns data containing the configuration for logging-in.
   *
   * Contains data useful for login, such as the allowed user identification methods, the password type and data for the forgot password request.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForLogin()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForLogin$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Trusted device identification. If given and the device is active then a pending device confirmation will be created that will be validated after the user logs-in. If the validation passes then no confirmation password will be used only for that session.
     */
    deviceId?: string;

    /**
     * Use &#x60;pinPrincipal&#x60; instead.
     *
     *
     * Device PIN identification. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     *
     * @deprecated
     */
    pinId?: string;

    /**
     * Device PIN principal. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     */
    pinPrincipal?: string;

  }): Observable<StrictHttpResponse<DataForLogin>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetDataForLoginPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('deviceId', params.deviceId, {});
      rb.query('pinId', params.pinId, {});
      rb.query('pinPrincipal', params.pinPrincipal, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForLogin>;
      })
    );
  }

  /**
   * Returns data containing the configuration for logging-in.
   *
   * Contains data useful for login, such as the allowed user identification methods, the password type and data for the forgot password request.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForLogin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForLogin(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Trusted device identification. If given and the device is active then a pending device confirmation will be created that will be validated after the user logs-in. If the validation passes then no confirmation password will be used only for that session.
     */
    deviceId?: string;

    /**
     * Use &#x60;pinPrincipal&#x60; instead.
     *
     *
     * Device PIN identification. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     *
     * @deprecated
     */
    pinId?: string;

    /**
     * Device PIN principal. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     */
    pinPrincipal?: string;

  }): Observable<DataForLogin> {

    return this.getDataForLogin$Response(params).pipe(
      map((r: StrictHttpResponse<DataForLogin>) => r.body as DataForLogin)
    );
  }

  /**
   * Path part for operation getSessionProperties
   */
  static readonly GetSessionPropertiesPath = '/auth/session';

  /**
   * Returns properties of the current session.
   *
   * Only when there's an authenticated user via session (`Session-Token` header). Otherwise, nothing is returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSessionProperties()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSessionProperties$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<SessionPropertiesView>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetSessionPropertiesPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SessionPropertiesView>;
      })
    );
  }

  /**
   * Returns properties of the current session.
   *
   * Only when there's an authenticated user via session (`Session-Token` header). Otherwise, nothing is returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSessionProperties$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSessionProperties(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<SessionPropertiesView> {

    return this.getSessionProperties$Response(params).pipe(
      map((r: StrictHttpResponse<SessionPropertiesView>) => r.body as SessionPropertiesView)
    );
  }

  /**
   * Path part for operation setSessionProperties
   */
  static readonly SetSessionPropertiesPath = '/auth/session';

  /**
   * Sets properties of the current session.
   *
   * Currently the only property that can be set is `source`. However, in order to do it, the current session must be trusted.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setSessionProperties()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setSessionProperties$Response(params: {
  
    /**
     * The new properties
     */
    body: SessionPropertiesEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.SetSessionPropertiesPath, 'put');
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
   * Sets properties of the current session.
   *
   * Currently the only property that can be set is `source`. However, in order to do it, the current session must be trusted.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setSessionProperties$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setSessionProperties(params: {
  
    /**
     * The new properties
     */
    body: SessionPropertiesEdit
  }): Observable<void> {

    return this.setSessionProperties$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/auth/session';

  /**
   * Logs-in the currently authenticated user or perform a login through a trusted device.
   *
   * Logs-in the currently authenticated user (if any) or the user owner of the given deviceId only if the device confirmation (returned in /auth/data-for-login) can be approved. If the login was successful then the session token is returned. This token can then be used on subsequent requests. After finishing the session, the user can then logout by sending an HTTP DELETE to /auth.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method doesn't expect any request body.
   */
  login$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * If true then the server adds the &#x60;Session-Token&#x60; cookie to the response containing only the second half of the session token. The returned &#x60;sessionToken&#x60; field will contain the first half.
     */
    cookie?: boolean;

    /**
     * The timeout in seconds for the created session. If this value is not given or it is greater than that for the channel then the timeout for the channel will be used.
     */
    timeoutInSeconds?: number;

    /**
     * The id of the confirmation (returned in the DataForLogin)
     */
    deviceConfirmationId?: string;

    /**
     * The id of the device used to confirm the session as trusted.
     */
    deviceId?: string;

    /**
     * The HMAC-SHA256 calculated for the QR-code of the confirmation using the secret key stored in the device.
     */
    hmac?: string;

    /**
     * When using an [external identity provider](https://wiki4.cyclos.org/index.php/External_identity_providers), this is the request id used to automatically link the user to the provider. Is only needed when no user was matched, that is, no user in Cyclos was linked to the identifier returned by the provider, and no user was found in Cyclos with the same e-mail address as returned by the provider.
     */
    identityProviderRequestId?: string;

    /**
     * When using firebase, this is the token assigned to the device. It will be used to associate it to the user being logged in. This will allow the user receive platform notifications.
     */
    fcmDeviceToken?: string;

  }): Observable<StrictHttpResponse<LoginAuth>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.LoginPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('cookie', params.cookie, {});
      rb.query('timeoutInSeconds', params.timeoutInSeconds, {});
      rb.query('deviceConfirmationId', params.deviceConfirmationId, {});
      rb.query('deviceId', params.deviceId, {});
      rb.query('hmac', params.hmac, {});
      rb.query('identityProviderRequestId', params.identityProviderRequestId, {});
      rb.query('fcmDeviceToken', params.fcmDeviceToken, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginAuth>;
      })
    );
  }

  /**
   * Logs-in the currently authenticated user or perform a login through a trusted device.
   *
   * Logs-in the currently authenticated user (if any) or the user owner of the given deviceId only if the device confirmation (returned in /auth/data-for-login) can be approved. If the login was successful then the session token is returned. This token can then be used on subsequent requests. After finishing the session, the user can then logout by sending an HTTP DELETE to /auth.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  login(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * If true then the server adds the &#x60;Session-Token&#x60; cookie to the response containing only the second half of the session token. The returned &#x60;sessionToken&#x60; field will contain the first half.
     */
    cookie?: boolean;

    /**
     * The timeout in seconds for the created session. If this value is not given or it is greater than that for the channel then the timeout for the channel will be used.
     */
    timeoutInSeconds?: number;

    /**
     * The id of the confirmation (returned in the DataForLogin)
     */
    deviceConfirmationId?: string;

    /**
     * The id of the device used to confirm the session as trusted.
     */
    deviceId?: string;

    /**
     * The HMAC-SHA256 calculated for the QR-code of the confirmation using the secret key stored in the device.
     */
    hmac?: string;

    /**
     * When using an [external identity provider](https://wiki4.cyclos.org/index.php/External_identity_providers), this is the request id used to automatically link the user to the provider. Is only needed when no user was matched, that is, no user in Cyclos was linked to the identifier returned by the provider, and no user was found in Cyclos with the same e-mail address as returned by the provider.
     */
    identityProviderRequestId?: string;

    /**
     * When using firebase, this is the token assigned to the device. It will be used to associate it to the user being logged in. This will allow the user receive platform notifications.
     */
    fcmDeviceToken?: string;

  }): Observable<LoginAuth> {

    return this.login$Response(params).pipe(
      map((r: StrictHttpResponse<LoginAuth>) => r.body as LoginAuth)
    );
  }

  /**
   * Path part for operation logout
   */
  static readonly LogoutPath = '/auth/session';

  /**
   * Log-out the current session.
   *
   * Invalidates the session used for authentication
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout$Response(params?: {

    /**
     * If true then the server adds the &#x60;Session-Token&#x60; cookie to the response containing only the second half of the session token. The returned &#x60;sessionToken&#x60; field will contain the first half.
     */
    cookie?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.LogoutPath, 'delete');
    if (params) {

      rb.query('cookie', params.cookie, {});

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
   * Log-out the current session.
   *
   * Invalidates the session used for authentication
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout(params?: {

    /**
     * If true then the server adds the &#x60;Session-Token&#x60; cookie to the response containing only the second half of the session token. The returned &#x60;sessionToken&#x60; field will contain the first half.
     */
    cookie?: boolean;

  }): Observable<void> {

    return this.logout$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation replaceSession
   */
  static readonly ReplaceSessionPath = '/auth/session/replace/{sessionToken}';

  /**
   * Replaces a session token previously obtained.
   *
   * This operation is intended to be used by custom frontends which log-in users externally. In those cases, the full session token is obtained. This operation replaces that session token, assuming it could be compromised by being sent through other mediums (e-mail, etc) by a new session token. The given session token is validated and removed, and a new session is created. Also accepts the `cookie` parameter with the same meaning as the `login` / `logout` operations.
   *
   * This operation can only be invoked as guest.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceSession()` instead.
   *
   * This method doesn't expect any request body.
   */
  replaceSession$Response(params: {

    /**
     * The full session token obtained externally
     */
    sessionToken: string;

    /**
     * If true then the server adds the &#x60;Session-Token&#x60; cookie to the response containing only the second half of the session token. The returned &#x60;sessionToken&#x60; field will contain the first half.
     */
    cookie?: boolean;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ReplaceSessionPath, 'post');
    if (params) {

      rb.path('sessionToken', params.sessionToken, {});
      rb.query('cookie', params.cookie, {});

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
   * Replaces a session token previously obtained.
   *
   * This operation is intended to be used by custom frontends which log-in users externally. In those cases, the full session token is obtained. This operation replaces that session token, assuming it could be compromised by being sent through other mediums (e-mail, etc) by a new session token. The given session token is validated and removed, and a new session is created. Also accepts the `cookie` parameter with the same meaning as the `login` / `logout` operations.
   *
   * This operation can only be invoked as guest.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceSession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  replaceSession(params: {

    /**
     * The full session token obtained externally
     */
    sessionToken: string;

    /**
     * If true then the server adds the &#x60;Session-Token&#x60; cookie to the response containing only the second half of the session token. The returned &#x60;sessionToken&#x60; field will contain the first half.
     */
    cookie?: boolean;

  }): Observable<string> {

    return this.replaceSession$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getSecondaryPasswordInput
   */
  static readonly GetSecondaryPasswordInputPath = '/auth/session/secondary-password';

  /**
   * Returns the data for a secondary access password input.
   *
   * Returns the data for a secondary access password input. Only if there is a secondary access password configured for the channel.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSecondaryPasswordInput()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSecondaryPasswordInput$Response(params?: {

  }): Observable<StrictHttpResponse<PasswordInput>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetSecondaryPasswordInputPath, 'get');
    if (params) {


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
   * Returns the data for a secondary access password input.
   *
   * Returns the data for a secondary access password input. Only if there is a secondary access password configured for the channel.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSecondaryPasswordInput$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSecondaryPasswordInput(params?: {

  }): Observable<PasswordInput> {

    return this.getSecondaryPasswordInput$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordInput>) => r.body as PasswordInput)
    );
  }

  /**
   * Path part for operation validateSecondaryPassword
   */
  static readonly ValidateSecondaryPasswordPath = '/auth/session/secondary-password';

  /**
   * Validates the current pending session.
   *
   * Validates a pending session using the secondary access password (if any) configured for the current channel.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateSecondaryPassword()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  validateSecondaryPassword$Response(params: {
  
    /**
     * The secondary access password
     */
    body: string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ValidateSecondaryPasswordPath, 'post');
    if (params) {


      rb.body(params.body, 'text/plain');
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
   * Validates the current pending session.
   *
   * Validates a pending session using the secondary access password (if any) configured for the current channel.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateSecondaryPassword$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  validateSecondaryPassword(params: {
  
    /**
     * The secondary access password
     */
    body: string
  }): Observable<void> {

    return this.validateSecondaryPassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation disconnectCurrentClient
   */
  static readonly DisconnectCurrentClientPath = '/auth/access-client';

  /**
   * Disconnect the current access client.
   *
   * Changes the status of the access client used for authentication, disconnecting it. To be reused, it has to be activated again.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disconnectCurrentClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconnectCurrentClient$Response(params?: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.DisconnectCurrentClientPath, 'delete');
    if (params) {

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
   * Disconnect the current access client.
   *
   * Changes the status of the access client used for authentication, disconnecting it. To be reused, it has to be activated again.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `disconnectCurrentClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconnectCurrentClient(params?: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

  }): Observable<void> {

    return this.disconnectCurrentClient$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation newOtp
   */
  static readonly NewOtpPath = '/auth/otp';

  /**
   * Generates a new One-Time-Password (OTP) for the authenticated user.
   *
   * Sends a new OTP for the authenticated user. Used when the confirmation password of a specific action is required and `PasswordInput.mode` is `otp`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newOtp()` instead.
   *
   * This method doesn't expect any request body.
   */
  newOtp$Response(params: {

    /**
     * The channel name in which the OTP will be used to confirm the operation. Please do not confuse with the parameter used to specify the channel through the client is connecting with Cyclos. The configuration for the given channel will be used to validate the request. E.g. when confirming an easy invoice / ticket through a custom front using a channel other than &#x60;easyInvoice&#x60; / &#x60;ticket&#x60; then the channel &#x60;easyInvoice&#x60; / &#x60;ticket&#x60; must be set at the moment of requesting an OTP.
     */
    otpChannel?: string;

    /**
     * The medium the user wants to receive the OTP
     */
    medium: SendMediumEnum;

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.NewOtpPath, 'post');
    if (params) {

      rb.query('otpChannel', params.otpChannel, {});
      rb.query('medium', params.medium, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Generates a new One-Time-Password (OTP) for the authenticated user.
   *
   * Sends a new OTP for the authenticated user. Used when the confirmation password of a specific action is required and `PasswordInput.mode` is `otp`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newOtp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  newOtp(params: {

    /**
     * The channel name in which the OTP will be used to confirm the operation. Please do not confuse with the parameter used to specify the channel through the client is connecting with Cyclos. The configuration for the given channel will be used to validate the request. E.g. when confirming an easy invoice / ticket through a custom front using a channel other than &#x60;easyInvoice&#x60; / &#x60;ticket&#x60; then the channel &#x60;easyInvoice&#x60; / &#x60;ticket&#x60; must be set at the moment of requesting an OTP.
     */
    otpChannel?: string;

    /**
     * The medium the user wants to receive the OTP
     */
    medium: SendMediumEnum;

  }): Observable<Array<string>> {

    return this.newOtp$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation forgottenPasswordRequest
   */
  static readonly ForgottenPasswordRequestPath = '/auth/forgotten-password/request';

  /**
   * Requests a forgotten password, notifying the user with instructions to reset it.
   *
   * Sends a verification code to the user, either by e-mail or SMS, so that they can change the password if it was forgotten. For it to work, the Cyclos configuration must allow the forgotten password operation.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgottenPasswordRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  forgottenPasswordRequest$Response(params: {
  
    /**
     * The parameters for requesting a forgotten password reset
     */
    body: ForgottenPasswordRequest
  }): Observable<StrictHttpResponse<ForgottenPasswordResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ForgottenPasswordRequestPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ForgottenPasswordResponse>;
      })
    );
  }

  /**
   * Requests a forgotten password, notifying the user with instructions to reset it.
   *
   * Sends a verification code to the user, either by e-mail or SMS, so that they can change the password if it was forgotten. For it to work, the Cyclos configuration must allow the forgotten password operation.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `forgottenPasswordRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  forgottenPasswordRequest(params: {
  
    /**
     * The parameters for requesting a forgotten password reset
     */
    body: ForgottenPasswordRequest
  }): Observable<ForgottenPasswordResponse> {

    return this.forgottenPasswordRequest$Response(params).pipe(
      map((r: StrictHttpResponse<ForgottenPasswordResponse>) => r.body as ForgottenPasswordResponse)
    );
  }

  /**
   * Path part for operation getDataForChangeForgottenPassword
   */
  static readonly GetDataForChangeForgottenPasswordPath = '/auth/forgotten-password/data-for-change';

  /**
   * Returns configuration data used to change a forgotten password after the initial request.
   *
   * After the user has requested a forgotten password reset, using the `POST /auth/forgotten-password/request` path, the link on the received e-mail will contain a key which can be used to actually change the password. This key must be passed to this operation in order to request input on the new password, and maybe confirm the security question, depending on the Cyclos configuration.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForChangeForgottenPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForChangeForgottenPassword$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Use both &#x60;user&#x60; and &#x60;code&#x60; instead.
     *
     *
     * The validation key which was sent by e-mail to the user
     *
     * @deprecated
     */
    key?: string;

    /**
     * The user identification for password change
     */
    user?: string;

    /**
     * The verification code which was sent to the user
     */
    code?: string;

  }): Observable<StrictHttpResponse<DataForChangeForgottenPassword>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetDataForChangeForgottenPasswordPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('key', params.key, {});
      rb.query('user', params.user, {});
      rb.query('code', params.code, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForChangeForgottenPassword>;
      })
    );
  }

  /**
   * Returns configuration data used to change a forgotten password after the initial request.
   *
   * After the user has requested a forgotten password reset, using the `POST /auth/forgotten-password/request` path, the link on the received e-mail will contain a key which can be used to actually change the password. This key must be passed to this operation in order to request input on the new password, and maybe confirm the security question, depending on the Cyclos configuration.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForChangeForgottenPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForChangeForgottenPassword(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Use both &#x60;user&#x60; and &#x60;code&#x60; instead.
     *
     *
     * The validation key which was sent by e-mail to the user
     *
     * @deprecated
     */
    key?: string;

    /**
     * The user identification for password change
     */
    user?: string;

    /**
     * The verification code which was sent to the user
     */
    code?: string;

  }): Observable<DataForChangeForgottenPassword> {

    return this.getDataForChangeForgottenPassword$Response(params).pipe(
      map((r: StrictHttpResponse<DataForChangeForgottenPassword>) => r.body as DataForChangeForgottenPassword)
    );
  }

  /**
   * Path part for operation changeForgottenPassword
   */
  static readonly ChangeForgottenPasswordPath = '/auth/forgotten-password';

  /**
   * Changes the a forgotten password after have completed the request.
   *
   * Changes the password (if manual), or sends a new one by e-mail (if generated) after the forgotten password reset process is completed.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeForgottenPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeForgottenPassword$Response(params: {
  
    /**
     * The parameters for changing the password
     */
    body: ChangeForgottenPassword
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ChangeForgottenPasswordPath, 'post');
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
   * Changes the a forgotten password after have completed the request.
   *
   * Changes the password (if manual), or sends a new one by e-mail (if generated) after the forgotten password reset process is completed.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changeForgottenPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeForgottenPassword(params: {
  
    /**
     * The parameters for changing the password
     */
    body: ChangeForgottenPassword
  }): Observable<void> {

    return this.changeForgottenPassword$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
