/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NotificationSettingsDataForEdit } from '../models/notification-settings-data-for-edit';
import { NotificationSettingsEdit } from '../models/notification-settings-edit';
import { NotificationSettingsView } from '../models/notification-settings-view';


/**
 * Provides access to the notifications settings, where users can choose which kinds of notifications they want to receive, and via which mediums (internal / e-mail / sms).
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationSettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation viewNotificationSettings
   */
  static readonly ViewNotificationSettingsPath = '/{user}/notification-settings';

  /**
   * Returns the notification settings for a given user.
   *
   * Returns the notification settings for a given operator / user / administrator.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewNotificationSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewNotificationSettings$Response(params: {

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

  }): Observable<StrictHttpResponse<NotificationSettingsView>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationSettingsService.ViewNotificationSettingsPath, 'get');
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
        return r as StrictHttpResponse<NotificationSettingsView>;
      })
    );
  }

  /**
   * Returns the notification settings for a given user.
   *
   * Returns the notification settings for a given operator / user / administrator.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewNotificationSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewNotificationSettings(params: {

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

  }): Observable<NotificationSettingsView> {

    return this.viewNotificationSettings$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationSettingsView>) => r.body as NotificationSettingsView)
    );
  }

  /**
   * Path part for operation saveNotificationSettings
   */
  static readonly SaveNotificationSettingsPath = '/{user}/notification-settings';

  /**
   * Saves the notification settings for a given user.
   *
   * Saves the notification settings for a given operator / user / administrator.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveNotificationSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveNotificationSettings$Response(params: {

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
     * The parameters to save
     */
    body: NotificationSettingsEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationSettingsService.SaveNotificationSettingsPath, 'post');
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
   * Saves the notification settings for a given user.
   *
   * Saves the notification settings for a given operator / user / administrator.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveNotificationSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveNotificationSettings(params: {

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
     * The parameters to save
     */
    body: NotificationSettingsEdit
  }): Observable<void> {

    return this.saveNotificationSettings$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getNotificationSettingsDataForEdit
   */
  static readonly GetNotificationSettingsDataForEditPath = '/{user}/notification-settings/data-for-edit';

  /**
   * Returns configuration data to edit the notification settings of a user.
   *
   * Returns data to edit the nofitication settings od a given operator / user / administrator.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNotificationSettingsDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationSettingsDataForEdit$Response(params: {

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

  }): Observable<StrictHttpResponse<NotificationSettingsDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationSettingsService.GetNotificationSettingsDataForEditPath, 'get');
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
        return r as StrictHttpResponse<NotificationSettingsDataForEdit>;
      })
    );
  }

  /**
   * Returns configuration data to edit the notification settings of a user.
   *
   * Returns data to edit the nofitication settings od a given operator / user / administrator.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getNotificationSettingsDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationSettingsDataForEdit(params: {

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

  }): Observable<NotificationSettingsDataForEdit> {

    return this.getNotificationSettingsDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationSettingsDataForEdit>) => r.body as NotificationSettingsDataForEdit)
    );
  }

}
