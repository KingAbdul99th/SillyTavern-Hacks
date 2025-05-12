/**
 * Guesstimates the token count for a string.
 * @param {string} str String to tokenize.
 * @returns {number} Token count.
 */
export function guesstimate(str: string): number;
export function saveTokenCache(): Promise<void>;
/**
 * @typedef {object} Tokenizer
 * @property {number} tokenizerId - The id of the tokenizer option
 * @property {string} tokenizerKey - Internal name/key of the tokenizer
 * @property {string} tokenizerName - Human-readable detailed name of the tokenizer (as displayed in the UI)
 */
/**
 * Gets all tokenizers available to the user.
 * @returns {Tokenizer[]} Tokenizer info.
 */
export function getAvailableTokenizers(): Tokenizer[];
/**
 * Selects tokenizer if not already selected.
 * @param {number} tokenizerId Tokenizer ID.
 */
export function selectTokenizer(tokenizerId: number): void;
/**
 * Gets the friendly name of the current tokenizer.
 * @param {string} forApi API to get the tokenizer for. Defaults to the main API.
 * @returns {Tokenizer} Tokenizer info
 */
export function getFriendlyTokenizerName(forApi: string): Tokenizer;
/**
 * Gets the best tokenizer for the current API.
 * @param {string} forApi API to get the tokenizer for. Defaults to the main API.
 * @returns {number} Tokenizer type.
 */
export function getTokenizerBestMatch(forApi: string): number;
/**
 * Gets the token count for a string using the current model tokenizer.
 * @param {string} str String to tokenize
 * @param {number | undefined} padding Optional padding tokens. Defaults to 0.
 * @returns {Promise<number>} Token count.
 */
export function getTokenCountAsync(str: string, padding?: number | undefined): Promise<number>;
/**
 * Gets the token count for a string using the current model tokenizer.
 * @param {string} str String to tokenize
 * @param {number | undefined} padding Optional padding tokens. Defaults to 0.
 * @returns {number} Token count.
 * @deprecated Use getTokenCountAsync instead.
 */
export function getTokenCount(str: string, padding?: number | undefined): number;
export function getTokenizerModel(): string;
/**
 * @param {any[] | Object} messages
 * @deprecated Use countTokensOpenAIAsync instead.
 */
export function countTokensOpenAI(messages: any[] | any, full?: boolean): number;
/**
 * Returns the token count for a message using the OpenAI tokenizer.
 * @param {object[]|object} messages
 * @param {boolean} full
 * @returns {Promise<number>} Token count.
 */
export function countTokensOpenAIAsync(messages: object[] | object, full?: boolean): Promise<number>;
/**
 * Encodes a string to tokens using the server API.
 * @param {number} tokenizerType Tokenizer type.
 * @param {string} str String to tokenize.
 * @returns {number[]} Array of token ids.
 */
export function getTextTokens(tokenizerType: number, str: string): number[];
/**
 * Decodes token ids to text using the server API.
 * @param {number} tokenizerType Tokenizer type.
 * @param {number[]} ids Array of token ids
 * @returns {({ text: string, chunks?: string[] })} Decoded token text as a single string and individual chunks (if available).
 */
export function decodeTextTokens(tokenizerType: number, ids: number[]): ({
    text: string;
    chunks?: string[];
});
export function initTokenizers(): Promise<void>;
export const CHARACTERS_PER_TOKEN_RATIO: 3.35;
export const TOKENIZER_WARNING_KEY: "tokenizationWarningShown";
export const TOKENIZER_SUPPORTED_KEY: "tokenizationSupported";
export namespace tokenizers {
    let NONE: number;
    let GPT2: number;
    let OPENAI: number;
    let LLAMA: number;
    let NERD: number;
    let NERD2: number;
    let API_CURRENT: number;
    let MISTRAL: number;
    let YI: number;
    let API_TEXTGENERATIONWEBUI: number;
    let API_KOBOLD: number;
    let CLAUDE: number;
    let LLAMA3: number;
    let GEMMA: number;
    let JAMBA: number;
    let QWEN2: number;
    let COMMAND_R: number;
    let NEMO: number;
    let DEEPSEEK: number;
    let COMMAND_A: number;
    let BEST_MATCH: number;
}
export const ENCODE_TOKENIZERS: number[];
/**
 * A list of Text Completion sources that support remote tokenization.
 * Populated in initTokenziers due to circular dependencies.
 * @type {string[]}
 */
export const TEXTGEN_TOKENIZERS: string[];
export type Tokenizer = {
    /**
     * - The id of the tokenizer option
     */
    tokenizerId: number;
    /**
     * - Internal name/key of the tokenizer
     */
    tokenizerKey: string;
    /**
     * - Human-readable detailed name of the tokenizer (as displayed in the UI)
     */
    tokenizerName: string;
};
//# sourceMappingURL=tokenizers.d.ts.map