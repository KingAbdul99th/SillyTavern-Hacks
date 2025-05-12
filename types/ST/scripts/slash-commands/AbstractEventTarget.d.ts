/**
 * @abstract
 * @implements {EventTarget}
 */
export class AbstractEventTarget implements EventTarget {
    listeners: {};
    addEventListener(type: any, callback: any, _options: any): void;
    dispatchEvent(event: any): boolean;
    removeEventListener(type: any, callback: any, _options: any): void;
}
//# sourceMappingURL=AbstractEventTarget.d.ts.map