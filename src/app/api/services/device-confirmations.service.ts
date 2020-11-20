/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateDeviceConfirmation } from '../models/create-device-confirmation';
import { DataForDeviceConfirmationApproval } from '../models/data-for-device-confirmation-approval';
import { DeviceConfirmationActionParams } from '../models/device-confirmation-action-params';
import { DeviceConfirmationView } from '../models/device-confirmation-view';
import { ImageSizeEnum } from '../models/image-size-enum';


/**
 * Allows confirmation of operations using trusted devices.
 */
@Injectable({
  providedIn: 'root',
})
export class DeviceConfirmationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dataForDeviceConfirmationApproval
   */
  static readonly DataForDeviceConfirmationApprovalPath = '/device-confirmations/data-for-approval';

  /**
   * Return data for approve / reject device confirmations.
   *
   * Can be invoked by guests to know if authentication is required for approve / reject pending device confirmations.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataForDeviceConfirmationApproval()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForDeviceConfirmationApproval$Response(params: {

    /**
     * The id of the device used to confirm operations.
     */
    deviceId: string;

  }): Observable<StrictHttpResponse<DataForDeviceConfirmationApproval>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceConfirmationsService.DataForDeviceConfirmationApprovalPath, 'get');
    if (params) {

      rb.query('deviceId', params.deviceId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForDeviceConfirmationApproval>;
      })
    );
  }

  /**
   * Return data for approve / reject device confirmations.
   *
   * Can be invoked by guests to know if authentication is required for approve / reject pending device confirmations.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dataForDeviceConfirmationApproval$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForDeviceConfirmationApproval(params: {

    /**
     * The id of the device used to confirm operations.
     */
    deviceId: string;

  }): Observable<DataForDeviceConfirmationApproval> {

    return this.dataForDeviceConfirmationApproval$Response(params).pipe(
      map((r: StrictHttpResponse<DataForDeviceConfirmationApproval>) => r.body as DataForDeviceConfirmationApproval)
    );
  }

  /**
   * Path part for operation createDeviceConfirmation
   */
  static readonly CreateDeviceConfirmationPath = '/device-confirmations';

  /**
   * Creates a pending device confirmation for the authenticated user.
   *
   * Creates a device confirmation for an operation that must be confirmed. The confirmation will have a QR code that can be read (e.g with the Mobile App) to be approved / rejected by the device owner.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDeviceConfirmation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDeviceConfirmation$Response(params: {
  
    /**
     * The parameters for creating the confirmation.
     */
    body: CreateDeviceConfirmation
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceConfirmationsService.CreateDeviceConfirmationPath, 'post');
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
   * Creates a pending device confirmation for the authenticated user.
   *
   * Creates a device confirmation for an operation that must be confirmed. The confirmation will have a QR code that can be read (e.g with the Mobile App) to be approved / rejected by the device owner.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createDeviceConfirmation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDeviceConfirmation(params: {
  
    /**
     * The parameters for creating the confirmation.
     */
    body: CreateDeviceConfirmation
  }): Observable<string> {

    return this.createDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation viewDeviceConfirmation
   */
  static readonly ViewDeviceConfirmationPath = '/device-confirmations/{id}';

  /**
   * Shows the details of a device confirmation for the authenticated user.
   *
   * Shows the details of a device confirmation for the authenticated user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewDeviceConfirmation()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewDeviceConfirmation$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<DeviceConfirmationView>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceConfirmationsService.ViewDeviceConfirmationPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

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
   * Shows the details of a device confirmation for the authenticated user.
   *
   * Shows the details of a device confirmation for the authenticated user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewDeviceConfirmation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewDeviceConfirmation(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<DeviceConfirmationView> {

    return this.viewDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceConfirmationView>) => r.body as DeviceConfirmationView)
    );
  }

  /**
   * Path part for operation deleteDeviceConfirmation
   */
  static readonly DeleteDeviceConfirmationPath = '/device-confirmations/{id}';

  /**
   * Deletes a device confirmation for the authenticated user.
   *
   * Deletes a device confirmation for the authenticated user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDeviceConfirmation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceConfirmation$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceConfirmationsService.DeleteDeviceConfirmationPath, 'delete');
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
   * Deletes a device confirmation for the authenticated user.
   *
   * Deletes a device confirmation for the authenticated user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDeviceConfirmation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceConfirmation(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation approveDeviceConfirmation
   */
  static readonly ApproveDeviceConfirmationPath = '/device-confirmations/{id}/approve';

  /**
   * Approves a pending device confirmation.
   *
   * Approves a pending confirmation with a device only if not already approved / rejected. This operation can be executed as guest or as a logged user, if guest, the final user used to approve will be the device owner. For successful approval, the user who creates the confirmation (for a pending operation in other channel) must be the same as the user who owns the device. Moreover, to ensure the user is approving the same operation he previously requested, a HMAC-SHA256 must be calculated for the QR code using a secret key only valid for the device being used to confirm. Finally, when the operation requiring confirmation is executed, Cyclos will recalculate the QR code from the operation actual parameters and it must match the QR of the confirmation.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveDeviceConfirmation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approveDeviceConfirmation$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The parameters for approving the confirmation.
     */
    body: DeviceConfirmationActionParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceConfirmationsService.ApproveDeviceConfirmationPath, 'post');
    if (params) {

      rb.path('id', params.id, {});

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
   * Approves a pending device confirmation.
   *
   * Approves a pending confirmation with a device only if not already approved / rejected. This operation can be executed as guest or as a logged user, if guest, the final user used to approve will be the device owner. For successful approval, the user who creates the confirmation (for a pending operation in other channel) must be the same as the user who owns the device. Moreover, to ensure the user is approving the same operation he previously requested, a HMAC-SHA256 must be calculated for the QR code using a secret key only valid for the device being used to confirm. Finally, when the operation requiring confirmation is executed, Cyclos will recalculate the QR code from the operation actual parameters and it must match the QR of the confirmation.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `approveDeviceConfirmation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approveDeviceConfirmation(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The parameters for approving the confirmation.
     */
    body: DeviceConfirmationActionParams
  }): Observable<void> {

    return this.approveDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation rejectDeviceConfirmation
   */
  static readonly RejectDeviceConfirmationPath = '/device-confirmations/{id}/reject';

  /**
   * Rejects a pending device confirmation.
   *
   * Rejects a confirmation with a device only if not already approved / rejected. This operation can be executed as guest or as a logged user, if guest, the final user used to reject will be the device owner. For successful rejection, the user who creates the confirmation (for a pending operation in other channel) must be the same as the user who owns the device. Moreover, to ensure the user is rejecting the same operation he previously requested, a HMAC-SHA256 must be calculated for the QR code using a secret key only valid for the device being used to reject.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rejectDeviceConfirmation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rejectDeviceConfirmation$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The parameters for approving the confirmation.
     */
    body: DeviceConfirmationActionParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceConfirmationsService.RejectDeviceConfirmationPath, 'post');
    if (params) {

      rb.path('id', params.id, {});

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
   * Rejects a pending device confirmation.
   *
   * Rejects a confirmation with a device only if not already approved / rejected. This operation can be executed as guest or as a logged user, if guest, the final user used to reject will be the device owner. For successful rejection, the user who creates the confirmation (for a pending operation in other channel) must be the same as the user who owns the device. Moreover, to ensure the user is rejecting the same operation he previously requested, a HMAC-SHA256 must be calculated for the QR code using a secret key only valid for the device being used to reject.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rejectDeviceConfirmation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rejectDeviceConfirmation(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The parameters for approving the confirmation.
     */
    body: DeviceConfirmationActionParams
  }): Observable<void> {

    return this.rejectDeviceConfirmation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getDeviceConfirmationQrCode
   */
  static readonly GetDeviceConfirmationQrCodePath = '/device-confirmations/{id}/qr-code';

  /**
   * Returns the QR-code image for the given confirmation only if not already approved / rejected.
   *
   * Returns the QR-code image for the given confirmation only if not already approved / rejected. The QR content is a URL of the form: cyclos://confirmation?id=confirmation_id&description=i18n_confirmation_type&fields=Label1:Value1|Label2:Value2... This request will return the image contents as expected but our api documentation page  (or any other usage of an &lt;img&gt; tag), created using swagger-ui, generates a second request to include the  image in the page. This new (GET) request won't send the authentication parameters and as this path requires  authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeviceConfirmationQrCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceConfirmationQrCode$Response(params: {

    /**
     * The object identification
     */
    id: string;
    size?: ImageSizeEnum;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceConfirmationsService.GetDeviceConfirmationQrCodePath, 'get');
    if (params) {

      rb.path('id', params.id, {});
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
   * Returns the QR-code image for the given confirmation only if not already approved / rejected.
   *
   * Returns the QR-code image for the given confirmation only if not already approved / rejected. The QR content is a URL of the form: cyclos://confirmation?id=confirmation_id&description=i18n_confirmation_type&fields=Label1:Value1|Label2:Value2... This request will return the image contents as expected but our api documentation page  (or any other usage of an &lt;img&gt; tag), created using swagger-ui, generates a second request to include the  image in the page. This new (GET) request won't send the authentication parameters and as this path requires  authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDeviceConfirmationQrCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceConfirmationQrCode(params: {

    /**
     * The object identification
     */
    id: string;
    size?: ImageSizeEnum;

  }): Observable<Blob> {

    return this.getDeviceConfirmationQrCode$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
