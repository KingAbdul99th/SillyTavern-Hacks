/**
 * Converts generation time from milliseconds to a human-readable format.
 *
 * The function takes total generation time as an input, then converts it to a format
 * of "_ Days, _ Hours, _ Minutes, _ Seconds". If the generation time does not exceed a
 * particular measure (like days or hours), that measure will not be included in the output.
 *
 * @param {number} total_gen_time - The total generation time in milliseconds.
 * @returns {string} - A human-readable string that represents the time spent generating characters.
 */
export function humanizeGenTime(total_gen_time: number): string;
export function getParsedUA(): any;
/**
 * Checks if the device is a mobile device.
 * @returns {boolean} - True if the device is a mobile device, false otherwise.
 */
export function isMobile(): boolean;
export function shouldSendOnEnter(): boolean;
export function humanizedDateTime(): string;
export function getMessageTimeStamp(): string;
export function RA_CountCharTokens(): Promise<void>;
export function favsToHotswap(): Promise<void>;
export function dragElement(elmnt: any): void;
export function initMovingUI(): Promise<void>;
export function initRossMods(): void;
export const autoFitSendTextAreaDebounced: Function;
//# sourceMappingURL=RossAscends-mods.d.ts.map