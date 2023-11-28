
// nullish coalescing operator (??) - logical  operator and returns ride hand side operand when left side is null or undefined and vice-versa 

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0