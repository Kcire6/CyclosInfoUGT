/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PushNotificationEventKind } from '../models/push-notification-event-kind';


/**
 * Provides a way for clients to subscribe for push notifications
 */
@Injectable({
  providedIn: 'root',
})
export class PushService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation subscribeForPushNotifications
   */
  static readonly SubscribeForPushNotificationsPath = '/push/subscribe';

  /**
   * Subscribes for receiving push notifications of specific types.
   *
   * Returns an event stream of server-sent events
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscribeForPushNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  subscribeForPushNotifications$Response(params: {

    /**
     * An id generated by the client. This id is valid for the authenticated used, indicating a single session. As event streams can timeout and be reconnected, subsequent subscriptions with the same user and client id are considered the same subscription, and missed events since the last timeout will be immediately delivered. Missed events are enqueued up to a few minutes after the connection timeout. After that window, any enqueued events are discarded.
     */
    clientId: string;

    /**
     * The event kinds for which the client desires to subscribe
     */
    kinds: Array<PushNotificationEventKind>;

    /**
     * When subscribing to &#x60;accountStatus&#x60; events, this parameter must be informed to select the accounts to be watched for.
     */
    accountIds?: Array<string>;

    /**
     * When subscribing to &#x60;ticket&#x60; events, this parameter can be used to filter which ticket to monitor.
     */
    ticketNumber?: string;

    /**
     * When subscribing to &#x60;deviceConfirmationFeedback&#x60; events, this parameter can be used to filter which device confirmation to monitor.
     */
    deviceConfirmationId?: string;

    /**
     * When subscribing to &#x60;identityProviderCallback&#x60; events, this parameter can be used to filter which request to monitor.
     */
    identityProviderRequestId?: string;

    /**
     * The last received event id, in case of reconnections. May also be passed as the standard header &#x60;Last-Event-ID&#x60;.
     */
    lastEventId?: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PushService.SubscribeForPushNotificationsPath, 'get');
    if (params) {

      rb.query('clientId', params.clientId, {});
      rb.query('kinds', params.kinds, {});
      rb.query('accountIds', params.accountIds, {});
      rb.query('ticketNumber', params.ticketNumber, {});
      rb.query('deviceConfirmationId', params.deviceConfirmationId, {});
      rb.query('identityProviderRequestId', params.identityProviderRequestId, {});
      rb.header('lastEventId', params.lastEventId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/event-stream'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Subscribes for receiving push notifications of specific types.
   *
   * Returns an event stream of server-sent events
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subscribeForPushNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subscribeForPushNotifications(params: {

    /**
     * An id generated by the client. This id is valid for the authenticated used, indicating a single session. As event streams can timeout and be reconnected, subsequent subscriptions with the same user and client id are considered the same subscription, and missed events since the last timeout will be immediately delivered. Missed events are enqueued up to a few minutes after the connection timeout. After that window, any enqueued events are discarded.
     */
    clientId: string;

    /**
     * The event kinds for which the client desires to subscribe
     */
    kinds: Array<PushNotificationEventKind>;

    /**
     * When subscribing to &#x60;accountStatus&#x60; events, this parameter must be informed to select the accounts to be watched for.
     */
    accountIds?: Array<string>;

    /**
     * When subscribing to &#x60;ticket&#x60; events, this parameter can be used to filter which ticket to monitor.
     */
    ticketNumber?: string;

    /**
     * When subscribing to &#x60;deviceConfirmationFeedback&#x60; events, this parameter can be used to filter which device confirmation to monitor.
     */
    deviceConfirmationId?: string;

    /**
     * When subscribing to &#x60;identityProviderCallback&#x60; events, this parameter can be used to filter which request to monitor.
     */
    identityProviderRequestId?: string;

    /**
     * The last received event id, in case of reconnections. May also be passed as the standard header &#x60;Last-Event-ID&#x60;.
     */
    lastEventId?: string;

  }): Observable<string> {

    return this.subscribeForPushNotifications$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
