/* tslint:disable */

/**
 * Indicates which kind of action clients should take on the current step
 * Possible values are:
 * - `alreadyExecuted`: The step was previously executed and cannot be executed again (probably an external redirect). Clients should show the user a message and the transition actions.
 * - `externalRedirect`: The client should prepare the external redirect (`POST /wizard-executions/{key}/redirect`), which will return a URL. Then the user should be redirected to that URL.
 * - `finish`: The client should finish the wizard (`POST /wizard-executions/{key}`)
 * - `step`: The client should transition to a new step (`POST /wizard-executions/{key}[?transition={t}]`)
 */
export enum WizardActionEnum {
  ALREADY_EXECUTED = 'alreadyExecuted',
  EXTERNAL_REDIRECT = 'externalRedirect',
  FINISH = 'finish',
  STEP = 'step'
}
