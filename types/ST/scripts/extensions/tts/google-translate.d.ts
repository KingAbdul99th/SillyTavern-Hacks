export class GoogleTranslateTtsProvider {
    settings: any;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    defaultSettings: {
        region: string;
        voiceMap: {};
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    getVoice(voiceName: any): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<any>;
    /**
     * Preview TTS for a given voice ID.
     * @param {string} id Voice ID
     */
    previewTtsVoice(id: string): Promise<void>;
    fetchTtsGeneration(text: any, voiceId: any): Promise<Response>;
}
//# sourceMappingURL=google-translate.d.ts.map