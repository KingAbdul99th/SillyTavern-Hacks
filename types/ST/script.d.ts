export function reloadMarkdownProcessor(): any;
export function getCurrentChatId(): any;
export function getRequestHeaders(): {
    'Content-Type': string;
    'X-CSRF-Token': any;
};
export function getSlideToggleOptions(): {
    miliseconds: number;
    transitionFunction: string;
};
/**
 * Pings the STserver to check if it is reachable.
 * @returns {Promise<boolean>} True if the server is reachable, false otherwise.
 */
export function pingServer(): Promise<boolean>;
export function displayOnlineStatus(): void;
/**
 * Sets the duration of JS animations.
 * @param {number} ms Duration in milliseconds. Resets to default if null.
 */
export function setAnimationDuration(ms?: number): void;
/**
 * Sets the currently active character
 * @param {object|number|string} [entityOrKey] - An entity with id property (character, group, tag), or directly an id or tag key. If not provided, the active character is reset to `null`.
 */
export function setActiveCharacter(entityOrKey?: object | number | string): void;
/**
 * Sets the currently active group.
 * @param {object|number|string} [entityOrKey] - An entity with id property (character, group, tag), or directly an id or tag key. If not provided, the active group is reset to `null`.
 */
export function setActiveGroup(entityOrKey?: object | number | string): void;
/**
 * Gets the itemized prompts for a chat.
 * @param {string} chatId Chat ID to load
 */
export function loadItemizedPrompts(chatId: string): Promise<void>;
/**
 * Saves the itemized prompts for a chat.
 * @param {string} chatId Chat ID to save itemized prompts for
 */
export function saveItemizedPrompts(chatId: string): Promise<void>;
/**
 * Replaces the itemized prompt text for a message.
 * @param {number} mesId Message ID to get itemized prompt for
 * @param {string} promptText New raw prompt text
 * @returns
 */
export function replaceItemizedPromptText(mesId: number, promptText: string): Promise<void>;
/**
 * Deletes the itemized prompts for a chat.
 * @param {string} chatId Chat ID to delete itemized prompts for
 */
export function deleteItemizedPrompts(chatId: string): Promise<void>;
/**
 * Empties the itemized prompts array and caches.
 */
export function clearItemizedPrompts(): Promise<void>;
export function startStatusLoading(): void;
export function stopStatusLoading(): void;
export function resultCheckStatus(): void;
/**
 * Switches the currently selected character to the one with the given ID. (character index, not the character key!)
 *
 * If the character ID doesn't exist, if the chat is being saved, or if a group is being generated, this function does nothing.
 * If the character is different from the currently selected one, it will clear the chat and reset any selected character or group.
 * @param {number} id The ID of the character to switch to.
 * @param {object} [options] Options for the switch.
 * @param {boolean} [options.switchMenu=true] Whether to switch the right menu to the character edit menu if the character is already selected.
 * @returns {Promise<void>} A promise that resolves when the character is switched.
 */
export function selectCharacterById(id: number, { switchMenu }?: {
    switchMenu?: boolean;
}): Promise<void>;
/**
 * Prints the global character list, optionally doing a full refresh of the list
 * Use this function whenever the reprinting of the character list is the primary focus, otherwise using `printCharactersDebounced` is preferred for a cleaner, non-blocking experience.
 *
 * The printing will also always reprint all filter options of the global list, to keep them up to date.
 *
 * @param {boolean} fullRefresh - If true, the list is fully refreshed and the navigation is being reset
 */
export function printCharacters(fullRefresh?: boolean): Promise<void>;
/** @typedef {object} Character - A character */
/** @typedef {object} Group - A group */
/**
 * @typedef {object} Entity - Object representing a display entity
 * @property {Character|Group|import('./scripts/tags.js').Tag|*} item - The item
 * @property {string|number} id - The id
 * @property {'character'|'group'|'tag'} type - The type of this entity (character, group, tag)
 * @property {Entity[]?} [entities=null] - An optional list of entities relevant for this item
 * @property {number?} [hidden=null] - An optional number representing how many hidden entities this entity contains
 * @property {boolean?} [isUseless=null] - Specifies if the entity is useless (not relevant, but should still be displayed for consistency) and should be displayed greyed out
 */
/**
 * Converts the given character to its entity representation
 *
 * @param {Character} character - The character
 * @param {string|number} id - The id of this character
 * @returns {Entity} The entity for this character
 */
export function characterToEntity(character: Character, id: string | number): Entity;
/**
 * Converts the given group to its entity representation
 *
 * @param {Group} group - The group
 * @returns {Entity} The entity for this group
 */
export function groupToEntity(group: Group): Entity;
/**
 * Converts the given tag to its entity representation
 *
 * @param {import('./scripts/tags.js').Tag} tag - The tag
 * @returns {Entity} The entity for this tag
 */
export function tagToEntity(tag: import("./scripts/tags.js").Tag): Entity;
/**
 * Builds the full list of all entities available
 *
 * They will be correctly marked and filtered.
 *
 * @param {object} param0 - Optional parameters
 * @param {boolean} [param0.doFilter] - Whether this entity list should already be filtered based on the global filters
 * @param {boolean} [param0.doSort] - Whether the entity list should be sorted when returned
 * @returns {Entity[]} All entities
 */
export function getEntitiesList({ doFilter, doSort }?: {
    doFilter?: boolean;
    doSort?: boolean;
}): Entity[];
export function getOneCharacter(avatarUrl: any): Promise<void>;
export function getCharacters(): Promise<void>;
export function replaceCurrentChat(): Promise<void>;
export function showMoreMessages(messagesToLoad?: any): Promise<void>;
export function printMessages(): Promise<void>;
export function clearChat(): Promise<void>;
export function deleteLastMessage(): Promise<void>;
export function reloadCurrentChat(): Promise<void>;
/**
 * Send the message currently typed into the chat box.
 */
export function sendTextareaMessage(): Promise<void>;
/**
 * Formats the message text into an HTML string using Markdown and other formatting.
 * @param {string} mes Message text
 * @param {string} ch_name Character name
 * @param {boolean} isSystem If the message was sent by the system
 * @param {boolean} isUser If the message was sent by the user
 * @param {number} messageId Message index in chat array
 * @param {object} [sanitizerOverrides] DOMPurify sanitizer option overrides
 * @param {boolean} [isReasoning] If the message is reasoning output
 * @returns {string} HTML string
 */
