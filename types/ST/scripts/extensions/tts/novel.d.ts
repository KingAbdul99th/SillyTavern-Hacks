export class NovelTtsProvider {
    settings: any;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    defaultSettings: {
        voiceMap: {};
        customVoices: any[];
    };
    /**
     * Perform any text processing before passing to TTS engine.
     * @param {string} text Input text
     * @returns {string} Processed text
     */
    processText(text: string): string;
    get settingsHtml(): string;
    addCustomVoice(): Promise<void>;
    deleteCustomVoice(): void;
    populateCustomVoices(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    getVoice(voiceName: any): Promise<{
        name: any;
        voice_id: any;
        lang: string;
        preview_url: boolean;
    }>;
    generateTts(text: any, voiceId: any): Promise<AsyncGenerator<Response, void, unknown>>;
    fetchTtsVoiceObjects(): Promise<{
        name: string;
        voice_id: string;
        lang: string;
        preview_url: boolean;
    }[]>;
    previewTtsVoice(id: any): Promise<void>;
    fetchTtsGeneration(inputText: any, voiceId: any): AsyncGenerator<Response, void, unknown>;
}
//# sourceMappingURL=novel.d.ts.map