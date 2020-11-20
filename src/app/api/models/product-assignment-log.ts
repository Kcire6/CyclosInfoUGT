/* tslint:disable */
import { Product } from './product';
import { ProductAssignmentActionEnum } from './product-assignment-action-enum';
import { User } from './user';

/**
 * Information regarding a specific product assignment change
 */
export interface ProductAssignmentLog {
  action?: ProductAssignmentActionEnum;
  by?: User;

  /**
   * When the action was performed
   */
  date?: string;
  product?: Product;
}
