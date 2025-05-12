export function getWorldInfoSettings(): {
    world_info: {};
    world_info_depth: number;
    world_info_min_activations: number;
    world_info_min_activations_depth_max: number;
    world_info_budget: number;
    world_info_include_names: boolean;
    world_info_recursive: boolean;
    world_info_overflow_alert: boolean;
    world_info_case_sensitive: boolean;
    world_info_match_whole_words: boolean;
    world_info_character_strategy: number;
    world_info_budget_cap: number;
    world_info_use_group_scoring: boolean;
    world_info_max_recursion_steps: number;
};
/**
 * Gets the world info based on chat messages.
 * @param {string[]} chat - The chat messages to scan, in reverse order.
 * @param {number} maxContext - The maximum context size of the generation.
 * @param {boolean} isDryRun - If true, the function will not emit any events.
 * @typedef {object} WIPromptResult
 * @property {string} worldInfoString - Complete world info string
 * @property {string} worldInfoBefore - World info that goes before the prompt
 * @property {string} worldInfoAfter - World info that goes after the prompt
 * @property {Array} worldInfoExamples - Array of example entries
 * @property {Array} worldInfoDepth - Array of depth entries
 * @property {Array} anBefore - Array of entries before Author's Note
 * @property {Array} anAfter - Array of entries after Author's Note
 * @returns {Promise<WIPromptResult>} The world info string and depth.
 */
export function getWorldInfoPrompt(chat: string[], maxContext: number, isDryRun: boolean): Promise<WIPromptResult>;
export function setWorldInfoSettings(settings: any, data: any): void;
/**
 * Reloads the editor with the specified world info file
 * @param {string} file - The file to load in the editor
 * @param {boolean} [loadIfNotSelected=false] - Indicates whether to load the file even if it's not currently selected
 */
export function reloadEditor(file: string, loadIfNotSelected?: boolean): void;
/**
 * Loads the given world into the World Editor.
 *
 * @param {string} name - The name of the world
 * @return {Promise<void>} A promise that resolves when the world editor is loaded
 */
export function showWorldEditor(name: string): Promise<void>;
/**
 * Loads world info from the backend.
 *
 * This function will return from `worldInfoCache` if it has already been loaded before.
 *
 * @param {string} name - The name of the world to load
 * @return {Promise<Object|null>} A promise that resolves to the loaded world information, or null if the request fails.
 */
export function loadWorldInfo(name: string): Promise<any | null>;
export function updateWorldInfoList(): Promise<void>;
/**
 * Sorts the given data based on the selected sort option
 *
 * @param {any[]} data WI entries
 * @param {object} [options={}] - Optional arguments
 * @param {{sortField?: string, sortOrder?: string, sortRule?: string}} [options.customSort={}] - Custom sort options, instead of the chosen UI sort
 * @returns {any[]} Sorted data
 */
export function sortWorldInfoEntries(data: any[], { customSort }?: {
    customSort?: {
        sortField?: string;
        sortOrder?: string;
        sortRule?: string;
    };
}): any[];
/**
 * Sets the value of a specific key in the original data entry corresponding to the given uid
 * This needs to be called whenever you update JSON data fields.
 * Use `originalWIDataKeyMap` to find the correct value to be set.
 *
 * @param {object} data - The data object containing the original data entries.
 * @param {number} uid - The unique identifier of the data entry.
 * @param {string} key - The key of the value to be set.
 * @param {any} value - The value to be set.
 */
export function setWIOriginalDataValue(data: object, uid: number, key: string, value: any): void;
/**
 * Deletes the original data entry corresponding to the given uid from the provided data object
 *
 * @param {object} data - The data object containing the original data entries
 * @param {string} uid - The unique identifier of the data entry to be deleted
 */
export function deleteWIOriginalDataValue(data: object, uid: string): void;
/** @typedef {import('./utils.js').Select2Option} Select2Option */
/**
 * Splits a given input string that contains one or more keywords or regexes, separated by commas.
 *
 * Each part can be a valid regex following the pattern `/myregex/flags` with optional flags. Commmas inside the regex are allowed, slashes have to be escaped like this: `\/`
 * If a regex doesn't stand alone, it is not treated as a regex.
 *
 * @param {string} input - One or multiple keywords or regexes, separated by commas
 * @returns {string[]} An array of keywords and regexes
 */
