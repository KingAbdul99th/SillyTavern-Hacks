export class QuickReplySettings {
    static from(props: any): any;
    /**@type {Boolean}*/ isEnabled: boolean;
    /**@type {Boolean}*/ isCombined: boolean;
    /**@type {Boolean}*/ isPopout: boolean;
    /**@type {Boolean}*/ showPopoutButton: boolean;
    /**@type {QuickReplyConfig}*/ config: QuickReplyConfig;
    /**@type {QuickReplyConfig}*/ _chatConfig: QuickReplyConfig;
    set chatConfig(value: QuickReplyConfig);
    get chatConfig(): QuickReplyConfig;
    /**@type {Function}*/ onSave: Function;
    /**@type {Function}*/ onRequestEditSet: Function;
    init(): void;
    hookConfig(config: any): void;
    unhookConfig(config: any): void;
    save(): void;
    requestEditSet(qrs: any): void;
    toJSON(): {
        isEnabled: boolean;
        isCombined: boolean;
        isPopout: boolean;
        showPopoutButton: boolean;
        config: QuickReplyConfig;
    };
}
import { QuickReplyConfig } from './QuickReplyConfig.js';
//# sourceMappingURL=QuickReplySettings.d.ts.map