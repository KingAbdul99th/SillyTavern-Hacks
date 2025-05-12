/**
 * Merges properties of two objects. If the property is an object, it will be merged recursively.
 * @param {object} target The target object
 * @param {object} source The source object
 * @returns {object} Merged object
 */
export function deepMerge(target: object, source: object): object;
export function escapeHtml(str: any): string;
/**
 * Make string safe for use as a CSS selector.
 * @param {string} str String to sanitize
 * @param {string} replacement Replacement for invalid characters
 * @returns {string} Sanitized string
 */
export function sanitizeSelector(str: string, replacement?: string): string;
export function isValidUrl(value: any): boolean;
/**
 * Converts string to a value of a given type. Includes pythonista-friendly aliases.
 * @param {string|SlashCommandClosure} value String value
 * @param {string} type Type to convert to
 * @returns {any} Converted value
 */
export function convertValueType(value: string | SlashCommandClosure, type: string): any;
/**
 * Parses ranges like 10-20 or 10.
 * Range is inclusive. Start must be less than end.
 * Returns null if invalid.
 * @param {string} input The input string.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {{ start: number, end: number }} The parsed range.
 */
export function stringToRange(input: string, min: number, max: number): {
    start: number;
    end: number;
};
/**
 * Determines if a value is unique in an array.
 * @param {any} value Current value.
 * @param {number} index Current index.
 * @param {any} array The array being processed.
 * @returns {boolean} True if the value is unique, false otherwise.
 */
export function onlyUnique(value: any, index: number, array: any): boolean;
/**
 * Determines if a value is unique in an array of objects.
 * @param {any} value Current value.
 * @param {number} index Current index.
 * @param {any[]} array The array being processed.
 * @returns {boolean} True if the value is unique, false otherwise.
 */
export function onlyUniqueJson(value: any, index: number, array: any[]): boolean;
/**
 * Removes the first occurrence of a specified item from an array
 *
 * @param {*[]} array - The array from which to remove the item
 * @param {*} item - The item to remove from the array
 * @returns {boolean} - Returns true if the item was successfully removed, false otherwise.
 */
export function removeFromArray(array: any[], item: any): boolean;
/**
 * Checks if a string only contains digits.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string only contains digits, false otherwise.
 * @example
 * isDigitsOnly('123'); // true
 * isDigitsOnly('abc'); // false
 */
export function isDigitsOnly(str: string): boolean;
/**
 * Gets a drag delay for sortable elements. This is to prevent accidental drags when scrolling.
 * @returns {number} The delay in milliseconds. 50ms for desktop, 750ms for mobile.
 */
export function getSortableDelay(): number;
export function bufferToBase64(buffer: any): Promise<any>;
/**
 * Rearranges an array in a random order.
 * @param {any[]} array The array to shuffle.
 * @returns {any[]} The shuffled array.
 * @example
 * shuffle([1, 2, 3]); // [2, 3, 1]
 */
export function shuffle(array: any[]): any[];
/**
 * Downloads a file to the user's devices.
 * @param {BlobPart} content File content to download.
 * @param {string} fileName File name.
 * @param {string} contentType File content type.
 */
export function download(content: BlobPart, fileName: string, contentType: string): void;
/**
 * Fetches a file by URL and parses its contents as data URI.
 * @param {string} url The URL to fetch.
 * @param {any} params Fetch parameters.
 * @returns {Promise<string>} A promise that resolves to the data URI.
 */
export function urlContentToDataUri(url: string, params: any): Promise<string>;
/**
 * Returns a promise that resolves to the file's text.
 * @param {Blob} file The file to read.
 * @returns {Promise<string>} A promise that resolves to the file's text.
 */
export function getFileText(file: Blob): Promise<string>;
/**
 * Returns a promise that resolves to the file's array buffer.
 * @param {Blob} file The file to read.
 */
export function getFileBuffer(file: Blob): Promise<any>;
/**
 * Returns a promise that resolves to the base64 encoded string of a file.
 * @param {Blob} file The file to read.
 * @returns {Promise<string>} A promise that resolves to the base64 encoded string.
 */
