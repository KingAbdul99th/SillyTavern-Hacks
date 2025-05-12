export class CoquiTtsProvider {
    static checkmodel_state(model_id: any): Promise<Response>;
    static installModel(model_id: any, action: any): Promise<Response>;
    static getLocalModelList(): Promise<Response>;
    settings: any;
    defaultSettings: {
        voiceMap: {};
        customVoices: {};
        voiceIds: any[];
        voiceMapDict: {};
    };
    get settingsHtml(): string;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    updateCustomVoices(): void;
    onSettingsChange(): void;
    onRefreshClick(): Promise<void>;
    onAddClick(): Promise<void>;
    getVoice(voiceName: any): Promise<{
        name: string;
        voice_id: string;
        preview_url: boolean;
    }[]>;
    onRemoveClick(): Promise<void>;
    onModelOriginChange(): Promise<void>;
    onModelLanguageChange(): Promise<void>;
    onModelNameChange(): Promise<void>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<{
        name: string;
        voice_id: string;
        preview_url: boolean;
    }[]>;
    previewTtsVoice(id: any): void;
    fetchTtsFromHistory(history_item_id: any): Promise<any>;
}
//# sourceMappingURL=coqui.d.ts.map