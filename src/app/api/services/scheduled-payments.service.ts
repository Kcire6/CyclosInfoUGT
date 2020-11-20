/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Transfer } from '../models/transfer';


/**
 * Provides actions specific to scheduled payments and installments. Performing a scheduled payment is done via `Payments`, while searching or viewing details, via `Transactions`.
 */
@Injectable({
  providedIn: 'root',
})
export class ScheduledPaymentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation blockScheduledPayment
   */
  static readonly BlockScheduledPaymentPath = '/scheduled-payments/{key}/block';

  /**
   * Blocks a scheduled payment.
   *
   * Blocks a scheduled payment, preventing its installments from being automatically processed. The scheduled payment status must be `open`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `blockScheduledPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  blockScheduledPayment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduledPaymentsService.BlockScheduledPaymentPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
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
   * Blocks a scheduled payment.
   *
   * Blocks a scheduled payment, preventing its installments from being automatically processed. The scheduled payment status must be `open`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `blockScheduledPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  blockScheduledPayment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<void> {

    return this.blockScheduledPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation unblockScheduledPayment
   */
  static readonly UnblockScheduledPaymentPath = '/scheduled-payments/{key}/unblock';

  /**
   * Unblocks a scheduled payment.
   *
   * Unblocks a previously blocked scheduled payment The scheduled payment status must be `blocked`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unblockScheduledPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  unblockScheduledPayment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduledPaymentsService.UnblockScheduledPaymentPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
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
   * Unblocks a scheduled payment.
   *
   * Unblocks a previously blocked scheduled payment The scheduled payment status must be `blocked`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `unblockScheduledPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unblockScheduledPayment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<void> {

    return this.unblockScheduledPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cancelScheduledPayment
   */
  static readonly CancelScheduledPaymentPath = '/scheduled-payments/{key}/cancel';

  /**
   * Cancels a scheduled payment.
   *
   * Permanently cancels a scheduled payment. The scheduled payment status must be either `open` or `blocked`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelScheduledPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelScheduledPayment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduledPaymentsService.CancelScheduledPaymentPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
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
   * Cancels a scheduled payment.
   *
   * Permanently cancels a scheduled payment. The scheduled payment status must be either `open` or `blocked`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelScheduledPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelScheduledPayment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<void> {

    return this.cancelScheduledPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation settleScheduledPayment
   */
  static readonly SettleScheduledPaymentPath = '/scheduled-payments/{key}/settle-remaining';

  /**
   * Settles all remaining installments in a scheduled payment.
   *
   * Settles all remaining installments, closing the scheduled payment. The scheduled payment status must be either `open` or `blocked`. This action is to be performed by the scheduled payment payee.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settleScheduledPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  settleScheduledPayment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduledPaymentsService.SettleScheduledPaymentPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
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
   * Settles all remaining installments in a scheduled payment.
   *
   * Settles all remaining installments, closing the scheduled payment. The scheduled payment status must be either `open` or `blocked`. This action is to be performed by the scheduled payment payee.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settleScheduledPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settleScheduledPayment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<void> {

    return this.settleScheduledPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation processScheduledPaymentInstallment
   */
  static readonly ProcessScheduledPaymentInstallmentPath = '/scheduled-payments/installments/{id}/process';

  /**
   * DEPRECATED: Use `POST /installments/{key}/process` instead.
   * Processes a single scheduled payment installment.
   *
   * Use `POST /installments/{key}/process` instead.
   *
   *
   * Processes a single installment. The installment status must be either `scheduled`,  `failed` or `blocked`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processScheduledPaymentInstallment()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  processScheduledPaymentInstallment$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<Transfer>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduledPaymentsService.ProcessScheduledPaymentInstallmentPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Transfer>;
      })
    );
  }

  /**
   * DEPRECATED: Use `POST /installments/{key}/process` instead.
   * Processes a single scheduled payment installment.
   *
   * Use `POST /installments/{key}/process` instead.
   *
   *
   * Processes a single installment. The installment status must be either `scheduled`,  `failed` or `blocked`. This action is to be performed by the scheduled payment payer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `processScheduledPaymentInstallment$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  processScheduledPaymentInstallment(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * The object identification
     */
    id: string;

  }): Observable<Transfer> {

    return this.processScheduledPaymentInstallment$Response(params).pipe(
      map((r: StrictHttpResponse<Transfer>) => r.body as Transfer)
    );
  }

  /**
   * Path part for operation settleScheduledPaymentInstallment
   */
  static readonly SettleScheduledPaymentInstallmentPath = '/scheduled-payments/installments/{id}/settle';

  /**
   * DEPRECATED: Use `POST /installments/{key}/process` instead.
   * Settles a single scheduled payment installment.
   *
   * Use `POST /installments/{key}/process` instead.
   *
   *
   * Settles a single installment. The installment status must be either `scheduled`,  `failed` or `blocked`. This action is to be performed by the scheduled payment payee.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settleScheduledPaymentInstallment()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  settleScheduledPaymentInstallment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduledPaymentsService.SettleScheduledPaymentInstallmentPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
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
   * DEPRECATED: Use `POST /installments/{key}/process` instead.
   * Settles a single scheduled payment installment.
   *
   * Use `POST /installments/{key}/process` instead.
   *
   *
   * Settles a single installment. The installment status must be either `scheduled`,  `failed` or `blocked`. This action is to be performed by the scheduled payment payee.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settleScheduledPaymentInstallment$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  settleScheduledPaymentInstallment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.settleScheduledPaymentInstallment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
