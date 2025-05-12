export class SBVits2TtsProvider {
    settings: any;
    ready: boolean;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    /**
     * Perform any text processing before passing to TTS engine.
     * @param {string} text Input text
     * @returns {string} Processed text
     */
    processText(text: string): string;
    languageLabels: {
        Chinese: string;
        English: string;
        Japanese: string;
    };
    langKey2LangCode: {
        ZH: string;
        EN: string;
        JP: string;
    };
    defaultSettings: {
        provider_endpoint: string;
        sdp_ratio: number;
        noise: number;
        noisew: number;
        length: number;
        language: string;
        auto_split: boolean;
        split_interval: number;
        assist_text: string;
        assist_text_weight: number;
        style: string;
        style_weight: number;
        reference_audio_path: string;
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    /**
     * Get a voice from the TTS provider.
     * @param {string} voiceName Voice name to get
     * @returns {Promise<Object>} Voice object
     */
    getVoice(voiceName: string): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<{
        name: string;
        voice_id: string;
        preview_url: boolean;
    }[]>;
    changeTTSSettings(): Promise<void>;
    /**
     * Fetch TTS generation from the API.
     * @param {string} inputText Text to generate TTS for
     * @param {string} voiceId Voice ID to use (model_id-speaker_id-style)
     * @returns {Promise<Response>} Fetch response
     */
    fetchTtsGeneration(inputText: string, voiceId: string): Promise<Response>;
    /**
     * Preview TTS for a given voice ID.
     * @param {string} id Voice ID
     */
    previewTtsVoice(id: string): Promise<void>;
    fetchTtsFromHistory(history_item_id: any): Promise<any>;
}
//# sourceMappingURL=sbvits2.d.ts.map