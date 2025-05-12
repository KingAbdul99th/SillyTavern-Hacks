export class WebLlmVectorProvider {
    /**
     * Get available models.
     * @returns {{id:string, toString: function(): string}[]} Array of available models
     */
    getModels(): {
        id: string;
        toString: () => string;
    }[];
    /**
     * Generate embeddings for a list of texts.
     * @param {string[]} texts Array of texts to generate embeddings for
     * @param {string} modelId Model to use for generating embeddings
     * @returns {Promise<number[][]>} Array of embeddings for each text
     */
    embedTexts(texts: string[], modelId: string): Promise<number[][]>;
    /**
     * Loads a model into the engine.
     * @param {string} modelId Model ID to load
     */
    loadModel(modelId: string): Promise<void>;
    #private;
}
//# sourceMappingURL=webllm.d.ts.map