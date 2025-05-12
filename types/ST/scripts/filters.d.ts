/**
 * Robust check if one state equals the other. It does not care whether it's the state key or the state value object.
 * @param {FilterState|string} a First state
 * @param {FilterState|string} b Second state
 * @returns {boolean}
 */
export function isFilterState(a: FilterState | string, b: FilterState | string): boolean;
/**
 * @typedef FilterType The filter type possible for this filter helper
 * @type {'search'|'tag'|'folder'|'fav'|'group'|'world_info_search'|'persona_search'}
 */
/**
 * The filter types
 * @type {{ SEARCH: 'search', TAG: 'tag', FOLDER: 'folder', FAV: 'fav', GROUP: 'group', WORLD_INFO_SEARCH: 'world_info_search', PERSONA_SEARCH: 'persona_search'}}
 */
export const FILTER_TYPES: {
    SEARCH: "search";
    TAG: "tag";
    FOLDER: "folder";
    FAV: "fav";
    GROUP: "group";
    WORLD_INFO_SEARCH: "world_info_search";
    PERSONA_SEARCH: "persona_search";
};
/**
 * @typedef FilterState One of the filter states
 * @property {string} key - The key of the state
 * @property {string} class - The css class for this state
 */
/**
 * The filter states
 * @type {{ SELECTED: FilterState, EXCLUDED: FilterState, UNDEFINED: FilterState, [key: string]: FilterState }}
 */
export const FILTER_STATES: {
    SELECTED: FilterState;
    EXCLUDED: FilterState;
    UNDEFINED: FilterState;
    [key: string]: FilterState;
};
/** @type {string} the default filter state of `FILTER_STATES` */
export const DEFAULT_FILTER_STATE: string;
/**
 * The fuzzy search categories
 * @type {{ characters: string, worldInfo: string, personas: string, tags: string, groups: string }}
 */
export const fuzzySearchCategories: {
    characters: string;
    worldInfo: string;
    personas: string;
    tags: string;
    groups: string;
};
/**
 * Helper class for filtering data.
 * @example
 * const filterHelper = new FilterHelper(() => console.log('data changed'));
 * filterHelper.setFilterData(FILTER_TYPES.SEARCH, 'test');
 * data = filterHelper.applyFilters(data);
 */
