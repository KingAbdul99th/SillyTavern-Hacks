/**
 * Gets the tag key for any provided entity/id/key. If a valid tag key is provided, it just returns this.
 * Robust method to find a valid tag key for any entity.
 *
 * @param {object|number|string} entityOrKey An entity with id property (character, group, tag), or directly an id or tag key.
 * @returns {string|undefined} The tag key that can be found.
 */
export function getTagKeyForEntity(entityOrKey: object | number | string): string | undefined;
/**
 * Checks for a tag key based on an entity for a given element.
 * It checks the given element and upwards parents for a set character id (chid) or group id (grid), and if there is any, returns its unique entity key.
 *
 * @param {JQuery<HTMLElement>|string} element - The element to search the entity id on
 * @returns {string|undefined} The tag key that can be found.
 */
export function getTagKeyForEntityElement(element: JQuery<HTMLElement> | string): string | undefined;
/**
 * Gets the key for char/group by searching based on the name or avatar. If none can be found, a toastr will be shown and null returned.
 * This function is mostly used in slash commands.
 *
 * @param {string?} [charName] The optionally provided char name
 * @param {object} [options] - Optional arguments
 * @param {boolean} [options.suppressLogging=false] - Whether to suppress the toastr warning
 * @returns {string?} - The char/group key, or null if none found
 */
export function searchCharByName(charName?: string | null, { suppressLogging }?: {
    suppressLogging?: boolean;
}): string | null;
/**
 * Adds one or more tags to a given entity
 *
 * @param {Tag|Tag[]} tag - The tag or tags to add
 * @param {string|string[]} entityId - The entity or entities to add this tag to. Has to be the entity key (e.g. `addTagToEntity`).
 * @param {object} [options={}] - Optional arguments
 * @param {JQuery<HTMLElement>|string?} [options.tagListSelector=null] - An optional selector if a specific list should be updated with the new tag too (for example because the add was triggered for that function)
 * @param {PrintTagListOptions} [options.tagListOptions] - Optional parameters for printing the tag list. Can be set to be consistent with the expected behavior of tags in the list that was defined before.
 * @returns {boolean} Whether at least one tag was added
 */
export function addTagsToEntity(tag: Tag | Tag[], entityId: string | string[], { tagListSelector, tagListOptions }?: {
    tagListSelector?: JQuery<HTMLElement> | (string | null);
    tagListOptions?: PrintTagListOptions;
}): boolean;
/**
 * Removes a tag from a given entity
 * @param {Tag} tag - The tag to remove
 * @param {string|string[]} entityId - The entity to remove this tag from. Has to be the entity key (e.g. `addTagToEntity`). (Also allows multiple entities to be passed in)
 * @param {object} [options={}] - Optional arguments
 * @param {JQuery<HTMLElement>|string?} [options.tagListSelector=null] - An optional selector if a specific list should be updated with the tag removed too (for example because the add was triggered for that function)
 * @param {JQuery<HTMLElement>?} [options.tagElement=null] - Optionally a direct html element of the tag to be removed, so it can be removed from the UI
 * @returns {boolean} Whether at least one tag was removed
 */
export function removeTagFromEntity(tag: Tag, entityId: string | string[], { tagListSelector, tagElement }?: {
    tagListSelector?: JQuery<HTMLElement> | (string | null);
    tagElement?: JQuery<HTMLElement> | null;
}): boolean;
export function applyTagsOnCharacterSelect(chid?: any): void;
export function applyTagsOnGroupSelect(groupId?: any): void;
/**
 * Create a tag input by enabling the autocomplete feature of a given input element. Tags will be added to the given list.
 *
 * @param {string} inputSelector - the selector for the tag input control
 * @param {string} listSelector - the selector for the list of the tags modified by the input control
 * @param {PrintTagListOptions} [tagListOptions] - Optional parameters for printing the tag list. Can be set to be consistent with the expected behavior of tags in the list that was defined before.
 */
export function createTagInput(inputSelector: string, listSelector: string, tagListOptions?: PrintTagListOptions): void;
export function initTags(): void;
export type tag_filter_type = number;
export namespace tag_filter_type {
    let character: number;
    let group_member: number;
}
export type tag_import_setting = number;
export namespace tag_import_setting {
    let ASK: number;
    let NONE: number;
    let ALL: number;
    let ONLY_EXISTING: number;
}
/**
 * - Options for tag behavior. (Same object will be passed into "appendTagToList")
 */
