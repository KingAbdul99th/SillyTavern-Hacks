export class AutoCompleteOption {
    /**
     * @param {string} name
     */
    constructor(name: string, typeIcon?: string, type?: string, matchProvider?: any, valueProvider?: any, makeSelectable?: boolean);
    /** @type {string} */ name: string;
    /** @type {string} */ typeIcon: string;
    /** @type {string} */ type: string;
    /** @type {number} */ nameOffset: number;
    /** @type {AutoCompleteFuzzyScore} */ score: AutoCompleteFuzzyScore;
    /** @type {string} */ replacer: string;
    /** @type {HTMLElement} */ dom: HTMLElement;
    /** @type {(input:string)=>boolean} */ matchProvider: (input: string) => boolean;
    /** @type {(input:string)=>string} */ valueProvider: (input: string) => string;
    /** @type {boolean} */ makeSelectable: boolean;
    /**
     * Used as a comparison value when removing duplicates (e.g., when a SlashCommand has aliases).
     * @type {any}
     * */
    get value(): any;
    get isSelectable(): boolean;
    makeItem(key: any, typeIcon: any, noSlash: any, namedArguments?: any[], unnamedArguments?: any[], returnType?: string, helpString?: string, aliasList?: any[]): HTMLLIElement;
    /**
     * @returns {HTMLElement}
     */
    renderItem(): HTMLElement;
    /**
     * @returns {DocumentFragment}
     */
    renderDetails(): DocumentFragment;
}
import { AutoCompleteFuzzyScore } from './AutoCompleteFuzzyScore.js';
//# sourceMappingURL=AutoCompleteOption.d.ts.map