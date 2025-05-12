/**
 * Returns the ID of the last message in the chat
 *
 * Optionally can only choose specific messages, if a filter is provided.
 *
 * @param {object} param0 - Optional arguments
 * @param {boolean} [param0.exclude_swipe_in_propress=true] - Whether a message that is currently being swiped should be ignored
 * @param {function(object):boolean} [param0.filter] - A filter applied to the search, ignoring all messages that don't match the criteria. For example to only find user messages, etc.
 * @returns {number|null} The message id, or null if none was found
 */
export function getLastMessageId({ exclude_swipe_in_propress, filter }?: {
    exclude_swipe_in_propress?: boolean;
    filter?: (arg0: object) => boolean;
}): number | null;
/**
 * Substitutes {{macro}} parameters in a string.
 * @param {string} content - The string to substitute parameters in.
 * @param {EnvObject} env - Map of macro names to the values they'll be substituted with. If the param
 * values are functions, those functions will be called and their return values are used.
 * @param {function(string): string} postProcessFn - Function to run on the macro value before replacing it.
 * @returns {string} The string with substituted parameters.
 */
export function evaluateMacros(content: string, env: EnvObject, postProcessFn: (arg0: string) => string): string;
export function initMacros(): void;
/**
 * @typedef {Object<string, *>} EnvObject
 * @typedef {(nonce: string) => string} MacroFunction
 */
/**
 * @typedef {Object} CustomMacro
 * @property {string} key - Macro name (key)
 * @property {string} description - Optional description of the macro
 */
export class MacrosParser {
    /**
     * A map of registered macros.
     * @type {Map<string, string|MacroFunction>}
     */
    static "__#12@#macros": Map<string, string | MacroFunction>;
    /**
     * A map of macro descriptions.
     * @type {Map<string, string>}
     */
    static "__#12@#descriptions": Map<string, string>;
    /**
     * Registers a global macro that can be used anywhere where substitution is allowed.
     * @param {string} key Macro name (key)
     * @param {string|MacroFunction} value A string or a function that returns a string
     * @param {string} [description] Optional description of the macro
     */
    static registerMacro(key: string, value: string | MacroFunction, description?: string): void;
    /**
     * Unregisters a global macro with the given key
     *
     * @param {string} key Macro name (key)
     */
    static unregisterMacro(key: string): void;
    /**
     * Populate the env object with macro values from the current context.
     * @param {EnvObject} env Env object for the current evaluation context
     * @returns {void}
     */
    static populateEnv(env: EnvObject): void;
    /**
     * Performs a type-check on the macro value and returns a sanitized version of it.
     * @param {any} value Value returned by a macro
     * @returns {string} Sanitized value
     */
    static sanitizeMacroValue(value: any): string;
    /**
     * Returns an iterator over all registered macros.
     * @returns {IterableIterator<CustomMacro>}
     */
    static [Symbol.iterator]: () => IterableIterator<CustomMacro>;
}
export type Macro = {
    /**
     * - Regular expression to match the macro
     */
    regex: RegExp;
    /**
     * - Function to replace the macro
     */
    replace: (substring: string, ...args: any[]) => string;
};
export type EnvObject = {
    [x: string]: any;
};
export type MacroFunction = (nonce: string) => string;
export type CustomMacro = {
    /**
     * - Macro name (key)
     */
    key: string;
    /**
     * - Optional description of the macro
     */
    description: string;
};
//# sourceMappingURL=macros.d.ts.map