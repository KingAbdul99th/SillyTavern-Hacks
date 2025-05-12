export class SlashCommandBrowser {
    /**@type {SlashCommand[]}*/ cmdList: SlashCommand[];
    /**@type {HTMLElement}*/ dom: HTMLElement;
    /**@type {HTMLElement}*/ search: HTMLElement;
    /**@type {HTMLElement}*/ details: HTMLElement;
    /**@type {Object.<string,HTMLElement>}*/ itemMap: {
        [x: string]: HTMLElement;
    };
    /**@type {MutationObserver}*/ mo: MutationObserver;
    renderInto(parent: any): HTMLElement;
    handleKeyDown(evt: any): void;
}
//# sourceMappingURL=SlashCommandBrowser.d.ts.map