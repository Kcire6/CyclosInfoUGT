/* tslint:disable */

/**
 * Statuses for an outbound SMS message sent to an user.
 * Possible values are:
 * - `gatewayUreachable`: Network problem, or gateway server down
 * - `invalid`: The parameters for sending an SMS message were invalid
 * - `maxMessagesReached`: The maximum SMS messages for the user (or guest) have been reached
 * - `rejected`: The gateway has rejected the SMS message
 * - `success`: The SMS message was successfully sent
 * - `timeout`: Timeout while connecting or waiting for a gateway server reply
 * - `unexpected`: An unexpected error has occurred
 */
export enum OutboundSmsStatusEnum {
  GATEWAY_UREACHABLE = 'gatewayUreachable',
  INVALID = 'invalid',
  MAX_MESSAGES_REACHED = 'maxMessagesReached',
  REJECTED = 'rejected',
  SUCCESS = 'success',
  TIMEOUT = 'timeout',
  UNEXPECTED = 'unexpected'
}
