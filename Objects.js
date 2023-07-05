/*
* In JavaScript, objects are king. If you understand objects, you understand JavaScript.
In JavaScript, almost "everything" is an object.

"
A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.
JavaScript is an object-based language. Everything is an object in JavaScript.
JavaScript is template based not class based. 
Here in Javascript, we don't create class to get the object. But, we directly create objects.
"

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

* All JavaScript values, except primitives, are objects.
A primitive value is a value that has no properties or methods.

Immutable-
Primitive 'values' are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
*/

/*
OBJECTS in JAVASCRIPT-
Objects are variables too. But objects can contain many values.
Object values are written as name : value pairs (name and value separated by a colon).

* A JavaScript object is a collection of named values.

const human = {
    name: "Harshit",
    age: 20,
    isMarried: false
};
console.log(human);

// It is a common practice to declare objects with the const keyword.
// Named values is known as Properties in Javascript;
    Properties  |    Values
    ------------|------------
    name        |    Harshit
    age         |    20
    isMarried   |    false

* Objects written as name value pairs are similar to HashMaps in Java(Key,Value);
*/

/*
There are 3 ways to create objects-
1. By object literal
2. By creating instance of Object directly (using new keyword)
3. By using an object constructor (using new keyword)
*/
/*
1. Object Literal-
object={property1:value1,property2:value2.....propertyN:valueN}
const human = {
    name: "Harshit",
    age: 20,
    isMarried: false
};
console.log(human);
console.log(human.name);    // Harshit
console.log(human.age)      // 20
console.log(human.isMarried);    // false
*/

/* 2. Creating Instance of Object-
* Syntax - var objectname=new Object();  

var emp = new Object();  
emp.id = 101;  
emp.name = "Harshit Raj";  
emp.salary = 150000;
console.log(emp);
console.log(emp.id);    // 101
console.log(emp.name);    // Harshit Raj
console.log(emp.salary)      // 150000
*/

/* 3. Using Object Constructor-
*/
function emp(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

obj1 = new emp(101,"Harshit",150000);
console.log(obj1);      // emp { id: 101, name: 'Harshit', salary: 150000 }
// console.log(obj1.id);    // 101
// console.log(obj1.name);   // Harshit
// console.log(obj1.salary);   // 150000

// JSON.stringify, JSON.parse
// Convert Object to string-  
var convertedToStringFromObject = JSON.stringify(obj1);
console.log(convertedToStringFromObject);   // "id":101,"name":"Harshit","salary":150000

var convertedToObjectFromString = JSON.parse(convertedToStringFromObject);
console.log(convertedToObjectFromString);    // Prints object;