export function getBase64Async(file: Blob): Promise<string>;
/**
 * Parses a file blob as a JSON object.
 * @param {Blob} file The file to read.
 * @returns {Promise<any>} A promise that resolves to the parsed JSON object.
 */
export function parseJsonFile(file: Blob): Promise<any>;
/**
 * Calculates a hash code for a string.
 * @param {string} str The string to hash.
 * @param {number} [seed=0] The seed to use for the hash.
 * @returns {number} The hash code.
 */
export function getStringHash(str: string, seed?: number): number;
/**
 * Copy text to clipboard. Use navigator.clipboard.writeText if available, otherwise use document.execCommand.
 * @param {string} text - The text to copy to the clipboard.
 * @returns {Promise<void>} A promise that resolves when the text has been copied to the clipboard.
 */
export function copyText(text: string): Promise<void>;
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 * @param {function} func The function to debounce.
 * @param {debounce_timeout|number} [timeout=debounce_timeout.default] The timeout based on the common enum values, or in milliseconds.
 * @returns {function} The debounced function.
 */
export function debounce(func: Function, timeout?: debounce_timeout | number): Function;
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 * @param {Function} func The function to debounce.
 * @param {Number} [timeout=300] The timeout in milliseconds.
 * @returns {Function} The debounced function.
 */
export function debounceAsync(func: Function, timeout?: number): Function;
/**
 * Cancels a scheduled debounced function.
 * Does nothing if the function is not debounced or not scheduled.
 * @param {function} func The function to cancel. Either the original or the debounced function.
 */
export function cancelDebounce(func: Function): void;
/**
 * Creates a throttled function that only invokes func at most once per every limit milliseconds.
 * @param {function} func The function to throttle.
 * @param {number} [limit=300] The limit in milliseconds.
 * @returns {function} The throttled function.
 */
export function throttle(func: Function, limit?: number): Function;
/**
 * Creates a debounced throttle function that only invokes func at most once per every limit milliseconds.
 * @param {function} func The function to throttle.
 * @param {number} [limit=300] The limit in milliseconds.
 * @returns {function} The throttled function.
 */
export function debouncedThrottle(func: Function, limit?: number): Function;
/**
 * Checks if an element is in the viewport.
 * @param {Element} el The element to check.
 * @returns {boolean} True if the element is in the viewport, false otherwise.
 */
export function isElementInViewport(el: Element): boolean;
/**
 * Returns a name that is unique among the names that exist.
 * @param {string} name The name to check.
 * @param {{ (y: any): boolean; }} exists Function to check if name exists.
 * @returns {string} A unique name.
 */
export function getUniqueName(name: string, exists: {
    (y: any): boolean;
}): string;
/**
 * Returns a promise that resolves after the specified number of milliseconds.
 * @param {number} ms The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the specified number of milliseconds.
 */
export function delay(ms: number): Promise<void>;
/**
 * Checks if an array is a subset of another array.
 * @param {any[]} a Array A
 * @param {any[]} b Array B
 * @returns {boolean} True if B is a subset of A, false otherwise.
 */
export function isSubsetOf(a: any[], b: any[]): boolean;
/**
 * Increments the trailing number in a string.
 * @param {string} str The string to process.
 * @returns {string} The string with the trailing number incremented by 1.
 * @example
 * incrementString('Hello, world! 1'); // 'Hello, world! 2'
 */
export function incrementString(str: string): string;
/**
 * Formats a string using the specified arguments.
 * @param {string} format The format string.
 * @returns {string} The formatted string.
 * @example
 * stringFormat('Hello, {0}!', 'world'); // 'Hello, world!'
 */
export function stringFormat(format: string, ...args: any[]): string;
/**
 * Save the caret position in a contenteditable element.
 * @param {Element} element The element to save the caret position of.
 * @returns {{ start: number, end: number }} An object with the start and end offsets of the caret.
 */
export function saveCaretPosition(element: Element): {
    start: number;
    end: number;
};
/**
 * Restore the caret position in a contenteditable element.
 * @param {Element} element The element to restore the caret position of.
 * @param {{ start: any; end: any; }} position An object with the start and end offsets of the caret.
 */
