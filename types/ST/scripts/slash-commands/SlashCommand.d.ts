/**
 * @typedef {{
 * _scope:SlashCommandScope,
 * _parserFlags:import('./SlashCommandParser.js').ParserFlags,
 * _abortController:SlashCommandAbortController,
 * _debugController:SlashCommandDebugController,
 * _hasUnnamedArgument:boolean,
 * [id:string]:string|SlashCommandClosure|(string|SlashCommandClosure)[]|undefined,
 * }} NamedArguments
 */
/**
 * Alternative object for local JSDocs, where you don't need existing pipe, scope, etc. arguments
 * @typedef {{[id:string]:string|SlashCommandClosure|(string|SlashCommandClosure)[]|undefined}} NamedArgumentsCapture
 */
/**
 * @typedef {string|SlashCommandClosure|(string|SlashCommandClosure)[]} UnnamedArguments
*/
export class SlashCommand {
    /**
     * Creates a SlashCommand from a properties object.
     * @param {Object} props
     * @param {string} [props.name]
     * @param {(namedArguments:NamedArguments|NamedArgumentsCapture, unnamedArguments:string|SlashCommandClosure|(string|SlashCommandClosure)[])=>string|SlashCommandClosure|Promise<string|SlashCommandClosure>} [props.callback]
     * @param {string} [props.helpString]
     * @param {boolean} [props.splitUnnamedArgument]
     * @param {Number} [props.splitUnnamedArgumentCount]
     * @param {boolean} [props.rawQuotes] If set to true, does not remove wrapping quotes from the unnamed argument.
     * @param {string[]} [props.aliases]
     * @param {string} [props.returns]
     * @param {SlashCommandNamedArgument[]} [props.namedArgumentList]
     * @param {SlashCommandArgument[]} [props.unnamedArgumentList]
     */
    static fromProps(props: {
        name?: string;
        callback?: (namedArguments: NamedArguments | NamedArgumentsCapture, unnamedArguments: string | SlashCommandClosure | (string | SlashCommandClosure)[]) => string | SlashCommandClosure | Promise<string | SlashCommandClosure>;
        helpString?: string;
        splitUnnamedArgument?: boolean;
        splitUnnamedArgumentCount?: number;
        rawQuotes?: boolean;
        aliases?: string[];
        returns?: string;
        namedArgumentList?: SlashCommandNamedArgument[];
        unnamedArgumentList?: SlashCommandArgument[];
    }): SlashCommand & {
        name?: string;
        callback?: (namedArguments: NamedArguments | NamedArgumentsCapture, unnamedArguments: string | SlashCommandClosure | (string | SlashCommandClosure)[]) => string | SlashCommandClosure | Promise<string | SlashCommandClosure>;
        helpString?: string;
        splitUnnamedArgument?: boolean;
        splitUnnamedArgumentCount?: number;
        rawQuotes?: boolean;
        aliases?: string[];
        returns?: string;
        namedArgumentList?: SlashCommandNamedArgument[];
        unnamedArgumentList?: SlashCommandArgument[];
    };
    /**@type {string}*/ name: string;
    /**@type {(namedArguments:{_scope:SlashCommandScope, _abortController:SlashCommandAbortController, [id:string]:string|SlashCommandClosure}, unnamedArguments:string|SlashCommandClosure|(string|SlashCommandClosure)[])=>string|SlashCommandClosure|Promise<string|SlashCommandClosure>}*/ callback: (namedArguments: {
        _scope: SlashCommandScope;
        _abortController: SlashCommandAbortController;
        [id: string]: string | SlashCommandClosure;
    }, unnamedArguments: string | SlashCommandClosure | (string | SlashCommandClosure)[]) => string | SlashCommandClosure | Promise<string | SlashCommandClosure>;
    /**@type {string}*/ helpString: string;
    /**@type {boolean}*/ splitUnnamedArgument: boolean;
    /**@type {Number}*/ splitUnnamedArgumentCount: number;
    /** @type {boolean} */ rawQuotes: boolean;
    /**@type {string[]}*/ aliases: string[];
    /**@type {string}*/ returns: string;
    /**@type {SlashCommandNamedArgument[]}*/ namedArgumentList: SlashCommandNamedArgument[];
    /**@type {SlashCommandArgument[]}*/ unnamedArgumentList: SlashCommandArgument[];
    /**@type {Object.<string, HTMLElement>}*/ helpCache: {
        [x: string]: HTMLElement;
    };
    /**@type {Object.<string, DocumentFragment>}*/ helpDetailsCache: {
        [x: string]: DocumentFragment;
    };
    /**@type {boolean}*/ isExtension: boolean;
    /**@type {boolean}*/ isThirdParty: boolean;
    /**@type {string}*/ source: string;
    renderHelpItem(key?: any): HTMLElement;
    renderHelpDetails(key?: any): DocumentFragment;
}
export type NamedArguments = {
    _scope: SlashCommandScope;
    _parserFlags: import("./SlashCommandParser.js").ParserFlags;
    _abortController: SlashCommandAbortController;
    _debugController: SlashCommandDebugController;
    _hasUnnamedArgument: boolean;
    [id: string]: string | SlashCommandClosure | (string | SlashCommandClosure)[] | undefined;
};
/**
 * Alternative object for local JSDocs, where you don't need existing pipe, scope, etc. arguments
 */
export type NamedArgumentsCapture = {
    [id: string]: string | SlashCommandClosure | (string | SlashCommandClosure)[] | undefined;
};
export type UnnamedArguments = string | SlashCommandClosure | (string | SlashCommandClosure)[];
import { SlashCommandScope } from './SlashCommandScope.js';
import { SlashCommandAbortController } from './SlashCommandAbortController.js';
import { SlashCommandClosure } from './SlashCommandClosure.js';
import { SlashCommandNamedArgument } from './SlashCommandArgument.js';
import { SlashCommandArgument } from './SlashCommandArgument.js';
import { SlashCommandDebugController } from './SlashCommandDebugController.js';
//# sourceMappingURL=SlashCommand.d.ts.map