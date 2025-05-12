/**
 * Checks if the Persona Management panel is currently open
 * @returns {boolean}
 */
export function isPersonaPanelOpen(): boolean;
/**
 * Returns the URL of the avatar for the given user avatar Id.
 * @param {string} avatarImg User avatar Id
 * @returns {string} User avatar URL
 */
export function getUserAvatar(avatarImg: string): string;
export function initUserAvatar(avatar: any): void;
/**
 * Sets a user avatar file
 * @param {string} imgfile Link to an image file
 * @param {object} [options] Optional settings
 * @param {boolean} [options.toastPersonaNameChange=true] Whether to show a toast when the persona name is changed
 * @param {boolean} [options.navigateToCurrent=false] Whether to navigate to the current persona after setting the avatar
 */
export function setUserAvatar(imgfile: string, { toastPersonaNameChange, navigateToCurrent }?: {
    toastPersonaNameChange?: boolean;
    navigateToCurrent?: boolean;
}): void;
/**
 * Gets a list of user avatars.
 * @param {boolean} doRender Whether to render the list
 * @param {string} openPageAt Item to be opened at
 * @returns {Promise<string[]>} List of avatar file names
 */
export function getUserAvatars(doRender?: boolean, openPageAt?: string): Promise<string[]>;
/**
 * Prompts the user to create a persona for the uploaded avatar.
 * @param {string} avatarId User avatar id
 * @returns {Promise} Promise that resolves when the persona is set
 */
export function createPersona(avatarId: string): Promise<any>;
/**
 * Initializes a persona for the given avatar id.
 * @param {string} avatarId User avatar id
 * @param {string} personaName Name for the persona
 * @param {string} personaDescription Optional description for the persona
 * @returns {void}
 */
export function initPersona(avatarId: string, personaName: string, personaDescription: string): void;
/**
 * Converts a character given character (either by character id or the current character) to a persona.
 *
 * If a persona with the same name already exists, the user is prompted to confirm whether or not to overwrite it.
 * If the character description contains {{char}} or {{user}} macros, the user is prompted to confirm whether or not to swap them for persona macros.
 *
 * The function creates a new persona with the same name as the character, and sets the persona description to the character description with the macros swapped.
 * The function also saves the settings and refreshes the persona selector.
 *
 * @param {number} [characterId] - The ID of the character to convert to a persona. Defaults to the current character ID.
 * @returns {Promise<boolean>} A promise that resolves to true if the character was converted, false otherwise.
 */
export function convertCharacterToPersona(characterId?: number): Promise<boolean>;
/**
 * Updates the UI for the Persona Management page with the current persona values
 */
export function setPersonaDescription(): void;
/**
 * Builds a list of persona avatars and populates the given block element with them.
 *
 * @param {HTMLElement} block - The HTML element where the avatar list will be rendered
 * @param {string[]} personas - An array of persona identifiers
 * @param {Object} [options] - Optional settings for building the avatar list
 * @param {boolean} [options.empty=true] - Whether to clear the block element before adding avatars
 * @param {boolean} [options.interactable=false] - Whether the avatars should be interactable
 * @param {boolean} [options.highlightFavs=true] - Whether to highlight favorite avatars
 */
export function buildPersonaAvatarList(block: HTMLElement, personas: string[], { empty, interactable, highlightFavs }?: {
    empty?: boolean;
    interactable?: boolean;
    highlightFavs?: boolean;
}): void;
/**
 * Displays avatar connections for the current persona.
 * Converts connections to entities and populates the avatar list. Shows a message if no connections are found.
 */
export function updatePersonaConnectionsAvatarList(): void;
/**
 * Displays a popup for persona selection and returns the selected persona.
 *
 * @param {string} title - The title to display in the popup
 * @param {string} text - The text to display in the popup
 * @param {string[]} personas - An array of persona ids to display for selection
 * @param {Object} [options] - Optional settings for the popup
 * @param {string} [options.okButton='None'] - The label for the OK button
 * @param {(element: HTMLElement, ev: MouseEvent) => any} [options.shiftClickHandler] - A function to handle shift-click
 * @param {boolean|string[]} [options.highlightPersonas=false] - Whether to highlight personas - either by providing a list of persona keys, or true to highlight all present in current chat
 * @param {PersonaConnection} [options.targetedChar] - The targeted character or gorup for this persona selection
 * @returns {Promise<string?>} - A promise that resolves to the selected persona id or null if no selection was made
 */
