/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Generate new captcha challenges, which are required for some operations performed as guest, in order to make it harder for bots to abuse the api.
 */
@Injectable({
  providedIn: 'root',
})
export class CaptchaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation newCaptcha
   */
  static readonly NewCaptchaPath = '/captcha';

  /**
   * Returns a new captcha challenge.
   *
   * Only allowed when internal captchas are in use.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newCaptcha()` instead.
   *
   * This method doesn't expect any request body.
   */
  newCaptcha$Response(params?: {

    /**
     * On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group&#x27;s configured theme.
     */
    group?: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CaptchaService.NewCaptchaPath, 'post');
    if (params) {

      rb.query('group', params.group, {});

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
   * Returns a new captcha challenge.
   *
   * Only allowed when internal captchas are in use.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newCaptcha$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  newCaptcha(params?: {

    /**
     * On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group&#x27;s configured theme.
     */
    group?: string;

  }): Observable<string> {

    return this.newCaptcha$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getCaptchaContent
   */
  static readonly GetCaptchaContentPath = '/captcha/{id}';

  /**
   * Returns a captcha image content.
   *
   * Returns the image content of a captcha text. When neither `width` nor `height` are specified, returns the original size. The original ratio is always maintained. When only of one of  the dimensions is specified, it is used as maximum, and the other is calculated. When both are informed, the maximum size with the original ratio that fits both dimensions is used.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCaptchaContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCaptchaContent$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group&#x27;s configured theme.
     */
    group?: string;

    /**
     * The requested image width
     */
    width?: number;

    /**
     * The requested file height
     */
    height?: number;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, CaptchaService.GetCaptchaContentPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('group', params.group, {});
      rb.query('width', params.width, {});
      rb.query('height', params.height, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'image/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Returns a captcha image content.
   *
   * Returns the image content of a captcha text. When neither `width` nor `height` are specified, returns the original size. The original ratio is always maintained. When only of one of  the dimensions is specified, it is used as maximum, and the other is calculated. When both are informed, the maximum size with the original ratio that fits both dimensions is used.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCaptchaContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCaptchaContent(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group&#x27;s configured theme.
     */
    group?: string;

    /**
     * The requested image width
     */
    width?: number;

    /**
     * The requested file height
     */
    height?: number;

  }): Observable<Blob> {

    return this.getCaptchaContent$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
