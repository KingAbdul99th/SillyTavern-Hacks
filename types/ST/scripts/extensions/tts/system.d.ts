export class SystemTtsProvider {
    static BROWSER_DEFAULT_VOICE_ID: string;
    static BROWSER_DEFAULT_VOICE_NAME: string;
    settings: any;
    ready: boolean;
    voices: any[];
    separator: string;
    defaultSettings: {
        voiceMap: {};
        rate: number;
        pitch: number;
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    fetchTtsVoiceObjects(): Promise<any>;
    previewTtsVoice(voiceId: any): void;
    getVoice(voiceName: any): Promise<{
        voice_id: string;
        name: string;
    }>;
    generateTts(text: any, voiceId: any): Promise<any>;
}
//# sourceMappingURL=system.d.ts.map