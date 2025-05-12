/**
 * Loads instruct mode settings from the given data object.
 * @param {object} data Settings data object.
 */
export function loadInstructMode(data: object): Promise<void>;
/**
 * Select context template if not already selected.
 * @param {string} preset Preset name.
 * @param {object} [options={}] Optional arguments.
 * @param {boolean} [options.quiet=false] Suppress toast messages.
 * @param {boolean} [options.isAuto=false] Is auto-select.
 */
export function selectContextPreset(preset: string, { quiet, isAuto }?: {
    quiet?: boolean;
    isAuto?: boolean;
}): void;
/**
 * Select instruct preset if not already selected.
 * @param {string} preset Preset name.
 * @param {object} [options={}] Optional arguments.
 * @param {boolean} [options.quiet=false] Suppress toast messages.
 * @param {boolean} [options.isAuto=false] Is auto-select.
 */
export function selectInstructPreset(preset: string, { quiet, isAuto }?: {
    quiet?: boolean;
    isAuto?: boolean;
}): void;
/**
 * Automatically select instruct preset based on model id.
 * Otherwise, if default instruct preset is set, selects it.
 * @param {string} modelId Model name reported by the API.
 * @returns {boolean} True if instruct preset was activated by model id, false otherwise.
 */
export function autoSelectInstructPreset(modelId: string): boolean;
/**
 * Converts instruct mode sequences to an array of stopping strings.
 * @param {Object} options
 * @param {InstructSettings?} [options.customInstruct=null] - Custom instruct settings.
 * @param {boolean?} [options.useStopStrings] - Decides whether to use "Chat Start" and "Example Separator"
 * @returns {string[]} Array of instruct mode stopping strings.
 */
export function getInstructStoppingSequences({ customInstruct, useStopStrings }?: {
    customInstruct?: InstructSettings | null;
    useStopStrings?: boolean | null;
}): string[];
/**
 * Formats instruct mode chat message.
 * @param {string} name Character name.
 * @param {string} mes Message text.
 * @param {boolean} isUser Is the message from the user.
 * @param {boolean} isNarrator Is the message from the narrator.
 * @param {string} forceAvatar Force avatar string.
 * @param {string} name1 User name.
 * @param {string} name2 Character name.
 * @param {boolean|number} forceOutputSequence Force to use first/last output sequence (if configured).
 * @param {InstructSettings} customInstruct Custom instruct mode settings.
 * @returns {string} Formatted instruct mode chat message.
 */
export function formatInstructModeChat(name: string, mes: string, isUser: boolean, isNarrator: boolean, forceAvatar: string, name1: string, name2: string, forceOutputSequence: boolean | number, customInstruct?: InstructSettings): string;
/**
 * Formats instruct mode system prompt.
 * @param {string} systemPrompt System prompt string.
 * @param {InstructSettings} customInstruct Custom instruct mode settings.
 * @returns {string} Formatted instruct mode system prompt.
 */
export function formatInstructModeSystemPrompt(systemPrompt: string, customInstruct?: InstructSettings): string;
/**
 * Formats example messages according to instruct mode settings.
 * @param {string[]} mesExamplesArray Example messages array.
 * @param {string} name1 User name.
 * @param {string} name2 Character name.
 * @returns {string[]} Formatted example messages string.
 */
export function formatInstructModeExamples(mesExamplesArray: string[], name1: string, name2: string): string[];
/**
 * Formats instruct mode last prompt line.
 * @param {string} name Character name.
 * @param {boolean} isImpersonate Is generation in impersonation mode.
 * @param {string} promptBias Prompt bias string.
 * @param {string} name1 User name.
 * @param {string} name2 Character name.
 * @param {boolean} isQuiet Is quiet mode generation.
 * @param {boolean} isQuietToLoud Is quiet to loud generation.
 * @param {InstructSettings} customInstruct Custom instruct settings.
 * @returns {string} Formatted instruct mode last prompt line.
 */
export function formatInstructModePrompt(name: string, isImpersonate: boolean, promptBias: string, name1: string, name2: string, isQuiet: boolean, isQuietToLoud: boolean, customInstruct?: InstructSettings): string;
/**
 * Replaces instruct mode macros in the given input string.
 * @param {Object<string, *>} env - Map of macro names to the values they'll be substituted with. If the param
 * values are functions, those functions will be called and their return values are used.
 * @returns {import('./macros.js').Macro[]} Macro objects.
 */
export function getInstructMacros(env: {
    [x: string]: any;
}): import("./macros.js").Macro[];
/**
 * @type {any[]} Instruct mode presets.
 */
export let instruct_presets: any[];
export namespace names_behavior_types {
    let NONE: string;
    let FORCE: string;
    let ALWAYS: string;
}
export namespace force_output_sequence {
    let FIRST: number;
    let LAST: number;
}
//# sourceMappingURL=instruct-mode.d.ts.map