export function restoreCaretPosition(element: Element, position: {
    start: any;
    end: any;
}): void;
export function resetScrollHeight(element: any): Promise<void>;
/**
 * Sets the height of an element to its scroll height.
 * @param {JQuery<HTMLElement>} element The element to initialize the scroll height of.
 * @returns {Promise<void>} A promise that resolves when the scroll height has been initialized.
 */
export function initScrollHeight(element: JQuery<HTMLElement>): Promise<void>;
/**
 * Compares elements by their CSS order property. Used for sorting.
 * @param {any} a The first element.
 * @param {any} b The second element.
 * @returns {number} A negative number if a is before b, a positive number if a is after b, or 0 if they are equal.
 */
export function sortByCssOrder(a: any, b: any): number;
/**
 * Trims leading and trailing whitespace from the input string based on a configuration setting.
 * @param {string} input - The string to be trimmed
 * @returns {string} The trimmed string if trimming is enabled; otherwise, returns the original string
 */
export function trimSpaces(input: string): string;
/**
 * Trims a string to the end of a nearest sentence.
 * @param {string} input The string to trim.
 * @returns {string} The trimmed string.
 * @example
 * trimToEndSentence('Hello, world! I am from'); // 'Hello, world!'
 */
export function trimToEndSentence(input: string): string;
export function trimToStartSentence(input: any): any;
/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
export function humanFileSize(bytes: any, si?: boolean, dp?: number): string;
/**
 * Counts the number of occurrences of a character in a string.
 * @param {string} string The string to count occurrences in.
 * @param {string} character The character to count occurrences of.
 * @returns {number} The number of occurrences of the character in the string.
 * @example
 * countOccurrences('Hello, world!', 'l'); // 3
 * countOccurrences('Hello, world!', 'x'); // 0
 */
export function countOccurrences(string: string, character: string): number;
/**
 * Checks if a string is "true" value.
 * @param {string} arg String to check
 * @returns {boolean} True if the string is true, false otherwise.
 */
export function isTrueBoolean(arg: string): boolean;
/**
 * Checks if a string is "false" value.
 * @param {string} arg String to check
 * @returns {boolean} True if the string is false, false otherwise.
 */
export function isFalseBoolean(arg: string): boolean;
/**
 * Parses an array either as a comma-separated string or as a JSON array.
 * @param {string} value String to parse
 * @returns {string[]} The parsed array.
 */
export function parseStringArray(value: string): string[];
/**
 * Checks if a number is odd.
 * @param {number} number The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 * @example
 * isOdd(3); // true
 * isOdd(4); // false
 */
export function isOdd(number: number): boolean;
/**
 * Compare two moment objects for sorting.
 * @param {import('moment').Moment} a The first moment object.
 * @param {import('moment').Moment} b The second moment object.
 * @returns {number} A negative number if a is before b, a positive number if a is after b, or 0 if they are equal.
 */
export function sortMoments(a: import("moment").Moment, b: import("moment").Moment): number;
/**
 * Cached version of moment() to avoid re-parsing the same date strings.
 * Important: Moment objects are mutable, so use clone() before modifying them!
 * @param {string|number} timestamp String or number representing a date.
 * @returns {import('moment').Moment} Moment object
 */
export function timestampToMoment(timestamp: string | number): import("moment").Moment;
/** Split string to parts no more than length in size.
 * @param {string} input The string to split.
 * @param {number} length The maximum length of each part.
 * @param {string[]} delimiters The delimiters to use when splitting the string.
 * @returns {string[]} The split string.
 * @example
 * splitRecursive('Hello, world!', 3); // ['Hel', 'lo,', 'wor', 'ld!']
*/
export function splitRecursive(input: string, length: number, delimiters?: string[]): string[];
/**
 * Checks if a string is a valid data URL.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid data URL, false otherwise.
 * @example
 * isDataURL('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'); // true
 */
export function isDataURL(str: string): boolean;
/**
 * Gets the size of an image from a data URL.
 * @param {string} dataUrl Image data URL
 * @returns {Promise<{ width: number, height: number }>} Image size
 */
export function getImageSizeFromDataURL(dataUrl: string): Promise<{
    width: number;
    height: number;
}>;
/**
 * Gets the filename of the character avatar without extension
 * @param {number?} [chid=null] - Character ID. If not provided, uses the current character ID
 * @param {object} [options={}] - Options arguments
 * @param {string?} [options.manualAvatarKey=null] - Manually take the following avatar key, instead of using the chid to determine the name
 * @returns {string?} The filename of the character avatar without extension, or null if the character ID is invalid
 */
