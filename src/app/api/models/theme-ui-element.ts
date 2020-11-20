/* tslint:disable */
import { UiElementWithContent } from './ui-element-with-content';

/**
 * UI element containing wether the content or the components.
 */
export interface ThemeUiElement extends UiElementWithContent {

  /**
   * Advanced (based on the base ones) LESS variables.
   */
  advancedDefinitions?: string;

  /**
   * Customized CSS.
   */
  customStyle?: string;

  /**
   * Base LESS variables.
   */
  definitions?: string;
}
