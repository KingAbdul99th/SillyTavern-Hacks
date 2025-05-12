export class SlashCommandHandler {
    constructor(api: QuickReplyApi);
    /** @type {QuickReplyApi} */ api: QuickReplyApi;
    init(): void;
    getSetByName(name: any): QuickReplySet;
    getQrByLabel(setName: any, label: any): QuickReply;
    executeQuickReplyByIndex(idx: any): Promise<any>;
    toggleGlobalSet(name: any, args?: {}): void;
    addGlobalSet(name: any, args?: {}): void;
    removeGlobalSet(name: any): void;
    toggleChatSet(name: any, args?: {}): void;
    addChatSet(name: any, args?: {}): void;
    removeChatSet(name: any): void;
    createQuickReply(args: any, message: any): void;
    getQuickReply(args: any): string;
    updateQuickReply(args: any, message: any): void;
    deleteQuickReply(args: any, label: any): void;
    createContextItem(args: any, name: any): void;
    deleteContextItem(args: any, name: any): void;
    clearContextMenu(args: any, label: any): void;
    createSet(name: any, args: any): Promise<void>;
    updateSet(name: any, args: any): Promise<void>;
    deleteSet(name: any): Promise<void>;
    listSets(source: any): string[];
    listQuickReplies(name: any): string[];
}
import { QuickReplyApi } from '../api/QuickReplyApi.js';
import { QuickReplySet } from './QuickReplySet.js';
import { QuickReply } from './QuickReply.js';
//# sourceMappingURL=SlashCommandHandler.d.ts.map