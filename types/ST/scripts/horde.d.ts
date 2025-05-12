export namespace horde_settings {
    let models: any[];
    let auto_adjust_response_length: boolean;
    let auto_adjust_context_length: boolean;
    let trusted_workers_only: boolean;
}
/** Generates text using the Horde API.
 * @param {string} prompt
 * @param params
 * @param signal
 * @param reportProgress
 * @returns {Promise<{text: *, workerName: string}>}
 * @throws {Error}
 */
export function generateHorde(prompt: string, params: any, signal: any, reportProgress: any): Promise<{
    text: any;
    workerName: string;
}>;
/**
 * Checks if Horde is online.
 * @returns {Promise<boolean>} True if Horde is online, false otherwise
 */
export function checkHordeStatus(): Promise<boolean>;
export function loadHordeSettings(settings: any): void;
export function adjustHordeGenerationParams(max_context_length: any, max_length: any): Promise<{
    maxContextLength: any;
    maxLength: any;
}>;
/**
 * Displays the available models in the Horde model selection dropdown.
 * @param {boolean} force Force refresh of the models
 */
export function getHordeModels(force: boolean): Promise<void>;
export const MIN_LENGTH: 16;
//# sourceMappingURL=horde.d.ts.map