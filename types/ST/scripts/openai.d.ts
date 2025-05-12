/**
 * Parses the example messages into individual messages.
 * @param {string} messageExampleString - The string containing the example messages
 * @param {boolean} appendNamesForGroup - Whether to append the character name for group chats
 * @returns {Message[]} Array of message objects
 */
export function parseExampleIntoIndividual(messageExampleString: string, appendNamesForGroup?: boolean): Message[];
export function formatWorldInfo(value: any, { wiFormat }?: {
    wiFormat?: any;
}): any;
/**
 * @param {number} position - Prompt position in the extensions object.
 * @returns {string|false} - The prompt position for prompt collection.
 */
export function getPromptPosition(position: number): string | false;
/**
 * Gets a Chat Completion role based on the prompt role.
 * @param {number} role Role of the prompt.
 * @returns {string} Mapped role.
 */
export function getPromptRole(role: number): string;
/**
 * Take a configuration object and prepares messages for a chat with OpenAI's chat completion API.
 * Handles prompts, prepares chat history, manages token budget, and processes various user settings.
 *
 * @param {Object} content - System prompts provided by SillyTavern
 * @param {string} content.name2 - The second name to be used in the messages.
 * @param {string} content.charDescription - Description of the character.
 * @param {string} content.charPersonality - Description of the character's personality.
 * @param {string} content.Scenario - The scenario or context of the dialogue.
 * @param {string} content.worldInfoBefore - The world info to be added before the main conversation.
 * @param {string} content.worldInfoAfter - The world info to be added after the main conversation.
 * @param {string} content.bias - The bias to be added in the conversation.
 * @param {string} content.type - The type of the chat, can be 'impersonate'.
 * @param {string} content.quietPrompt - The quiet prompt to be used in the conversation.
 * @param {string} content.quietImage - Image prompt for extras
 * @param {string} content.cyclePrompt - The last prompt used for chat message continuation.
 * @param {string} content.systemPromptOverride - The system prompt override.
 * @param {string} content.jailbreakPromptOverride - The jailbreak prompt override.
 * @param {string} content.personaDescription - The persona description.
 * @param {object} content.extensionPrompts - An array of additional prompts.
 * @param {object[]} content.messages - An array of messages to be used as chat history.
 * @param {string[]} content.messageExamples - An array of messages to be used as dialogue examples.
 * @param dryRun - Whether this is a live call or not.
 * @returns {Promise<(any[]|boolean)[]>} An array where the first element is the prepared chat and the second element is a boolean flag.
 */
export function prepareOpenAIMessages({ name2, charDescription, charPersonality, Scenario, worldInfoBefore, worldInfoAfter, bias, type, quietPrompt, quietImage, extensionPrompts, cyclePrompt, systemPromptOverride, jailbreakPromptOverride, personaDescription, messages, messageExamples, }: {
    name2: string;
    charDescription: string;
    charPersonality: string;
    Scenario: string;
    worldInfoBefore: string;
    worldInfoAfter: string;
    bias: string;
    type: string;
    quietPrompt: string;
    quietImage: string;
    cyclePrompt: string;
    systemPromptOverride: string;
    jailbreakPromptOverride: string;
    personaDescription: string;
    extensionPrompts: object;
    messages: object[];
    messageExamples: string[];
}, dryRun: any): Promise<(any[] | boolean)[]>;
/**
 * Handles errors during streaming requests.
 * @param {Response} response
 * @param {string} decoded - response text or decoded stream data
 * @param {object} [options]
 * @param {boolean?} [options.quiet=false] Suppress toast messages
 */
export function tryParseStreamingError(response: Response, decoded: string, { quiet }?: {
    quiet?: boolean | null;
}): void;
/**
 * Gets the API model for the selected chat completion source.
 * @param {string} source If it's set, ignores active source
 * @returns {string} API model
 */
export function getChatCompletionModel(source?: string): string;
/**
 * Extracts the reply from the response data from a chat completions-like source
 * @param {object} data Response data from the chat completions-like source
 * @param {object} state Additional state to keep track of
 * @param {object} [options] Additional options
 * @param {string?} [options.chatCompletionSource] Chat completion source
 * @param {boolean?} [options.overrideShowThoughts] Override show thoughts
 * @returns {string} The reply extracted from the response data
 */