export function getCharaFilename(chid?: number | null, { manualAvatarKey }?: {
    manualAvatarKey?: string | null;
}): string | null;
/**
 * Extracts words from a string.
 * @param {string} value The string to extract words from.
 * @returns {string[]} The extracted words.
 * @example
 * extractAllWords('Hello, world!'); // ['hello', 'world']
 */
export function extractAllWords(value: string): string[];
/**
 * Escapes a string for use in a regular expression.
 * @param {string} string The string to escape.
 * @returns {string} The escaped string.
 * @example
 * escapeRegex('^Hello$'); // '\\^Hello\\$'
 */
export function escapeRegex(string: string): string;
/**
 * Instantiates a regular expression from a string.
 * @param {string} input The input string.
 * @returns {RegExp} The regular expression instance.
 * @copyright Originally from: https://github.com/IonicaBizau/regex-parser.js/blob/master/lib/index.js
 */
export function regexFromString(input: string): RegExp;
/**
 * Extracts a JSON object from a PNG file.
 * Taken from https://github.com/LostRuins/lite.koboldai.net/blob/main/index.html
 * Adapted from png-chunks-extract under MIT license
 * @param {Uint8Array} data The PNG data to extract the JSON from.
 * @param {string} identifier The identifier to look for in the PNG tEXT data.
 * @returns {object} The extracted JSON object.
 */
export function extractDataFromPng(data: Uint8Array, identifier?: string): object;
/**
 * Sends a request to the server to sanitize a given filename
 *
 * @param {string} fileName - The name of the file to sanitize
 * @returns {Promise<string>} A Promise that resolves to the sanitized filename if successful, or rejects with an error message if unsuccessful
 */
export function getSanitizedFilename(fileName: string): Promise<string>;
/**
 * Sends a base64 encoded image to the backend to be saved as a file.
 *
 * @param {string} base64Data - The base64 encoded image data.
 * @param {string} characterName - The character name to determine the sub-directory for saving.
 * @param {string} ext - The file extension for the image (e.g., 'jpg', 'png', 'webp').
 *
 * @returns {Promise<string>} - Resolves to the saved image's path on the server.
 *                              Rejects with an error if the upload fails.
 */
export function saveBase64AsFile(base64Data: string, characterName: string, filename: string, ext: string): Promise<string>;
/**
 * Loads either a CSS or JS file and appends it to the appropriate document section.
 *
 * @param {string} url - The URL of the file to be loaded.
 * @param {string} type - The type of file to load: "css" or "js".
 * @returns {Promise} - Resolves when the file has loaded, rejects if there's an error or invalid type.
 */
export function loadFileToDocument(url: string, type: string): Promise<any>;
/**
 * Ensure that we can import war crime image formats like WEBP and AVIF.
 * @param {File} file Input file
 * @returns {Promise<File>} A promise that resolves to the supported file.
 */
export function ensureImageFormatSupported(file: File): Promise<File>;
/**
 * Converts an image file to a given format.
 * @param {File} inputFile File to convert
 * @param {string} type Target file type
 * @returns {Promise<File>} A promise that resolves to the converted file.
 */
export function convertImageFile(inputFile: File, type?: string): Promise<File>;
/**
 * Creates a thumbnail from a data URL.
 * @param {string} dataUrl The data URL encoded data of the image.
 * @param {number|null} maxWidth The maximum width of the thumbnail.
 * @param {number|null} maxHeight The maximum height of the thumbnail.
 * @param {string} [type='image/jpeg'] The type of the thumbnail.
 * @returns {Promise<string>} A promise that resolves to the thumbnail data URL.
 */
export function createThumbnail(dataUrl: string, maxWidth?: number | null, maxHeight?: number | null, type?: string): Promise<string>;
/**
 * Waits for a condition to be true. Throws an error if the condition is not true within the timeout.
 * @param {{ (): boolean; }} condition The condition to wait for.
 * @param {number} [timeout=1000] The timeout in milliseconds.
 * @param {number} [interval=100] The interval in milliseconds.
 * @returns {Promise<void>} A promise that resolves when the condition is true.
 */
