export function visualNovelUpdateLayers(container: any): Promise<void>;
/**
 * Update the expression for the given character.
 *
 * @param {string} spriteFolderName The character name, optionally with a sprite folder override, e.g. "folder/expression".
 * @param {string} expression The expression label, e.g. "amusement", "joy", etc.
 * @param {Object} [options] Additional options
 * @param {boolean} [options.force=false] If true, the expression will be sent even if it is the same as the current expression.
 * @param {boolean} [options.vnMode=null] If true, the expression will be sent in Visual Novel mode. If null, it will be determined by the current chat mode.
 * @param {string?} [options.overrideSpriteFile=null] - Set if a specific sprite file should be used. Must be sprite file name.
 */
export function sendExpressionCall(spriteFolderName: string, expression: string, { force, vnMode, overrideSpriteFile }?: {
    force?: boolean;
    vnMode?: boolean;
    overrideSpriteFile?: string | null;
}): Promise<void>;
/**
 * Retrieves the label of an expression via classification based on the provided text.
 * Optionally allows to override the expressions API being used.
 * @param {string} text - The text to classify and retrieve the expression label for.
 * @param {EXPRESSION_API} [expressionsApi=extension_settings.expressions.api] - The expressions API to use for classification.
 * @param {object} [options={}] - Optional arguments.
 * @param {boolean?} [options.filterAvailable=null] - Whether to filter available expressions. If not specified, uses the extension setting.
 * @param {string?} [options.customPrompt=null] - The custom prompt to use for classification.
 * @returns {Promise<string?>} - The label of the expression.
 */
export function getExpressionLabel(text: string, expressionsApi?: EXPRESSION_API, { filterAvailable, customPrompt }?: {
    filterAvailable?: boolean | null;
    customPrompt?: string | null;
}): Promise<string | null>;
export function getExpressionsList({ filterAvailable }?: {
    filterAvailable?: boolean;
}): Promise<string[]>;
/** @type {{[characterName: string]: string}} */
export let lastExpression: {
    [characterName: string]: string;
};
/**
 * Expression definition with label and file path
 */
export type Expression = {
    /**
     * The label of the expression
     */
    label: string;
    /**
     * One or more images to represent this expression
     */
    files: ExpressionImage[];
};
/**
 * An expression image
 */
export type ExpressionImage = {
    /**
     * - The expression
     */
    expression: string;
    /**
     * - If the expression is added by user
     */
    isCustom?: boolean;
    /**
     * - The filename with extension
     */
    fileName: string;
    /**
     * - The title for the image
     */
    title: string;
    /**
     * - The image source / full path
     */
    imageSrc: string;
    /**
     * - The type of the image
     */
    type: "success" | "additional" | "failure";
};
type EXPRESSION_API = number;
declare namespace EXPRESSION_API {
    let local: number;
    let extras: number;
    let llm: number;
    let webllm: number;
    let none: number;
}
/**
* @typedef {object} Expression Expression definition with label and file path
* @property {string} label The label of the expression
* @property {ExpressionImage[]} files One or more images to represent this expression
*/
/**
 * @typedef {object} ExpressionImage An expression image
 * @property {string} expression - The expression
 * @property {boolean} [isCustom=false] - If the expression is added by user
 * @property {string} fileName - The filename with extension
 * @property {string} title - The title for the image
 * @property {string} imageSrc - The image source / full path
 * @property {'success' | 'additional' | 'failure'} type - The type of the image
 */
export const MODULE_NAME: "expressions";
export {};
//# sourceMappingURL=index.d.ts.map