export function getStreamingReply(data: object, state: object, { chatCompletionSource, overrideShowThoughts }?: {
    chatCompletionSource?: string | null;
    overrideShowThoughts?: boolean | null;
}): string;
/**
 * Check if the model supports image inlining
 * @returns {boolean} True if the model supports image inlining
 */
export function isImageInliningSupported(): boolean;
/**
 * Proxy stuff
 */
export function loadProxyPresets(settings: any): void;
export function initOpenAI(): void;
export let model_list: any[];
export namespace chat_completion_sources {
    let OPENAI: string;
    let WINDOWAI: string;
    let CLAUDE: string;
    let SCALE: string;
    let OPENROUTER: string;
    let AI21: string;
    let MAKERSUITE: string;
    let MISTRALAI: string;
    let CUSTOM: string;
    let COHERE: string;
    let PERPLEXITY: string;
    let GROQ: string;
    let ZEROONEAI: string;
    let NANOGPT: string;
    let DEEPSEEK: string;
    let XAI: string;
}
/**
 * preset_name -> [selector, setting_name, is_checkbox]
 * @type {Record<string, [string, string, boolean]>}
 */
export const settingsToUpdate: Record<string, [string, string, boolean]>;
export let proxies: {
    name: string;
    url: string;
    password: string;
}[];
export namespace selected_proxy {
    let name: string;
    let url: string;
    let password: string;
}
export let openai_setting_names: any;
export let openai_settings: any;
/** @type {import('./PromptManager.js').PromptManager} */
export let promptManager: import("./PromptManager.js").PromptManager;
/**
 * OpenAI API chat completion representation
 * const map = [{identifier: 'example', message: {role: 'system', content: 'exampleContent'}}, ...];
 *
 * This class creates a chat context that can be sent to Open AI's api
 * Includes message management and token budgeting.
 *
 * @see https://platform.openai.com/docs/guides/gpt/chat-completions-api
 *
 */
