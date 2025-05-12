export const EXTENSION_PROMPT_TAG: "3_vectors";
export const EXTENSION_PROMPT_TAG_DB: "4_vectors_data_bank";
export type HashedMessage = {
    /**
     * - The hashed message text
     */
    text: string;
    /**
     * - The hash used as the vector key
     */
    hash: number;
    /**
     * - The index of the message in the chat
     */
    index: number;
};
//# sourceMappingURL=index.d.ts.map