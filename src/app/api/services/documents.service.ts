/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DataForDynamicDocument } from '../models/data-for-dynamic-document';
import { Document } from '../models/document';
import { DocumentDataForEdit } from '../models/document-data-for-edit';
import { DocumentDataForNew } from '../models/document-data-for-new';
import { DocumentDataForSearch } from '../models/document-data-for-search';
import { DocumentEdit } from '../models/document-edit';
import { DocumentNew } from '../models/document-new';
import { DocumentRangeEnum } from '../models/document-range-enum';
import { DocumentResult } from '../models/document-result';
import { DocumentView } from '../models/document-view';
import { ProcessDynamicDocument } from '../models/process-dynamic-document';


/**
 * Provides access to documents, which can be shared or individual.
 */
@Injectable({
  providedIn: 'root',
})
export class DocumentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDocumentsDataForSearch
   */
  static readonly GetDocumentsDataForSearchPath = '/documents/data-for-search';

  /**
   * Returns configuration data for searching documents.
   *
   * Returns configuration data for searching documents.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDocumentsDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocumentsDataForSearch$Response(params?: {

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
    user?: string;

  }): Observable<StrictHttpResponse<DocumentDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetDocumentsDataForSearchPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentDataForSearch>;
      })
    );
  }

  /**
   * Returns configuration data for searching documents.
   *
   * Returns configuration data for searching documents.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDocumentsDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocumentsDataForSearch(params?: {

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
    user?: string;

  }): Observable<DocumentDataForSearch> {

    return this.getDocumentsDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentDataForSearch>) => r.body as DocumentDataForSearch)
    );
  }

  /**
   * Path part for operation searchDocuments
   */
  static readonly SearchDocumentsPath = '/documents';

  /**
   * General documents search.
   *
   * Searches for documents, which might be both shared and individual documents
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchDocuments$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the ids or identification methods of individual document owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * The shared document categories
     */
    categories?: Array<string>;

    /**
     * Only used if the logged user can manage documents. When set, filters documents by their &#x60;enabled&#x60; status, either &#x60;true&#x60; or &#x60;false&#x60;.
     */
    enabled?: boolean;

    /**
     * Either the ids or internal names of individual document owners&#x27; group
     */
    groups?: Array<string>;

    /**
     * Used to filter documents containing that keywords in the the name or description (case insensitive)
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;
    range?: DocumentRangeEnum;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Either the id or identifier of the document owner
     */
    user?: string;

  }): Observable<StrictHttpResponse<Array<DocumentResult>>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.SearchDocumentsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('brokers', params.brokers, {});
      rb.query('categories', params.categories, {});
      rb.query('enabled', params.enabled, {});
      rb.query('groups', params.groups, {});
      rb.query('keywords', params.keywords, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('range', params.range, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DocumentResult>>;
      })
    );
  }

  /**
   * General documents search.
   *
   * Searches for documents, which might be both shared and individual documents
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchDocuments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchDocuments(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either the ids or identification methods of individual document owners&#x27; brokers
     */
    brokers?: Array<string>;

    /**
     * The shared document categories
     */
    categories?: Array<string>;

    /**
     * Only used if the logged user can manage documents. When set, filters documents by their &#x60;enabled&#x60; status, either &#x60;true&#x60; or &#x60;false&#x60;.
     */
    enabled?: boolean;

    /**
     * Either the ids or internal names of individual document owners&#x27; group
     */
    groups?: Array<string>;

    /**
     * Used to filter documents containing that keywords in the the name or description (case insensitive)
     */
    keywords?: string;

    /**
     * The page number (zero-based) of the search. The default value is zero.
     */
    page?: number;

    /**
     * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
     */
    pageSize?: number;
    range?: DocumentRangeEnum;

    /**
     * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn&#x27;t need it, setting this to true can increase performance a bit.
     */
    skipTotalCount?: boolean;

    /**
     * Either the id or identifier of the document owner
     */
    user?: string;

  }): Observable<Array<DocumentResult>> {

    return this.searchDocuments$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DocumentResult>>) => r.body as Array<DocumentResult>)
    );
  }

  /**
   * Path part for operation createSharedDocument
   */
  static readonly CreateSharedDocumentPath = '/documents';

  /**
   * Creates a new static shared document.
   *
   * Creates a new static shared document.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSharedDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSharedDocument$Response(params: {
  
    /**
     * The document to be created
     */
    body: DocumentNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.CreateSharedDocumentPath, 'post');
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
   * Creates a new static shared document.
   *
   * Creates a new static shared document.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createSharedDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSharedDocument(params: {
  
    /**
     * The document to be created
     */
    body: DocumentNew
  }): Observable<string> {

    return this.createSharedDocument$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createSharedDocumentWithUpload
   */
  static readonly CreateSharedDocumentWithUploadPath = '/documents/upload';

  /**
   * Creates a new static shared document with a file.
   *
   * Creates a new static shared document and saves the content of the file.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSharedDocumentWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createSharedDocumentWithUpload$Response(params?: {
      body?: { 'document'?: DocumentNew, 'file': Blob, 'fileName'?: string }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.CreateSharedDocumentWithUploadPath, 'post');
    if (params) {


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
   * Creates a new static shared document with a file.
   *
   * Creates a new static shared document and saves the content of the file.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createSharedDocumentWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createSharedDocumentWithUpload(params?: {
      body?: { 'document'?: DocumentNew, 'file': Blob, 'fileName'?: string }
  }): Observable<string> {

    return this.createSharedDocumentWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getSharedDocumentDataForNew
   */
  static readonly GetSharedDocumentDataForNewPath = '/documents/data-for-new';

  /**
   * Returns data to create a new shared static document.
   *
   * Returns configuration data for creating a new document of kind `static`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSharedDocumentDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSharedDocumentDataForNew$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DocumentDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetSharedDocumentDataForNewPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentDataForNew>;
      })
    );
  }

  /**
   * Returns data to create a new shared static document.
   *
   * Returns configuration data for creating a new document of kind `static`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSharedDocumentDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSharedDocumentDataForNew(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DocumentDataForNew> {

    return this.getSharedDocumentDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentDataForNew>) => r.body as DocumentDataForNew)
    );
  }

  /**
   * Path part for operation viewDocument
   */
  static readonly ViewDocumentPath = '/documents/{id}';

  /**
   * Returns details of a specific document.
   *
   * Returns details of a specific document.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewDocument$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DocumentView>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.ViewDocumentPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentView>;
      })
    );
  }

  /**
   * Returns details of a specific document.
   *
   * Returns details of a specific document.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewDocument(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DocumentView> {

    return this.viewDocument$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentView>) => r.body as DocumentView)
    );
  }

  /**
   * Path part for operation updateDocument
   */
  static readonly UpdateDocumentPath = '/documents/{id}';

  /**
   * Updates the details of a document.
   *
   * Updates the details of a document.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDocument$Response(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The document to be edited
     */
    body: DocumentEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.UpdateDocumentPath, 'put');
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
   * Updates the details of a document.
   *
   * Updates the details of a document.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDocument(params: {

    /**
     * The object identification
     */
    id: string;
  
    /**
     * The document to be edited
     */
    body: DocumentEdit
  }): Observable<void> {

    return this.updateDocument$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDocument
   */
  static readonly DeleteDocumentPath = '/documents/{id}';

  /**
   * Removes a document.
   *
   * Removes a document.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocument$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.DeleteDocumentPath, 'delete');
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
   * Removes a document.
   *
   * Removes a document.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocument(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteDocument$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateDocumentWithUpload
   */
  static readonly UpdateDocumentWithUploadPath = '/documents/{id}/upload';

  /**
   * Updates the details of a document and the file content.
   *
   * Updates the details of a document and the file content if given. Due to implementation issues was used post for edit a document and upload the file at the same time.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDocumentWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  updateDocumentWithUpload$Response(params: {

    /**
     * The object identification
     */
    id: string;
      body?: { 'document'?: DocumentEdit, 'file': Blob, 'fileName'?: string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.UpdateDocumentWithUploadPath, 'post');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Updates the details of a document and the file content.
   *
   * Updates the details of a document and the file content if given. Due to implementation issues was used post for edit a document and upload the file at the same time.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateDocumentWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  updateDocumentWithUpload(params: {

    /**
     * The object identification
     */
    id: string;
      body?: { 'document'?: DocumentEdit, 'file': Blob, 'fileName'?: string }
  }): Observable<void> {

    return this.updateDocumentWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getDocumentDataForEdit
   */
  static readonly GetDocumentDataForEditPath = '/documents/{id}/data-for-edit';

  /**
   * Returns data to edit an existing document.
   *
   * Returns configuration data for editing a document, plus the current `DocumentEdit` object that can be altered and sent back
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDocumentDataForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocumentDataForEdit$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<DocumentDataForEdit>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetDocumentDataForEditPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentDataForEdit>;
      })
    );
  }

  /**
   * Returns data to edit an existing document.
   *
   * Returns configuration data for editing a document, plus the current `DocumentEdit` object that can be altered and sent back
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDocumentDataForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocumentDataForEdit(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<DocumentDataForEdit> {

    return this.getDocumentDataForEdit$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentDataForEdit>) => r.body as DocumentDataForEdit)
    );
  }

  /**
   * Path part for operation downloadDocumentFile
   */
  static readonly DownloadDocumentFilePath = '/documents/{id}/file';

  /**
   * Returns the content of the document file.
   *
   * The document `kind` must be either `static` or `user`. Otherwise a 404 status is returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadDocumentFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadDocumentFile$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.DownloadDocumentFilePath, 'get');
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
   * Returns the content of the document file.
   *
   * The document `kind` must be either `static` or `user`. Otherwise a 404 status is returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `downloadDocumentFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadDocumentFile(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<Blob> {

    return this.downloadDocumentFile$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation uploadDocumentFile
   */
  static readonly UploadDocumentFilePath = '/documents/{id}/file';

  /**
   * Saves the content of the document file.
   *
   * The document `kind` must be either `static` or `user`. Otherwise a 404 status is returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadDocumentFile()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadDocumentFile$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The name for the new file. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'file': Blob }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.UploadDocumentFilePath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('name', params.name, {});

      rb.body(params.body, 'multipart/form-data');
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
   * Saves the content of the document file.
   *
   * The document `kind` must be either `static` or `user`. Otherwise a 404 status is returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadDocumentFile$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadDocumentFile(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The name for the new file. If not informed will fall back to the original file name in the form data
     */
    name?: string;
      body?: { 'file': Blob }
  }): Observable<void> {

    return this.uploadDocumentFile$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getDataForDynamicDocument
   */
  static readonly GetDataForDynamicDocumentPath = '/documents/{id}/dynamic/{user}';

  /**
   * Returns data to process a dynamic document.
   *
   * Returns the fields that can be used to process a dynamic document for the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataForDynamicDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForDynamicDocument$Response(params: {

    /**
     * The object identification
     */
    id: string;

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

  }): Observable<StrictHttpResponse<DataForDynamicDocument>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetDataForDynamicDocumentPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.path('user', params.user, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForDynamicDocument>;
      })
    );
  }

  /**
   * Returns data to process a dynamic document.
   *
   * Returns the fields that can be used to process a dynamic document for the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataForDynamicDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataForDynamicDocument(params: {

    /**
     * The object identification
     */
    id: string;

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

  }): Observable<DataForDynamicDocument> {

    return this.getDataForDynamicDocument$Response(params).pipe(
      map((r: StrictHttpResponse<DataForDynamicDocument>) => r.body as DataForDynamicDocument)
    );
  }

  /**
   * Path part for operation processDynamicDocument
   */
  static readonly ProcessDynamicDocumentPath = '/documents/{id}/dynamic/{user}';

  /**
   * Processes a dynamic document.
   *
   * Generates the HTML content which is the result of processing a dynamic document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processDynamicDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  processDynamicDocument$Response(params: {

    /**
     * The object identification
     */
    id: string;

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
     * The form fields
     */
    body?: ProcessDynamicDocument
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.ProcessDynamicDocumentPath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.path('user', params.user, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/html'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Processes a dynamic document.
   *
   * Generates the HTML content which is the result of processing a dynamic document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `processDynamicDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  processDynamicDocument(params: {

    /**
     * The object identification
     */
    id: string;

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
     * The form fields
     */
    body?: ProcessDynamicDocument
  }): Observable<string> {

    return this.processDynamicDocument$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation listUserDocuments
   */
  static readonly ListUserDocumentsPath = '/{user}/documents';

  /**
   * Lists the enabled documents for the given user.
   *
   * Lists the enabled documents for the given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listUserDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserDocuments$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<Document>>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.ListUserDocumentsPath, 'get');
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
        return r as StrictHttpResponse<Array<Document>>;
      })
    );
  }

  /**
   * Lists the enabled documents for the given user.
   *
   * Lists the enabled documents for the given user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listUserDocuments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserDocuments(params: {

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

  }): Observable<Array<Document>> {

    return this.listUserDocuments$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Document>>) => r.body as Array<Document>)
    );
  }

  /**
   * Path part for operation createUserDocument
   */
  static readonly CreateUserDocumentPath = '/{user}/documents';

  /**
   * Creates a new individual document for the given user.
   *
   * Creates a new individual document for the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUserDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUserDocument$Response(params: {

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
     * The document to be created
     */
    body: DocumentNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.CreateUserDocumentPath, 'post');
    if (params) {

      rb.path('user', params.user, {});

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
   * Creates a new individual document for the given user.
   *
   * Creates a new individual document for the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUserDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUserDocument(params: {

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
     * The document to be created
     */
    body: DocumentNew
  }): Observable<string> {

    return this.createUserDocument$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createUserDocumentWithUpload
   */
  static readonly CreateUserDocumentWithUploadPath = '/{user}/documents/upload';

  /**
   * Creates a new individual document for the given user with a file.
   *
   * Creates a new individual document for the given user and saves the content of the file.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUserDocumentWithUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createUserDocumentWithUpload$Response(params: {

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
      body?: { 'document'?: DocumentNew, 'file': Blob, 'fileName'?: string }
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.CreateUserDocumentWithUploadPath, 'post');
    if (params) {

      rb.path('user', params.user, {});

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
   * Creates a new individual document for the given user with a file.
   *
   * Creates a new individual document for the given user and saves the content of the file.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUserDocumentWithUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createUserDocumentWithUpload(params: {

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
      body?: { 'document'?: DocumentNew, 'file': Blob, 'fileName'?: string }
  }): Observable<string> {

    return this.createUserDocumentWithUpload$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getUserDocumentDataForNew
   */
  static readonly GetUserDocumentDataForNewPath = '/{user}/documents/data-for-new';

  /**
   * Returns data to create a new shared individual document.
   *
   * Returns configuration data for creating a new document of kind `user` for the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserDocumentDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDocumentDataForNew$Response(params: {

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

  }): Observable<StrictHttpResponse<DocumentDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetUserDocumentDataForNewPath, 'get');
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
        return r as StrictHttpResponse<DocumentDataForNew>;
      })
    );
  }

  /**
   * Returns data to create a new shared individual document.
   *
   * Returns configuration data for creating a new document of kind `user` for the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserDocumentDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDocumentDataForNew(params: {

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

  }): Observable<DocumentDataForNew> {

    return this.getUserDocumentDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentDataForNew>) => r.body as DocumentDataForNew)
    );
  }

}