export function waitUntilCondition(condition: {
    (): boolean;
}, timeout?: number, interval?: number): Promise<void>;
/**
 * Returns a UUID v4 string.
 * @returns {string} A UUID v4 string.
 * @example
 * uuidv4(); // '3e2fd9e1-0a7a-4f6d-9aaf-8a7a4babe7eb'
 */
export function uuidv4(): string;
/**
 * Collapses multiple spaces in a strings into one.
 * @param {string} s String to process
 * @returns {string} String with collapsed spaces
 */
export function collapseSpaces(s: string): string;
/**
 * Uses Readability.js to parse the text from a web page.
 * @param {Document} document HTML document
 * @param {string} [textSelector='body'] The fallback selector for the text to parse.
 * @returns {Promise<string>} A promise that resolves to the parsed text.
 */
export function getReadableText(document: Document, textSelector?: string): Promise<string>;
/**
 * Use pdf.js to load and parse text from PDF pages
 * @param {Blob} blob PDF file blob
 * @returns {Promise<string>} A promise that resolves to the parsed text.
 */
export function extractTextFromPDF(blob: Blob): Promise<string>;
/**
 * Use DOMParser to load and parse text from HTML
 * @param {Blob} blob HTML content blob
 * @returns {Promise<string>} A promise that resolves to the parsed text.
 */
export function extractTextFromHTML(blob: Blob, textSelector?: string): Promise<string>;
/**
 * Use showdown to load and parse text from Markdown
 * @param {Blob} blob Markdown content blob
 * @returns {Promise<string>} A promise that resolves to the parsed text.
 */
export function extractTextFromMarkdown(blob: Blob): Promise<string>;
export function extractTextFromEpub(blob: any): Promise<any>;
/**
 * Extracts text from an Office document using the server plugin.
 * @param {File} blob File to extract text from
 * @returns {Promise<string>} A promise that resolves to the extracted text.
 */
export function extractTextFromOffice(blob: File): Promise<string>;
/**
 * Sets a value in an object by a path.
 * @param {object} obj Object to set value in
 * @param {string} path Key path
 * @param {any} value Value to set
 * @returns {void}
 */
export function setValueByPath(obj: object, path: string, value: any): void;
/**
 * Flashes the given HTML element via CSS flash animation for a defined period
 * @param {JQuery<HTMLElement>} element - The element to flash
 * @param {number} timespan - A number in milliseconds how the flash should last (default is 2000ms.  Multiples of 1000ms work best, as they end with the flash animation being at 100% opacity)
 */
export function flashHighlight(element: JQuery<HTMLElement>, timespan?: number): void;
/**
 * Checks if the given control has an animation applied to it
 *
 * @param {HTMLElement} control - The control element to check for animation
 * @returns {boolean} Whether the control has an animation applied
 */
export function hasAnimation(control: HTMLElement): boolean;
/**
 * Run an action once an animation on a control ends. If the control has no animation, the action will be executed immediately.
 * The action will be executed after the animation ends or after the timeout, whichever comes first.
 * @param {HTMLElement} control - The control element to listen for animation end event
 * @param {(control:*?) => void} callback - The callback function to be executed when the animation ends
 * @param {number} [timeout=500] - The timeout in milliseconds to wait for the animation to end before executing the callback
 */
export function runAfterAnimation(control: HTMLElement, callback: (control: any | null) => void, timeout?: number): void;
/**
 * A common base function for case-insensitive and accent-insensitive string comparisons.
 *
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @param {(a:string,b:string)=>T} comparisonFunction - The function to use for the comparison.
 * @returns {T} - The result of the comparison.
 * @template T
 */
export function compareIgnoreCaseAndAccents<T>(a: string, b: string, comparisonFunction: (a: string, b: string) => T): T;
/**
 * Performs a case-insensitive and accent-insensitive substring search.
 * This function normalizes the strings to remove diacritical marks and converts them to lowercase to ensure the search is insensitive to case and accents.
 *
 * @param {string} text - The text in which to search for the substring
 * @param {string} searchTerm - The substring to search for in the text
 * @returns {boolean} true if the searchTerm is found within the text, otherwise returns false
 */
