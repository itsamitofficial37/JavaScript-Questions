// what will it give 
const map = new Map();
map.set({},1);
console.log(map.get({}));


// it will give undefined because both objects are different 

const map1 = new Map();
let keyObject = { name: "John", age: 30 };
map1.set(keyObject, "Value associated with an object key");


console.log(map1.get(keyObject));