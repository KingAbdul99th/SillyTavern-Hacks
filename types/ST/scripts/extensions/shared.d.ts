/**
 * Generates a caption for an image using a multimodal model.
 * @param {string} base64Img Base64 encoded image
 * @param {string} prompt Prompt to use for captioning
 * @returns {Promise<string>} Generated caption
 */
export function getMultimodalCaption(base64Img: string, prompt: string): Promise<string>;
/**
 * Check if the WebLLM extension is installed and supported.
 * @returns {boolean} Whether the extension is installed and supported
 */
export function isWebLlmSupported(): boolean;
/**
 * Generates text in response to a chat prompt using WebLLM.
 * @param {any[]} messages Messages to use for generating
 * @param {object} params Additional parameters
 * @returns {Promise<string>} Generated response
 */
export function generateWebLlmChatPrompt(messages: any[], params?: object): Promise<string>;
/**
 * Counts the number of tokens in the provided text using WebLLM's default model.
 * Fallbacks to the current model's tokenizer if WebLLM token count fails.
 * @param {string} text Text to count tokens in
 * @returns {Promise<number>} Number of tokens in the text
 */
export function countWebLlmTokens(text: string): Promise<number>;
/**
 * Gets the size of the context in the WebLLM's default model.
 * @returns {Promise<number>} Size of the context in the WebLLM model
 */
export function getWebLlmContextSize(): Promise<number>;
/**
 * It uses the profiles to send a generate request to the API.
 */
export class ConnectionManagerRequestService {
    static defaultSendRequestParams: {
        stream: boolean;
        signal: any;
        extractData: boolean;
        includePreset: boolean;
        includeInstruct: boolean;
        instructSettings: {};
    };
    static getAllowedTypes(): {
        openai: string;
        textgenerationwebui: string;
    };
    /**
     * @param {string} profileId
     * @param {string | (import('../custom-request.js').ChatCompletionMessage & {ignoreInstruct?: boolean})[]} prompt
     * @param {number} maxTokens
     * @param {Object} custom
     * @param {boolean?} [custom.stream=false]
     * @param {AbortSignal?} [custom.signal]
     * @param {boolean?} [custom.extractData=true]
     * @param {boolean?} [custom.includePreset=true]
     * @param {boolean?} [custom.includeInstruct=true]
     * @param {Partial<InstructSettings>?} [custom.instructSettings] Override instruct settings
     * @param {Record<string, any>} [overridePayload] - Override payload for the request
     * @returns {Promise<import('../custom-request.js').ExtractedData | (() => AsyncGenerator<import('../custom-request.js').StreamResponse>)>} If not streaming, returns extracted data; if streaming, returns a function that creates an AsyncGenerator
     */
    static sendRequest(profileId: string, prompt: string | (import("../custom-request.js").ChatCompletionMessage & {
        ignoreInstruct?: boolean;
    })[], maxTokens: number, custom?: {
        stream?: boolean | null;
        signal?: AbortSignal | null;
        extractData?: boolean | null;
        includePreset?: boolean | null;
        includeInstruct?: boolean | null;
        instructSettings?: Partial<InstructSettings> | null;
    }, overridePayload?: Record<string, any>): Promise<import("../custom-request.js").ExtractedData | (() => AsyncGenerator<import("../custom-request.js").StreamResponse>)>;
    /**
     * Respects allowed types.
     * @returns {import('./connection-manager/index.js').ConnectionProfile[]}
     */
    static getSupportedProfiles(): import("./connection-manager/index.js").ConnectionProfile[];
    /**
     * @param {import('./connection-manager/index.js').ConnectionProfile?} [profile]
     * @returns {boolean}
     */
    static isProfileSupported(profile?: import("./connection-manager/index.js").ConnectionProfile | null): boolean;
    /**
     * @param {import('./connection-manager/index.js').ConnectionProfile?} [profile]
     * @return {import('../../script.js').ConnectAPIMap}
     * @throws {Error}
     */
    static validateProfile(profile?: import("./connection-manager/index.js").ConnectionProfile | null): import("../../script.js").ConnectAPIMap;
    /**
     * Create profiles dropdown and updates select element accordingly. Use onChange, onCreate, unUpdate, onDelete callbacks for custom behaviour. e.g updating extension settings.
     * @param {string} selector
     * @param {string} initialSelectedProfileId
     * @param {(profile?: import('./connection-manager/index.js').ConnectionProfile) => Promise<void> | void} onChange - 3 cases. 1- When user selects new profile. 2- When user deletes selected profile. 3- When user updates selected profile.
     * @param {(profile: import('./connection-manager/index.js').ConnectionProfile) => Promise<void> | void} onCreate
     * @param {(oldProfile: import('./connection-manager/index.js').ConnectionProfile, newProfile: import('./connection-manager/index.js').ConnectionProfile) => Promise<void> | void} unUpdate
     * @param {(profile: import('./connection-manager/index.js').ConnectionProfile) => Promise<void> | void} onDelete
     */
    static handleDropdown(selector: string, initialSelectedProfileId: string, onChange?: (profile?: import("./connection-manager/index.js").ConnectionProfile) => Promise<void> | void, onCreate?: (profile: import("./connection-manager/index.js").ConnectionProfile) => Promise<void> | void, unUpdate?: (oldProfile: import("./connection-manager/index.js").ConnectionProfile, newProfile: import("./connection-manager/index.js").ConnectionProfile) => Promise<void> | void, onDelete?: (profile: import("./connection-manager/index.js").ConnectionProfile) => Promise<void> | void): void;
}
//# sourceMappingURL=shared.d.ts.map