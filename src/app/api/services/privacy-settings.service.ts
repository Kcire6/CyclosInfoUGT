/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PrivacySettingsData } from '../models/privacy-settings-data';
import { PrivacySettingsParams } from '../models/privacy-settings-params';


/**
 * Provides a way to define how the personal data can be accessed.
 */
@Injectable({
  providedIn: 'root',
})
export class PrivacySettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPrivacySettingsData
   */
  static readonly GetPrivacySettingsDataPath = '/{user}/privacy-settings';

  /**
   * Get the privacy settings data.
   *
   * Returns the privacy settings data of the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPrivacySettingsData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPrivacySettingsData$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

  }): Observable<StrictHttpResponse<PrivacySettingsData>> {

    const rb = new RequestBuilder(this.rootUrl, PrivacySettingsService.GetPrivacySettingsDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PrivacySettingsData>;
      })
    );
  }

  /**
   * Get the privacy settings data.
   *
   * Returns the privacy settings data of the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPrivacySettingsData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPrivacySettingsData(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user.
     */
    user: string;

  }): Observable<PrivacySettingsData> {

    return this.getPrivacySettingsData$Response(params).pipe(
      map((r: StrictHttpResponse<PrivacySettingsData>) => r.body as PrivacySettingsData)
    );
  }

  /**
   * Path part for operation savePrivacySettings
   */
  static readonly SavePrivacySettingsPath = '/{user}/privacy-settings';

  /**
   * Saves the privacy settings for a given user.
   *
   * Saves the privacy settings for a given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePrivacySettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePrivacySettings$Response(params: {

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
     * The privacy settings data to be saved
     */
    body: PrivacySettingsParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PrivacySettingsService.SavePrivacySettingsPath, 'post');
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
   * Saves the privacy settings for a given user.
   *
   * Saves the privacy settings for a given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `savePrivacySettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePrivacySettings(params: {

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
     * The privacy settings data to be saved
     */
    body: PrivacySettingsParams
  }): Observable<void> {

    return this.savePrivacySettings$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