export function includesIgnoreCaseAndAccents(text: string, searchTerm: string): boolean;
/**
 * Performs a case-insensitive and accent-insensitive equality check.
 * This function normalizes the strings to remove diacritical marks and converts them to lowercase to ensure the search is insensitive to case and accents.
 *
 * @param {string} a - The first string to compare
 * @param {string} b - The second string to compare
 * @returns {boolean} true if the strings are equal, otherwise returns false
 */
export function equalsIgnoreCaseAndAccents(a: string, b: string): boolean;
/**
 * Performs a case-insensitive and accent-insensitive sort.
 * @param {string} a - The first string to compare
 * @param {string} b - The second string to compare
 * @returns {number} -1 if a < b, 1 if a > b, 0 if a === b
 */
export function sortIgnoreCaseAndAccents(a: string, b: string): number;
/**
 * @typedef {object} Select2Option The option object for select2 controls
 * @property {string} id - The unique ID inside this select
 * @property {string} text - The text for this option
 * @property {number?} [count] - Optionally show the count how often that option was chosen already
 */
/**
 * Returns a unique hash as ID for a select2 option text
 *
 * @param {string} option - The option
 * @returns {string} A hashed version of that option
 */
export function getSelect2OptionId(option: string): string;
/**
 * Modifies the select2 options by adding not existing one and optionally selecting them
 *
 * @param {JQuery<HTMLElement>} element - The "select" element to add the options to
 * @param {string[]|Select2Option[]} items - The option items to build, add or select
 * @param {object} [options] - Optional arguments
 * @param {boolean} [options.select=false] - Whether the options should be selected right away
 * @param {object} [options.changeEventArgs=null] - Optional event args being passed into the "change" event when its triggered because a new options is selected
 */
export function select2ModifyOptions(element: JQuery<HTMLElement>, items: string[] | Select2Option[], { select, changeEventArgs }?: {
    select?: boolean;
    changeEventArgs?: object;
}): void;
/**
 * Returns the ajax settings that can be used on the select2 ajax property to dynamically get the data.
 * Can be used on a single global array, querying data from the server or anything similar.
 *
 * @param {function():Select2Option[]} dataProvider - The provider/function to retrieve the data - can be as simple as "() => myData" for arrays
 * @return {{transport: (params, success, failure) => any}} The ajax object with the transport function to use on the select2 ajax property
 */
export function dynamicSelect2DataViaAjax(dataProvider: () => Select2Option[]): {
    transport: (params: any, success: any, failure: any) => any;
};
/**
 * Checks whether a given control is a select2 choice element - meaning one of the results being displayed in the select multi select box
 * @param {JQuery<HTMLElement>|HTMLElement} element - The element to check
 * @returns {boolean} Whether this is a choice element
 */
export function isSelect2ChoiceElement(element: JQuery<HTMLElement> | HTMLElement): boolean;
/**
 * Subscribes a 'click' event handler to the choice elements of a select2 multi-select control
 *
 * @param {JQuery<HTMLElement>} control The original control the select2 was applied to
 * @param {function(HTMLElement):void} action - The action to execute when a choice element is clicked
 * @param {object} options - Optional parameters
 * @param {boolean} [options.buttonStyle=false] - Whether the choices should be styles as a clickable button with color and hover transition, instead of just changed cursor
 * @param {boolean} [options.closeDrawer=false] - Whether the drawer should be closed and focus removed after the choice item was clicked
 * @param {boolean} [options.openDrawer=false] - Whether the drawer should be opened, even if this click would normally close it
 */
export function select2ChoiceClickSubscribe(control: JQuery<HTMLElement>, action: (arg0: HTMLElement) => void, { buttonStyle, closeDrawer, openDrawer }?: {
    buttonStyle?: boolean;
    closeDrawer?: boolean;
    openDrawer?: boolean;
}): void;
/**
 * Applies syntax highlighting to a given regex string by generating HTML with classes
 *
 * @param {string} regexStr - The javascript compatible regex string
 * @returns {string} The html representation of the highlighted regex
 */
