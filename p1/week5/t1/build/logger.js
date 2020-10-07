"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
function loggerv1(a, b) {
    console.log(`value1-:${a}, value-2: ${b}`);
}
let n1 = 45;
let s1 = "Hello class";
//loggerv1(n1, s1)
function loggerv2(a, b) {
    console.log(`value1-:${a}, value-2: ${b}`);
}
function loggerv2Return(a, b) {
    return `value1-:${a}, value-2: ${b}`;
}
function loggerV3(a, b) {
    console.log(`Value-1: ${a.name}, Value-2: ${b.street}`);
}
// Duck typing
loggerV3({ name: "Kurt Wonnegut" }, { street: "Lyngbyvej 67" });
//V4
class Address {
    constructor(street) { this._street = street; }
    get street() { return this._street; }
    set street(street) { this._street = street; }
    toString() { return this._street; }
}
class Person {
    constructor(name) {
        //private _name : String;
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    get name() { return __classPrivateFieldGet(this, _name); }
    set name(name) { __classPrivateFieldSet(this, _name, name); }
    toString() { return __classPrivateFieldGet(this, _name); }
}
_name = new WeakMap();
let p1 = new Person("Kurt Wonnegut");
let a1 = new Address("Lyngbyvej 45");
//loggerV3(p1,a1)
//This is to generic
function loggerV4(a, b) {
    console.log(`Value-1: ${a}, Value-2: ${b}`);
}
//loggerV4(p1,a1)
// This is what we will like to "do"
//let numbers:Array<number> =[];
//let names:Array<string>
//let results:Array<boolean>
class GenericLogger {
    constructor() {
        this.log = (a, b) => {
            console.log(`Value-1: ${a}, Value-2: ${b}`);
        };
    }
}
const numberLogger = new GenericLogger();
const personAddressLogger = new GenericLogger();
numberLogger.log(34, 12);
personAddressLogger.log(p1, a1);
//# sourceMappingURL=logger.js.map