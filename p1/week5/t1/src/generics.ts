/*
Generics        

a) Implement a generic function which will take an array of any kind, 
and return the array reversed (just use the built-in reverse function), 
so the three first calls below will print the reversed array, and the last call will fail.
*/

function ​reverseArr<T>​(arg: any[]): any[] {
    return arg.reverse();
}
console​.​log​(​reverseArr​<​string​>([​"a"​,​"b"​,​"c"​]));
console​.​log​(​reverseArr​<​number​>([​1​,​2​,​3​]));
console​.​log​(​reverseArr​<​boolean​>([​true​,​true​,​false​]));
console​.​log​(​reverseArr​<​number​>([​"a"​,​"b"​,​"c"​]));


//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder<T>{
    private _data: T;
    constructor(data:T){
        this._data = data;
    }
    get data(): T{ return this._data;}
    set data(data: T) {this._data = data;}
}
//Verify that once created, an instance can only be used with the type it was created from.
//c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods

    let d1 = new DataHolder<number>(20);
    console.log(d1.data);
    d1.data = 50;
    console.log(d1.data);

    let d2 = new DataHolder<string>("WhatsApp");
    console.log(d2.data);   
    d2.data = "MobilePay";
    //d2 holder en String, og derfor kan set d2 ikke kaldes med et number
    //d2.data = 98865412;
    console.log(d2.data);
    