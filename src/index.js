const {secure, securely} = require('./securely');
const hook = require('./hook');
const hookOpen = require('./open');
const hookLoadSetters = require('./listeners');
const hookDOMInserters = require('./inserters');
const {hookShadowDOM} = require('./shadow');
const {addEventListener, getFrameElement, Object, Map, Array} = require('./natives');

const key = (Math.random() + 1).toString(36).substring(7);
const wins = new Map();

function isNewWin(win) {
    try {
        if (wins.has(win)) {
            const secret = wins.get(win);
            const desc = Object.getOwnPropertyDescriptor(win, 'SNOW_ID');
            if (typeof desc?.value === 'function') {
                const answer = desc.value(key);
                if (answer === secret) {
                    return false;
                }
            }
        }
        const secret = new Array();
        Object.defineProperty(win, 'SNOW_ID', {
            configurable: false, writable: false,
            value: (k) => k === key && secret,
        });
        wins.set(win, secret);
    } catch (err) {}
    return true;
}

let callback;

function onWin(cb, win) {
    function hookWin(contentWindow) {
        onWin(cb, contentWindow);
        addEventListener(getFrameElement(contentWindow), 'load', function() {
            hook(win, [this], function() {
                onWin(cb, contentWindow);
            });
        });
    }

    function shouldRun(win, cb) {
        callback = callback || cb;
        if (callback !== cb) {
            return false;
        }
        return isNewWin(win);
    }

    function applyHooks(win, securely, cb) {
        hookOpen(win, hookWin);
        hookLoadSetters(win, hookWin);
        hookDOMInserters(win, hookWin);
        hookShadowDOM(win, hookWin);
        cb(win, securely);
    }

    if (!shouldRun(win, cb)) {
        return;
    }

    applyHooks(win, win === top ? securely : secure(win), cb);
}

module.exports = function(cb, win = window) {
    onWin(cb, win);
}
