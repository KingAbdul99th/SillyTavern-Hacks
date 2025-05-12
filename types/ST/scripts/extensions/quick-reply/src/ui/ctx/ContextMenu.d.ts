export class ContextMenu {
    constructor(qr: QuickReply);
    /**@type {MenuItem[]}*/ itemList: MenuItem[];
    /**@type {Boolean}*/ isActive: boolean;
    /**@type {HTMLElement}*/ root: HTMLElement;
    /**@type {HTMLElement}*/ menu: HTMLElement;
    /**
     * @param {QuickReply} qr
     * @param {String} chainedMessage
     * @param {QuickReplySet[]} hierarchy
     * @param {String[]} labelHierarchy
     */
    build(qr: QuickReply, chainedMessage?: string, hierarchy?: QuickReplySet[], labelHierarchy?: string[]): {
        icon: string;
        showLabel: boolean;
        label: string;
        title: string;
        message: string;
        children: any[];
    };
    render(): HTMLElement;
    show({ clientX, clientY }: {
        clientX: any;
        clientY: any;
    }): void;
    hide(): void;
    toggle(evt: PointerEvent): void;
}
import { MenuItem } from './MenuItem.js';
import { QuickReply } from '../../QuickReply.js';
import { QuickReplySet } from '../../QuickReplySet.js';
//# sourceMappingURL=ContextMenu.d.ts.map