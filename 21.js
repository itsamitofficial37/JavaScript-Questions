//  Map object 

const map = new Map();
map.set("a",1)
map.set("b",2)
map.set("c",3)
console.log(map);
// for of loop 
for(let key of map){
    console.log(key)
}

console.log(map.get("a"));  // expected output should be 1 

// change the value of key 

map.set("a", 1997)

console.log(map.get("a"));

// we can know its size also 

console.log(map.size)

console.log(map.delete("b"))



