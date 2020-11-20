/* tslint:disable */
import { OperatorGroupBasicData } from './operator-group-basic-data';
import { OperatorGroupNew } from './operator-group-new';

/**
 * Contains data for creating a new operator group
 */
export interface OperatorGroupDataForNew extends OperatorGroupBasicData {

  /**
   * The operator group populated with the default fields. This value can be modified and sent back on `POST /{user}/operator-groups`.
   */
  operatorGroup?: OperatorGroupNew;
}
