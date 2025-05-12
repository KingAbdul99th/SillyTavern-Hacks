export type ARGUMENT_TYPE = string;
export namespace ARGUMENT_TYPE {
    let STRING: string;
    let NUMBER: string;
    let RANGE: string;
    let BOOLEAN: string;
    let VARIABLE_NAME: string;
    let CLOSURE: string;
    let SUBCOMMAND: string;
    let LIST: string;
    let DICTIONARY: string;
}
export class SlashCommandArgument {
    /**
     * Creates an unnamed argument from a properties object.
     * @param {Object} props
     * @param {string} props.description description of the argument
     * @param {ARGUMENT_TYPE|ARGUMENT_TYPE[]} [props.typeList=[ARGUMENT_TYPE.STRING]] default: ARGUMENT_TYPE.STRING - list of accepted types (from ARGUMENT_TYPE)
     * @param {boolean} [props.isRequired=false] default: false - whether the argument is required (false = optional argument)
     * @param {boolean} [props.acceptsMultiple=false] default: false - whether argument accepts multiple values
     * @param {string|SlashCommandClosure} [props.defaultValue=null] default value if no value is provided
     * @param {string|SlashCommandEnumValue|(string|SlashCommandEnumValue)[]} [props.enumList=[]] list of accepted values
     * @param {(executor:SlashCommandExecutor, scope:SlashCommandScope)=>SlashCommandEnumValue[]} [props.enumProvider=null] function that returns auto complete options
     * @param {boolean} [props.forceEnum=false] default: false - whether the input must match one of the enum values
     */
    static fromProps(props: {
        description: string;
        typeList?: ARGUMENT_TYPE | ARGUMENT_TYPE[];
        isRequired?: boolean;
        acceptsMultiple?: boolean;
        defaultValue?: string | SlashCommandClosure;
        enumList?: string | SlashCommandEnumValue | (string | SlashCommandEnumValue)[];
        enumProvider?: (executor: SlashCommandExecutor, scope: SlashCommandScope) => SlashCommandEnumValue[];
        forceEnum?: boolean;
    }): SlashCommandArgument;
    /**
     * @param {string} description
     * @param {ARGUMENT_TYPE|ARGUMENT_TYPE[]} types
     * @param {string|SlashCommandClosure} defaultValue
     * @param {string|SlashCommandEnumValue|(string|SlashCommandEnumValue)[]} enums
     * @param {(executor:SlashCommandExecutor, scope:SlashCommandScope)=>SlashCommandEnumValue[]} enumProvider function that returns auto complete options
     */
    constructor(description: string, types: ARGUMENT_TYPE | ARGUMENT_TYPE[], isRequired?: boolean, acceptsMultiple?: boolean, defaultValue?: string | SlashCommandClosure, enums?: string | SlashCommandEnumValue | (string | SlashCommandEnumValue)[], enumProvider?: (executor: SlashCommandExecutor, scope: SlashCommandScope) => SlashCommandEnumValue[], forceEnum?: boolean);
    /**@type {string}*/ description: string;
    /**@type {ARGUMENT_TYPE[]}*/ typeList: ARGUMENT_TYPE[];
    /**@type {boolean}*/ isRequired: boolean;
    /**@type {boolean}*/ acceptsMultiple: boolean;
    /**@type {string|SlashCommandClosure}*/ defaultValue: string | SlashCommandClosure;
    /**@type {SlashCommandEnumValue[]}*/ enumList: SlashCommandEnumValue[];
    /**@type {(executor:SlashCommandExecutor, scope:SlashCommandScope)=>SlashCommandEnumValue[]}*/ enumProvider: (executor: SlashCommandExecutor, scope: SlashCommandScope) => SlashCommandEnumValue[];
    /**@type {boolean}*/ forceEnum: boolean;
}
export class SlashCommandNamedArgument extends SlashCommandArgument {
    /**
     * Creates an unnamed argument from a properties object.
     * @param {Object} props
     * @param {string} props.name the argument's name
     * @param {string} props.description description of the argument
     * @param {string[]} [props.aliasList=[]] list of aliases
     * @param {ARGUMENT_TYPE|ARGUMENT_TYPE[]} [props.typeList=[ARGUMENT_TYPE.STRING]] default: ARGUMENT_TYPE.STRING - list of accepted types (from ARGUMENT_TYPE)
     * @param {boolean} [props.isRequired=false] default: false - whether the argument is required (false = optional argument)
     * @param {boolean} [props.acceptsMultiple=false] default: false - whether argument accepts multiple values
     * @param {string|SlashCommandClosure} [props.defaultValue=null] default value if no value is provided
     * @param {string|SlashCommandEnumValue|(string|SlashCommandEnumValue)[]} [props.enumList=[]] list of accepted values
     * @param {(executor:SlashCommandExecutor, scope:SlashCommandScope)=>SlashCommandEnumValue[]} [props.enumProvider=null] function that returns auto complete options
     * @param {boolean} [props.forceEnum=false] default: false - whether the input must match one of the enum values
     */
    static fromProps(props: {
        name: string;
        description: string;
        aliasList?: string[];
        typeList?: ARGUMENT_TYPE | ARGUMENT_TYPE[];
        isRequired?: boolean;
        acceptsMultiple?: boolean;
        defaultValue?: string | SlashCommandClosure;
        enumList?: string | SlashCommandEnumValue | (string | SlashCommandEnumValue)[];
        enumProvider?: (executor: SlashCommandExecutor, scope: SlashCommandScope) => SlashCommandEnumValue[];
        forceEnum?: boolean;
    }): SlashCommandNamedArgument;
    /**
     * @param {string} name
     * @param {string} description
     * @param {ARGUMENT_TYPE|ARGUMENT_TYPE[]} types
     * @param {boolean} [isRequired=false]
     * @param {boolean} [acceptsMultiple=false]
     * @param {string|SlashCommandClosure} [defaultValue=null]
     * @param {string|SlashCommandEnumValue|(string|SlashCommandEnumValue)[]} [enums=[]]
     * @param {string[]} [aliases=[]]
     * @param {(executor:SlashCommandExecutor, scope:SlashCommandScope)=>SlashCommandEnumValue[]} [enumProvider=null] function that returns auto complete options
     * @param {boolean} [forceEnum=false]
     */
    constructor(name: string, description: string, types: ARGUMENT_TYPE | ARGUMENT_TYPE[], isRequired?: boolean, acceptsMultiple?: boolean, defaultValue?: string | SlashCommandClosure, enums?: string | SlashCommandEnumValue | (string | SlashCommandEnumValue)[], aliases?: string[], enumProvider?: (executor: SlashCommandExecutor, scope: SlashCommandScope) => SlashCommandEnumValue[], forceEnum?: boolean);
    /**@type {string}*/ name: string;
    /**@type {string[]}*/ aliasList: string[];
}
import { SlashCommandClosure } from './SlashCommandClosure.js';
import { SlashCommandEnumValue } from './SlashCommandEnumValue.js';
import { SlashCommandExecutor } from './SlashCommandExecutor.js';
import { SlashCommandScope } from './SlashCommandScope.js';
//# sourceMappingURL=SlashCommandArgument.d.ts.map