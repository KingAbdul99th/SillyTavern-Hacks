/**
 * Displays the logit bias list in the specified container.
 * @param {object} logitBias Logit bias object
 * @param {string} containerSelector Container element selector
 * @returns
 */
export function displayLogitBias(logitBias: object, containerSelector: string): void;
/**
 * Creates a new logit bias entry
 * @param {object[]} logitBias Array of logit bias objects
 * @param {string} containerSelector Container element ID
 */
export function createNewLogitBiasEntry(logitBias: object[], containerSelector: string): void;
/**
 * Populate logit bias list from preset.
 * @param {object[]} biasPreset Bias preset
 * @param {number} tokenizerType Tokenizer type (see tokenizers.js)
 * @param {(bias: number, sequence: number[]) => object} getBiasObject Transformer function to create bias object
 * @returns {object[]} Array of logit bias objects
 */
export function getLogitBiasListResult(biasPreset: object[], tokenizerType: number, getBiasObject: (bias: number, sequence: number[]) => object): object[];
export const BIAS_CACHE: Map<any, any>;
//# sourceMappingURL=logit-bias.d.ts.map