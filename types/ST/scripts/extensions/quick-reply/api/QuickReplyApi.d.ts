export class QuickReplyApi {
    constructor(settings: QuickReplySettings, settingsUi: SettingsUi);
    /** @type {QuickReplySettings} */ settings: QuickReplySettings;
    /** @type {SettingsUi} */ settingsUi: SettingsUi;
    /**
     * @param {QuickReply} qr
     * @returns {QuickReplySet}
     */
    getSetByQr(qr: QuickReply): QuickReplySet;
    /**
     * Finds and returns an existing Quick Reply Set by its name.
     *
     * @param {string} name name of the quick reply set
     * @returns the quick reply set, or undefined if not found
     */
    getSetByName(name: string): QuickReplySet;
    /**
     * Finds and returns an existing Quick Reply by its set's name and its label.
     *
     * @param {string} setName name of the quick reply set
     * @param {string|number} label label or numeric ID of the quick reply
     * @returns the quick reply, or undefined if not found
     */
    getQrByLabel(setName: string, label: string | number): QuickReply;
    /**
     * Executes a quick reply by its index and returns the result.
     *
     * @param {Number} idx the index (zero-based) of the quick reply to execute
     * @returns the return value of the quick reply, or undefined if not found
     */
    executeQuickReplyByIndex(idx: number): Promise<any>;
    /**
     * Executes an existing quick reply.
     *
     * @param {string} setName name of the existing quick reply set
     * @param {string|number} label label of the existing quick reply (text on the button) or its numeric ID
     * @param {object} [args] optional arguments
     * @param {import('../../../slash-commands.js').ExecuteSlashCommandsOptions} [options] optional execution options
     */
    executeQuickReply(setName: string, label: string | number, args?: object, options?: import("../../../slash-commands.js").ExecuteSlashCommandsOptions): Promise<any>;
    /**
     * Adds or removes a quick reply set to the list of globally active quick reply sets.
     *
     * @param {string} name the name of the set
     * @param {boolean} isVisible whether to show the set's buttons or not
     */
    toggleGlobalSet(name: string, isVisible?: boolean): void;
    /**
     * Adds a quick reply set to the list of globally active quick reply sets.
     *
     * @param {string} name the name of the set
     * @param {boolean} isVisible whether to show the set's buttons or not
     */
    addGlobalSet(name: string, isVisible?: boolean): void;
    /**
     * Removes a quick reply set from the list of globally active quick reply sets.
     *
     * @param {string} name the name of the set
     */
    removeGlobalSet(name: string): void;
    /**
     * Adds or removes a quick reply set to the list of the current chat's active quick reply sets.
     *
     * @param {string} name the name of the set
     * @param {boolean} isVisible whether to show the set's buttons or not
     */
    toggleChatSet(name: string, isVisible?: boolean): void;
    /**
     * Adds a quick reply set to the list of the current chat's active quick reply sets.
     *
     * @param {string} name the name of the set
     * @param {boolean} isVisible whether to show the set's buttons or not
     */
    addChatSet(name: string, isVisible?: boolean): void;
    /**
     * Removes a quick reply set from the list of the current chat's active quick reply sets.
     *
     * @param {string} name the name of the set
     */
    removeChatSet(name: string): void;
    /**
     * Creates a new quick reply in an existing quick reply set.
     *
     * @param {string} setName name of the quick reply set to insert the new quick reply into
     * @param {string} label label for the new quick reply (text on the button)
     * @param {object} [props]
     * @param {string} [props.icon] the icon to show on the QR button
     * @param {boolean} [props.showLabel] whether to show the label even when an icon is assigned
     * @param {string} [props.message] the message to be sent or slash command to be executed by the new quick reply
     * @param {string} [props.title] the title / tooltip to be shown on the quick reply button
     * @param {boolean} [props.isHidden] whether to hide or show the button
     * @param {boolean} [props.executeOnStartup] whether to execute the quick reply when SillyTavern starts
     * @param {boolean} [props.executeOnUser] whether to execute the quick reply after a user has sent a message
     * @param {boolean} [props.executeOnAi] whether to execute the quick reply after the AI has sent a message
     * @param {boolean} [props.executeOnChatChange] whether to execute the quick reply when a new chat is loaded
     * @param {boolean} [props.executeOnGroupMemberDraft] whether to execute the quick reply when a group member is selected
     * @param {boolean} [props.executeOnNewChat] whether to execute the quick reply when a new chat is created
     * @param {string} [props.automationId] when not empty, the quick reply will be executed when the WI with the given automation ID is activated
     * @returns {QuickReply} the new quick reply
     */
    createQuickReply(setName: string, label: string, { icon, showLabel, message, title, isHidden, executeOnStartup, executeOnUser, executeOnAi, executeOnChatChange, executeOnGroupMemberDraft, executeOnNewChat, automationId, }?: {
        icon?: string;
        showLabel?: boolean;
        message?: string;
        title?: string;
        isHidden?: boolean;
        executeOnStartup?: boolean;
        executeOnUser?: boolean;
        executeOnAi?: boolean;
        executeOnChatChange?: boolean;
        executeOnGroupMemberDraft?: boolean;
        executeOnNewChat?: boolean;
        automationId?: string;
    }): QuickReply;
    /**
     * Updates an existing quick reply.
     *
     * @param {string} setName name of the existing quick reply set
     * @param {string|number} label label of the existing quick reply (text on the button) or its numeric ID
     * @param {object} [props]
     * @param {string} [props.icon] the icon to show on the QR button
     * @param {boolean} [props.showLabel] whether to show the label even when an icon is assigned
     * @param {string} [props.newLabel] new label for quick reply (text on the button)
     * @param {string} [props.message] the message to be sent or slash command to be executed by the quick reply
     * @param {string} [props.title] the title / tooltip to be shown on the quick reply button
     * @param {boolean} [props.isHidden] whether to hide or show the button
     * @param {boolean} [props.executeOnStartup] whether to execute the quick reply when SillyTavern starts
     * @param {boolean} [props.executeOnUser] whether to execute the quick reply after a user has sent a message
     * @param {boolean} [props.executeOnAi] whether to execute the quick reply after the AI has sent a message
     * @param {boolean} [props.executeOnChatChange] whether to execute the quick reply when a new chat is loaded
     * @param {boolean} [props.executeOnGroupMemberDraft] whether to execute the quick reply when a group member is selected
     * @param {boolean} [props.executeOnNewChat] whether to execute the quick reply when a new chat is created
     * @param {string} [props.automationId] when not empty, the quick reply will be executed when the WI with the given automation ID is activated
     * @returns {QuickReply} the altered quick reply
     */
    updateQuickReply(setName: string, label: string | number, { icon, showLabel, newLabel, message, title, isHidden, executeOnStartup, executeOnUser, executeOnAi, executeOnChatChange, executeOnGroupMemberDraft, executeOnNewChat, automationId, }?: {
        icon?: string;
        showLabel?: boolean;
        newLabel?: string;
        message?: string;
        title?: string;
        isHidden?: boolean;
        executeOnStartup?: boolean;
        executeOnUser?: boolean;
        executeOnAi?: boolean;
        executeOnChatChange?: boolean;
        executeOnGroupMemberDraft?: boolean;
        executeOnNewChat?: boolean;
        automationId?: string;
    }): QuickReply;
    /**
     * Deletes an existing quick reply.
     *
     * @param {string} setName name of the existing quick reply set
     * @param {string|number} label label of the existing quick reply (text on the button) or its numeric ID
     */
    deleteQuickReply(setName: string, label: string | number): void;
    /**
     * Adds an existing quick reply set as a context menu to an existing quick reply.
     *
     * @param {string} setName name of the existing quick reply set containing the quick reply
     * @param {string|number} label label of the existing quick reply or its numeric ID
     * @param {string} contextSetName name of the existing quick reply set to be used as a context menu
     * @param {boolean} isChained whether or not to chain the context menu quick replies
     */
    createContextItem(setName: string, label: string | number, contextSetName: string, isChained?: boolean): void;
    /**
     * Removes a quick reply set from a quick reply's context menu.
     *
     * @param {string} setName name of the existing quick reply set containing the quick reply
     * @param {string|number} label label of the existing quick reply or its numeric ID
     * @param {string} contextSetName name of the existing quick reply set to be used as a context menu
     */
    deleteContextItem(setName: string, label: string | number, contextSetName: string): void;
    /**
     * Removes all entries from a quick reply's context menu.
     *
     * @param {string} setName name of the existing quick reply set containing the quick reply
     * @param {string|number} label label of the existing quick reply or its numeric ID
     */
    clearContextMenu(setName: string, label: string | number): void;
    /**
     * Create a new quick reply set.
     *
     * @param {string} name name of the new quick reply set
     * @param {object} [props]
     * @param {boolean} [props.disableSend] whether or not to send the quick replies or put the message or slash command into the char input box
     * @param {boolean} [props.placeBeforeInput] whether or not to place the quick reply contents before the existing user input
     * @param {boolean} [props.injectInput] whether or not to automatically inject the user input at the end of the quick reply
     * @returns {Promise<QuickReplySet>} the new quick reply set
     */
    createSet(name: string, { disableSend, placeBeforeInput, injectInput, }?: {
        disableSend?: boolean;
        placeBeforeInput?: boolean;
        injectInput?: boolean;
    }): Promise<QuickReplySet>;
    /**
     * Update an existing quick reply set.
     *
     * @param {string} name name of the existing quick reply set
     * @param {object} [props]
     * @param {boolean} [props.disableSend] whether or not to send the quick replies or put the message or slash command into the char input box
     * @param {boolean} [props.placeBeforeInput] whether or not to place the quick reply contents before the existing user input
     * @param {boolean} [props.injectInput] whether or not to automatically inject the user input at the end of the quick reply
     * @returns {Promise<QuickReplySet>} the altered quick reply set
     */
    updateSet(name: string, { disableSend, placeBeforeInput, injectInput, }?: {
        disableSend?: boolean;
        placeBeforeInput?: boolean;
        injectInput?: boolean;
    }): Promise<QuickReplySet>;
    /**
     * Delete an existing quick reply set.
     *
     * @param {string} name name of the existing quick reply set
     */
    deleteSet(name: string): Promise<void>;
    /**
     * Gets a list of all quick reply sets.
     *
     * @returns array with the names of all quick reply sets
     */
    listSets(): string[];
    /**
     * Gets a list of all globally active quick reply sets.
     *
     * @returns array with the names of all quick reply sets
     */
    listGlobalSets(): string[];
    /**
     * Gets a list of all quick reply sets activated by the current chat.
     *
     * @returns array with the names of all quick reply sets
     */
    listChatSets(): string[];
    /**
     * Gets a list of all quick replies in the quick reply set.
     *
     * @param {string} setName name of the existing quick reply set
     * @returns array with the labels of this set's quick replies
     */
    listQuickReplies(setName: string): string[];
    /**
     * Gets a list of all Automation IDs used by quick replies.
     *
     * @returns {String[]} array with all automation IDs used by quick replies
     */
    listAutomationIds(): string[];
}
import { QuickReplySettings } from '../src/QuickReplySettings.js';
import { SettingsUi } from '../src/ui/SettingsUi.js';
import { QuickReply } from '../src/QuickReply.js';
import { QuickReplySet } from '../src/QuickReplySet.js';
//# sourceMappingURL=QuickReplyApi.d.ts.map