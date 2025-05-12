/**
 * Common debounce timeout values to use with `debounce` calls.
 */
export type debounce_timeout = number;
export namespace debounce_timeout {
    let quick: number;
    let short: number;
    let standard: number;
    let relaxed: number;
    let extended: number;
}
/**
 * Used as an ephemeral key in message extra metadata.
 * When set, the message will be excluded from generation
 * prompts without affecting the number of chat messages,
 * which is needed to preserve world info timed effects.
 */
export const IGNORE_SYMBOL: unique symbol;
//# sourceMappingURL=constants.d.ts.map