/**
 * *
 */
export type PARSER_FLAG = number;
export namespace PARSER_FLAG {
    let STRICT_ESCAPING: number;
    let REPLACE_GETVAR: number;
}
export class SlashCommandParser {
    /** @type {Object.<string, SlashCommand>} */ static commands: {
        [x: string]: SlashCommand;
    };
    /**
     * @deprecated Use SlashCommandParser.addCommandObject() instead.
     * @param {string} command Command name
     * @param {(namedArguments:NamedArguments|NamedArgumentsCapture, unnamedArguments:string|SlashCommandClosure|(string|SlashCommandClosure)[])=>string|SlashCommandClosure|Promise<string|SlashCommandClosure>} callback callback The function to execute when the command is called
     * @param {string[]} aliases List of alternative command names
     * @param {string} helpString Help text shown in autocomplete and command browser
     */
    static addCommand(command: string, callback: (namedArguments: NamedArguments | NamedArgumentsCapture, unnamedArguments: string | SlashCommandClosure | (string | SlashCommandClosure)[]) => string | SlashCommandClosure | Promise<string | SlashCommandClosure>, aliases: string[], helpString?: string): void;
    /**
     *
     * @param {SlashCommand} command
     */
    static addCommandObject(command: SlashCommand): void;
    /**
     *
     * @param {SlashCommand} command
     */
    static addCommandObjectUnsafe(command: SlashCommand): void;
    get commands(): {
        [x: string]: SlashCommand;
    };
    /** @type {Object.<string, string>} */ helpStrings: {
        [x: string]: string;
    };
    /** @type {boolean} */ verifyCommandNames: boolean;
    /** @type {string} */ text: string;
    /** @type {number} */ index: number;
    /** @type {SlashCommandAbortController} */ abortController: SlashCommandAbortController;
    /** @type {SlashCommandDebugController} */ debugController: SlashCommandDebugController;
    /** @type {SlashCommandScope} */ scope: SlashCommandScope;
    /** @type {SlashCommandClosure} */ closure: SlashCommandClosure;
    /** @type {Object.<PARSER_FLAG,boolean>} */ flags: any;
    /** @type {boolean} */ jumpedEscapeSequence: boolean;
    /** @type {{start:number, end:number}[]} */ closureIndex: {
        start: number;
        end: number;
    }[];
    /** @type {{start:number, end:number, name:string}[]} */ macroIndex: {
        start: number;
        end: number;
        name: string;
    }[];
    /** @type {SlashCommandExecutor[]} */ commandIndex: SlashCommandExecutor[];
    /** @type {SlashCommandScope[]} */ scopeIndex: SlashCommandScope[];
    /** @type {string} */ parserContext: string;
    get userIndex(): number;
    get ahead(): string;
    get behind(): string;
    get char(): string;
    get endOfText(): boolean;
    registerLanguage(): void;
    getHelpString(): string;
    /**
     *
     * @param {*} text The text to parse.
     * @param {*} index Index to check for names (cursor position).
     */
    getNameAt(text: any, index: any): Promise<AutoCompleteNameResult>;
    /**
     * Moves the index <length> number of characters forward and returns the last character taken.
     * @param {number} length Number of characters to take.
     * @param {boolean} keep Whether to add the characters to the kept text.
     * @returns The last character taken.
     */
    take(length?: number): string;
    discardWhitespace(): void;
    /**
     * Tests if the next characters match a symbol.
     * Moves the index forward if the next characters are backslashes directly followed by the symbol.
     * Expects that the current char is taken after testing.
     * @param {string|RegExp} sequence Sequence of chars or regex character group that is the symbol.
     * @param {number} offset Offset from the current index (won't move the index if offset != 0).
     * @returns Whether the next characters are the indicated symbol.
     */
    testSymbol(sequence: string | RegExp, offset?: number): boolean;
    testSymbolLooseyGoosey(sequence: any, offset?: number): boolean;
    replaceGetvar(value: any): any;
    parse(text: any, verifyCommandNames?: boolean, flags?: any, abortController?: any, debugController?: any): SlashCommandClosure;
    testClosure(): boolean;
    testClosureEnd(): boolean;
    parseClosure(isRoot?: boolean): SlashCommandClosure;
    testBreakPoint(): boolean;
    parseBreakPoint(): SlashCommandBreakPoint;
    testBreak(): boolean;
    parseBreak(): SlashCommandBreak;
    testBlockComment(): boolean;
    testBlockCommentEnd(): boolean;
    parseBlockComment(): void;
    testComment(): boolean;
    testCommentEnd(): boolean;
    parseComment(): void;
    testParserFlag(): boolean;
    testParserFlagEnd(): boolean;
    parseParserFlag(): void;
    testRunShorthand(): boolean;
    testRunShorthandEnd(): boolean;
    parseRunShorthand(): SlashCommandExecutor;
    testCommand(): boolean;
    testCommandEnd(): boolean;
    parseCommand(): SlashCommandExecutor;
    testNamedArgument(): boolean;
    parseNamedArgument(): SlashCommandNamedArgumentAssignment;
    testUnnamedArgument(): boolean;
    testUnnamedArgumentEnd(): boolean;
    parseUnnamedArgument(split: any, splitCount?: any, rawQuotes?: boolean): SlashCommandUnnamedArgumentAssignment[];
    testQuotedValue(): boolean;
    testQuotedValueEnd(): boolean;
    parseQuotedValue(): string;
    testListValue(): boolean;
    testListValueEnd(): boolean;
    parseListValue(): string;
    testValue(): boolean;
    testValueEnd(): boolean;
    parseValue(): string;
    indexMacros(offset: any, text: any): void;
}
export type NamedArgumentsCapture = import("./SlashCommand.js").NamedArgumentsCapture;
export type NamedArguments = import("./SlashCommand.js").NamedArguments;
export type ParserFlags = {
    [id: PARSER_FLAG]: boolean;
};
import { SlashCommand } from './SlashCommand.js';
import { SlashCommandAbortController } from './SlashCommandAbortController.js';
import { SlashCommandDebugController } from './SlashCommandDebugController.js';
import { SlashCommandScope } from './SlashCommandScope.js';
import { SlashCommandClosure } from './SlashCommandClosure.js';
import { SlashCommandExecutor } from './SlashCommandExecutor.js';
import { AutoCompleteNameResult } from '../autocomplete/AutoCompleteNameResult.js';
import { SlashCommandBreakPoint } from './SlashCommandBreakPoint.js';
import { SlashCommandBreak } from './SlashCommandBreak.js';
import { SlashCommandNamedArgumentAssignment } from './SlashCommandNamedArgumentAssignment.js';
import { SlashCommandUnnamedArgumentAssignment } from './SlashCommandUnnamedArgumentAssignment.js';
//# sourceMappingURL=SlashCommandParser.d.ts.map