import { EventEmitter } from "@didyoumeantoast/dash-utils";
export default class ViewModel {
    constructor() {
        // set to true by @tracked properties when a set occurs
        this.__isDirty = false;
        this.__eventEmitter = new EventEmitter();
        this.__isDirty = false;
    }
    __toModel() {
        return {};
    }
    __onChange(propertyKey, callbackFn) {
        this.__eventEmitter.on(propertyKey, callbackFn);
    }
    __removeOnChange(propertyKey, callbackFn) {
        this.__eventEmitter.removeListener(propertyKey, callbackFn);
    }
    __emitChange(propertyKey, a1, a2, a3) {
        this.__eventEmitter.emit(propertyKey, a1, a2, a3);
    }
}
