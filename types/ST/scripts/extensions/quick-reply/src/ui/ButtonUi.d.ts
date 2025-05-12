export class ButtonUi {
    constructor(settings: QuickReplySettings);
    /** @type {QuickReplySettings} */ settings: QuickReplySettings;
    /**@type {HTMLElement}*/ dom: HTMLElement;
    /**@type {HTMLElement}*/ popoutDom: HTMLElement;
    render(): HTMLElement;
    unrender(): void;
    show(): void;
    hide(): void;
    refresh(): void;
    renderBar(): HTMLElement;
    renderPopout(): HTMLElement;
}
import { QuickReplySettings } from '../QuickReplySettings.js';
//# sourceMappingURL=ButtonUi.d.ts.map