import { getContext } from './st-context.js';

export function saveMetadataDebounced(): void;
/**
 * Provides an ability for extensions to render HTML templates synchronously.
 * Templates sanitation and localization is forced.
 * @param {string} extensionName Extension name
 * @param {string} templateId Template ID
 * @param {object} templateData Additional data to pass to the template
 * @returns {string} Rendered HTML
 *
 * @deprecated Use renderExtensionTemplateAsync instead.
 */
export function renderExtensionTemplate(extensionName: string, templateId: string, templateData?: object, sanitize?: boolean, localize?: boolean): string;
/**
 * Provides an ability for extensions to render HTML templates asynchronously.
 * Templates sanitation and localization is forced.
 * @param {string} extensionName Extension name
 * @param {string} templateId Template ID
 * @param {object} templateData Additional data to pass to the template
 * @returns {Promise<string>} Rendered HTML
 */
export function renderExtensionTemplateAsync(extensionName: string, templateId: string, templateData?: object, sanitize?: boolean, localize?: boolean): Promise<string>;
/**
 * Performs a fetch of the Extras API.
 * @param {string|URL} endpoint Extras API endpoint
 * @param {RequestInit} args Request arguments
 * @returns {Promise<Response>} Response from the fetch
 */
export function doExtrasFetch(endpoint: string | URL, args?: RequestInit): Promise<Response>;
/**
 * Enables an extension by name.
 * @param {string} name Extension name
 * @param {boolean} [reload=true] If true, reload the page after enabling the extension
 */
export function enableExtension(name: string, reload?: boolean): Promise<void>;
/**
 * Disables an extension by name.
 * @param {string} name Extension name
 * @param {boolean} [reload=true] If true, reload the page after disabling the extension
 */
export function disableExtension(name: string, reload?: boolean): Promise<void>;
/**
 * Deletes an extension via the API.
 * @param {string} extensionName Extension name to delete
 */
export function deleteExtension(extensionName: string): Promise<void>;
/**
 * Installs a third-party extension via the API.
 * @param {string} url Extension repository URL
 * @param {boolean} global Is the extension global?
 * @returns {Promise<void>}
 */
export function installExtension(url: string, global: boolean): Promise<void>;
/**
 * Loads extension settings from the app settings.
 * @param {object} settings App Settings
 * @param {boolean} versionChanged Is this a version change?
 * @param {boolean} enableAutoUpdate Enable auto-update
 */
export function loadExtensionSettings(settings: object, versionChanged: boolean, enableAutoUpdate: boolean): Promise<void>;
export function doDailyExtensionUpdatesCheck(): void;
/**
 * Runs the generate interceptors for all extensions.
 * @param {any[]} chat Chat array
 * @param {number} contextSize Context size
 * @param {string} type Generation type
 * @returns {Promise<boolean>} True if generation should be aborted
 */
export function runGenerationInterceptors(chat: any[], contextSize: number, type: string): Promise<boolean>;
/**
 * Writes a field to the character's data extensions object.
 * @param {number} characterId Index in the character array
 * @param {string} key Field name
 * @param {any} value Field value
 * @returns {Promise<void>} When the field is written
 */
export function writeExtensionField(characterId: number, key: string, value: any): Promise<void>;
/**
 * Prompts the user to enter the Git URL of the extension to import.
 * After obtaining the Git URL, makes a POST request to '/api/extensions/install' to import the extension.
 * If the extension is imported successfully, a success message is displayed.
 * If the extension import fails, an error message is displayed and the error is logged to the console.
 * After successfully importing the extension, the extension settings are reloaded and a 'EXTENSION_SETTINGS_LOADED' event is emitted.
 * @param {string} [suggestUrl] Suggested URL to install
 * @returns {Promise<void>}
 */
export function openThirdPartyExtensionMenu(suggestUrl?: string): Promise<void>;
export function initExtensions(): Promise<void>;
/** @type {string[]} */
export let extensionNames: string[];
/**
 * Holds the type of each extension.
 * Don't use this directly, use getExtensionType instead!
 * @type {Record<string, string>}
 */
export let extensionTypes: Record<string, string>;
/**
 * A list of active modules provided by the Extras API.
 * @type {string[]}
 */
export let modules: string[];
export class ModuleWorkerWrapper {
    constructor(callback: any);
    isBusy: boolean;
    callback: any;
    update(...args: any[]): Promise<void>;
}
export namespace extension_settings {
    export { defaultUrl as apiUrl };
    export let apiKey: string;
    export let autoConnect: boolean;
    export let notifyUpdates: boolean;
    export let disabledExtensions: any[];
    export let expressionOverrides: any[];
    export let memory: {};
    export namespace note {
        let _default: string;
        export { _default as default };
        export let chara: any[];
        export let wiAddition: any[];
    }
    export namespace caption {
        let refine_mode: boolean;
    }
    export namespace expressions {
        let api: number;
        let custom: string[];
        let showDefault: boolean;
        let translate: boolean;
        let fallback_expression: string;
        let llmPrompt: string;
        let allowMultiple: boolean;
        let rerollIfSame: boolean;
    }
    export namespace connectionManager {
        let selectedProfile: string;
        let profiles: import("./extensions/connection-manager/index.js").ConnectionProfile[];
    }
    export let dice: {};
    export let regex: import("./char-data.js").RegexScriptData[];
    export let character_allowed_regex: any[];
    export let tts: {};
    export namespace sd {
        let prompts: {};
        let character_prompts: {};
        let character_negative_prompts: {};
    }
    export let chromadb: {};
    let translate_1: {};
    export { translate_1 as translate };
    export let objective: {};
    export let quickReply: {};
    export namespace randomizer {
        let controls: any[];
        let fluctuation: number;
        let enabled: boolean;
    }
    export let speech_recognition: {};
    export let rvc: {};
    export let hypebot: {};
    export let vectors: {};
    export namespace variables {
        let global: {};
    }
    export let attachments: import("./chats.js").FileAttachment[];
    export let character_attachments: Record<string, import("./chats.js").FileAttachment[]>;
    export let disabled_attachments: string[];
    export namespace gallery {
        let folders: {
            [characterKey: string]: string;
        };
        let sort: string;
    };
}
export function getApiUrl(): string;
/**
 * Default URL for the Extras API.
 */
declare const defaultUrl: "http://localhost:5100";
export { getContext };
//# sourceMappingURL=extensions.d.ts.map