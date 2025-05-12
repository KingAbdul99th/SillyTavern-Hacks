export namespace autoModeOptions {
    let NONE: string;
    let RESPONSES: string;
    let INPUT: string;
    let BOTH: string;
}
/**
 * Translates text using the selected translation provider
 * @param {string} text Text to translate
 * @param {string} lang Target language code
 * @param {string} provider Translation provider to use
 * @returns {Promise<string>} Translated text
 */
export function translate(text: string, lang: string, provider?: string): Promise<string>;
//# sourceMappingURL=index.d.ts.map