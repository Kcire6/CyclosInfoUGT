/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Represents an entity that is being referenced from another one, without caring about the type of the referenced entity. Also carries on the entity version
 */
export interface VersionedEntityReference extends InternalNamedEntity {

  /**
   * The version stamp for the current object, used for optimistic locking. When saving, the same version as previously received needs to be passed back. If no one else has saved the object, the version will match and the object will be updated. However, if someone other has saved the object, the version will no longer match, and an error will be raised. This is used to prevent multiple users (or processes) from updating the same object and unwilingly overridding the property values, leading to data loss.
   */
  version?: number;
}
