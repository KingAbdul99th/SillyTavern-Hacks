export function showBookmarksButtons(): void;
export function createBranch(mesId: any): Promise<string>;
/**
 * Creates a new bookmark for a message.
 *
 * @param {number} mesId - The ID of the message.
 * @param {Object} [options={}] - Optional parameters.
 * @param {string?} [options.forceName=null] - The name to force for the bookmark.
 * @returns {Promise<string?>} - A promise that resolves to the bookmark name when the bookmark is created.
 */
export function createNewBookmark(mesId: number, { forceName }?: {
    forceName?: string | null;
}): Promise<string | null>;
/**
 * Updates the display of the bookmark on a chat message.
 * @param {JQuery<HTMLElement>} mes - The message element
 * @param {string?} [newBookmarkLink=null] - The new bookmark link (optional)
 */
export function updateBookmarkDisplay(mes: JQuery<HTMLElement>, newBookmarkLink?: string | null): void;
export function convertSoloToGroupChat(): Promise<void>;
/**
 * Creates a new branch from the message with the given ID
 * @param {number} mesId Message ID
 * @returns {Promise<string?>} Branch file name
 */
export function branchChat(mesId: number): Promise<string | null>;
export function initBookmarks(): void;
//# sourceMappingURL=bookmarks.d.ts.map