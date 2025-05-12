/**
 * @typedef {import('./MenuItem.js').MenuItem} MenuItem
 */
export class SubMenu {
    constructor(items: MenuItem[]);
    /**@type {MenuItem[]}*/ itemList: MenuItem[];
    /**@type {Boolean}*/ isActive: boolean;
    /**@type {HTMLElement}*/ root: HTMLElement;
    render(): HTMLElement;
    show(parent: HTMLElement): void;
    hide(): void;
    toggle(parent: HTMLElement): void;
}
export type MenuItem = import("./MenuItem.js").MenuItem;
//# sourceMappingURL=SubMenu.d.ts.map