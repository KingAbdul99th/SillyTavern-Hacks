/**
 * Extracts the reasoning from the response data.
 * @param {object} data Response data
 * @returns {string} Extracted reasoning
 */
export function extractReasoningFromData(data: object, { mainApi, ignoreShowThoughts, textGenType, chatCompletionSource, }?: {
    mainApi?: any;
    ignoreShowThoughts?: boolean;
    textGenType?: any;
    chatCompletionSource?: any;
}): string;
/**
 * Check if the model supports reasoning, but does not send back the reasoning
 * @returns {boolean} True if the model supports reasoning
 */
export function isHiddenReasoningModel(): boolean;
/**
 * Updates the Reasoning UI for a specific message
 * @param {number|JQuery<HTMLElement>|HTMLElement} messageIdOrElement The message ID or the message element
 * @param {Object} [options={}] - Optional arguments
 * @param {boolean} [options.reset=false] - Whether to reset state, and not take the current mess properties (for example when swiping)
 */
export function updateReasoningUI(messageIdOrElement: number | JQuery<HTMLElement> | HTMLElement, { reset }?: {
    reset?: boolean;
}): void;
/**
 * Removes reasoning from a string if auto-parsing is enabled.
 * @param {string} str Input string
 * @returns {string} Output string
 */
export function removeReasoningFromString(str: string): string;
/**
 * Parses reasoning from a string using the power user reasoning settings.
 * @typedef {Object} ParsedReasoning
 * @property {string} reasoning Reasoning block
 * @property {string} content Message content
 * @param {string} str Content of the message
 * @param {Object} options Optional arguments
 * @param {boolean} [options.strict=true] Whether the reasoning block **has** to be at the beginning of the provided string (excluding whitespaces), or can be anywhere in it
 * @returns {ParsedReasoning|null} Parsed reasoning block and message content
 */
export function parseReasoningFromString(str: string, { strict }?: {
    strict?: boolean;
}): ParsedReasoning | null;
/**
 * Parse reasoning in an array of swipe strings if auto-parsing is enabled.
 * @param {string[]} swipes Array of swipe strings
 * @param {{extra: ReasoningMessageExtra}[]} swipeInfoArray Array of swipe info objects
 * @param {number?} duration Duration of the reasoning
 * @typedef {object} ReasoningMessageExtra Extra reasoning data
 * @property {string} reasoning Reasoning block
 * @property {number} reasoning_duration Duration of the reasoning block
 * @property {string} reasoning_type Type of reasoning block
 */
export function parseReasoningInSwipes(swipes: string[], swipeInfoArray: {
    extra: ReasoningMessageExtra;
}[], duration: number | null): void;
/**
 * Loads reasoning templates from the settings data.
 * @param {object} data Settings data
 * @param {ReasoningTemplate[]} data.reasoning Reasoning templates
 * @returns {Promise<void>}
 */
export function loadReasoningTemplates(data: {
    reasoning: ReasoningTemplate[];
}): Promise<void>;
/**
 * Initializes reasoning settings and event handlers.
 */
export function initReasoning(): void;
/**
 * @typedef {object} ReasoningTemplate
 * @property {string} name - The name of the template
 * @property {string} prefix - Reasoning prefix
 * @property {string} suffix - Reasoning suffix
 * @property {string} separator - Reasoning separator
 */
/**
 * @type {ReasoningTemplate[]} List of reasoning templates
 */
export const reasoning_templates: ReasoningTemplate[];
export const DEFAULT_REASONING_TEMPLATE: "DeepSeek";
/**
 * *
 */
export type ReasoningType = string;
export namespace ReasoningType {
    let Model: string;
    let Parsed: string;
    let Manual: string;
    let Edited: string;
}
/**
 * *
 */
export type ReasoningState = string;
export namespace ReasoningState {
    let None: string;
    let Thinking: string;
    let Done: string;
    let Hidden: string;
}
/**
 * Handles reasoning-specific logic and DOM updates for messages.
 * This class is used inside the {@link StreamingProcessor} to manage reasoning states and UI updates.
 */
