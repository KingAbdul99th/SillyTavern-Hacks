export function validateTextGenUrl(): void;
/**
 * Gets the API URL for the selected text generation type.
 * @param {string} type If it's set, ignores active type
 * @returns {string} API URL
 */
export function getTextGenServer(type?: string): string;
export function formatTextGenURL(value: any): any;
export function loadTextGenSettings(data: any, loadedSettings: any): void;
/**
 * Sends a streaming request for textgenerationwebui.
 * @param generate_data
 * @param signal
 * @returns {Promise<(function(): AsyncGenerator<{swipes: [], text: string, toolCalls: [], logprobs: {token: string, topLogprobs: Candidate[]}|null}, void, *>)|*>}
 * @throws {Error} - If the response status is not OK, or from within the generator
 */
export function generateTextGenWithStreaming(generate_data: any, signal: any): Promise<(() => AsyncGenerator<{
    swipes: [];
    text: string;
    toolCalls: [];
    logprobs: {
        token: string;
        topLogprobs: Candidate[];
    } | null;
}, void, any>) | any>;
/**
 * parseTextgenLogprobs converts a logprobs object returned from a textgen API
 * for a single token into a TokenLogprobs object used by the Token
 * Probabilities feature.
 * @param {string} token - the text of the token that the logprobs are for
 * @param {Object} logprobs - logprobs object returned from the API
 * @returns {import('./logprobs.js').TokenLogprobs | null} - converted logprobs
 */
export function parseTextgenLogprobs(token: string, logprobs: any): import("./logprobs.js").TokenLogprobs | null;
export function parseTabbyLogprobs(data: any): any;
export function getTextGenModel(): string;
export function isJsonSchemaSupported(): boolean;
/**
 * Gets the number of logprobs to request based on the selected type.
 * @param {string} type If it's set, ignores active type
 * @returns {number} Number of logprobs to request
 */
export function getLogprobsNumber(type?: string): number;
/**
 * Replaces {{macro}} in a comma-separated or serialized JSON array string.
 * @param {string} str Input string
 * @returns {string} Output string
 */
