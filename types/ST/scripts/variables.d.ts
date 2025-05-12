export function getLocalVariable(name: any, args?: {}): any;
export function setLocalVariable(name: any, value: any, args?: {}): any;
export function getGlobalVariable(name: any, args?: {}): any;
export function setGlobalVariable(name: any, value: any, args?: {}): any;
/**
 * Resolves a variable name to its value or returns the string as is if the variable does not exist.
 * @param {string} name Variable name
 * @param {SlashCommandScope} scope Scope
 * @returns {string} Variable value or the string literal
 */
export function resolveVariable(name: string, scope?: SlashCommandScope): string;
/**
 * Returns built-in variable macros.
 * @returns {import('./macros.js').Macro[]}
 */
export function getVariableMacros(): import("./macros.js").Macro[];
/**
 * Parses boolean operands from command arguments.
 * @param {object} args Command arguments
 * @returns {{a: string | number, b: string | number?, rule: string}} Boolean operands
 */
export function parseBooleanOperands(args: object): {
    a: string | number;
    b: string | (number | null);
    rule: string;
};
/**
 * Evaluates a boolean comparison rule.
 *
 * @param {string?} rule Boolean comparison rule
 * @param {string|number} a The left operand
 * @param {string|number?} b The right operand
 * @returns {boolean} True if the rule yields true, false otherwise
 */
export function evalBoolean(rule: string | null, a: string | number, b: string | (number | null)): boolean;
export function registerVariableCommands(): void;
export type NamedArguments = import("./slash-commands/SlashCommandParser.js").NamedArguments;
export type UnnamedArguments = import("./slash-commands/SlashCommand.js").UnnamedArguments;
import { SlashCommandScope } from './slash-commands/SlashCommandScope.js';
//# sourceMappingURL=variables.d.ts.map