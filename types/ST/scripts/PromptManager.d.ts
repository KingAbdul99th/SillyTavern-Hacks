export type INJECTION_POSITION = number;
export namespace INJECTION_POSITION {
    let RELATIVE: number;
    let ABSOLUTE: number;
}
/**
 * Representing a collection of prompts.
 */
export class PromptCollection {
    /**
     * Create a new PromptCollection instance.
     *
     * @param {...Prompt} prompts - An array of Prompt instances.
     */
    constructor(...prompts: Prompt[]);
    collection: any[];
    overriddenPrompts: any[];
    /**
     * Checks if the provided instances are of the Prompt class.
     *
     * @param {...any} prompts - Instances to check.
     * @throws Will throw an error if one or more instances are not of the Prompt class.
     */
    checkPromptInstance(...prompts: any[]): void;
    /**
     * Adds new Prompt instances to the collection.
     *
     * @param {...Prompt} prompts - An array of Prompt instances.
     */
    add(...prompts: Prompt[]): void;
    /**
     * Sets a Prompt instance at a specific position in the collection.
     *
     * @param {Prompt} prompt - The Prompt instance to set.
     * @param {number} position - The position in the collection to set the Prompt instance.
     */
    set(prompt: Prompt, position: number): void;
    /**
     * Retrieves a Prompt instance from the collection by its identifier.
     *
     * @param {string} identifier - The identifier of the Prompt instance to retrieve.
     * @returns {Prompt} The Prompt instance with the provided identifier, or undefined if not found.
     */
    get(identifier: string): Prompt;
    /**
     * Retrieves the index of a Prompt instance in the collection by its identifier.
     *
     * @param {string} identifier - The identifier of the Prompt instance to find.
     * @returns {number} The index of the Prompt instance in the collection, or -1 if not found.
     */
    index(identifier: string): number;
    /**
     * Checks if a Prompt instance exists in the collection by its identifier.
     *
     * @param {string} identifier - The identifier of the Prompt instance to check.
     * @returns {boolean} true if the Prompt instance exists in the collection, false otherwise.
     */
    has(identifier: string): boolean;
    override(prompt: any, position: any): void;
}
/**
 * Represents a prompt.
 */
