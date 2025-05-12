/**
 * @typedef {Object} TextCompletionRequestBase
 * @property {boolean?} [stream=false] - Whether to stream the response
 * @property {number} max_tokens - Maximum number of tokens to generate
 * @property {string} [model] - Optional model name
 * @property {string} api_type - Type of API to use
 * @property {string} [api_server] - Optional API server URL
 * @property {number} [temperature] - Optional temperature parameter
 * @property {number} [min_p] - Optional min_p parameter
 */
/**
 * @typedef {Object} TextCompletionPayloadBase
 * @property {boolean?} [stream=false] - Whether to stream the response
 * @property {string} prompt - The text prompt for completion
 * @property {number} max_tokens - Maximum number of tokens to generate
 * @property {number} max_new_tokens - Alias for max_tokens
 * @property {string} [model] - Optional model name
 * @property {string} api_type - Type of API to use
 * @property {string} api_server - API server URL
 * @property {number} [temperature] - Optional temperature parameter
 */
/** @typedef {Record<string, any> & TextCompletionPayloadBase} TextCompletionPayload */
/**
 * @typedef {Object} ChatCompletionMessage
 * @property {string} role - The role of the message author (e.g., "user", "assistant", "system")
 * @property {string} content - The content of the message
 */
/**
 * @typedef {Object} ChatCompletionPayloadBase
 * @property {boolean?} [stream=false] - Whether to stream the response
 * @property {ChatCompletionMessage[]} messages - Array of chat messages
 * @property {string} [model] - Optional model name to use for completion
 * @property {string} chat_completion_source - Source provider
 * @property {number} max_tokens - Maximum number of tokens to generate
 * @property {number} [temperature] - Optional temperature parameter for response randomness
 * @property {string} [custom_url] - Optional custom URL
 * @property {string} [reverse_proxy] - Optional reverse proxy URL
 * @property {string} [proxy_password] - Optional proxy password
 */
/** @typedef {Record<string, any> & ChatCompletionPayloadBase} ChatCompletionPayload */
/**
 * @typedef {Object} ExtractedData
 * @property {string} content - Extracted content.
 * @property {string} reasoning - Extracted reasoning.
 */
/**
 * @typedef {Object} StreamResponse
 * @property {string} text - Generated text.
 * @property {string[]} swipes - Generated swipes
 * @property {Object} state - Generated state
 * @property {string?} [state.reasoning] - Generated reasoning
 * @property {string?} [state.image] - Generated image
 */
/**
 * Creates & sends a text completion request.
 */
export class TextCompletionService {
    static TYPE: string;
    /**
     * @param {Record<string, any> & TextCompletionRequestBase & {prompt: string}} custom
     * @returns {TextCompletionPayload}
     */
    static createRequestData({ stream, prompt, max_tokens, model, api_type, api_server, temperature, min_p, ...props }: Record<string, any> & TextCompletionRequestBase & {
        prompt: string;
    }): TextCompletionPayload;
    /**
     * Sends a text completion request to the specified server
     * @param {TextCompletionPayload} data Request data
     * @param {boolean?} extractData Extract message from the response. Default true
     * @param {AbortSignal?} signal
     * @returns {Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>} If not streaming, returns extracted data; if streaming, returns a function that creates an AsyncGenerator
     * @throws {Error}
     */
    static sendRequest(data: TextCompletionPayload, extractData?: boolean | null, signal?: AbortSignal | null): Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>;
    /**
     * Process and send a text completion request with optional preset & instruct
     * @param {Record<string, any> & TextCompletionRequestBase & {prompt: (ChatCompletionMessage & {ignoreInstruct?: boolean})[] |string}} custom
     * @param {Object} options - Configuration options
     * @param {string?} [options.presetName] - Name of the preset to use for generation settings
     * @param {string?} [options.instructName] - Name of instruct preset for message formatting
     * @param {Partial<InstructSettings>?} [options.instructSettings] - Override instruct settings
     * @param {boolean} extractData - Whether to extract structured data from response
     * @param {AbortSignal?} [signal]
     * @returns {Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>} If not streaming, returns extracted data; if streaming, returns a function that creates an AsyncGenerator
     * @throws {Error}
     */
    static processRequest(custom: Record<string, any> & TextCompletionRequestBase & {
        prompt: (ChatCompletionMessage & {
            ignoreInstruct?: boolean;
        })[] | string;
    }, options?: {
        presetName?: string | null;
        instructName?: string | null;
        instructSettings?: Partial<InstructSettings> | null;
    }, extractData?: boolean, signal?: AbortSignal | null): Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>;
    /**
     * Converts a preset to a valid text completion payload.
     * Only supports temperature.
     * @param {Object} preset - The preset configuration
     * @param {Object} customPreset - Additional parameters to override preset values
     * @returns {Object} - Formatted payload for text completion API
     */
    static presetToGeneratePayload(preset: any, customPreset?: any): any;
}
/**
 * Creates & sends a chat completion request.
 */