export function askForPersonaSelection(title: string, text: string, personas: string[], { okButton, shiftClickHandler, highlightPersonas, targetedChar }?: {
    okButton?: string;
    shiftClickHandler?: (element: HTMLElement, ev: MouseEvent) => any;
    highlightPersonas?: boolean | string[];
    targetedChar?: PersonaConnection;
}): Promise<string | null>;
/**
 * Automatically selects a persona based on the given name if a matching persona exists.
 * @param {string} name - The name to search for
 * @returns {boolean} True if a matching persona was found and selected, false otherwise
 */
export function autoSelectPersona(name: string): boolean;
/**
 * Checks if a connection is locked for the current character or group edit menu
 * @param {PersonaConnection} connection - Connection to check
 * @returns {boolean} Whether the connection is locked
 */
export function isPersonaConnectionLocked(connection: PersonaConnection): boolean;
/**
 * Checks if the persona is locked
 * @param {PersonaLockType} type - Lock type
 * @returns {boolean} Whether the persona is locked
 */
export function isPersonaLocked(type?: PersonaLockType): boolean;
/**
 * Locks or unlocks the persona
 * @param {boolean} state Desired lock state
 * @param {PersonaLockType} type - Lock type
 * @returns {Promise<void>}
 */
export function setPersonaLockState(state: boolean, type?: PersonaLockType): Promise<void>;
/**
 * Toggle the persona lock state
 * @param {PersonaLockType} type - Lock type
 * @returns {Promise<boolean>} - Whether the persona was locked
 */
export function togglePersonaLock(type?: PersonaLockType): Promise<boolean>;
/**
 * Returns an array of persona keys that are connected to the given character key.
 * If the character key is not provided, it defaults to the currently selected group or character.
 * @param {string} [characterKey] - The character key to query
 * @returns {string[]} - An array of persona keys that are connected to the given character key
 */
export function getConnectedPersonas(characterKey?: string): string[];
/**
 * Shows a popup with all personas connected to the currently selected character or group.
 * In the popup, the user can select a persona to load for the current character or group, or shift-click to remove the connection.
 * @return {Promise<void>}
 */
export function showCharConnections(): Promise<void>;
/**
 * Retrieves the current connection object based on whether the current chat is with a char or a group.
 *
 * @returns {PersonaConnection} An object representing the current connection
 */
export function getCurrentConnectionObj(): PersonaConnection;
/**
 * Retriggers the first message to reload it from the char definition.
 *
 * Only works if only the first message is present, and not in group mode.
 */
export function retriggerFirstMessageOnEmptyChat(): void;
/**
 * Initializes the persona management and all its functionality.
 * This is called during the initialization of the page.
 */
export function initPersonas(): Promise<void>;
/** @type {string} The currently selected persona (identified by its avatar) */
export let user_avatar: string;
/** @type {FilterHelper} Filter helper for the persona list */
export const personasFilter: FilterHelper;
export type PersonaLockInfo = {
    /**
     * - Whether the selected persona is temporary based on current locks.
     */
    isTemporary: boolean;
    /**
     * - True if the chat persona is set and differs from the user avatar.
     */
    hasDifferentChatLock: boolean;
    /**
     * - True if the default persona is set and differs from the user avatar.
     */
    hasDifferentDefaultLock: boolean;
    /**
     * - Detailed information about the current, chat, and default personas.
     */
    info: string;
};
/**
 * A connection between a character and a character or group entity
 */
export type PersonaConnection = {
    /**
     * - Type of connection
     */
    type: "character" | "group";
    /**
     * - ID of the connection (character key (avatar url), group id)
     */
    id: string;
};
/**
 * Type of the persona lock
 */
export type PersonaLockType = "chat" | "character" | "default";
export type PersonaState = {
    /**
     * - The avatar id of the persona
     */
    avatarId: string;
    /**
     * - Whether this persona is the default one for all new chats
     */
    default: boolean;
    /**
     * - An object containing the lock states
     */
    locked: {
        chat: boolean;
        character: boolean;
    };
};
import { FilterHelper } from './filters.js';
//# sourceMappingURL=personas.d.ts.map