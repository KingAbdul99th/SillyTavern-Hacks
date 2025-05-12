export class SlashCommandExecutor {
    constructor(start: any);
    /**@type {Boolean}*/ injectPipe: boolean;
    /**@type {Number}*/ start: number;
    /**@type {Number}*/ end: number;
    /**@type {Number}*/ startNamedArgs: number;
    /**@type {Number}*/ endNamedArgs: number;
    /**@type {Number}*/ startUnnamedArgs: number;
    /**@type {Number}*/ endUnnamedArgs: number;
    /**@type {String}*/ name: string;
    set source(value: string);
    get source(): string;
    /** @type {SlashCommand} */ command: SlashCommand;
    /** @type {SlashCommandNamedArgumentAssignment[]} */ namedArgumentList: SlashCommandNamedArgumentAssignment[];
    /** @type {SlashCommandUnnamedArgumentAssignment[]} */ unnamedArgumentList: SlashCommandUnnamedArgumentAssignment[];
    /** @type {import('./SlashCommandParser.js').ParserFlags} */ parserFlags: import("./SlashCommandParser.js").ParserFlags;
    get commandCount(): number;
    set onProgress(value: any);
    #private;
}
import { SlashCommand } from './SlashCommand.js';
import { SlashCommandNamedArgumentAssignment } from './SlashCommandNamedArgumentAssignment.js';
import { SlashCommandUnnamedArgumentAssignment } from './SlashCommandUnnamedArgumentAssignment.js';
//# sourceMappingURL=SlashCommandExecutor.d.ts.map