export function messageFormatting(mes: string, ch_name: string, isSystem: boolean, isUser: boolean, messageId: number, sanitizerOverrides?: object, isReasoning?: boolean): string;
/**
 * Re-renders a message block with updated content.
 * @param {number} messageId Message ID
 * @param {object} message Message object
 * @param {object} [options={}] Optional arguments
 * @param {boolean} [options.rerenderMessage=true] Whether to re-render the message content (inside <c>.mes_text</c>)
 */
export function updateMessageBlock(messageId: number, message: object, { rerenderMessage }?: {
    rerenderMessage?: boolean;
}): void;
/**
 * Appends image or file to the message element.
 * @param {object} mes Message object
 * @param {JQuery<HTMLElement>} messageElement Message element
 * @param {boolean} [adjustScroll=true] Whether to adjust the scroll position after appending the media
 */
export function appendMediaToMessage(mes: object, messageElement: JQuery<HTMLElement>, adjustScroll?: boolean): void;
/**
 * @deprecated Use appendMediaToMessage instead.
 */
export function appendImageToMessage(mes: any, messageElement: any): void;
export function addCopyToCodeBlocks(messageElement: any): void;
/**
 * Adds a single message to the chat.
 * @param {object} mes Message object
 * @param {object} [options] Options
 * @param {string} [options.type='normal'] Message type
 * @param {number} [options.insertAfter=null] Message ID to insert the new message after
 * @param {boolean} [options.scroll=true] Whether to scroll to the new message
 * @param {number} [options.insertBefore=null] Message ID to insert the new message before
 * @param {number} [options.forceId=null] Force the message ID
 * @param {boolean} [options.showSwipes=true] Whether to show swipe buttons
 * @returns {void}
 */
export function addOneMessage(mes: object, { type, insertAfter, scroll, insertBefore, forceId, showSwipes }?: {
    type?: string;
    insertAfter?: number;
    scroll?: boolean;
    insertBefore?: number;
    forceId?: number;
    showSwipes?: boolean;
}): void;
/**
 * Returns the URL of the avatar for the given character Id.
 * @param {number} characterId Character Id
 * @returns {string} Avatar URL
 */
export function getCharacterAvatar(characterId: number): string;
export function formatCharacterAvatar(characterAvatar: any): string;
export function scrollChatToBottom(): void;
/**
 * Substitutes {{macro}} parameters in a string.
 * @param {string} content - The string to substitute parameters in.
 * @param {Record<string,any>} additionalMacro - Additional environment variables for substitution.
 * @param {(x: string) => string} [postProcessFn] - Post-processing function for each substituted macro.
 * @returns {string} The string with substituted parameters.
 */
export function substituteParamsExtended(content: string, additionalMacro?: Record<string, any>, postProcessFn?: (x: string) => string): string;
/**
 * Substitutes {{macro}} parameters in a string.
 * @param {string} content - The string to substitute parameters in.
 * @param {string} [_name1] - The name of the user. Uses global name1 if not provided.
 * @param {string} [_name2] - The name of the character. Uses global name2 if not provided.
 * @param {string} [_original] - The original message for {{original}} substitution.
 * @param {string} [_group] - The group members list for {{group}} substitution.
 * @param {boolean} [_replaceCharacterCard] - Whether to replace character card macros.
 * @param {Record<string,any>} [additionalMacro] - Additional environment variables for substitution.
 * @param {(x: string) => string} [postProcessFn] - Post-processing function for each substituted macro.
 * @returns {string} The string with substituted parameters.
 */
export function substituteParams(content: string, _name1?: string, _name2?: string, _original?: string, _group?: string, _replaceCharacterCard?: boolean, additionalMacro?: Record<string, any>, postProcessFn?: (x: string) => string): string;
/**
 * Gets stopping sequences for the prompt.
 * @param {boolean} isImpersonate A request is made to impersonate a user
 * @param {boolean} isContinue A request is made to continue the message
 * @returns {string[]} Array of stopping strings
 */
export function getStoppingStrings(isImpersonate: boolean, isContinue: boolean): string[];
/**
 * Background generation based on the provided prompt.
 * @param {string} quiet_prompt Instruction prompt for the AI
 * @param {boolean} quietToLoud Whether the message should be sent in a foreground (loud) or background (quiet) mode
 * @param {boolean} skipWIAN whether to skip addition of World Info and Author's Note into the prompt
 * @param {string} quietImage Image to use for the quiet prompt
 * @param {string} quietName Name to use for the quiet prompt (defaults to "System:")
 * @param {number} [responseLength] Maximum response length. If unset, the global default value is used.
 * @param {number} force_chid Character ID to use for this generation run. Works in groups only.
 * @returns
 */
export function generateQuietPrompt(quiet_prompt: string, quietToLoud: boolean, skipWIAN: boolean, quietImage?: string, quietName?: string, responseLength?: number, force_chid?: number): Promise<string>;
/**
 * Executes slash commands and returns the new text and whether the generation was interrupted.
 * @param {string} message Text to be sent
 * @returns {Promise<boolean>} Whether the message sending was interrupted
 */
export function processCommands(message: string): Promise<boolean>;
export function sendSystemMessage(type: any, text: any, extra?: {}): void;
/**
 * Extracts the contents of bias macros from a message.
 * @param {string} message Message text
 * @returns {string} Message bias extracted from the message (or an empty string if not found)
 */
export function extractMessageBias(message: string): string;
/**
 * Wrapper to fetch extension prompts by module name
 * @param {string} moduleName Module name
 * @returns {Promise<string>} Extension prompt
 */
export function getExtensionPromptByName(moduleName: string): Promise<string>;
/**
 * Gets the maximum depth of extension prompts.
 * @returns {number} Maximum depth of extension prompts
 */
export function getExtensionPromptMaxDepth(): number;
/**
 * Returns the extension prompt for the given position, depth, and role.
 * If multiple prompts are found, they are joined with a separator.
 * @param {number} [position] Position of the prompt
 * @param {number} [depth] Depth of the prompt
 * @param {string} [separator] Separator for joining multiple prompts
 * @param {number} [role] Role of the prompt
 * @param {boolean} [wrap] Wrap start and end with a separator
 * @returns {Promise<string>} Extension prompt
 */
