/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BrokerDataForAdd } from '../models/broker-data-for-add';
import { BrokeringView } from '../models/brokering-view';
import { UserBrokersData } from '../models/user-brokers-data';


/**
 * Viewing and manage the brokers of a user.
 */
@Injectable({
  providedIn: 'root',
})
export class BrokeringService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserBrokersData
   */
  static readonly GetUserBrokersDataPath = '/{user}/brokers';

  /**
   * Returns the current broker(s), together with additional information.
   *
   * Returns data containing information regarding the user broker(s)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserBrokersData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserBrokersData$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<UserBrokersData>> {

    const rb = new RequestBuilder(this.rootUrl, BrokeringService.GetUserBrokersDataPath, 'get');
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
        return r as StrictHttpResponse<UserBrokersData>;
      })
    );
  }

  /**
   * Returns the current broker(s), together with additional information.
   *
   * Returns data containing information regarding the user broker(s)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserBrokersData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserBrokersData(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<UserBrokersData> {

    return this.getUserBrokersData$Response(params).pipe(
      map((r: StrictHttpResponse<UserBrokersData>) => r.body as UserBrokersData)
    );
  }

  /**
   * Path part for operation getBrokerDataForAdd
   */
  static readonly GetBrokerDataForAddPath = '/{user}/brokers/data-for-add';

  /**
   * Returns configuration data to add another broker to a user.
   *
   * Returns configuration data to add another broker to a user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBrokerDataForAdd()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBrokerDataForAdd$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<BrokerDataForAdd>> {

    const rb = new RequestBuilder(this.rootUrl, BrokeringService.GetBrokerDataForAddPath, 'get');
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
        return r as StrictHttpResponse<BrokerDataForAdd>;
      })
    );
  }

  /**
   * Returns configuration data to add another broker to a user.
   *
   * Returns configuration data to add another broker to a user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBrokerDataForAdd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBrokerDataForAdd(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<BrokerDataForAdd> {

    return this.getBrokerDataForAdd$Response(params).pipe(
      map((r: StrictHttpResponse<BrokerDataForAdd>) => r.body as BrokerDataForAdd)
    );
  }

  /**
   * Path part for operation viewBrokering
   */
  static readonly ViewBrokeringPath = '/{user}/brokers/{broker}';

  /**
   * Returns details of the brokering relation for the given user and broker.
   *
   * Returns details of the brokering relation for the given user and broker.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewBrokering()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewBrokering$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<BrokeringView>> {

    const rb = new RequestBuilder(this.rootUrl, BrokeringService.ViewBrokeringPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('broker', params.broker, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BrokeringView>;
      })
    );
  }

  /**
   * Returns details of the brokering relation for the given user and broker.
   *
   * Returns details of the brokering relation for the given user and broker.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewBrokering$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewBrokering(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<BrokeringView> {

    return this.viewBrokering$Response(params).pipe(
      map((r: StrictHttpResponse<BrokeringView>) => r.body as BrokeringView)
    );
  }

  /**
   * Path part for operation addBroker
   */
  static readonly AddBrokerPath = '/{user}/brokers/{broker}';

  /**
   * Adds a brokering relation between the given user and broker.
   *
   * Adds a brokering relation between the given user and broker.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addBroker()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBroker$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

    /**
     * Indicates whether this is the main broker. If this is the first broker of the user, it will be the main broker, regardless of this parameter.
     */
    main?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BrokeringService.AddBrokerPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('broker', params.broker, {});
      rb.query('main', params.main, {});

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
   * Adds a brokering relation between the given user and broker.
   *
   * Adds a brokering relation between the given user and broker.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addBroker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBroker(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

    /**
     * Indicates whether this is the main broker. If this is the first broker of the user, it will be the main broker, regardless of this parameter.
     */
    main?: boolean;

  }): Observable<void> {

    return this.addBroker$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation removeBroker
   */
  static readonly RemoveBrokerPath = '/{user}/brokers/{broker}';

  /**
   * Removes a brokering relation between the given user and broker.
   *
   * Removes a brokering relation between the given user and broker.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeBroker()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeBroker$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BrokeringService.RemoveBrokerPath, 'delete');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('broker', params.broker, {});

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
   * Removes a brokering relation between the given user and broker.
   *
   * Removes a brokering relation between the given user and broker.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `removeBroker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeBroker(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

  }): Observable<void> {

    return this.removeBroker$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation setMainBroker
   */
  static readonly SetMainBrokerPath = '/{user}/brokers/{broker}/set-main';

  /**
   * Sets a broker as the main broker of the user.
   *
   * Sets a broker as the main broker of the user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setMainBroker()` instead.
   *
   * This method doesn't expect any request body.
   */
  setMainBroker$Response(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BrokeringService.SetMainBrokerPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('broker', params.broker, {});

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
   * Sets a broker as the main broker of the user.
   *
   * Sets a broker as the main broker of the user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setMainBroker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setMainBroker(params: {

    /**
     * A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, &#x60;&#x27;1234567890&#x60;;
     */
    user: string;

    /**
     * The id or identifier of the broker
     */
    broker: string;

  }): Observable<void> {

    return this.setMainBroker$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
