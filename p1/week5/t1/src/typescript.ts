let http = require("http");

interface IBook{
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

function bookInfo(b: IBook){
    return "Title: " + b.title + "\nauthoer: " + b.author  + "\npublished: " + b.published + "\nPages " + b.pages
}

//Calling BookInfo with out creating the ibook
let book={title:"Bob Bygger", author: "toto wulff", published: new Date("2020-09-20"), pages:800}
console.log(bookInfo(book))
//Creating and book 
let b1 : IBook = {title: "herro", author: "grrm", published: new Date("2020-09-20"), pages:1000}

console.log(bookInfo(b1))



//Duck typing, not using the object like in bookInfo
function ducking(title : string, author : string, published: Date, pages : number){
}

function bookInfoOP(title: string, author : string,published?: Date, pages?: number):IBook{
    return published ? pages ? {title, author, published, pages} : {title, author, published} : {title, author} 
}
//
//console.log(bookInfoOP(book.title, book.author, new Date("2020-09-09")))
//calling only with title and author
//console.log(bookInfoOP(book.title, book.author))


//Clas implements IBook Interface
class Book implements IBook{
    #title : string;
    #author: string;
    #published: Date;
    #pages:number;
    constructor( title:string, author:string, published:Date, pages:number ){
        this.#title= title
        this.#author = author
        this.#published = published
        this.#pages = pages
    }
    get title(): string {
        return this.#title}
    set title(title : string) {
        this.#title = title
    }
    get author(): string {
        return this.#author}
    set author(author : string) {
        this.#author = author
    }
    get published(): Date {
        return this.#published}
    set published(published : Date) {
        this.#published = published
    }
    get pages(): number {
        return this.#pages}
    set pages(pages : number) {
        this.#pages= pages
    }
    toString() {
        console.log("BookInfo: " +  this.#title +": "+ this.#author, " : " + this.#published + "n\ : " + this.#pages);
       }
}

//a) Create an interface to describe a function: myFunc that should take three string parameters and return a String Array.

interface myFunc {
    (first : string,
    second: string,
    thrid: string): string[]
    
}
//b) Design a function "implementing" this interface which returns an array with the three strings
let strignFunction : myFunc;

strignFunction = function(first, second, thrid) {
    let list: string[] = [first, second, thrid]
    return list
}
//c) Design another implementation that returns an array, with the three strings uppercased

let strignFunctionUppercased : myFunc;

strignFunctionUppercased = function(first, second, thrid) {
    let list: string[] = [first.toUpperCase(), second.toUpperCase(), thrid.toUpperCase()]
    return list
}
//console.log(strignFunctionUppercased("Hello", "hi", "Heeey"))

//d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, 
// to simulate a method that uses the interface.

let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

//  e) Test f2 with the two implementations created in b+c.
f2(strignFunctionUppercased)
f2(strignFunction)

//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface

let failFunction = (test:string)=>{
    console.log(test)   
}
//f2(failFunction)
