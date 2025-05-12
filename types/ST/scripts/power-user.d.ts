/**
 * Register a function to be executed when the debug menu is opened.
 * @param {string} functionId Unique ID for the function.
 * @param {string} name Name of the function.
 * @param {string} description Description of the function.
 * @param {function} func Function to be executed.
 */
export function registerDebugFunction(functionId: string, name: string, description: string, func: Function): void;
/**
 * Common function to perform fuzzy search with optional caching
 * @template T
 * @param {string} type - Type of search from fuzzySearchCategories
 * @param {T[]} data - Data array to search in
 * @param {Array<{name: string, weight: number, getFn?: (obj: T) => string}>} keys - Fuse.js keys configuration
 * @param {string} searchValue - The search term
 * @param {Object.<string, { resultMap: Map<string, any> }>} [fuzzySearchCaches=null] - Optional fuzzy search caches
 * @returns {import('fuse.js').FuseResult<T>[]} Results as items with their score
 */
export function performFuzzySearch<T>(type: string, data: T[], keys: Array<{
    name: string;
    weight: number;
    getFn?: (obj: T) => string;
}>, searchValue: string, fuzzySearchCaches?: {
    [x: string]: {
        resultMap: Map<string, any>;
    };
}): import("fuse.js").FuseResult<T>[];
/**
 * Fuzzy search characters by a search term
 * @param {string} searchValue - The search term
 * @param {Object.<string, { resultMap: Map<string, any> }>} [fuzzySearchCaches=null] - Optional fuzzy search caches
 * @returns {import('fuse.js').FuseResult<any>[]} Results as items with their score
 */
export function fuzzySearchCharacters(searchValue: string, fuzzySearchCaches?: {
    [x: string]: {
        resultMap: Map<string, any>;
    };
}): import("fuse.js").FuseResult<any>[];
/**
 * Fuzzy search world info entries by a search term
 * @param {*[]} data - WI items data array
 * @param {string} searchValue - The search term
 * @param {Object.<string, { resultMap: Map<string, any> }>} [fuzzySearchCaches=null] - Optional fuzzy search caches
 * @returns {import('fuse.js').FuseResult<any>[]} Results as items with their score
 */
export function fuzzySearchWorldInfo(data: any[], searchValue: string, fuzzySearchCaches?: {
    [x: string]: {
        resultMap: Map<string, any>;
    };
}): import("fuse.js").FuseResult<any>[];
/**
 * Fuzzy search persona entries by a search term
 * @param {*[]} data - persona data array
 * @param {string} searchValue - The search term
 * @param {Object.<string, { resultMap: Map<string, any> }>} [fuzzySearchCaches=null] - Optional fuzzy search caches
 * @returns {import('fuse.js').FuseResult<any>[]} Results as items with their score
 */
export function fuzzySearchPersonas(data: any[], searchValue: string, fuzzySearchCaches?: {
    [x: string]: {
        resultMap: Map<string, any>;
    };
}): import("fuse.js").FuseResult<any>[];
/**
 * Fuzzy search tags by a search term
 * @param {string} searchValue - The search term
 * @param {Object.<string, { resultMap: Map<string, any> }>} [fuzzySearchCaches=null] - Optional fuzzy search caches
 * @returns {import('fuse.js').FuseResult<any>[]} Results as items with their score
 */
export function fuzzySearchTags(searchValue: string, fuzzySearchCaches?: {
    [x: string]: {
        resultMap: Map<string, any>;
    };
}): import("fuse.js").FuseResult<any>[];
/**
 * Fuzzy search groups by a search term
 * @param {string} searchValue - The search term
 * @param {Object.<string, { resultMap: Map<string, any> }>} [fuzzySearchCaches=null] - Optional fuzzy search caches
 * @returns {import('fuse.js').FuseResult<any>[]} Results as items with their score
 */
export function fuzzySearchGroups(searchValue: string, fuzzySearchCaches?: {
    [x: string]: {
        resultMap: Map<string, any>;
    };
}): import("fuse.js").FuseResult<any>[];
/**
 * Renders a story string template with the given parameters.
 * @param {object} params Template parameters.
 * @param {object} [options] Additional options.
 * @param {string} [options.customStoryString] Custom story string template.
 * @param {InstructSettings} [options.customInstructSettings] Custom instruct settings.
 * @returns {string} The rendered story string.
 */
export function renderStoryString(params: object, { customStoryString, customInstructSettings }?: {
    customStoryString?: string;
    customInstructSettings?: InstructSettings;
}): string;
/**
 * Sorts an array of entities based on the current sort settings
 * @param {any[]} entities An array of objects with an `item` property
 * @param {boolean} forceSearch Whether to force search sorting
 * @param {import('./filters.js').FilterHelper} [filterHelper=null] Filter helper to use
 */
export function sortEntitiesList(entities: any[], forceSearch: boolean, filterHelper?: import("./filters.js").FilterHelper): void;
/**
 * Resets the movable styles of the given element to their unset values.
 * @param {string} id Element ID
 */
export function resetMovableStyles(id: string): void;
/**
 * Adds a stopping string to the list of stopping strings that are only used for the next generation.
 * @param {string} value The stopping string to add
 */
