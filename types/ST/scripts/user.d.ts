/**
 * Enable or disable user account controls in the UI.
 * @param {boolean} isEnabled User account controls enabled
 * @returns {Promise<void>}
 */
export function setUserControls(isEnabled: boolean): Promise<void>;
/**
 * Check if the current user is an admin.
 * @returns {boolean} True if the current user is an admin
 */
export function isAdmin(): boolean;
/**
 * Gets the handle string of the current user.
 * @returns {string} User handle
 */
export function getCurrentUserHandle(): string;
/**
 * @type {import('../../src/users.js').UserViewModel} Logged in user
 */
export let currentUser: import("../../src/users.js").UserViewModel;
export let accountsEnabled: boolean;
/**
 * Gets a list of settings snapshots.
 */
export type Snapshot = {
    /**
     * Snapshot name
     */
    name: string;
    /**
     * Date in milliseconds
     */
    date: number;
    /**
     * File size in bytes
     */
    size: number;
};
//# sourceMappingURL=user.d.ts.map