/**
 * Expose the libraries to the 'window' object.
 * Needed for compatibility with old extensions.
 * Note: New extensions are encouraged to import the libraries directly from lib.js.
 */
export function initLibraryShims(): void;
declare namespace _default {
    export { lodash };
    export { Fuse };
    export { DOMPurify };
    export { hljs };
    export { localforage };
    export { Handlebars };
    export { css };
    export { Bowser };
    export { DiffMatchPatch };
    export { Readability };
    export { isProbablyReaderable };
    export { SVGInject };
    export { showdown };
    export { moment };
    export { seedrandom };
    export { Popper };
    export { droll };
    export { morphdom };
    export { slideToggle };
    export { chalk };
}
export default _default;
import Fuse from 'fuse.js';
import hljs from 'highlight.js';
import css from '@adobe/css-tools';
import { Readability } from '@mozilla/readability';
import { isProbablyReaderable } from '@mozilla/readability';
import * as Popper from '@popperjs/core';
import { toggle as slideToggle } from 'slidetoggle';
import chalk from 'chalk';
export { lodash, Fuse, DOMPurify, hljs, localforage, Handlebars, css, Bowser, DiffMatchPatch, Readability, isProbablyReaderable, SVGInject, showdown, moment, seedrandom, Popper, droll, morphdom, slideToggle, chalk };
//# sourceMappingURL=lib.d.ts.map