export function addEphemeralStoppingString(value: string): void;
export function flushEphemeralStoppingStrings(): void;
/**
 * Checks if the generated text should be filtered based on the auto-swipe settings.
 * @param {string} text The text to check
 * @returns {boolean} If the generated text should be filtered
 */
export function generatedTextFiltered(text: string): boolean;
/**
 * Gets the custom stopping strings from the power user settings.
 * @param {number | undefined} limit Number of strings to return. If 0 or undefined, returns all strings.
 * @returns {string[]} An array of custom stopping strings
 */
export function getCustomStoppingStrings(limit?: number | undefined): string[];
export function forceCharacterEditorTokenize(): void;
export const MAX_CONTEXT_DEFAULT: 8192;
export const MAX_RESPONSE_DEFAULT: 2048;
export namespace chat_styles {
    let DEFAULT: number;
    let BUBBLES: number;
    let DOCUMENT: number;
}
export namespace persona_description_positions {
    let IN_PROMPT: number;
    let AFTER_CHAR: number;
    let TOP_AN: number;
    let BOTTOM_AN: number;
    let AT_DEPTH: number;
    let NONE: number;
}
export let context_presets: any[];
export function loadPowerUserSettings(settings: any, data: any): Promise<void>;
export function loadMovingUIState(): void;
/**
 * Replaces consecutive newlines with a single newline.
 * @param {string} x String to be processed.
 * @returns {string} Processed string.
 * @example
 * collapseNewlines("\n\n\n"); // "\n"
 */
export function collapseNewlines(x: string): string;
export function playMessageSound(): void;
/**
 * Fix formatting problems in markdown.
 * @param {string} text Text to be processed.
 * @param {boolean} forDisplay Whether the text is being processed for display.
 * @returns {string} Processed text.
 * @example
 * "^example * text*\n" // "^example *text*\n"
 *  "^*example * text\n"// "^*example* text\n"
 * "^example *text *\n" // "^example *text*\n"
 * "^* example * text\n" // "^*example* text\n"
 * // take note that the side you move the asterisk depends on where its pairing is
 * // i.e. both of the following strings have the same broken asterisk ' * ',
 * // but you move the first to the left and the second to the right, to match the non-broken asterisk
 * "^example * text*\n" // "^*example * text\n"
 * // and you HAVE to handle the cases where multiple pairs of asterisks exist in the same line
 * "^example * text* * harder problem *\n" // "^example *text* *harder problem*\n"
 */
