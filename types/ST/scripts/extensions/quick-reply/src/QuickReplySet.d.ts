export class QuickReplySet {
    /**@type {QuickReplySet[]}*/ static list: QuickReplySet[];
    static from(props: any): any;
    /**
     * @param {string} name - name of the QuickReplySet
     */
    static get(name: string): QuickReplySet;
    /**@type {string}*/ name: string;
    /**@type {boolean}*/ disableSend: boolean;
    /**@type {boolean}*/ placeBeforeInput: boolean;
    /**@type {boolean}*/ injectInput: boolean;
    /**@type {string}*/ color: string;
    /**@type {boolean}*/ onlyBorderColor: boolean;
    /**@type {QuickReply[]}*/ qrList: QuickReply[];
    /**@type {number}*/ idIndex: number;
    /**@type {boolean}*/ isDeleted: boolean;
    /**@type {function}*/ save: Function;
    /**@type {HTMLElement}*/ dom: HTMLElement;
    /**@type {HTMLElement}*/ settingsDom: HTMLElement;
    init(): void;
    unrender(): void;
    render(): HTMLElement;
    rerender(): void;
    updateColor(): void;
    renderSettings(): HTMLElement;
    /**
     *
     * @param {QuickReply} qr
     * @param {number} idx
     */
    renderSettingsItem(qr: QuickReply, idx: number): void;
    /**
     *
     * @param {QuickReply} qr
     */
    debug(qr: QuickReply): Promise<string>;
    /**
     *
     * @param {QuickReply} qr The QR to execute.
     * @param {object} options
     * @param {string} [options.message] (null) altered message to be used
     * @param {boolean} [options.isAutoExecute] (false) whether the execution is triggered by auto execute
     * @param {boolean} [options.isEditor] (false) whether the execution is triggered by the QR editor
     * @param {boolean} [options.isRun] (false) whether the execution is triggered by /run or /: (window.executeQuickReplyByName)
     * @param {SlashCommandScope} [options.scope] (null) scope to be used when running the command
     * @param {import('../../../slash-commands.js').ExecuteSlashCommandsOptions} [options.executionOptions] ({}) further execution options
     * @returns
     */
    executeWithOptions(qr: QuickReply, options?: {
        message?: string;
        isAutoExecute?: boolean;
        isEditor?: boolean;
        isRun?: boolean;
        scope?: SlashCommandScope;
        executionOptions?: import("../../../slash-commands.js").ExecuteSlashCommandsOptions;
    }): Promise<string>;
    /**
     * @param {QuickReply} qr
     * @param {string} [message] - optional altered message to be used
     * @param {SlashCommandScope} [scope] - optional scope to be used when running the command
     */
    execute(qr: QuickReply, message?: string, isAutoExecute?: boolean, scope?: SlashCommandScope): Promise<string>;
    addQuickReply(data?: {}): QuickReply & {
        id?: number;
        contextList?: any;
    };
    addQuickReplyFromText(qrJson: any): QuickReply & {
        id?: number;
        contextList?: any;
    };
    /**
     *
     * @param {QuickReply} qr
     */
    hookQuickReply(qr: QuickReply): void;
    removeQuickReply(qr: any): void;
    toJSON(): {
        version: number;
        name: string;
        disableSend: boolean;
        placeBeforeInput: boolean;
        injectInput: boolean;
        color: string;
        onlyBorderColor: boolean;
        qrList: QuickReply[];
        idIndex: number;
    };
    performSave(): Promise<void>;
    delete(): Promise<void>;
}
import { QuickReply } from './QuickReply.js';
import { SlashCommandScope } from '../../../slash-commands/SlashCommandScope.js';
//# sourceMappingURL=QuickReplySet.d.ts.map