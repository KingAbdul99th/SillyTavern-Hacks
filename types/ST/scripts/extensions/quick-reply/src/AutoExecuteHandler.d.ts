export class AutoExecuteHandler {
    constructor(settings: QuickReplySettings);
    /** @type {QuickReplySettings} */ settings: QuickReplySettings;
    /** @type {Boolean[]}*/ preventAutoExecuteStack: boolean[];
    checkExecute(): boolean;
    performAutoExecute(qrList: QuickReply[]): Promise<void>;
    handleStartup(): Promise<void>;
    handleUser(): Promise<void>;
    handleAi(): Promise<void>;
    handleChatChanged(): Promise<void>;
    handleGroupMemberDraft(): Promise<void>;
    handleNewChat(): Promise<void>;
    /**
     * @param {any[]} entries Set of activated entries
     */
    handleWIActivation(entries: any[]): Promise<void>;
}
import { QuickReplySettings } from './QuickReplySettings.js';
import { QuickReply } from './QuickReply.js';
//# sourceMappingURL=AutoExecuteHandler.d.ts.map