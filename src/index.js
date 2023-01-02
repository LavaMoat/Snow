const hook = require('./hook');
const hookOpen = require('./open');
const hookEventListenersSetters = require('./listeners');
const hookDOMInserters = require('./inserters');
const {hookShadowDOM} = require('./shadow');
const {Object, addEventListener, getFrameElement} = require('./natives');
const {isMarked, mark} = require('./mark');
const {error, ERR_PROVIDED_CB_IS_NOT_A_FUNCTION, ERR_MARK_NEW_WINDOW_FAILED} = require('./log');
const {getContentWindowOfFrame} = require('./utils');

function setTopUtil(prop, val) {
    const desc = Object.create(null);
    desc.value = val;
    Object.defineProperty(top, prop, desc);
}

function shouldRun(win) {
    try {
        const run = !isMarked(win);
        if (run) {
            mark(win);
        }
        return run;
    } catch (err) {
        error(ERR_MARK_NEW_WINDOW_FAILED, win, err);
    }
    return shouldRun(win);
}

function applyHooks(win, hookWin, cb) {
    hookOpen(win, hookWin);
    hookEventListenersSetters(win, 'load', hookWin);
    hookDOMInserters(win, hookWin);
    hookShadowDOM(win, hookWin);
    cb(win);
}

function onWin(cb, win) {
    function hookWin(contentWindow) {
        onWin(cb, contentWindow);
        addEventListener(getFrameElement(contentWindow), 'load', function() {
            hook(win, [this], function() {
                onWin(cb, contentWindow);
            });
        });
    }

    if (shouldRun(win)) {
        applyHooks(win, hookWin, cb);
    }
}

let callback;

module.exports = function snow(cb, win) {
    if (!callback) {
        if (typeof cb !== 'function') {
            const bail = error(ERR_PROVIDED_CB_IS_NOT_A_FUNCTION, cb);
            if (bail) {
                return;
            }
        }
        setTopUtil('SNOW_CB', snow);
        setTopUtil('SNOW_FRAME_TO_WINDOW', getContentWindowOfFrame);
        callback = cb;
    }
    onWin(callback, win || top);
}