export function highlightRegex(regexStr: string): string;
/**
 * Confirms if the user wants to overwrite an existing data object (like character, world info, etc) if one exists.
 * If no data with the name exists, this simply returns true.
 *
 * @param {string} type - The type of the check ("World Info", "Character", etc)
 * @param {string[]} existingNames - The list of existing names to check against
 * @param {string} name - The new name
 * @param {object} options - Optional parameters
 * @param {boolean} [options.interactive=false] - Whether to show a confirmation dialog when needing to overwrite an existing data object
 * @param {string} [options.actionName='overwrite'] - The action name to display in the confirmation dialog
 * @param {(existingName:string)=>void} [options.deleteAction=null] - Optional action to execute wen deleting an existing data object on overwrite
 * @returns {Promise<boolean>} True if the user confirmed the overwrite or there is no overwrite needed, false otherwise
 */
export function checkOverwriteExistingData(type: string, existingNames: string[], name: string, { interactive, actionName, deleteAction }?: {
    interactive?: boolean;
    actionName?: string;
    deleteAction?: (existingName: string) => void;
}): Promise<boolean>;
/**
 * Generates a free name by appending a counter to the given name if it already exists in the list
 *
 * @param {string} name - The original name to check for existence in the list
 * @param {string[]} list - The list of names to check for existence
 * @param {(n: number) => string} [numberFormatter=(n) => ` #${n}`] - The function used to format the counter
 * @returns {string} The generated free name
 */
export function getFreeName(name: string, list: string[], numberFormatter?: (n: number) => string): string;
/**
 * Toggles the visibility of a drawer by changing the display style of its content.
 * This function skips the usual drawer animation.
 *
 * @param {HTMLElement} drawer - The drawer element to toggle
 * @param {boolean} [expand=true] - Whether to expand or collapse the drawer
 */
export function toggleDrawer(drawer: HTMLElement, expand?: boolean): void;
/**
 * Sets or removes a dataset property on an HTMLElement
 *
 * Utility function to make it easier to reset dataset properties on null, without them being "null" as value.
 *
 * @param {HTMLElement} element - The element to modify
 * @param {string} name - The name of the dataset property
 * @param {string|null} value - The value to set - If null, the dataset property will be removed
 */
export function setDatasetProperty(element: HTMLElement, name: string, value: string | null): void;
export function fetchFaFile(name: any): Promise<any[]>;
export function fetchFa(): Promise<any[]>;
/**
 * Opens a popup with all the available Font Awesome icons and returns the selected icon's name.
 * @prop {string[]} customList A custom list of Font Awesome icons to use instead of all available icons.
 * @returns {Promise<string>} The icon name (fa-pencil) or null if cancelled.
 */
export function showFontAwesomePicker(customList?: any): Promise<string>;
/**
 * Finds a persona by name, with optional filtering and precedence for avatars
 * @param {object} [options={}] - The options for the search
 * @param {string?} [options.name=null] - The name to search for
 * @param {boolean} [options.allowAvatar=true] - Whether to allow searching by avatar
 * @param {boolean} [options.insensitive=true] - Whether the search should be case insensitive
 * @param {boolean} [options.preferCurrentPersona=true] - Whether to prefer the current persona(s)
 * @param {boolean} [options.quiet=false] - Whether to suppress warnings
 * @returns {PersonaViewModel} The persona object
 * @typedef {object} PersonaViewModel
 * @property {string} avatar - The avatar of the persona
 * @property {string} name - The name of the persona
 */
export function findPersona({ name, allowAvatar, insensitive, preferCurrentPersona, quiet }?: {
    name?: string | null;
    allowAvatar?: boolean;
    insensitive?: boolean;
    preferCurrentPersona?: boolean;
    quiet?: boolean;
}): PersonaViewModel;
/**
 * Finds a character by name, with optional filtering and precedence for avatars
 * @param {object} [options={}] - The options for the search
 * @param {string?} [options.name=null] - The name to search for
 * @param {boolean} [options.allowAvatar=true] - Whether to allow searching by avatar
 * @param {boolean} [options.insensitive=true] - Whether the search should be case insensitive
 * @param {string[]?} [options.filteredByTags=null] - Tags to filter characters by
 * @param {boolean} [options.preferCurrentChar=true] - Whether to prefer the current character(s)
 * @param {boolean} [options.quiet=false] - Whether to suppress warnings
 * @returns {import('./char-data.js').v1CharData?} - The found character or null if not found
 */
