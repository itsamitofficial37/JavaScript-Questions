//  object.seal();
"use strict"

let obj = new Object();
obj.firstName = "Amit";
obj.lastName = "Singh";
obj.age = 23;
console.log("before seal of object ", obj);
// seal the object 

Object.seal(obj);

// i want to add properties
obj.key1 = "value1";

// i want to delete some properties
delete obj.firstName;


// update something 
obj.lastName = "Kumar"

console.log(obj)

