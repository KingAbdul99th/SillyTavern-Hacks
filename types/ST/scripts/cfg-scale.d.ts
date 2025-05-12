export function initCfg(): void;
export function getGuidanceScale(): {
    type: number;
    value: any;
};
/**
 * Gets the CFG prompt based on the guidance scale.
 * @param {{type: number, value: number}} guidanceScale The CFG guidance scale
 * @param {boolean} isNegative Whether to get the negative prompt
 * @param {boolean} quiet Whether to suppress console output
 * @returns {{value: string, depth: number}} The CFG prompt and insertion depth
 */
export function getCfgPrompt(guidanceScale: {
    type: number;
    value: number;
}, isNegative: boolean, quiet?: boolean): {
    value: string;
    depth: number;
};
export namespace cfgType {
    let chat: number;
    let chara: number;
    let global: number;
}
export namespace metadataKeys {
    let guidance_scale: string;
    let negative_prompt: string;
    let positive_prompt: string;
    let prompt_combine: string;
    let groupchat_individual_chars: string;
    let prompt_insertion_depth: string;
    let prompt_separator: string;
}
//# sourceMappingURL=cfg-scale.d.ts.map