/**
 * Adds additional localization data to the current locale file.
 * @param {string} localeId Locale ID (e.g. 'fr-fr' or 'zh-cn')
 * @param {Record<string, string>} data Localization data to add
 */
export function addLocaleData(localeId: string, data: Record<string, string>): void;
/**
 * Translates a template string with named arguments
 *
 * Uses the template literal with all values replaced by index placeholder for translation key.
 *
 * @example
 * ```js
 * toastr.warn(t`Tag ${tagName} not found.`);
 * ```
 * Should be translated in the translation files as:
 * ```
 * Tag ${0} not found. -> Tag ${0} nicht gefunden.
 * ```
 *
 * @param {TemplateStringsArray} strings - Template strings array
 * @param  {...any} values - Values for placeholders in the template string
 * @returns {string} Translated and formatted string
 */
export function t(strings: TemplateStringsArray, ...values: any[]): string;
/**
 * Translates a given key or text
 *
 * If the translation is based on a key, that one is used to find a possible translation in the translation file.
 * The original text still has to be provided, as that is the default value being returned if no translation is found.
 *
 * For in-code text translation on a format string, using the template literal `t` is preferred.
 *
 * @param {string} text - The text to translate
 * @param {string?} key - The key to use for translation. If not provided, text is used as the key.
 * @returns {string} - The translated text
 */
export function translate(text: string, key?: string | null): string;
export function applyLocale(root?: Document): string | Document;
export function initLocales(): Promise<void>;
export function getCurrentLocale(): string;
//# sourceMappingURL=i18n.d.ts.map