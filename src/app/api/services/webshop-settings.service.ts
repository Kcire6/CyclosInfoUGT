/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { WebshopSettingsDetailed } from '../models/webshop-settings-detailed';
import { WebshopSettingsView } from '../models/webshop-settings-view';


/**
 * Provides access to general webshop settings for sellers.
 */
@Injectable({
  providedIn: 'root',
})
export class WebshopSettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation viewWebshopSettings
   */
  static readonly ViewWebshopSettingsPath = '/{user}/webshop-settings';

  /**
   * Returns the webshop settings for a given user.
   *
   * Returns the webshop settings for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewWebshopSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewWebshopSettings$Response(params: {

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

  }): Observable<StrictHttpResponse<WebshopSettingsView>> {

    const rb = new RequestBuilder(this.rootUrl, WebshopSettingsService.ViewWebshopSettingsPath, 'get');
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
        return r as StrictHttpResponse<WebshopSettingsView>;
      })
    );
  }

  /**
   * Returns the webshop settings for a given user.
   *
   * Returns the webshop settings for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewWebshopSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewWebshopSettings(params: {

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

  }): Observable<WebshopSettingsView> {

    return this.viewWebshopSettings$Response(params).pipe(
      map((r: StrictHttpResponse<WebshopSettingsView>) => r.body as WebshopSettingsView)
    );
  }

  /**
   * Path part for operation updateWebshopSettings
   */
  static readonly UpdateWebshopSettingsPath = '/{user}/webshop-settings';

  /**
   * Updates a user's webshop settings.
   *
   * Updates a user's webshop settings.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateWebshopSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateWebshopSettings$Response(params: {

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
     * The new webshop settings
     */
    body: WebshopSettingsDetailed
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WebshopSettingsService.UpdateWebshopSettingsPath, 'put');
    if (params) {

      rb.path('user', params.user, {});

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
   * Updates a user's webshop settings.
   *
   * Updates a user's webshop settings.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateWebshopSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateWebshopSettings(params: {

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
     * The new webshop settings
     */
    body: WebshopSettingsDetailed
  }): Observable<void> {

    return this.updateWebshopSettings$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
