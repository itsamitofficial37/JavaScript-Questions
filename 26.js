//  we will create a child object from parent object  without using class

// function Dog(name){
//     this.name = name;
// }
// parent object 

// const buddy = new Dog("Tommy");
// console.log(typeof buddy);

// child object 

// const childObj = Object.create(buddy);
// console.log(typeof childObj)

class Dog {
    constructor(name){
        this.name = name
    }
}
const parentobj = new Dog("Tommy");
const childObj1 = Object.create(parentobj);
console.log(typeof childObj1);