export type TagOptions = {
    /**
     * - Whether tags can be removed.
     */
    removable?: boolean;
    /**
     * - Whether tags can be selected as a filter.
     */
    isFilter?: boolean;
    /**
     * - Action to perform on tag interaction.
     */
    action?: Function;
    /**
     * - Action to perform on tag removal instead of the default remove action. If the action returns false, the tag will not be removed.
     */
    removeAction?: (tag: Tag) => boolean;
    /**
     * - If true, indicates that this is the general list of tags.
     */
    isGeneralList?: boolean;
    /**
     * - If true, the tag gets added even if a tag with the same id already exists.
     */
    skipExistsCheck?: boolean;
};
/**
 * - Optional parameters for printing the tag list.
 */
export type PrintTagListOptions = {
    /**
     * - Optional override of tags that should be printed. Those will not be sorted. If no supplied, tags for the relevant character are printed. Can also be a function that returns the tags.
     */
    tags?: Tag[] | (() => Tag[]);
    /**
     * - Optionally provide one or multiple tags that should be manually added to this print. Either to the overriden tag list or the found tags based on the entity/key. Will respect the tag exists check.
     */
    addTag?: Tag | Tag[];
    /**
     * - Optional override for the chosen entity, otherwise the currently selected is chosen. Can be an entity with id property (character, group, tag), or directly an id or tag key.
     */
    forEntityOrKey?: object | number | string;
    /**
     * - Whether the list should be initially empty. If a string string is provided, 'always' will always empty the list, otherwise it'll evaluate to a boolean.
     */
    empty?: boolean | string;
    /**
     * - Whether the tags should be sorted via the sort function, or kept as is.
     */
    sort?: boolean;
    /**
     * - An optional override for the action property that can be assigned to each tag via tagOptions.
     * If set, the selector is executed on each tag as input argument. This allows a list of tags to be provided and each tag can have it's action based on the tag object itself.
     */
    tagActionSelector?: (arg0: object) => Function;
    /**
     * - Options for tag behavior. (Same object will be passed into "appendTagToList")
     */
    tagOptions?: TagOptions;
};
export type Character = import("../script.js").Character;
/**
 * Bogus folder type
 */
export type FolderType = {
    /**
     * - The icon as a string representation / character
     */
    icon: string;
    /**
     * - The class to apply to the folder type element
     */
    class: string;
    /**
     * - Optional font-awesome icon class representing the folder type element
     */
    fa_icon?: string;
    /**
     * - Optional tooltip for the folder type element
     */
    tooltip?: string;
    /**
     * - Optional color for the folder type element
     */
    color?: string;
    /**
     * - A string representation of the size that the folder type element should be
     */
    size?: string;
};
/**
 * - Object representing a tag
 */
export type Tag = {
    /**
     * - The id of the tag (As a kind of has string. This is used whenever the tag is referenced or linked, as the name might change)
     */
    id: string;
    /**
     * - The name of the tag
     */
    name: string;
    /**
     * - The bogus folder type of this tag (based on `TAG_FOLDER_TYPES`)
     */
    folder_type?: string;
    /**
     * - The saved state of the filter chosen of this tag (based on `FILTER_STATES`)
     */
    filter_state?: string;
    /**
     * - A custom integer representing the sort order if tags are sorted
     */
    sort_order?: number;
    /**
     * - The background color of the tag
     */
    color?: string;
    /**
     * - The foreground color of the tag
     */
    color2?: string;
    /**
     * - A number representing the date when this tag was created
     */
    create_date?: number;
    /**
     * - An optional function that gets executed when this tag is an actionable tag and is clicked on.
     */
    action?: Function;
    /**
     * - An optional css class added to the control representing this tag when printed. Used for custom tags in the filters.
     */
    class?: string;
    /**
     * - An optional css class of an icon representing this tag when printed. This will replace the tag name with the icon. Used for custom tags in the filters.
     */
    icon?: string;
    /**
     * - An optional title for the tooltip of this tag. If there is no tooltip specified, and "icon" is chosen, the tooltip will be the "name" property.
     */
    title?: string;
};
/**
 * @typedef FolderType Bogus folder type
 * @property {string} icon - The icon as a string representation / character
 * @property {string} class - The class to apply to the folder type element
 * @property {string} [fa_icon] - Optional font-awesome icon class representing the folder type element
 * @property {string} [tooltip] - Optional tooltip for the folder type element
 * @property {string} [color] - Optional color for the folder type element
 * @property {string} [size] - A string representation of the size that the folder type element should be
 */
/**
 * @type {{ OPEN: FolderType, CLOSED: FolderType, NONE: FolderType, [key: string]: FolderType }}
 * The list of all possible tag folder types
 */
