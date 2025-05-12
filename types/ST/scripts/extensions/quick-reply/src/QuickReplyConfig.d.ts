export class QuickReplyConfig {
    static from(props: any): any;
    /**@type {QuickReplySetLink[]}*/ setList: QuickReplySetLink[];
    /**@type {Boolean}*/ isGlobal: boolean;
    /**@type {Function}*/ onUpdate: Function;
    /**@type {Function}*/ onRequestEditSet: Function;
    /**@type {HTMLElement}*/ dom: HTMLElement;
    /**@type {HTMLElement}*/ setListDom: HTMLElement;
    init(): void;
    hasSet(qrs: any): boolean;
    addSet(qrs: any, isVisible?: boolean): void;
    removeSet(qrs: any): void;
    renderSettingsInto(root: HTMLElement): void;
    updateSetListDom(): void;
    onSetListSort(): void;
    /**
     * @param {QuickReplySetLink} qrl
     */
    hookQuickReplyLink(qrl: QuickReplySetLink): void;
    deleteQuickReplyLink(qrl: any): void;
    update(): void;
    requestEditSet(qrs: any): void;
    toJSON(): {
        setList: QuickReplySetLink[];
    };
}
import { QuickReplySetLink } from './QuickReplySetLink.js';
//# sourceMappingURL=QuickReplyConfig.d.ts.map