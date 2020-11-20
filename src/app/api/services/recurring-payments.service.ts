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
 * Provides actions specific to recurring payments and their occurrences. Performing a recurring payment is done via `Payments`, while searching or viewing details, via `Transactions`.
 */
@Injectable({
  providedIn: 'root',
})
export class RecurringPaymentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation cancelRecurringPayment
   */
  static readonly CancelRecurringPaymentPath = '/recurring-payments/{key}/cancel';

  /**
   * Cancels a recurring payment.
   *
   * Permanently cancels a recurring payment. The recurring payment status must be `open`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelRecurringPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelRecurringPayment$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecurringPaymentsService.CancelRecurringPaymentPath, 'post');
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
   * Cancels a recurring payment.
   *
   * Permanently cancels a recurring payment. The recurring payment status must be `open`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelRecurringPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelRecurringPayment(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<void> {

    return this.cancelRecurringPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation processFailedRecurringPaymentOccurrence
   */
  static readonly ProcessFailedRecurringPaymentOccurrencePath = '/recurring-payments/occurrences/{id}/process-failed';

  /**
   * DEPRECATED: Use `POST /installments/{key}/process` instead.
   * Processes a failed recurring payment occurrence.
   *
   * Use `POST /installments/{key}/process` instead.
   *
   *
   * Processes a failed recurring payment occurrence. The occurrence status must be `failed`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processFailedRecurringPaymentOccurrence()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  processFailedRecurringPaymentOccurrence$Response(params: {

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

    const rb = new RequestBuilder(this.rootUrl, RecurringPaymentsService.ProcessFailedRecurringPaymentOccurrencePath, 'post');
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
   * Processes a failed recurring payment occurrence.
   *
   * Use `POST /installments/{key}/process` instead.
   *
   *
   * Processes a failed recurring payment occurrence. The occurrence status must be `failed`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `processFailedRecurringPaymentOccurrence$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  processFailedRecurringPaymentOccurrence(params: {

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

    return this.processFailedRecurringPaymentOccurrence$Response(params).pipe(
      map((r: StrictHttpResponse<Transfer>) => r.body as Transfer)
    );
  }

}