export const TAG_FOLDER_TYPES: {
    OPEN: FolderType;
    CLOSED: FolderType;
    NONE: FolderType;
    [key: string]: FolderType;
};
export const TAG_FOLDER_DEFAULT_TYPE: "NONE";
/**
 * @typedef {object} Tag - Object representing a tag
 * @property {string} id - The id of the tag (As a kind of has string. This is used whenever the tag is referenced or linked, as the name might change)
 * @property {string} name - The name of the tag
 * @property {string} [folder_type] - The bogus folder type of this tag (based on `TAG_FOLDER_TYPES`)
 * @property {string} [filter_state] - The saved state of the filter chosen of this tag (based on `FILTER_STATES`)
 * @property {number} [sort_order] - A custom integer representing the sort order if tags are sorted
 * @property {string} [color] - The background color of the tag
 * @property {string} [color2] - The foreground color of the tag
 * @property {number} [create_date] - A number representing the date when this tag was created
 *
 * @property {function} [action] - An optional function that gets executed when this tag is an actionable tag and is clicked on.
 * @property {string} [class] - An optional css class added to the control representing this tag when printed. Used for custom tags in the filters.
 * @property {string} [icon] - An optional css class of an icon representing this tag when printed. This will replace the tag name with the icon. Used for custom tags in the filters.
 * @property {string} [title] - An optional title for the tooltip of this tag. If there is no tooltip specified, and "icon" is chosen, the tooltip will be the "name" property.
 */
/**
 * An list of all tags that are available
 * @type {Tag[]}
 */
export let tags: Tag[];
/**
 * A map representing the key of an entity (character avatar, group id, etc) with a corresponding array of tags this entity has assigned. The array might not exist if no tags were assigned yet.
 * @type {{[identifier: string]: string[]?}}
 */
export let tag_map: {
    [identifier: string]: string[] | null;
};
/**
 * Applies the basic filter for the current state of the tags and their selection on an entity list.
 * @param {Array<Object>} entities List of entities for display, consisting of tags, characters and groups.
 * @param {Object} param1 Optional parameters, explained below.
 * @param {Boolean} [param1.globalDisplayFilters] When enabled, applies the final filter for the global list. Icludes filtering out entities in closed/hidden folders and empty folders.
 * @param {Object} [param1.subForEntity] When given an entity, the list of entities gets filtered specifically for that one as a "sub list", filtering out other tags, elements not tagged for this and hidden elements.
 * @param {Boolean} [param1.filterHidden] Optional switch with which filtering out hidden items (from closed folders) can be disabled.
 * @returns The filtered list of entities
 */
export function filterByTagState(entities: Array<any>, { globalDisplayFilters, subForEntity, filterHidden }?: {
    globalDisplayFilters?: boolean;
    subForEntity?: any;
    filterHidden?: boolean;
}): any[];
/**
 * Indicates whether a given tag is defined as a folder. Meaning it's neither undefined nor 'NONE'.
 *
 * @param {Tag} tag - The tag to check
 * @returns {boolean} Whether it's a tag folder
 */
export function isBogusFolder(tag: Tag): boolean;
/**
 * Indicates whether a user is currently in a bogus folder
 *
 * @returns {boolean} If currently viewing a folder
 */
export function isBogusFolderOpen(): boolean;
/**
 * Function to be called when a specific tag/folder is chosen to "drill down".
 *
 * @param {*} source The jQuery element clicked when choosing the folder
 * @param {string} tagId The tag id that is behind the chosen folder
 * @param {boolean} remove Whether the given tag should be removed (otherwise it is added/chosen)
 */
export function chooseBogusFolder(source: any, tagId: string, remove?: boolean): void;
/**
 * Builds the tag block for the specified item.
 *
 * @param {Tag} tag The tag item
 * @param {any[]} entities The list ob sub items for this tag
 * @param {number} hidden A count of how many sub items are hidden
 * @param {boolean} isUseless Whether the tag is useless (should be displayed greyed out)
 * @returns The html for the tag block
 */
export function getTagBlock(tag: Tag, entities: any[], hidden?: number, isUseless?: boolean): JQuery<HTMLElement>;
export function loadTagsSettings(settings: any): void;
export function printTagFilters(type?: number): void;
/**
 * Gets a list of all tags for a given entity key.
 * If you have an entity, you can get it's key easily via `getTagKeyForEntity(entity)`.
 *
 * @param {string} key - The key for which to get tags via the tag map
 * @param {boolean} [sort=true] - Whether the tag list should be sorted
 * @returns {Tag[]} A list of tags
 */
