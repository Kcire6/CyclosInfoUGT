/* tslint:disable */

/**
 * The kind of a token principal type.
 * Possible values are:
 * - `barcode`: A barcode with the token
 * - `nfcDevice`: A device (e.g. cell phone) with support for NFC
 * - `nfcTag`: A NFC tag/card
 * - `other`: Any other type containing a token
 * - `qrcode`: A QR code containing a token
 * - `swipe`: A swipe/magnetic card containing the token
 */
export enum TokenTypeEnum {
  BARCODE = 'barcode',
  NFC_DEVICE = 'nfcDevice',
  NFC_TAG = 'nfcTag',
  OTHER = 'other',
  QRCODE = 'qrcode',
  SWIPE = 'swipe'
}