export function getExtensionPrompt(position?: number, depth?: number, separator?: string, role?: number, wrap?: boolean): Promise<string>;
export function baseChatReplace(value: any, name1: any, name2: any): any;
/**
 * Returns the character card fields for the current character.
 * @param {object} [options]
 * @param {number} [options.chid] Optional character index
 *
 * @typedef {object} CharacterCardFields
 * @property {string} system System prompt
 * @property {string} mesExamples Message examples
 * @property {string} description Description
 * @property {string} personality Personality
 * @property {string} persona Persona
 * @property {string} scenario Scenario
 * @property {string} jailbreak Jailbreak instructions
 * @property {string} version Character version
 * @property {string} charDepthPrompt Character depth note
 * @returns {CharacterCardFields} Character card fields
 */
export function getCharacterCardFields({ chid }?: {
    chid?: number;
}): CharacterCardFields;
/**
 * Parses an examples string.
 * @param {string} examplesStr
 * @returns {string[]} Examples array with block heading
 */
export function parseMesExamples(examplesStr: string, isInstruct: any): string[];
export function isStreamingEnabled(): boolean;
/**
 * Generates a message using the provided prompt.
 * @param {string} prompt Prompt to generate a message from
 * @param {string} api API to use. Main API is used if not specified.
 * @param {boolean} instructOverride true to override instruct mode, false to use the default value
 * @param {boolean} quietToLoud true to generate a message in system mode, false to generate a message in character mode
 * @param {string} [systemPrompt] System prompt to use. Only Instruct mode or OpenAI.
 * @param {number} [responseLength] Maximum response length. If unset, the global default value is used.
 * @param {boolean} [trimNames] Whether to allow trimming "{{user}}:" and "{{char}}:" from the response.
 * @returns {Promise<string>} Generated message
 */
export function generateRaw(prompt: string, api: string, instructOverride: boolean, quietToLoud: boolean, systemPrompt?: string, responseLength?: number, trimNames?: boolean): Promise<string>;
/**
 * Runs a generation using the current chat context.
 * @param {string} type Generation type
 * @param {GenerateOptions} options Generation options
 * @param {boolean} dryRun Whether to actually generate a message or just assemble the prompt
 * @returns {Promise<any>} Returns a promise that resolves when the text is done generating.
 * @typedef {{automatic_trigger?: boolean, force_name2?: boolean, quiet_prompt?: string, quietToLoud?: boolean, skipWIAN?: boolean, force_chid?: number, signal?: AbortSignal, quietImage?: string, quietName?: string, depth?: number }} GenerateOptions
 */
export function Generate(type: string, { automatic_trigger, force_name2, quiet_prompt, quietToLoud, skipWIAN, force_chid, signal, quietImage, quietName, depth }?: GenerateOptions, dryRun?: boolean): Promise<any>;
/**
 * Stops the generation and any streaming if it is currently running.
 */
export function stopGeneration(): boolean;
export function getNextMessageId(type: any): number;
/**
 * Determines if the message should be auto-continued.
 * @param {string} messageChunk Current message chunk
 * @param {boolean} isImpersonate Is the user impersonation
 * @returns {boolean} Whether the message should be auto-continued
 */
export function shouldAutoContinue(messageChunk: string, isImpersonate: boolean): boolean;
/**
 * Triggers auto-continue if the message meets the criteria.
 * @param {string} messageChunk Current message chunk
 * @param {boolean} isImpersonate Is the user impersonation
 */
export function triggerAutoContinue(messageChunk: string, isImpersonate: boolean): void;
export function getBiasStrings(textareaText: any, type: any): {
    messageBias: string;
    promptBias: string;
    isUserPromptBias: boolean;
};
/**
 * Removes all {{macros}} from a string.
 * @param {string} str String to remove macros from.
 * @returns {string} String with macros removed.
 */
export function removeMacros(str: string): string;
/**
 * Inserts a user message into the chat history.
 * @param {string} messageText Message text.
 * @param {string} messageBias Message bias.
 * @param {number} [insertAt] Optional index to insert the message at.
 * @param {boolean} [compact] Send as a compact display message.
 * @param {string} [name] Name of the user sending the message. Defaults to name1.
 * @param {string} [avatar] Avatar of the user sending the message. Defaults to user_avatar.
 * @returns {Promise<any>} A promise that resolves to the message when it is inserted.
 */
export function sendMessageAsUser(messageText: string, messageBias: string, insertAt?: number, compact?: boolean, name?: string, avatar?: string): Promise<any>;
/**
 * Gets the maximum usable context size for the current API.
 * @param {number|null} overrideResponseLength Optional override for the response length.
 * @returns {number} Maximum usable context size.
 */
export function getMaxContextSize(overrideResponseLength?: number | null): number;
export function itemizedParams(itemizedPrompts: any, thisPromptSet: any, incomingMesId: any): Promise<{
    charDescriptionTokens: number;
    charPersonalityTokens: number;
    scenarioTextTokens: number;
    userPersonaStringTokens: number;
    worldInfoStringTokens: number;
    allAnchorsTokens: number;
    summarizeStringTokens: number;
    authorsNoteStringTokens: number;
    smartContextStringTokens: number;
    beforeScenarioAnchorTokens: number;
    afterScenarioAnchorTokens: number;
    zeroDepthAnchorTokens: number;
    thisPrompt_padding: any;
    this_main_api: any;
    chatInjects: number;
    chatVectorsStringTokens: number;
    dataBankVectorsStringTokens: number;
    modelUsed: any;
    apiUsed: any;
    presetName: any;
}>;
export function findItemizedPromptSet(itemizedPrompts: any, incomingMesId: any): number;
/**
 * Sends a non-streaming request to the API.
 * @param {string} type Generation type
 * @param {object} data Generation data
 * @returns {Promise<object>} Response data from the API
 * @throws {Error|object}
 */
export function sendGenerationRequest(type: string, data: object): Promise<object>;
/**
 * Sends a streaming request to the API.
 * @param {string} type Generation type
 * @param {object} data Generation data
 * @returns {Promise<any>} Streaming generator
 */
export function sendStreamingRequest(type: string, data: object): Promise<any>;
/**
 * Gets the generation endpoint URL for the specified API.
 * @param {string} api API name
 * @returns {string} Generation URL
 * @throws {Error} If the API is unknown
 */
