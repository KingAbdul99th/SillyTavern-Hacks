export class EdgeTtsProvider {
    settings: any;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    defaultSettings: {
        voiceMap: {};
        rate: number;
        provider: string;
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    loadSettings(settings: any): Promise<void>;
    /**
    * Perform a simple readiness check by trying to fetch voiceIds
    */
    checkReady(): Promise<void>;
    onRefreshClick(): Promise<void>;
    /**
     * Get a voice from the TTS provider.
     * @param {string} voiceName Voice name to get
     * @returns {Promise<Object>} Voice object
     */
    getVoice(voiceName: string): Promise<any>;
    /**
     * Generate TTS for a given text.
     * @param {string} text Text to generate TTS for
     * @param {string} voiceId Voice ID to use
     * @returns {Promise<Response>} Fetch response
     */
    generateTts(text: string, voiceId: string): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<any>;
    /**
     * Preview TTS for a given voice ID.
     * @param {string} id Voice ID
     */
    previewTtsVoice(id: string): Promise<void>;
    /**
     * Fetch TTS generation from the API.
     * @param {string} inputText Text to generate TTS for
     * @param {string} voiceId Voice ID to use
     * @returns {Promise<Response>} Fetch response
     */
    fetchTtsGeneration(inputText: string, voiceId: string): Promise<Response>;
    /**
     * Perform a fetch request using the configured provider.
     * @param {string} url URL string
     * @param {any} options Request options
     * @returns {Promise<Response>} Fetch response
     */
    doFetch(url: string, options: any): Promise<Response>;
    /**
     * Get the URL for the TTS generation endpoint.
     * @returns {string} URL string
     */
    getGenerateUrl(): string;
    /**
     * Get the URL for the TTS voices endpoint.
     * @returns {string} URL object or string
     */
    getVoicesUrl(): string;
    throwIfModuleMissing(): Promise<void>;
    isPluginAvailable(): Promise<boolean>;
}
//# sourceMappingURL=edge.d.ts.map