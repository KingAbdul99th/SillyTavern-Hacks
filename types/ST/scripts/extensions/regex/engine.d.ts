export namespace substitute_find_regex {
    let NONE: number;
    let RAW: number;
    let ESCAPED: number;
}
/**
 * The parameters to use for the regex script
 */
export type RegexParams = {
    characterOverride?: string;
    isMarkdown?: boolean;
    isPrompt?: boolean;
    isEdit?: boolean;
    depth?: number;
};
/**
 * The parameters to use for the regex script
 */
export type RegexScriptParams = {
    characterOverride?: string;
};
/**
 * Where the regex script should be applied
 */
export type regex_placement = number;
export namespace regex_placement {
    let MD_DISPLAY: number;
    let USER_INPUT: number;
    let AI_OUTPUT: number;
    let SLASH_COMMAND: number;
    let WORLD_INFO: number;
    let REASONING: number;
}
/**
 * Parent function to fetch a regexed version of a raw string
 * @param {string} rawString The raw string to be regexed
 * @param {regex_placement} placement The placement of the string
 * @param {RegexParams} params The parameters to use for the regex script
 * @returns {string} The regexed string
 * @typedef {{characterOverride?: string, isMarkdown?: boolean, isPrompt?: boolean, isEdit?: boolean, depth?: number }} RegexParams The parameters to use for the regex script
 */
export function getRegexedString(rawString: string, placement: regex_placement, { characterOverride, isMarkdown, isPrompt, isEdit, depth }?: RegexParams): string;
/**
 * Runs the provided regex script on the given string
 * @param {import('./index.js').RegexScript} regexScript The regex script to run
 * @param {string} rawString The string to run the regex script on
 * @param {RegexScriptParams} params The parameters to use for the regex script
 * @returns {string} The new string
 * @typedef {{characterOverride?: string}} RegexScriptParams The parameters to use for the regex script
 */
export function runRegexScript(regexScript: import("./index.js").RegexScript, rawString: string, { characterOverride }?: RegexScriptParams): string;
//# sourceMappingURL=engine.d.ts.map