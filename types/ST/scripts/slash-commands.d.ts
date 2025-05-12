export function initDefaultSlashCommands(): void;
export function processChatSlashCommands(): void;
export function generateSystemMessage(_: any, prompt: any): Promise<string>;
/**
 * Checks if an argument is a string array (or undefined), and if not, throws an error
 * @param {string|SlashCommandClosure|(string|SlashCommandClosure)[]|undefined} arg The named argument to check
 * @param {string} name The name of the argument for the error message
 * @param {object} [options={}] - The optional arguments
 * @param {boolean} [options.allowUndefined=false] - Whether the argument can be undefined
 * @throws {Error} If the argument is not an array
 * @returns {string[]}
 */
export function validateArrayArgString(arg: string | SlashCommandClosure | (string | SlashCommandClosure)[] | undefined, name: string, { allowUndefined }?: {
    allowUndefined?: boolean;
}): string[];
/**
 * Checks if an argument is a string or closure array (or undefined), and if not, throws an error
 * @param {string|SlashCommandClosure|(string|SlashCommandClosure)[]|undefined} arg The named argument to check
 * @param {string} name The name of the argument for the error message
 * @param {object} [options={}] - The optional arguments
 * @param {boolean} [options.allowUndefined=false] - Whether the argument can be undefined
 * @throws {Error} If the argument is not an array of strings or closures
 * @returns {(string|SlashCommandClosure)[]}
 */
export function validateArrayArg(arg: string | SlashCommandClosure | (string | SlashCommandClosure)[] | undefined, name: string, { allowUndefined }?: {
    allowUndefined?: boolean;
}): (string | SlashCommandClosure)[];
/**
 * Retrieves the name and avatar information for a message
 *
 * The name of the character will always have precendence over the one given as argument. If you want to specify a different name for the message,
 * explicitly implement this in the code using this.
 *
 * @param {object?} character - The character object to get the avatar data for
 * @param {string?} name - The name to get the avatar data for
 * @returns {{name: string, force_avatar: string, original_avatar: string}} An object containing the name for the message, forced avatar URL, and original avatar
 */
export function getNameAndAvatarForMessage(character: object | null, name?: string | null): {
    name: string;
    force_avatar: string;
    original_avatar: string;
};
export function sendMessageAs(args: any, text: any): Promise<any>;
export function sendNarratorMessage(args: any, text: any): Promise<any>;
export function promptQuietForLoudResponse(who: any, text: any): Promise<void>;
/**
 * Show command execution pause/stop buttons next to chat input.
 */
export function activateScriptButtons(): void;
/**
 * Hide command execution pause/stop buttons next to chat input.
 */
export function deactivateScriptButtons(): void;
/**
 * Toggle pause/continue command execution. Only for commands executed via chat input.
 */
export function pauseScriptExecution(): void;
/**
 * Stop command execution. Only for commands executed via chat input.
 */
export function stopScriptExecution(): void;
/**
 * @typedef ExecuteSlashCommandsOptions
 * @prop {boolean} [handleParserErrors] (true) Whether to handle parser errors (show toast on error) or throw.
 * @prop {SlashCommandScope} [scope] (null) The scope to be used when executing the commands.
 * @prop {boolean} [handleExecutionErrors] (false) Whether to handle execution errors (show toast on error) or throw
 * @prop {import('./slash-commands/SlashCommandParser.js').ParserFlags} [parserFlags] (null) Parser flags to apply
 * @prop {SlashCommandAbortController} [abortController] (null) Controller used to abort or pause command execution
 * @prop {SlashCommandDebugController} [debugController] (null) Controller used to control debug execution
 * @prop {(done:number, total:number)=>void} [onProgress] (null) Callback to handle progress events
 * @prop {string} [source] (null) String indicating where the code come from (e.g., QR name)
 */
/**
 * @typedef ExecuteSlashCommandsOnChatInputOptions
 * @prop {SlashCommandScope} [scope] (null) The scope to be used when executing the commands.
 * @prop {import('./slash-commands/SlashCommandParser.js').ParserFlags} [parserFlags] (null) Parser flags to apply
 * @prop {boolean} [clearChatInput] (false) Whether to clear the chat input textarea
 * @prop {string} [source] (null) String indicating where the code come from (e.g., QR name)
 */
/**
 * Execute slash commands while showing progress indicator and pause/stop buttons on
 * chat input.
 * @param {string} text Slash command text
 * @param {ExecuteSlashCommandsOnChatInputOptions} options
 */