export function splitKeywordsAndRegexes(input: string): string[];
/**
 * Gets a real regex object from a slash-delimited regex string
 *
 * This function works with `/` as delimiter, and each occurance of it inside the regex has to be escaped.
 * Flags are optional, but can only be valid flags supported by JavaScript's `RegExp` (`g`, `i`, `m`, `s`, `u`, `y`).
 *
 * @param {string} input - A delimited regex string
 * @returns {RegExp|null} The regex object, or null if not a valid regex
 */
export function parseRegexFromString(input: string): RegExp | null;
export function getWorldEntry(name: any, data: any, entry: any): Promise<JQuery<HTMLElement>>;
/**
 * Duplicate a WI entry by copying all of its properties and assigning a new uid
 * @param {*} data - The data of the book
 * @param {number} uid - The uid of the entry to copy in this book
 * @returns {*} The new WI duplicated entry
 */
export function duplicateWorldInfoEntry(data: any, uid: number): any;
/**
 * Deletes a WI entry, with a user confirmation dialog
 * @param {*[]} data - The data of the book
 * @param {number} uid - The uid of the entry to copy in this book
 * @param {object} [options={}] - Optional arguments
 * @param {boolean} [options.silent=false] - Whether to prompt the user for deletion or just do it
 * @returns {Promise<boolean>} Whether the entry deletion was successful
 */
export function deleteWorldInfoEntry(data: any[], uid: number, { silent }?: {
    silent?: boolean;
}): Promise<boolean>;
/**
 * Creates a new world info entry from template.
 * @param {string} _name Name of the WI (unused)
 * @param {any} data WI data
 * @returns {object | undefined} New entry object or undefined if failed
 */
export function createWorldInfoEntry(_name: string, data: any): object | undefined;
/**
 * Saves the world info
 *
 * This will also refresh the `worldInfoCache`.
 * Note, for performance reasons the saved cache will not make a deep clone of the data.
 * It is your responsibility to not modify the saved data object after calling this function, or there will be data inconsistencies.
 * Call `loadWorldInfoData` or query directly from cache if you need the object again.
 *
 * @param {string} name - The name of the world info
 * @param {any} data - The data to be saved
 * @param {boolean} [immediately=false] - Whether to save immediately or use debouncing
 * @return {Promise<void>} A promise that resolves when the world info is saved
 */
export function saveWorldInfo(name: string, data: any, immediately?: boolean): Promise<void>;
/**
 * Deletes a world info with the given name
 *
 * @param {string} worldInfoName - The name of the world info to delete
 * @returns {Promise<boolean>} A promise that resolves to true if the world info was successfully deleted, false otherwise
 */
export function deleteWorldInfo(worldInfoName: string): Promise<boolean>;
export function getFreeWorldEntryUid(data: any): number;
export function getFreeWorldName(): string;
/**
 * Creates a new world info/lorebook with the given name.
 * Checks if a world with the same name already exists, providing a warning or optionally a user confirmation dialog.
 *
 * @param {string} worldName - The name of the new world info
 * @param {Object} options - Optional parameters
 * @param {boolean} [options.interactive=false] - Whether to show a confirmation dialog when overwriting an existing world
 * @returns {Promise<boolean>} - True if the world info was successfully created, false otherwise
 */
export function createNewWorldInfo(worldName: string, { interactive }?: {
    interactive?: boolean;
}): Promise<boolean>;
export function getSortedEntries(): Promise<any[]>;
/**
 * Performs a scan on the chat and returns the world info activated.
 * @param {string[]} chat The chat messages to scan, in reverse order.
 * @param {number} maxContext The maximum context size of the generation.
 * @param {boolean} isDryRun Whether to perform a dry run.
 * @typedef {object} WIActivated
 * @property {string} worldInfoBefore The world info before the chat.
 * @property {string} worldInfoAfter The world info after the chat.
 * @property {any[]} EMEntries The entries for examples.
 * @property {any[]} WIDepthEntries The depth entries.
 * @property {any[]} ANBeforeEntries The entries before Author's Note.
 * @property {any[]} ANAfterEntries The entries after Author's Note.
 * @property {Set<any>} allActivatedEntries All entries.
 * @returns {Promise<WIActivated>} The world info activated.
 */
