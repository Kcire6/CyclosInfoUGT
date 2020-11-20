/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DataForUi } from '../models/data-for-ui';
import { UiKind } from '../models/ui-kind';


/**
 * Provides data used to create alternative user interfaces
 */
@Injectable({
  providedIn: 'root',
})
export class UiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dataForUi
   */
  static readonly DataForUiPath = '/ui/data-for-ui';

  /**
   * Returns useful data required to properly display a user interface.
   *
   * The returned data contains settings and also content like header, footer and theme.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataForUi()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForUi$Response(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Specifies the kind of user interface to get data for. If null then no data related to the UI will be returned.
     */
    kind?: UiKind;

    /**
     * The last known Cyclos version. Sometimes, data to be cached depends on the version of the Cyclos application, and this helps controlling such cases
     */
    cyclosVersion?: string;

    /**
     * Controls the header cache. If is a boolean value (&#x60;true&#x60; or &#x60;false&#x60;) will forcibly return or skip the content. Otherwise, it should be a string in the form &#x60;id|version&#x60;. In this case, the content will be returned only when changed. When blank will always return it.
     */
    headerIf?: string;

    /**
     * Controls the footer cache. If is a boolean value (&#x60;true&#x60; or &#x60;false&#x60;) will forcibly return or skip the content. Otherwise, it should be a string in the form &#x60;id|version&#x60;. In this case, the content will be returned only when changed. When blank will always return it.
     */
    footerIf?: string;

    /**
     * Controls the theme cache. If is a boolean value (&#x60;true&#x60; or &#x60;false&#x60;) will forcibly return or skip the content. Otherwise, it should be a string in the form &#x60;id|version&#x60;. In this case, the content will be returned only when changed. When blank will always return it.
     */
    themeIf?: string;

    /**
     * Flag used to indicate how the theme must be returned (if returned): true means the theme components (base / advanced definitions and custom style) will be filled. Otherwise the final CSS (i. e the theme content). Only valid if the kind of the user interface is NOT &#x60;mobile&#x60;. For that kind the theme es always returned by its components.
     */
    themeByComponents?: boolean;

    /**
     * Trusted device identification. If given and the device is active then a pending device confirmation will be created that will be validated after the user logs-in. If the validation passes then no confirmation password will be used only for that session.
     */
    deviceId?: string;

    /**
     * Use &#x60;pinPrincipal&#x60; instead.
     *
     *
     * Device PIN identification. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     *
     * @deprecated
     */
    pinId?: string;

    /**
     * Device PIN principal. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     */
    pinPrincipal?: string;

  }): Observable<StrictHttpResponse<DataForUi>> {

    const rb = new RequestBuilder(this.rootUrl, UiService.DataForUiPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {});
      rb.query('kind', params.kind, {});
      rb.query('cyclosVersion', params.cyclosVersion, {});
      rb.query('headerIf', params.headerIf, {});
      rb.query('footerIf', params.footerIf, {});
      rb.query('themeIf', params.themeIf, {});
      rb.query('themeByComponents', params.themeByComponents, {});
      rb.query('deviceId', params.deviceId, {});
      rb.query('pinId', params.pinId, {});
      rb.query('pinPrincipal', params.pinPrincipal, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataForUi>;
      })
    );
  }

  /**
   * Returns useful data required to properly display a user interface.
   *
   * The returned data contains settings and also content like header, footer and theme.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dataForUi$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataForUi(params?: {

    /**
     * Select which fields to include on returned data. On the beginning of this page is an explanation on how this parameter works.
     */
    fields?: Array<string>;

    /**
     * Specifies the kind of user interface to get data for. If null then no data related to the UI will be returned.
     */
    kind?: UiKind;

    /**
     * The last known Cyclos version. Sometimes, data to be cached depends on the version of the Cyclos application, and this helps controlling such cases
     */
    cyclosVersion?: string;

    /**
     * Controls the header cache. If is a boolean value (&#x60;true&#x60; or &#x60;false&#x60;) will forcibly return or skip the content. Otherwise, it should be a string in the form &#x60;id|version&#x60;. In this case, the content will be returned only when changed. When blank will always return it.
     */
    headerIf?: string;

    /**
     * Controls the footer cache. If is a boolean value (&#x60;true&#x60; or &#x60;false&#x60;) will forcibly return or skip the content. Otherwise, it should be a string in the form &#x60;id|version&#x60;. In this case, the content will be returned only when changed. When blank will always return it.
     */
    footerIf?: string;

    /**
     * Controls the theme cache. If is a boolean value (&#x60;true&#x60; or &#x60;false&#x60;) will forcibly return or skip the content. Otherwise, it should be a string in the form &#x60;id|version&#x60;. In this case, the content will be returned only when changed. When blank will always return it.
     */
    themeIf?: string;

    /**
     * Flag used to indicate how the theme must be returned (if returned): true means the theme components (base / advanced definitions and custom style) will be filled. Otherwise the final CSS (i. e the theme content). Only valid if the kind of the user interface is NOT &#x60;mobile&#x60;. For that kind the theme es always returned by its components.
     */
    themeByComponents?: boolean;

    /**
     * Trusted device identification. If given and the device is active then a pending device confirmation will be created that will be validated after the user logs-in. If the validation passes then no confirmation password will be used only for that session.
     */
    deviceId?: string;

    /**
     * Use &#x60;pinPrincipal&#x60; instead.
     *
     *
     * Device PIN identification. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     *
     * @deprecated
     */
    pinId?: string;

    /**
     * Device PIN principal. If given then the information about whether it is active or not will be given in the returned &#x60;dataForLogin&#x60;.
     */
    pinPrincipal?: string;

  }): Observable<DataForUi> {

    return this.dataForUi$Response(params).pipe(
      map((r: StrictHttpResponse<DataForUi>) => r.body as DataForUi)
    );
  }

}
