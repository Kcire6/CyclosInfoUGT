/* tslint:disable */
import { RecordSection } from './record-section';
import { RecordType } from './record-type';

/**
 * A record type with more information for its records
 */
export interface RecordTypeDetailed extends RecordType {

  /**
   * The number of columns which should be used to layout fields
   */
  fieldColumns?: number;

  /**
   * An informative text that should be shown in the form. The text is formatted in HTML.
   */
  informationText?: string;

  /**
   * Indicates whether labels in the form should be prevented from wrapping lines
   */
  nowrapLabels?: boolean;

  /**
   * The field sections in this record type
   */
  sections?: Array<RecordSection>;
}
