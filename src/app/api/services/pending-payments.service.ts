/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PendingPaymentActionParams } from '../models/pending-payment-action-params';
import { TransactionAuthorizationLevelData } from '../models/transaction-authorization-level-data';


/**
 * Provides actions for payments that are still pending authorization.
 */
@Injectable({
  providedIn: 'root',
})
export class PendingPaymentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authorizePendingPayment
   */
  static readonly AuthorizePendingPaymentPath = '/pending-payments/{key}/authorize';

  /**
   * Authorizes a pending payment.
   *
   * Authorizes a payment / scheduled payment / recurring payment whose authorization status is `pending`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorizePendingPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authorizePendingPayment$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;
  
    /**
     * Contains the action comments
     */
    body: PendingPaymentActionParams
  }): Observable<StrictHttpResponse<TransactionAuthorizationLevelData>> {

    const rb = new RequestBuilder(this.rootUrl, PendingPaymentsService.AuthorizePendingPaymentPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('key', params.key, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransactionAuthorizationLevelData>;
      })
    );
  }

  /**
   * Authorizes a pending payment.
   *
   * Authorizes a payment / scheduled payment / recurring payment whose authorization status is `pending`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorizePendingPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authorizePendingPayment(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;
  
    /**
     * Contains the action comments
     */
    body: PendingPaymentActionParams
  }): Observable<TransactionAuthorizationLevelData> {

    return this.authorizePendingPayment$Response(params).pipe(
      map((r: StrictHttpResponse<TransactionAuthorizationLevelData>) => r.body as TransactionAuthorizationLevelData)
    );
  }

  /**
   * Path part for operation denyPendingPayment
   */
  static readonly DenyPendingPaymentPath = '/pending-payments/{key}/deny';

  /**
   * Denies a pending payment.
   *
   * Denies a payment / scheduled payment / recurring payment whose authorization status is `pending`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `denyPendingPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  denyPendingPayment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;
  
    /**
     * Contains the action comments
     */
    body: PendingPaymentActionParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PendingPaymentsService.DenyPendingPaymentPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('key', params.key, {});

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
   * Denies a pending payment.
   *
   * Denies a payment / scheduled payment / recurring payment whose authorization status is `pending`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `denyPendingPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  denyPendingPayment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;
  
    /**
     * Contains the action comments
     */
    body: PendingPaymentActionParams
  }): Observable<void> {

    return this.denyPendingPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cancelPendingPayment
   */
  static readonly CancelPendingPaymentPath = '/pending-payments/{key}/cancel';

  /**
   * Cancels the authorization process of a pending payment.
   *
   * Cancels a payment / scheduled payment / recurring payment whose authorization status is `pending`. This action is performed by the payer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelPendingPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelPendingPayment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;
  
    /**
     * Contains the action comments
     */
    body: PendingPaymentActionParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PendingPaymentsService.CancelPendingPaymentPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('key', params.key, {});

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
   * Cancels the authorization process of a pending payment.
   *
   * Cancels a payment / scheduled payment / recurring payment whose authorization status is `pending`. This action is performed by the payer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelPendingPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelPendingPayment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;
  
    /**
     * Contains the action comments
     */
    body: PendingPaymentActionParams
  }): Observable<void> {

    return this.cancelPendingPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