export class ChatCompletion {
    /**
     * Combines consecutive system messages into one if they have no name attached.
     * @returns {Promise<void>}
     */
    squashSystemMessages(): Promise<void>;
    tokenBudget: number;
    messages: MessageCollection;
    loggingEnabled: boolean;
    overriddenPrompts: any[];
    /**
     * Retrieves all messages.
     *
     * @returns {MessageCollection} The MessageCollection instance holding all messages.
     */
    getMessages(): MessageCollection;
    /**
     * Calculates and sets the token budget based on context and response.
     *
     * @param {number} context - Number of tokens in the context.
     * @param {number} response - Number of tokens in the response.
     */
    setTokenBudget(context: number, response: number): void;
    /**
     * Adds a message or message collection to the collection.
     *
     * @param {Message|MessageCollection} collection - The message or message collection to add.
     * @param {number|null} position - The position at which to add the collection.
     * @returns {ChatCompletion} The current instance for chaining.
     */
    add(collection: Message | MessageCollection, position?: number | null): ChatCompletion;
    /**
     * Inserts a message at the start of the specified collection.
     *
     * @param {Message} message - The message to insert.
     * @param {string} identifier - The identifier of the collection where to insert the message.
     */
    insertAtStart(message: Message, identifier: string): void;
    /**
     * Inserts a message at the end of the specified collection.
     *
     * @param {Message} message - The message to insert.
     * @param {string} identifier - The identifier of the collection where to insert the message.
     */
    insertAtEnd(message: Message, identifier: string): void;
    /**
     * Inserts a message at the specified position in the specified collection.
     *
     * @param {Message} message - The message to insert.
     * @param {string} identifier - The identifier of the collection where to insert the message.
     * @param {string|number} position - The position at which to insert the message ('start' or 'end').
     */
    insert(message: Message, identifier: string, position?: string | number): void;
    /**
     * Remove the last item of the collection
     *
     * @param identifier
     */
    removeLastFrom(identifier: any): void;
    /**
     * Checks if the token budget can afford the tokens of the specified message.
     *
     * @param {Message|MessageCollection} message - The message to check for affordability.
     * @returns {boolean} True if the budget can afford the message, false otherwise.
     */
    canAfford(message: Message | MessageCollection): boolean;
    /**
     * Checks if the token budget can afford the tokens of all the specified messages.
     * @param {Message[]} messages - The messages to check for affordability.
     * @returns {boolean} True if the budget can afford all the messages, false otherwise.
     */
    canAffordAll(messages: Message[]): boolean;
    /**
     * Checks if a message with the specified identifier exists in the collection.
     *
     * @param {string} identifier - The identifier to check for existence.
     * @returns {boolean} True if a message with the specified identifier exists, false otherwise.
     */
    has(identifier: string): boolean;
    /**
     * Retrieves the total number of tokens in the collection.
     *
     * @returns {number} The total number of tokens.
     */
    getTotalTokenCount(): number;
    /**
     * Retrieves the chat as a flattened array of messages.
     *
     * @returns {Array} The chat messages.
     */
    getChat(): any[];
    /**
     * Logs an output message to the console if logging is enabled.
     *
     * @param {string} output - The output message to log.
     */
    log(output: string): void;
    /**
     * Enables logging of output messages to the console.
     */
    enableLogging(): void;
    /**
     * Disables logging of output messages to the console.
     */
    disableLogging(): void;
    /**
     * Validates if the given argument is an instance of MessageCollection.
     * Throws an error if the validation fails.
     *
     * @param {MessageCollection|Message} collection - The collection to validate.
     */
    validateMessageCollection(collection: MessageCollection | Message): void;
    /**
     * Validates if the given argument is an instance of Message.
     * Throws an error if the validation fails.
     *
     * @param {Message} message - The message to validate.
     */
    validateMessage(message: Message): void;
    /**
     * Checks if the token budget can afford the tokens of the given message.
     * Throws an error if the budget can't afford the message.
     *
     * @param {Message|MessageCollection} message - The message to check.
     * @param {string} identifier - The identifier of the message.
     */
    checkTokenBudget(message: Message | MessageCollection, identifier: string): void;
    /**
     * Reserves the tokens required by the given message from the token budget.
     *
     * @param {Message|MessageCollection|number} message - The message whose tokens to reserve.
     */
    reserveBudget(message: Message | MessageCollection | number): void;
    /**
     * Frees up the tokens used by the given message from the token budget.
     *
     * @param {Message|MessageCollection} message - The message whose tokens to free.
     */
    freeBudget(message: Message | MessageCollection): void;
    /**
     * Increases the token budget by the given number of tokens.
     * This function should be used sparingly, per design the completion should be able to work with its initial budget.
     *
     * @param {number} tokens - The number of tokens to increase the budget by.
     */
    increaseTokenBudgetBy(tokens: number): void;
    /**
     * Decreases the token budget by the given number of tokens.
     * This function should be used sparingly, per design the completion should be able to work with its initial budget.
     *
     * @param {number} tokens - The number of tokens to decrease the budget by.
     */
    decreaseTokenBudgetBy(tokens: number): void;
    /**
     * Finds the index of a message in the collection by its identifier.
     * Throws an error if a message with the given identifier is not found.
     *
     * @param {string} identifier - The identifier of the message to find.
     * @returns {number} The index of the message in the collection.
     */
    findMessageIndex(identifier: string): number;
    /**
     * Sets the list of overridden prompts.
     * @param {string[]} list A list of prompts that were overridden.
     */
    setOverriddenPrompts(list: string[]): void;
    getOverriddenPrompts(): any[];
}
/**
 * Used for creating, managing, and interacting with a specific message object.
 */
