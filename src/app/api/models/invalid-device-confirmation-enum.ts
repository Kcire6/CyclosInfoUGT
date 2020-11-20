/* tslint:disable */

/**
 * The possible results for an invalid device confirmation
 * Possible values are:
 * - `invalidConfirmation`: The confirmation being processed / checked was not found or not belongs to the authenticated user
 * - `invalidDevice`: The trusted device used to approve / reject the confirmation was not found or is not associated to the authenticated user
 * - `maxCheckAtemptsReached`: The maximum number of attempts to check for a processed (approved / rejected) device confirmation was reached. The logged user was blocked
 */
export enum InvalidDeviceConfirmationEnum {
  INVALID_CONFIRMATION = 'invalidConfirmation',
  INVALID_DEVICE = 'invalidDevice',
  MAX_CHECK_ATEMPTS_REACHED = 'maxCheckAtemptsReached'
}
