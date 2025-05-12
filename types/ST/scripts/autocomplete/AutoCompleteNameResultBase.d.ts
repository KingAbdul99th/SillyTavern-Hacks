export class AutoCompleteNameResultBase {
    /**
     * @param {string} name Name (potentially partial) of the name at the requested index.
     * @param {number} start Index where the name starts.
     * @param {AutoCompleteOption[]} optionList A list of autocomplete options found in the current scope.
     * @param {boolean} canBeQuoted Whether the name can be inside quotes.
     * @param {()=>string} makeNoMatchText Function that returns text to show when no matches where found.
     * @param {()=>string} makeNoOptionsText Function that returns text to show when no options are available to match against.
     */
    constructor(name: string, start: number, optionList?: AutoCompleteOption[], canBeQuoted?: boolean, makeNoMatchText?: () => string, makeNoOptionsText?: () => string);
    /**@type {string} */ name: string;
    /**@type {number} */ start: number;
    /**@type {AutoCompleteOption[]} */ optionList: AutoCompleteOption[];
    /**@type {boolean} */ canBeQuoted: boolean;
    /**@type {()=>string} */ makeNoMatchText: () => string;
    /**@type {()=>string} */ makeNoOptionsText: () => string;
    noMatchText: () => string;
    noOptionstext: () => string;
}
import { AutoCompleteOption } from './AutoCompleteOption.js';
//# sourceMappingURL=AutoCompleteNameResultBase.d.ts.map