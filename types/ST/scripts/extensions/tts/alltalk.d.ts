export class AllTalkTtsProvider {
    settings: {};
    dynamicSettings: {
        modelsAvailable: any[];
        currentModel: string;
        deepspeed_available: boolean;
        deepspeed_enabled: boolean;
        lowvram_capable: boolean;
        lowvram_enabled: boolean;
    };
    rvcVoices: any[];
    ready: boolean;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    languageLabels: {
        Arabic: string;
        'Brazilian Portuguese': string;
        Chinese: string;
        Czech: string;
        Dutch: string;
        English: string;
        French: string;
        German: string;
        Italian: string;
        Polish: string;
        Russian: string;
        Spanish: string;
        Turkish: string;
        Japanese: string;
        Korean: string;
        Hungarian: string;
        Hindi: string;
    };
    get settingsHtml(): string;
    loadSettings(settings: any): Promise<void>;
    applySettingsToHTML(): void;
    checkReady(): Promise<void>;
    fetchTtsVoiceObjects(): Promise<any>;
    fetchRvcVoiceObjects(): Promise<any>;
    updateSettingsFromServer(): Promise<void>;
    updateRvcVoiceDropdowns(): void;
    updateModelDropdown(): void;
    updateCheckboxes(): void;
    updateNarratorVoicesDropdown(): void;
    updateLanguageDropdown(): void;
    setupEventListeners(): void;
    onSettingsChange(): void;
    onRefreshClick(): Promise<void>;
    previewTtsVoice(voiceName: any): Promise<void>;
    getVoice(voiceName: any, generatePreview?: boolean): Promise<any>;
    generateTts(inputText: any, voiceId: any): Promise<string | Response>;
    fetchTtsGeneration(inputText: any, voiceId: any): Promise<any>;
}
//# sourceMappingURL=alltalk.d.ts.map