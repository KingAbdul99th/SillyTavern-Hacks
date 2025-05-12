declare const _default: 0;
export default _default;
export type v2DataWorldInfoEntry = {
    /**
     * - An array of primary keys associated with the entry.
     */
    keys: string[];
    /**
     * - An array of secondary keys associated with the entry (optional).
     */
    secondary_keys: string[];
    /**
     * - A human-readable description or explanation for the entry.
     */
    comment: string;
    /**
     * - The main content or data associated with the entry.
     */
    content: string;
    /**
     * - Indicates if the entry's content is fixed and unchangeable.
     */
    constant: boolean;
    /**
     * - Indicates if the entry's inclusion is controlled by specific conditions.
     */
    selective: boolean;
    /**
     * - Defines the order in which the entry is inserted during processing.
     */
    insertion_order: number;
    /**
     * - Controls whether the entry is currently active and used.
     */
    enabled: boolean;
    /**
     * - Specifies the location or context where the entry applies.
     */
    position: string;
    /**
     * - An object containing additional details for extensions associated with the entry.
     */
    extensions: v2DataWorldInfoEntryExtensionInfos;
    /**
     * - A unique identifier assigned to the entry.
     */
    id: number;
};
export type v2DataWorldInfoEntryExtensionInfos = {
    /**
     * - The order in which the extension is applied relative to other extensions.
     */
    position: number;
    /**
     * - Prevents the extension from being applied recursively.
     */
    exclude_recursion: boolean;
    /**
     * - The chance (between 0 and 1) of the extension being applied.
     */
    probability: number;
    /**
     * - Determines if the `probability` property is used.
     */
    useProbability: boolean;
    /**
     * - The maximum level of nesting allowed for recursive application of the extension.
     */
    depth: number;
    /**
     * - Defines the logic used to determine if the extension is applied selectively.
     */
    selectiveLogic: number;
    /**
     * - A category or grouping for the extension.
     */
    group: string;
    /**
     * - Overrides any existing group assignment for the extension.
     */
    group_override: boolean;
    /**
     * - A value used for prioritizing extensions within the same group.
     */
    group_weight: number;
    /**
     * - Completely disallows recursive application of the extension.
     */
    prevent_recursion: boolean;
    /**
     * - Will only be checked during recursion.
     */
    delay_until_recursion: boolean;
    /**
     * - The maximum depth to search for matches when applying the extension.
     */
    scan_depth: number;
    /**
     * - Specifies if only entire words should be matched during extension application.
     */
    match_whole_words: boolean;
    /**
     * - Indicates if group weight is considered when selecting extensions.
     */
    use_group_scoring: boolean;
    /**
     * - Controls whether case sensitivity is applied during matching for the extension.
     */
    case_sensitive: boolean;
    /**
     * - An identifier used for automation purposes related to the extension.
     */
    automation_id: string;
    /**
     * - The specific function or purpose of the extension.
     */
    role: number;
    /**
     * - Indicates if the extension is optimized for vectorized processing.
     */
    vectorized: boolean;
    /**
     * - The order in which the extension should be displayed for user interfaces.
     */
    display_index: number;
};
export type v2WorldInfoBook = {
    /**
     * - the name of the book
     */
    name: string;
    /**
     * - the entries of the book
     */
    entries: v2DataWorldInfoEntry[];
};
export type v2CharData = {
    /**
     * - The character's name.
     */
    name: string;
    /**
     * - A brief description of the character.
     */
    description: string;
    /**
     * - The character's data version.
     */
    character_version: string;
    /**
     * - A short summary of the character's personality traits.
     */
    personality: string;
    /**
     * - A description of the character's background or setting.
     */
    scenario: string;
    /**
     * - The character's opening message in a conversation.
     */
    first_mes: string;
    /**
     * - An example message demonstrating the character's conversation style.
     */
    mes_example: string;
    /**
     * - Internal notes or comments left by the character's creator.
     */
    creator_notes: string;
    /**
     * - A list of keywords or labels associated with the character.
     */
    tags: string[];
    /**
     * - The system prompt used to interact with the character.
     */
    system_prompt: string;
    /**
     * - Instructions for handling the character's conversation history.
     */
    post_history_instructions: string;
    /**
     * - The name of the person who created the character.
     */
    creator: string;
    /**
     * - Additional greeting messages the character can use.
     */
    alternate_greetings: string[];
    /**
     * - Data about the character's world or story (if applicable).
     */
    character_book: v2WorldInfoBook;
    /**
     * - Additional details specific to the character.
     */
    extensions: v2CharDataExtensionInfos;
};
export type v2CharDataExtensionInfos = {
    /**
     * - A numerical value indicating the character's propensity to talk.
     */
    talkativeness: number;
    /**
     * - A flag indicating whether the character is a favorite.
     */
    fav: boolean;
    /**
     * - The fictional world or setting where the character exists (if applicable).
     */
    world: string;
    /**
     * - Prompts used to explore the character's depth and complexity.
     */
    depth_prompt: {
        depth: number;
        prompt: string;
        role: "system" | "user" | "assistant";
    };
    /**
     * - Custom regex scripts for the character.
     * // Non-standard extensions added by external tools
     */
    regex_scripts: RegexScriptData[];
    /**
     * - The unique identifier assigned to the character by the Pygmalion.chat.
     */
    pygmalion_id?: string;
    /**
     * - The gitHub repository associated with the character.
     */
    github_repo?: string;
    /**
     * - The source URL associated with the character.
     */
    source_url?: string;
    /**
     * - The Chub-specific data associated with the character.
     */
    chub?: {
        full_path: string;
    };
    /**
     * - The RisuAI-specific data associated with the character.
     */
    risuai?: {
        source: string[];
    };
    /**
     * - SD-specific data associated with the character.
     */
    sd_character_prompt?: {
        positive: string;
        negative: string;
    };
};
export type RegexScriptData = {
    /**
     * - UUID of the script
     */
    id: string;
    /**
     * - The name of the script
     */
    scriptName: string;
    /**
     * - The regex to find
     */
    findRegex: string;
    /**
     * - The string to replace
     */
    replaceString: string;
    /**
     * - The strings to trim
     */
    trimStrings: string[];
    /**
     * - The placement of the script
     */
    placement: number[];
    /**
     * - Whether the script is disabled
     */
    disabled: boolean;
    /**
     * - Whether the script only applies to Markdown
     */
    markdownOnly: boolean;
    /**
     * - Whether the script only applies to prompts
     */
    promptOnly: boolean;
    /**
     * - Whether the script runs on edit
     */
    runOnEdit: boolean;
    /**
     * - Whether the regex should be substituted
     */
    substituteRegex: number;
    /**
     * - The minimum depth
     */
    minDepth: number;
    /**
     * - The maximum depth
     */
    maxDepth: number;
};
export type v1CharData = {
    /**
     * - the name of the character
     */
    name: string;
    /**
     * - the description of the character
     */
    description: string;
    /**
     * - a short personality description of the character
     */
    personality: string;
    /**
     * - a scenario description of the character
     */
    scenario: string;
    /**
     * - the first message in the conversation
     */
    first_mes: string;
    /**
     * - the example message in the conversation
     */
    mes_example: string;
    /**
     * - creator's notes of the character
     */
    creatorcomment: string;
    /**
     * - the tags of the character
     */
    tags: string[];
    /**
     * - talkativeness
     */
    talkativeness: number;
    /**
     * - fav
     */
    fav: boolean | string;
    /**
     * - create_date
     */
    create_date: string;
    /**
     * - v2 data extension
     * // Non-standard extensions added by the ST server (not part of the original data)
     */
    data: v2CharData;
    /**
     * - name of the current chat file chat
     */
    chat: string;
    /**
     * - file name of the avatar image (acts as a unique identifier)
     */
    avatar: string;
    /**
     * - the full raw JSON data of the character
     */
    json_data: string;
    /**
     * - if the data is shallow (lazy-loaded)
     */
    shallow: boolean | null;
};
//# sourceMappingURL=char-data.d.ts.map