/* tslint:disable */
import { RecordBasicData } from './record-basic-data';
import { RecordNew } from './record-new';

/**
 * Contains data for creating a new record
 */
export interface RecordDataForNew extends RecordBasicData {

  /**
   * The record populated with the default fields. This value can be modified and sent back to `POST /{owner}/records/{type}`.
   */
  record?: RecordNew;
}
