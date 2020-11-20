/* tslint:disable */

/**
 * Parameters to define the security answer.
 */
export interface SetSecurityAnswer {

  /**
   * If a `securityQuestion` is informed, this is the answer. Required in this case. Only used in public registration...
   */
  securityAnswer?: string;

  /**
   * If the server is configured to use security question, is the `internalName` of the question present in the result of `data-for-new`, in the `securityQuestions` property. Is optional and only used in public registration.
   */
  securityQuestion?: string;
}
