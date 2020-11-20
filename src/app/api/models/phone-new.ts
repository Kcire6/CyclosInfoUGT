/* tslint:disable */
import { PhoneKind } from './phone-kind';
import { PhoneManage } from './phone-manage';

/**
 * Parameters for creating a new phone
 */
export interface PhoneNew extends PhoneManage {
  kind?: PhoneKind;
}
