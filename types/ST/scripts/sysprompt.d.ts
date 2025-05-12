/**
 * Loads sysprompt settings from the given data object.
 * @param {object} data Settings data object.
 */
export function loadSystemPrompts(data: object): Promise<void>;
/**
 * Checks if the instruct template has a system prompt and prompts the user to save it as a system prompt.
 * @param {string} name Name of the instruct template
 * @param {object} template Instruct template object
 */
export function checkForSystemPromptInInstructTemplate(name: string, template: object): Promise<void>;
export function initSystemPrompts(): void;
export let system_prompts: any[];
//# sourceMappingURL=sysprompt.d.ts.map