export class ChatCompletionService {
    static TYPE: string;
    /**
     * @param {ChatCompletionPayload} custom
     * @returns {ChatCompletionPayload}
     */
    static createRequestData({ stream, messages, model, chat_completion_source, max_tokens, temperature, custom_url, reverse_proxy, proxy_password, ...props }: ChatCompletionPayload): ChatCompletionPayload;
    /**
     * Sends a chat completion request
     * @param {ChatCompletionPayload} data Request data
     * @param {boolean?} extractData Extract message from the response. Default true
     * @param {AbortSignal?} signal Abort signal
     * @returns {Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>} If not streaming, returns extracted data; if streaming, returns a function that creates an AsyncGenerator
     * @throws {Error}
     */
    static sendRequest(data: ChatCompletionPayload, extractData?: boolean | null, signal?: AbortSignal | null): Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>;
    /**
     * Process and send a chat completion request with optional preset
     * @param {ChatCompletionPayload} custom
     * @param {Object} options - Configuration options
     * @param {string?} [options.presetName] - Name of the preset to use for generation settings
     * @param {boolean} [extractData=true] - Whether to extract structured data from response
     * @param {AbortSignal?} [signal] - Abort signal
     * @returns {Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>} If not streaming, returns extracted data; if streaming, returns a function that creates an AsyncGenerator
     * @throws {Error}
     */
    static processRequest(custom: ChatCompletionPayload, options: {
        presetName?: string | null;
    }, extractData?: boolean, signal?: AbortSignal | null): Promise<ExtractedData | (() => AsyncGenerator<StreamResponse>)>;
    /**
     * Converts a preset to a valid chat completion payload
     * Only supports temperature.
     * @param {Object} preset - The preset configuration
     * @param {Object} customParams - Additional parameters to override preset values
     * @returns {Object} - Formatted payload for chat completion API
     */
    static presetToGeneratePayload(preset: any, customParams?: any): any;
}
export type TextCompletionRequestBase = {
    /**
     * - Whether to stream the response
     */
    stream?: boolean | null;
    /**
     * - Maximum number of tokens to generate
     */
    max_tokens: number;
    /**
     * - Optional model name
     */
    model?: string;
    /**
     * - Type of API to use
     */
    api_type: string;
    /**
     * - Optional API server URL
     */
    api_server?: string;
    /**
     * - Optional temperature parameter
     */
    temperature?: number;
    /**
     * - Optional min_p parameter
     */
    min_p?: number;
};
export type TextCompletionPayloadBase = {
    /**
     * - Whether to stream the response
     */
    stream?: boolean | null;
    /**
     * - The text prompt for completion
     */
    prompt: string;
    /**
     * - Maximum number of tokens to generate
     */
    max_tokens: number;
    /**
     * - Alias for max_tokens
     */
    max_new_tokens: number;
    /**
     * - Optional model name
     */
    model?: string;
    /**
     * - Type of API to use
     */
    api_type: string;
    /**
     * - API server URL
     */
    api_server: string;
    /**
     * - Optional temperature parameter
     */
    temperature?: number;
};
export type TextCompletionPayload = Record<string, any> & TextCompletionPayloadBase;
export type ChatCompletionMessage = {
    /**
     * - The role of the message author (e.g., "user", "assistant", "system")
     */
    role: string;
    /**
     * - The content of the message
     */
    content: string;
};
export type ChatCompletionPayloadBase = {
    /**
     * - Whether to stream the response
     */
    stream?: boolean | null;
    /**
     * - Array of chat messages
     */
    messages: ChatCompletionMessage[];
    /**
     * - Optional model name to use for completion
     */
    model?: string;
    /**
     * - Source provider
     */
    chat_completion_source: string;
    /**
     * - Maximum number of tokens to generate
     */
    max_tokens: number;
    /**
     * - Optional temperature parameter for response randomness
     */
    temperature?: number;
    /**
     * - Optional custom URL
     */
    custom_url?: string;
    /**
     * - Optional reverse proxy URL
     */
    reverse_proxy?: string;
    /**
     * - Optional proxy password
     */
    proxy_password?: string;
};
export type ChatCompletionPayload = Record<string, any> & ChatCompletionPayloadBase;
export type ExtractedData = {
    /**
     * - Extracted content.
     */
    content: string;
    /**
     * - Extracted reasoning.
     */
    reasoning: string;
};
export type StreamResponse = {
    /**
     * - Generated text.
     */
    text: string;
    /**
     * - Generated swipes
     */
    swipes: string[];
    /**
     * - Generated state
     */
    state: {
        reasoning?: string | null;
        image?: string | null;
    };
};
//# sourceMappingURL=custom-request.d.ts.map