export function checkWorldInfo(chat: string[], maxContext: number, isDryRun: boolean): Promise<WIActivated>;
export function convertCharacterBook(characterBook: any): {
    entries: {};
    originalData: any;
};
export function setWorldInfoButtonClass(chid: any, forceValue?: any): void;
export function checkEmbeddedWorld(chid: any): boolean;
export function importEmbeddedWorldInfo(skipPopup?: boolean): Promise<void>;
export function onWorldInfoChange(args: any, text: any): string;
export function importWorldInfo(file: any): Promise<boolean>;
/**
 * Forces the world info editor to open on a specific world.
 * @param {string} worldName The name of the world to open
 */
export function openWorldInfoEditor(worldName: string): void;
/**
 * Assigns a lorebook to the current chat.
 * @param {PointerEvent} event Pointer event
 * @returns {Promise<void>}
 */
export function assignLorebookToChat(event: PointerEvent): Promise<void>;
/**
 * Moves a World Info entry from a source lorebook to a target lorebook.
 *
 * @param {string} sourceName - The name of the source lorebook file.
 * @param {string} targetName - The name of the target lorebook file.
 * @param {string|number} uid - The UID of the entry to move from the source lorebook.
 * @returns {Promise<boolean>} True if the move was successful, false otherwise.
 */
export function moveWorldInfoEntry(sourceName: string, targetName: string, uid: string | number): Promise<boolean>;
export namespace world_info_insertion_strategy {
    let evenly: number;
    let character_first: number;
    let global_first: number;
}
export namespace world_info_logic {
    let AND_ANY: number;
    let NOT_ALL: number;
    let NOT_ANY: number;
    let AND_ALL: number;
}
/**
 * Possible states of the WI evaluation
 */
export type scan_state = number;
export namespace scan_state {
    let NONE: number;
    let INITIAL: number;
    let RECURSION: number;
    let MIN_ACTIVATIONS: number;
}
export let world_info: {};
export let selected_world_info: any[];
/** @type {string[]} */
export let world_names: string[];
export let world_info_depth: number;
export let world_info_min_activations: number;
export let world_info_min_activations_depth_max: number;
export let world_info_budget: number;
export let world_info_include_names: boolean;
export let world_info_recursive: boolean;
export let world_info_overflow_alert: boolean;
export let world_info_case_sensitive: boolean;
export let world_info_match_whole_words: boolean;
export let world_info_use_group_scoring: boolean;
export let world_info_character_strategy: number;
export let world_info_budget_cap: number;
export let world_info_max_recursion_steps: number;
export const worldInfoFilter: FilterHelper;
export const SORT_ORDER_KEY: "world_info_sort_order";
export const METADATA_KEY: "world_info";
export const DEFAULT_DEPTH: 4;
export const DEFAULT_WEIGHT: 100;
export const MAX_SCAN_DEPTH: 1000;
export namespace world_info_position {
    let before: number;
    let after: number;
    let ANTop: number;
    let ANBottom: number;
    let atDepth: number;
    let EMTop: number;
    let EMBottom: number;
}
export namespace wi_anchor_position {
    let before_1: number;
    export { before_1 as before };
    let after_1: number;
    export { after_1 as after };
}
/**
 * The cache of all world info data that was loaded from the backend.
 *
 * Calling `loadWorldInfo` will fill this cache and utilize this cache, so should be the preferred way to load any world info data.
 * Only use the cache directly if you need synchronous access.
 *
 * This will return a deep clone of the data, so no way to modify the data without actually saving it.
 * Should generally be only used for readonly access.
 *
 * @type {StructuredCloneMap<string,object>}
 * */
