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
import { StoredFile } from '../models/stored-file';


/**
 * Provides access to raw files, maily used to interact with custom field values of type file.
 */
@Injectable({
  providedIn: 'root',
})
export class FilesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getRawFileContent
   */
  static readonly GetRawFileContentPath = '/files/{id}/content';

  /**
   * Returns the content of a raw file (temp or custom field value).
   *
   * Returns the content of either a temporary or a custom field value file
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRawFileContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRawFileContent$Response(params: {

    /**
     * The file identifier
     */
    id: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.GetRawFileContentPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Returns the content of a raw file (temp or custom field value).
   *
   * Returns the content of either a temporary or a custom field value file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRawFileContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRawFileContent(params: {

    /**
     * The file identifier
     */
    id: string;

  }): Observable<Blob> {

    return this.getRawFileContent$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation viewRawFile
   */
  static readonly ViewRawFilePath = '/files/{id}';

  /**
   * Returns a file details by id.
   *
   * Returns metadata about a file given its id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewRawFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewRawFile$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<StoredFile>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.ViewRawFilePath, 'get');
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
        return r as StrictHttpResponse<StoredFile>;
      })
    );
  }

  /**
   * Returns a file details by id.
   *
   * Returns metadata about a file given its id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewRawFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewRawFile(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StoredFile> {

    return this.viewRawFile$Response(params).pipe(
      map((r: StrictHttpResponse<StoredFile>) => r.body as StoredFile)
    );
  }

  /**
   * Path part for operation deleteRawFile
   */
  static readonly DeleteRawFilePath = '/files/{id}';

  /**
   * Removes a file by id.
   *
   * Removes the file with id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRawFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRawFile$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.DeleteRawFilePath, 'delete');
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
   * Removes a file by id.
   *
   * Removes the file with id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteRawFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRawFile(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteRawFile$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation listTempFiles
   */
  static readonly ListTempFilesPath = '/files/temp';

  /**
   * Lists temporary files related to the currently authenticated user or guest.
   *
   * Returns all uploaded temporary files by the current user, or guest key. If the current request is as guest and no guest key is given, the IP  address is used to match files. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, files won't be correctly matched without a key.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTempFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTempFiles$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * This parameter is only taken into account if the current request is running as guest. It is the key passed by the client when uploading files. If no key is given, files are matched by remote address.
     */
    guestKey?: string;

    /**
     * If the temp file will be used as the value of a custom field of type file then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;

  }): Observable<StrictHttpResponse<Array<StoredFile>>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.ListTempFilesPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('guestKey', params.guestKey, {});
      rb.query('customField', params.customField, {});
      rb.query('customFieldKind', params.customFieldKind, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StoredFile>>;
      })
    );
  }

  /**
   * Lists temporary files related to the currently authenticated user or guest.
   *
   * Returns all uploaded temporary files by the current user, or guest key. If the current request is as guest and no guest key is given, the IP  address is used to match files. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, files won't be correctly matched without a key.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listTempFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTempFiles(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * This parameter is only taken into account if the current request is running as guest. It is the key passed by the client when uploading files. If no key is given, files are matched by remote address.
     */
    guestKey?: string;

    /**
     * If the temp file will be used as the value of a custom field of type file then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;

  }): Observable<Array<StoredFile>> {

    return this.listTempFiles$Response(params).pipe(
      map((r: StrictHttpResponse<Array<StoredFile>>) => r.body as Array<StoredFile>)
    );
  }

  /**
   * Path part for operation uploadTempFile
   */
  static readonly UploadTempFilePath = '/files/temp';

  /**
   * Adds a new temporary file for the currently authenticated user or guest.
   *
   * Uploads a new temporary file. The returned id can later be used as value of a custom field of type file.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadTempFile()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadTempFile$Response(params?: {

    /**
     * The name for the new file. If not informed will fall back to the original file name in the form data
     */
    name?: string;

    /**
     * This parameter is only taken into account if the current request is running as guest. It should be a reasonably unique key (for example, an UUID, device identifier or a reasonably large random string) which uniquely identifies the uploaded file as belonging to this &quot;session&quot;. If no key is given, files uploaded as guest are matched by IP address. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, files won&#x27;t be correctly matched without a key.
     */
    guestKey?: string;

    /**
     * If the temp file will be used as the value of a custom field of type file then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;
      body?: { 'file'?: Blob }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.UploadTempFilePath, 'post');
    if (params) {

      rb.query('name', params.name, {});
      rb.query('guestKey', params.guestKey, {});
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
   * Adds a new temporary file for the currently authenticated user or guest.
   *
   * Uploads a new temporary file. The returned id can later be used as value of a custom field of type file.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadTempFile$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadTempFile(params?: {

    /**
     * The name for the new file. If not informed will fall back to the original file name in the form data
     */
    name?: string;

    /**
     * This parameter is only taken into account if the current request is running as guest. It should be a reasonably unique key (for example, an UUID, device identifier or a reasonably large random string) which uniquely identifies the uploaded file as belonging to this &quot;session&quot;. If no key is given, files uploaded as guest are matched by IP address. Using a key is recommended, because clients that move between WiFi and mobile connection or if the client is in a network with multiple outbound IP addresses, files won&#x27;t be correctly matched without a key.
     */
    guestKey?: string;

    /**
     * If the temp file will be used as the value of a custom field of type file then the corresponding custom field must be given (id or internal name). Otherwise this paremeter will be ignored.
     */
    customField?: string;

    /**
     * If a custom field is given then its kind must be given too to allow find it.
     */
    customFieldKind?: CustomFieldKind;
      body?: { 'file'?: Blob }
  }): Observable<string> {

    return this.uploadTempFile$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
