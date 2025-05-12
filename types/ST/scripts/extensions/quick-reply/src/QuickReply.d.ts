export class QuickReply {
    /**
     * @param {{ id?: number; contextList?: any; }} props
     */
    static from(props: {
        id?: number;
        contextList?: any;
    }): QuickReply & {
        id?: number;
        contextList?: any;
    };
    /**@type {number}*/ id: number;
    /**@type {string}*/ icon: string;
    /**@type {string}*/ label: string;
    /**@type {boolean}*/ showLabel: boolean;
    /**@type {string}*/ title: string;
    /**@type {string}*/ message: string;
    /**@type {QuickReplyContextLink[]}*/ contextList: QuickReplyContextLink[];
    /**@type {boolean}*/ preventAutoExecute: boolean;
    /**@type {boolean}*/ isHidden: boolean;
    /**@type {boolean}*/ executeOnStartup: boolean;
    /**@type {boolean}*/ executeOnUser: boolean;
    /**@type {boolean}*/ executeOnAi: boolean;
    /**@type {boolean}*/ executeOnChatChange: boolean;
    /**@type {boolean}*/ executeOnGroupMemberDraft: boolean;
    /**@type {boolean}*/ executeOnNewChat: boolean;
    /**@type {string}*/ automationId: string;
    /**@type {function}*/ onExecute: Function;
    /** @type {(qr:QuickReply)=>AsyncGenerator<SlashCommandClosureResult|{closure:SlashCommandClosure, executor:SlashCommandExecutor|SlashCommandClosureResult}, SlashCommandClosureResult, boolean>} */ onDebug: (qr: QuickReply) => AsyncGenerator<SlashCommandClosureResult | {
        closure: SlashCommandClosure;
        executor: SlashCommandExecutor | SlashCommandClosureResult;
    }, SlashCommandClosureResult, boolean>;
    /**@type {function}*/ onDelete: Function;
    /**@type {function}*/ onUpdate: Function;
    /**@type {function}*/ onInsertBefore: Function;
    /**@type {function}*/ onTransfer: Function;
    /**@type {HTMLElement}*/ dom: HTMLElement;
    /**@type {HTMLElement}*/ domIcon: HTMLElement;
    /**@type {HTMLElement}*/ domLabel: HTMLElement;
    /**@type {HTMLElement}*/ settingsDom: HTMLElement;
    /**@type {HTMLElement}*/ settingsDomIcon: HTMLElement;
    /**@type {HTMLInputElement}*/ settingsDomLabel: HTMLInputElement;
    /**@type {HTMLTextAreaElement}*/ settingsDomMessage: HTMLTextAreaElement;
    /**@type {Popup}*/ editorPopup: Popup;
    /**@type {HTMLElement}*/ editorDom: HTMLElement;
    /**@type {HTMLTextAreaElement}*/ editorMessage: HTMLTextAreaElement;
    /**@type {HTMLTextAreaElement}*/ editorMessageLabel: HTMLTextAreaElement;
    /**@type {HTMLElement}*/ editorSyntax: HTMLElement;
    /**@type {HTMLElement}*/ editorExecuteBtn: HTMLElement;
    /**@type {HTMLElement}*/ editorExecuteBtnPause: HTMLElement;
    /**@type {HTMLElement}*/ editorExecuteBtnStop: HTMLElement;
    /**@type {HTMLElement}*/ editorExecuteProgress: HTMLElement;
    /**@type {HTMLElement}*/ editorExecuteErrors: HTMLElement;
    /**@type {HTMLElement}*/ editorExecuteResult: HTMLElement;
    /**@type {HTMLElement}*/ editorDebugState: HTMLElement;
    /**@type {Promise}*/ editorExecutePromise: Promise<any>;
    /**@type {boolean}*/ isExecuting: boolean;
    /**@type {SlashCommandAbortController}*/ abortController: SlashCommandAbortController;
    /**@type {SlashCommandDebugController}*/ debugController: SlashCommandDebugController;
    get hasContext(): boolean;
    unrender(): void;
    updateRender(): void;
    render(): HTMLElement;
    renderSettings(idx: any): HTMLElement;
    unrenderSettings(): void;
    showEditor(): Promise<void>;
    template: Element;
    getEditorPosition(start: any, end: any, message?: any): {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    clone: HTMLDivElement;
    executeFromEditor(): Promise<void>;
    updateEditorProgress(done: any, total: any): void;
    delete(): void;
    /**
     * @param {string} value
     */
    updateMessage(value: string): void;
    /**
     * @param {string} value
     */
    updateIcon(value: string): void;
    /**
     * @param {boolean} value
     */
    updateShowLabel(value: boolean): void;
    /**
     * @param {string} value
     */
    updateLabel(value: string): void;
    /**
     * @param {string} value
     */
    updateTitle(value: string): void;
    updateContext(): void;
    addContextLink(cl: any): void;
    removeContextLink(setName: any): void;
    clearContextLinks(): void;
    execute(args?: {}, isEditor?: boolean, isRun?: boolean, options?: {}): Promise<any>;
    toJSON(): {
        id: number;
        icon: string;
        showLabel: boolean;
        label: string;
        title: string;
        message: string;
        contextList: QuickReplyContextLink[];
        preventAutoExecute: boolean;
        isHidden: boolean;
        executeOnStartup: boolean;
        executeOnUser: boolean;
        executeOnAi: boolean;
        executeOnChatChange: boolean;
        executeOnGroupMemberDraft: boolean;
        executeOnNewChat: boolean;
        automationId: string;
    };
}
import { QuickReplyContextLink } from './QuickReplyContextLink.js';
import { SlashCommandClosureResult } from '../../../slash-commands/SlashCommandClosureResult.js';
import { SlashCommandClosure } from '../../../slash-commands/SlashCommandClosure.js';
import { SlashCommandExecutor } from '../../../slash-commands/SlashCommandExecutor.js';
import { Popup } from '../../../popup.js';
import { SlashCommandAbortController } from '../../../slash-commands/SlashCommandAbortController.js';
import { SlashCommandDebugController } from '../../../slash-commands/SlashCommandDebugController.js';
//# sourceMappingURL=QuickReply.d.ts.map