export class SileroTtsProvider {
    settings: any;
    ready: boolean;
    voices: any[];
    separator: string;
    defaultSettings: {
        provider_endpoint: string;
        voiceMap: {};
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    refreshSession(): Promise<void>;
    getVoice(voiceName: any): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<any>;
    fetchTtsGeneration(inputText: any, voiceId: any): Promise<Response>;
    initSession(): Promise<void>;
    fetchTtsFromHistory(history_item_id: any): Promise<any>;
}
//# sourceMappingURL=silerotts.d.ts.map