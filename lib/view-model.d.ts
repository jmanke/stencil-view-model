export default class ViewModel<T> {
    __isDirty: boolean;
    private __eventEmitter;
    constructor();
    __toModel(): T;
    __onChange(propertyKey: keyof T, callbackFn: (newValue?: any, oldValue?: any) => any): void;
    __removeOnChange(propertyKey: keyof T, callbackFn: (newValue?: any, oldValue?: any) => any): void;
    __emitChange(propertyKey: keyof T, a1?: any, a2?: any, a3?: any): void;
}
