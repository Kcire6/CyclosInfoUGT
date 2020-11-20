/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Notification } from '../models/notification';
import { NotificationsStatus } from '../models/notifications-status';


/**
 * Provides access to the notifications the authenticated user has received.
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchNotifications
   */
  static readonly SearchNotificationsPath = '/notifications';

  /**
   * Searches for the notifications the authenticated user has received.
   *
   * Returns an ordered page of notifications the authenticated user has received (newest first).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchNotifications$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Boolean value indicating wether return only the new notifications received after the last view date tracked using &#x60;POST /notifications/viewed&#x60;
     */
    onlyNew?: boolean;

    /**
     * Boolean value indicating wether return only the unread notifications
     */
    onlyUnread?: boolean;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

  }): Observable<StrictHttpResponse<Array<Notification>>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.SearchNotificationsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('onlyNew', params.onlyNew, {});
      rb.query('onlyUnread', params.onlyUnread, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Notification>>;
      })
    );
  }

  /**
   * Searches for the notifications the authenticated user has received.
   *
   * Returns an ordered page of notifications the authenticated user has received (newest first).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchNotifications(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Boolean value indicating wether return only the new notifications received after the last view date tracked using &#x60;POST /notifications/viewed&#x60;
     */
    onlyNew?: boolean;

    /**
     * Boolean value indicating wether return only the unread notifications
     */
    onlyUnread?: boolean;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

  }): Observable<Array<Notification>> {

    return this.searchNotifications$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notification>>) => r.body as Array<Notification>)
    );
  }

  /**
   * Path part for operation viewNotification
   */
  static readonly ViewNotificationPath = '/notifications/{id}';

  /**
   * Returns the notification details.
   *
   * Returns the notification details.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewNotification$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<Notification>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ViewNotificationPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Notification>;
      })
    );
  }

  /**
   * Returns the notification details.
   *
   * Returns the notification details.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewNotification(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<Notification> {

    return this.viewNotification$Response(params).pipe(
      map((r: StrictHttpResponse<Notification>) => r.body as Notification)
    );
  }

  /**
   * Path part for operation deleteNotification
   */
  static readonly DeleteNotificationPath = '/notifications/{id}';

  /**
   * Removes a notification by id.
   *
   * Removes a notification for the authenticated user by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotification$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.DeleteNotificationPath, 'delete');
    if (params) {

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
   * Removes a notification by id.
   *
   * Removes a notification for the authenticated user by id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotification(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteNotification$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation markNotificationsAsRead
   */
  static readonly MarkNotificationsAsReadPath = '/notifications/mark-as-read';

  /**
   * Marks a list of notifications as read.
   *
   * Marks a list of notifications, given by id, as read.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `markNotificationsAsRead()` instead.
   *
   * This method doesn't expect any request body.
   */
  markNotificationsAsRead$Response(params: {

    /**
     * The notifications (comma-separated list of identifiers) to mark as read.
     */
    ids: Array<string>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.MarkNotificationsAsReadPath, 'post');
    if (params) {

      rb.query('ids', params.ids, {});

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
   * Marks a list of notifications as read.
   *
   * Marks a list of notifications, given by id, as read.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `markNotificationsAsRead$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  markNotificationsAsRead(params: {

    /**
     * The notifications (comma-separated list of identifiers) to mark as read.
     */
    ids: Array<string>;

  }): Observable<void> {

    return this.markNotificationsAsRead$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation notificationsStatus
   */
  static readonly NotificationsStatusPath = '/notifications/status';

  /**
   * Return information about the received notifications.
   *
   * Return information about the status of the received notifications (unread, new, etc).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsStatus$Response(params?: {

  }): Observable<StrictHttpResponse<NotificationsStatus>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsStatusPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationsStatus>;
      })
    );
  }

  /**
   * Return information about the received notifications.
   *
   * Return information about the status of the received notifications (unread, new, etc).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsStatus(params?: {

  }): Observable<NotificationsStatus> {

    return this.notificationsStatus$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationsStatus>) => r.body as NotificationsStatus)
    );
  }

  /**
   * Path part for operation markAsViewed
   */
  static readonly MarkAsViewedPath = '/notifications/viewed';

  /**
   * Update the last view date for the notifications.
   *
   * Update the last view date for the notifications. This will be used to calculate the number of new notifications returned by the `POST /notifications/status` operation.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `markAsViewed()` instead.
   *
   * This method doesn't expect any request body.
   */
  markAsViewed$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.MarkAsViewedPath, 'post');
    if (params) {


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
   * Update the last view date for the notifications.
   *
   * Update the last view date for the notifications. This will be used to calculate the number of new notifications returned by the `POST /notifications/status` operation.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `markAsViewed$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  markAsViewed(params?: {

  }): Observable<void> {

    return this.markAsViewed$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
