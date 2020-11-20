/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AdKind } from '../models/ad-kind';
import { AdQuestionResult } from '../models/ad-question-result';
import { AdQuestionView } from '../models/ad-question-view';


/**
 * Provides access to advertisement questions.
 */
@Injectable({
  providedIn: 'root',
})
export class AdQuestionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createAdQuestion
   */
  static readonly CreateAdQuestionPath = '/marketplace/{ad}/questions';

  /**
   * Creates a new advertisement question.
   *
   * Creates a new question for an advertisement and associate it to the  authenticated user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAdQuestion()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  createAdQuestion$Response(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
      body: string
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AdQuestionsService.CreateAdQuestionPath, 'post');
    if (params) {

      rb.path('ad', params.ad, {});

      rb.body(params.body, 'text/plain');
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
   * Creates a new advertisement question.
   *
   * Creates a new question for an advertisement and associate it to the  authenticated user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAdQuestion$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  createAdQuestion(params: {

    /**
     * Can be either the advertisement internal identifier or, in case of webshop advertisements, can be the product number (if the owner is the logged user) or a string in the form &#x60;productNumber@user&#x60;, with the user identifier as well. If the number is solely comprised of numbers, it must be prefixed by a single quote.
     */
    ad: string;
      body: string
  }): Observable<string> {

    return this.createAdQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getAdQuestion
   */
  static readonly GetAdQuestionPath = '/questions/{id}';

  /**
   * Returns details of an advertisement question.
   *
   * Return detailed information of an advertisement question.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdQuestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdQuestion$Response(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<AdQuestionView>> {

    const rb = new RequestBuilder(this.rootUrl, AdQuestionsService.GetAdQuestionPath, 'get');
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
        return r as StrictHttpResponse<AdQuestionView>;
      })
    );
  }

  /**
   * Returns details of an advertisement question.
   *
   * Return detailed information of an advertisement question.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdQuestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdQuestion(params: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The object identification
     */
    id: string;

  }): Observable<AdQuestionView> {

    return this.getAdQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<AdQuestionView>) => r.body as AdQuestionView)
    );
  }

  /**
   * Path part for operation deleteAdQuestion
   */
  static readonly DeleteAdQuestionPath = '/questions/{id}';

  /**
   * Removes an advertisement question.
   *
   * Removes an advertisement question created for the authenticated user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAdQuestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdQuestion$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdQuestionsService.DeleteAdQuestionPath, 'delete');
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
   * Removes an advertisement question.
   *
   * Removes an advertisement question created for the authenticated user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAdQuestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdQuestion(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.deleteAdQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation answerAdQuestion
   */
  static readonly AnswerAdQuestionPath = '/questions/{id}/answer';

  /**
   * Answers an advertisement question as the authenticated user.
   *
   * Answers a question by id (created for an advertisement of its own).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `answerAdQuestion()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  answerAdQuestion$Response(params: {

    /**
     * The object identification
     */
    id: string;
      body: string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdQuestionsService.AnswerAdQuestionPath, 'post');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'text/plain');
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
   * Answers an advertisement question as the authenticated user.
   *
   * Answers a question by id (created for an advertisement of its own).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `answerAdQuestion$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  answerAdQuestion(params: {

    /**
     * The object identification
     */
    id: string;
      body: string
  }): Observable<void> {

    return this.answerAdQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation searchUnansweredAdQuestions
   */
  static readonly SearchUnansweredAdQuestionsPath = '/{user}/unanswered-questions';

  /**
   * Searches for unanswered questions for a specific user.
   *
   * Searches for unanswered questions for a specific user (currently `self` only is supported), if a type is not given then `simple` will be used. Only if the user has the ad / webshop questions enabled and the authenticated user can manage ads / webshops of the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUnansweredAdQuestions()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUnansweredAdQuestions$Response(params: {

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
    kind?: AdKind;

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

  }): Observable<StrictHttpResponse<Array<AdQuestionResult>>> {

    const rb = new RequestBuilder(this.rootUrl, AdQuestionsService.SearchUnansweredAdQuestionsPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.path('user', params.user, {});
      rb.query('kind', params.kind, {});
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
        return r as StrictHttpResponse<Array<AdQuestionResult>>;
      })
    );
  }

  /**
   * Searches for unanswered questions for a specific user.
   *
   * Searches for unanswered questions for a specific user (currently `self` only is supported), if a type is not given then `simple` will be used. Only if the user has the ad / webshop questions enabled and the authenticated user can manage ads / webshops of the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUnansweredAdQuestions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUnansweredAdQuestions(params: {

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
    kind?: AdKind;

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

  }): Observable<Array<AdQuestionResult>> {

    return this.searchUnansweredAdQuestions$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AdQuestionResult>>) => r.body as Array<AdQuestionResult>)
    );
  }

}
