/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IdentityProviderRequestResult } from '../models/identity-provider-request-result';
import { UserIdentityProvidersListData } from '../models/user-identity-providers-list-data';


/**
 * Provides access operations using identity providers such as Google or Facebook. The operations involving the user consent cannot be implemented solely with this API, because a browser window must be opened for the user to consent with the operation. Such operations need first to be prepared, which will store validate and store all the context in Cyclos, and then the popup must be opened. After finishing, the resulting data is sent via push notifications. For more information, see the corresponding section in the [Cyclos Wiki](https://wiki4.cyclos.org/index.php/External_identity_providers#Using_identity_providers_together_with_the_REST_API).
 */
@Injectable({
  providedIn: 'root',
})
export class IdentityProvidersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserIdentityProvidersListData
   */
  static readonly GetUserIdentityProvidersListDataPath = '/{user}/identity-providers/list-data';

  /**
   * Returns data for identity providers links of the given user.
   *
   * Returns data for identity providers links of the given user, plus additional data related to them.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserIdentityProvidersListData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserIdentityProvidersListData$Response(params: {

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

  }): Observable<StrictHttpResponse<UserIdentityProvidersListData>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.GetUserIdentityProvidersListDataPath, 'get');
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
        return r as StrictHttpResponse<UserIdentityProvidersListData>;
      })
    );
  }

  /**
   * Returns data for identity providers links of the given user.
   *
   * Returns data for identity providers links of the given user, plus additional data related to them.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserIdentityProvidersListData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserIdentityProvidersListData(params: {

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

  }): Observable<UserIdentityProvidersListData> {

    return this.getUserIdentityProvidersListData$Response(params).pipe(
      map((r: StrictHttpResponse<UserIdentityProvidersListData>) => r.body as UserIdentityProvidersListData)
    );
  }

  /**
   * Path part for operation deleteUserIdentityProvider
   */
  static readonly DeleteUserIdentityProviderPath = '/{user}/identity-providers/{identityProvider}';

  /**
   * Removes the link between a user and an identity provider, optionally disabling it.
   *
   * The link between the user and identity provider is removed. If the user attempts to login with the same provider again and the same e-mail address is used a new link will be automatically create. However, if the `disable` parameter is set to `true`, the provider will be disabled for the user, meaning that any subsequent attempts to login the user with that provider will fail, even if the e-mail addres match.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserIdentityProvider()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserIdentityProvider$Response(params: {

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
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

    /**
     * When set to true will disable the link between the user and the provider, preventing a new link to be created on login even if the regitered e-mail address matches the on in the identity provider.
     */
    disable?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.DeleteUserIdentityProviderPath, 'delete');
    if (params) {

      rb.path('user', params.user, {});
      rb.path('identityProvider', params.identityProvider, {});
      rb.query('disable', params.disable, {});

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
   * Removes the link between a user and an identity provider, optionally disabling it.
   *
   * The link between the user and identity provider is removed. If the user attempts to login with the same provider again and the same e-mail address is used a new link will be automatically create. However, if the `disable` parameter is set to `true`, the provider will be disabled for the user, meaning that any subsequent attempts to login the user with that provider will fail, even if the e-mail addres match.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUserIdentityProvider$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserIdentityProvider(params: {

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
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

    /**
     * When set to true will disable the link between the user and the provider, preventing a new link to be created on login even if the regitered e-mail address matches the on in the identity provider.
     */
    disable?: boolean;

  }): Observable<void> {

    return this.deleteUserIdentityProvider$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation prepareIdentityProviderLogin
   */
  static readonly PrepareIdentityProviderLoginPath = '/identity-providers/{identityProvider}/login';

  /**
   * Prepares an operation to login a user from an identity provider.
   *
   * Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepareIdentityProviderLogin()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderLogin$Response(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

  }): Observable<StrictHttpResponse<IdentityProviderRequestResult>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.PrepareIdentityProviderLoginPath, 'post');
    if (params) {

      rb.path('identityProvider', params.identityProvider, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityProviderRequestResult>;
      })
    );
  }

  /**
   * Prepares an operation to login a user from an identity provider.
   *
   * Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepareIdentityProviderLogin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderLogin(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

  }): Observable<IdentityProviderRequestResult> {

    return this.prepareIdentityProviderLogin$Response(params).pipe(
      map((r: StrictHttpResponse<IdentityProviderRequestResult>) => r.body as IdentityProviderRequestResult)
    );
  }

  /**
   * Path part for operation prepareIdentityProviderRegistration
   */
  static readonly PrepareIdentityProviderRegistrationPath = '/identity-providers/{identityProvider}/register';

  /**
   * Prepares an operation to register a user from an identity provider.
   *
   * Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent. The channel configuration in Cyclos determines whether registration with identity providers is allowed, and if so, whether a direct registration will be attempted or will just return the profile data to fill-in the registration form.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepareIdentityProviderRegistration()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderRegistration$Response(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

    /**
     * The group in which the registration is being requested
     */
    group: string;

  }): Observable<StrictHttpResponse<IdentityProviderRequestResult>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.PrepareIdentityProviderRegistrationPath, 'post');
    if (params) {

      rb.path('identityProvider', params.identityProvider, {});
      rb.query('group', params.group, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityProviderRequestResult>;
      })
    );
  }

  /**
   * Prepares an operation to register a user from an identity provider.
   *
   * Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent. The channel configuration in Cyclos determines whether registration with identity providers is allowed, and if so, whether a direct registration will be attempted or will just return the profile data to fill-in the registration form.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepareIdentityProviderRegistration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderRegistration(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

    /**
     * The group in which the registration is being requested
     */
    group: string;

  }): Observable<IdentityProviderRequestResult> {

    return this.prepareIdentityProviderRegistration$Response(params).pipe(
      map((r: StrictHttpResponse<IdentityProviderRequestResult>) => r.body as IdentityProviderRequestResult)
    );
  }

  /**
   * Path part for operation prepareIdentityProviderWizard
   */
  static readonly PrepareIdentityProviderWizardPath = '/identity-providers/{identityProvider}/wizard';

  /**
   * Prepares an operation to fill in a registration wizard from an identity provider.
   *
   * Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent. The channel configuration in Cyclos determines whether registration with identity providers is allowed. Direct registration is never done with wizards, even when configured in the channel. The callback result will contain the execution data for the next wizard step.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepareIdentityProviderWizard()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderWizard$Response(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

    /**
     * The wizard execution key
     */
    key: string;

  }): Observable<StrictHttpResponse<IdentityProviderRequestResult>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.PrepareIdentityProviderWizardPath, 'post');
    if (params) {

      rb.path('identityProvider', params.identityProvider, {});
      rb.query('key', params.key, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityProviderRequestResult>;
      })
    );
  }

  /**
   * Prepares an operation to fill in a registration wizard from an identity provider.
   *
   * Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent. The channel configuration in Cyclos determines whether registration with identity providers is allowed. Direct registration is never done with wizards, even when configured in the channel. The callback result will contain the execution data for the next wizard step.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepareIdentityProviderWizard$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderWizard(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

    /**
     * The wizard execution key
     */
    key: string;

  }): Observable<IdentityProviderRequestResult> {

    return this.prepareIdentityProviderWizard$Response(params).pipe(
      map((r: StrictHttpResponse<IdentityProviderRequestResult>) => r.body as IdentityProviderRequestResult)
    );
  }

  /**
   * Path part for operation prepareIdentityProviderLink
   */
  static readonly PrepareIdentityProviderLinkPath = '/identity-providers/{identityProvider}/link';

  /**
   * Prepares an operation to link the authenticated user to an identity provider.
   *
   * Must be authenticated with a session token (via `Session-Token` request header). Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepareIdentityProviderLink()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderLink$Response(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

  }): Observable<StrictHttpResponse<IdentityProviderRequestResult>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.PrepareIdentityProviderLinkPath, 'post');
    if (params) {

      rb.path('identityProvider', params.identityProvider, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityProviderRequestResult>;
      })
    );
  }

  /**
   * Prepares an operation to link the authenticated user to an identity provider.
   *
   * Must be authenticated with a session token (via `Session-Token` request header). Several validations are performed, and the result contains the URL which should be used to open a browser window to get the user consent.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepareIdentityProviderLink$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepareIdentityProviderLink(params: {

    /**
     * Either the id or internal name of the identity provider
     */
    identityProvider: string;

  }): Observable<IdentityProviderRequestResult> {

    return this.prepareIdentityProviderLink$Response(params).pipe(
      map((r: StrictHttpResponse<IdentityProviderRequestResult>) => r.body as IdentityProviderRequestResult)
    );
  }

}
