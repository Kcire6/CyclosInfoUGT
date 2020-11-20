/* tslint:disable */
import { QueryFilters } from './query-filters';
import { RoleEnum } from './role-enum';

/**
 * Search filters for sessions
 */
export interface SessionQueryFilters extends QueryFilters {

  /**
   * Either id or a principal (login name, e-mail, etc) of a broker. Used to filter the sessions of users brokered by the given broker.
   */
  broker?: string;

  /**
   * Internal names of the sessions channels that can be returned.
   */
  channels?: Array<string>;

  /**
   * Whether to exclude or not the current session.
   */
  excludeCurrentSession?: boolean;

  /**
   * Either id or a principal (login name, e-mail, etc) of a user. The owner member of the operators sessions Used to filter the operator sessions of the given user.
   */
  operatorsOf?: string;

  /**
   * The role of the logged user in the sessions.
   */
  roles?: Array<RoleEnum>;

  /**
   * Either id or a principal (login name, e-mail, etc) of the sessions owner.
   */
  user?: string;
}
