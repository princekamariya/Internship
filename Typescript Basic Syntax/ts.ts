// VARIABLE //

let firstName: string = "Dylan"; 

console.log(typeof firstName);

// TYPEOF //

const json = JSON.parse("55");

console.log(typeof json);

// ANY TYPE //

let v: any = true;

v = "string"; 

console.log(Math.round(v)); 


// Array //

const names: string[] = [];

names.push("Dylan");

// names.push(3); 

console.log(names);


// Tuples //

let ourTuple: [number, boolean, string];

ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);


// Object //

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
  
console.log(car);


// ENUM //

enum CardinalDirections {
    North,
    East,
    South,
    West
};
              
let currentDirection = CardinalDirections.North;
  
  
console.log(currentDirection);


// INTERFACE //

interface Rectangle {
    height: number,
    width: number
};
  
const rectangle: Rectangle = {
    height: 20,
    width: 10
};
  
console.log(rectangle);


// FUNCTION //

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
  
printStatusCode(404);
printStatusCode('404');


// CLASS //

class Person {
    name: string;
}
        
const person = new Person();
person.name = "Jane";
  
console.log(person);