export function getTagsList(key: string, sort?: boolean): Tag[];
/**
 * @typedef {object} TagOptions - Options for tag behavior. (Same object will be passed into "appendTagToList")
 * @property {boolean} [removable=false] - Whether tags can be removed.
 * @property {boolean} [isFilter=false] - Whether tags can be selected as a filter.
 * @property {function} [action=undefined] - Action to perform on tag interaction.
 * @property {(tag: Tag)=>boolean} [removeAction=undefined] - Action to perform on tag removal instead of the default remove action. If the action returns false, the tag will not be removed.
 * @property {boolean} [isGeneralList=false] - If true, indicates that this is the general list of tags.
 * @property {boolean} [skipExistsCheck=false] - If true, the tag gets added even if a tag with the same id already exists.
 */
/**
 * @typedef {object} PrintTagListOptions - Optional parameters for printing the tag list.
 * @property {Tag[]|function(): Tag[]} [tags=undefined] - Optional override of tags that should be printed. Those will not be sorted. If no supplied, tags for the relevant character are printed. Can also be a function that returns the tags.
 * @property {Tag|Tag[]} [addTag=undefined] - Optionally provide one or multiple tags that should be manually added to this print. Either to the overriden tag list or the found tags based on the entity/key. Will respect the tag exists check.
 * @property {object|number|string} [forEntityOrKey=undefined] - Optional override for the chosen entity, otherwise the currently selected is chosen. Can be an entity with id property (character, group, tag), or directly an id or tag key.
 * @property {boolean|string} [empty=true] - Whether the list should be initially empty. If a string string is provided, 'always' will always empty the list, otherwise it'll evaluate to a boolean.
 * @property {boolean} [sort=true] - Whether the tags should be sorted via the sort function, or kept as is.
 * @property {function(object): function} [tagActionSelector=undefined] - An optional override for the action property that can be assigned to each tag via tagOptions.
 * If set, the selector is executed on each tag as input argument. This allows a list of tags to be provided and each tag can have it's action based on the tag object itself.
 * @property {TagOptions} [tagOptions={}] - Options for tag behavior. (Same object will be passed into "appendTagToList")
 */
/**
 * Prints the list of tags
 *
 * @param {JQuery<HTMLElement>|string} element - The container element where the tags are to be printed. (Optionally can also be a string selector for the element, which will then be resolved)
 * @param {PrintTagListOptions} [options] - Optional parameters for printing the tag list.
 */
export function printTagList(element: JQuery<HTMLElement> | string, { tags, addTag, forEntityOrKey, empty, sort, tagActionSelector, tagOptions }?: PrintTagListOptions): void;
/**
 * Appends a tag to the list element
 *
 * @param {JQuery<HTMLElement>} listElement - List element
 * @param {Tag} tag - Tag object to append
 * @param {TagOptions} [options={}] - Options for tag behavior
 * @returns {void}
 */
export function appendTagToList(listElement: JQuery<HTMLElement>, tag: Tag, { removable, isFilter, action, removeAction, isGeneralList, skipExistsCheck }?: TagOptions): void;
export function createTagMapFromList(listElement: any, key: any): void;
export function renameTagKey(oldKey: any, newKey: any): void;
/**
 * Imports tags for a given character
 *
 * @param {Character} character - The character
 * @param {object} [options] - Options
 * @param {tag_import_setting} [options.importSetting=null] - Force a tag import setting
 * @returns {Promise<boolean>} Boolean indicating whether any tag was imported
 */
export function importTags(character: Character, { importSetting }?: {
    importSetting?: tag_import_setting;
}): Promise<boolean>;
/**
 * Sorts the given tags, returning a shallow copy of it
 *
 * @param {Tag[]} tags - The tags
 * @returns {Tag[]} The sorted tags
 */
export function sortTags(tags: Tag[]): Tag[];
/**
 * Compares two given tags and returns the compare result
 *
 * @param {Tag} a - First tag
 * @param {Tag} b - Second tag
 * @returns {number} The compare result
 */
export function compareTagsForSort(a: Tag, b: Tag): number;
/**
 * Removes a tag from a given character. If no character is provided, removes it from the currently active one.
 * @param {string} tagId - The id of the tag
 * @param {string} characterId - The id/key of the character or group
 * @returns {boolean} Whether the tag was removed or not
 */
export function removeTagFromMap(tagId: string, characterId?: string): boolean;
//# sourceMappingURL=tags.d.ts.map