export function getGenerateUrl(api: string): string;
/**
 * Extracts the message from the response data.
 * @param {object} data Response data
 * @param {string} activeApi If it's set, ignores active API
 * @returns {string} Extracted message
 */
export function extractMessageFromData(data: object, activeApi?: string): string;
/**
 * Formats a message according to user settings
 * @param {object} [options] - Additional options.
 * @param {string} [options.getMessage] The message to clean up
 * @param {boolean} [options.isImpersonate] Whether this is an impersonated message
 * @param {boolean} [options.isContinue] Whether this is a continued message
 * @param {boolean} [options.displayIncompleteSentences] Whether to keep incomplete sentences at the end.
 * @param {array} [options.stoppingStrings] Array of stopping strings.
 * @param {boolean} [options.includeUserPromptBias] Whether to permit prepending the user prompt bias at the beginning.
 * @param {boolean} [options.trimNames] Whether to allow trimming "{{char}}:" or "{{user}}:" from the beginning.
 * @param {boolean} [options.trimWrongNames] Whether to allow deleting responses prefixed by the incorrect name, depending on isImpersonate
 *
 * @returns {string} The formatted message
 */
export function cleanUpMessage({ getMessage, isImpersonate, isContinue, displayIncompleteSentences, stoppingStrings, includeUserPromptBias, trimNames, trimWrongNames }?: {
    getMessage?: string;
    isImpersonate?: boolean;
    isContinue?: boolean;
    displayIncompleteSentences?: boolean;
    stoppingStrings?: any[];
    includeUserPromptBias?: boolean;
    trimNames?: boolean;
    trimWrongNames?: boolean;
}, ...args: any[]): string;
/**
 * Saves a resulting message to the chat.
 * @param {SaveReplyParams} params
 * @returns {Promise<SaveReplyResult>} Promise when the message is saved
 *
 * @typedef {object} SaveReplyParams
 * @property {string} type Type of generation
 * @property {string} getMessage Generated message
 * @property {boolean} [fromStreaming] If the message is from streaming
 * @property {string} [title] Message tooltip
 * @property {string[]} [swipes] Extra swipes
 * @property {string} [reasoning] Message reasoning
 * @property {string} [imageUrl] Link to an image
 *
 * @typedef {object} SaveReplyResult
 * @property {string} type Type of generation
 * @property {string} getMessage Generated message
 */
export function saveReply({ type, getMessage, fromStreaming, title, swipes, reasoning, imageUrl }: SaveReplyParams, ...args: any[]): Promise<SaveReplyResult>;
/**
 * Syncs the current message and all its data into the swipe data at the given message ID (or the last message if no ID is given).
 *
 * If the swipe data is invalid in some way, this function will exit out without doing anything.
 * @param {number?} [messageId=null] - The ID of the message to sync with the swipe data. If no ID is given, the last message is used.
 * @returns {boolean} Whether the message was successfully synced
 */
export function syncMesToSwipe(messageId?: number | null): boolean;
/**
 * Syncs swipe data back to the message data at the given message ID (or the last message if no ID is given).
 * If the swipe ID is not provided, the current swipe ID in the message object is used.
 *
 * If the swipe data is invalid in some way, this function will exit out without doing anything.
 * @param {number?} [messageId=null] - The ID of the message to sync with the swipe data. If no ID is given, the last message is used.
 * @param {number?} [swipeId=null] - The ID of the swipe to sync. If no ID is given, the current swipe ID in the message object is used.
 * @returns {boolean} Whether the swipe data was successfully synced to the message
 */
export function syncSwipeToMes(messageId?: number | null, swipeId?: number | null): boolean;
export function getGeneratingApi(): any;
/**
 * A function mainly used to switch 'generating' state - setting it to false and activating the buttons again
 */
export function activateSendButtons(): void;
/**
 * A function mainly used to switch 'generating' state - setting it to true and deactivating the buttons
 */
export function deactivateSendButtons(): void;
export function resetChatState(): void;
/**
 *
 * @param {'characters' | 'character_edit' | 'create' | 'group_edit' | 'group_create'} value
 */
export function setMenuType(value: "characters" | "character_edit" | "create" | "group_edit" | "group_create"): void;
export function setExternalAbortController(controller: any): void;
/**
 * Sets a character array index.
 * @param {number|string|undefined} value
 */
export function setCharacterId(value: number | string | undefined): void;
export function setCharacterName(value: any): void;
/**
 * Sets the API connection status of the application
 * @param {string|'no_connection'} value Connection status value
 */
export function setOnlineStatus(value: string | "no_connection"): void;
export function setEditedMessageId(value: any): void;
export function setSendButtonState(value: any): void;
/**
 * Renames the currently selected character, updating relevant references and optionally renaming past chats.
 *
 * If no name is provided, a popup prompts for a new name. If the new name matches the current name,
 * the renaming process is aborted. The function sends a request to the server to rename the character
 * and handles updates to other related fields such as tags, lore, and author notes.
 *
 * If the renaming is successful, the character list is reloaded and the renamed character is selected.
 * Optionally, past chats can be renamed to reflect the new character name.
 *
 * @param {string?} [name=null] - The new name for the character. If not provided, a popup will prompt for it.
 * @param {object} [options] - Additional options.
 * @param {boolean} [options.silent=false] - If true, suppresses popups and warnings.
 * @param {boolean?} [options.renameChats=null] - If true, renames past chats to reflect the new character name.
 * @returns {Promise<boolean>} - Returns true if the character was successfully renamed, false otherwise.
 */
export function renameCharacter(name?: string | null, { silent, renameChats }?: {
    silent?: boolean;
    renameChats?: boolean | null;
}): Promise<boolean>;
export function saveChatDebounced(): void;
/**
 * Saves the chat to the server.
 * @param {object} [options] - Additional options.
 * @param {string} [options.chatName] The name of the chat file to save to
 * @param {object} [options.withMetadata] Additional metadata to save with the chat
 * @param {number} [options.mesId] The message ID to save the chat up to
 * @param {boolean} [options.force] Force the saving despire the integrity check result
 *
 * @returns {Promise<void>}
 */
