/* tslint:disable */

/**
 * The possible kinds of an advertisement
 * Possible values are:
 * - `simple`: A simple advertisement that can be viewed, but not directly bought
 * - `webshop`: An advertisement that is part of an webshop. Can be bought, there is stock management, etc.
 */
export enum AdKind {
  SIMPLE = 'simple',
  WEBSHOP = 'webshop'
}
