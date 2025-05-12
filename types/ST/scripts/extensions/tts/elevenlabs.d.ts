export class ElevenLabsTtsProvider {
    settings: any;
    voices: any[];
    separator: string;
    defaultSettings: {
        stability: number;
        similarity_boost: number;
        style_exaggeration: number;
        speaker_boost: boolean;
        apiKey: string;
        model: string;
        voiceMap: {};
    };
    get settingsHtml(): string;
    shouldInvolveExtendedSettings(): boolean;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    onConnectClick(): Promise<void>;
    setupVoiceCloningMenu(): void;
    updateApiKey(): Promise<void>;
    getVoice(voiceName: any): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    findTtsGenerationInHistory(message: any, voiceId: any): Promise<any>;
    fetchTtsVoiceObjects(): Promise<any>;
    fetchTtsVoiceSettings(): Promise<any>;
    fetchTtsGeneration(text: any, voiceId: any): Promise<Response>;
    fetchTtsFromHistory(history_item_id: any): Promise<Response>;
    fetchTtsHistory(): Promise<any>;
    addVoice(name: any, description: any, labels: any): Promise<any>;
}
//# sourceMappingURL=elevenlabs.d.ts.map