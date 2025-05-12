export type ConnectionProfile = {
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Mode of the connection profile
     */
    mode: string;
    /**
     * Name of the connection profile
     */
    name?: string;
    /**
     * API
     */
    api?: string;
    /**
     * Settings Preset
     */
    preset?: string;
    /**
     * Model
     */
    model?: string;
    /**
     * Proxy Preset
     */
    proxy?: string;
    /**
     * Instruct Template
     */
    instruct?: string;
    /**
     * Context Template
     */
    context?: string;
    /**
     * Instruct Mode
     */
    "instruct-state"?: string;
    /**
     * Tokenizer
     */
    tokenizer?: string;
    /**
     * Custom Stopping Strings
     */
    "stop-strings"?: string;
    /**
     * Start Reply With
     */
    "start-reply-with"?: string;
    /**
     * Reasoning Template
     */
    "reasoning-template"?: string;
    /**
     * Commands to exclude
     */
    exclude?: string[];
};
//# sourceMappingURL=index.d.ts.map