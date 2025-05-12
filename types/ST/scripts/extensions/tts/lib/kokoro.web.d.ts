declare class VA {
    static from_pretrained(e: any, { dtype: A, device: t, progress_callback: r }?: {
        dtype?: string;
        device?: any;
        progress_callback?: any;
    }): Promise<VA>;
    constructor(e: any, A: any);
    model: any;
    tokenizer: any;
    get voices(): Readonly<{
        af_heart: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_alloy: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_aoede: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_bella: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_jessica: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_kore: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_nicole: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_nova: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_river: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_sarah: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        af_sky: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_adam: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_echo: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_eric: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_fenrir: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_liam: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_michael: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_onyx: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_puck: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        am_santa: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        bf_emma: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
        bf_isabella: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        bm_george: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        bm_lewis: {
            name: string;
            language: string;
            gender: string;
            targetQuality: string;
            overallGrade: string;
        };
        bf_alice: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
        bf_lily: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
        bm_daniel: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
        bm_fable: {
            name: string;
            language: string;
            gender: string;
            traits: string;
            targetQuality: string;
            overallGrade: string;
        };
    }>;
    list_voices(): void;
    _validate_voice(e: any): any;
    generate(e: any, { voice: A, speed: t }?: {
        voice?: string;
        speed?: number;
    }): Promise<any>;
    generate_from_ids(e: any, { voice: A, speed: t }?: {
        voice?: string;
        speed?: number;
    }): Promise<any>;
    stream(e: any, { voice: A, speed: t, split_pattern: r }?: {
        voice?: string;
        speed?: number;
        split_pattern?: any;
    }): AsyncGenerator<{
        text: any;
        phonemes: string;
        audio: any;
    }, void, unknown>;
}
declare class LA {
    _buffer: string;
    _sentences: any[];
    _resolver: (value: any) => void;
    _closed: boolean;
    push(...e: any[]): void;
    close(): void;
    flush(): void;
    _resolve(): void;
    _process(): void;
    get sentences(): any[];
    [Symbol.asyncIterator](): AsyncGenerator<any, void, unknown>;
    [Symbol.iterator](): ArrayIterator<any>;
}
export { VA as KokoroTTS, LA as TextSplitterStream };
//# sourceMappingURL=kokoro.web.d.ts.map