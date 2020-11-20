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
import { WizardExecutionData } from '../models/wizard-execution-data';
import { WizardTransitionParams } from '../models/wizard-transition-params';
import { WizardVerificationCodeParams } from '../models/wizard-verification-code-params';


/**
 * Provides access to custom wizards
 */
@Injectable({
  providedIn: 'root',
})
export class WizardsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation startWizard
   */
  static readonly StartWizardPath = '/wizards/{key}/start';

  /**
   * Starts the execution of a custom wizard.
   *
   * The data for the first step is returned. This operation is used for running wizards with `kind` either `$enum.WizardKind.registration` or `$enum.WizardKind.system`. Can also be used by logged users to run wizards with `kind` either `$enum.WizardKind.user` over themselves.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `startWizard()` instead.
   *
   * This method doesn't expect any request body.
   */
  startWizard$Response(params: {

    /**
     * The custom wizard id or internal name
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<WizardExecutionData>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.StartWizardPath, 'post');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WizardExecutionData>;
      })
    );
  }

  /**
   * Starts the execution of a custom wizard.
   *
   * The data for the first step is returned. This operation is used for running wizards with `kind` either `$enum.WizardKind.registration` or `$enum.WizardKind.system`. Can also be used by logged users to run wizards with `kind` either `$enum.WizardKind.user` over themselves.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `startWizard$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  startWizard(params: {

    /**
     * The custom wizard id or internal name
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<WizardExecutionData> {

    return this.startWizard$Response(params).pipe(
      map((r: StrictHttpResponse<WizardExecutionData>) => r.body as WizardExecutionData)
    );
  }

  /**
   * Path part for operation startUserWizard
   */
  static readonly StartUserWizardPath = '/users/{user}/wizards/{key}/start';

  /**
   * Starts the execution of a custom wizard over a given user.
   *
   * The data for the first step is returned. Only wizards with `kind` = `user` can be executed in this operation.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `startUserWizard()` instead.
   *
   * This method doesn't expect any request body.
   */
  startUserWizard$Response(params: {

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
     * The custom wizard id or internal name
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<WizardExecutionData>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.StartUserWizardPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WizardExecutionData>;
      })
    );
  }

  /**
   * Starts the execution of a custom wizard over a given user.
   *
   * The data for the first step is returned. Only wizards with `kind` = `user` can be executed in this operation.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `startUserWizard$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  startUserWizard(params: {

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
     * The custom wizard id or internal name
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<WizardExecutionData> {

    return this.startUserWizard$Response(params).pipe(
      map((r: StrictHttpResponse<WizardExecutionData>) => r.body as WizardExecutionData)
    );
  }

  /**
   * Path part for operation getCurrentWizardExecution
   */
  static readonly GetCurrentWizardExecutionPath = '/wizard-executions/{key}';

  /**
   * Returns the wizard execution data for the current step.
   *
   * Doesn't modify the wizard execution status.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentWizardExecution()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentWizardExecution$Response(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<WizardExecutionData>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.GetCurrentWizardExecutionPath, 'get');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WizardExecutionData>;
      })
    );
  }

  /**
   * Returns the wizard execution data for the current step.
   *
   * Doesn't modify the wizard execution status.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCurrentWizardExecution$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentWizardExecution(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<WizardExecutionData> {

    return this.getCurrentWizardExecution$Response(params).pipe(
      map((r: StrictHttpResponse<WizardExecutionData>) => r.body as WizardExecutionData)
    );
  }

  /**
   * Path part for operation transitionWizardExecution
   */
  static readonly TransitionWizardExecutionPath = '/wizard-executions/{key}';

  /**
   * Transitions a wizard from a step to another, or finishes the wizard.
   *
   * Applies a transition to the current wizard step. When no transition is sent, the wizard is finished. In this case, the current step must be the last wizard step. The request body contains the step parameters, according to the step kind.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transitionWizardExecution()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transitionWizardExecution$Response(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The transition id for the next step. Must be the id of one of the transitions returned in &#x60;WizardExecutionData.transitions&#x60;, or null, in which case the wizard finishes.
     */
    transition?: string;
  
    /**
     * The current step fields
     */
    body?: WizardTransitionParams
  }): Observable<StrictHttpResponse<WizardExecutionData>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.TransitionWizardExecutionPath, 'post');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});
      rb.query('transition', params.transition, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WizardExecutionData>;
      })
    );
  }

  /**
   * Transitions a wizard from a step to another, or finishes the wizard.
   *
   * Applies a transition to the current wizard step. When no transition is sent, the wizard is finished. In this case, the current step must be the last wizard step. The request body contains the step parameters, according to the step kind.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `transitionWizardExecution$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transitionWizardExecution(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The transition id for the next step. Must be the id of one of the transitions returned in &#x60;WizardExecutionData.transitions&#x60;, or null, in which case the wizard finishes.
     */
    transition?: string;
  
    /**
     * The current step fields
     */
    body?: WizardTransitionParams
  }): Observable<WizardExecutionData> {

    return this.transitionWizardExecution$Response(params).pipe(
      map((r: StrictHttpResponse<WizardExecutionData>) => r.body as WizardExecutionData)
    );
  }

  /**
   * Path part for operation cancelWizardExecution
   */
  static readonly CancelWizardExecutionPath = '/wizard-executions/{key}';

  /**
   * Cancels a wizard execution, removing all associated context.
   *
   * All stored state for this execution is removed, and its key is no longer valid.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelWizardExecution()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelWizardExecution$Response(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.CancelWizardExecutionPath, 'delete');
    if (params) {

      rb.path('key', params.key, {});

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
   * Cancels a wizard execution, removing all associated context.
   *
   * All stored state for this execution is removed, and its key is no longer valid.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelWizardExecution$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelWizardExecution(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

  }): Observable<void> {

    return this.cancelWizardExecution$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation backWizardExecution
   */
  static readonly BackWizardExecutionPath = '/wizard-executions/{key}/back';

  /**
   * Goes back one or more steps in a wizard execution.
   *
   * Returns the execution data for the new step.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `backWizardExecution()` instead.
   *
   * This method doesn't expect any request body.
   */
  backWizardExecution$Response(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The number of steps to go back. When not informed, will be 1.
     */
    steps?: number;

  }): Observable<StrictHttpResponse<WizardExecutionData>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.BackWizardExecutionPath, 'post');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});
      rb.query('steps', params.steps, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WizardExecutionData>;
      })
    );
  }

  /**
   * Goes back one or more steps in a wizard execution.
   *
   * Returns the execution data for the new step.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `backWizardExecution$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  backWizardExecution(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The number of steps to go back. When not informed, will be 1.
     */
    steps?: number;

  }): Observable<WizardExecutionData> {

    return this.backWizardExecution$Response(params).pipe(
      map((r: StrictHttpResponse<WizardExecutionData>) => r.body as WizardExecutionData)
    );
  }

  /**
   * Path part for operation redirectWizardExecution
   */
  static readonly RedirectWizardExecutionPath = '/wizard-executions/{key}/redirect';

  /**
   * Prepares an external redirect in a wizard execution.
   *
   * The current step must be set for external redirect (the `WizardExecutionData.action` must be `externalRedirect`). The URL to which redirect the user is returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `redirectWizardExecution()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  redirectWizardExecution$Response(params: {

    /**
     * The custom wizard execution key
     */
    key: string;
  
    /**
     * The current step fields
     */
    body?: WizardTransitionParams
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.RedirectWizardExecutionPath, 'post');
    if (params) {

      rb.path('key', params.key, {});

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
   * Prepares an external redirect in a wizard execution.
   *
   * The current step must be set for external redirect (the `WizardExecutionData.action` must be `externalRedirect`). The URL to which redirect the user is returned.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `redirectWizardExecution$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  redirectWizardExecution(params: {

    /**
     * The custom wizard execution key
     */
    key: string;
  
    /**
     * The current step fields
     */
    body?: WizardTransitionParams
  }): Observable<string> {

    return this.redirectWizardExecution$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation runWizardCallback
   */
  static readonly RunWizardCallbackPath = '/wizard-executions/{key}/callback';

  /**
   * Runs the callback of an external redirect wizard step.
   *
   * This operation is invoked after a step was redirected to an external application. The script should check whether the external operation was completed and act accordingly
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `runWizardCallback()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runWizardCallback$Response(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * Data of the original callback request sent by the external service
     */
    body?: HttpRequestData
  }): Observable<StrictHttpResponse<WizardExecutionData>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.RunWizardCallbackPath, 'post');
    if (params) {

      rb.path('key', params.key, {});
      rb.query('fields', params.fields, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WizardExecutionData>;
      })
    );
  }

  /**
   * Runs the callback of an external redirect wizard step.
   *
   * This operation is invoked after a step was redirected to an external application. The script should check whether the external operation was completed and act accordingly
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `runWizardCallback$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  runWizardCallback(params: {

    /**
     * The custom wizard execution key
     */
    key: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;
  
    /**
     * Data of the original callback request sent by the external service
     */
    body?: HttpRequestData
  }): Observable<WizardExecutionData> {

    return this.runWizardCallback$Response(params).pipe(
      map((r: StrictHttpResponse<WizardExecutionData>) => r.body as WizardExecutionData)
    );
  }

  /**
   * Path part for operation sendWizardVerificationCode
   */
  static readonly SendWizardVerificationCodePath = '/wizard-executions/{key}/verification-code';

  /**
   * Sends a code to verify either e-mail or mobile phone.
   *
   * The given execution must be of a registration wizard, and be in a form fields step that contain either e-mail or mobile phone, according to the given send medium.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendWizardVerificationCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendWizardVerificationCode$Response(params: {

    /**
     * The custom wizard execution key
     */
    key: string;
  
    /**
     * The parameters for sending the code
     */
    body?: WizardVerificationCodeParams
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WizardsService.SendWizardVerificationCodePath, 'post');
    if (params) {

      rb.path('key', params.key, {});

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
   * Sends a code to verify either e-mail or mobile phone.
   *
   * The given execution must be of a registration wizard, and be in a form fields step that contain either e-mail or mobile phone, according to the given send medium.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sendWizardVerificationCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendWizardVerificationCode(params: {

    /**
     * The custom wizard execution key
     */
    key: string;
  
    /**
     * The parameters for sending the code
     */
    body?: WizardVerificationCodeParams
  }): Observable<void> {

    return this.sendWizardVerificationCode$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
