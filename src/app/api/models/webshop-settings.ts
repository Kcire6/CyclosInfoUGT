/* tslint:disable */

/**
 * Base Settings for a user's webshop
 */
export interface WebshopSettings {

  /**
   * Whether the product number, which is required for webshop advertisements, will be generated (true) or manual (false).
   */
  productNumberGenerated?: boolean;

  /**
   * A mask that indicates the format of product numbers. The following characters are accepted:
   * - `?`, `_`: Any character; - `#`, `0`, `9`: A digit; - `A`, `a`: A letter (regardless the case); - `L`, `l`: A lowercase letter; - `U`, `u`: An uppercase letter; - `C`, `c`: A capitalized letter; - `\` folowed by any character, or any character not in the list
   *   above: A literal character.
   */
  productNumberMask?: string;
}
