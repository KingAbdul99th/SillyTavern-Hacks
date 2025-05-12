/**
 * @typedef {import('../../char-data.js').RegexScriptData} RegexScript
 */
/**
 * Retrieves the list of regex scripts by combining the scripts from the extension settings and the character data
 *
 * @return {RegexScript[]} An array of regex scripts, where each script is an object containing the necessary information.
 */
export function getRegexScripts(): RegexScript[];
export type RegexScript = import("../../char-data.js").RegexScriptData;
//# sourceMappingURL=index.d.ts.map