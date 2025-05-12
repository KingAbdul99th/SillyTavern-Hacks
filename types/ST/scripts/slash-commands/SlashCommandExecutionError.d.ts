export class SlashCommandExecutionError extends Error {
    constructor(cause: any, message: any, commandName: any, start: any, end: any, commandText: any, fullText: any);
    /**@type {string} */ commandName: string;
    /**@type {number} */ start: number;
    /**@type {number} */ end: number;
    /**@type {string} */ commandText: string;
    /**@type {string} */ text: string;
    get index(): number;
    get line(): number;
    get column(): number;
    get hint(): string;
}
//# sourceMappingURL=SlashCommandExecutionError.d.ts.map