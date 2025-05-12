/**
 * Drag and drop handler
 *
 * Can be used on any element, enabling drag&drop styling and callback on drop.
 */
export class DragAndDropHandler {
    /**
     * Create a DragAndDropHandler
     * @param {JQuery.Selector} selector - The CSS selector for the elements to enable drag and drop
     * @param {(files: File[], event:JQuery.DropEvent<HTMLElement, undefined, any, any>) => void} onDropCallback - The callback function to handle the drop event
     */
    constructor(selector: JQuery.Selector, onDropCallback: (files: File[], event: JQuery.DropEvent<HTMLElement, undefined, any, any>) => void, { noAnimation }?: {
        noAnimation?: boolean;
    });
    /** @private @type {JQuery.Selector} */ private selector;
    /** @private @type {(files: File[], event:JQuery.DropEvent<HTMLElement, undefined, any, any>) => void} */ private onDropCallback;
    /** @private @type {NodeJS.Timeout} Remark: Not actually NodeJS timeout, but it's close */ private dragLeaveTimeout;
    /** @private @type {boolean} */ private noAnimation;
    /**
     * Destroy the drag and drop functionality
     */
    destroy(): void;
    /**
     * Initialize the drag and drop functionality
     * Automatically called on construction
     * @private
     */
    private init;
    /**
     * @param {JQuery.DragOverEvent<HTMLElement, undefined, any, any>} event - The dragover event
     * @private
     */
    private handleDragOver;
    /**
     * @param {JQuery.DragLeaveEvent<HTMLElement, undefined, any, any>} event - The dragleave event
     * @private
     */
    private handleDragLeave;
    /**
     * @param {JQuery.DropEvent<HTMLElement, undefined, any, any>} event - The drop event
     * @private
     */
    private handleDrop;
}
//# sourceMappingURL=dragdrop.d.ts.map