export class ReasoningHandler {
    /**
     * @param {Date?} [timeStarted=null] - When the generation started
     */
    constructor(timeStarted?: Date | null);
    /** @type {ReasoningState} The current state of the reasoning process */
    state: ReasoningState;
    /** @type {ReasoningType?} The type of the reasoning (where it came from) */
    type: ReasoningType | null;
    /** @type {string} The reasoning output */
    reasoning: string;
    /** @type {string?} The reasoning output display in case of translate or other */
    reasoningDisplayText: string | null;
    /** @type {Date} When the reasoning started */
    startTime: Date;
    /** @type {Date} When the reasoning ended */
    endTime: Date;
    /** @type {Date} Initial starting time of the generation */
    initialTime: Date;
    /** @type {HTMLElement} Main message DOM element `.mes` */
    messageDom: HTMLElement;
    /** @type {HTMLDetailsElement} Reasoning details DOM element `.mes_reasoning_details` */
    messageReasoningDetailsDom: HTMLDetailsElement;
    /** @type {HTMLElement} Reasoning content DOM element `.mes_reasoning` */
    messageReasoningContentDom: HTMLElement;
    /** @type {HTMLElement} Reasoning header DOM element `.mes_reasoning_header_title` */
    messageReasoningHeaderDom: HTMLElement;
    /**
     * Sets the reasoning state when continuing a prompt.
     * @param {PromptReasoning} promptReasoning Prompt reasoning object
     */
    initContinue(promptReasoning: PromptReasoning): void;
    /**
     * Initializes the reasoning handler for a specific message.
     *
     * Can be used to update the DOM elements or read other reasoning states.
     * It will internally take the message-saved data and write the states back into the handler, as if during streaming of the message.
     * The state will always be either done/hidden or none.
     *
     * @param {number|JQuery<HTMLElement>|HTMLElement} messageIdOrElement - The message ID or the message element
     * @param {Object} [options={}] - Optional arguments
     * @param {boolean} [options.reset=false] - Whether to reset state of the handler, and not take the current mess properties (for example when swiping)
     */
    initHandleMessage(messageIdOrElement: number | JQuery<HTMLElement> | HTMLElement, { reset }?: {
        reset?: boolean;
    }): void;
    /**
     * Gets the duration of the reasoning in milliseconds.
     *
     * @returns {number?} The duration in milliseconds, or null if the start or end time is not set
     */
    getDuration(): number | null;
    /**
     * Updates the reasoning text/string for a message.
     *
     * @param {number} messageId - The ID of the message to update
     * @param {string?} [reasoning=null] - The reasoning text to update - If null or empty, uses the current reasoning
     * @param {Object} [options={}] - Optional arguments
     * @param {boolean} [options.persist=false] - Whether to persist the reasoning to the message object
     * @param {boolean} [options.allowReset=false] - Whether to allow empty reasoning provided to reset the reasoning, instead of just taking the existing one
     * @returns {boolean} - Returns true if the reasoning was changed, otherwise false
     */
    updateReasoning(messageId: number, reasoning?: string | null, { persist, allowReset }?: {
        persist?: boolean;
        allowReset?: boolean;
    }): boolean;
    /**
     * Handles processing of reasoning for a message.
     *
     * This is usually called by the message processor when a message is changed.
     *
     * @param {number} messageId - The ID of the message to process
     * @param {boolean} mesChanged - Whether the message has changed
     * @param {PromptReasoning} promptReasoning - Prompt reasoning object
     * @returns {Promise<void>}
     */
    process(messageId: number, mesChanged: boolean, promptReasoning: PromptReasoning): Promise<void>;
    /**
     * Completes the reasoning process for a message.
     *
     * Records the finish time if it was not set during streaming and updates the reasoning state.
     * Emits an event to signal the completion of reasoning and updates the DOM elements accordingly.
     *
     * @param {number} messageId - The ID of the message to complete reasoning for
     * @returns {Promise<void>}
     */
    finish(messageId: number): Promise<void>;
    /**
     * Updates the reasoning UI elements for a message.
     *
     * Toggles the CSS class, updates states, reasoning message, and duration.
     *
     * @param {number} messageId - The ID of the message to update
     */
    updateDom(messageId: number): void;
    #private;
}
/**
 * Helper class for adding reasoning to messages.
 * Keeps track of the number of reasoning additions.
 */
export class PromptReasoning {
    /**
     * An instance initiated during the latest prompt processing.
     * @type {PromptReasoning}
     * */
    static "__#14@#LATEST": PromptReasoning;
    /**
     * @readonly Zero-width space character used as a placeholder for reasoning.
     * @type {string}
    */
    static readonly REASONING_PLACEHOLDER: string;
    /**
     * Returns the latest formatted reasoning prefix if the prefix is incomplete.
     * @returns {string} Formatted reasoning prefix
     */
    static getLatestPrefix(): string;
    /**
     * Free the latest reasoning instance.
     * To be called when the generation has ended or stopped.
     */
    static clearLatest(): void;
    /** @type {number} */
    counter: number;
    /** @type {number} */
    prefixLength: number;
    /** @type {string} */
    prefixReasoning: string;
    /** @type {string} */
    prefixReasoningFormatted: string;
    /** @type {number?} */
    prefixDuration: number | null;
    /** @type {boolean} */
    prefixIncomplete: boolean;
    /**
     * Checks if the limit of reasoning additions has been reached.
     * @returns {boolean} True if the limit of reasoning additions has been reached, false otherwise.
     */
    isLimitReached(): boolean;
    /**
     * Add reasoning to a message according to the power user settings.
     * @param {string} content Message content
     * @param {string} reasoning Message reasoning
     * @param {boolean} isPrefix Whether this is the last message prefix
     * @param {number?} duration Duration of the reasoning
     * @returns {string} Message content with reasoning
     */
    addToMessage(content: string, reasoning: string, isPrefix: boolean, duration: number | null): string;
    /**
     * Removes the reasoning prefix from the content.
     * @param {string} content Content with the reasoning prefix
     * @returns {string} Content without the reasoning prefix
     */
    removePrefix(content: string): string;
}
/**
 * Parses reasoning from a string using the power user reasoning settings.
 */
export type ParsedReasoning = {
    /**
     * Reasoning block
     */
    reasoning: string;
    /**
     * Message content
     */
    content: string;
};
/**
 * Extra reasoning data
 */
export type ReasoningMessageExtra = {
    /**
     * Reasoning block
     */
    reasoning: string;
    /**
     * Duration of the reasoning block
     */
    reasoning_duration: number;
    /**
     * Type of reasoning block
     */
    reasoning_type: string;
};
export type ReasoningTemplate = {
    /**
     * - The name of the template
     */
    name: string;
    /**
     * - Reasoning prefix
     */
    prefix: string;
    /**
     * - Reasoning suffix
     */
    suffix: string;
    /**
     * - Reasoning separator
     */
    separator: string;
};
//# sourceMappingURL=reasoning.d.ts.map