export class Message {
    static tokensPerImage: number;
    /**
     * Create a new Message instance.
     * @param {string} role
     * @param {string} content
     * @param {string} identifier
     * @returns {Promise<Message>} Message instance
     */
    static createAsync(role: string, content: string, identifier: string): Promise<Message>;
    /**
     * Create a new Message instance from a prompt asynchronously.
     * @static
     * @param {Object} prompt - The prompt object.
     * @returns {Promise<Message>} A new instance of Message.
     */
    static fromPromptAsync(prompt: any): Promise<Message>;
    /**
     * @constructor
     * @param {string} role - The role of the entity creating the message.
     * @param {string} content - The actual content of the message.
     * @param {string} identifier - A unique identifier for the message.
     * @private Don't use this constructor directly. Use createAsync instead.
     */
    private constructor();
    /** @type {number} */
    tokens: number;
    /** @type {string} */
    identifier: string;
    /** @type {string} */
    role: string;
    /** @type {string|any[]} */
    content: string | any[];
    /** @type {string} */
    name: string;
    /** @type {object} */
    tool_call: object;
    /**
     * Reconstruct the message from a tool invocation.
     * @param {import('./tool-calling.js').ToolInvocation[]} invocations - The tool invocations to reconstruct the message from.
     * @returns {Promise<void>}
     */
    setToolCalls(invocations: import("./tool-calling.js").ToolInvocation[]): Promise<void>;
    tool_calls: {
        id: string;
        type: string;
        function: {
            arguments: string;
            name: string;
        };
    }[];
    /**
     * Add a name to the message.
     * @param {string} name Name to set for the message.
     * @returns {Promise<void>}
     */
    setName(name: string): Promise<void>;
    /**
     * Adds an image to the message.
     * @param {string} image Image URL or Data URL.
     * @returns {Promise<void>}
     */
    addImage(image: string): Promise<void>;
    /**
     * Compress an image if it exceeds the size threshold for the current chat completion source.
     * @param {string} image Data URL of the image.
     * @returns {Promise<string>} Compressed image as a Data URL.
     */
    compressImage(image: string): Promise<string>;
    /**
     * Get the token cost of an image.
     * @param {string} dataUrl Data URL of the image.
     * @param {string} quality String representing the quality of the image. Can be 'low', 'auto', or 'high'.
     * @returns {Promise<number>} The token cost of the image.
     */
    getImageTokenCost(dataUrl: string, quality: string): Promise<number>;
    /**
     * Returns the number of tokens in the message.
     * @returns {number} Number of tokens in the message.
     */
    getTokens(): number;
}
export let openai_messages_count: number;
export const oai_settings: {
    send_if_empty: string;
    impersonation_prompt: string;
    new_chat_prompt: string;
    new_group_chat_prompt: string;
    new_example_chat_prompt: string;
    continue_nudge_prompt: string;
    bias_preset_selected: string;
    bias_presets: {
        "Default (none)": any[];
        'Anti-bond': {
            id: string;
            text: string;
            value: number;
        }[];
    };
    wi_format: string;
    group_nudge_prompt: string;
    scenario_format: string;
    personality_format: string;
    openai_model: string;
    claude_model: string;
    google_model: string;
    ai21_model: string;
    mistralai_model: string;
    cohere_model: string;
    perplexity_model: string;
    groq_model: string;
    nanogpt_model: string;
    zerooneai_model: string;
    deepseek_model: string;
    xai_model: string;
    custom_model: string;
    custom_url: string;
    custom_include_body: string;
    custom_exclude_body: string;
    custom_include_headers: string;
    windowai_model: string;
    openrouter_model: string;
    openrouter_use_fallback: boolean;
    openrouter_group_models: boolean;
    openrouter_sort_models: string;
    openrouter_providers: any[];
    openrouter_allow_fallbacks: boolean;
    openrouter_middleout: string;
    reverse_proxy: string;
    chat_completion_source: string;
    max_context_unlocked: boolean;
    api_url_scale: string;
    show_external_models: boolean;
    proxy_password: string;
    assistant_prefill: string;
    assistant_impersonation: string;
    claude_use_sysprompt: boolean;
    use_makersuite_sysprompt: boolean;
    use_alt_scale: boolean;
    squash_system_messages: boolean;
    image_inlining: boolean;
    inline_image_quality: string;
    bypass_status_check: boolean;
    continue_prefill: boolean;
    function_calling: boolean;
    names_behavior: number;
    continue_postfix: string;
    custom_prompt_post_processing: string;
    show_thoughts: boolean;
    reasoning_effort: string;
    enable_web_search: boolean;
    request_images: boolean;
    seed: number;
    n: number;
    prompt_order: any[];
    prompts: ({
        name: string;
        system_prompt: boolean;
        role: string;
        content: string;
        identifier: string;
        marker?: undefined;
    } | {
        identifier: string;
        name: string;
        system_prompt: boolean;
        marker: boolean;
        role?: undefined;
        content?: undefined;
    } | {
        identifier: string;
        role: string;
        name: string;
        content: string;
        system_prompt: boolean;
        marker: boolean;
    })[];
    preset_settings_openai: string;
    temp_openai: number;
    freq_pen_openai: number;
    pres_pen_openai: number;
    top_p_openai: number;
    top_k_openai: number;
    min_p_openai: number;
    top_a_openai: number;
    repetition_penalty_openai: number;
    stream_openai: boolean;
    openai_max_context: number;
    openai_max_tokens: number;
    wrap_in_quotes: boolean;
};
export function loadOpenAISettings(data: any, settings: any): void;
/**
 * Formats chat messages into chat completion messages.
 * @param {object[]} chat - Array containing all messages.
 * @returns {object[]} - Array containing all messages formatted for chat completion.
 */
