export namespace slashCommandReturnHelper {
    let _: boolean;
    function enumList({ allowPipe, allowObject, allowChat, allowPopup, allowTextVersion }?: {
        allowPipe?: boolean;
        allowObject?: boolean;
        allowChat?: boolean;
        allowPopup?: boolean;
        allowTextVersion?: boolean;
    }): SlashCommandEnumValue[];
    /**
     * Handles the return value based on the specified type
     *
     * @param {SlashCommandReturnType} type The type of return
     * @param {object|number|string} value The value to return
     * @param {object} [options={}] Options
     * @param {(o: object) => string} [options.objectToStringFunc=null] Function to convert the object to a string, if object was provided and 'object' was not the chosen return type
     * @param {(o: object) => string} [options.objectToHtmlFunc=null] Analog to 'objectToStringFunc', which will be used here if not provided - but can do a different string layout if HTML is requested
     * @returns {Promise<*>} The processed return value
     */
    function doReturn(type: SlashCommandReturnType, value: object | number | string, { objectToStringFunc, objectToHtmlFunc }?: {
        objectToStringFunc?: (o: object) => string;
        objectToHtmlFunc?: (o: object) => string;
    }): Promise<any>;
}
export type SlashCommandReturnType = "pipe" | "object" | "chat-html" | "chat-text" | "popup-html" | "popup-text" | "toast-html" | "toast-text" | "console" | "none";
import { SlashCommandEnumValue } from './SlashCommandEnumValue.js';
//# sourceMappingURL=SlashCommandReturnHelper.d.ts.map