export function saveChat({ chatName, withMetadata, mesId, force }?: {
    chatName?: string;
    withMetadata?: object;
    mesId?: number;
    force?: boolean;
}, ...args: any[]): Promise<void>;
export function getThumbnailUrl(type: any, file: any): string;
export function buildAvatarList(block: any, entities: any, { templateId, empty, interactable, highlightFavs }?: {
    templateId?: string;
    empty?: boolean;
    interactable?: boolean;
    highlightFavs?: boolean;
}): void;
/**
 * Loads all the data of a shallow character.
 * @param {string|undefined} characterId Array index
 * @returns {Promise<void>} Promise that resolves when the character is unshallowed
 */
export function unshallowCharacter(characterId: string | undefined): Promise<void>;
export function getChat(): Promise<void>;
export function openCharacterChat(file_name: any): Promise<void>;
export function changeMainAPI(): void;
export function setUserName(value: any, { toastPersonaNameChange }?: {
    toastPersonaNameChange?: boolean;
}): void;
export function getSettings(): Promise<void>;
export function saveSettings(loopCounter?: number): Promise<any>;
/**
 * Sets the generation parameters from a preset object.
 * @param {{ genamt?: number, max_length?: number }} preset Preset object
 */
export function setGenerationParamsFromPreset(preset: {
    genamt?: number;
    max_length?: number;
}): void;
/**
 * Fetches the chat content for each chat file from the server and compiles them into a dictionary.
 * The function iterates over a provided list of chat metadata and requests the actual chat content
 * for each chat, either as an individual chat or a group chat based on the context.
 *
 * @param {Array} data - An array containing metadata about each chat such as file_name.
 * @param {boolean} isGroupChat - A flag indicating if the chat is a group chat.
 * @returns {Promise<Object>} chat_dict - A dictionary where each key is a file_name and the value is the
 * corresponding chat content fetched from the server.
 */
export function getChatsFromFiles(data: any[], isGroupChat: boolean): Promise<any>;
/**
 * Fetches the metadata of all past chats related to a specific character based on its avatar URL.
 * The function sends a POST request to the server to retrieve all chats for the character. It then
 * processes the received data, sorts it by the file name, and returns the sorted data.
 *
 * @param {null|number} [characterId=null] - When set, the function will use this character id instead of this_chid.
 *
 * @returns {Promise<Array>} - An array containing metadata of all past chats of the character, sorted
 * in descending order by file name. Returns an empty array if the fetch request is unsuccessful or the
 * response is an object with an `error` property set to `true`.
 */
export function getPastCharacterChats(characterId?: null | number): Promise<any[]>;
/**
 * Displays the past chats for a character or a group based on the selected context.
 * The function first fetches the chats, processes them, and then displays them in
 * the HTML. It also has a built-in search functionality that allows filtering the
 * displayed chats based on a search query.
 */
export function displayPastChats(): Promise<void>;
export function selectRightMenuWithAnimation(selectedMenuId: any): void;
export function select_rm_info(type: any, charId: any, previousCharId?: any): void;
/**
 * Selects the right menu for displaying the character editor.
 * @param {number|string} chid Character array index
 * @param {object} [param1] Options for the switch
 * @param {boolean} [param1.switchMenu=true] Whether to switch the menu
 */
export function select_selected_character(chid: number | string, { switchMenu }?: {
    switchMenu?: boolean;
}): void;
/**
 * Sets a prompt injection to insert custom text into any outgoing prompt. For use in UI extensions.
 * @param {string} key Prompt injection id.
 * @param {string} value Prompt injection value.
 * @param {number} position Insertion position. 0 is after story string, 1 is in-chat with custom depth.
 * @param {number} depth Insertion depth. 0 represets the last message in context. Expected values up to MAX_INJECTION_DEPTH.
 * @param {number} role Extension prompt role. Defaults to SYSTEM.
 * @param {boolean} scan Should the prompt be included in the world info scan.
 * @param {(function(): Promise<boolean>|boolean)} filter Filter function to determine if the prompt should be injected.
 */
export function setExtensionPrompt(key: string, value: string, position: number, depth: number, scan?: boolean, role?: number, filter?: (() => Promise<boolean> | boolean)): void;
/**
 * Gets a enum value of the extension prompt role by its name.
 * @param {string} roleName The name of the extension prompt role.
 * @returns {number} The role id of the extension prompt.
 */
export function getExtensionPromptRoleByName(roleName: string): number;
/**
 * Removes all char A/N prompt injections from the chat.
 * To clean up when switching from groups to solo and vice versa.
 */
export function removeDepthPrompts(): void;
/**
 * Adds or updates the metadata for the currently active chat.
 * @param {Object} newValues An object with collection of new values to be added into the metadata.
 * @param {boolean} reset Should a metadata be reset by this call.
 */
export function updateChatMetadata(newValues: any, reset: boolean): void;
export function setScenarioOverride(): Promise<void>;
/**
 * Displays a blocking popup with a given text and type.
 * @param {JQuery<HTMLElement>|string|Element} text - Text to display in the popup.
 * @param {string} type
 * @param {string} inputValue - Value to set the input to.
 * @param {PopupOptions} options - Options for the popup.
 * @typedef {{okButton?: string, rows?: number, wide?: boolean, wider?: boolean, large?: boolean, allowHorizontalScrolling?: boolean, allowVerticalScrolling?: boolean, cropAspect?: number }} PopupOptions - Options for the popup.
 * @returns {Promise<any>} A promise that resolves when the popup is closed.
 * @deprecated Use `callGenericPopup` instead.
 */
export function callPopup(text: JQuery<HTMLElement> | string | Element, type: string, inputValue?: string, { okButton, rows, wide, wider, large, allowHorizontalScrolling, allowVerticalScrolling, cropAspect }?: PopupOptions): Promise<any>;
export function showSwipeButtons(): void;
export function hideSwipeButtons(): void;
/**
 * Deletes a swipe from the chat.
 *
 * @param {number?} swipeId - The ID of the swipe to delete. If not provided, the current swipe will be deleted.
 * @returns {Promise<number>|undefined} - The ID of the new swipe after deletion.
 */
export function deleteSwipe(swipeId?: number | null): Promise<number> | undefined;
export function saveMetadata(): Promise<void>;
export function saveChatConditional(): Promise<void>;
export function getFirstDisplayedMessageId(): number;
/**
 * Closes the message editor.
 * @param {'message'|'reasoning'|'all'} what What to close. Default is 'all'.
 */
