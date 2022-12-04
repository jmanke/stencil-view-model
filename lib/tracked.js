import { getRenderingRef, forceUpdate } from '@stencil/core';
import { debounce } from 'lodash';
function isConnected(maybeElement) {
    return !('isConnected' in maybeElement) || maybeElement.isConnected;
}
export const tracked = (target, key) => {
    const privateField = Symbol();
    let elemsToUpdate = new Set();
    const cleanupElements = debounce(() => {
        elemsToUpdate = new Set([...elemsToUpdate].filter(isConnected));
    }, 2000);
    // We define getters and setters for the property on the prototype of the class
    // A real application might use this to intercept changes to the decorated property.
    // This is a simplified version of a pattern used by the @microsoft/fast-elements library.
    Reflect.defineProperty(target, key, {
        get: function () {
            const elem = getRenderingRef();
            if (elem) {
                elemsToUpdate.add(elem);
            }
            return this[privateField];
        },
        set: function (newValue) {
            var _a;
            const oldValue = this[privateField];
            // make sure new value is actually new before triggering a re-render
            if (oldValue !== newValue) {
                this.__isDirty = true;
                this[privateField] = newValue;
                (_a = this.__emitChange) === null || _a === void 0 ? void 0 : _a.call(this, key, newValue, oldValue);
                elemsToUpdate.forEach(forceUpdate);
            }
            cleanupElements();
        },
    });
};
