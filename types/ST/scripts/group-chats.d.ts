export function getGroupChat(groupId: any, reload?: boolean): Promise<void>;
/**
 * Retrieves the members of a group
 *
 * @param {string} [groupId=selected_group] - The ID of the group to retrieve members from. Defaults to the currently selected group.
 * @returns {import('../script.js').Character[]} An array of character objects representing the members of the group. If the group is not found, an empty array is returned.
 */
export function getGroupMembers(groupId?: string): import("../script.js").Character[];
/**
 * Retrieves the member names of a group. If the group is not selected, an empty array is returned.
 * @returns {string[]} An array of character names representing the members of the group.
 */
export function getGroupNames(): string[];
/**
 * Finds the character ID for a group member.
 * @param {number|string} arg 0-based member index or character name
 * @param {Boolean} full Whether to return a key-value object containing extra data
 * @returns {number|Object} 0-based character ID or key-value object if full is true
 */
export function findGroupMemberId(arg: number | string, full?: boolean): number | any;
/**
 * Gets depth prompts for group members.
 * @param {string} groupId Group ID
 * @param {number} characterId Current Character ID
 * @returns {{depth: number, text: string, role: string}[]} Array of depth prompts
 */
export function getGroupDepthPrompts(groupId: string, characterId: number): {
    depth: number;
    text: string;
    role: string;
}[];
/**
 * Combines group members cards into a single string. Only for groups with generation mode set to APPEND or APPEND_DISABLED.
 * @param {string} groupId Group ID
 * @param {number} characterId Current Character ID
 * @returns {{description: string, personality: string, scenario: string, mesExamples: string}} Group character cards combined
 */
export function getGroupCharacterCards(groupId: string, characterId: number): {
    description: string;
    personality: string;
    scenario: string;
    mesExamples: string;
};
export function renameGroupMember(oldAvatar: any, newAvatar: any, newName: any): Promise<void>;
export function getGroupBlock(group: any): JQuery<HTMLElement>;
export function editGroup(id: any, immediately: any, reload?: boolean): Promise<void>;
/**
 * Unshallows all definitions of group members.
 * @param {string} groupId Id of the group
 * @returns {Promise<void>} Promise that resolves when all group members are unshallowed
 */
export function unshallowGroupMembers(groupId: string): Promise<void>;
export function openGroupById(groupId: any): Promise<boolean>;
export function createNewGroupChat(groupId: any): Promise<void>;
export function getGroupPastChats(groupId: any): Promise<{
    file_name: any;
    mes: any;
    last_mes: any;
    file_size: string;
    chat_items: any;
}[]>;
export function openGroupChat(groupId: any, chatId: any): Promise<void>;
export function renameGroupChat(groupId: any, oldChatId: any, newChatId: any): Promise<void>;
export function deleteGroupChat(groupId: any, chatId: any): Promise<void>;
/**
 * Imports a group chat from a file and adds it to the group.
 * @param {FormData} formData Form data to send to the server
 * @param {EventTarget} eventTarget Element that triggered the import
 */
export function importGroupChat(formData: FormData, eventTarget: EventTarget): Promise<void>;
export function saveGroupBookmarkChat(groupId: any, name: any, metadata: any, mesId: any): Promise<void>;
export namespace group_activation_strategy {
    let NATURAL: number;
    let LIST: number;
    let MANUAL: number;
    let POOLED: number;
}
export namespace group_generation_mode {
    let SWAP: number;
    let APPEND: number;
    let APPEND_DISABLED: number;
}
export const groupCandidatesFilter: FilterHelper;
export let selected_group: any;
export let openGroupId: any;
export let is_group_automode_enabled: boolean;
export let hideMutedSprites: boolean;
export let is_group_generating: boolean;
export let group_generation_id: any;
export let groups: any[];
export function saveGroupChat(groupId: any, shouldSaveGroup: any): Promise<void>;
export function generateGroupWrapper(by_auto_mode: any, type?: any, params?: {}): Promise<any>;
export function deleteGroup(id: any): Promise<void>;
export function getGroupAvatar(group: any): JQuery<HTMLElement>;
export function getGroups(): Promise<void>;
export function regenerateGroup(): Promise<void>;
export function resetSelectedGroup(): void;
export function select_group_chats(groupId: any, skipAnimation: any): void;
export function getGroupChatNames(groupId: any): any[];
import { FilterHelper } from './filters.js';
//# sourceMappingURL=group-chats.d.ts.map