/**
 * Gets a preset manager by API id.
 * @param {string} apiId API id
 * @returns {PresetManager} Preset manager
 */
export function getPresetManager(apiId?: string): PresetManager;
export function initPresetManager(): Promise<void>;
declare class PresetManager {
    static masterSections: {
        instruct: {
            name: string;
            getData: () => {};
            setData: (data: any) => Promise<void>;
            isValid: (data: any) => boolean;
        };
        context: {
            name: string;
            getData: () => {};
            setData: (data: any) => Promise<void>;
            isValid: (data: any) => boolean;
        };
        sysprompt: {
            name: string;
            getData: () => {};
            setData: (data: any) => Promise<void>;
            isValid: (data: any) => boolean;
        };
        preset: {
            name: string;
            getData: () => {};
            setData: (data: any) => Promise<void>;
            isValid: (data: any) => boolean;
        };
        reasoning: {
            name: string;
            getData: () => {};
            setData: (data: any) => Promise<void>;
            isValid: (data: any) => boolean;
        };
    };
    static isPossiblyInstructData(data: any): boolean;
    static isPossiblyContextData(data: any): boolean;
    static isPossiblySystemPromptData(data: any): boolean;
    static isPossiblyTextCompletionData(data: any): boolean;
    static isPossiblyReasoningData(data: any): boolean;
    /**
     * Imports master settings from JSON data.
     * @param {object} data Data to import
     * @param {string} fileName File name
     * @returns {Promise<void>}
     */
    static performMasterImport(data: object, fileName: string): Promise<void>;
    /**
     * Exports master settings to JSON data.
     * @returns {Promise<string>} JSON data
     */
    static performMasterExport(): Promise<string>;
    constructor(select: any, apiId: any);
    select: any;
    apiId: any;
    /**
     * Gets all preset names.
     * @returns {string[]} List of preset names
     */
    getAllPresets(): string[];
    /**
     * Finds a preset by name.
     * @param {string} name Preset name
     * @returns {any} Preset value
     */
    findPreset(name: string): any;
    /**
     * Gets the selected preset value.
     * @returns {any} Selected preset value
     */
    getSelectedPreset(): any;
    /**
     * Gets the selected preset name.
     * @returns {string} Selected preset name
     */
    getSelectedPresetName(): string;
    /**
     * Selects a preset by option value.
     * @param {string} value Preset option value
     */
    selectPreset(value: string): void;
    updatePreset(): Promise<void>;
    savePresetAs(): Promise<void>;
    savePreset(name: any, settings: any): Promise<void>;
    renamePreset(newName: any): Promise<void>;
    getPresetList(api: any): {
        presets: any;
        preset_names: {};
    };
    isKeyedApi(): boolean;
    isAdvancedFormatting(): boolean;
    updateList(name: any, preset: any): void;
    getPresetSettings(name: any): {};
    getCompletionPresetByName(name: any): any;
    deletePreset(name: any): Promise<boolean>;
    getDefaultPreset(name: any): Promise<any>;
}
export {};
//# sourceMappingURL=preset-manager.d.ts.map