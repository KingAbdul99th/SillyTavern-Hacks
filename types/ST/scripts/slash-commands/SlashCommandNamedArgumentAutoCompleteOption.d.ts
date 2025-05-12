export class SlashCommandNamedArgumentAutoCompleteOption extends AutoCompleteOption {
    /**
     * @param {SlashCommandNamedArgument} arg
     */
    constructor(arg: SlashCommandNamedArgument, cmd: any);
    /** @type {SlashCommandNamedArgument} */ arg: SlashCommandNamedArgument;
    /** @type {SlashCommand} */ cmd: SlashCommand;
    renderItem(): HTMLLIElement;
}
import { AutoCompleteOption } from '../autocomplete/AutoCompleteOption.js';
import { SlashCommandNamedArgument } from './SlashCommandArgument.js';
import { SlashCommand } from './SlashCommand.js';
//# sourceMappingURL=SlashCommandNamedArgumentAutoCompleteOption.d.ts.map