export function fixMarkdown(text: string, forDisplay: boolean): string;
export namespace power_user {
    export let charListGrid: boolean;
    export let tokenizer: number;
    export let token_padding: number;
    export let collapse_newlines: boolean;
    export let pin_examples: boolean;
    export let strip_examples: boolean;
    export let trim_sentences: boolean;
    export let always_force_name2: boolean;
    export let user_prompt_bias: string;
    export let show_user_prompt_bias: boolean;
    export namespace auto_continue {
        let enabled: boolean;
        let allow_chat_completions: boolean;
        let target_length: number;
    }
    export let markdown_escape_strings: string;
    export let chat_truncation: number;
    export let streaming_fps: number;
    export let smooth_streaming: boolean;
    export let smooth_streaming_speed: number;
    export let fast_ui_mode: boolean;
    import avatar_style = avatar_styles.ROUND;
    export { avatar_style };
    import chat_display = chat_styles.DEFAULT;
    export { chat_display };
    export let chat_width: number;
    export let never_resize_avatars: boolean;
    export let show_card_avatar_urls: boolean;
    export let play_message_sound: boolean;
    export let play_sound_unfocused: boolean;
    export let auto_save_msg_edits: boolean;
    export let confirm_message_delete: boolean;
    export let sort_field: string;
    export let sort_order: string;
    export let sort_rule: any;
    export let font_scale: number;
    export let blur_strength: number;
    export let shadow_width: number;
    export let main_text_color: string;
    export let italics_text_color: string;
    export let underline_text_color: string;
    export let quote_text_color: string;
    export let blur_tint_color: string;
    export let chat_tint_color: string;
    export let user_mes_blur_tint_color: string;
    export let bot_mes_blur_tint_color: string;
    export let shadow_color: string;
    export let border_color: string;
    export let custom_css: string;
    export let waifuMode: boolean;
    export let movingUI: boolean;
    export let movingUIState: {};
    export let movingUIPreset: string;
    export let noShadows: boolean;
    export let theme: string;
    export let gestures: boolean;
    export let auto_swipe: boolean;
    export let auto_swipe_minimum_length: number;
    export let auto_swipe_blacklist: any[];
    export let auto_swipe_blacklist_threshold: number;
    export let auto_scroll_chat_to_bottom: boolean;
    export let auto_fix_generated_markdown: boolean;
    import send_on_enter = send_on_enter_options.AUTO;
    export { send_on_enter };
    export let console_log_prompts: boolean;
    export let request_token_probabilities: boolean;
    export let show_group_chat_queue: boolean;
    export let allow_name1_display: boolean;
    export let allow_name2_display: boolean;
    export let hotswap_enabled: boolean;
    export let timer_enabled: boolean;
    export let timestamps_enabled: boolean;
    export let timestamp_model_icon: boolean;
    export let mesIDDisplay_enabled: boolean;
    export let hideChatAvatars_enabled: boolean;
    export let max_context_unlocked: boolean;
    export let message_token_count_enabled: boolean;
    export let expand_message_actions: boolean;
    export let enableZenSliders: boolean;
    export let enableLabMode: boolean;
    export let prefer_character_prompt: boolean;
    export let prefer_character_jailbreak: boolean;
    export let quick_continue: boolean;
    export let quick_impersonate: boolean;
    export let continue_on_send: boolean;
    export let trim_spaces: boolean;
    export let relaxed_api_urls: boolean;
    export let world_import_dialog: boolean;
    export let enable_auto_select_input: boolean;
    export let enable_md_hotkeys: boolean;
    export let tag_import_setting: number;
    export let disable_group_trimming: boolean;
    export let single_line: boolean;
    export namespace instruct {
        let enabled_1: boolean;
        export { enabled_1 as enabled };
        export let preset: string;
        export let input_sequence: string;
        export let input_suffix: string;
        export let output_sequence: string;
        export let output_suffix: string;
        export let system_sequence: string;
        export let system_suffix: string;
        export let last_system_sequence: string;
        export let first_input_sequence: string;
        export let first_output_sequence: string;
        export let last_input_sequence: string;
        export let last_output_sequence: string;
        export let system_sequence_prefix: string;
        export let system_sequence_suffix: string;
        export let stop_sequence: string;
        export let wrap: boolean;
        export let macro: boolean;
        export let names_behavior: string;
        export let activation_regex: string;
        export let derived: boolean;
        export let bind_to_context: boolean;
        export let user_alignment_message: string;
        export let system_same_as_user: boolean;
        export let separator_sequence: string;
    }
    export namespace context {
        let preset_1: string;
        export { preset_1 as preset };
        export { defaultStoryString as story_string };
        export { defaultChatStart as chat_start };
        export { defaultExampleSeparator as example_separator };
        export let use_stop_strings: boolean;
        export let allow_jailbreak: boolean;
        export let names_as_stop_strings: boolean;
    }
    export let context_derived: boolean;
    export let context_size_derived: boolean;
    export namespace sysprompt {
        let enabled_2: boolean;
        export { enabled_2 as enabled };
        export let name: string;
        export let content: string;
    }
    export namespace reasoning {
        export { DEFAULT_REASONING_TEMPLATE as name };
        export let auto_parse: boolean;
        export let add_to_prompts: boolean;
        export let auto_expand: boolean;
        export let show_hidden: boolean;
        export let prefix: string;
        export let suffix: string;
        export let separator: string;
        export let max_additions: number;
    }
    export let personas: {};
    export let default_persona: any;
    export let persona_descriptions: {};
    export let persona_description: string;
    import persona_description_position = persona_description_positions.IN_PROMPT;
    export { persona_description_position };
    export let persona_description_role: number;
    export let persona_description_depth: number;
    export let persona_description_lorebook: string;
    export let persona_show_notifications: boolean;
    export let persona_sort_order: string;
    export let custom_stopping_strings: string;
    export let custom_stopping_strings_macro: boolean;
    export let fuzzy_search: boolean;
    export let encode_tags: boolean;
    export let servers: any[];
    export let bogus_folders: boolean;
    export let zoomed_avatar_magnification: boolean;
    export let show_tag_filters: boolean;
    export let aux_field: string;
    export namespace stscript {
        let matching: string;
        namespace autocomplete {
            let autoHide: boolean;
            let style: string;
            namespace font {
                let scale: number;
            }
            namespace width {
                let left: number;
                let right: number;
            }
            let select: number;
        }
        namespace parser {
            let flags: any;
        }
    }
    export let restore_user_input: boolean;
    export let reduced_motion: boolean;
    export let compact_input_area: boolean;
    export let show_swipe_num_all_messages: boolean;
    export let auto_connect: boolean;
    export let auto_load_chat: boolean;
    export let forbid_external_media: boolean;
    export let external_media_allowed_overrides: any[];
    export let external_media_forbidden_overrides: any[];
}
export namespace send_on_enter_options {
    let DISABLED: number;
    let AUTO: number;
    let ENABLED: number;
}
export function getContextSettings(): {};
export function applyPowerUserSettings(): void;
declare namespace avatar_styles {
    let ROUND: number;
    let RECTANGULAR: number;
    let SQUARE: number;
}
declare const defaultStoryString: "{{#if system}}{{system}}\n{{/if}}{{#if description}}{{description}}\n{{/if}}{{#if personality}}{{char}}'s personality: {{personality}}\n{{/if}}{{#if scenario}}Scenario: {{scenario}}\n{{/if}}{{#if persona}}{{persona}}\n{{/if}}";
declare const defaultChatStart: "***";
declare const defaultExampleSeparator: "***";
import { DEFAULT_REASONING_TEMPLATE } from './reasoning.js';
export {};
//# sourceMappingURL=power-user.d.ts.map