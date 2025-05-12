export class OpenAICompatibleTtsProvider {
    settings: any;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    defaultSettings: {
        voiceMap: {};
        model: string;
        speed: number;
        available_voices: string[];
        provider_endpoint: string;
    };
    get settingsHtml(): string;
    loadSettings(settings: any): Promise<void>;
    onSettingsChange(): void;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    getVoice(voiceName: any): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<any>;
    previewTtsVoice(voiceId: any): Promise<void>;
    fetchTtsGeneration(inputText: any, voiceId: any): Promise<Response>;
}
//# sourceMappingURL=openai-compatible.d.ts.map