export class FilterHelper {
    /**
     * Creates a new FilterHelper
     * @param {Function} onDataChanged Callback to trigger when the filter data changes
     */
    constructor(onDataChanged: Function);
    /**
     * Cache fuzzy search weighting scores for re-usability, sorting and stuff
     *
     * Contains maps of weighting numbers assigned to their uid/id, for each of the different `FILTER_TYPES`
     * @type {Map<FilterType, Map<string|number,number>>}
     */
    scoreCache: Map<FilterType, Map<string | number, number>>;
    /**
     * Cache for fuzzy search results per category.
     * @type {Object.<string, { resultMap: Map<string, any> }>}
     */
    fuzzySearchCaches: {
        [x: string]: {
            resultMap: Map<string, any>;
        };
    };
    onDataChanged: Function;
    /**
     * Checks if the filter data has any values.
     * @returns {boolean} Whether the filter data has any values
     */
    hasAnyFilter(): boolean;
    /**
     * The filter functions.
     * @type {Object.<string, Function>}
     */
    filterFunctions: {
        [x: string]: Function;
    };
    /**
     * The filter data.
     * @type {Object.<string, any>}
     */
    filterData: {
        [x: string]: any;
    };
    /**
     * Applies a fuzzy search filter to the World Info data.
     * @param {any[]} data The data to filter. Must have a uid property.
     * @returns {any[]} The filtered data.
     */
    wiSearchFilter(data: any[]): any[];
    /**
     * Applies a search filter to Persona data.
     * @param {string[]} data The data to filter.
     * @returns {string[]} The filtered data.
     */
    personaSearchFilter(data: string[]): string[];
    /**
     * Checks if the given entity is tagged with the given tag ID.
     * @param {object} entity Searchable entity
     * @param {string} tagId Tag ID to check
     * @returns {boolean} Whether the entity is tagged with the given tag ID
     */
    isElementTagged(entity: object, tagId: string): boolean;
    /**
     * Applies a tag filter to the data.
     * @param {any[]} data The data to filter.
     * @returns {any[]} The filtered data.
     */
    tagFilter(data: any[]): any[];
    /**
     * Applies a favorite filter to the data.
     * @param {any[]} data The data to filter.
     * @returns {any[]} The filtered data.
     */
    favFilter(data: any[]): any[];
    /**
     * Applies a group type filter to the data.
     * @param {any[]} data The data to filter.
     * @returns {any[]} The filtered data.
     */
    groupFilter(data: any[]): any[];
    /**
     * Applies a "folder" filter to the data.
     * @param {any[]} data The data to filter.
     * @returns {any[]} The filtered data.
     */
    folderFilter(data: any[]): any[];
    filterDataByState(data: any, state: any, filterFunc: any, { includeFolders }?: {
        includeFolders?: boolean;
    }): any;
    /**
     * Applies a search filter to the data. Uses fuzzy search if enabled.
     * @param {any[]} data The data to filter.
     * @returns {any[]} The filtered data.
     */
    searchFilter(data: any[]): any[];
    /**
     * Sets the filter data for the given filter type.
     * @param {string} filterType The filter type to set data for.
     * @param {any} data The data to set.
     * @param {boolean} suppressDataChanged Whether to suppress the data changed callback.
     */
    setFilterData(filterType: string, data: any, suppressDataChanged?: boolean): void;
    /**
     * Gets the filter data for the given filter type.
     * @param {FilterType} filterType The filter type to get data for.
     */
    getFilterData(filterType: FilterType): any;
    /**
     * Applies all filters to the given data.
     * @param {any[]} data - The data to filter.
     * @param {object} options - Optional call parameters
     * @param {boolean} [options.clearScoreCache=true] - Whether the score cache should be cleared.
     * @param {Object.<FilterType, any>} [options.tempOverrides={}] - Temporarily override specific filters for this filter application
     * @param {boolean} [options.clearFuzzySearchCaches=true] - Whether the fuzzy search caches should be cleared.
     * @returns {any[]} The filtered data.
     */
    applyFilters(data: any[], { clearScoreCache, tempOverrides, clearFuzzySearchCaches }?: {
        clearScoreCache?: boolean;
        tempOverrides?: any;
        clearFuzzySearchCaches?: boolean;
    }): any[];
    /**
     * Cache scores for a specific filter type
     * @param {FilterType} type - The type of data being cached
     * @param {Map<string|number, number>} results - The search results containing mapped item identifiers and their scores
     */
    cacheScores(type: FilterType, results: Map<string | number, number>): void;
    /**
     * Get the cached score for an item by type and its identifier
     * @param {FilterType} type The type of data
     * @param {string|number} uid The unique identifier for an item
     * @returns {number|undefined} The cached score, or `undefined` if no score is present
     */
    getScore(type: FilterType, uid: string | number): number | undefined;
    /**
     * Clear the score cache for a specific type, or completely if no type is specified
     * @param {FilterType} [type] The type of data to clear scores for. Clears all if unspecified.
     */
    clearScoreCache(type?: FilterType): void;
    /**
     * Clears fuzzy search caches
     */
    clearFuzzySearchCaches(): void;
}
/**
 * The filter type possible for this filter helper
 */
export type FilterType = "search" | "tag" | "folder" | "fav" | "group" | "world_info_search" | "persona_search";
/**
 * One of the filter states
 */
export type FilterState = {
    /**
     * - The key of the state
     */
    key: string;
    /**
     * - The css class for this state
     */
    class: string;
};
//# sourceMappingURL=filters.d.ts.map