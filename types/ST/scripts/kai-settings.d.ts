export function formatKoboldUrl(value: any): string;
export function loadKoboldSettings(preset: any): void;
/**
 * Gets the Kobold generation data.
 * @param {string} finalPrompt Final text prompt.
 * @param {object} settings Settings preset object.
 * @param {number} maxLength Maximum length.
 * @param {number} maxContextLength Maximum context length.
 * @param {boolean} isHorde True if the generation is for a horde, false otherwise.
 * @param {string} type Generation type.
 * @returns {object} Kobold generation data.
 */
export function getKoboldGenerationData(finalPrompt: string, settings: object, maxLength: number, maxContextLength: number, isHorde: boolean, type: string): object;
export function generateKoboldWithStreaming(generate_data: any, signal: any): Promise<() => AsyncGenerator<{
    text: string;
    swipes: any[];
    toolCalls: any[];
    state: {};
}, void, unknown>>;
/**
 * Sets the supported feature flags for the KoboldAI backend.
 * @param {string} koboldUnitedVersion Kobold United version
 * @param {string} koboldCppVersion KoboldCPP version
 */
export function setKoboldFlags(koboldUnitedVersion: string, koboldCppVersion: string): void;
export namespace kai_settings {
    let temp: number;
    let rep_pen: number;
    let rep_pen_range: number;
    let top_p: number;
    let min_p: number;
    let top_a: number;
    let top_k: number;
    let typical: number;
    let tfs: number;
    let rep_pen_slope: number;
    let streaming_kobold: boolean;
    let sampler_order: number[];
    let mirostat: number;
    let mirostat_tau: number;
    let mirostat_eta: number;
    let use_default_badwordsids: boolean;
    let grammar: string;
    let seed: number;
}
/**
 * Stable version of KoboldAI has a nasty payload validation.
 * It will reject any payload that has a key that is not in the whitelist.
 */
export type kai_flags = {
    [x: string]: boolean;
};
export namespace kai_flags {
    let can_use_tokenization: boolean;
    let can_use_stop_sequence: boolean;
    let can_use_streaming: boolean;
    let can_use_default_badwordsids: boolean;
    let can_use_mirostat: boolean;
    let can_use_grammar: boolean;
    let can_use_min_p: boolean;
}
//# sourceMappingURL=kai-settings.d.ts.map