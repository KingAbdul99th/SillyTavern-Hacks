export class GSVITtsProvider {
    settings: any;
    ready: boolean;
    separator: string;
    characterList: {};
    voices: any[];
    /**
     * Perform any text processing before passing to TTS engine.
     * @param {string} text Input text
     * @returns {string} Processed text
     */
    processText(text: string): string;
    languageLabels: {
        Multilingual: string;
        Chinese: string;
        English: string;
        Japanese: string;
        'Chinese-English': string;
        'Japanese-English': string;
    };
    defaultSettings: {
        provider_endpoint: string;
        language: string;
        cha_name: string;
        character_emotion: string;
        speed: number;
        top_k: number;
        top_p: number;
        temperature: number;
        batch_size: number;
        stream: boolean;
        stream_chunk_size: number;
    };
    fetchCharacterList(): Promise<void>;
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    getVoice(voiceName: any): Promise<{
        name: any;
        voice_id: any;
        preview_url: boolean;
        lang: string;
    }>;
    generateTts(text: any, voiceId: any): Promise<string>;
    fetchTtsVoiceObjects(): Promise<{
        name: any;
        voice_id: any;
        preview_url: boolean;
        lang: string;
    }[]>;
    fetchTtsGeneration(inputText: any, voiceId: any): Promise<string>;
    fetchTtsFromHistory(history_item_id: any): Promise<any>;
}
//# sourceMappingURL=gsvi.d.ts.map