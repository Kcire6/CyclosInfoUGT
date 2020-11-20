/* tslint:disable */
import { AdKind } from './ad-kind';
import { Image } from './image';
import { NamedEntity } from './named-entity';

/**
 * Basic information common for advertisements and webshops
 */
export interface Ad extends NamedEntity {

  /**
   * The primary advertisement image
   */
  image?: Image;
  kind?: AdKind;
}
