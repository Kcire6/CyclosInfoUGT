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
import { PaymentPreview } from '../models/payment-preview';
import { PerformInstallment } from '../models/perform-installment';
import { PerformPayment } from '../models/perform-payment';
import { Transaction } from '../models/transaction';


/**
 * Provides access for performing payments or scheduled payments.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dataForPerformPayment
   */
  static readonly DataForPerformPaymentPath = '/{owner}/payments/data-for-perform';

  /**
   * Returns configuration data for performing a payment.
   *
   * Returns configuration data for performing a payment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataForPerformPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForPerformPayment$Response(params: {

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
     * The payment destination. Either the string &#x60;system&#x60; for a payment to system or a user identification.
     */
    to?: string;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

  }): Observable<StrictHttpResponse<DataForTransaction>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.DataForPerformPaymentPath, 'get');
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
   * Returns configuration data for performing a payment.
   *
   * Returns configuration data for performing a payment
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dataForPerformPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForPerformPayment(params: {

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
     * The payment destination. Either the string &#x60;system&#x60; for a payment to system or a user identification.
     */
    to?: string;

    /**
     * The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.
     */
    type?: string;

  }): Observable<DataForTransaction> {

    return this.dataForPerformPayment$Response(params).pipe(
      map((r: StrictHttpResponse<DataForTransaction>) => r.body as DataForTransaction)
    );
  }

  /**
   * Path part for operation performPayment
   */
  static readonly PerformPaymentPath = '/{owner}/payments';

  /**
   * Performs a payment from the given owner.
   *
   * Performs either a direct, scheduled or recurring payment from the owner indicated on the path to the owner specified on the body. The destination user should be informed in the `subject` parameter. If the `subject` is `system`, it will be a payment to a system account. The payment id is returned on the response, and a link to the transaction details is returned on the `Location` header.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `performPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  performPayment$Response(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The perform payment parameters
     */
    body: PerformPayment
  }): Observable<StrictHttpResponse<Transaction>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.PerformPaymentPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
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
   * Performs a payment from the given owner.
   *
   * Performs either a direct, scheduled or recurring payment from the owner indicated on the path to the owner specified on the body. The destination user should be informed in the `subject` parameter. If the `subject` is `system`, it will be a payment to a system account. The payment id is returned on the response, and a link to the transaction details is returned on the `Location` header.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `performPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  performPayment(params: {

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
     * The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.
     */
    confirmationPassword?: string;
  
    /**
     * The perform payment parameters
     */
    body: PerformPayment
  }): Observable<Transaction> {

    return this.performPayment$Response(params).pipe(
      map((r: StrictHttpResponse<Transaction>) => r.body as Transaction)
    );
  }

  /**
   * Path part for operation previewPayment
   */
  static readonly PreviewPaymentPath = '/{owner}/payments/preview';

  /**
   * Previews a payment before performing it.
   *
   * Previews a payment, scheduled or recurring payment. The actual balance checking is not performed in the preview.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `previewPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  previewPayment$Response(params: {

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
     * The perform payment parameters
     */
    body: PerformPayment
  }): Observable<StrictHttpResponse<PaymentPreview>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.PreviewPaymentPath, 'post');
    if (params) {

      rb.path('owner', params.owner, {});
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
   * Previews a payment before performing it.
   *
   * Previews a payment, scheduled or recurring payment. The actual balance checking is not performed in the preview.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `previewPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  previewPayment(params: {

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
     * The perform payment parameters
     */
    body: PerformPayment
  }): Observable<PaymentPreview> {

    return this.previewPayment$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPreview>) => r.body as PaymentPreview)
    );
  }

  /**
   * Path part for operation calculatePerformPaymentInstallments
   */
  static readonly CalculatePerformPaymentInstallmentsPath = '/{owner}/payments/installments';

  /**
   * Calculates the default installments for a scheduled payment.
   *
   * Used to calculate installments for a scheduled payment. Will return an installment every month. When later performing the payment, these can be (optionally) customized (such as changing some due dates or amounts) and used on the payment installments.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calculatePerformPaymentInstallments()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculatePerformPaymentInstallments$Response(params: {

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
     * The payment destination
     */
    to: string;

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

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.CalculatePerformPaymentInstallmentsPath, 'get');
    if (params) {

      rb.path('owner', params.owner, {});
      rb.query('fields', params.fields, {});
      rb.query('to', params.to, {});
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
   * Used to calculate installments for a scheduled payment. Will return an installment every month. When later performing the payment, these can be (optionally) customized (such as changing some due dates or amounts) and used on the payment installments.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calculatePerformPaymentInstallments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculatePerformPaymentInstallments(params: {

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
     * The payment destination
     */
    to: string;

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

    return this.calculatePerformPaymentInstallments$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PerformInstallment>>) => r.body as Array<PerformInstallment>)
    );
  }

}
