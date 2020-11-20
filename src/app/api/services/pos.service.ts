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
import { DeviceConfirmationView } from '../models/device-confirmation-view';
import { ImageSizeEnum } from '../models/image-size-enum';
import { PaymentPreview } from '../models/payment-preview';
import { PerformInstallment } from '../models/perform-installment';
import { PerformPayment } from '../models/perform-payment';
import { SendMediumEnum } from '../models/send-medium-enum';
import { Transaction } from '../models/transaction';


/**
 * Provides access for receiving payments or scheduled payments in Point-Of-Sale (POS) operations.
 */
@Injectable({
  providedIn: 'root',
})
export class PosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dataForReceivePayment
   */
  static readonly DataForReceivePaymentPath = '/pos/data-for-pos';

  /**
   * Returns configuration data for receiving a payment (POS).
   *
   * Returns configuration data for receiving a payment in POS operation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataForReceivePayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForReceivePayment$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Identification of the payer user
     */
    from?: string;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

  }): Observable<StrictHttpResponse<DataForTransaction>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.DataForReceivePaymentPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('from', params.from, {});
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
   * Returns configuration data for receiving a payment (POS).
   *
   * Returns configuration data for receiving a payment in POS operation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dataForReceivePayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForReceivePayment(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Identification of the payer user
     */
    from?: string;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

  }): Observable<DataForTransaction> {

    return this.dataForReceivePayment$Response(params).pipe(
      map((r: StrictHttpResponse<DataForTransaction>) => r.body as DataForTransaction)
    );
  }

  /**
   * Path part for operation receivePayment
   */
  static readonly ReceivePaymentPath = '/pos';

  /**
   * Receives a payment (POS).
   *
   * Receives either a direct or scheduled payment in a POS operation for the authenticated user. The payer user should be informed in the `subject` parameter. The payment id is returned on the response, and a link to the transaction details is returned on the `Location` header.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `receivePayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receivePayment$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<StrictHttpResponse<Transaction>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.ReceivePaymentPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.header('confirmationPassword', params.confirmationPassword, {});

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
   * Receives a payment (POS).
   *
   * Receives either a direct or scheduled payment in a POS operation for the authenticated user. The payer user should be informed in the `subject` parameter. The payment id is returned on the response, and a link to the transaction details is returned on the `Location` header.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `receivePayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receivePayment(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<Transaction> {

    return this.receivePayment$Response(params).pipe(
      map((r: StrictHttpResponse<Transaction>) => r.body as Transaction)
    );
  }

  /**
   * Path part for operation previewReceivePayment
   */
  static readonly PreviewReceivePaymentPath = '/pos/preview';

  /**
   * Previews a POS payment before receiving it.
   *
   * Previews a payment or scheduled payment. The actual balance checking is not performed in the preview.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `previewReceivePayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  previewReceivePayment$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<StrictHttpResponse<PaymentPreview>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.PreviewReceivePaymentPath, 'post');
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
        return r as StrictHttpResponse<PaymentPreview>;
      })
    );
  }

  /**
   * Previews a POS payment before receiving it.
   *
   * Previews a payment or scheduled payment. The actual balance checking is not performed in the preview.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `previewReceivePayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  previewReceivePayment(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<PaymentPreview> {

    return this.previewReceivePayment$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPreview>) => r.body as PaymentPreview)
    );
  }

  /**
   * Path part for operation calculateReceivePaymentInstallments
   */
  static readonly CalculateReceivePaymentInstallmentsPath = '/pos/installments';

  /**
   * Calculates the default installments for a scheduled payment.
   *
   * Used to calculate installments for a scheduled payment. Will return an installment every month. When later receiving the payment, these can be (optionally) customized (such as changing some due dates or amounts) and used on the payment installments.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calculateReceivePaymentInstallments()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculateReceivePaymentInstallments$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The payment origin
     */
    from: string;

    /**
     * The number of installments
     */
    count: number;

    /**
     * The total scheduled payment amount
     */
    amount: string;

    /**
     * The payment currency. Used when no &#x60;type&#x60; is not provided, to narrow the possible payment types by currency.
     */
    currency?: string;

    /**
     * The payment type id or qualified internal name (in the form  &#x60;fromAccountType.paymentType&#x60;). If not provided, will use the first possible type (possibly narrowed by the &#x60;currency&#x60; parameter). However, if more than one type is available, a validation error will be raised.
     */
    type?: string;

    /**
     * The due date of the first installment. If none is provided, it is assumed that the first installment is paid immediately, and others will be with regular 1 month interval
     */
    firstDate?: string;

  }): Observable<StrictHttpResponse<Array<PerformInstallment>>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.CalculateReceivePaymentInstallmentsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('from', params.from, {});
      rb.query('count', params.count, {});
      rb.query('amount', params.amount, {});
      rb.query('currency', params.currency, {});
      rb.query('type', params.type, {});
      rb.query('firstDate', params.firstDate, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PerformInstallment>>;
      })
    );
  }

  /**
   * Calculates the default installments for a scheduled payment.
   *
   * Used to calculate installments for a scheduled payment. Will return an installment every month. When later receiving the payment, these can be (optionally) customized (such as changing some due dates or amounts) and used on the payment installments.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calculateReceivePaymentInstallments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculateReceivePaymentInstallments(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The payment origin
     */
    from: string;

    /**
     * The number of installments
     */
    count: number;

    /**
     * The total scheduled payment amount
     */
    amount: string;

    /**
     * The payment currency. Used when no &#x60;type&#x60; is not provided, to narrow the possible payment types by currency.
     */
    currency?: string;

    /**
     * The payment type id or qualified internal name (in the form  &#x60;fromAccountType.paymentType&#x60;). If not provided, will use the first possible type (possibly narrowed by the &#x60;currency&#x60; parameter). However, if more than one type is available, a validation error will be raised.
     */
    type?: string;

    /**
     * The due date of the first installment. If none is provided, it is assumed that the first installment is paid immediately, and others will be with regular 1 month interval
     */
    firstDate?: string;

  }): Observable<Array<PerformInstallment>> {

    return this.calculateReceivePaymentInstallments$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PerformInstallment>>) => r.body as Array<PerformInstallment>)
    );
  }

  /**
   * Path part for operation receivePaymentOtp
   */
  static readonly ReceivePaymentOtpPath = '/pos/otp';

  /**
   * Generates a new One-Time-Password (OTP) for a pos payment.
   *
   * Sends a new OTP for the customer of the POS for a payment. The OTP belongs to the payer, not the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `receivePaymentOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receivePaymentOtp$Response(params: {

    /**
     * The medium the user wants to receive the otp
     */
    medium: SendMediumEnum;
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.ReceivePaymentOtpPath, 'post');
    if (params) {

      rb.query('medium', params.medium, {});

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
   * Generates a new One-Time-Password (OTP) for a pos payment.
   *
   * Sends a new OTP for the customer of the POS for a payment. The OTP belongs to the payer, not the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `receivePaymentOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receivePaymentOtp(params: {

    /**
     * The medium the user wants to receive the otp
     */
    medium: SendMediumEnum;
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<void> {

    return this.receivePaymentOtp$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation receivePaymentCreateDeviceConfirmation
   */
  static readonly ReceivePaymentCreateDeviceConfirmationPath = '/pos/device-confirmations';

  /**
   * Creates a pending device confirmation for a pos payment.
   *
   * Creates a device confirmation to confirm a pos payment. The confirmation will have a QR code that can be read (e.g with the Mobile App) to be approved / rejected by the payer. The confirmation belongs to the payer, not the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `receivePaymentCreateDeviceConfirmation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receivePaymentCreateDeviceConfirmation$Response(params: {
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.ReceivePaymentCreateDeviceConfirmationPath, 'post');
    if (params) {


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
   * Creates a pending device confirmation for a pos payment.
   *
   * Creates a device confirmation to confirm a pos payment. The confirmation will have a QR code that can be read (e.g with the Mobile App) to be approved / rejected by the payer. The confirmation belongs to the payer, not the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `receivePaymentCreateDeviceConfirmation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receivePaymentCreateDeviceConfirmation(params: {
  
    /**
     * The receive payment parameters
     */
    body: PerformPayment
  }): Observable<string> {

    return this.receivePaymentCreateDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation receivePaymentViewDeviceConfirmation
   */
  static readonly ReceivePaymentViewDeviceConfirmationPath = '/pos/device-confirmations/{id}';

  /**
   * Shows the details of a device confirmation for a POS payer.
   *
   * Shows the details of a device confirmation for POS payer. The confirmation belongs to the payer but must had been created by the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `receivePaymentViewDeviceConfirmation()` instead.
   *
   * This method doesn't expect any request body.
   */
  receivePaymentViewDeviceConfirmation$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    payer: string;

    /**
     * The currency id or internal name. Only used when not specifying a payment type. In this case, will narrow the search for the payment type.
     */
    currency?: string;

    /**
     * The payment type, either the id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is specified, if a single one is possible, it will be used. If a currency is specified, it will be taken into account in order to find the payment type. If, however, there would be multiple possibilities, a validation error is returned.
     */
    type?: string;

  }): Observable<StrictHttpResponse<DeviceConfirmationView>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.ReceivePaymentViewDeviceConfirmationPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('payer', params.payer, {});
      rb.query('currency', params.currency, {});
      rb.query('type', params.type, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceConfirmationView>;
      })
    );
  }

  /**
   * Shows the details of a device confirmation for a POS payer.
   *
   * Shows the details of a device confirmation for POS payer. The confirmation belongs to the payer but must had been created by the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `receivePaymentViewDeviceConfirmation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  receivePaymentViewDeviceConfirmation(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    payer: string;

    /**
     * The currency id or internal name. Only used when not specifying a payment type. In this case, will narrow the search for the payment type.
     */
    currency?: string;

    /**
     * The payment type, either the id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is specified, if a single one is possible, it will be used. If a currency is specified, it will be taken into account in order to find the payment type. If, however, there would be multiple possibilities, a validation error is returned.
     */
    type?: string;

  }): Observable<DeviceConfirmationView> {

    return this.receivePaymentViewDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceConfirmationView>) => r.body as DeviceConfirmationView)
    );
  }

  /**
   * Path part for operation receivePaymentDeleteDeviceConfirmation
   */
  static readonly ReceivePaymentDeleteDeviceConfirmationPath = '/pos/device-confirmations/{id}';

  /**
   * Deletes a device confirmation for a POS payer.
   *
   * Deletes a device confirmation for the payer of pos payment. The confirmation belongs to the payer, not the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `receivePaymentDeleteDeviceConfirmation()` instead.
   *
   * This method doesn't expect any request body.
   */
  receivePaymentDeleteDeviceConfirmation$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    payer: string;

    /**
     * The currency id or internal name. Only used when not specifying a payment type. In this case, will narrow the search for the payment type.
     */
    currency?: string;

    /**
     * The payment type, either the id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is specified, if a single one is possible, it will be used. If a currency is specified, it will be taken into account in order to find the payment type. If, however, there would be multiple possibilities, a validation error is returned.
     */
    type?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.ReceivePaymentDeleteDeviceConfirmationPath, 'delete');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('payer', params.payer, {});
      rb.query('currency', params.currency, {});
      rb.query('type', params.type, {});

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
   * Deletes a device confirmation for a POS payer.
   *
   * Deletes a device confirmation for the payer of pos payment. The confirmation belongs to the payer, not the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `receivePaymentDeleteDeviceConfirmation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  receivePaymentDeleteDeviceConfirmation(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    payer: string;

    /**
     * The currency id or internal name. Only used when not specifying a payment type. In this case, will narrow the search for the payment type.
     */
    currency?: string;

    /**
     * The payment type, either the id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is specified, if a single one is possible, it will be used. If a currency is specified, it will be taken into account in order to find the payment type. If, however, there would be multiple possibilities, a validation error is returned.
     */
    type?: string;

  }): Observable<void> {

    return this.receivePaymentDeleteDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation receivePaymentDeviceConfirmationQrCode
   */
  static readonly ReceivePaymentDeviceConfirmationQrCodePath = '/pos/device-confirmations/{id}/qr-code';

  /**
   * Returns the QR-code image for the given device confirmation only if it was not yet approved / rejected.
   *
   * This request will return the image contents as expected but our api  documentation page (or any other usage of an &lt;img&gt; tag), created  using swagger-ui, generates a second request to include the image in the page. This new (GET) request won't send the authentication parameters and  as this path requires authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `receivePaymentDeviceConfirmationQrCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  receivePaymentDeviceConfirmationQrCode$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The payer, either a user principal (id, login name,  etc) or the word &#x60;system&#x60; when the payment is to be performed to / from a system account. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;.
     */
    payer: string;
    size?: ImageSizeEnum;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, PosService.ReceivePaymentDeviceConfirmationQrCodePath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('payer', params.payer, {});
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
   * Returns the QR-code image for the given device confirmation only if it was not yet approved / rejected.
   *
   * This request will return the image contents as expected but our api  documentation page (or any other usage of an &lt;img&gt; tag), created  using swagger-ui, generates a second request to include the image in the page. This new (GET) request won't send the authentication parameters and  as this path requires authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `receivePaymentDeviceConfirmationQrCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  receivePaymentDeviceConfirmationQrCode(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The payer, either a user principal (id, login name,  etc) or the word &#x60;system&#x60; when the payment is to be performed to / from a system account. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;.
     */
    payer: string;
    size?: ImageSizeEnum;

  }): Observable<Blob> {

    return this.receivePaymentDeviceConfirmationQrCode$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
