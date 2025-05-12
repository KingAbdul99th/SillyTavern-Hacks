declare function initializeTts(settings: any): Promise<boolean>;
declare function generateTts(text: any, voiceId: any, speakingRate: any): Promise<any>;
/** @type {import('./lib/kokoro.web.js').KokoroTTS} */
declare let tts: import("./lib/kokoro.web.js").KokoroTTS;
/** @type {boolean} */
declare let ready: boolean;
/** @type {string[]} */
declare let voices: string[];
//# sourceMappingURL=kokoro-worker.d.ts.map