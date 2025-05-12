/**
 * A class that manages the registration and invocation of tools.
 */
export class ToolManager {
    /**
     * A map of tool names to tool definitions.
     * @type {Map<string, ToolDefinition>}
     */
    static "__#11@#tools": Map<string, ToolDefinition>;
    static "__#11@#INPUT_DELTA_KEY": string;
    /**
     * The maximum number of times to recurse when parsing tool calls.
     * @type {number}
     */
    static RECURSE_LIMIT: number;
    /**
     * Returns an Array of all tools that have been registered.
     * @type {ToolDefinition[]}
     */
    static get tools(): ToolDefinition[];
    /**
     * Registers a new tool with the tool registry.
     * @param {ToolRegistration} tool The tool to register.
     */
    static registerFunctionTool({ name, displayName, description, parameters, action, formatMessage, shouldRegister, stealth }: ToolRegistration, ...args: any[]): void;
    /**
     * Removes a tool from the tool registry.
     * @param {string} name The name of the tool to unregister.
     */
    static unregisterFunctionTool(name: string): void;
    /**
     * Invokes a tool by name. Returns the result of the tool's action function.
     * @param {string} name The name of the tool to invoke.
     * @param {object} parameters Function parameters. For example, if the tool requires a "name" parameter, you would pass {name: "value"}.
     * @returns {Promise<string|Error>} The result of the tool's action function. If an error occurs, null is returned. Non-string results are JSON-stringified.
     */
    static invokeFunctionTool(name: string, parameters: object): Promise<string | Error>;
    /**
     * Checks if a tool is a stealth tool.
     * @param {string} name The name of the tool to check.
     * @returns {boolean} Whether the tool is a stealth tool.
     */
    static isStealthTool(name: string): boolean;
    /**
     * Formats a message for a tool call by name.
     * @param {string} name The name of the tool to format the message for.
     * @param {object} parameters Function tool call parameters.
     * @returns {Promise<string>} The formatted message for the tool call.
     */
    static formatToolCallMessage(name: string, parameters: object): Promise<string>;
    /**
     * Gets the display name of a tool by name.
     * @param {string} name
     * @returns {string} The display name of the tool.
     */
    static getDisplayName(name: string): string;
    /**
     * Register function tools for the next chat completion request.
     * @param {object} data Generation data
     */
    static registerFunctionToolsOpenAI(data: object): Promise<void>;
    /**
     * Utility function to parse tool calls from a parsed response.
     * @param {any[]} toolCalls The tool calls to update.
     * @param {any} parsed The parsed response from the OpenAI API.
     * @returns {void}
     */
    static parseToolCalls(toolCalls: any[], parsed: any): void;
    /**
     * Apply a tool call delta to a target object.
     * @param {object} target The target object to apply the delta to
     * @param {object} delta The delta object to apply
     */
    static "__#11@#applyToolCallDelta"(target: object, delta: object): void;
    /**
     * Checks if tool calling is supported for the current settings and generation type.
     * @returns {boolean} Whether tool calling is supported for the given type
     */
    static isToolCallingSupported(): boolean;
    /**
     * Checks if tool calls can be performed for the current settings and generation type.
     * @param {string} type Generation type
     * @returns {boolean} Whether tool calls can be performed for the given type
     */
    static canPerformToolCalls(type: string): boolean;
    /**
     * Utility function to get tool calls from the response data.
     * @param {any} data Response data
     * @returns {any[]} Tool calls from the response data
     */
    static "__#11@#getToolCallsFromData"(data: any): any[];
    /**
     * Checks if the response data contains tool calls.
     * @param {object} data Response data
     * @returns {boolean} Whether the response data contains tool calls
     */
    static hasToolCalls(data: object): boolean;
    /**
     * Check for function tool calls in the response data and invoke them.
     * @param {any} data Reply data
     * @returns {Promise<ToolInvocationResult>} Successful tool invocations
     */
    static invokeFunctionTools(data: any): Promise<ToolInvocationResult>;
    /**
     * Groups tool names by count.
     * @param {string[]} toolNames Tool names
     * @returns {string} Grouped tool names
     */
    static "__#11@#groupToolNames"(toolNames: string[]): string;
    /**
     * Formats a message with tool invocations.
     * @param {ToolInvocation[]} invocations Tool invocations.
     * @returns {string} Formatted message with tool invocations.
     */
    static "__#11@#formatToolInvocationMessage"(invocations: ToolInvocation[]): string;
    /**
     * Saves function tool invocations to the last user chat message extra metadata.
     * @param {ToolInvocation[]} invocations Successful tool invocations
     */
    static saveFunctionToolInvocations(invocations: ToolInvocation[]): Promise<void>;
    /**
     * Shows an error message for tool calls.
     * @param {Error[]} errors Errors that occurred during tool invocation
     * @returns {void}
     */
    static showToolCallError(errors: Error[]): void;
    static initToolSlashCommands(): void;
}
export type ToolInvocation = {
    /**
     * - A unique identifier for the tool invocation.
     */
    id: string;
    /**
     * - The display name of the tool.
     */
    displayName: string;
    /**
     * - The name of the tool.
     */
    name: string;
    /**
     * - The parameters for the tool invocation.
     */
    parameters: string;
    /**
     * - The result of the tool invocation.
     */
    result: string;
};
export type ToolInvocationResult = {
    /**
     * Successful tool invocations
     */
    invocations: ToolInvocation[];
    /**
     * Errors that occurred during tool invocation
     */
    errors: Error[];
    /**
     * Names of stealth tools that were invoked
     */
    stealthCalls: string[];
};
export type ToolRegistration = {
    /**
     * - The name of the tool.
     */
    name: string;
    /**
     * - The display name of the tool.
     */
    displayName: string;
    /**
     * - A description of the tool.
     */
    description: string;
    /**
     * - The parameters for the tool.
     */
    parameters: object;
    /**
     * - The action to perform when the tool is invoked.
     */
    action: Function;
    /**
     * - A function to format the tool call message.
     */
    formatMessage?: Function;
    /**
     * - A function to determine if the tool should be registered.
     */
    shouldRegister?: Function;
    /**
     * - A tool call result will not be shown in the chat. No follow-up generation will be performed.
     */
    stealth?: boolean;
};
export type ToolDefinitionOpenAI = {
    /**
     * - The type of the tool.
     */
    type: string;
    /**
     * - The function definition.
     */
    function: {
        name: string;
        description: string;
        parameters: object;
    };
    /**
     * - A function to convert the tool to a string.
     */
    toString: Function;
};
/**
 * A class that represents a tool definition.
 */
