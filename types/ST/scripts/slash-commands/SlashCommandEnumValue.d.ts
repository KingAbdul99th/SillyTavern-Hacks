export namespace enumTypes {
    let _enum: EnumType;
    export { _enum as enum };
    export let command: EnumType;
    export let namedArgument: EnumType;
    export let variable: EnumType;
    export let qr: EnumType;
    export let macro: EnumType;
    export let number: EnumType;
    export let name: EnumType;
    /**
     * Gets the value of the enum type based on the provided index
     *
     * Can be used to get differing colors or even random colors, by providing the index of a unique set
     *
     * @param {number?} index - The index used to retrieve the enum type
     * @return {EnumType} The enum type corresponding to the index
     */
    export function getBasedOnIndex(index: number | null): EnumType;
}
export class SlashCommandEnumValue {
    /**
     * A constructor for creating a SlashCommandEnumValue instance.
     *
     * @param {string} value - The value
     * @param {string?} description - Optional description, displayed in a second line
     * @param {EnumType?} type - type of the enum (defining its color)
     * @param {string?} typeIcon - The icon to display (Can be pulled from `enumIcons` for common ones)
     * @param {(input:string)=>boolean?} matchProvider - A custom function to match autocomplete input instead of startsWith/includes/fuzzy. Should only be used for generic options like "any number" or "any string". "input" is the part of the text that is getting auto completed.
     * @param {(input:string)=>string?} valueProvider - A function returning a value to be used in autocomplete instead of the enum value. "input" is the part of the text that is getting auto completed. By default, values with a valueProvider will not be selectable in the autocomplete (with tab/enter).
     * @param {boolean?} makeSelectable - Set to true to make the value selectable (through tab/enter) even though a valueProvider exists.
     */
    constructor(value: string, description?: string | null, type?: EnumType | null, typeIcon?: string | null, matchProvider?: (input: string) => boolean | null, valueProvider?: (input: string) => string | null, makeSelectable?: boolean | null);
    /**@type {string}*/ value: string;
    /**@type {string}*/ description: string;
    /**@type {EnumType}*/ type: EnumType;
    /**@type {string}*/ typeIcon: string;
    /**@type {(input:string)=>boolean}*/ matchProvider: (input: string) => boolean;
    /**@type {(input:string)=>string}*/ valueProvider: (input: string) => string;
    /**@type {boolean}*/ makeSelectable: boolean;
    toString(): string;
}
export type EnumType = "enum" | "command" | "namedArgument" | "variable" | "qr" | "macro" | "number" | "name";
//# sourceMappingURL=SlashCommandEnumValue.d.ts.map