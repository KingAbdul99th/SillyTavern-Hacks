import { substituteParams } from "@ST/script.js";
import { formatInstructModeSystemPrompt, formatInstructModeChat, formatInstructModePrompt } from "@ST/scripts/instruct-mode.js";
import { adjustNovelInstructionPrompt } from "@ST/scripts/nai-settings.js";
import Profile from "./settings.js";
import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import React from "react";

declare var SillyTavern: any;
declare var name1: string, name2: string;
export const globalContext = SillyTavern.getContext();



function buildPrompt(
    text: string,
    api: string,
    instructOverride: boolean,
    quietToLoud: boolean,
    systemPrompt: string
) {
    let prompt = text;
    let power_user = globalContext.powerUserSettings;
    const isInstruct = power_user.instruct.enabled && api !== 'openai' && api !== 'novel' && !instructOverride;
    const isQuiet = true;
    
    if (systemPrompt) {
        systemPrompt = substituteParams(systemPrompt);
        systemPrompt = isInstruct ? formatInstructModeSystemPrompt(systemPrompt) : systemPrompt;
        prompt = api === 'openai' ? prompt : `${systemPrompt}\n${prompt}`;
    }

    prompt = substituteParams(prompt);
    prompt = api === 'novel' ? adjustNovelInstructionPrompt(prompt) : prompt;
    prompt = isInstruct ? formatInstructModeChat(name1, prompt, false, true, '', name1, name2, false) : prompt;
    prompt = isInstruct ? (prompt + formatInstructModePrompt(name2, false, '', name1, name2, isQuiet, quietToLoud)) : (prompt + '\n');

    return prompt;
}

function removeExtrasFromExtensionsBlock() {
    const extensionsBlock = document.getElementById("rm_extensions_block");
    const parent = extensionsBlock?.childNodes[1]
    parent?.removeChild(parent.childNodes[11]);
    parent?.removeChild(parent.childNodes[9]);
}

function createSlashCommands() {
    const SlashCommandParser = globalContext.SlashCommandParser;
    const SlashCommand = globalContext.SlashCommand;
    const SlashCommandNamedArgument = globalContext.SlashCommandNamedArgument;
    const SlashCommandArgument = globalContext.SlashCommandArgument;
    const ARGUMENT_TYPE = globalContext.ARGUMENT_TYPE;

    SlashCommandParser.addCommandObject(
        SlashCommand.fromProps(
            {
                name: "hacks-command",
                callback: (namedArgs: any, unnamedArgs: any) => {
                    return Array(namedArgs.times ?? 5)
                        .fill(unnamedArgs.toString())
                        .join(' ');
                },
                aliases: ["example-hack-command"],
                returns: 'the repeated text',
                namedArgumentList: [
                    SlashCommandNamedArgument.fromProps({
                        name: "times",
                        description: "number of times to repeat the text",
                        typeLisst: ARGUMENT_TYPE.NUMBER,
                        defaultValue: '5',
                    }),
                ],
                unnamedArgumentList: [
                    SlashCommandArgument.fromProps({
                        description: "the text to repeat",
                        typeList: ARGUMENT_TYPE.STRING,
                        isRequired: true,
                    }),
                ],
                helpSString: `
                    <div>
                        Repeats the provided text a number of times.
                    </div>
                    <div>
                        <strong>Example:</strong>
                        <ul>
                            <li>
                                <pre><code class="language-stscript">/repeat foo</code></pre>
                                returns "foofoofoofoofoo"
                            </li>
                            <li>
                                <pre><code class="language-stscript">/repeat times=3 space=on bar</code></pre>
                                returns "bar bar bar"
                            </li>
                        </ul>
                    </div>
                `
            }
        )
    );
}

function attachReactElement() {
    // Choose the root container for the extension's main UI
    const rootElement = document.getElementById("extensions_settings");
    if(rootElement) {
        const root = createRoot(rootElement);

        root.render(
            <StrictMode>
                <Profile />
            </StrictMode>
        );    
    }
}

function main() {
    console.log("[Hacks] Initialize");
    removeExtrasFromExtensionsBlock();
    SillyTavern.buildPrompt = buildPrompt;
    createSlashCommands();
    attachReactElement();
}

main();