export function replaceMacrosInList(str: string): string;
export function getTextGenGenerationData(finalPrompt: any, maxTokens: any, isImpersonate: any, isContinue: any, cfgValues: any, type: any): Promise<{
    prompt: any;
    model: string;
    max_new_tokens: any;
    max_tokens: any;
    logprobs: number;
    temperature: number;
    top_p: number;
    typical_p: number;
    typical: number;
    sampler_seed: number;
    min_p: number;
    repetition_penalty: number;
    frequency_penalty: number;
    presence_penalty: number;
    top_k: number;
    skew: number;
    min_length: number;
    minimum_message_content_tokens: number;
    min_tokens: number;
    num_beams: number;
    length_penalty: number;
    early_stopping: boolean;
    add_bos_token: boolean;
    dynamic_temperature: boolean;
    dynatemp_low: number;
    dynatemp_high: number;
    dynatemp_range: number;
    dynatemp_exponent: number;
    smoothing_factor: number;
    smoothing_curve: number;
    dry_allowed_length: number;
    dry_multiplier: number;
    dry_base: number;
    dry_sequence_breakers: string;
    dry_penalty_last_n: number;
    max_tokens_second: number;
    sampler_priority: string[];
    samplers: string[];
    stopping_strings: string[];
    stop: string[];
    truncation_length: number;
    ban_eos_token: boolean;
    skip_special_tokens: boolean;
    include_reasoning: boolean;
    top_a: number;
    tfs: number;
    epsilon_cutoff: number;
    eta_cutoff: number;
    mirostat_mode: number;
    mirostat_tau: number;
    mirostat_eta: number;
    custom_token_bans: string | number[];
    banned_strings: string[];
    api_type: string;
    api_server: string;
    sampler_order: number[];
    xtc_threshold: number;
    xtc_probability: number;
    nsigma: number;
}>;
export namespace textgen_types {
    let OOBA: string;
    let MANCER: string;
    let VLLM: string;
    let APHRODITE: string;
    let TABBY: string;
    let KOBOLDCPP: string;
    let TOGETHERAI: string;
    let LLAMACPP: string;
    let OLLAMA: string;
    let INFERMATICAI: string;
    let DREAMGEN: string;
    let OPENROUTER: string;
    let FEATHERLESS: string;
    let HUGGINGFACE: string;
    let GENERIC: string;
}
export const APHRODITE_DEFAULT_ORDER: string[];
export let MANCER_SERVER: string;
export let TOGETHERAI_SERVER: string;
export let INFERMATICAI_SERVER: string;
export let DREAMGEN_SERVER: string;
export let OPENROUTER_SERVER: string;
export let FEATHERLESS_SERVER: string;
export const SERVER_INPUTS: {
    [textgen_types.OOBA]: string;
    [textgen_types.VLLM]: string;
    [textgen_types.APHRODITE]: string;
    [textgen_types.TABBY]: string;
    [textgen_types.KOBOLDCPP]: string;
    [textgen_types.LLAMACPP]: string;
    [textgen_types.OLLAMA]: string;
    [textgen_types.HUGGINGFACE]: string;
    [textgen_types.GENERIC]: string;
};
export { settings as textgenerationwebui_settings };
export let textgenerationwebui_banned_in_macros: any[];
export let textgenerationwebui_presets: any[];
export let textgenerationwebui_preset_names: any[];
export const setting_names: string[];
export type TokenBanResult = {
    banned_tokens: string;
    banned_strings: string[];
};
declare namespace settings {
    export let temp: number;
    export let temperature_last: boolean;
    export let top_p: number;
    export let top_k: number;
    export let top_a: number;
    export let tfs: number;
    export let epsilon_cutoff: number;
    export let eta_cutoff: number;
    export let typical_p: number;
    export let min_p: number;
    export let rep_pen: number;
    export let rep_pen_range: number;
    export let rep_pen_decay: number;
    export let rep_pen_slope: number;
    export let no_repeat_ngram_size: number;
    export let penalty_alpha: number;
    export let num_beams: number;
    export let length_penalty: number;
    export let min_length: number;
    export let encoder_rep_pen: number;
    export let freq_pen: number;
    export let presence_pen: number;
    export let skew: number;
    export let do_sample: boolean;
    export let early_stopping: boolean;
    export let dynatemp: boolean;
    export let min_temp: number;
    export let max_temp: number;
    export let dynatemp_exponent: number;
    export let smoothing_factor: number;
    export let smoothing_curve: number;
    export let dry_allowed_length: number;
    export let dry_multiplier: number;
    export let dry_base: number;
    export let dry_sequence_breakers: string;
    export let dry_penalty_last_n: number;
    export let max_tokens_second: number;
    export let seed: number;
    export let preset: string;
    export let add_bos_token: boolean;
    export let stopping_strings: any[];
    export let ban_eos_token: boolean;
    export let skip_special_tokens: boolean;
    export let include_reasoning: boolean;
    export let streaming: boolean;
    export let mirostat_mode: number;
    export let mirostat_tau: number;
    export let mirostat_eta: number;
    export let guidance_scale: number;
    export let negative_prompt: string;
    export let grammar_string: string;
    export let json_schema: {};
    export let banned_tokens: string;
    export let global_banned_tokens: string;
    export let send_banned_tokens: boolean;
    export { OOBA_DEFAULT_ORDER as sampler_priority };
    export { LLAMACPP_DEFAULT_ORDER as samplers };
    export { APHRODITE_DEFAULT_ORDER as samplers_priorities };
    export let ignore_eos_token: boolean;
    export let spaces_between_special_tokens: boolean;
    export let speculative_ngram: boolean;
    import type = textgen_types.OOBA;
    export { type };
    export let mancer_model: string;
    export let togetherai_model: string;
    export let infermaticai_model: string;
    export let ollama_model: string;
    export let openrouter_model: string;
    export let openrouter_providers: any[];
    export let vllm_model: string;
    export let aphrodite_model: string;
    export let dreamgen_model: string;
    export let tabby_model: string;
    export { KOBOLDCPP_ORDER as sampler_order };
    export let logit_bias: any[];
    export let n: number;
    export let server_urls: {};
    export let custom_model: string;
    export let bypass_status_check: boolean;
    export let openrouter_allow_fallbacks: boolean;
    export let xtc_threshold: number;
    export let xtc_probability: number;
    export let nsigma: number;
    export let featherless_model: string;
    export let generic_model: string;
}
declare const OOBA_DEFAULT_ORDER: string[];
declare const LLAMACPP_DEFAULT_ORDER: string[];
declare const KOBOLDCPP_ORDER: number[];
//# sourceMappingURL=textgen-settings.d.ts.map