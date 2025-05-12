export function setNovelData(data: any): void;
export function getKayraMaxContextTokens(): 4096 | 8192;
export function getNovelMaxResponseTokens(): 150 | 250;
export function convertNovelPreset(data: any): any;
export function getNovelTier(): any;
export function getNovelAnlas(): any;
export function getNovelUnlimitedImageGeneration(): any;
export function loadNovelSubscriptionData(): Promise<boolean>;
export function loadNovelPreset(preset: any): void;
export function loadNovelSettings(settings: any): void;
export function getNovelGenerationData(finalPrompt: any, settings: any, maxLength: any, isImpersonate: any, isContinue: any, _cfgValues: any, type: any): {
    input: any;
    model: string;
    use_string: boolean;
    temperature: number;
    max_length: any;
    min_length: number;
    tail_free_sampling: number;
    repetition_penalty: number;
    repetition_penalty_range: number;
    repetition_penalty_slope: number;
    repetition_penalty_frequency: number;
    repetition_penalty_presence: number;
    top_a: number;
    top_p: number;
    top_k: number;
    min_p: number;
    math1_temp: number;
    math1_quad: number;
    math1_quad_entropy_scale: number;
    typical_p: number;
    mirostat_lr: number;
    mirostat_tau: number;
    phrase_rep_pen: any;
    stop_sequences: number[][];
    bad_words_ids: any[];
    logit_bias_exp: any;
    generate_until_sentence: boolean;
    use_cache: boolean;
    return_full_text: boolean;
    prefix: any;
    order: any;
    num_logprobs: number;
};
/**
 * Transforms instruction into compatible format for Novel AI if Novel AI instruct format not already detected.
 * 1. Instruction must begin and end with curly braces followed and preceded by a space.
 * 2. Instruction must not contain square brackets as it serves different purpose in NAI.
 * @param {string} prompt Original instruction prompt
 * @returns Processed prompt
 */
export function adjustNovelInstructionPrompt(prompt: string): string;
export function generateNovelWithStreaming(generate_data: any, signal: any): Promise<() => AsyncGenerator<{
    text: string;
    swipes: any[];
    logprobs: any;
    toolCalls: any[];
    state: {};
}, void, unknown>>;
/**
 * A single token's ID.
 * @typedef {[number]} TokenIdEntry
 */
/**
 * A single token's log probabilities. The first element is before repetition
 * penalties and samplers are applied, the second is after.
 * @typedef {[number, number]} LogprobsEntry
 */
/**
 * Combination of token ID and its corresponding log probabilities.
 * @typedef {[TokenIdEntry, LogprobsEntry]} TokenLogprobTuple
 */
/**
 * Represents all logprob data for a single token, including its
 * before, after, and the ultimately selected token.
 * @typedef {Object} NAITokenLogprobs
 * @property {TokenLogprobTuple[]} chosen - always length 1
 * @property {TokenLogprobTuple[]} before - always `top_logprobs` length
 * @property {TokenLogprobTuple[]} after - maybe less than `top_logprobs` length
 */
/**
 * parseNovelAILogprobs converts a logprobs object returned from the NovelAI API
 * for a single token into a TokenLogprobs object used by the Token Probabilities
 * feature.
 * @param {NAITokenLogprobs} data - NAI logprobs object for one token
 * @returns {import('logprobs.js').TokenLogprobs | null} converted logprobs
 */
export function parseNovelAILogprobs(data: NAITokenLogprobs): any | null;
export namespace nai_settings {
    export let temperature: number;
    export let repetition_penalty: number;
    export let repetition_penalty_range: number;
    export let repetition_penalty_slope: number;
    export let repetition_penalty_frequency: number;
    export let repetition_penalty_presence: number;
    export let tail_free_sampling: number;
    export let top_k: number;
    export let top_p: number;
    export let top_a: number;
    export let typical_p: number;
    export let min_p: number;
    export let math1_temp: number;
    export let math1_quad: number;
    export let math1_quad_entropy_scale: number;
    export let min_length: number;
    export let model_novel: string;
    export let preset_settings_novel: string;
    export let streaming_novel: boolean;
    export { default_preamble as preamble };
    export let prefix: string;
    export let banned_tokens: string;
    export { default_order as order };
    export let logit_bias: any[];
}
/**
 * A single token's ID.
 */
export type TokenIdEntry = [number];
/**
 * A single token's log probabilities. The first element is before repetition
 * penalties and samplers are applied, the second is after.
 */
export type LogprobsEntry = [number, number];
/**
 * Combination of token ID and its corresponding log probabilities.
 */
export type TokenLogprobTuple = [TokenIdEntry, LogprobsEntry];
/**
 * Represents all logprob data for a single token, including its
 * before, after, and the ultimately selected token.
 */
export type NAITokenLogprobs = {
    /**
     * - always length 1
     */
    chosen: TokenLogprobTuple[];
    /**
     * - always `top_logprobs` length
     */
    before: TokenLogprobTuple[];
    /**
     * - maybe less than `top_logprobs` length
     */
    after: TokenLogprobTuple[];
};
declare const default_preamble: "[ Style: chat, complex, sensory, visceral ]";
declare const default_order: number[];
export {};
//# sourceMappingURL=nai-settings.d.ts.map