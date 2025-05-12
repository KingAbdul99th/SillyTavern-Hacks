/**
 * A specialized Map class that provides consistent data storage by performing deep cloning of values.
 *
 * @template K, V
 * @extends Map<K, V>
 */
export class StructuredCloneMap<K, V> extends Map<K, V> {
    /**
     * Constructs a new StructuredCloneMap.
     * @param {object} options - Options for the map
     * @param {boolean} options.cloneOnGet - Whether to clone the value when getting it from the map
     * @param {boolean} options.cloneOnSet - Whether to clone the value when setting it in the map
     */
    constructor({ cloneOnGet, cloneOnSet }?: {
        cloneOnGet: boolean;
        cloneOnSet: boolean;
    });
    cloneOnGet: boolean;
    cloneOnSet: boolean;
    /**
     * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
     *
     * The set value will always be a deep clone of the provided value to provide consistent data storage.
     *
     * @param {K} key - The key to set
     * @param {V} value - The value to set
     * @returns {this} The updated map
     */
    set(key: K, value: V): this;
}
//# sourceMappingURL=StructuredCloneMap.d.ts.map