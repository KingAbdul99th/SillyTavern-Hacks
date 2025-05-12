export class AutoCompleteNameResult extends AutoCompleteNameResultBase {
    /**
     *
     * @param {string} text The whole text
     * @param {number} index Cursor index within text
     * @param {boolean} isSelect Whether autocomplete was triggered by selecting an autocomplete option
     * @returns {AutoCompleteSecondaryNameResult}
     */
    getSecondaryNameAt(text: string, index: number, isSelect: boolean): AutoCompleteSecondaryNameResult;
}
import { AutoCompleteNameResultBase } from './AutoCompleteNameResultBase.js';
import { AutoCompleteSecondaryNameResult } from './AutoCompleteSecondaryNameResult.js';
//# sourceMappingURL=AutoCompleteNameResult.d.ts.map