export class Prompt {
    /**
     * Create a new Prompt instance.
     *
     * @param {Object} param0 - Object containing the properties of the prompt.
     * @param {string} param0.identifier - The unique identifier of the prompt.
     * @param {string} param0.role - The role associated with the prompt.
     * @param {string} param0.content - The content of the prompt.
     * @param {string} param0.name - The name of the prompt.
     * @param {boolean} param0.system_prompt - Indicates if the prompt is a system prompt.
     * @param {string} param0.position - The position of the prompt in the prompt list.
     * @param {number} param0.injection_position - The insert position of the prompt.
     * @param {number} param0.injection_depth - The depth of the prompt in the chat.
     * @param {boolean} param0.forbid_overrides - Indicates if the prompt should not be overridden.
     * @param {boolean} param0.extension - Prompt is added by an extension.
     */
    constructor({ identifier, role, content, name, system_prompt, position, injection_depth, injection_position, forbid_overrides, extension }?: {
        identifier: string;
        role: string;
        content: string;
        name: string;
        system_prompt: boolean;
        position: string;
        injection_position: number;
        injection_depth: number;
        forbid_overrides: boolean;
        extension: boolean;
    });
    identifier: string;
    role: string;
    content: string;
    name: string;
    system_prompt: boolean;
    position: string;
    injection_position: number;
    injection_depth: number;
    forbid_overrides: boolean;
    extension: boolean;
}
export class PromptManager {
    systemPrompts: string[];
    overridablePrompts: string[];
    overriddenPrompts: any[];
    configuration: {
        version: number;
        prefix: string;
        containerIdentifier: string;
        listIdentifier: string;
        listItemTemplateIdentifier: string;
        toggleDisabled: any[];
        promptOrder: {
            strategy: string;
            dummyId: number;
        };
        sortableDelay: number;
        warningTokenThreshold: number;
        dangerTokenThreshold: number;
        defaultPrompts: {
            main: string;
            nsfw: string;
            jailbreak: string;
            enhanceDefinitions: string;
        };
    };
    serviceSettings: any;
    containerElement: HTMLElement;
    listElement: Element;
    activeCharacter: any;
    messages: MessageCollection;
    tokenHandler: any;
    tokenUsage: number;
    error: any;
    /** Dry-run for generate, must return a promise  */
    tryGenerate: () => Promise<void>;
    /** Called to persist the configuration, must return a promise */
    saveServiceSettings: () => void;
    /** Toggle prompt button click */
    handleToggle: () => void;
    /** Prompt name click */
    handleInspect: () => void;
    /** Edit prompt button click */
    handleEdit: () => void;
    /** Detach prompt button click */
    handleDetach: () => void;
    /** Save prompt button click */
    handleSavePrompt: () => void;
    /** Reset prompt button click */
    handleResetPrompt: () => void;
    /** New prompt button click */
    handleNewPrompt: () => void;
    /** Delete prompt button click */
    handleDeletePrompt: () => void;
    /** Append prompt button click */
    handleAppendPrompt: () => void;
    /** Import button click */
    handleImport: () => void;
    /** Full export click */
    handleFullExport: () => void;
    /** Character export click */
    handleCharacterExport: () => void;
    /** Character reset button click*/
    handleCharacterReset: () => void;
    /** Debounced version of render */
    renderDebounced: Function;
    /**
     * Initializes the PromptManager with provided configuration and service settings.
     *
     * Sets up various handlers for user interactions, event listeners and initial rendering of prompts.
     * It is also responsible for preparing prompt edit form buttons, managing popup form close and clear actions.
     *
     * @param {Object} moduleConfiguration - Configuration object for the PromptManager.
     * @param {Object} serviceSettings - Service settings object for the PromptManager.
     */
    init(moduleConfiguration: any, serviceSettings: any): void;
    /**
     * Main rendering function
     *
     * @param afterTryGenerate - Whether a dry run should be attempted before rendering
     */
    render(afterTryGenerate?: boolean): void;
    /**
     * Update a prompt with the values from the HTML form.
     * @param {object} prompt - The prompt to be updated.
     * @returns {void}
     */
    updatePromptWithPromptEditForm(prompt: object): void;
    /**
     * Find a prompt by its identifier and update it with the provided object.
     * @param {string} identifier - The identifier of the prompt.
     * @param {object} updatePrompt - An object with properties to be updated in the prompt.
     * @returns {void}
     */
    updatePromptByIdentifier(identifier: string, updatePrompt: object): void;
    /**
     * Iterate over an array of prompts, find each one by its identifier, and update them with the provided data.
     * @param {object[]} prompts - An array of prompt updates.
     * @returns {void}
     */
    updatePrompts(prompts: object[]): void;
    getTokenHandler(): any;
    isPromptDisabledForActiveCharacter(identifier: any): boolean;
    /**
     * Add a prompt to the current character's prompt list.
     * @param {object} prompt - The prompt to be added.
     * @param {object} character - The character whose prompt list will be updated.
     * @returns {void}
     */
    appendPrompt(prompt: object, character: object): void;
    /**
     * Remove a prompt from the current character's prompt list.
     * @param {object} prompt - The prompt to be removed.
     * @param {object} character - The character whose prompt list will be updated.
     * @returns {void}
     */
    detachPrompt(prompt: object, character: object): void;
    /**
     * Create a new prompt and add it to the list of prompts.
     * @param {object} prompt - The prompt to be added.
     * @param {string} identifier - The identifier for the new prompt.
     * @returns {void}
     */
    addPrompt(prompt: object, identifier: string): void;
    /**
     * Sanitize the service settings, ensuring each prompt has a unique identifier.
     * @returns {void}
     */
    sanitizeServiceSettings(): void;
    /**
     * Checks whether entries of a characters prompt order are orphaned
     * and if all mandatory system prompts for a character are present.
     *
     * @param prompts
     */
    checkForMissingPrompts(prompts: any): void;
    /**
     * Check whether a prompt can be inspected.
     * @param {object} prompt - The prompt to check.
     * @returns {boolean} True if the prompt is a marker, false otherwise.
     */
    isPromptInspectionAllowed(prompt: object): boolean;
    /**
     * Check whether a prompt can be deleted. System prompts cannot be deleted.
     * @param {object} prompt - The prompt to check.
     * @returns {boolean} True if the prompt can be deleted, false otherwise.
     */
    isPromptDeletionAllowed(prompt: object): boolean;
    /**
     * Check whether a prompt can be edited.
     * @param {object} prompt - The prompt to check.
     * @returns {boolean} True if the prompt can be edited, false otherwise.
     */
    isPromptEditAllowed(prompt: object): boolean;
    /**
     * Check whether a prompt can be toggled on or off.
     * @param {object} prompt - The prompt to check.
     * @returns {boolean} True if the prompt can be deleted, false otherwise.
     */
    isPromptToggleAllowed(prompt: object): boolean;
    /**
     * Handle the deletion of a character by removing their prompt list and nullifying the active character if it was the one deleted.
     * @param {object} event - The event object containing the character's ID.
     * @returns void
     */
    handleCharacterDeleted(event: object): void;
    /**
     * Handle the selection of a character by setting them as the active character and setting up their prompt list if necessary.
     * @param {object} event - The event object containing the character's ID and character data.
     * @returns {void}
     */
    handleCharacterSelected(event: object): void;
    /**
     * Set the most recently selected character
     *
     * @param event
     */
    handleCharacterUpdated(event: any): void;
    /**
     * Set the most recently selected character group
     *
     * @param event
     */
    handleGroupSelected(event: any): void;
    /**
     * Get a list of group characters, regardless of whether they are active or not.
     *
     * @returns {string[]}
     */
    getActiveGroupCharacters(): string[];
    /**
     * Get the prompts for a specific character. Can be filtered to only include enabled prompts.
     * @returns {object[]} The prompts for the character.
     * @param character
     * @param onlyEnabled
     */
    getPromptsForCharacter(character: any, onlyEnabled?: boolean): object[];
    /**
     * Get the order of prompts for a specific character. If no character is specified or the character doesn't have a prompt list, an empty array is returned.
     * @param {object|null} character - The character to get the prompt list for.
     * @returns {object[]} The prompt list for the character, or an empty array.
     */
    getPromptOrderForCharacter(character: object | null): object[];
    /**
     * Set the prompts for the manager.
     * @param {object[]} prompts - The prompts to be set.
     * @returns {void}
     */
    setPrompts(prompts: object[]): void;
    /**
     * Remove the prompt list for a specific character.
     * @param {object} character - The character whose prompt list will be removed.
     * @returns {void}
     */
    removePromptOrderForCharacter(character: object): void;
    /**
     * Adds a new prompt list for a specific character.
     * @param {Object} character - Object with at least an `id` property
     * @param {Array<Object>} promptOrder - Array of prompt objects
     */
    addPromptOrderForCharacter(character: any, promptOrder: Array<any>): void;
    /**
     * Searches for a prompt list entry for a given character and identifier.
     * @param {Object} character - Character object
     * @param {string} identifier - Identifier of the prompt list entry
     * @returns {Object|null} The prompt list entry object, or null if not found
     */
    getPromptOrderEntry(character: any, identifier: string): any | null;
    /**
     * Finds and returns a prompt by its identifier.
     * @param {string} identifier - Identifier of the prompt
     * @returns {Object|null} The prompt object, or null if not found
     */
    getPromptById(identifier: string): any | null;
    /**
     * Finds and returns the index of a prompt by its identifier.
     * @param {string} identifier - Identifier of the prompt
     * @returns {number|null} Index of the prompt, or null if not found
     */
    getPromptIndexById(identifier: string): number | null;
    /**
     * Enriches a generic object, creating a new prompt object in the process
     *
     * @param {Object} prompt - Prompt object
     * @param original
     * @returns {Object} An object with "role" and "content" properties
     */
    preparePrompt(prompt: any, original?: any): any;
    /**
     * Factory function for creating a QuickEdit object associated with a prompt element.
     *
     * The QuickEdit object provides methods to synchronize an input element's value with a prompt's content
     * and handle input events to update the prompt content.
     *
     */
    createQuickEdit(identifier: any, title: any): void;
    updateQuickEdit(identifier: any, prompt: any): string;
    /**
     * Checks if a given name is accepted by OpenAi API
     * @link https://platform.openai.com/docs/api-reference/chat/create
     *
     * @param name
     * @returns {boolean}
     */
    isValidName(name: any): boolean;
    sanitizeName(name: any): any;
    /**
     * Loads a given prompt into the edit form fields.
     * @param {Object} prompt - Prompt object with properties 'name', 'role', 'content', and 'system_prompt'
     */
    loadPromptIntoEditForm(prompt: any): void;
    handleInjectionPositionChange(event: any): void;
    /**
     * Loads a given prompt into the inspect form
     * @param {MessageCollection} messages - Prompt object with properties 'name', 'role', 'content', and 'system_prompt'
     */
    loadMessagesIntoInspectForm(messages: MessageCollection): void;
    /**
     * Clears all input fields in the edit form.
     */
    clearEditForm(): void;
    clearInspectForm(): void;
    /**
     * Returns a full list of prompts whose content markers have been substituted.
     * @returns {PromptCollection} A PromptCollection object
     */
    getPromptCollection(): PromptCollection;
    /**
     * Setter for messages property
     *
     * @param {import('./openai.js').MessageCollection} messages
     */
    setMessages(messages: import("./openai.js").MessageCollection): void;
    /**
     * Set and process a finished chat completion object
     *
     * @param {import('./openai.js').ChatCompletion} chatCompletion
     */
    setChatCompletion(chatCompletion: import("./openai.js").ChatCompletion): void;
    /**
     * Populates the token handler
     *
     * @param {import('./openai.js').MessageCollection} messages
     */
    populateTokenCounts(messages: import("./openai.js").MessageCollection): void;
    /**
     * Empties, then re-assembles the container containing the prompt list.
     */
    renderPromptManager(): Promise<void>;
    /**
     * Empties, then re-assembles the prompt list
     */
    renderPromptManagerListItems(): Promise<void>;
    /**
     * Writes the passed data to a json file
     *
     * @param data
     * @param type
     * @param name
     */
    export(data: any, type: any, name?: string): void;
    /**
     * Imports a json file with prompts and an optional prompt list for the active character
     *
     * @param importData
     */
    import(importData: any): void;
    /**
     * Helper function to check whether the structure of object matches controlObj
     *
     * @param controlObj
     * @param object
     * @returns {boolean}
     */
    validateObject(controlObj: any, object: any): boolean;
    /**
     * Get current date as mm/dd/YYYY
     *
     * @returns {`${string}_${string}_${string}`}
     */
    getFormattedDate(): `${string}_${string}_${string}`;
    /**
     * Makes the prompt list draggable and handles swapping of two entries in the list.
     * @typedef {Object} Entry
     * @property {string} identifier
     * @returns {void}
     */
    makeDraggable(): void;
    /**
     * Slides down the edit form and adds the class 'openDrawer' to the first element of '#openai_prompt_manager_popup'.
     * @returns {void}
     */
    showPopup(area?: string): void;
    /**
     * Slides up the edit form and removes the class 'openDrawer' from the first element of '#openai_prompt_manager_popup'.
     * @returns {void}
     */
    hidePopup(): void;
    /**
     * Quick uuid4 implementation
     * @returns {string} A string representation of an uuid4
     */
    getUuidv4(): string;
    /**
     * Write to console with prefix
     *
     * @param output
     */
    log(output: any): void;
    /**
     * Start a profiling task
     *
     * @param identifier
     */
    profileStart(identifier: any): void;
    /**
     * End a profiling task
     *
     * @param identifier
     */
    profileEnd(identifier: any): void;
    #private;
}
/**
 * Register migrations for the prompt manager when settings are loaded or an Open AI preset is loaded.
 */
export function registerPromptManagerMigration(): void;
export namespace chatCompletionDefaultPrompts {
    let prompts: ({
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
}
export namespace promptManagerDefaultPromptOrders {
    let prompt_order: any[];
}
import { MessageCollection } from './openai.js';
//# sourceMappingURL=PromptManager.d.ts.map