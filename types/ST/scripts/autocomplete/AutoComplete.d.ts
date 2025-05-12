export type AUTOCOMPLETE_WIDTH = number;
export namespace AUTOCOMPLETE_WIDTH {
    let INPUT: number;
    let CHAT: number;
    let FULL: number;
}
export type AUTOCOMPLETE_SELECT_KEY = number;
export namespace AUTOCOMPLETE_SELECT_KEY {
    let TAB: number;
    let ENTER: number;
}
export class AutoComplete {
    /**
     * @param {HTMLTextAreaElement|HTMLInputElement} textarea The textarea to receive autocomplete.
     * @param {() => boolean} checkIfActivate Function should return true only if under the current conditions, autocomplete should display (e.g., for slash commands: autoComplete.text[0] == '/')
     * @param {(text: string, index: number) => Promise<AutoCompleteNameResult>} getNameAt Function should return (unfiltered, matching against input is done in AutoComplete) information about name options at index in text.
     * @param {boolean} isFloating Whether autocomplete should float at the keyboard cursor.
     */
    constructor(textarea: HTMLTextAreaElement | HTMLInputElement, checkIfActivate: () => boolean, getNameAt: (text: string, index: number) => Promise<AutoCompleteNameResult>, isFloating?: boolean);
    /**@type {HTMLTextAreaElement|HTMLInputElement}*/ textarea: HTMLTextAreaElement | HTMLInputElement;
    /**@type {boolean}*/ isFloating: boolean;
    /**@type {()=>boolean}*/ checkIfActivate: () => boolean;
    /**@type {(text:string, index:number) => Promise<AutoCompleteNameResult>}*/ getNameAt: (text: string, index: number) => Promise<AutoCompleteNameResult>;
    /**@type {boolean}*/ isActive: boolean;
    /**@type {boolean}*/ isReplaceable: boolean;
    /**@type {boolean}*/ isShowingDetails: boolean;
    /**@type {boolean}*/ wasForced: boolean;
    /**@type {boolean}*/ isForceHidden: boolean;
    /**@type {boolean}*/ canBeAutoHidden: boolean;
    /**@type {string}*/ text: string;
    /**@type {AutoCompleteNameResult}*/ parserResult: AutoCompleteNameResult;
    /**@type {AutoCompleteSecondaryNameResult}*/ secondaryParserResult: AutoCompleteSecondaryNameResult;
    get effectiveParserResult(): AutoCompleteSecondaryNameResult | AutoCompleteNameResult;
    /**@type {string}*/ name: string;
    /**@type {boolean}*/ startQuote: boolean;
    /**@type {boolean}*/ endQuote: boolean;
    /**@type {number}*/ selectionStart: number;
    /**@type {RegExp}*/ fuzzyRegex: RegExp;
    /**@type {AutoCompleteOption[]}*/ result: AutoCompleteOption[];
    /**@type {AutoCompleteOption}*/ selectedItem: AutoCompleteOption;
    /**@type {HTMLElement}*/ clone: HTMLElement;
    /**@type {HTMLElement}*/ domWrap: HTMLElement;
    /**@type {HTMLElement}*/ dom: HTMLElement;
    /**@type {HTMLElement}*/ detailsWrap: HTMLElement;
    /**@type {HTMLElement}*/ detailsDom: HTMLElement;
    /**@type {function}*/ renderDebounced: Function;
    /**@type {function}*/ renderDetailsDebounced: Function;
    /**@type {function}*/ updatePositionDebounced: Function;
    /**@type {function}*/ updateDetailsPositionDebounced: Function;
    /**@type {function}*/ updateFloatingPositionDebounced: Function;
    /**@type {(item:AutoCompleteOption)=>any}*/ onSelect: (item: AutoCompleteOption) => any;
    get matchType(): string;
    get autoHide(): boolean;
    /**
     *
     * @param {AutoCompleteOption} option
     */
    makeItem(option: AutoCompleteOption): HTMLElement;
    /**
     *
     * @param {AutoCompleteOption} item
     */
    updateName(item: AutoCompleteOption): AutoCompleteOption;
    /**
     * Calculate score for the fuzzy match.
     * @param {AutoCompleteOption} option
     * @returns The option.
     */
    fuzzyScore(option: AutoCompleteOption): AutoCompleteOption;
    /**
     * Compare two auto complete options by their fuzzy score.
     * @param {AutoCompleteOption} a
     * @param {AutoCompleteOption} b
     */
    fuzzyScoreCompare(a: AutoCompleteOption, b: AutoCompleteOption): number;
    basicAutoHideCheck(): boolean;
    /**
     * Show the autocomplete.
     * @param {boolean} isInput Whether triggered by input.
     * @param {boolean} isForced Whether force-showing (ctrl+space).
     * @param {boolean} isSelect Whether an autocomplete option was just selected.
     */
    show(isInput?: boolean, isForced?: boolean, isSelect?: boolean): Promise<void>;
    /**
     * Hide autocomplete.
     */
    hide(): void;
    /**
     * Create updated DOM.
     */
    render(): void;
    /**
     * Create updated DOM for details.
     */
    renderDetails(): void;
    /**
     * @returns {HTMLElement} closest ancestor dialog or body
     */
    getLayer(): HTMLElement;
    /**
     * Update position of DOM.
     */
    updatePosition(): void;
    /**
     * Update position of details DOM.
     */
    updateDetailsPosition(): void;
    /**
     * Update position of floating autocomplete.
     */
    updateFloatingPosition(): void;
    updateFloatingDetailsPosition(location?: any): void;
    /**
     * Calculate (keyboard) cursor coordinates within textarea.
     * @returns {{left:number, top:number, bottom:number}}
     */
    getCursorPosition(): {
        left: number;
        top: number;
        bottom: number;
    };
    /**
     * Toggle details view alongside autocomplete list.
     */
    toggleDetails(): void;
    /**
     * Select an item for autocomplete and put text into textarea.
     */
    select(): Promise<void>;
    /**
     * Mark the item at newIdx in the autocomplete list as selected.
     * @param {number} newIdx
     */
    selectItemAtIndex(newIdx: number): void;
    /**
     * Handle keyboard events.
     * @param {KeyboardEvent} evt The event.
     */
    handleKeyDown(evt: KeyboardEvent): Promise<void>;
}
import { AutoCompleteNameResult } from './AutoCompleteNameResult.js';
import { AutoCompleteSecondaryNameResult } from './AutoCompleteSecondaryNameResult.js';
import { AutoCompleteOption } from './AutoCompleteOption.js';
//# sourceMappingURL=AutoComplete.d.ts.map