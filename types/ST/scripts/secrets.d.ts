export function updateSecretDisplay(): void;
export function writeSecret(key: any, value: any): Promise<void>;
export function readSecretState(): Promise<void>;
/**
 * Finds a secret value by key.
 * @param {string} key Secret key
 * @returns {Promise<string | undefined>} Secret value, or undefined if keys are not exposed
 */
export function findSecret(key: string): Promise<string | undefined>;
export namespace SECRET_KEYS {
    let HORDE: string;
    let MANCER: string;
    let VLLM: string;
    let APHRODITE: string;
    let TABBY: string;
    let OPENAI: string;
    let NOVEL: string;
    let CLAUDE: string;
    let OPENROUTER: string;
    let SCALE: string;
    let AI21: string;
    let SCALE_COOKIE: string;
    let MAKERSUITE: string;
    let SERPAPI: string;
    let MISTRALAI: string;
    let TOGETHERAI: string;
    let INFERMATICAI: string;
    let DREAMGEN: string;
    let CUSTOM: string;
    let OOBA: string;
    let NOMICAI: string;
    let KOBOLDCPP: string;
    let LLAMACPP: string;
    let COHERE: string;
    let PERPLEXITY: string;
    let GROQ: string;
    let AZURE_TTS: string;
    let FEATHERLESS: string;
    let ZEROONEAI: string;
    let HUGGINGFACE: string;
    let STABILITY: string;
    let CUSTOM_OPENAI_TTS: string;
    let NANOGPT: string;
    let TAVILY: string;
    let BFL: string;
    let GENERIC: string;
    let DEEPSEEK: string;
    let SERPER: string;
    let FALAI: string;
    let XAI: string;
}
export let secret_state: {};
//# sourceMappingURL=secrets.d.ts.map