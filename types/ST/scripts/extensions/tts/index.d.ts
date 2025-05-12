export function getPreviewString(lang: any): any;
export function saveTtsProviderSettings(): void;
/**
 * Init voiceMapEntries for character select list.
 * If an initialization is already in progress, it returns the existing Promise instead of starting a new one.
 * @param {boolean} unrestricted - If true, will include all characters in voiceMapEntries, even if they are not in the current chat.
 * @returns {Promise} A promise that resolves when the initialization is complete.
 */
export function initVoiceMap(unrestricted?: boolean): Promise<any>;
/**
 * Audio job object
 */
export type AudioJob = {
    audioBlob: Blob | string;
    char: string;
};
//# sourceMappingURL=index.d.ts.map