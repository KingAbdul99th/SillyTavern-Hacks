export class SlashCommandDebugController {
    /** @type {SlashCommandClosure[]} */ stack: SlashCommandClosure[];
    /** @type {SlashCommandExecutor[]} */ cmdStack: SlashCommandExecutor[];
    /** @type {boolean[]} */ stepStack: boolean[];
    /** @type {boolean} */ isStepping: boolean;
    /** @type {boolean} */ isSteppingInto: boolean;
    /** @type {boolean} */ isSteppingOut: boolean;
    /** @type {object} */ namedArguments: object;
    /** @type {string|SlashCommandClosure|(string|SlashCommandClosure)[]} */ unnamedArguments: string | SlashCommandClosure | (string | SlashCommandClosure)[];
    /** @type {Promise<boolean>} */ continuePromise: Promise<boolean>;
    /** @type {(boolean)=>void} */ continueResolver: (boolean: any) => void;
    /** @type {(closure:SlashCommandClosure, executor:SlashCommandExecutor)=>Promise<boolean>} */ onBreakPoint: (closure: SlashCommandClosure, executor: SlashCommandExecutor) => Promise<boolean>;
    testStepping(closure: any): boolean;
    down(closure: any): void;
    up(): void;
    setExecutor(executor: any): void;
    resume(): void;
    step(): void;
    stepInto(): void;
    stepOut(): void;
    awaitContinue(): Promise<boolean>;
    awaitBreakPoint(closure: any, executor: any): Promise<boolean>;
}
import { SlashCommandClosure } from './SlashCommandClosure.js';
import { SlashCommandExecutor } from './SlashCommandExecutor.js';
//# sourceMappingURL=SlashCommandDebugController.d.ts.map