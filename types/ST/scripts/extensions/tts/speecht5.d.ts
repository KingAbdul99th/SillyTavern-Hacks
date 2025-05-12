export class SpeechT5TtsProvider {
    settings: any;
    ready: boolean;
    voices: any[];
    separator: string;
    audioElement: HTMLAudioElement;
    defaultSettings: {
        speakers: any[];
        speaker: string;
        voiceMap: {};
    };
    get settingsHtml(): string;
    onSettingsChange(): void;
    previewTtsVoice(voiceId: any): Promise<void>;
    loadSettings(settings: any): Promise<void>;
    checkReady(): Promise<void>;
    getVoice(voiceName: any): Promise<any>;
    generateTts(text: any, voiceId: any): Promise<Response>;
    fetchTtsVoiceObjects(): Promise<any>;
    fetchTtsGeneration(inputText: any, voiceId: any): Promise<Response>;
    fetchTtsFromHistory(history_item_id: any): Promise<any>;
}
//# sourceMappingURL=speecht5.d.ts.map