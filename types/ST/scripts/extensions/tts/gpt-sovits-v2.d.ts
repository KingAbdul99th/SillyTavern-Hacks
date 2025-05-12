export class GptSovitsV2Provider {
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
    audioFormats: string[];
    languageLabels: {
        Auto: string;
    };
    langKey2LangCode: {
        zh: string;
        en: string;
        ja: string;
        ko: string;
    };
    defaultSettings: {
        provider_endpoint: string;
        format: string;
        lang: string;
        streaming: boolean;
        text_lang: string;
        prompt_lang: string;
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    getVoice(voiceName: any): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<string | Response>;
    fetchTtsVoiceObjects(): Promise<any>;
    changeTTSSettings(): Promise<void>;
    /**
     * Fetch TTS generation from the API.
     * @param {string} inputText Text to generate TTS for
     * @param {string} voiceId Voice ID to use (model_type&speaker_id))
     * @returns {Promise<Response|string>} Fetch response
     */
    fetchTtsGeneration(inputText: string, voiceId: string, lang?: any, forceNoStreaming?: boolean): Promise<Response | string>;
    fetchTtsFromHistory(history_item_id: any): Promise<any>;
}
//# sourceMappingURL=gpt-sovits-v2.d.ts.map