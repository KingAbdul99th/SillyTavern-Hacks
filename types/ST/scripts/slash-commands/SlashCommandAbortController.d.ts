export class SlashCommandAbortController extends AbstractEventTarget {
    /**@type {SlashCommandAbortSignal}*/ signal: SlashCommandAbortSignal;
    abort(reason?: string, isQuiet?: boolean): void;
    pause(reason?: string): void;
    continue(reason?: string): void;
}
export class SlashCommandAbortSignal {
    /**@type {boolean}*/ isQuiet: boolean;
    /**@type {boolean}*/ paused: boolean;
    /**@type {boolean}*/ aborted: boolean;
    /**@type {string}*/ reason: string;
}
import { AbstractEventTarget } from './AbstractEventTarget.js';
//# sourceMappingURL=SlashCommandAbortController.d.ts.map