export function closeMessageEditor(what?: "message" | "reasoning" | "all"): void;
export function setGenerationProgress(progress: any): void;
export function cancelTtsPlay(): void;
/**
 * Imports supported files dropped into the app window.
 * @param {File[]} files Array of files to process
 * @param {Map<File, string>} [data] Extra data to pass to the import function
 * @returns {Promise<void>}
 */
export function processDroppedFiles(files: File[], data?: Map<File, string>): Promise<void>;
export function doNewChat({ deleteCurrentChat }?: {
    deleteCurrentChat?: boolean;
}): Promise<void>;
/**
 * Renames the currently selected chat.
 * @param {string} oldFileName Old name of the chat (no JSONL extension)
 * @param {string} newName New name for the chat (no JSONL extension)
 */
export function renameChat(oldFileName: string, newName: string): Promise<void>;
/**
 * Function to handle the deletion of a character, given a specific popup type and character ID.
 * If popup type equals "del_ch", it will proceed with deletion otherwise it will exit the function.
 * It fetches the delete character route, sending necessary parameters, and in case of success,
 * it proceeds to delete character from UI and saves settings.
 * In case of error during the fetch request, it logs the error details.
 *
 * @param {string} this_chid - The character ID to be deleted.
 * @param {boolean} delete_chats - Whether to delete chats or not.
 */
export function handleDeleteCharacter(this_chid: string, delete_chats: boolean): Promise<void>;
/**
 * Deletes a character completely, including associated chats if specified
 *
 * @param {string|string[]} characterKey - The key (avatar) of the character to be deleted
 * @param {Object} [options] - Optional parameters for the deletion
 * @param {boolean} [options.deleteChats=true] - Whether to delete associated chats or not
 * @return {Promise<void>} - A promise that resolves when the character is successfully deleted
 */
export function deleteCharacter(characterKey: string | string[], { deleteChats }?: {
    deleteChats?: boolean;
}): Promise<void>;
export namespace event_types {
    let APP_READY: string;
    let EXTRAS_CONNECTED: string;
    let MESSAGE_SWIPED: string;
    let MESSAGE_SENT: string;
    let MESSAGE_RECEIVED: string;
    let MESSAGE_EDITED: string;
    let MESSAGE_DELETED: string;
    let MESSAGE_UPDATED: string;
    let MESSAGE_FILE_EMBEDDED: string;
    let MESSAGE_REASONING_EDITED: string;
    let MESSAGE_REASONING_DELETED: string;
    let MORE_MESSAGES_LOADED: string;
    let IMPERSONATE_READY: string;
    let CHAT_CHANGED: string;
    let GENERATION_AFTER_COMMANDS: string;
    let GENERATION_STARTED: string;
    let GENERATION_STOPPED: string;
    let GENERATION_ENDED: string;
    let EXTENSIONS_FIRST_LOAD: string;
    let EXTENSION_SETTINGS_LOADED: string;
    let SETTINGS_LOADED: string;
    let SETTINGS_UPDATED: string;
    let GROUP_UPDATED: string;
    let MOVABLE_PANELS_RESET: string;
    let SETTINGS_LOADED_BEFORE: string;
    let SETTINGS_LOADED_AFTER: string;
    let CHATCOMPLETION_SOURCE_CHANGED: string;
    let CHATCOMPLETION_MODEL_CHANGED: string;
    let OAI_PRESET_CHANGED_BEFORE: string;
    let OAI_PRESET_CHANGED_AFTER: string;
    let OAI_PRESET_EXPORT_READY: string;
    let OAI_PRESET_IMPORT_READY: string;
    let WORLDINFO_SETTINGS_UPDATED: string;
    let WORLDINFO_UPDATED: string;
    let CHARACTER_EDITED: string;
    let CHARACTER_PAGE_LOADED: string;
    let CHARACTER_GROUP_OVERLAY_STATE_CHANGE_BEFORE: string;
    let CHARACTER_GROUP_OVERLAY_STATE_CHANGE_AFTER: string;
    let USER_MESSAGE_RENDERED: string;
    let CHARACTER_MESSAGE_RENDERED: string;
    let FORCE_SET_BACKGROUND: string;
    let CHAT_DELETED: string;
    let CHAT_CREATED: string;
    let GROUP_CHAT_DELETED: string;
    let GROUP_CHAT_CREATED: string;
    let GENERATE_BEFORE_COMBINE_PROMPTS: string;
    let GENERATE_AFTER_COMBINE_PROMPTS: string;
    let GENERATE_AFTER_DATA: string;
    let GROUP_MEMBER_DRAFTED: string;
    let GROUP_WRAPPER_STARTED: string;
    let GROUP_WRAPPER_FINISHED: string;
    let WORLD_INFO_ACTIVATED: string;
    let TEXT_COMPLETION_SETTINGS_READY: string;
    let CHAT_COMPLETION_SETTINGS_READY: string;
    let CHAT_COMPLETION_PROMPT_READY: string;
    let CHARACTER_FIRST_MESSAGE_SELECTED: string;
    let CHARACTER_DELETED: string;
    let CHARACTER_DUPLICATED: string;
    let CHARACTER_RENAMED: string;
    let CHARACTER_RENAMED_IN_PAST_CHAT: string;
    let SMOOTH_STREAM_TOKEN_RECEIVED: string;
    let STREAM_TOKEN_RECEIVED: string;
    let STREAM_REASONING_DONE: string;
    let FILE_ATTACHMENT_DELETED: string;
    let WORLDINFO_FORCE_ACTIVATE: string;
    let OPEN_CHARACTER_LIBRARY: string;
    let ONLINE_STATUS_CHANGED: string;
    let IMAGE_SWIPED: string;
    let CONNECTION_PROFILE_LOADED: string;
    let CONNECTION_PROFILE_CREATED: string;
    let CONNECTION_PROFILE_DELETED: string;
    let CONNECTION_PROFILE_UPDATED: string;
    let TOOL_CALLS_PERFORMED: string;
    let TOOL_CALLS_RENDERED: string;
}
export function eventSource(autoFireAfterEmit?: string[]): void;
export class eventSource {
    constructor(autoFireAfterEmit?: string[]);
    events: {};
    autoFireLastArgs: Map<any, any>;
    autoFireAfterEmit: Set<string>;
    on(event: string, listener: Function): void;
    makeLast(event: string, listener: Function): void;
    makeFirst(event: string, listener: Function): void;
    removeListener(event: string, listener: Function): void;
    emit(event: string, ...args: any[]): Promise<void>;
    emitAndWait(event: any, ...args: any[]): void;
    once(event: any, listener: any): void;
}
export const characterGroupOverlay: BulkEditOverlay;
export let mesForShowdownParse: any;
export let itemizedPrompts: any[];
export const systemUserName: "SillyTavern System";
export const neutralCharacterName: "Assistant";
export let name1: string;
export let name2: string;
export let chat: any[];
export let isChatSaving: boolean;
/** @type {import('./scripts/char-data.js').v1CharData[]} */
export let characters: import("./scripts/char-data.js").v1CharData[];
/**
 * Stringified index of a currently chosen entity in the characters array.
 * @type {string|undefined} Yes, we hate it as much as you do.
 */
