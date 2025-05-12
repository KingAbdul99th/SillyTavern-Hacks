export class BulkEditOverlayState {
    /**
     *
     * @type {number}
     */
    static browse: number;
    /**
     *
     * @type {number}
     */
    static select: number;
}
/**
 * Static object representing the actions of the
 * character context menu override.
 */
export class CharacterContextMenu {
    /**
     * Tag one or more characters,
     * opens a popup.
     *
     * @param {Array<number>} selectedCharacters
     */
    static tag: (selectedCharacters: Array<number>) => void;
    /**
     * Duplicate one or more characters
     *
     * @param {number} characterId
     * @returns {Promise<any>}
     */
    static duplicate: (characterId: number) => Promise<any>;
    /**
     * Favorite a character
     * and highlight it.
     *
     * @param {number} characterId
     * @returns {Promise<void>}
     */
    static favorite: (characterId: number) => Promise<void>;
    /**
     * Convert one or more characters to persona,
     * may open a popup for one or more characters.
     *
     * @param {number} characterId
     * @returns {Promise<void>}
     */
    static persona: (characterId: number) => Promise<void>;
    /**
     * Delete one or more characters,
     * opens a popup.
     *
     * @param {string|string[]} characterKey
     * @param {boolean} [deleteChats]
     * @returns {Promise<void>}
     */
    static delete: (characterKey: string | string[], deleteChats?: boolean) => Promise<void>;
    static "__#84@#getCharacter": (characterId: any) => import("./char-data.js").v1CharData;
    /**
     * Show the context menu at the given position
     *
     * @param positionX
     * @param positionY
     */
    static show: (positionX: any, positionY: any) => void;
    /**
     * Hide the context menu
     */
    static hide: () => void;
    /**
     * Sets up the context menu for the given overlay
     *
     * @param characterGroupOverlay
     */
    constructor(characterGroupOverlay: any);
}
export class BulkEditOverlay {
    static containerId: string;
    static contextMenuId: string;
    static characterClass: string;
    static groupClass: string;
    static bogusFolderClass: string;
    static selectModeClass: string;
    static selectedClass: string;
    static legacySelectedClass: string;
    static bulkSelectedCountId: string;
    static longPressDelay: number;
    /**
     * Gets the HTML as a string that is displayed inside the popup for the bulk delete
     *
     * @param {Array<number>} characterIds - The characters that are shown inside the popup
     * @returns String containing the html for the popup content
     */
    static "__#86@#getDeletePopupContentHtml": (characterIds: Array<number>) => string;
    /**
     * @typedef {object} LastSelected - An object noting the last selected character and its state.
     * @property {number} [characterId] - The character id of the last selected character.
     * @property {boolean} [select] - The selected state of the last selected character. <c>true</c> if it was selected, <c>false</c> if it was deselected.
     */
    /**
     * @type {LastSelected} - An object noting the last selected character and its state.
     */
    lastSelected: {
        /**
         * - The character id of the last selected character.
         */
        characterId?: number;
        /**
         * - The selected state of the last selected character. <c>true</c> if it was selected, <c>false</c> if it was deselected.
         */
        select?: boolean;
    };
    /**
     * @type HTMLElement
     */
    container: HTMLElement;
    set state(newState: number);
    get state(): number;
    set isLongPress(longPress: boolean);
    get isLongPress(): boolean;
    get stateChangeCallbacks(): any[];
    /**
     *
     * @returns {number[]}
     */
    get selectedCharacters(): number[];
    /**
     * The instance of the bulk tag popup handler that handles tagging of all selected characters
     *
     * @returns {BulkTagPopupHandler}
     */
    get bulkTagPopupHandler(): BulkTagPopupHandler;
    /**
     * Set the overlay to browse mode
     */
    browseState: () => number;
    /**
     * Set the overlay to select mode
     */
    selectState: () => number;
    /**
     * Set up a Sortable grid for the loaded page
     */
    onPageLoad: () => void;
    /**
     * Handle state changes
     *
     *
     */
    handleStateChange: () => void;
    /**
     * Block the browsers native context menu and
     * set a click event to hide the custom context menu.
     */
    enableContextMenu: () => void;
    /**
     * Remove event listeners, allowing the native browser context
     * menu to be opened.
     */
    disableContextMenu: () => void;
    handleDefaultContextMenu: (event: any) => boolean;
    /**
     * Opens menu on long-press.
     *
     * @param event - Pointer event
     */
    handleHold: (event: any) => void;
    handleLongPressEnd: (event: any) => void;
    handleCancelClick: () => void;
    toggleCharacterSelected: (event: any) => void;
    /**
     * When shift click was held down, this function handles the multi select of characters in a single click.
     *
     * If the last clicked character was deselected, and the current one was deselected too, it will deselect all currently selected characters between those two.
     * If the last clicked character was selected, and the current one was selected too, it will select all currently not selected characters between those two.
     * If the states do not match, nothing will happen.
     *
     * @param {HTMLElement} currentCharacter - The html element of the currently toggled character
     */
    handleShiftClick: (currentCharacter: HTMLElement) => void;
    /**
     * Toggles the selection of a given characters
     *
     * @param {HTMLElement} character - The html element of a character
     * @param {object} param1 - Optional params
     * @param {boolean} [param1.markState] - Whether the toggle of this character should be remembered as the last done toggle
     */
    toggleSingleCharacter: (character: HTMLElement, { markState }?: {
        markState?: boolean;
    }) => void;
    /**
     * Updates the selected count element with the current count
     *
     * @param {number} [countOverride] - optional override for a manual number to set
     */
    updateSelectedCount: (countOverride?: number) => void;
    /**
     * Toggles the selection of characters in a given range.
     * The range is provided by the given character and the last selected one remembered in the selection state.
     *
     * @param {HTMLElement} currentCharacter - The html element of the currently toggled character
     * @param {boolean} select - <c>true</c> if the characters in the range are to be selected, <c>false</c> if deselected
     */
    toggleCharactersInRange: (currentCharacter: HTMLElement, select: boolean) => void;
    handleContextMenuShow: (event: any) => void;
    handleContextMenuHide: (event: any) => void;
    /**
     * Concurrently handle character favorite requests.
     *
     * @returns {Promise<void>}
     */
    handleContextMenuFavorite: () => Promise<void>;
    /**
     * Concurrently handle character duplicate requests.
     *
     * @returns {Promise<number>}
     */
    handleContextMenuDuplicate: () => Promise<number>;
    /**
     * Sequentially handle all character-to-persona conversions.
     *
     * @returns {Promise<void>}
     */
    handleContextMenuPersona: () => Promise<void>;
    /**
     * Request user input before concurrently handle deletion
     * requests.
     *
     * @returns {Promise<number>}
     */
    handleContextMenuDelete: () => Promise<number>;
    /**
     * Attaches and opens the tag menu
     */
    handleContextMenuTag: () => void;
    addStateChangeCallback: (callback: any) => number;
    /**
     * Clears internal character storage and
     * removes visual highlight.
     */
    clearSelectedCharacters: () => void;
    #private;
}
/**
 * Represents a tag control not bound to a single character
 */
declare class BulkTagPopupHandler {
    /**
     * The characters for this popup
     * @type {number[]}
     */
    characterIds: number[];
    /**
     * A storage of the current mutual tags, as calculated by getMutualTags()
     * @type {object[]}
     */
    currentMutualTags: object[];
    /**
     * Append and show the tag control
     *
     * @param {number[]} characterIds - The characters that are shown inside the popup
     */
    show(characterIds: number[]): void;
    /**
     * Import existing tags for all selected characters
     */
    importExistingTags(): Promise<void>;
    /**
     * Import all tags for all selected characters
     */
    importAllTags(): Promise<void>;
    /**
     * Builds a list of all tags that the provided characters have in common.
     *
     * @returns {Array<object>} A list of mutual tags
     */
    getMutualTags(): Array<object>;
    /**
     * Hide and remove the tag control
     */
    hide(): void;
    /**
     * Empty the tag map for the given characters
     */
    resetTags(): void;
    /**
     * Remove the mutual tags for all given characters
     */
    removeMutual(): void;
    #private;
}
export {};
//# sourceMappingURL=BulkEditOverlay.d.ts.map