/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AcceptOrReschedulePaymentRequest } from '../models/accept-or-reschedule-payment-request';
import { ChangePaymentRequestExpirationDate } from '../models/change-payment-request-expiration-date';
import { DataForTransaction } from '../models/data-for-transaction';
import { PaymentPreview } from '../models/payment-preview';
import { SendPaymentRequest } from '../models/send-payment-request';
import { Transaction } from '../models/transaction';


/**
 * Provide access to payment requests. A payment request is created by the payee with a defined payer. Once the payer (i.e the request's recipient) accepts the request, either a direct or scheduled payment is created (which could, depending on the configuration, be pending authorization).
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentRequestsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dataForSendPaymentRequest
   */
  static readonly DataForSendPaymentRequestPath = '/{owner}/payment-requests/data-for-send';

  /**
   * Returns configuration data for sending a payment request.
   *
   * Returns configuration data for sending a payment request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataForSendPaymentRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForSendPaymentRequest$Response(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The payment request destination, which is either string &#x60;system&#x60; for a payment request to system or a user identification. The payment request destination is the one that performs the payment once it is accepted.
     */
    to?: string;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

  }): Observable<StrictHttpResponse<DataForTransaction>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.DataForSendPaymentRequestPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.query('fields', params.fields, {});
      rb.query('to', params.to, {});
      rb.query('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForTransaction>;
      })
    );
  }

  /**
   * Returns configuration data for sending a payment request.
   *
   * Returns configuration data for sending a payment request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dataForSendPaymentRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForSendPaymentRequest(params: {

    /**
     * Can be one of:
     *
     * - a user identification value, such as id, username, e-mail, phone, etc.
     *   Id is always allowed, others depend on Cyclos configuration. Note that
     *   a valid numeric value is always considered as id. For example, when
     *   using another identification method that can be numeric only, prefix\
     *   the value with a single quote (like in Excel spreadsheets);
     *
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The payment request destination, which is either string &#x60;system&#x60; for a payment request to system or a user identification. The payment request destination is the one that performs the payment once it is accepted.
     */
    to?: string;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

  }): Observable<DataForTransaction> {

    return this.dataForSendPaymentRequest$Response(params).pipe(
      map((r: StrictHttpResponse<DataForTransaction>) => r.body as DataForTransaction)
    );
  }

  /**
   * Path part for operation sendPaymentRequest
   */
  static readonly SendPaymentRequestPath = '/{owner}/payment-requests';

  /**
   * Sends a payment request from the given owner.
   *
   * Sends a payment request from the owner indicated on the path (which will receive the payment once the request is accepted) to the owner specified on the body (which will perform the payment once the request is accepted). The destination user should be informed in the `subject` parameter. If the `subject` is `system`, the payment request is sent to a system account, and has to be accepted by an administrator. The payment request id is returned on the response, and a link to the transaction details is returned on the `Location` header.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendPaymentRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendPaymentRequest$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;
  
    /**
     * The send payment request parameters
     */
    body: SendPaymentRequest
  }): Observable<StrictHttpResponse<Transaction>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.SendPaymentRequestPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Transaction>;
      })
    );
  }

  /**
   * Sends a payment request from the given owner.
   *
   * Sends a payment request from the owner indicated on the path (which will receive the payment once the request is accepted) to the owner specified on the body (which will perform the payment once the request is accepted). The destination user should be informed in the `subject` parameter. If the `subject` is `system`, the payment request is sent to a system account, and has to be accepted by an administrator. The payment request id is returned on the response, and a link to the transaction details is returned on the `Location` header.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sendPaymentRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendPaymentRequest(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;
  
    /**
     * The send payment request parameters
     */
    body: SendPaymentRequest
  }): Observable<Transaction> {

    return this.sendPaymentRequest$Response(params).pipe(
      map((r: StrictHttpResponse<Transaction>) => r.body as Transaction)
    );
  }

  /**
   * Path part for operation acceptPaymentRequest
   */
  static readonly AcceptPaymentRequestPath = '/payment-requests/{key}/accept';

  /**
   * Accepts a payment request.
   *
   * Accepts a payment request in status `open`. After accepting the payment request its resultant status could be  `processed` (and the corresponding  sheduled or direct payment was generated) or  `scheduled`.    This can be done only by managers or the payer (i.e the request's recipient)  with permission to accept.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `acceptPaymentRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  acceptPaymentRequest$Response(params: {

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
     * The parameters to accept a payment request
     */
    body: AcceptOrReschedulePaymentRequest
  }): Observable<StrictHttpResponse<Transaction>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.AcceptPaymentRequestPath, 'post');
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
        return r as StrictHttpResponse<Transaction>;
      })
    );
  }

  /**
   * Accepts a payment request.
   *
   * Accepts a payment request in status `open`. After accepting the payment request its resultant status could be  `processed` (and the corresponding  sheduled or direct payment was generated) or  `scheduled`.    This can be done only by managers or the payer (i.e the request's recipient)  with permission to accept.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `acceptPaymentRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  acceptPaymentRequest(params: {

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
     * The parameters to accept a payment request
     */
    body: AcceptOrReschedulePaymentRequest
  }): Observable<Transaction> {

    return this.acceptPaymentRequest$Response(params).pipe(
      map((r: StrictHttpResponse<Transaction>) => r.body as Transaction)
    );
  }

  /**
   * Path part for operation reschedulePaymentRequest
   */
  static readonly ReschedulePaymentRequestPath = '/payment-requests/{key}/reschedule';

  /**
   * Reschedules a payment request.
   *
   * Reschedules an already accepted and scheduled payment request (i.e with  status `scheduled`). If the new processing date is null then the payment request will be  processed immediately generating the corresponding payment. Otherwise it will be scheduled to be processed at the given date.  This can be done only by managers or the payer (i.e the request's recipient)  with permission to accept.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reschedulePaymentRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reschedulePaymentRequest$Response(params: {

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
     * The parameters to reschedule a payment request.
     */
    body: AcceptOrReschedulePaymentRequest
  }): Observable<StrictHttpResponse<Transaction>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.ReschedulePaymentRequestPath, 'post');
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
        return r as StrictHttpResponse<Transaction>;
      })
    );
  }

  /**
   * Reschedules a payment request.
   *
   * Reschedules an already accepted and scheduled payment request (i.e with  status `scheduled`). If the new processing date is null then the payment request will be  processed immediately generating the corresponding payment. Otherwise it will be scheduled to be processed at the given date.  This can be done only by managers or the payer (i.e the request's recipient)  with permission to accept.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reschedulePaymentRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reschedulePaymentRequest(params: {

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
     * The parameters to reschedule a payment request.
     */
    body: AcceptOrReschedulePaymentRequest
  }): Observable<Transaction> {

    return this.reschedulePaymentRequest$Response(params).pipe(
      map((r: StrictHttpResponse<Transaction>) => r.body as Transaction)
    );
  }

  /**
   * Path part for operation previewPaymentRequest
   */
  static readonly PreviewPaymentRequestPath = '/payment-requests/{key}/preview';

  /**
   * Previews the payment performed when accepting the given payment request.
   *
   * Previews the payment ony if the payment request status is  `open` or  `scheduled`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `previewPaymentRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  previewPaymentRequest$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<StrictHttpResponse<PaymentPreview>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.PreviewPaymentRequestPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentPreview>;
      })
    );
  }

  /**
   * Previews the payment performed when accepting the given payment request.
   *
   * Previews the payment ony if the payment request status is  `open` or  `scheduled`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `previewPaymentRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  previewPaymentRequest(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number.
     */
    key: string;

  }): Observable<PaymentPreview> {

    return this.previewPaymentRequest$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPreview>) => r.body as PaymentPreview)
    );
  }

  /**
   * Path part for operation changePaymentRequestExpirationDate
   */
  static readonly ChangePaymentRequestExpirationDatePath = '/payment-requests/{key}/change-expiration';

  /**
   * Changes the payment request expiration.
   *
   * Change the expiration date of a payment request in status  `open` or `expired`. This can be done only by managers or the payee (i.e the request's sender)  with permission to change the expiration.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePaymentRequestExpirationDate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePaymentRequestExpirationDate$Response(params: {

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
     * The parameters to change the payment request's expiration date
     */
    body: ChangePaymentRequestExpirationDate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.ChangePaymentRequestExpirationDatePath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
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
   * Changes the payment request expiration.
   *
   * Change the expiration date of a payment request in status  `open` or `expired`. This can be done only by managers or the payee (i.e the request's sender)  with permission to change the expiration.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changePaymentRequestExpirationDate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePaymentRequestExpirationDate(params: {

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
     * The parameters to change the payment request's expiration date
     */
    body: ChangePaymentRequestExpirationDate
  }): Observable<void> {

    return this.changePaymentRequestExpirationDate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation rejectPaymentRequest
   */
  static readonly RejectPaymentRequestPath = '/payment-requests/{key}/reject';

  /**
   * Rejects a payment request.
   *
   * Rejects a payment request in status `open`. This can be done only by managers or the payer (i.e the request's recipient) with permission to accept.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rejectPaymentRequest()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  rejectPaymentRequest$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number
     */
    key: string;
  
    /**
     * A comment for the reject action the payer can set.
     */
    body?: string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.RejectPaymentRequestPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('key', params.key, {});

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
   * Rejects a payment request.
   *
   * Rejects a payment request in status `open`. This can be done only by managers or the payer (i.e the request's recipient) with permission to accept.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rejectPaymentRequest$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  rejectPaymentRequest(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number
     */
    key: string;
  
    /**
     * A comment for the reject action the payer can set.
     */
    body?: string
  }): Observable<void> {

    return this.rejectPaymentRequest$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cancelPaymentRequest
   */
  static readonly CancelPaymentRequestPath = '/payment-requests/{key}/cancel';

  /**
   * Cancels a payment request.
   *
   * Cancels a payment request in status `open`. This can be done only by managers or the payee with permission to cancel.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelPaymentRequest()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  cancelPaymentRequest$Response(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number
     */
    key: string;
  
    /**
     * A comment for the cancel action the payee/manager can set.
     */
    body?: string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentRequestsService.CancelPaymentRequestPath, 'post');
    if (params) {

      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('key', params.key, {});

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
   * Cancels a payment request.
   *
   * Cancels a payment request in status `open`. This can be done only by managers or the payee with permission to cancel.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelPaymentRequest$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  cancelPaymentRequest(params: {

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * Either the id or transaction number
     */
    key: string;
  
    /**
     * A comment for the cancel action the payee/manager can set.
     */
    body?: string
  }): Observable<void> {

    return this.cancelPaymentRequest$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