export let this_chid: string | undefined;
export const default_avatar: "img/ai4.png";
export const system_avatar: "img/five.png";
export const comment_avatar: "img/quill.png";
export const default_user_avatar: "img/user-default.png";
export let CLIENT_VERSION: string;
export let chat_metadata: {};
/** @type {StreamingProcessor} */
export let streamingProcessor: StreamingProcessor;
export let abortStatusCheck: AbortController;
export let charDragDropHandler: any;
/** @type {debounce_timeout} The debounce timeout used for chat/settings save. debounce_timeout.long: 1.000 ms */
export const DEFAULT_SAVE_EDIT_TIMEOUT: debounce_timeout;
/** @type {debounce_timeout} The debounce timeout used for printing. debounce_timeout.quick: 100 ms */
export const DEFAULT_PRINT_TIMEOUT: debounce_timeout;
export const saveSettingsDebounced: Function;
export const saveCharacterDebounced: Function;
/**
 * Prints the character list in a debounced fashion without blocking, with a delay of 100 milliseconds.
 * Use this function instead of a direct `printCharacters()` whenever the reprinting of the character list is not the primary focus.
 *
 * The printing will also always reprint all filter options of the global list, to keep them up to date.
 */
export const printCharactersDebounced: Function;
/**
 * System message types
 */
export type system_message_types = string;
export namespace system_message_types {
    let HELP: string;
    let WELCOME: string;
    let EMPTY: string;
    let GENERIC: string;
    let NARRATOR: string;
    let COMMENT: string;
    let SLASH_COMMANDS: string;
    let FORMATTING: string;
    let HOTKEYS: string;
    let MACROS: string;
    let WELCOME_PROMPT: string;
    let ASSISTANT_NOTE: string;
}
/**
 * Extension prompt types
 */
export type extension_prompt_types = number;
export namespace extension_prompt_types {
    let NONE: number;
    let IN_PROMPT: number;
    let IN_CHAT: number;
    let BEFORE_PROMPT: number;
}
/**
 * Extension prompt roles
 */
export type extension_prompt_roles = number;
export namespace extension_prompt_roles {
    let SYSTEM: number;
    let USER: number;
    let ASSISTANT: number;
}
export const MAX_INJECTION_DEPTH: 10000;
export let system_messages: {};
export const talkativeness_default: 0.5;
export const depth_prompt_depth_default: 4;
export const depth_prompt_role_default: "system";
/**
 * The type of the right menu
 * @typedef {'characters' | 'character_edit' | 'create' | 'group_edit' | 'group_create' | '' } MenuType
 */
/**
 * The type of the right menu that is currently open
 * @type {MenuType}
 */
export let menu_type: MenuType;
export let selected_button: string;
export namespace create_save {
    export let name: string;
    export let description: string;
    export let creator_notes: string;
    export let post_history_instructions: string;
    export let character_version: string;
    export let system_prompt: string;
    export let tags: string;
    export let creator: string;
    export let personality: string;
    export let first_message: string;
    export let avatar: string;
    export let scenario: string;
    export let mes_example: string;
    export let world: string;
    export { talkativeness_default as talkativeness };
    export let alternate_greetings: any[];
    export let depth_prompt_prompt: string;
    export { depth_prompt_depth_default as depth_prompt_depth };
    export { depth_prompt_role_default as depth_prompt_role };
    export let extensions: {};
}
export const ANIMATION_DURATION_DEFAULT: 125;
export let animation_duration: number;
export let animation_easing: string;
export let online_status: string;
export let api_server: string;
export let is_send_press: boolean;
export let settings: any;
export let koboldai_settings: any;
export let koboldai_setting_names: any;
export let amount_gen: number;
export let max_context: number;
export let extension_prompts: {};
export let main_api: any;
export let novelai_settings: any;
export let novelai_setting_names: any;
export let token: any;
/** The tag of the active character. (NOT the id) */
export let active_character: string;
/** The tag of the active group. (Coincidentally also the id) */
export let active_group: string;
export const entitiesFilter: FilterHelper;
/**
 * @typedef {object} ConnectAPIMap
 * @property {string} selected - API name (e.g. "textgenerationwebui", "openai")
 * @property {string?} [button] - CSS selector for the API button
 * @property {string?} [type] - API type, mostly used by text completion. (e.g. "openrouter")
 * @property {string?} [source] - API source, mostly used by chat completion. (e.g. "openai")
 */
/**
 * @type {Record<string, ConnectAPIMap>}
 */
export const CONNECT_API_MAP: Record<string, ConnectAPIMap>;
export const UNIQUE_APIS: any[];
/**
 * - A character
 */
export type Character = object;
/**
 * - A group
 */
export type Group = object;
/**
 * - Object representing a display entity
 */
export type Entity = {
    /**
     * - The item
     */
    item: Character | Group | import("./scripts/tags.js").Tag | any;
    /**
     * - The id
     */
    id: string | number;
    /**
     * - The type of this entity (character, group, tag)
     */
    type: "character" | "group" | "tag";
    /**
     * - An optional list of entities relevant for this item
     */
    entities?: Entity[] | null;
    /**
     * - An optional number representing how many hidden entities this entity contains
     */
    hidden?: number | null;
    /**
     * - Specifies if the entity is useless (not relevant, but should still be displayed for consistency) and should be displayed greyed out
     */
    isUseless?: boolean | null;
};
/**
 * Returns the character card fields for the current character.
 */
