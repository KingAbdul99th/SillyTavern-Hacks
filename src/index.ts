declare var SillyTavern: any;

export const globalContext = SillyTavern.getContext();

function main() {
    console.log("[Hacks] Initialize");

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
            }));
}

main();