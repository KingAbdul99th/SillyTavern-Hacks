export class SlashCommandCommandAutoCompleteOption extends AutoCompleteOption {
    /**
     * @param {SlashCommand} command
     * @param {string} name
     */
    constructor(command: SlashCommand, name: string);
    /**@type {SlashCommand}*/ command: SlashCommand;
    get value(): SlashCommand;
}
import { AutoCompleteOption } from '../autocomplete/AutoCompleteOption.js';
import { SlashCommand } from './SlashCommand.js';
//# sourceMappingURL=SlashCommandCommandAutoCompleteOption.d.ts.map