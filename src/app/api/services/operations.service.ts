/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { HttpRequestData } from '../models/http-request-data';
import { Operation } from '../models/operation';
import { OperationDataForRun } from '../models/operation-data-for-run';
import { RunOperation } from '../models/run-operation';
import { RunOperationResult } from '../models/run-operation-result';


/**
 * Provides access to custom operations
 */
@Injectable({
  providedIn: 'root',
})
export class OperationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listOperationsByOwner
   */
  static readonly ListOperationsByOwnerPath = '/{owner}/operations';

  /**
   * Lists the custom operations over the system or user.
   *
   * Returns the custom operations the authenticated user can run over the given user or system if the `system` owner is used.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOperationsByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByOwner$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

  }): Observable<StrictHttpResponse<Array<Operation>>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.ListOperationsByOwnerPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Operation>>;
      })
    );
  }

  /**
   * Lists the custom operations over the system or user.
   *
   * Returns the custom operations the authenticated user can run over the given user or system if the `system` owner is used.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOperationsByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByOwner(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

  }): Observable<Array<Operation>> {

    return this.listOperationsByOwner$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Operation>>) => r.body as Array<Operation>)
    );
  }

  /**
   * Path part for operation getOwnerOperationDataForRun
   */
  static readonly GetOwnerOperationDataForRunPath = '/{owner}/operations/{operation}/data-for-run';

  /**
   * Returns configuration data for running a custom operation over an owner.
   *
   * Returns data to run a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnerOperationDataForRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerOperationDataForRun$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<StrictHttpResponse<OperationDataForRun>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.GetOwnerOperationDataForRunPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('operation', params.operation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperationDataForRun>;
      })
    );
  }

  /**
   * Returns configuration data for running a custom operation over an owner.
   *
   * Returns data to run a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnerOperationDataForRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerOperationDataForRun(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<OperationDataForRun> {

    return this.getOwnerOperationDataForRun$Response(params).pipe(
      map((r: StrictHttpResponse<OperationDataForRun>) => r.body as OperationDataForRun)
    );
  }

  /**
   * Path part for operation runOwnerOperation
   */
  static readonly RunOwnerOperationPath = '/{owner}/operations/{operation}/run';

  /**
   * Runs a custom operation either for system or user.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOwnerOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOwnerOperation$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOwnerOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation either for system or user.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOwnerOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOwnerOperation(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<RunOperationResult> {

    return this.runOwnerOperation$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation either for system or user.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOwnerOperation$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOwnerOperation$Any$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOwnerOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
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
   * Runs a custom operation either for system or user.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOwnerOperation$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOwnerOperation$Any(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<Blob> {

    return this.runOwnerOperation$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runOwnerOperationWithUpload
   */
  static readonly RunOwnerOperationWithUploadPath = '/{owner}/operations/{operation}/run-upload';

  /**
   * Runs a custom operation either for system or user while uploading a file.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOwnerOperationWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOwnerOperationWithUpload$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOwnerOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation either for system or user while uploading a file.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOwnerOperationWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOwnerOperationWithUpload(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<RunOperationResult> {

    return this.runOwnerOperationWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation either for system or user while uploading a file.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOwnerOperationWithUpload$Any()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOwnerOperationWithUpload$Any$Response(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOwnerOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('owner', params.owner, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Runs a custom operation either for system or user while uploading a file.
   *
   * Runs a specific custom operation over a given user or system if the `system` owner is used. The operation scope must match, being either `system` or `user`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOwnerOperationWithUpload$Any$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOwnerOperationWithUpload$Any(params: {

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
     * -  &#x60;self&#x60; for the currently authenticated user;
     * - &#x60;system&#x60; for the system owner.
     */
    owner: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<Blob> {

    return this.runOwnerOperationWithUpload$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getOperationDataForRun
   */
  static readonly GetOperationDataForRunPath = '/operations/{operation}/data-for-run';

  /**
   * Returns configuration data for running a custom operation without additional scope.
   *
   * Returns data to run a specific custom operation, which must not have any additional scope to run, such as user, contact, record or advertisement. Hence, this path is suitable for custom operations with scope `system` or `internal`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperationDataForRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationDataForRun$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<StrictHttpResponse<OperationDataForRun>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.GetOperationDataForRunPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('operation', params.operation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperationDataForRun>;
      })
    );
  }

  /**
   * Returns configuration data for running a custom operation without additional scope.
   *
   * Returns data to run a specific custom operation, which must not have any additional scope to run, such as user, contact, record or advertisement. Hence, this path is suitable for custom operations with scope `system` or `internal`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOperationDataForRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationDataForRun(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<OperationDataForRun> {

    return this.getOperationDataForRun$Response(params).pipe(
      map((r: StrictHttpResponse<OperationDataForRun>) => r.body as OperationDataForRun)
    );
  }

  /**
   * Path part for operation runOperation
   */
  static readonly RunOperationPath = '/operations/{operation}/run';

  /**
   * Runs a custom operation without additional scope.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOperation$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation without additional scope.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOperation(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<RunOperationResult> {

    return this.runOperation$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation without additional scope.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOperation$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOperation$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
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
   * Runs a custom operation without additional scope.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOperation$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runOperation$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<Blob> {

    return this.runOperation$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runOperationWithUpload
   */
  static readonly RunOperationWithUploadPath = '/operations/{operation}/run-upload';

  /**
   * Runs a custom operation without additional scope while uploading a file.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOperationWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOperationWithUpload$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation without additional scope while uploading a file.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOperationWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOperationWithUpload(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<RunOperationResult> {

    return this.runOperationWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation without additional scope while uploading a file.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runOperationWithUpload$Any()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOperationWithUpload$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Runs a custom operation without additional scope while uploading a file.
   *
   * Runs a specific custom operation without additional scope. Is suitable for operations with scope `system` or `internal`.  This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runOperationWithUpload$Any$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runOperationWithUpload$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<Blob> {

    return this.runOperationWithUpload$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runCustomOperationCallback
   */
  static readonly RunCustomOperationCallbackPath = '/operations/callback/{id}';

  /**
   * Runs the callback of an external redirect custom operation.
   *
   * Custom operations may be configured in Cyclos to be of result type `externalRedirect`. In such case, the regular execution returns an URL to which redirect clients. Once the external page processing is complete, the user is redirected back, so the operation can be completed. This operation should be executed to complete the payment. In order for the external service receive the correct URL, Cyclos need to have a link generation script that handles the link type `EXTERNAL_REDIRECT`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runCustomOperationCallback()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runCustomOperationCallback$Response(params: {

    /**
     * The external redirect identifier. Received as part of the URL which is generated by Cyclos to the external service to use as callback.
     */
    id: string;

    /**
     * The security token which is received as part of the URL which is generated by Cyclos to the external service to use as callback.
     */
    token?: string;
  
    /**
     * Data of the original callback request sent by the external service
     */
    body?: HttpRequestData
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunCustomOperationCallbackPath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('token', params.token, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs the callback of an external redirect custom operation.
   *
   * Custom operations may be configured in Cyclos to be of result type `externalRedirect`. In such case, the regular execution returns an URL to which redirect clients. Once the external page processing is complete, the user is redirected back, so the operation can be completed. This operation should be executed to complete the payment. In order for the external service receive the correct URL, Cyclos need to have a link generation script that handles the link type `EXTERNAL_REDIRECT`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runCustomOperationCallback$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runCustomOperationCallback(params: {

    /**
     * The external redirect identifier. Received as part of the URL which is generated by Cyclos to the external service to use as callback.
     */
    id: string;

    /**
     * The security token which is received as part of the URL which is generated by Cyclos to the external service to use as callback.
     */
    token?: string;
  
    /**
     * Data of the original callback request sent by the external service
     */
    body?: HttpRequestData
  }): Observable<RunOperationResult> {

    return this.runCustomOperationCallback$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Path part for operation listOperationsByAd
   */
  static readonly ListOperationsByAdPath = '/marketplace/{ad}/operations';

  /**
   * Lists the custom operations over the given advertisement.
   *
   * Returns the custom operations the authenticated user can run over the given advertisement. All returned operations have the scope `advertisement`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOperationsByAd()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByAd$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<StrictHttpResponse<Array<Operation>>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.ListOperationsByAdPath, 'get');
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
        return r as StrictHttpResponse<Array<Operation>>;
      })
    );
  }

  /**
   * Lists the custom operations over the given advertisement.
   *
   * Returns the custom operations the authenticated user can run over the given advertisement. All returned operations have the scope `advertisement`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOperationsByAd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByAd(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

  }): Observable<Array<Operation>> {

    return this.listOperationsByAd$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Operation>>) => r.body as Array<Operation>)
    );
  }

  /**
   * Path part for operation getAdOperationDataForRun
   */
  static readonly GetAdOperationDataForRunPath = '/marketplace/{ad}/operations/{operation}/data-for-run';

  /**
   * Returns configuration data for running a custom operation over an advertisement.
   *
   * Returns data to run a specific custom operation over an advertisement. The operation scope must be `advertisement`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdOperationDataForRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdOperationDataForRun$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<StrictHttpResponse<OperationDataForRun>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.GetAdOperationDataForRunPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});
      rb.path('operation', params.operation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperationDataForRun>;
      })
    );
  }

  /**
   * Returns configuration data for running a custom operation over an advertisement.
   *
   * Returns data to run a specific custom operation over an advertisement. The operation scope must be `advertisement`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdOperationDataForRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdOperationDataForRun(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<OperationDataForRun> {

    return this.getAdOperationDataForRun$Response(params).pipe(
      map((r: StrictHttpResponse<OperationDataForRun>) => r.body as OperationDataForRun)
    );
  }

  /**
   * Path part for operation runAdOperation
   */
  static readonly RunAdOperationPath = '/marketplace/{ad}/operations/{operation}/run';

  /**
   * Runs a custom operation over an advertisement.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runAdOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runAdOperation$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunAdOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over an advertisement.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runAdOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runAdOperation(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<RunOperationResult> {

    return this.runAdOperation$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over an advertisement.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runAdOperation$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runAdOperation$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunAdOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
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
   * Runs a custom operation over an advertisement.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runAdOperation$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runAdOperation$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<Blob> {

    return this.runAdOperation$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runAdOperationWithUpload
   */
  static readonly RunAdOperationWithUploadPath = '/marketplace/{ad}/operations/{operation}/run-upload';

  /**
   * Runs a custom operation over an advertisement while uploading a file.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runAdOperationWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runAdOperationWithUpload$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunAdOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over an advertisement while uploading a file.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runAdOperationWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runAdOperationWithUpload(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<RunOperationResult> {

    return this.runAdOperationWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over an advertisement while uploading a file.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runAdOperationWithUpload$Any()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runAdOperationWithUpload$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunAdOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('ad', params.ad, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Runs a custom operation over an advertisement while uploading a file.
   *
   * Runs a specific custom operation over a given advertisement. The operation scope must be `advertisement`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runAdOperationWithUpload$Any$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runAdOperationWithUpload$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<Blob> {

    return this.runAdOperationWithUpload$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation listOperationsByRecord
   */
  static readonly ListOperationsByRecordPath = '/records/{id}/operations';

  /**
   * Lists the custom operations over the given record.
   *
   * Returns the custom operations the authenticated user can run over the given record. All returned operations have the scope `record`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOperationsByRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByRecord$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<Array<Operation>>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.ListOperationsByRecordPath, 'get');
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
        return r as StrictHttpResponse<Array<Operation>>;
      })
    );
  }

  /**
   * Lists the custom operations over the given record.
   *
   * Returns the custom operations the authenticated user can run over the given record. All returned operations have the scope `record`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOperationsByRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByRecord(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<Array<Operation>> {

    return this.listOperationsByRecord$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Operation>>) => r.body as Array<Operation>)
    );
  }

  /**
   * Path part for operation getRecordOperationDataForRun
   */
  static readonly GetRecordOperationDataForRunPath = '/records/{id}/operations/{operation}/data-for-run';

  /**
   * Returns configuration data for running a custom operation over a record.
   *
   * Returns data to run a specific custom operation over a record. The operation scope must be `record`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecordOperationDataForRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordOperationDataForRun$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<StrictHttpResponse<OperationDataForRun>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.GetRecordOperationDataForRunPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperationDataForRun>;
      })
    );
  }

  /**
   * Returns configuration data for running a custom operation over a record.
   *
   * Returns data to run a specific custom operation over a record. The operation scope must be `record`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecordOperationDataForRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecordOperationDataForRun(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<OperationDataForRun> {

    return this.getRecordOperationDataForRun$Response(params).pipe(
      map((r: StrictHttpResponse<OperationDataForRun>) => r.body as OperationDataForRun)
    );
  }

  /**
   * Path part for operation runRecordOperation
   */
  static readonly RunRecordOperationPath = '/records/{id}/operations/{operation}/run';

  /**
   * Runs a custom operation over a record.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runRecordOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runRecordOperation$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunRecordOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over a record.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runRecordOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runRecordOperation(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<RunOperationResult> {

    return this.runRecordOperation$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over a record.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runRecordOperation$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runRecordOperation$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunRecordOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
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
   * Runs a custom operation over a record.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runRecordOperation$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runRecordOperation$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<Blob> {

    return this.runRecordOperation$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runRecordOperationWithUpload
   */
  static readonly RunRecordOperationWithUploadPath = '/records/{id}/operations/{operation}/run-upload';

  /**
   * Runs a custom operation over a record while uploading a file.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runRecordOperationWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runRecordOperationWithUpload$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunRecordOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over a record while uploading a file.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runRecordOperationWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runRecordOperationWithUpload(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<RunOperationResult> {

    return this.runRecordOperationWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over a record while uploading a file.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runRecordOperationWithUpload$Any()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runRecordOperationWithUpload$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunRecordOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Runs a custom operation over a record while uploading a file.
   *
   * Runs a specific custom operation over a given record. The operation scope must be `record`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runRecordOperationWithUpload$Any$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runRecordOperationWithUpload$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<Blob> {

    return this.runRecordOperationWithUpload$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation listOperationsByTransfer
   */
  static readonly ListOperationsByTransferPath = '/transfers/{key}/operations';

  /**
   * Lists the custom operations over the given transfer.
   *
   * Returns the custom operations the authenticated user can run over the given transfer. All returned operations have the scope `transfer`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOperationsByTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByTransfer$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

  }): Observable<StrictHttpResponse<Array<Operation>>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.ListOperationsByTransferPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Operation>>;
      })
    );
  }

  /**
   * Lists the custom operations over the given transfer.
   *
   * Returns the custom operations the authenticated user can run over the given transfer. All returned operations have the scope `transfer`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOperationsByTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByTransfer(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

  }): Observable<Array<Operation>> {

    return this.listOperationsByTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Operation>>) => r.body as Array<Operation>)
    );
  }

  /**
   * Path part for operation getTransferOperationDataForRun
   */
  static readonly GetTransferOperationDataForRunPath = '/transfer/{key}/operations/{operation}/data-for-run';

  /**
   * Returns configuration data for running a custom operation over a transfer.
   *
   * Returns data to run a specific custom operation over a transfer. The operation scope must be `transfer`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTransferOperationDataForRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransferOperationDataForRun$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<StrictHttpResponse<OperationDataForRun>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.GetTransferOperationDataForRunPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});
      rb.path('operation', params.operation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperationDataForRun>;
      })
    );
  }

  /**
   * Returns configuration data for running a custom operation over a transfer.
   *
   * Returns data to run a specific custom operation over a transfer. The operation scope must be `transfer`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTransferOperationDataForRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransferOperationDataForRun(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<OperationDataForRun> {

    return this.getTransferOperationDataForRun$Response(params).pipe(
      map((r: StrictHttpResponse<OperationDataForRun>) => r.body as OperationDataForRun)
    );
  }

  /**
   * Path part for operation runTransferOperation
   */
  static readonly RunTransferOperationPath = '/transfers/{key}/operations/{operation}/run';

  /**
   * Runs a custom operation over a transfer.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runTransferOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runTransferOperation$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunTransferOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over a transfer.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runTransferOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runTransferOperation(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<RunOperationResult> {

    return this.runTransferOperation$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over a transfer.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runTransferOperation$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runTransferOperation$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunTransferOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
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
   * Runs a custom operation over a transfer.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runTransferOperation$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runTransferOperation$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<Blob> {

    return this.runTransferOperation$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runTransferOperationWithUpload
   */
  static readonly RunTransferOperationWithUploadPath = '/transfers/{key}/operations/{operation}/run-upload';

  /**
   * Runs a custom operation over a transfer while uploading a file.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runTransferOperationWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runTransferOperationWithUpload$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunTransferOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over a transfer while uploading a file.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runTransferOperationWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runTransferOperationWithUpload(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<RunOperationResult> {

    return this.runTransferOperationWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over a transfer while uploading a file.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runTransferOperationWithUpload$Any()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runTransferOperationWithUpload$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunTransferOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('key', params.key, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Runs a custom operation over a transfer while uploading a file.
   *
   * Runs a specific custom operation over a given transfer. The operation scope must be `transfer`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runTransferOperationWithUpload$Any$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runTransferOperationWithUpload$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the id or transaction number
     */
    key: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<Blob> {

    return this.runTransferOperationWithUpload$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation listOperationsByContact
   */
  static readonly ListOperationsByContactPath = '/contact-list/{id}/operations';

  /**
   * Lists the custom operations over the given contact.
   *
   * Returns the custom operations the authenticated user can run over the given contact. All returned operations have the scope `contact`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOperationsByContact()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByContact$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<Array<Operation>>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.ListOperationsByContactPath, 'get');
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
        return r as StrictHttpResponse<Array<Operation>>;
      })
    );
  }

  /**
   * Lists the custom operations over the given contact.
   *
   * Returns the custom operations the authenticated user can run over the given contact. All returned operations have the scope `contact`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOperationsByContact$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByContact(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<Array<Operation>> {

    return this.listOperationsByContact$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Operation>>) => r.body as Array<Operation>)
    );
  }

  /**
   * Path part for operation getContactOperationDataForRun
   */
  static readonly GetContactOperationDataForRunPath = '/contact-list/{id}/operations/{operation}/data-for-run';

  /**
   * Returns configuration data for running a custom operation over a contact.
   *
   * Returns data to run a specific custom operation over a contact. The operation scope must be `contact`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactOperationDataForRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactOperationDataForRun$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<StrictHttpResponse<OperationDataForRun>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.GetContactOperationDataForRunPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperationDataForRun>;
      })
    );
  }

  /**
   * Returns configuration data for running a custom operation over a contact.
   *
   * Returns data to run a specific custom operation over a contact. The operation scope must be `contact`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getContactOperationDataForRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactOperationDataForRun(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<OperationDataForRun> {

    return this.getContactOperationDataForRun$Response(params).pipe(
      map((r: StrictHttpResponse<OperationDataForRun>) => r.body as OperationDataForRun)
    );
  }

  /**
   * Path part for operation runContactOperation
   */
  static readonly RunContactOperationPath = '/contact-list/{id}/operations/{operation}/run';

  /**
   * Runs a custom operation over a contact.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactOperation$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over a contact.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactOperation(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<RunOperationResult> {

    return this.runContactOperation$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over a contact.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactOperation$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactOperation$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
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
   * Runs a custom operation over a contact.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactOperation$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactOperation$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<Blob> {

    return this.runContactOperation$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runContactOperationWithUpload
   */
  static readonly RunContactOperationWithUploadPath = '/contact-list/{id}/operations/{operation}/run-upload';

  /**
   * Runs a custom operation over an contact while uploading a file.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactOperationWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactOperationWithUpload$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over an contact while uploading a file.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactOperationWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactOperationWithUpload(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<RunOperationResult> {

    return this.runContactOperationWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over an contact while uploading a file.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactOperationWithUpload$Any()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactOperationWithUpload$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Runs a custom operation over an contact while uploading a file.
   *
   * Runs a specific custom operation over a given contact. The operation scope must be `contact`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactOperationWithUpload$Any$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactOperationWithUpload$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<Blob> {

    return this.runContactOperationWithUpload$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation listOperationsByContactInfo
   */
  static readonly ListOperationsByContactInfoPath = '/contact-infos/{id}/operations';

  /**
   * Lists the custom operations over the given additional contact information.
   *
   * Returns the custom operations the authenticated user can run over the given additional contact iformation. All returned operations have the scope `contactInfo`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOperationsByContactInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByContactInfo$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<Array<Operation>>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.ListOperationsByContactInfoPath, 'get');
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
        return r as StrictHttpResponse<Array<Operation>>;
      })
    );
  }

  /**
   * Lists the custom operations over the given additional contact information.
   *
   * Returns the custom operations the authenticated user can run over the given additional contact iformation. All returned operations have the scope `contactInfo`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOperationsByContactInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOperationsByContactInfo(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<Array<Operation>> {

    return this.listOperationsByContactInfo$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Operation>>) => r.body as Array<Operation>)
    );
  }

  /**
   * Path part for operation getContactInfoOperationDataForRun
   */
  static readonly GetContactInfoOperationDataForRunPath = '/contact-infos/{id}/operations/{operation}/data-for-run';

  /**
   * Returns configuration data for running a custom operation over an additional contact information.
   *
   * Returns data to run a specific custom operation over an additional contact information. The operation scope must be `contactInfo`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactInfoOperationDataForRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactInfoOperationDataForRun$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<StrictHttpResponse<OperationDataForRun>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.GetContactInfoOperationDataForRunPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperationDataForRun>;
      })
    );
  }

  /**
   * Returns configuration data for running a custom operation over an additional contact information.
   *
   * Returns data to run a specific custom operation over an additional contact information. The operation scope must be `contactInfo`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getContactInfoOperationDataForRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactInfoOperationDataForRun(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;

  }): Observable<OperationDataForRun> {

    return this.getContactInfoOperationDataForRun$Response(params).pipe(
      map((r: StrictHttpResponse<OperationDataForRun>) => r.body as OperationDataForRun)
    );
  }

  /**
   * Path part for operation runContactInfoOperation
   */
  static readonly RunContactInfoOperationPath = '/contact-infos/{id}/operations/{operation}/run';

  /**
   * Runs a custom operation over an additional contact information.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactInfoOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactInfoOperation$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactInfoOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over an additional contact information.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactInfoOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactInfoOperation(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<RunOperationResult> {

    return this.runContactInfoOperation$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over an additional contact information.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactInfoOperation$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactInfoOperation$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactInfoOperationPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'application/json');
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
   * Runs a custom operation over an additional contact information.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactInfoOperation$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runContactInfoOperation$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
  
    /**
     * The custom operation parameters
     */
    body?: RunOperation
  }): Observable<Blob> {

    return this.runContactInfoOperation$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation runContactInfoOperationWithUpload
   */
  static readonly RunContactInfoOperationWithUploadPath = '/contact-infos/{id}/operations/{operation}/run-upload';

  /**
   * Runs a custom operation over an additional contact information while uploading a file.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactInfoOperationWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactInfoOperationWithUpload$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<RunOperationResult>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactInfoOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RunOperationResult>;
      })
    );
  }

  /**
   * Runs a custom operation over an additional contact information while uploading a file.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactInfoOperationWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactInfoOperationWithUpload(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<RunOperationResult> {

    return this.runContactInfoOperationWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<RunOperationResult>) => r.body as RunOperationResult)
    );
  }

  /**
   * Runs a custom operation over an additional contact information while uploading a file.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runContactInfoOperationWithUpload$Any()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactInfoOperationWithUpload$Any$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, OperationsService.RunContactInfoOperationWithUploadPath, 'post');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('id', params.id, {});
      rb.path('operation', params.operation, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Runs a custom operation over an additional contact information while uploading a file.
   *
   * Runs a specific custom operation over a given additional contact information. The operation scope must be `contactInfo`. This path allows uploading a file, by using a `multipart-form-data` post. If the operation resulted in a file download (either because the `resultType` is `fileDownload` or is a `resultPage` running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an `application/json` with the result object.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runContactInfoOperationWithUpload$Any$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  runContactInfoOperationWithUpload$Any(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

    /**
     * Either the id or internal name of the custom operation
     */
    operation: string;
      body?: { 'params'?: RunOperation, 'file'?: Blob }
  }): Observable<Blob> {

    return this.runContactInfoOperationWithUpload$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
