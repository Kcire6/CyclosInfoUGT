/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AgreementContent } from '../models/agreement-content';
import { AgreementWithContent } from '../models/agreement-with-content';
import { UserAgreementsData } from '../models/user-agreements-data';


/**
 * Provides access to agreements the authenticated user must accept in order to use the system.
 */
@Injectable({
  providedIn: 'root',
})
export class AgreementsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listPendingAgreements
   */
  static readonly ListPendingAgreementsPath = '/agreements/pending';

  /**
   * Returns the agreements the authenticated user needs to accept in order to use the system.
   *
   * Returns a list with all agreements the authenticated user is pending to accept. Until accepting the pending agreements, the usage of the system is limited.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listPendingAgreements()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPendingAgreements$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<Array<AgreementWithContent>>> {

    const rb = new RequestBuilder(this.rootUrl, AgreementsService.ListPendingAgreementsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AgreementWithContent>>;
      })
    );
  }

  /**
   * Returns the agreements the authenticated user needs to accept in order to use the system.
   *
   * Returns a list with all agreements the authenticated user is pending to accept. Until accepting the pending agreements, the usage of the system is limited.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listPendingAgreements$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPendingAgreements(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<Array<AgreementWithContent>> {

    return this.listPendingAgreements$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AgreementWithContent>>) => r.body as Array<AgreementWithContent>)
    );
  }

  /**
   * Path part for operation acceptPendingAgreement
   */
  static readonly AcceptPendingAgreementPath = '/agreements/accept';

  /**
   * Accept one or more agreements.
   *
   * Accept all the given agreements
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `acceptPendingAgreement()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptPendingAgreement$Response(params?: {

    /**
     * The identifiers or internal names of the agreements to be accepted
     */
    agreements?: Array<string>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AgreementsService.AcceptPendingAgreementPath, 'post');
    if (params) {

      rb.query('agreements', params.agreements, {});

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
   * Accept one or more agreements.
   *
   * Accept all the given agreements
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `acceptPendingAgreement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptPendingAgreement(params?: {

    /**
     * The identifiers or internal names of the agreements to be accepted
     */
    agreements?: Array<string>;

  }): Observable<void> {

    return this.acceptPendingAgreement$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation acceptOptionalAgreements
   */
  static readonly AcceptOptionalAgreementsPath = '/agreements/optional';

  /**
   * Saves the optional agreements for the authenticated user.
   *
   * The optional agreements that are passed in are marked as accepted, and those ommitted are marked as no longer accepted (if they were previously accepted).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `acceptOptionalAgreements()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptOptionalAgreements$Response(params?: {

    /**
     * The identifiers or internal names of the optional agreements which will be accepted.
     */
    agreements?: Array<string>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AgreementsService.AcceptOptionalAgreementsPath, 'post');
    if (params) {

      rb.query('agreements', params.agreements, {});

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
   * Saves the optional agreements for the authenticated user.
   *
   * The optional agreements that are passed in are marked as accepted, and those ommitted are marked as no longer accepted (if they were previously accepted).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `acceptOptionalAgreements$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptOptionalAgreements(params?: {

    /**
     * The identifiers or internal names of the optional agreements which will be accepted.
     */
    agreements?: Array<string>;

  }): Observable<void> {

    return this.acceptOptionalAgreements$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAgreementContent
   */
  static readonly GetAgreementContentPath = '/agreements/{key}/content';

  /**
   * Returns the content of an agreement.
   *
   * A specific version may be requested. If not, will return the current content
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAgreementContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAgreementContent$Response(params: {

    /**
     * Either the agreement identifier or internal name
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The specific content version to retrieve. When not specified, returns the current version.
     */
    version?: number;

  }): Observable<StrictHttpResponse<AgreementContent>> {

    const rb = new RequestBuilder(this.rootUrl, AgreementsService.GetAgreementContentPath, 'get');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});
      rb.query('version', params.version, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgreementContent>;
      })
    );
  }

  /**
   * Returns the content of an agreement.
   *
   * A specific version may be requested. If not, will return the current content
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAgreementContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAgreementContent(params: {

    /**
     * Either the agreement identifier or internal name
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The specific content version to retrieve. When not specified, returns the current version.
     */
    version?: number;

  }): Observable<AgreementContent> {

    return this.getAgreementContent$Response(params).pipe(
      map((r: StrictHttpResponse<AgreementContent>) => r.body as AgreementContent)
    );
  }

  /**
   * Path part for operation getUserAgreements
   */
  static readonly GetUserAgreementsPath = '/{user}/agreements';

  /**
   * Returns agreements information for the given user.
   *
   * Can be used by the own user or by managers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserAgreements()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAgreements$Response(params: {

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

  }): Observable<StrictHttpResponse<UserAgreementsData>> {

    const rb = new RequestBuilder(this.rootUrl, AgreementsService.GetUserAgreementsPath, 'get');
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
        return r as StrictHttpResponse<UserAgreementsData>;
      })
    );
  }

  /**
   * Returns agreements information for the given user.
   *
   * Can be used by the own user or by managers.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserAgreements$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAgreements(params: {

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

  }): Observable<UserAgreementsData> {

    return this.getUserAgreements$Response(params).pipe(
      map((r: StrictHttpResponse<UserAgreementsData>) => r.body as UserAgreementsData)
    );
  }

}
