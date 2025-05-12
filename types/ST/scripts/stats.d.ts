export function initStats(): void;
/**
 * Handles the user stats by getting them from the server, calculating the total and generating the HTML report.
 */
export function userStatsHandler(): Promise<void>;
/**
 * Handles the character stats by getting them from the server and generating the HTML report.
 *
 * @param {Object} characters - Object containing character data.
 * @param {string} this_chid - The character id.
 */
export function characterStatsHandler(characters: any, this_chid: string): Promise<void>;
/**
 * Fetches the character stats from the server.
 */
export function getStats(): Promise<void>;
/**
 * Handles stat processing for messages.
 *
 * @param {Object} line - Object containing message data.
 * @param {string} type - The type of the message processing (e.g., 'append', 'continue', 'appendFinal', 'swipe').
 * @param {Object} characters - Object containing character data.
 * @param {string} this_chid - The character id.
 * @param {string} oldMesssage - The old message that's being processed.
 */
export function statMesProcess(line: any, type: string, characters: any, this_chid: string, oldMesssage: string): Promise<void>;
export let charStats: {};
//# sourceMappingURL=stats.d.ts.map