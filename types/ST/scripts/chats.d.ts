/**
 * Mark a range of messages as hidden ("is_system") or not.
 * @param {number} start Starting message ID
 * @param {number} end Ending message ID (inclusive)
 * @param {boolean} unhide If true, unhide the messages instead.
 * @param {string} nameFitler Optional name filter
 * @returns {Promise<void>}
 */
export function hideChatMessageRange(start: number, end: number, unhide: boolean, nameFitler?: string): Promise<void>;
/**
 * Mark message as hidden (system message).
 * @deprecated Use hideChatMessageRange.
 * @param {number} messageId Message ID
 * @param {JQuery<Element>} _messageBlock Unused
 * @returns {Promise<void>}
 */
export function hideChatMessage(messageId: number, _messageBlock: JQuery<Element>): Promise<void>;
/**
 * Mark message as visible (non-system message).
 * @deprecated Use hideChatMessageRange.
 * @param {number} messageId Message ID
 * @param {JQuery<Element>} _messageBlock Unused
 * @returns {Promise<void>}
 */
export function unhideChatMessage(messageId: number, _messageBlock: JQuery<Element>): Promise<void>;
/**
 * Adds a file attachment to the message.
 * @param {object} message Message object
 * @returns {Promise<void>} A promise that resolves when file is uploaded.
 */
export function populateFileAttachment(message: object, inputId?: string): Promise<void>;
/**
 * Uploads file to the server.
 * @param {string} fileName
 * @param {string} base64Data
 * @returns {Promise<string>} File URL
 */
export function uploadFileAttachment(fileName: string, base64Data: string): Promise<string>;
/**
 * Downloads file from the server.
 * @param {string} url File URL
 * @returns {Promise<string>} File text
 */
export function getFileAttachment(url: string): Promise<string>;
export function hasPendingFileAttachment(): boolean;
/**
 * Appends file content to the message text.
 * @param {object} message Message object
 * @param {string} messageText Message text
 * @returns {Promise<string>} Message text with file content appended.
 */
export function appendFileContent(message: object, messageText: string): Promise<string>;
/**
 * Replaces style tags in the message text with custom tags with encoded content.
 * @param {string} text
 * @returns {string} Encoded message text
 * @copyright https://github.com/kwaroran/risuAI
 */
export function encodeStyleTags(text: string): string;
/**
 * Sanitizes custom style tags in the message text to prevent DOM pollution.
 * @param {string} text Message text
 * @returns {string} Sanitized message text
 * @copyright https://github.com/kwaroran/risuAI
 */
export function decodeStyleTags(text: string): string;
export function getCurrentEntityId(): any;
export function isExternalMediaAllowed(): boolean;
/**
 * Deletes an attachment from the server and the chat.
 * @param {FileAttachment} attachment Attachment to delete
 * @param {string} source Source of the attachment
 * @param {function} callback Callback function
 * @param {boolean} [confirm=true] If true, show a confirmation dialog
 * @returns {Promise<void>} A promise that resolves when the attachment is deleted.
 */
export function deleteAttachment(attachment: FileAttachment, source: string, callback: Function, confirm?: boolean): Promise<void>;
/**
 * Uploads a file attachment to the server.
 * @param {File} file File to upload
 * @param {string} target Target for the attachment
 * @returns {Promise<string>} Path to the uploaded file
 */
export function uploadFileAttachmentToServer(file: File, target: string): Promise<string>;
/**
 * Gets all currently available attachments. Ignores disabled attachments by default.
 * @param {boolean} [includeDisabled=false] If true, include disabled attachments
 * @returns {FileAttachment[]} List of attachments
 */
export function getDataBankAttachments(includeDisabled?: boolean): FileAttachment[];
/**
 * Gets all attachments for a specific source. Includes disabled attachments by default.
 * @param {string} source Attachment source
 * @param {boolean} [includeDisabled=true] If true, include disabled attachments
 * @returns {FileAttachment[]} List of attachments
 */
export function getDataBankAttachmentsForSource(source: string, includeDisabled?: boolean): FileAttachment[];
export function preserveNeutralChat(): void;
export function restoreNeutralChat(): void;
/**
 * Registers a file converter function.
 * @param {string} mimeType MIME type
 * @param {ConverterFunction} converter Function to convert file
 * @returns {void}
 */
export function registerFileConverter(mimeType: string, converter: ConverterFunction): void;
export type FileAttachment = {
    /**
     * File URL
     */
    url: string;
    /**
     * File size
     */
    size: number;
    /**
     * File name
     */
    name: string;
    /**
     * Timestamp
     */
    created: number;
    /**
     * File text
     */
    text?: string;
};
export type ConverterFunction = Function;
//# sourceMappingURL=chats.d.ts.map