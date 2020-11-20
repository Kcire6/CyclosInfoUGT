/* tslint:disable */

/**
 * The UI control (widget) type that should be used to render this field for edit. Most notably, the types that can have distinct controls are singleSelection, that could be rendered as a single selection widget or radio button group, and multi selection, which could be rendered as a multi selection widget or a checkbox group.
 * Possible values are:
 * - `checkbox`: A checkbox group
 * - `entitySelection`: A widget to select a linked entity (for example, an auto-complete for users)
 * - `multiSelection`: A multi-selection field
 * - `radio`: A radio button group
 * - `richEditor`: An HTML editor
 * - `singleSelection`: A single-selection field
 * - `text`: A single line text
 * - `textarea`: A multi line text
 * - `upload`: A widget to upload a file
 */
export enum CustomFieldControlEnum {
  CHECKBOX = 'checkbox',
  ENTITY_SELECTION = 'entitySelection',
  MULTI_SELECTION = 'multiSelection',
  RADIO = 'radio',
  RICH_EDITOR = 'richEditor',
  SINGLE_SELECTION = 'singleSelection',
  TEXT = 'text',
  TEXTAREA = 'textarea',
  UPLOAD = 'upload'
}
