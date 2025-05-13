import { SlashCommandClosure } from './SlashCommandClosure.js';
export class SlashCommandScope {
    constructor(parent: any);
    /** @type {string[]} */ variableNames: string[];
    get allVariableNames(): any;
    // /** @type {object.<string, string|SlashCommandClosure>} */ variables: object<string, string | SlashCommandClosure>;
    // /** @type {object.<string, string|SlashCommandClosure>} */ macros: object<string, string | SlashCommandClosure>;
    // /** @type {{key:string, value:string|SlashCommandClosure}[]} */
    get macroList(): {
        key: string;
        value: string | SlashCommandClosure;
    }[];
    /** @type {SlashCommandScope} */ parent: SlashCommandScope;
    set pipe(value: any);
    get pipe(): any;
    getCopy(): SlashCommandScope;
    setMacro(key: any, value: any, overwrite?: boolean): void;
    existsVariableInScope(key: any): boolean;
    existsVariable(key: any): any;
    letVariable(key: any, value?: any): void;
    setVariable(key: any, value: any, index?: any, type?: any): any;
    getVariable(key: any, index?: any): any;
    #private;
}
export class SlashCommandScopeVariableExistsError extends Error {
}
export class SlashCommandScopeVariableNotFoundError extends Error {
}
//# sourceMappingURL=SlashCommandScope.d.ts.map