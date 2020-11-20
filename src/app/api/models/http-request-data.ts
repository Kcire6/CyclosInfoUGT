/* tslint:disable */

/**
 * Contains data of an HTTP request
 */
export interface HttpRequestData {

  /**
   * The HTTP request body
   */
  body?: string;

  /**
   * The HTTP request headers
   */
  headers?: { [key: string]: string };

  /**
   * The HTTP method
   */
  method?: string;

  /**
   * The HTTP request query parameters
   */
  parameters?: { [key: string]: string };
}
