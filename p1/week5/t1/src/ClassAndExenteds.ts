/*
A) The declaration below defines a Shape class, 
which as it's only properties has a color field +  
a getArea() and a getPerimeter() function which both returns undefined. 
This is the closest we get to an abstract method in Java.
*/


// Klassen er abstract og du kan derfor ikke lave en instance af denne klasse
// Man kan ikke instantierer en abstrakt klasse fordi den er abstrakt.
abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;
  
    toString(): string{
        return `Shape's color: ${this.color}, Area: ${this.area}, Perimeter: ${this.perimeter}` 
    }

    get color(): string {
        return this._color}
    set color(color : string) {
        this._color= color
    } 
  }
/*
B) Create a new class Circle that should extend the Shape class.
Provide the class with:
A radius field
A constructor that takes both colour and radius.
Overwritten versions of the methods defined in the Base
Getter/Setter for radius
*/ 
  class Circle extends Shape{  
    _radius: number;
   
      constructor(color:string, radius: number ){
          super(color)
          this._radius = radius
      }

    get radius(): number {return this._radius;}
    set radius(radius:number) {this._radius = radius;}

    get area(): number {
        return (Math.PI * Math.pow(this._radius,2));
    }
    get perimeter(): number {
        return (2 * Math.PI * this._radius);
    }     
  }
// Test the class constructor, the getters/setters and the three methods.

let c = new Circle( "blue", 2)
console.log(c.toString())

c.radius = 5;  
c.color = "Yellow";
console.log(c.toString());

class Cylinder extends Circle{
     _height : number
     constructor(color:string, radius: number, height:number){
        super(color, radius)
        this._height = height
    }
    
    get height():number{ return this._height;}
    set height(height:number){this._height = height;}

    get area(): number {
        return (2*Math.PI*this._radius*(this._height*this._radius));
    }
    get perimeter(): number {
        throw new Error("Not Implemented");
    }
    get volume():number {
        return (Math.PI * Math.pow(this._radius,2) * this._height);
    }
    toString(): string{
        return `Cylinders color: ${this.color}, Area: ${this.area}, Volume: ${this.volume}, Perimeter: Not implemented!`
    }
}

let cy = new Cylinder("Red", 10, 5)
console.log(cy.area)
console.log(cy.volume)
console.log(cy.toString())