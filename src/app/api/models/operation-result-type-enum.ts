/* tslint:disable */

/**
 * The kind of data a custom operation execution is expected to return
 * Possible values are:
 * - `externalRedirect`: The main execution returns an URL for another service. Then a second execution is expected when this other service redirects the client back to Cyclos
 * - `fileDownload`: Returns a file, which can be downloaded
 * - `notification`: Returns a text to be displayed as a simple notification
 * - `plainText`: Returns a plain text to be displayed in a page, and optionally printed
 * - `resultPage`: Returns a page or list of results, which should be displayed in a table like any other search / list
 * - `richText`: Returns an HTML formatted text to be displayed in a page, and optionally printed
 * - `url`: The result should be an URL to which the client should be redirected to
 */
export enum OperationResultTypeEnum {
  EXTERNAL_REDIRECT = 'externalRedirect',
  FILE_DOWNLOAD = 'fileDownload',
  NOTIFICATION = 'notification',
  PLAIN_TEXT = 'plainText',
  RESULT_PAGE = 'resultPage',
  RICH_TEXT = 'richText',
  URL = 'url'
}
