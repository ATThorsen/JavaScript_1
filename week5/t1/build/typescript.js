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
var _title, _author, _published, _pages;
let http = require("http");
function bookInfo(b) {
    return "Title: " + b.title + "\nauthoer: " + b.author + "\npublished: " + b.published + "\nPages " + b.pages;
}
//Calling BookInfo with out creating the ibook
let book = { title: "Bob Bygger", author: "toto wulff", published: new Date("2020-09-20"), pages: 800 };
console.log(bookInfo(book));
//Creating and book 
let b1 = { title: "herro", author: "grrm", published: new Date("2020-09-20"), pages: 1000 };
console.log(bookInfo(b1));
//Duck typing, not using the object like in bookInfo
function ducking(title, author, published, pages) {
}
function bookInfoOP(title, author, published, pages) {
    return published ? pages ? { title, author, published, pages } : { title, author, published } : { title, author };
}
//
//console.log(bookInfoOP(book.title, book.author, new Date("2020-09-09")))
//calling only with title and author
//console.log(bookInfoOP(book.title, book.author))
//Clas implements IBook Interface
class Book {
    constructor(title, author, published, pages) {
        _title.set(this, void 0);
        _author.set(this, void 0);
        _published.set(this, void 0);
        _pages.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _author, author);
        __classPrivateFieldSet(this, _published, published);
        __classPrivateFieldSet(this, _pages, pages);
    }
    get title() {
        return __classPrivateFieldGet(this, _title);
    }
    set title(title) {
        __classPrivateFieldSet(this, _title, title);
    }
    get author() {
        return __classPrivateFieldGet(this, _author);
    }
    set author(author) {
        __classPrivateFieldSet(this, _author, author);
    }
    get published() {
        return __classPrivateFieldGet(this, _published);
    }
    set published(published) {
        __classPrivateFieldSet(this, _published, published);
    }
    get pages() {
        return __classPrivateFieldGet(this, _pages);
    }
    set pages(pages) {
        __classPrivateFieldSet(this, _pages, pages);
    }
    toString() {
        console.log("BookInfo: " + __classPrivateFieldGet(this, _title) + ": " + __classPrivateFieldGet(this, _author), " : " + __classPrivateFieldGet(this, _published) + "n\ : " + __classPrivateFieldGet(this, _pages));
    }
}
_title = new WeakMap(), _author = new WeakMap(), _published = new WeakMap(), _pages = new WeakMap();
//b) Design a function "implementing" this interface which returns an array with the three strings
let strignFunction;
strignFunction = function (first, second, thrid) {
    let list = [first, second, thrid];
    return list;
};
//c) Design another implementation that returns an array, with the three strings uppercased
let strignFunctionUppercased;
strignFunctionUppercased = function (first, second, thrid) {
    let list = [first.toUpperCase(), second.toUpperCase(), thrid.toUpperCase()];
    return list;
};
//console.log(strignFunctionUppercased("Hello", "hi", "Heeey"))
//d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, 
// to simulate a method that uses the interface.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};
//  e) Test f2 with the two implementations created in b+c.
f2(strignFunctionUppercased);
f2(strignFunction);
//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
let failFunction = (test) => {
    console.log(test);
};
//f2(failFunction)
//# sourceMappingURL=typescript.js.map