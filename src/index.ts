declare var SillyTavern: any;

export const globalContext = SillyTavern.getContext();

function test() {
    console.log("Hello, World!");
    const ctx = SillyTavern.getContext();
    console.log(ctx.accountStorage);
}

test();