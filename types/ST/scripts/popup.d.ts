/**
 * Displays a blocking popup with a given content and type
 *
 * @param {JQuery<HTMLElement>|string|Element} content - Content or text to display in the popup
 * @param {POPUP_TYPE} type
 * @param {string} inputValue - Value to set the input to
 * @param {PopupOptions} [popupOptions={}] - Options for the popup
 * @returns {Promise<POPUP_RESULT|string|boolean?>} The value for this popup, which can either be the popup retult or the input value if chosen
 */
export function callGenericPopup(content: JQuery<HTMLElement> | string | Element, type: POPUP_TYPE, inputValue?: string, popupOptions?: PopupOptions): Promise<POPUP_RESULT | string | (boolean | null)>;
/**
 * Returns the topmost modal layer in the document. If there is an open dialog,
 * it returns the dialog element. Otherwise, it returns the document body.
 *
 * @return {HTMLElement} The topmost modal layer element
 */
export function getTopmostModalLayer(): HTMLElement;
/**
 * Fixes the issue with toastr not displaying on top of the dialog by moving the toastr container inside the dialog or back to the main body
 */
export function fixToastrForDialogs(): void;
export type POPUP_TYPE = number;
export namespace POPUP_TYPE {
    let TEXT: number;
    let CONFIRM: number;
    let INPUT: number;
    let DISPLAY: number;
    let CROP: number;
}
export type POPUP_RESULT = number | null;
export namespace POPUP_RESULT {
    let AFFIRMATIVE: number;
    let NEGATIVE: number;
    let CANCELLED: any;
    let CUSTOM1: number;
    let CUSTOM2: number;
    let CUSTOM3: number;
    let CUSTOM4: number;
    let CUSTOM5: number;
    let CUSTOM6: number;
    let CUSTOM7: number;
    let CUSTOM8: number;
    let CUSTOM9: number;
}
export class Popup {
    /**
     * Show a popup with any of the given helper methods. Use `await` to make them blocking.
     */
    static show: {
        /**
         * Asynchronously displays an input popup with the given header and text, and returns the user's input.
         *
         * @param {string?} header - The header text for the popup.
         * @param {string?} [text] - The main text for the popup.
         * @param {string} [defaultValue=''] - The default value for the input field.
         * @param {PopupOptions} [popupOptions={}] - Options for the popup.
         * @return {Promise<string?>} A Promise that resolves with the user's input.
         */
        input: (header: string | null, text?: string | null, defaultValue?: string, popupOptions?: PopupOptions) => Promise<string | null>;
        /**
         * Asynchronously displays a confirmation popup with the given header and text, returning the clicked result button value.
         *
         * @param {string?} header - The header text for the popup.
         * @param {string?} [text] - The main text for the popup.
         * @param {PopupOptions} [popupOptions={}] - Options for the popup.
         * @return {Promise<POPUP_RESULT?>} A Promise that resolves with the result of the user's interaction.
         */
        confirm: (header: string | null, text?: string | null, popupOptions?: PopupOptions) => Promise<POPUP_RESULT | null>;
        /**
         * Asynchronously displays a text popup with the given header and text, returning the clicked result button value.
         *
         * @param {string?} header - The header text for the popup.
         * @param {string?} text - The main text for the popup.
         * @param {PopupOptions} [popupOptions={}] - Options for the popup.
         * @return {Promise<POPUP_RESULT?>} A Promise that resolves with the result of the user's interaction.
         */
        text: (header: string | null, text: string | null, popupOptions?: PopupOptions) => Promise<POPUP_RESULT | null>;
    };
    /**
     * Utility for popup and popup management.
     *
     * Contains the list of all currently open popups, and it'll remember the result of the last closed popup.
     */
    static util: {
        /** @readonly @type {Popup[]} Remember all popups */
        readonly popups: Popup[];
        /** @type {{value: any, result: POPUP_RESULT|number?, inputResults: Map<string, boolean>?}?} Last popup result */
        lastResult: {
            value: any;
            result: POPUP_RESULT | (number | null);
            inputResults: Map<string, boolean> | null;
        } | null;
        /** @returns {boolean} Checks if any modal popup dialog is open */
        isPopupOpen(): boolean;
        /**
         * Returns the topmost modal layer in the document. If there is an open dialog popup,
         * it returns the dialog element. Otherwise, it returns the document body.
         *
         * @return {HTMLElement} The topmost modal layer element
         */
        getTopmostModalLayer(): HTMLElement;
    };
    /**
     * Constructs a new Popup object with the given text content, type, inputValue, and options
     *
     * @param {JQuery<HTMLElement>|string|Element} content - Text content to display in the popup
     * @param {POPUP_TYPE} type - The type of the popup
     * @param {string} [inputValue=''] - The initial value of the input field
     * @param {PopupOptions} [options={}] - Additional options for the popup
     */
    constructor(content: JQuery<HTMLElement> | string | Element, type: POPUP_TYPE, inputValue?: string, { okButton, cancelButton, rows, wide, wider, large, transparent, allowHorizontalScrolling, allowVerticalScrolling, leftAlign, animation, defaultResult, customButtons, customInputs, onClosing, onClose, cropAspect, cropImage }?: PopupOptions);
    /** @readonly @type {POPUP_TYPE} */ readonly type: POPUP_TYPE;
    /** @readonly @type {string} */ readonly id: string;
    /** @readonly @type {HTMLDialogElement} */ readonly dlg: HTMLDialogElement;
    /** @readonly @type {HTMLDivElement} */ readonly body: HTMLDivElement;
    /** @readonly @type {HTMLDivElement} */ readonly content: HTMLDivElement;
    /** @readonly @type {HTMLTextAreaElement} */ readonly mainInput: HTMLTextAreaElement;
    /** @readonly @type {HTMLDivElement} */ readonly inputControls: HTMLDivElement;
    /** @readonly @type {HTMLDivElement} */ readonly buttonControls: HTMLDivElement;
    /** @readonly @type {HTMLDivElement} */ readonly okButton: HTMLDivElement;
    /** @readonly @type {HTMLDivElement} */ readonly cancelButton: HTMLDivElement;
    /** @readonly @type {HTMLDivElement} */ readonly closeButton: HTMLDivElement;
    /** @readonly @type {HTMLDivElement} */ readonly cropWrap: HTMLDivElement;
    /** @readonly @type {HTMLImageElement} */ readonly cropImage: HTMLImageElement;
    /** @readonly @type {POPUP_RESULT|number?} */ readonly defaultResult: POPUP_RESULT | (number | null);
    /** @readonly @type {CustomPopupButton[]|string[]?} */ readonly customButtons: CustomPopupButton[] | (string[] | null);
    /** @readonly @type {CustomPopupInput[]} */ readonly customInputs: CustomPopupInput[];
    /** @type {(popup: Popup) => Promise<boolean?>|boolean?} */ onClosing: (popup: Popup) => Promise<boolean | null> | (boolean | null);
    /** @type {(popup: Popup) => Promise<void?>|void?} */ onClose: (popup: Popup) => Promise<void | null> | (void | null);
    /** @type {POPUP_RESULT|number} */ result: POPUP_RESULT | number;
    /** @type {any} */ value: any;
    /** @type {Map<string,boolean>?} */ inputResults: Map<string, boolean> | null;
    /** @type {any} */ cropData: any;
    /** @type {HTMLElement} */ lastFocus: HTMLElement;
    /**
     * Asynchronously shows the popup element by appending it to the document body,
     * setting its display to 'block' and focusing on the input if the popup type is INPUT.
     *
     * @returns {Promise<string|number|boolean?>} A promise that resolves with the value of the popup when it is completed.
     */
    show(): Promise<string | number | (boolean | null)>;
    setAutoFocus({ applyAutoFocus }?: {
        applyAutoFocus?: boolean;
    }): void;
    /**
     * Completes the popup and sets its result and value
     *
     * The completion handling will make the popup return the result to the original show promise.
     *
     * There will be two different types of result values:
     * - popup with `POPUP_TYPE.INPUT` will return the input value - or `false` on negative and `null` on cancelled
     * - All other will return the result value as provided as `POPUP_RESULT` or a custom number value
     *
     * <b>IMPORTANT:</b> If the popup closing was cancelled via the `onClosing` handler, the return value will be `Promise<undefined>`.
     *
     * @param {POPUP_RESULT|number} result - The result of the popup (either an existing `POPUP_RESULT` or a custom result value)
     *
     * @returns {Promise<string|number|boolean|undefined?>} A promise that resolves with the value of the popup when it is completed. <b>Returns `undefined` if the closing action was cancelled.</b>
     */
    complete(result: POPUP_RESULT | number): Promise<string | number | boolean | (undefined | null)>;
    completeAffirmative(): Promise<string | number | boolean>;
    completeNegative(): Promise<string | number | boolean>;
    completeCancelled(): Promise<string | number | boolean>;
    #private;
}
export type PopupOptions = {
    /**
     * - Custom text for the OK button, or `true` to use the default (If set, the button will always be displayed, no matter the type of popup)
     */
    okButton?: string | (boolean | null);
    /**
     * - Custom text for the Cancel button, or `true` to use the default (If set, the button will always be displayed, no matter the type of popup)
     */
    cancelButton?: string | (boolean | null);
    /**
     * - The number of rows for the input field
     */
    rows?: number | null;
    /**
     * - Whether to display the popup in wide mode (wide screen, 1/1 aspect ratio)
     */
    wide?: boolean | null;
    /**
     * - Whether to display the popup in wider mode (just wider, no height scaling)
     */
    wider?: boolean | null;
    /**
     * - Whether to display the popup in large mode (90% of screen)
     */
    large?: boolean | null;
    /**
     * - Whether to display the popup in transparent mode (no background, border, shadow or anything, only its content)
     */
    transparent?: boolean | null;
    /**
     * - Whether to allow horizontal scrolling in the popup
     */
    allowHorizontalScrolling?: boolean | null;
    /**
     * - Whether to allow vertical scrolling in the popup
     */
    allowVerticalScrolling?: boolean | null;
    /**
     * - Whether the popup content should be left-aligned by default
     */
    leftAlign?: boolean | null;
    /**
     * - Animation speed for the popup (opening, closing, ...)
     */
    animation?: "slow" | "fast" | ("none" | null);
    /**
     * - The default result of this popup when Enter is pressed. Can be changed from `POPUP_RESULT.AFFIRMATIVE`.
     */
    defaultResult?: POPUP_RESULT | (number | null);
    /**
     * - Custom buttons to add to the popup. If only strings are provided, the buttons will be added with default options, and their result will be in order from `2` onward.
     */
    customButtons?: CustomPopupButton[] | (string[] | null);
    /**
     * - Custom inputs to add to the popup. The display below the content and the input box, one by one.
     */
    customInputs?: CustomPopupInput[] | null;
    /**
     * - Handler called before the popup closes, return `false` to cancel the close
     */
    onClosing?: (popup: Popup) => Promise<boolean | null> | (boolean | null);
    /**
     * - Handler called after the popup closes, but before the DOM is cleaned up
     */
    onClose?: (popup: Popup) => Promise<void | null> | (void | null);
    /**
     * - Aspect ratio for the crop popup
     */
    cropAspect?: number | null;
    /**
     * - Image URL to display in the crop popup
     */
    cropImage?: string | null;
};
export type CustomPopupButton = {
    /**
     * - The text of the button
     */
    text: string;
    /**
     * - The result of the button - can also be a custom result value to make be able to find out that this button was clicked. If no result is specified, this button will **not** close the popup.
     */
    result?: POPUP_RESULT | (number | null);
    /**
     * - Optional custom CSS classes applied to the button
     */
    classes?: string[] | (string | null);
    /**
     * - Optional action to perform when the button is clicked
     */
    action?: () => void | null;
    /**
     * - Whether to append the button to the end of the popup - by default it will be prepended
     */
    appendAtEnd?: boolean | null;
};
export type CustomPopupInput = {
    /**
     * - The id for the html element
     */
    id: string;
    /**
     * - The label text for the input
     */
    label: string;
    /**
     * - Optional tooltip icon displayed behind the label
     */
    tooltip?: string | null;
    /**
     * - The default state when opening the popup (false if not set)
     */
    defaultState?: boolean | null;
};
/**
 * Local implementation of the helper functionality to show several popups.
 *
 * Should be called via `Popup.show.xxxx()`.
 */
export type ShowPopupHelper = object;
//# sourceMappingURL=popup.d.ts.map