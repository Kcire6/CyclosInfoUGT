/* tslint:disable */

/**
 * Contains useful information needed when a device is being activated as trusted
 * Possible values are:
 * - `disabled`: The activation is not required but the user can not activate a device as trusted because it does not have any mediums to receive the activation code or the session is already trusted
 * - `optional`: The activation is not required and the user can activate a device by code
 * - `required`: The activation is required with an activation code
 * - `requiredNoMediums`: The activation is required but the user can not activate a device as trusted because it does not have any mediums to receive the activation code
 * - `requiredWithDevice`: The activation is required with an existing trusted device
 */
export enum DeviceActivationEnum {
  DISABLED = 'disabled',
  OPTIONAL = 'optional',
  REQUIRED = 'required',
  REQUIRED_NO_MEDIUMS = 'requiredNoMediums',
  REQUIRED_WITH_DEVICE = 'requiredWithDevice'
}
