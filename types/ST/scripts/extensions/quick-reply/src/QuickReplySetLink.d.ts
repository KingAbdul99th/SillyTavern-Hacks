export class QuickReplySetLink {
    static from(props: any): QuickReplySetLink;
    /**@type {QuickReplySet}*/ set: QuickReplySet;
    /**@type {Boolean}*/ isVisible: boolean;
    /**@type {Number}*/ index: number;
    /**@type {Function}*/ onUpdate: Function;
    /**@type {Function}*/ onRequestEditSet: Function;
    /**@type {Function}*/ onDelete: Function;
    /**@type {HTMLElement}*/ settingsDom: HTMLElement;
    renderSettings(idx: any): HTMLElement;
    unrenderSettings(): void;
    update(): void;
    requestEditSet(): void;
    delete(): void;
    toJSON(): {
        set: string;
        isVisible: boolean;
    };
}
import { QuickReplySet } from './QuickReplySet.js';
//# sourceMappingURL=QuickReplySetLink.d.ts.map