/* tslint:disable */
import { NamedEntity } from './named-entity';
import { PhoneKind } from './phone-kind';

/**
 * A phone reference
 */
export interface Phone extends NamedEntity {

  /**
   * The number extension, only for landLine phones, and is only used if the phone configuration states that extensions are enabled.
   */
  extension?: string;

  /**
   * The phone name
   */
  name?: string;

  /**
   * The number, normalized to the E.164 format
   */
  normalizedNumber?: string;

  /**
   * The formatted number
   */
  number?: string;
  type?: PhoneKind;
}
