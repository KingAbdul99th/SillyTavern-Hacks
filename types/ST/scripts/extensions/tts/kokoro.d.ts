export class KokoroTtsProvider {
    settings: {
        modelId: string;
        dtype: string;
        device: string;
        voiceMap: {};
        defaultVoice: string;
        speakingRate: number;
    };
    ready: boolean;
    voices: string[];
    worker: Worker;
    separator: string;
    pendingRequests: Map<any, any>;
    nextRequestId: number;
    initTtsDebounced: Function;
    /**
     * Perform any text processing before passing to TTS engine.
     * @param {string} text Input text
     * @returns {string} Processed text
     */
    processText(text: string): string;
    loadSettings(settings: any): Promise<void>;
    initializeWorker(): Promise<any>;
    handleWorkerMessage(event: any): void;
    updateStatusDisplay(): void;
    checkReady(): Promise<any>;
    onRefreshClick(): Promise<any>;
    get settingsHtml(): string;
    onSettingsChange(): Promise<void>;
    fetchTtsVoiceObjects(): Promise<{
        name: string;
        voice_id: string;
        preview_url: any;
        lang: string;
    }[]>;
    previewTtsVoice(voiceId: any): Promise<void>;
    getVoiceDisplayName(voiceId: any): any;
    getVoice(voiceName: any): {
        name: any;
        voice_id: any;
        preview_url: any;
        lang: string;
    };
    /**
     * Generate TTS audio for the given text using the specified voice.
     * @param {string} text Text to generate
     * @param {string} voiceId Voice ID
     * @returns {AsyncGenerator<Response>} Audio response generator
     */
    generateTts(text: string, voiceId: string): AsyncGenerator<Response>;
    dispose(): void;
}
//# sourceMappingURL=kokoro.d.ts.map