export function setOpenAIMessages(chat: object[]): object[];
/**
 * Formats chat examples into chat completion messages.
 * @param {string[]} mesExamplesArray - Array containing all examples.
 * @returns {object[]} - Array containing all examples formatted for chat completion.
 */
export function setOpenAIMessageExamples(mesExamplesArray: string[]): object[];
/**
 * One-time setup for prompt manager module.
 *
 * @param openAiSettings
 * @returns {PromptManager|null}
 */
export function setupChatCompletionPromptManager(openAiSettings: any): PromptManager | null;
/**
 * Send a chat completion request to backend
 * @param {string} type (impersonate, quiet, continue, etc)
 * @param {Array} messages
 * @param {AbortSignal?} signal
 * @returns {Promise<unknown>}
 * @throws {Error}
 */
export function sendOpenAIRequest(type: string, messages: any[], signal: AbortSignal | null): Promise<unknown>;
export class TokenHandler {
    /**
     * @param {(messages: object[] | object, full?: boolean) => Promise<number>} countTokenAsyncFn Function to count tokens
     */
    constructor(countTokenAsyncFn: (messages: object[] | object, full?: boolean) => Promise<number>);
    countTokenAsyncFn: (messages: object[] | object, full?: boolean) => Promise<number>;
    counts: {
        start_chat: number;
        prompt: number;
        bias: number;
        nudge: number;
        jailbreak: number;
        impersonate: number;
        examples: number;
        conversation: number;
    };
    getCounts(): {
        start_chat: number;
        prompt: number;
        bias: number;
        nudge: number;
        jailbreak: number;
        impersonate: number;
        examples: number;
        conversation: number;
    };
    resetCounts(): void;
    setCounts(counts: any): void;
    uncount(value: any, type: any): void;
    /**
     * Count tokens for a message or messages.
     * @param {object|any[]} messages Messages to count tokens for
     * @param {boolean} [full] Count full tokens
     * @param {string} [type] Identifier for the token count
     * @returns {Promise<number>} The token count
     */
    countAsync(messages: object | any[], full?: boolean, type?: string): Promise<number>;
    getTokensForIdentifier(identifier: any): any;
    getTotal(): number;
    log(): void;
}
export class IdentifierNotFoundError extends Error {
    constructor(identifier: any);
}
/**
 * Used for creating, managing, and interacting with a collection of Message instances.
 *
 * @class MessageCollection
 */
export class MessageCollection {
    /**
     * @constructor
     * @param {string} identifier - A unique identifier for the MessageCollection.
     * @param {...Object} items - An array of Message or MessageCollection instances to be added to the collection.
     */
    constructor(identifier: string, ...items: any[]);
    collection: any[];
    identifier: string;
    /**
     * Get chat in the format of {role, name, content, tool_calls}.
     * @returns {Array} Array of objects with role, name, and content properties.
     */
    getChat(): any[];
    /**
     * Method to get the collection of messages.
     * @returns {Array} The collection of Message instances.
     */
    getCollection(): any[];
    /**
     * Add a new item to the collection.
     * @param {Object} item - The Message or MessageCollection instance to be added.
     */
    add(item: any): void;
    /**
     * Get an item from the collection by its identifier.
     * @param {string} identifier - The identifier of the item to be found.
     * @returns {Object} The found item, or undefined if no item was found.
     */
    getItemByIdentifier(identifier: string): any;
    /**
     * Check if an item with the given identifier exists in the collection.
     * @param {string} identifier - The identifier to check.
     * @returns {boolean} True if an item with the given identifier exists, false otherwise.
     */
    hasItemWithIdentifier(identifier: string): boolean;
    /**
     * Get the total number of tokens in the collection.
     * @returns {number} The total number of tokens.
     */
    getTokens(): number;
    /**
     * Combines message collections into a single collection.
     * @returns {Message[]} The collection of messages flattened into a single array.
     */
    flatten(): Message[];
}
import { PromptManager } from './PromptManager.js';
//# sourceMappingURL=openai.d.ts.map