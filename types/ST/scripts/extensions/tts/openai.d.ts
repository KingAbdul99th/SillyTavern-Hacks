export class OpenAITtsProvider {
    static voices: {
        name: string;
        voice_id: string;
        lang: string;
        preview_url: string;
    }[];
    settings: any;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    defaultSettings: {
        voiceMap: {};
        customVoices: any[];
        model: string;
        speed: number;
    };
    get settingsHtml(): string;
    loadSettings(settings: any): Promise<void>;
    onSettingsChange(): void;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    getVoice(voiceName: any): Promise<{
        name: string;
        voice_id: string;
        lang: string;
        preview_url: string;
    }>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<{
        name: string;
        voice_id: string;
        lang: string;
        preview_url: string;
    }[]>;
    previewTtsVoice(_: any): Promise<void>;
    fetchTtsGeneration(inputText: any, voiceId: any): Promise<Response>;
}
//# sourceMappingURL=openai.d.ts.map