export const worldInfoCache: StructuredCloneMap<string, object>;
export namespace originalWIDataKeyMap {
    let displayIndex: string;
    let excludeRecursion: string;
    let preventRecursion: string;
    let delayUntilRecursion: string;
    let selectiveLogic: string;
    let comment: string;
    let constant: string;
    let order: string;
    let depth: string;
    let probability: string;
    let position: string;
    let role: string;
    let content: string;
    let enabled: string;
    let key: string;
    let keysecondary: string;
    let selective: string;
    let matchWholeWords: string;
    let useGroupScoring: string;
    let caseSensitive: string;
    let scanDepth: string;
    let automationId: string;
    let vectorized: string;
    let groupOverride: string;
    let groupWeight: string;
    let sticky: string;
    let cooldown: string;
    let delay: string;
}
/**
 * Definitions of types for new WI entries
 *
 * Use `newEntryTemplate` if you just need the template that contains default values
 *
 * @type {{[key: string]: { default: any, type: string }}}
 */
export const newWorldInfoEntryDefinition: {
    [key: string]: {
        default: any;
        type: string;
    };
};
export const newWorldInfoEntryTemplate: {
    [k: string]: any;
};
/**
 * Gets the world info based on chat messages.
 */
export type WIPromptResult = {
    /**
     * - Complete world info string
     */
    worldInfoString: string;
    /**
     * - World info that goes before the prompt
     */
    worldInfoBefore: string;
    /**
     * - World info that goes after the prompt
     */
    worldInfoAfter: string;
    /**
     * - Array of example entries
     */
    worldInfoExamples: any[];
    /**
     * - Array of depth entries
     */
    worldInfoDepth: any[];
    /**
     * - Array of entries before Author's Note
     */
    anBefore: any[];
    /**
     * - Array of entries after Author's Note
     */
    anAfter: any[];
};
export type Select2Option = import("./utils.js").Select2Option;
/**
 * Performs a scan on the chat and returns the world info activated.
 */
export type WIActivated = {
    /**
     * The world info before the chat.
     */
    worldInfoBefore: string;
    /**
     * The world info after the chat.
     */
    worldInfoAfter: string;
    /**
     * The entries for examples.
     */
    EMEntries: any[];
    /**
     * The depth entries.
     */
    WIDepthEntries: any[];
    /**
     * The entries before Author's Note.
     */
    ANBeforeEntries: any[];
    /**
     * The entries after Author's Note.
     */
    ANAfterEntries: any[];
    /**
     * All entries.
     */
    allActivatedEntries: Set<any>;
};
/**
 * The entry that triggered the scan
 */
export type WIScanEntry = {
    /**
     * The depth of the scan
     */
    scanDepth?: number;
    /**
     * If the scan is case sensitive
     */
    caseSensitive?: boolean;
    /**
     * If the scan should match whole words
     */
    matchWholeWords?: boolean;
    /**
     * If the scan should use group scoring
     */
    useGroupScoring?: boolean;
    /**
     * The UID of the entry that triggered the scan
     */
    uid?: number;
    /**
     * The world info book of origin of the entry
     */
    world?: string;
    /**
     * The primary keys to scan for
     */
    key?: string[];
    /**
     * The secondary keys to scan for
     */
    keysecondary?: string[];
    /**
     * The logic to use for selective activation
     */
    selectiveLogic?: number;
    /**
     * The sticky value of the entry
     */
    sticky?: number;
    /**
     * The cooldown of the entry
     */
    cooldown?: number;
    /**
     * The delay of the entry
     */
    delay?: number;
    /**
     * Array of decorators for the entry
     */
    decorators?: string[];
    /**
     * The hash of the entry
     */
    hash?: number;
};
/**
 * Timed effect for world info
 */
export type WITimedEffect = {
    /**
     * Hash of the entry that triggered the effect
     */
    hash: number;
    /**
     * The chat index where the effect starts
     */
    start: number;
    /**
     * The chat index where the effect ends
     */
    end: number;
    /**
     * The protected effect can't be removed if the chat does not advance
     */
    protected: boolean;
};
/**
 * Type of timed effect
 */
export type TimedEffectType = "sticky" | "cooldown" | "delay";
import { FilterHelper } from './filters.js';
import { StructuredCloneMap } from './util/StructuredCloneMap.js';
//# sourceMappingURL=world-info.d.ts.map