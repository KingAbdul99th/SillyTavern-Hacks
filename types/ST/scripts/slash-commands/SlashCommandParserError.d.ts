export class SlashCommandParserError extends Error {
    constructor(message: any, text: any, index: any);
    /**@type {String}*/ text: string;
    /**@type {Number}*/ index: number;
    get line(): number;
    get column(): number;
    get hint(): string;
}
//# sourceMappingURL=SlashCommandParserError.d.ts.map