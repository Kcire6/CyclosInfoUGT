/* tslint:disable */

/**
 * The possible physical type for tokens. Determines how applications interact with hardware in order to read the token value.
 * Possible values are:
 * - `barcode`: A 1d barcode printed on a card
 * - `nfcTag`: A NFC tag, normally a DESFire NFC card
 * - `other`: Other
 * - `qrCode`: A QR-code
 * - `swipe`: A swipe card
 */
export enum PhysicalTokenTypeEnum {
  BARCODE = 'barcode',
  NFC_TAG = 'nfcTag',
  OTHER = 'other',
  QR_CODE = 'qrCode',
  SWIPE = 'swipe'
}
