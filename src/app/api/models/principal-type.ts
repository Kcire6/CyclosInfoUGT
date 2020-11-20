/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';
import { PrincipalTypeKind } from './principal-type-kind';

/**
 * A reference to a principal type
 */
export interface PrincipalType extends InternalNamedEntity {
  kind?: PrincipalTypeKind;
}
