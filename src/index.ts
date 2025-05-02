declare var SillyTavern: any;

export const globalContext = SillyTavern.getContext();

function test() {
    console.log("[Hacks] Hello, World!");
    const ctx = SillyTavern.getContext();
    console.log(`[Hacks] ${ctx.accountStorage}`);
}

test();