export type CharacterCardFields = {
    /**
     * System prompt
     */
    system: string;
    /**
     * Message examples
     */
    mesExamples: string;
    /**
     * Description
     */
    description: string;
    /**
     * Personality
     */
    personality: string;
    /**
     * Persona
     */
    persona: string;
    /**
     * Scenario
     */
    scenario: string;
    /**
     * Jailbreak instructions
     */
    jailbreak: string;
    /**
     * Character version
     */
    version: string;
    /**
     * Character depth note
     */
    charDepthPrompt: string;
};
/**
 * Runs a generation using the current chat context.
 */
export type GenerateOptions = {
    automatic_trigger?: boolean;
    force_name2?: boolean;
    quiet_prompt?: string;
    quietToLoud?: boolean;
    skipWIAN?: boolean;
    force_chid?: number;
    signal?: AbortSignal;
    quietImage?: string;
    quietName?: string;
    depth?: number;
};
/**
 * Saves a resulting message to the chat.
 */
export type SaveReplyParams = {
    /**
     * Type of generation
     */
    type: string;
    /**
     * Generated message
     */
    getMessage: string;
    /**
     * If the message is from streaming
     */
    fromStreaming?: boolean;
    /**
     * Message tooltip
     */
    title?: string;
    /**
     * Extra swipes
     */
    swipes?: string[];
    /**
     * Message reasoning
     */
    reasoning?: string;
    /**
     * Link to an image
     */
    imageUrl?: string;
};
/**
 * Saves a resulting message to the chat.
 */
export type SaveReplyResult = {
    /**
     * Type of generation
     */
    type: string;
    /**
     * Generated message
     */
    getMessage: string;
};
/**
 * Saves the image to the message object.
 */
export type ParsedImage = {
    image?: string;
    title?: string;
    inline?: boolean;
};
/**
 * - Options for the popup.
 */
export type PopupOptions = {
    okButton?: string;
    rows?: number;
    wide?: boolean;
    wider?: boolean;
    large?: boolean;
    allowHorizontalScrolling?: boolean;
    allowVerticalScrolling?: boolean;
    cropAspect?: number;
};
/**
 * The type of the right menu
 */
export type MenuType = "characters" | "character_edit" | "create" | "group_edit" | "group_create" | "";
export type ConnectAPIMap = {
    /**
     * - API name (e.g. "textgenerationwebui", "openai")
     */
    selected: string;
    /**
     * - CSS selector for the API button
     */
    button?: string | null;
    /**
     * - API type, mostly used by text completion. (e.g. "openrouter")
     */
    type?: string | null;
    /**
     * - API source, mostly used by chat completion. (e.g. "openai")
     */
    source?: string | null;
};
import { user_avatar } from './scripts/personas.js';
import { setUserAvatar } from './scripts/personas.js';
import { getUserAvatars } from './scripts/personas.js';
import { getUserAvatar } from './scripts/personas.js';
import { nai_settings } from './scripts/nai-settings.js';
import { isOdd } from './scripts/utils.js';
import { countOccurrences } from './scripts/utils.js';
import { renderTemplate } from './scripts/templates.js';
import { BulkEditOverlay } from './scripts/BulkEditOverlay.js';
declare class StreamingProcessor {
    /**
     * Creates a new streaming processor.
     * @param {string} type Generation type
     * @param {boolean} forceName2 If true, force the use of name2
     * @param {Date} timeStarted Date when generation was started
     * @param {string} continueMessage Previous message if the type is 'continue'
     * @param {PromptReasoning} promptReasoning Prompt reasoning instance
     */
    constructor(type: string, forceName2: boolean, timeStarted: Date, continueMessage: string, promptReasoning: PromptReasoning);
    result: string;
    messageId: number;
    /** @type {HTMLElement} */
    messageDom: HTMLElement;
    /** @type {HTMLElement} */
    messageTextDom: HTMLElement;
    /** @type {HTMLElement} */
    messageTimerDom: HTMLElement;
    /** @type {HTMLElement} */
    messageTokenCounterDom: HTMLElement;
    /** @type {HTMLTextAreaElement} */
    sendTextarea: HTMLTextAreaElement;
    type: string;
    force_name2: boolean;
    isStopped: boolean;
    isFinished: boolean;
    generator: () => Generator<{
        text: string;
        swipes: string[];
        logprobs: import("./scripts/logprobs.js").TokenLogprobs;
        toolCalls: any[];
        state: any;
    }, void, void>;
    abortController: AbortController;
    firstMessageText: string;
    timeStarted: Date;
    /** @type {number?} */
    timeToFirstToken: number | null;
    createdAt: Date;
    continueMessage: string;
    swipes: any[];
    /** @type {import('./scripts/logprobs.js').TokenLogprobs[]} */
    messageLogprobs: import("./scripts/logprobs.js").TokenLogprobs[];
    toolCalls: any[];
    reasoningHandler: ReasoningHandler;
    /** @type {PromptReasoning} */
    promptReasoning: PromptReasoning;
    /** @type {string} */
    image: string;
    markUIGenStarted(): void;
    markUIGenStopped(): void;
    onStartStreaming(text: any): Promise<number>;
    onProgressStreaming(messageId: any, text: any, isFinal: any): Promise<void>;
    onFinishStreaming(messageId: any, text: any): Promise<void>;
    onErrorStreaming(): void;
    setFirstSwipe(messageId: any): void;
    onStopStreaming(): void;
    /**
     * @returns {Generator<{ text: string, swipes: string[], logprobs: import('./scripts/logprobs.js').TokenLogprobs, toolCalls: any[], state: any }, void, void>}
     */
    nullStreamingGeneration(): Generator<{
        text: string;
        swipes: string[];
        logprobs: import("./scripts/logprobs.js").TokenLogprobs;
        toolCalls: any[];
        state: any;
    }, void, void>;
    generate(): Promise<string>;
    stoppingStrings: string[];
    #private;
}
import { debounce_timeout } from './scripts/constants.js';
import { FilterHelper } from './scripts/filters.js';
import { ReasoningHandler } from './scripts/reasoning.js';
import { PromptReasoning } from './scripts/reasoning.js';
export { user_avatar, setUserAvatar, getUserAvatars, getUserAvatar, nai_settings, isOdd, countOccurrences, renderTemplate };
//# sourceMappingURL=script.d.ts.map