/* tslint:disable */

/**
 * The kind of a document
 * Possible values are:
 * - `dynamic`: A shared dynamic document - the content is a HTML text obtained from a template and variables
 * - `static`: A shared static document - the content is a downloaded file
 * - `user`: An individual static document belonging to a specific user
 */
export enum DocumentKind {
  DYNAMIC = 'dynamic',
  STATIC = 'static',
  USER = 'user'
}
