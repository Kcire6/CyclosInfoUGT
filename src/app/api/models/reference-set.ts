/* tslint:disable */
import { ReferenceLevelEnum } from './reference-level-enum';

/**
 * Parameters for setting a reference value. When modifying an existing reference, the `version` field must be passed in with the correct value, as returned in `GET /{from}/reference/{to}/data-for-set`.
 */
export interface ReferenceSet {

  /**
   * Comments for this reference
   */
  comments?: string;
  level?: ReferenceLevelEnum;

  /**
   * The version stamp for the current object, used for optimistic locking. When saving, the same version as previously received needs to be passed back. If no one else has saved the object, the version will match and the object will be updated. However, if someone other has saved the object, the version will no longer match, and an error will be raised. This is used to prevent multiple users (or processes) from updating the same object and unwilingly overridding the property values, leading to data loss.
   */
  version?: number;
}
