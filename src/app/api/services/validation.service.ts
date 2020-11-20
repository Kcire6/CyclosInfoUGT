/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserRegistrationResult } from '../models/user-registration-result';


/**
 * Provides access to complete pending actions waiting for validation.
 */
@Injectable({
  providedIn: 'root',
})
export class ValidationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation validateEmailChange
   */
  static readonly ValidateEmailChangePath = '/validate/email-change/{key}';

  /**
   * Validate a pending e-mail change.
   *
   * When e-mail validation on change is enabled on the configuration, when a user changes their e-mail the new e-mail will not be immediately used. In this case, an e-mail is sent to the new e-mail address, with a link to validate it. That link should include the validation key, which should be sent to the Cyclos backend to actually validate the new e-mail. Only after this the new e-mail address will be effectively used in Cyclos.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateEmailChange()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateEmailChange$Response(params: {

    /**
     * The e-mail change validation key the user has received.
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ValidationService.ValidateEmailChangePath, 'post');
    if (params) {

      rb.path('key', params.key, {});

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
   * Validate a pending e-mail change.
   *
   * When e-mail validation on change is enabled on the configuration, when a user changes their e-mail the new e-mail will not be immediately used. In this case, an e-mail is sent to the new e-mail address, with a link to validate it. That link should include the validation key, which should be sent to the Cyclos backend to actually validate the new e-mail. Only after this the new e-mail address will be effectively used in Cyclos.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateEmailChange$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateEmailChange(params: {

    /**
     * The e-mail change validation key the user has received.
     */
    key: string;

  }): Observable<void> {

    return this.validateEmailChange$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation validateUserRegistration
   */
  static readonly ValidateUserRegistrationPath = '/validate/registration/{key}';

  /**
   * Validate a pending user registration.
   *
   * Validate a pending user registration for the given validation key. After validating the registration is completed. However, the group configuration defines if the user is initially active or not.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateUserRegistration()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateUserRegistration$Response(params: {

    /**
     * The registration validation key the user has received.
     */
    key: string;

  }): Observable<StrictHttpResponse<UserRegistrationResult>> {

    const rb = new RequestBuilder(this.rootUrl, ValidationService.ValidateUserRegistrationPath, 'post');
    if (params) {

      rb.path('key', params.key, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserRegistrationResult>;
      })
    );
  }

  /**
   * Validate a pending user registration.
   *
   * Validate a pending user registration for the given validation key. After validating the registration is completed. However, the group configuration defines if the user is initially active or not.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateUserRegistration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateUserRegistration(params: {

    /**
     * The registration validation key the user has received.
     */
    key: string;

  }): Observable<UserRegistrationResult> {

    return this.validateUserRegistration$Response(params).pipe(
      map((r: StrictHttpResponse<UserRegistrationResult>) => r.body as UserRegistrationResult)
    );
  }

  /**
   * Path part for operation manuallyValidateUserRegistration
   */
  static readonly ManuallyValidateUserRegistrationPath = '/{user}/registration/validate';

  /**
   * Manually validates a pending user / operator registration.
   *
   * Marks the user registration as validated. Can only be performed by a manager (admin / broker) of the pending user. The actual resulting user status depends on the group configuration. The user status must be `pending`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `manuallyValidateUserRegistration()` instead.
   *
   * This method doesn't expect any request body.
   */
  manuallyValidateUserRegistration$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<StrictHttpResponse<UserRegistrationResult>> {

    const rb = new RequestBuilder(this.rootUrl, ValidationService.ManuallyValidateUserRegistrationPath, 'post');
    if (params) {

      rb.path('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserRegistrationResult>;
      })
    );
  }

  /**
   * Manually validates a pending user / operator registration.
   *
   * Marks the user registration as validated. Can only be performed by a manager (admin / broker) of the pending user. The actual resulting user status depends on the group configuration. The user status must be `pending`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `manuallyValidateUserRegistration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  manuallyValidateUserRegistration(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<UserRegistrationResult> {

    return this.manuallyValidateUserRegistration$Response(params).pipe(
      map((r: StrictHttpResponse<UserRegistrationResult>) => r.body as UserRegistrationResult)
    );
  }

  /**
   * Path part for operation resendUserRegistrationEmail
   */
  static readonly ResendUserRegistrationEmailPath = '/{user}/registration/resend';

  /**
   * Re-sends the e-mail to validate a pending user / operator registration.
   *
   * Sends the validation e-mail again. This operation has to be executed by the user manager (admin or broker). The user status must be `pending`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resendUserRegistrationEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendUserRegistrationEmail$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ValidationService.ResendUserRegistrationEmailPath, 'post');
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
   * Re-sends the e-mail to validate a pending user / operator registration.
   *
   * Sends the validation e-mail again. This operation has to be executed by the user manager (admin or broker). The user status must be `pending`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resendUserRegistrationEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendUserRegistrationEmail(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<void> {

    return this.resendUserRegistrationEmail$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation manuallyValidateEmailChange
   */
  static readonly ManuallyValidateEmailChangePath = '/{user}/email-change/validate';

  /**
   * Manually validates a pending e-mail change.
   *
   * If the user has a new e-mail address pending validation, this operation, which has to be executed by the user manager (admin or broker) marks the new e-mail address as validating, effectively changing the user's e-mail.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `manuallyValidateEmailChange()` instead.
   *
   * This method doesn't expect any request body.
   */
  manuallyValidateEmailChange$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ValidationService.ManuallyValidateEmailChangePath, 'post');
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
   * Manually validates a pending e-mail change.
   *
   * If the user has a new e-mail address pending validation, this operation, which has to be executed by the user manager (admin or broker) marks the new e-mail address as validating, effectively changing the user's e-mail.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `manuallyValidateEmailChange$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  manuallyValidateEmailChange(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<void> {

    return this.manuallyValidateEmailChange$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation resendEmailChangeEmail
   */
  static readonly ResendEmailChangeEmailPath = '/{user}/email-change/resend';

  /**
   * Re-sends the e-mail to validate a pending e-mail change.
   *
   * Sends again the e-mail to the new user e-mail address. This operation has to be executed by the user manager (admin or broker).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resendEmailChangeEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendEmailChangeEmail$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ValidationService.ResendEmailChangeEmailPath, 'post');
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
   * Re-sends the e-mail to validate a pending e-mail change.
   *
   * Sends again the e-mail to the new user e-mail address. This operation has to be executed by the user manager (admin or broker).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resendEmailChangeEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendEmailChangeEmail(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

  }): Observable<void> {

    return this.resendEmailChangeEmail$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
