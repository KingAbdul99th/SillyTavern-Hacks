export class SlashCommandAutoCompleteNameResult extends AutoCompleteNameResult {
    /**
     * @param {SlashCommandExecutor} executor
     * @param {SlashCommandScope} scope
     * @param {Object.<string,SlashCommand>} commands
     */
    constructor(executor: SlashCommandExecutor, scope: SlashCommandScope, commands: {
        [x: string]: SlashCommand;
    });
    /**@type {SlashCommandExecutor}*/ executor: SlashCommandExecutor;
    /**@type {SlashCommandScope}*/ scope: SlashCommandScope;
    getSecondaryNameAt(text: any, index: any, isSelect: any): AutoCompleteSecondaryNameResult;
    getNamedArgumentAt(text: any, index: any, isSelect: any): AutoCompleteSecondaryNameResult;
    getUnnamedArgumentAt(text: any, index: any, isSelect: any): AutoCompleteSecondaryNameResult;
}
import { AutoCompleteNameResult } from '../autocomplete/AutoCompleteNameResult.js';
import { SlashCommandExecutor } from './SlashCommandExecutor.js';
import { SlashCommandScope } from './SlashCommandScope.js';
import { AutoCompleteSecondaryNameResult } from '../autocomplete/AutoCompleteSecondaryNameResult.js';
import { SlashCommand } from './SlashCommand.js';
//# sourceMappingURL=SlashCommandAutoCompleteNameResult.d.ts.map