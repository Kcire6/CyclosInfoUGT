/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DataForTransaction } from '../models/data-for-transaction';
import { ImageSizeEnum } from '../models/image-size-enum';
import { TicketApprovalResult } from '../models/ticket-approval-result';
import { TicketNew } from '../models/ticket-new';
import { TicketPreview } from '../models/ticket-preview';
import { TicketProcessResult } from '../models/ticket-process-result';
import { TransactionView } from '../models/transaction-view';


/**
 * Provide access to tickets. A ticket represents a payment with a destinatary but possibly without a defined payer. They allow to a user (e.g a shop) generate a ticket for himself and send it to another user to allow pay it.
 */
@Injectable({
  providedIn: 'root',
})
export class TicketsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dataForNewTicket
   */
  static readonly DataForNewTicketPath = '/tickets/data-for-new';

  /**
   * Returns data for create a new ticket for the logged user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataForNewTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForNewTicket$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

    /**
     * Will only be used if no specific payment type is given. An identification for the user which will pay the ticket. Is optional, and in most cases, should be left empty. If specified, the returned payment types will take into account those that can be paid by the given user.
     */
    payer?: string;

  }): Observable<StrictHttpResponse<DataForTransaction>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.DataForNewTicketPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('type', params.type, {});
      rb.query('payer', params.payer, {});

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
   * Returns data for create a new ticket for the logged user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dataForNewTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForNewTicket(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

    /**
     * Will only be used if no specific payment type is given. An identification for the user which will pay the ticket. Is optional, and in most cases, should be left empty. If specified, the returned payment types will take into account those that can be paid by the given user.
     */
    payer?: string;

  }): Observable<DataForTransaction> {

    return this.dataForNewTicket$Response(params).pipe(
      map((r: StrictHttpResponse<DataForTransaction>) => r.body as DataForTransaction)
    );
  }

  /**
   * Path part for operation viewTicket
   */
  static readonly ViewTicketPath = '/tickets/{ticket}';

  /**
   * Returns details about a ticket by ticket number.
   *
   * Returns details about a ticket by ticket number.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewTicket$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<StrictHttpResponse<TransactionView>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.ViewTicketPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ticket', params.ticket, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransactionView>;
      })
    );
  }

  /**
   * Returns details about a ticket by ticket number.
   *
   * Returns details about a ticket by ticket number.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewTicket(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<TransactionView> {

    return this.viewTicket$Response(params).pipe(
      map((r: StrictHttpResponse<TransactionView>) => r.body as TransactionView)
    );
  }

  /**
   * Path part for operation newTicket
   */
  static readonly NewTicketPath = '/tickets';

  /**
   * Creates a new ticket with status `open` for the logged user.
   *
   * The logged user will be the ticket's owner and then the receiver of the payment generated after processing the ticket only if was previously approved by the payer.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newTicket$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * The data to create the new ticket
     */
    body: TicketNew
  }): Observable<StrictHttpResponse<TransactionView>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.NewTicketPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransactionView>;
      })
    );
  }

  /**
   * Creates a new ticket with status `open` for the logged user.
   *
   * The logged user will be the ticket's owner and then the receiver of the payment generated after processing the ticket only if was previously approved by the payer.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newTicket(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * The data to create the new ticket
     */
    body: TicketNew
  }): Observable<TransactionView> {

    return this.newTicket$Response(params).pipe(
      map((r: StrictHttpResponse<TransactionView>) => r.body as TransactionView)
    );
  }

  /**
   * Path part for operation getTicketQrCode
   */
  static readonly GetTicketQrCodePath = '/tickets/{ticket}/qr-code';

  /**
   * Returns the QR-code image for the given ticket only if its status is `open`.
   *
   * This request will return the image contents as expected but our api  documentation page (or any other usage of an &lt;img&gt; tag), created  using swagger-ui, generates a second request to include the image in the page. This new (GET) request won't send the authentication parameters and  as this path requires authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTicketQrCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketQrCode$Response(params: {

    /**
     * The ticket number.
     */
    ticket: string;
    size?: ImageSizeEnum;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.GetTicketQrCodePath, 'get');
    if (params) {

      rb.path('ticket', params.ticket, {});
      rb.query('size', params.size, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'image/png'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Returns the QR-code image for the given ticket only if its status is `open`.
   *
   * This request will return the image contents as expected but our api  documentation page (or any other usage of an &lt;img&gt; tag), created  using swagger-ui, generates a second request to include the image in the page. This new (GET) request won't send the authentication parameters and  as this path requires authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTicketQrCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketQrCode(params: {

    /**
     * The ticket number.
     */
    ticket: string;
    size?: ImageSizeEnum;

  }): Observable<Blob> {

    return this.getTicketQrCode$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation previewTicket
   */
  static readonly PreviewTicketPath = '/tickets/{ticket}/preview';

  /**
   * Previews the payment generated by the ticket.
   *
   * Previews the payment that will be generated if the ticket is approved by a user (i.e the payer). The ticket status must be  `open` and `successUrl` null or  `approved`. The actual balance checking is not  performed in the preview.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `previewTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  previewTicket$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<StrictHttpResponse<TicketPreview>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.PreviewTicketPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ticket', params.ticket, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TicketPreview>;
      })
    );
  }

  /**
   * Previews the payment generated by the ticket.
   *
   * Previews the payment that will be generated if the ticket is approved by a user (i.e the payer). The ticket status must be  `open` and `successUrl` null or  `approved`. The actual balance checking is not  performed in the preview.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `previewTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  previewTicket(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<TicketPreview> {

    return this.previewTicket$Response(params).pipe(
      map((r: StrictHttpResponse<TicketPreview>) => r.body as TicketPreview)
    );
  }

  /**
   * Path part for operation cancelTicket
   */
  static readonly CancelTicketPath = '/tickets/{ticket}/cancel';

  /**
   * Cancels a ticket by the receiver.
   *
   * Cancels a ticket by the receiver before being approved by the payer. The  logged user must be the ticket's owner.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelTicket$Response(params: {

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.CancelTicketPath, 'post');
    if (params) {

      rb.path('ticket', params.ticket, {});

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
   * Cancels a ticket by the receiver.
   *
   * Cancels a ticket by the receiver before being approved by the payer. The  logged user must be the ticket's owner.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelTicket(params: {

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<void> {

    return this.cancelTicket$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation approveTicket
   */
  static readonly ApproveTicketPath = '/tickets/{ticket}/approve';

  /**
   * Approves a ticket by the payer.
   *
   * After a successful approval, a new direct payment from the logged user (i.e the payer) to the user who created the ticket will be generated ONLY if the ticket doesn't have a defined `successUrl` nor `successWebhook`, in that case the ticket goes to `processed` status. Otherwise the ticket just goes to the `approved` status and the corresponding payment will be generated only after the ticket is processed by the receiver.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveTicket$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<StrictHttpResponse<TicketApprovalResult>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.ApproveTicketPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});
      rb.path('ticket', params.ticket, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TicketApprovalResult>;
      })
    );
  }

  /**
   * Approves a ticket by the payer.
   *
   * After a successful approval, a new direct payment from the logged user (i.e the payer) to the user who created the ticket will be generated ONLY if the ticket doesn't have a defined `successUrl` nor `successWebhook`, in that case the ticket goes to `processed` status. Otherwise the ticket just goes to the `approved` status and the corresponding payment will be generated only after the ticket is processed by the receiver.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `approveTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveTicket(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;

    /**
     * The ticket number
     */
    ticket: string;

  }): Observable<TicketApprovalResult> {

    return this.approveTicket$Response(params).pipe(
      map((r: StrictHttpResponse<TicketApprovalResult>) => r.body as TicketApprovalResult)
    );
  }

  /**
   * Path part for operation processTicket
   */
  static readonly ProcessTicketPath = '/tickets/{ticket}/process';

  /**
   * Processes a ticket by the receiver.
   *
   * Processes an already approved ticket generating a new direct payment from the user who approve the ticket to the logged user (i.e the ticket's creator). A ticket can be processed only if its status is `approved` and the `orderId` (if any) matches the one given at ticket creation. After successfully processing it goes to the final status:  `processed`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  processTicket$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The ticket number
     */
    ticket: string;

    /**
     * The order id given at ticket creation. Must be specified only if an &#x60;orderId&#x60; was given when the ticket was created.
     */
    orderId?: string;

  }): Observable<StrictHttpResponse<TicketProcessResult>> {

    const rb = new RequestBuilder(this.rootUrl, TicketsService.ProcessTicketPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ticket', params.ticket, {});
      rb.query('orderId', params.orderId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TicketProcessResult>;
      })
    );
  }

  /**
   * Processes a ticket by the receiver.
   *
   * Processes an already approved ticket generating a new direct payment from the user who approve the ticket to the logged user (i.e the ticket's creator). A ticket can be processed only if its status is `approved` and the `orderId` (if any) matches the one given at ticket creation. After successfully processing it goes to the final status:  `processed`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `processTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processTicket(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The ticket number
     */
    ticket: string;

    /**
     * The order id given at ticket creation. Must be specified only if an &#x60;orderId&#x60; was given when the ticket was created.
     */
    orderId?: string;

  }): Observable<TicketProcessResult> {

    return this.processTicket$Response(params).pipe(
      map((r: StrictHttpResponse<TicketProcessResult>) => r.body as TicketProcessResult)
    );
  }

}
