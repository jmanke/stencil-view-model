import { EventEmitter } from "@didyoumeantoast/dash-utils";

export default class ViewModel<T> {
  // set to true by @tracked properties when a set occurs
  __isDirty = false;

  private __eventEmitter = new EventEmitter();

  constructor() {
    this.__isDirty = false;
  }

  __toModel(): T {
    return {} as T;
  }

  __onChange(
    propertyKey: keyof T,
    callbackFn: (newValue?: any, oldValue?: any) => any
  ) {
    this.__eventEmitter.on(propertyKey as string, callbackFn);
  }

  __removeOnChange(
    propertyKey: keyof T,
    callbackFn: (newValue?: any, oldValue?: any) => any
  ) {
    this.__eventEmitter.removeListener(propertyKey as string, callbackFn);
  }

  __emitChange(propertyKey: keyof T, a1?: any, a2?: any, a3?: any) {
    this.__eventEmitter.emit(propertyKey as string, a1, a2, a3);
  }
}
