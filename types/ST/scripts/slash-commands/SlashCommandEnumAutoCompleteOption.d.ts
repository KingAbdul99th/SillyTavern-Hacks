export class SlashCommandEnumAutoCompleteOption extends AutoCompleteOption {
    /**
     * @param {SlashCommand} cmd
     * @param {SlashCommandEnumValue} enumValue
     * @returns {SlashCommandEnumAutoCompleteOption}
     */
    static from(cmd: SlashCommand, enumValue: SlashCommandEnumValue): SlashCommandEnumAutoCompleteOption;
    /**@type {{value:(typeof SlashCommandEnumValue), option:(typeof SlashCommandEnumAutoCompleteOption)}[]} */
    static valueToOptionMap: {
        value: (typeof SlashCommandEnumValue);
        option: (typeof SlashCommandEnumAutoCompleteOption);
    }[];
    /**
     * @param {SlashCommand} cmd
     * @param {SlashCommandEnumValue} enumValue
     */
    constructor(cmd: SlashCommand, enumValue: SlashCommandEnumValue);
    /**@type {SlashCommand}*/ cmd: SlashCommand;
    /**@type {SlashCommandEnumValue}*/ enumValue: SlashCommandEnumValue;
    renderItem(): HTMLLIElement;
}
import { AutoCompleteOption } from '../autocomplete/AutoCompleteOption.js';
import { SlashCommand } from './SlashCommand.js';
import { SlashCommandEnumValue } from './SlashCommandEnumValue.js';
//# sourceMappingURL=SlashCommandEnumAutoCompleteOption.d.ts.map