export function findChar({ name, allowAvatar, insensitive, filteredByTags, preferCurrentChar, quiet }?: {
    name?: string | null;
    allowAvatar?: boolean;
    insensitive?: boolean;
    filteredByTags?: string[] | null;
    preferCurrentChar?: boolean;
    quiet?: boolean;
}): import("./char-data.js").v1CharData | null;
/**
 * Gets the index of a character based on the character object
 * @param {object} char - The character object to find the index for
 * @throws {Error} If the character is not found
 * @returns {number} The index of the character in the characters array
 */
export function getCharIndex(char: object): number;
/**
 * Compares two arrays for equality
 * @param {any[]} a - The first array
 * @param {any[]} b - The second array
 * @returns {boolean} True if the arrays are equal, false otherwise
 */
export function arraysEqual(a: any[], b: any[]): boolean;
/**
 * Updates the content and style of an information block
 * @param {string | HTMLElement} target - The CSS selector or the HTML element of the information block
 * @param {string | HTMLElement?} content - The message to display inside the information block (supports HTML) or an HTML element
 * @param {'hint' | 'info' | 'warning' | 'error'} [type='info'] - The type of message, which determines the styling of the information block
 */
export function setInfoBlock(target: string | HTMLElement, content: string | (HTMLElement | null), type?: "hint" | "info" | "warning" | "error"): void;
/**
 * Clears the content and style of an information block.
 * @param {string | HTMLElement} target - The CSS selector or the HTML element of the information block
 */
export function clearInfoBlock(target: string | HTMLElement): void;
/**
 * Pagination status string template.
 * @type {string}
 */
export const PAGINATION_TEMPLATE: string;
/**
 * Navigation options for pagination.
 */
export type navigation_option = number;
export namespace navigation_option {
    let none: number;
    let previous: number;
}
export class Stopwatch {
    /**
     * Initializes a Stopwatch class.
     * @param {number} interval Update interval in milliseconds. Must be a finite number above zero.
     */
    constructor(interval: number);
    interval: number;
    lastAction: number;
    /**
     * Executes a function if the interval passed.
     * @param {(arg0: any) => any} action Action function
     * @returns Promise<void>
     */
    tick(action: (arg0: any) => any): Promise<void>;
}
/**
 * Provides an interface for rate limiting function calls.
 */
export class RateLimiter {
    /**
     * Creates a new RateLimiter.
     * @param {number} interval The interval in milliseconds.
     * @example
     * const rateLimiter = new RateLimiter(1000);
     * rateLimiter.waitForResolve().then(() => {
     *    console.log('Waited 1000ms');
     * });
     */
    constructor(interval: number);
    interval: number;
    lastResolveTime: number;
    pendingResolve: Promise<void>;
    /**
     * Waits for the remaining time in the interval.
     * @param {AbortSignal} abortSignal An optional AbortSignal to abort the wait.
     * @returns {Promise<void>} A promise that resolves when the remaining time has elapsed.
     */
    _waitRemainingTime(abortSignal: AbortSignal): Promise<void>;
    /**
     * Waits for the next interval to elapse.
     * @param {AbortSignal} abortSignal An optional AbortSignal to abort the wait.
     * @returns {Promise<void>} A promise that resolves when the next interval has elapsed.
     */
    waitForResolve(abortSignal: AbortSignal): Promise<void>;
}
/**
 * The option object for select2 controls
 */
export type Select2Option = {
    /**
     * - The unique ID inside this select
     */
    id: string;
    /**
     * - The text for this option
     */
    text: string;
    /**
     * - Optionally show the count how often that option was chosen already
     */
    count?: number | null;
};
/**
 * Finds a persona by name, with optional filtering and precedence for avatars
 */
export type PersonaViewModel = {
    /**
     * - The avatar of the persona
     */
    avatar: string;
    /**
     * - The name of the persona
     */
    name: string;
};
import { SlashCommandClosure } from './slash-commands/SlashCommandClosure.js';
import { debounce_timeout } from './constants.js';
//# sourceMappingURL=utils.d.ts.map