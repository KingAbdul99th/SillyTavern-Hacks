export class MenuItem {
    /**
     *
     * @param {?string} icon
     * @param {?boolean} showLabel
     * @param {string} label
     * @param {?string} title Tooltip
     * @param {object} value
     * @param {function} callback
     * @param {MenuItem[]} children
     */
    constructor(icon: string | null, showLabel: boolean | null, label: string, title: string | null, value: object, callback: Function, children?: MenuItem[]);
    /**@type {string}*/ icon: string;
    /**@type {boolean}*/ showLabel: boolean;
    /**@type {string}*/ label: string;
    /**@type {string}*/ title: string;
    /**@type {object}*/ value: object;
    /**@type {function}*/ callback: Function;
    /**@type {MenuItem[]}*/ childList: MenuItem[];
    /**@type {SubMenu}*/ subMenu: SubMenu;
    /**@type {HTMLElement}*/ root: HTMLElement;
    /**@type {function}*/ onExpand: Function;
    render(): HTMLElement;
    expand(): void;
    collapse(): void;
    toggle(): void;
}
import { SubMenu } from './SubMenu.js';
//# sourceMappingURL=MenuItem.d.ts.map