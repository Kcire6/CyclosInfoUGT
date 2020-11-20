/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CustomFieldKind } from '../models/custom-field-kind';
import { Image } from '../models/image';
import { ImageView } from '../models/image-view';
import { ImagesListData } from '../models/images-list-data';
import { SystemImagesListData } from '../models/system-images-list-data';
import { TempImageTargetEnum } from '../models/temp-image-target-enum';
import { UserImageKind } from '../models/user-image-kind';


/**
 * Provides access to images of all kinds, for getting metadata, content and management operations.
 */
@Injectable({
  providedIn: 'root',
})
export class ImagesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation viewImage
   */
  static readonly ViewImagePath = '/images/{idOrKey}';

  /**
   * Returns an image details by id or key.
   *
   * Returns metadata about an image given its identifier or key
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewImage$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The image id or file name
     */
    idOrKey: string;

  }): Observable<StrictHttpResponse<ImageView>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.ViewImagePath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('idOrKey', params.idOrKey, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImageView>;
      })
    );
  }

  /**
   * Returns an image details by id or key.
   *
   * Returns metadata about an image given its identifier or key
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewImage(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The image id or file name
     */
    idOrKey: string;

  }): Observable<ImageView> {

    return this.viewImage$Response(params).pipe(
      map((r: StrictHttpResponse<ImageView>) => r.body as ImageView)
    );
  }

  /**
   * Path part for operation deleteImage
   */
  static readonly DeleteImagePath = '/images/{idOrKey}';

  /**
   * Removes an image by id or key.
   *
   * Removes the image with the given internal id or key. Any image kind can be removed using this operation, but the authenticated user needs the appropriate permission to do so.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteImage$Response(params: {

    /**
     * The image id or file name
     */
    idOrKey: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.DeleteImagePath, 'delete');
    if (params) {

      rb.path('idOrKey', params.idOrKey, {});

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
   * Removes an image by id or key.
   *
   * Removes the image with the given internal id or key. Any image kind can be removed using this operation, but the authenticated user needs the appropriate permission to do so.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteImage(params: {

    /**
     * The image id or file name
     */
    idOrKey: string;

  }): Observable<void> {

    return this.deleteImage$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getImageContent
   */
  static readonly GetImageContentPath = '/images/content/{idOrKey}';

  /**
   * Returns an image content by id or key.
   *
   * Returns the content of an image, given the image identifier or key. When neither `width` nor `height` are specified, returns the original content. The original ratio is always maintained. When only of one of the dimensions is specified, it is used as maximum, and the other is calculated. When both are informed, the maximum size with the original ratio that fits both dimensions is used.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getImageContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImageContent$Response(params: {

    /**
     * The image id or file name
     */
    idOrKey: string;

    /**
     * The requested image width
     */
    width?: number;

    /**
     * The requested file height
     */
    height?: number;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.GetImageContentPath, 'get');
    if (params) {

      rb.path('idOrKey', params.idOrKey, {});
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
   * Returns an image content by id or key.
   *
   * Returns the content of an image, given the image identifier or key. When neither `width` nor `height` are specified, returns the original content. The original ratio is always maintained. When only of one of the dimensions is specified, it is used as maximum, and the other is calculated. When both are informed, the maximum size with the original ratio that fits both dimensions is used.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getImageContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImageContent(params: {

    /**
     * The image id or file name
     */
    idOrKey: string;

    /**
     * The requested image width
     */
    width?: number;

    /**
     * The requested file height
     */
    height?: number;

  }): Observable<Blob> {

    return this.getImageContent$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getUserImagesListData
   */
  static readonly GetUserImagesListDataPath = '/{user}/images/list-data';

  /**
   * Returns either `profile` or `custom` images for a given user, plus additional permissions and data.
   *
   * Returns either `profile` or `custom` images for the given user. For `profile`, the user must be visible by the authenticated user. For `custom`, the authenticated user must either be the owner or a manager (administrator or broker). Custom images are used in rich text content, not images for custom fields. Additional data, such as the maximum images and whether the images can be managed by the authenticated user are also returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserImagesListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserImagesListData$Response(params: {

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

    /**
     * The kind of images to be returned. The default value is &#x60;profile&#x60;
     */
    kind?: UserImageKind;

  }): Observable<StrictHttpResponse<ImagesListData>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.GetUserImagesListDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('kind', params.kind, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImagesListData>;
      })
    );
  }

  /**
   * Returns either `profile` or `custom` images for a given user, plus additional permissions and data.
   *
   * Returns either `profile` or `custom` images for the given user. For `profile`, the user must be visible by the authenticated user. For `custom`, the authenticated user must either be the owner or a manager (administrator or broker). Custom images are used in rich text content, not images for custom fields. Additional data, such as the maximum images and whether the images can be managed by the authenticated user are also returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserImagesListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserImagesListData(params: {

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

    /**
     * The kind of images to be returned. The default value is &#x60;profile&#x60;
     */
    kind?: UserImageKind;

  }): Observable<ImagesListData> {

    return this.getUserImagesListData$Response(params).pipe(
      map((r: StrictHttpResponse<ImagesListData>) => r.body as ImagesListData)
    );
  }

  /**
   * Path part for operation listUserImages
   */
  static readonly ListUserImagesPath = '/{user}/images';

  /**
   * Lists either `profile` or `custom` images for a given user.
   *
   * Returns either `profile` or `custom` images for the given user. For `profile`, the user must be visible by the authenticated user. Custom images are used in rich text content, not images for custom fields. For `custom`, the authenticated user must either be the owner or a manager (administrator or broker).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listUserImages()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserImages$Response(params: {

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

    /**
     * The kind of images to be returned. The default value is &#x60;profile&#x60;
     */
    kind?: UserImageKind;

  }): Observable<StrictHttpResponse<Array<Image>>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.ListUserImagesPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('kind', params.kind, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Image>>;
      })
    );
  }

  /**
   * Lists either `profile` or `custom` images for a given user.
   *
   * Returns either `profile` or `custom` images for the given user. For `profile`, the user must be visible by the authenticated user. Custom images are used in rich text content, not images for custom fields. For `custom`, the authenticated user must either be the owner or a manager (administrator or broker).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listUserImages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserImages(params: {

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

    /**
     * The kind of images to be returned. The default value is &#x60;profile&#x60;
     */
    kind?: UserImageKind;

  }): Observable<Array<Image>> {

    return this.listUserImages$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Image>>) => r.body as Array<Image>)
    );
  }

  /**
   * Path part for operation uploadUserImage
   */
  static readonly UploadUserImagePath = '/{user}/images';

  /**
   * Adds a new image for the given user. The image kind is either  `profile` or `custom`.
   *
   * Uploads a new image, either `profile` (by default) or `custom`, for the given user. Custom images are used in rich text content, not images for custom fields. For uploading images for custom field values, see the documentation for the operation at `POST /images/temp`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadUserImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadUserImage$Response(params: {

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
     * The kind of images to be returned. The default value is &#x60;profile&#x60;
     */
    kind?: UserImageKind;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.UploadUserImagePath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.query('kind', params.kind, {});
      rb.query('name', params.name, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Adds a new image for the given user. The image kind is either  `profile` or `custom`.
   *
   * Uploads a new image, either `profile` (by default) or `custom`, for the given user. Custom images are used in rich text content, not images for custom fields. For uploading images for custom field values, see the documentation for the operation at `POST /images/temp`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadUserImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadUserImage(params: {

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
     * The kind of images to be returned. The default value is &#x60;profile&#x60;
     */
    kind?: UserImageKind;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<string> {

    return this.uploadUserImage$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation reorderProfileImages
   */
  static readonly ReorderProfileImagesPath = '/{user}/images/order';

  /**
   * Changes the order of a user's profile images.
   *
   * The new order is defined by the list of ids, so that images appear in the same order as the ids.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reorderProfileImages()` instead.
   *
   * This method doesn't expect any request body.
   */
  reorderProfileImages$Response(params: {

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
     * The array of ids (comma-separated) reflecting the desired order
     */
    ids: Array<string>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.ReorderProfileImagesPath, 'put');
    if (params) {

      rb.path('user', params.user, {});
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
   * Changes the order of a user's profile images.
   *
   * The new order is defined by the list of ids, so that images appear in the same order as the ids.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reorderProfileImages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reorderProfileImages(params: {

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
     * The array of ids (comma-separated) reflecting the desired order
     */
    ids: Array<string>;

  }): Observable<void> {

    return this.reorderProfileImages$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation listTempImages
   */
  static readonly ListTempImagesPath = '/images/temp';

  /**
   * Lists temporary images related to the currently authenticated user or guest.
   *
   * Returns all uploaded temporary images by the current user, or guest key. If the current request is as guest and no guest key is given, the IP address is used to match images. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, images won't be correctly matched without a key.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTempImages()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTempImages$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Filter by target usage
     */
    target?: TempImageTargetEnum;

    /**
     * This parameter is only taken into account if the current request is running as guest. It is the key passed by the client when uploading images. If no key is given, images are matched by remote address.
     */
    guestKey?: string;

    /**
     * If the target is &#x60;userProfile&#x60; or &#x60;advertisement&#x60;, must be either the id or an identification method of the target user (or advertisement owner).
     */
    user?: string;

    /**
     * If the temp image will be used as the value of a custom field of type image then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;

  }): Observable<StrictHttpResponse<Array<Image>>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.ListTempImagesPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('target', params.target, {});
      rb.query('guestKey', params.guestKey, {});
      rb.query('user', params.user, {});
      rb.query('customField', params.customField, {});
      rb.query('customFieldKind', params.customFieldKind, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Image>>;
      })
    );
  }

  /**
   * Lists temporary images related to the currently authenticated user or guest.
   *
   * Returns all uploaded temporary images by the current user, or guest key. If the current request is as guest and no guest key is given, the IP address is used to match images. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, images won't be correctly matched without a key.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listTempImages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTempImages(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Filter by target usage
     */
    target?: TempImageTargetEnum;

    /**
     * This parameter is only taken into account if the current request is running as guest. It is the key passed by the client when uploading images. If no key is given, images are matched by remote address.
     */
    guestKey?: string;

    /**
     * If the target is &#x60;userProfile&#x60; or &#x60;advertisement&#x60;, must be either the id or an identification method of the target user (or advertisement owner).
     */
    user?: string;

    /**
     * If the temp image will be used as the value of a custom field of type image then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;

  }): Observable<Array<Image>> {

    return this.listTempImages$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Image>>) => r.body as Array<Image>)
    );
  }

  /**
   * Path part for operation uploadTempImage
   */
  static readonly UploadTempImagePath = '/images/temp';

  /**
   * Adds a new temporary image for the currently authenticated user or guest.
   *
   * Uploads a new temporary image. A temporary image should be given a target, which can be:
   *
   *
   * - `userRegistration`: The image will be used as
   *   a profile image for a newly registered user;
   *
   * - `userProfile`: The image will be used as a
   *   profile image for an existing user;
   *
   * - `advertisement`: The image will be used for an advertisement of a specific user;
   * - `customValue`: The image will be used for a value of a specific custom field.
   *
   * Temporary images won't be immediately associated to the next registered model, but its `id`, which is returned by this operation, must be explicitly passed in, either as the `images` field (for profile or advertisement images) or in the `customValues` field of the model that has custom values (multiple ids can be passed-in as pipe-separated).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadTempImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadTempImage$Response(params?: {

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;

    /**
     * The target usage for this temporary image
     */
    target?: TempImageTargetEnum;

    /**
     * This parameter is only taken into account if the current request is running as guest. It should be a reasonably unique key (for example, an UUID, device identifier or a reasonably large random string) which uniquely identifies the uploaded image as belonging to this &quot;session&quot;. If no key is given, images uploaded as guest are matched by IP address. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, images won&#x27;t be correctly matched without a key.
     */
    guestKey?: string;

    /**
     * If the target is &#x60;userProfile&#x60; or &#x60;advertisement&#x60;, must be either the id or an identification method of the target user (or advertisement owner).
     */
    user?: string;

    /**
     * If the temp image will be used as the value of a custom field of type image then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;
      body?: { 'image'?: Blob }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.UploadTempImagePath, 'post');
    if (params) {

      rb.query('name', params.name, {});
      rb.query('target', params.target, {});
      rb.query('guestKey', params.guestKey, {});
      rb.query('user', params.user, {});
      rb.query('customField', params.customField, {});
      rb.query('customFieldKind', params.customFieldKind, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Adds a new temporary image for the currently authenticated user or guest.
   *
   * Uploads a new temporary image. A temporary image should be given a target, which can be:
   *
   *
   * - `userRegistration`: The image will be used as
   *   a profile image for a newly registered user;
   *
   * - `userProfile`: The image will be used as a
   *   profile image for an existing user;
   *
   * - `advertisement`: The image will be used for an advertisement of a specific user;
   * - `customValue`: The image will be used for a value of a specific custom field.
   *
   * Temporary images won't be immediately associated to the next registered model, but its `id`, which is returned by this operation, must be explicitly passed in, either as the `images` field (for profile or advertisement images) or in the `customValues` field of the model that has custom values (multiple ids can be passed-in as pipe-separated).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadTempImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadTempImage(params?: {

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;

    /**
     * The target usage for this temporary image
     */
    target?: TempImageTargetEnum;

    /**
     * This parameter is only taken into account if the current request is running as guest. It should be a reasonably unique key (for example, an UUID, device identifier or a reasonably large random string) which uniquely identifies the uploaded image as belonging to this &quot;session&quot;. If no key is given, images uploaded as guest are matched by IP address. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, images won&#x27;t be correctly matched without a key.
     */
    guestKey?: string;

    /**
     * If the target is &#x60;userProfile&#x60; or &#x60;advertisement&#x60;, must be either the id or an identification method of the target user (or advertisement owner).
     */
    user?: string;

    /**
     * If the temp image will be used as the value of a custom field of type image then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;
      body?: { 'image'?: Blob }
  }): Observable<string> {

    return this.uploadTempImage$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getSystemCustomImagesListData
   */
  static readonly GetSystemCustomImagesListDataPath = '/system-images/list-data';

  /**
   * Returns data containing the system custom images, as well as categories.
   *
   * Contains each image category, as well as permissions over system custom images.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSystemCustomImagesListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemCustomImagesListData$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<SystemImagesListData>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.GetSystemCustomImagesListDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SystemImagesListData>;
      })
    );
  }

  /**
   * Returns data containing the system custom images, as well as categories.
   *
   * Contains each image category, as well as permissions over system custom images.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSystemCustomImagesListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemCustomImagesListData(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<SystemImagesListData> {

    return this.getSystemCustomImagesListData$Response(params).pipe(
      map((r: StrictHttpResponse<SystemImagesListData>) => r.body as SystemImagesListData)
    );
  }

  /**
   * Path part for operation uploadSystemCustomImage
   */
  static readonly UploadSystemCustomImagePath = '/system-images/{category}';

  /**
   * Adds a new system custom image under a given category.
   *
   * In order to upload, administrators need management permission over this specific category. These images can be used, for example, in rich text content edited by administrators.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadSystemCustomImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadSystemCustomImage$Response(params: {

    /**
     * The system image category id or internal name
     */
    category: string;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.UploadSystemCustomImagePath, 'post');
    if (params) {

      rb.path('category', params.category, {});
      rb.query('name', params.name, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Adds a new system custom image under a given category.
   *
   * In order to upload, administrators need management permission over this specific category. These images can be used, for example, in rich text content edited by administrators.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadSystemCustomImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadSystemCustomImage(params: {

    /**
     * The system image category id or internal name
     */
    category: string;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<string> {

    return this.uploadSystemCustomImage$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getAdImagesListData
   */
  static readonly GetAdImagesListDataPath = '/marketplace/{ad}/images/list-data';

  /**
   * Returns the images of an advertisement, plus additional permissions and data.
   *
   * Returns the images of an advertisement. Additional data, such as the maximum images and whether the images can be managed by the authenticated user are also returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdImagesListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdImagesListData$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<ImagesListData>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.GetAdImagesListDataPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImagesListData>;
      })
    );
  }

  /**
   * Returns the images of an advertisement, plus additional permissions and data.
   *
   * Returns the images of an advertisement. Additional data, such as the maximum images and whether the images can be managed by the authenticated user are also returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdImagesListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdImagesListData(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<ImagesListData> {

    return this.getAdImagesListData$Response(params).pipe(
      map((r: StrictHttpResponse<ImagesListData>) => r.body as ImagesListData)
    );
  }

  /**
   * Path part for operation listAdImages
   */
  static readonly ListAdImagesPath = '/marketplace/{ad}/images';

  /**
   * Lists the images of an advertisement.
   *
   * Returns the images of an advertisement.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAdImages()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAdImages$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<Array<Image>>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.ListAdImagesPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Image>>;
      })
    );
  }

  /**
   * Lists the images of an advertisement.
   *
   * Returns the images of an advertisement.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listAdImages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAdImages(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<Array<Image>> {

    return this.listAdImages$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Image>>) => r.body as Array<Image>)
    );
  }

  /**
   * Path part for operation uploadAdImage
   */
  static readonly UploadAdImagePath = '/marketplace/{ad}/images';

  /**
   * Adds a new image for the given advertisement.
   *
   * Uploads a new image for the given advertisement.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadAdImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadAdImage$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.UploadAdImagePath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});
      rb.query('name', params.name, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Adds a new image for the given advertisement.
   *
   * Uploads a new image for the given advertisement.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadAdImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadAdImage(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<string> {

    return this.uploadAdImage$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation reorderAdImages
   */
  static readonly ReorderAdImagesPath = '/marketplace/{ad}/images/order';

  /**
   * Changes the order of the images of an advertisement.
   *
   * The new order is defined by the list of ids, so that images appear in the same order as the ids.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reorderAdImages()` instead.
   *
   * This method doesn't expect any request body.
   */
  reorderAdImages$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The array of ids (comma-separated) reflecting the desired order
     */
    ids: Array<string>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.ReorderAdImagesPath, 'put');
    if (params) {

      rb.path('ad', params.ad, {});
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
   * Changes the order of the images of an advertisement.
   *
   * The new order is defined by the list of ids, so that images appear in the same order as the ids.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reorderAdImages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reorderAdImages(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * The array of ids (comma-separated) reflecting the desired order
     */
    ids: Array<string>;

  }): Observable<void> {

    return this.reorderAdImages$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation uploadContactInfoImage
   */
  static readonly UploadContactInfoImagePath = '/contact-infos/{id}/image';

  /**
   * Uploads a new image for the given additional contact information.
   *
   * Saves the given image for the additional contact information. If the given additional contact information already has an image, the old one is removed, and the current image is saved in its place.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadContactInfoImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadContactInfoImage$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ImagesService.UploadContactInfoImagePath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('name', params.name, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Uploads a new image for the given additional contact information.
   *
   * Saves the given image for the additional contact information. If the given additional contact information already has an image, the old one is removed, and the current image is saved in its place.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadContactInfoImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadContactInfoImage(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The name for the new image. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'image'?: Blob }
  }): Observable<string> {

    return this.uploadContactInfoImage$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
