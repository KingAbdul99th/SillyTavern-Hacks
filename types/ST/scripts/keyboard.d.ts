/**
 * Registers an interactable class (for example for an extension) and makes it keyboard interactable.
 * Optionally apply the 'not_focusable' and 'disabled' classes if needed.
 *
 * @param {string} interactableSelector - The CSS selector for the interactable (Supports class combinations, chained via dots like <c>tag.actionable</c>, and sub selectors)
 * @param {object} [options={}] - Optional settings for the interactable
 * @param {boolean} [options.disabledByDefault=false] - Whether interactables of this class should be disabled by default
 * @param {boolean} [options.notFocusableByDefault=false] - Whether interactables of this class should not be focusable by default
 */
export function registerInteractableType(interactableSelector: string, { disabledByDefault, notFocusableByDefault }?: {
    disabledByDefault?: boolean;
    notFocusableByDefault?: boolean;
}): void;
/**
 * Checks if the given control is a keyboard-enabled interactable.
 *
 * @param {Element} control - The control element to check
 * @returns {boolean} Returns true if the control is a keyboard interactable, false otherwise
 */
export function isKeyboardInteractable(control: Element): boolean;
/**
 * Makes all the given controls keyboard interactable and sets their state.
 * If the control doesn't have any of the classes, it will be set to a custom-enabled keyboard interactable.
 *
 * @param {Element[]} interactables - The controls to make interactable and set their state
 */
export function makeKeyboardInteractable(...interactables: Element[]): void;
/**
 * Initializes several keyboard functionalities for ST
 */
export function initKeyboard(): void;
export const INTERACTABLE_CONTROL_CLASS: "interactable";
export const CUSTOM_INTERACTABLE_CONTROL_CLASS: "custom_interactable";
export const NOT_FOCUSABLE_CONTROL_CLASS: "not_focusable";
export const DISABLED_CONTROL_CLASS: "disabled";
//# sourceMappingURL=keyboard.d.ts.map