/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ImageSizeEnum } from '../models/image-size-enum';
import { TokenDataForNew } from '../models/token-data-for-new';
import { TokenDataForSearch } from '../models/token-data-for-search';
import { TokenNew } from '../models/token-new';
import { TokenPermissions } from '../models/token-permissions';
import { TokenResult } from '../models/token-result';
import { TokenStatusEnum } from '../models/token-status-enum';
import { TokenView } from '../models/token-view';
import { UserTokensListData } from '../models/user-tokens-list-data';


/**
 * Provides access to tokens, which are commonly used as cards, but are more generic. Tokens are user identifications whose status can be managed.
 */
@Injectable({
  providedIn: 'root',
})
export class TokensService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listUserTokenTypes
   */
  static readonly ListUserTokenTypesPath = '/{user}/token-types';

  /**
   * Returns the permissions over token types of the given user.
   *
   * Returns the permissions the authenticated user can perform over the tokens of the given user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listUserTokenTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserTokenTypes$Response(params: {

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

  }): Observable<StrictHttpResponse<Array<TokenPermissions>>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.ListUserTokenTypesPath, 'get');
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
        return r as StrictHttpResponse<Array<TokenPermissions>>;
      })
    );
  }

  /**
   * Returns the permissions over token types of the given user.
   *
   * Returns the permissions the authenticated user can perform over the tokens of the given user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listUserTokenTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUserTokenTypes(params: {

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

  }): Observable<Array<TokenPermissions>> {

    return this.listUserTokenTypes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TokenPermissions>>) => r.body as Array<TokenPermissions>)
    );
  }

  /**
   * Path part for operation getUserTokens
   */
  static readonly GetUserTokensPath = '/{user}/tokens/{type}';

  /**
   * Returns the tokens of a type and user.
   *
   * Returns data containing the tokens of a given type and user, along with the tokens themselves. If the authenticated user is the requested user, will only return tokens whose `status` are either `active` or `blocked`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserTokens()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTokens$Response(params: {

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
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<UserTokensListData>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.GetUserTokensPath, 'get');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserTokensListData>;
      })
    );
  }

  /**
   * Returns the tokens of a type and user.
   *
   * Returns data containing the tokens of a given type and user, along with the tokens themselves. If the authenticated user is the requested user, will only return tokens whose `status` are either `active` or `blocked`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserTokens$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTokens(params: {

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
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<UserTokensListData> {

    return this.getUserTokens$Response(params).pipe(
      map((r: StrictHttpResponse<UserTokensListData>) => r.body as UserTokensListData)
    );
  }

  /**
   * Path part for operation activateToken
   */
  static readonly ActivateTokenPath = '/{user}/tokens/{type}';

  /**
   * Activates a pending / unassigned token.
   *
   * If the token status is `unassigned`, the token will be assigned to the given user, and activated. Otherwise, if the token status is `pending`, just activates the token, checking that the user matches. In both cases the token status is set to `active`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `activateToken()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  activateToken$Response(params: {

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
     * Either the identifier or internal name of the token type
     */
    type: string;
  
    /**
     * The token value to activate
     */
    body?: string
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.ActivateTokenPath, 'post');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('type', params.type, {});

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
   * Activates a pending / unassigned token.
   *
   * If the token status is `unassigned`, the token will be assigned to the given user, and activated. Otherwise, if the token status is `pending`, just activates the token, checking that the user matches. In both cases the token status is set to `active`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `activateToken$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  activateToken(params: {

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
     * Either the identifier or internal name of the token type
     */
    type: string;
  
    /**
     * The token value to activate
     */
    body?: string
  }): Observable<string> {

    return this.activateToken$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation viewToken
   */
  static readonly ViewTokenPath = '/tokens/{id}';

  /**
   * Returns details of a specific token.
   *
   * Returns information about a token, located by either id or number
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `viewToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewToken$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<TokenView>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.ViewTokenPath, 'get');
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
        return r as StrictHttpResponse<TokenView>;
      })
    );
  }

  /**
   * Returns details of a specific token.
   *
   * Returns information about a token, located by either id or number
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `viewToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  viewToken(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<TokenView> {

    return this.viewToken$Response(params).pipe(
      map((r: StrictHttpResponse<TokenView>) => r.body as TokenView)
    );
  }

  /**
   * Path part for operation activatePendingToken
   */
  static readonly ActivatePendingTokenPath = '/tokens/{id}/activate';

  /**
   * Activates a token.
   *
   * Activates a token, which must be assigned to a user managed by the authenticated user. The token status must be `pending`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `activatePendingToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  activatePendingToken$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.ActivatePendingTokenPath, 'post');
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
   * Activates a token.
   *
   * Activates a token, which must be assigned to a user managed by the authenticated user. The token status must be `pending`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `activatePendingToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  activatePendingToken(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.activatePendingToken$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation blockToken
   */
  static readonly BlockTokenPath = '/tokens/{id}/block';

  /**
   * Blocks a token.
   *
   * Blocks a token, which remains blocked until being unblocked again. The token status must be `active`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `blockToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  blockToken$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.BlockTokenPath, 'post');
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
   * Blocks a token.
   *
   * Blocks a token, which remains blocked until being unblocked again. The token status must be `active`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `blockToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  blockToken(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.blockToken$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation unblockToken
   */
  static readonly UnblockTokenPath = '/tokens/{id}/unblock';

  /**
   * Unlocks a token.
   *
   * Unlocks a token, returning its status to `active`. The token status must be `blocked`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unblockToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  unblockToken$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.UnblockTokenPath, 'post');
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
   * Unlocks a token.
   *
   * Unlocks a token, returning its status to `active`. The token status must be `blocked`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `unblockToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unblockToken(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.unblockToken$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cancelToken
   */
  static readonly CancelTokenPath = '/tokens/{id}/cancel';

  /**
   * Permanently cancels a token.
   *
   * Permanently cancels a token. The token status must be any but `canceled`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelToken$Response(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.CancelTokenPath, 'post');
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
   * Permanently cancels a token.
   *
   * Permanently cancels a token. The token status must be any but `canceled`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelToken(params: {

    /**
     * The object identification
     */
    id: string;

  }): Observable<void> {

    return this.cancelToken$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation assignToken
   */
  static readonly AssignTokenPath = '/tokens/{id}/assign/{user}';

  /**
   * Assigns a token to a given user.
   *
   * Assigns a token to a given user. The token status must be `unassigned`. After assigning, the token status will be `pending`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignToken$Response(params: {

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

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.AssignTokenPath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.path('user', params.user, {});

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
   * Assigns a token to a given user.
   *
   * Assigns a token to a given user. The token status must be `unassigned`. After assigning, the token status will be `pending`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assignToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignToken(params: {

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

  }): Observable<void> {

    return this.assignToken$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation setTokenExpiryDate
   */
  static readonly SetTokenExpiryDatePath = '/tokens/{id}/set-expiry-date';

  /**
   * Sets the expiry date of a specific token.
   *
   * Updates the token expiry date. The token status must be either `active`, `blocked` or `expired`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setTokenExpiryDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  setTokenExpiryDate$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The new expiry date. If not specified, the token will never expire.
     */
    date?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.SetTokenExpiryDatePath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('date', params.date, {});

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
   * Sets the expiry date of a specific token.
   *
   * Updates the token expiry date. The token status must be either `active`, `blocked` or `expired`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setTokenExpiryDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setTokenExpiryDate(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The new expiry date. If not specified, the token will never expire.
     */
    date?: string;

  }): Observable<void> {

    return this.setTokenExpiryDate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation setTokenActivationDeadline
   */
  static readonly SetTokenActivationDeadlinePath = '/tokens/{id}/set-activation-deadline';

  /**
   * Sets the activation deadline date of a specific token.
   *
   * Updates the token activation deadline date. The token status must be `pending` or `activationExpired`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setTokenActivationDeadline()` instead.
   *
   * This method doesn't expect any request body.
   */
  setTokenActivationDeadline$Response(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The new activation deadline date. If not specified, there will be no deadline.
     */
    date?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.SetTokenActivationDeadlinePath, 'post');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('date', params.date, {});

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
   * Sets the activation deadline date of a specific token.
   *
   * Updates the token activation deadline date. The token status must be `pending` or `activationExpired`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setTokenActivationDeadline$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setTokenActivationDeadline(params: {

    /**
     * The object identification
     */
    id: string;

    /**
     * The new activation deadline date. If not specified, there will be no deadline.
     */
    date?: string;

  }): Observable<void> {

    return this.setTokenActivationDeadline$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTokenQrCode
   */
  static readonly GetTokenQrCodePath = '/tokens/{id}/qr-code';

  /**
   * Returns the QR-code image for the given token only if its physical type is `qrCode`.
   *
   * This request will return the image contents as expected but our api  documentation page (or any other usage of an &lt;img&gt; tag), created  using swagger-ui, generates a second request to include the image in the page. This new (GET) request won't send the authentication parameters and  as this path requires authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTokenQrCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenQrCode$Response(params: {

    /**
     * The object identification
     */
    id: string;
    size?: ImageSizeEnum;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.GetTokenQrCodePath, 'get');
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
   * Returns the QR-code image for the given token only if its physical type is `qrCode`.
   *
   * This request will return the image contents as expected but our api  documentation page (or any other usage of an &lt;img&gt; tag), created  using swagger-ui, generates a second request to include the image in the page. This new (GET) request won't send the authentication parameters and  as this path requires authentication the image will be shown as broken. Optionally, to solve the problem described above and to allow authenticate the user when using sessions, a `sessionToken` or `accessClientToken`  query parameter could be specified.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTokenQrCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenQrCode(params: {

    /**
     * The object identification
     */
    id: string;
    size?: ImageSizeEnum;

  }): Observable<Blob> {

    return this.getTokenQrCode$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getTokenDataForNew
   */
  static readonly GetTokenDataForNewPath = '/tokens/{type}/data-for-new';

  /**
   * Returns data to create a new token for the given type.
   *
   * Returns data to create a new token for the given type.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTokenDataForNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenDataForNew$Response(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or identification of the user to have the token initially assigned
     */
    user?: string;

  }): Observable<StrictHttpResponse<TokenDataForNew>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.GetTokenDataForNewPath, 'get');
    if (params) {

      rb.path('type', params.type, {});
      rb.query('fields', params.fields, {});
      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenDataForNew>;
      })
    );
  }

  /**
   * Returns data to create a new token for the given type.
   *
   * Returns data to create a new token for the given type.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTokenDataForNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenDataForNew(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Either id or identification of the user to have the token initially assigned
     */
    user?: string;

  }): Observable<TokenDataForNew> {

    return this.getTokenDataForNew$Response(params).pipe(
      map((r: StrictHttpResponse<TokenDataForNew>) => r.body as TokenDataForNew)
    );
  }

  /**
   * Path part for operation createToken
   */
  static readonly CreateTokenPath = '/tokens/{type}/new';

  /**
   * Creates a new token of the given type.
   *
   * Creates a new token of the given type. If a user is specified, the token will be initially assigned to that user, and the initial status will be `pending`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createToken$Response(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;
  
    /**
     * Details of the token to be created
     */
    body: TokenNew
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.CreateTokenPath, 'post');
    if (params) {

      rb.path('type', params.type, {});

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
   * Creates a new token of the given type.
   *
   * Creates a new token of the given type. If a user is specified, the token will be initially assigned to that user, and the initial status will be `pending`.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createToken(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;
  
    /**
     * Details of the token to be created
     */
    body: TokenNew
  }): Observable<string> {

    return this.createToken$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getGeneralTokensDataForSearch
   */
  static readonly GetGeneralTokensDataForSearchPath = '/general-tokens/{type}/data-for-search';

  /**
   * Returns data for searching tokens of a specific type.
   *
   * Returns data for searching tokens of a specific type, regardless of the user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGeneralTokensDataForSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneralTokensDataForSearch$Response(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<StrictHttpResponse<TokenDataForSearch>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.GetGeneralTokensDataForSearchPath, 'get');
    if (params) {

      rb.path('type', params.type, {});
      rb.query('fields', params.fields, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenDataForSearch>;
      })
    );
  }

  /**
   * Returns data for searching tokens of a specific type.
   *
   * Returns data for searching tokens of a specific type, regardless of the user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getGeneralTokensDataForSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneralTokensDataForSearch(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

  }): Observable<TokenDataForSearch> {

    return this.getGeneralTokensDataForSearch$Response(params).pipe(
      map((r: StrictHttpResponse<TokenDataForSearch>) => r.body as TokenDataForSearch)
    );
  }

  /**
   * Path part for operation searchGeneralTokens
   */
  static readonly SearchGeneralTokensPath = '/general-tokens/{type}';

  /**
   * Searches for tokens of a specific type, regardless of the user.
   *
   * Returns tokens matching the search criteria, for a specific type.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchGeneralTokens()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchGeneralTokens$Response(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The minimum / maximum token activation date.
     */
    activationPeriod?: Array<string>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum token expiry date.
     */
    expiryPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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

    /**
     * The desired token statuses
     */
    statuses?: Array<TokenStatusEnum>;

    /**
     * Either id or a principal (login name, e-mail, etc) for the token owner user
     */
    user?: string;

    /**
     * The token value
     */
    value?: string;

  }): Observable<StrictHttpResponse<Array<TokenResult>>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.SearchGeneralTokensPath, 'get');
    if (params) {

      rb.path('type', params.type, {});
      rb.query('fields', params.fields, {});
      rb.query('activationPeriod', params.activationPeriod, {});
      rb.query('brokers', params.brokers, {});
      rb.query('expiryPeriod', params.expiryPeriod, {});
      rb.query('groups', params.groups, {});
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('skipTotalCount', params.skipTotalCount, {});
      rb.query('statuses', params.statuses, {});
      rb.query('user', params.user, {});
      rb.query('value', params.value, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TokenResult>>;
      })
    );
  }

  /**
   * Searches for tokens of a specific type, regardless of the user.
   *
   * Returns tokens matching the search criteria, for a specific type.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchGeneralTokens$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchGeneralTokens(params: {

    /**
     * Either the identifier or internal name of the token type
     */
    type: string;

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * The minimum / maximum token activation date.
     */
    activationPeriod?: Array<string>;

    /**
     * Either id or a principal (login name, e-mail, etc) for brokers
     */
    brokers?: Array<string>;

    /**
     * The minimum / maximum token expiry date.
     */
    expiryPeriod?: Array<string>;

    /**
     * Either id or internal names of groups / group sets
     */
    groups?: Array<string>;

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

    /**
     * The desired token statuses
     */
    statuses?: Array<TokenStatusEnum>;

    /**
     * Either id or a principal (login name, e-mail, etc) for the token owner user
     */
    user?: string;

    /**
     * The token value
     */
    value?: string;

  }): Observable<Array<TokenResult>> {

    return this.searchGeneralTokens$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TokenResult>>) => r.body as Array<TokenResult>)
    );
  }

}
