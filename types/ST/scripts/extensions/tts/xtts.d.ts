export class XTTSTtsProvider {
    settings: any;
    ready: boolean;
    voices: any[];
    separator: string;
    /**
     * Perform any text processing before passing to TTS engine.
     * @param {string} text Input text
     * @returns {string} Processed text
     */
    processText(text: string): string;
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
    defaultSettings: {
        provider_endpoint: string;
        language: string;
        temperature: number;
        length_penalty: number;
        repetition_penalty: number;
        top_k: number;
        top_p: number;
        speed: number;
        enable_text_splitting: boolean;
        stream_chunk_size: number;
        voiceMap: {};
        streaming: boolean;
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    getVoice(voiceName: any): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<string | Response>;
    fetchTtsVoiceObjects(): Promise<any>;
    changeTTSSettings(): Promise<Response>;
    fetchTtsGeneration(inputText: any, voiceId: any): Promise<string | Response>;
    fetchTtsFromHistory(history_item_id: any): Promise<any>;
}
//# sourceMappingURL=xtts.d.ts.map