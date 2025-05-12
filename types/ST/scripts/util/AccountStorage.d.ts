/**
 * Account storage instance.
 */
export const accountStorage: AccountStorage;
/**
 * Provides access to account storage of arbitrary key-value pairs.
 */
declare class AccountStorage {
    /**
     * Initialize the account storage.
     * @param {Object} state Initial state
     */
    init(state: any): void;
    /**
     * Get the value of a key in account storage.
     * @param {string} key Key to get
     * @returns {string|null} Value of the key
     */
    getItem(key: string): string | null;
    /**
     * Set a key in account storage.
     * @param {string} key Key to set
     * @param {string} value Value to set
     */
    setItem(key: string, value: string): void;
    /**
     * Remove a key from account storage.
     * @param {string} key Key to remove
     */
    removeItem(key: string): void;
    /**
     * Gets a snapshot of the storage state.
     * @returns {Record<string, string>} A deep clone of the storage state
     */
    getState(): Record<string, string>;
    #private;
}
export {};
//# sourceMappingURL=AccountStorage.d.ts.map