declare class ToolDefinition {
    /**
     * Creates a new ToolDefinition.
     * @param {string} name A unique name for the tool.
     * @param {string} displayName A user-friendly display name for the tool.
     * @param {string} description A description of what the tool does.
     * @param {object} parameters A JSON schema for the parameters that the tool accepts.
     * @param {function} action A function that will be called when the tool is executed.
     * @param {function} formatMessage A function that will be called to format the tool call toast.
     * @param {function} shouldRegister A function that will be called to determine if the tool should be registered.
     * @param {boolean} stealth A tool call result will not be shown in the chat. No follow-up generation will be performed.
     */
    constructor(name: string, displayName: string, description: string, parameters: object, action: Function, formatMessage: Function, shouldRegister: Function, stealth: boolean);
    /**
     * Converts the ToolDefinition to an OpenAI API representation
     * @returns {ToolDefinitionOpenAI} OpenAI API representation of the tool.
     */
    toFunctionOpenAI(): ToolDefinitionOpenAI;
    /**
     * Invokes the tool with the given parameters.
     * @param {object} parameters The parameters to pass to the tool.
     * @returns {Promise<any>} The result of the tool's action function.
     */
    invoke(parameters: object): Promise<any>;
    /**
     * Formats a message with the tool invocation.
     * @param {object} parameters The parameters to pass to the tool.
     * @returns {Promise<string>} The formatted message.
     */
    formatMessage(parameters: object): Promise<string>;
    shouldRegister(): Promise<any>;
    get displayName(): string;
    get stealth(): boolean;
    #private;
}
export {};
//# sourceMappingURL=tool-calling.d.ts.map