const {securely} = require('./securely');

function nodeType(node) {
    return natives.nodeType.call(node);
}

function toString(object) {
    return natives.toString.call(object);
}

function getOnload(element) {
    return natives.getOnload.call(element);
}

function setOnload(element, onload) {
    return natives.setOnload.call(element, onload);
}

function removeAttribute(element, attribute) {
    return natives.removeAttribute.call(element, attribute);
}

function getAttribute(element) {
    return natives.getAttribute.call(element);
}

function addEventListener(element, event, listener, options) {
    return natives.addEventListener.call(element, event, listener, options);
}

const natives = securely(() => ({
    nodeType: Object.getOwnPropertyDescriptor(NodeS.prototype, 'nodeType').get,
    toString: Object.getOwnPropertyDescriptor(ObjectS.prototype, 'toString').value,
    getOnload: Object.getOwnPropertyDescriptor(HTMLElementS.prototype, 'onload').get,
    setOnload: Object.getOwnPropertyDescriptor(HTMLElementS.prototype, 'onload').set,
    getAttribute: Object.getOwnPropertyDescriptor(ElementS.prototype, 'getAttribute').value,
    removeAttribute: Object.getOwnPropertyDescriptor(ElementS.prototype, 'removeAttribute').value,
    addEventListener: Object.getOwnPropertyDescriptor(EventTargetS.prototype, 'addEventListener').value,
}));

module.exports = {
    nodeType, toString,
    getOnload, setOnload,
    removeAttribute, getAttribute,
    addEventListener,
}