export function executeSlashCommandsOnChatInput(text: string, options?: ExecuteSlashCommandsOnChatInputOptions): Promise<SlashCommandClosureResult>;
/**
 *
 * @param {HTMLTextAreaElement} textarea The textarea to receive autocomplete
 * @param {Boolean} isFloating Whether to show the auto complete as a floating window (e.g., large QR editor)
 * @returns {Promise<AutoComplete>}
 */
export function setSlashCommandAutoComplete(textarea: HTMLTextAreaElement, isFloating?: boolean): Promise<AutoComplete>;
export const parser: SlashCommandParser;
export const COMMENT_NAME_DEFAULT: "Note";
export let isExecutingCommandsFromChatInput: boolean;
export let commandsFromChatInputAbortController: any;
/**
 * - arguments for /fuzzy command
 */
export type FuzzyCommandArgs = {
    list: string;
    threshold: string;
    mode: string;
};
export type ExecuteSlashCommandsOptions = {
    /**
     * (true) Whether to handle parser errors (show toast on error) or throw.
     */
    handleParserErrors?: boolean;
    /**
     * (null) The scope to be used when executing the commands.
     */
    scope?: SlashCommandScope;
    /**
     * (false) Whether to handle execution errors (show toast on error) or throw
     */
    handleExecutionErrors?: boolean;
    /**
     * (null) Parser flags to apply
     */
    parserFlags?: import("./slash-commands/SlashCommandParser.js").ParserFlags;
    /**
     * (null) Controller used to abort or pause command execution
     */
    abortController?: SlashCommandAbortController;
    /**
     * (null) Controller used to control debug execution
     */
    debugController?: SlashCommandDebugController;
    /**
     * (null) Callback to handle progress events
     */
    onProgress?: (done: number, total: number) => void;
    /**
     * (null) String indicating where the code come from (e.g., QR name)
     */
    source?: string;
};
export type ExecuteSlashCommandsOnChatInputOptions = {
    /**
     * (null) The scope to be used when executing the commands.
     */
    scope?: SlashCommandScope;
    /**
     * (null) Parser flags to apply
     */
    parserFlags?: import("./slash-commands/SlashCommandParser.js").ParserFlags;
    /**
     * (false) Whether to clear the chat input textarea
     */
    clearChatInput?: boolean;
    /**
     * (null) String indicating where the code come from (e.g., QR name)
     */
    source?: string;
};
import { SlashCommandClosure } from './slash-commands/SlashCommandClosure.js';
import { SlashCommandClosureResult } from './slash-commands/SlashCommandClosureResult.js';
import { AutoComplete } from './autocomplete/AutoComplete.js';
/**
 * Executes slash commands in the provided text
 * @deprecated Use executeSlashCommandWithOptions instead
 * @param {string} text Slash command text
 * @param {boolean} handleParserErrors Whether to handle parser errors (show toast on error) or throw
 * @param {SlashCommandScope} scope The scope to be used when executing the commands.
 * @param {boolean} handleExecutionErrors Whether to handle execution errors (show toast on error) or throw
 * @param {{[id:PARSER_FLAG]:boolean}} parserFlags Parser flags to apply
 * @param {SlashCommandAbortController} abortController Controller used to abort or pause command execution
 * @param {(done:number, total:number)=>void} onProgress Callback to handle progress events
 * @returns {Promise<SlashCommandClosureResult>}
 */
export function executeSlashCommands(text: string, handleParserErrors?: boolean, scope?: SlashCommandScope, handleExecutionErrors?: boolean, parserFlags?: {
    [id: PARSER_FLAG]: boolean;
}, abortController?: SlashCommandAbortController, onProgress?: (done: number, total: number) => void): Promise<SlashCommandClosureResult>;
/**
 *
 * @param {string} text Slash command text
 * @param {ExecuteSlashCommandsOptions} [options]
 * @returns {Promise<SlashCommandClosureResult>}
 */
export function executeSlashCommandsWithOptions(text: string, options?: ExecuteSlashCommandsOptions): Promise<SlashCommandClosureResult>;
export const getSlashCommandsHelp: any;
/**
 * @deprecated Use SlashCommandParser.addCommandObject() instead
 */
export const registerSlashCommand: any;
import { SlashCommandParser } from './slash-commands/SlashCommandParser.js';
import { SlashCommandScope } from './slash-commands/SlashCommandScope.js';
import { SlashCommandAbortController } from './slash-commands/SlashCommandAbortController.js';
import { SlashCommandDebugController } from './slash-commands/SlashCommandDebugController.js';
//# sourceMappingURL=slash-commands.d.ts.map