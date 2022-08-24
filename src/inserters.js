const {protectShadows} = require('./shadow');
const resetOnloadAttributes = require('./attributes');
const {securely} = require('./securely');
const {getFramesArray, shadows} = require('./utils');
const {slice} = require('./natives');
const handleHTML = require('./html');
const hook = require('./hook');

const map = {
    DocumentFragment: ['replaceChildren', 'append', 'prepend'],
    Document: ['replaceChildren', 'append', 'prepend', 'write', 'writeln'],
    Node: ['appendChild', 'insertBefore', 'replaceChild'],
    Element: ['innerHTML', 'outerHTML', 'insertAdjacentHTML', 'replaceWith', 'insertAdjacentElement', 'append', 'before', 'prepend', 'after', 'replaceChildren'],
    ShadowRoot: ['innerHTML'],
};

function getHook(win, native, cb) {
    return function() {
        const args = slice(arguments);
        const element = securely(() => this.parentElementS || this);
        resetOnloadAttributes(win, args, cb);
        resetOnloadAttributes(win, shadows, cb);
        handleHTML(win, args);
        handleHTML(win, shadows);
        const ret = securely(() => FunctionS.prototype.apply).call(native, this, args);
        const frames = getFramesArray(element, false);
        hook(win, frames, cb);
        hook(win, args, cb);
        protectShadows(win, cb, true);
        return ret;
    };
}

function hookDOMInserters(win, cb) {
    for (const proto in map) {
        const funcs = map[proto];
        for (let i = 0; i < funcs.length; i++) {
            const func = funcs[i];
            securely(() => {
                const desc = ObjectS.getOwnPropertyDescriptor(win[proto].prototype, func);
                const prop = desc.set ? 'set' : 'value';
                desc[prop] = getHook(win, desc[prop], cb);
                ObjectS.defineProperty(win[proto].prototype, func, desc);
            });
        }
    }
}

module.exports = hookDOMInserters;