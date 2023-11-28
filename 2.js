let x = 10;
const byValue = (y) => {
y = 20;
}
byValue(x);
console.log(x);

// when primitives are passed to a function
// only their value is passed, not the reference to the memory location.
// Therefore, changes to the parameter only affect the parameter in the
// function’s scope.
// 

// answer is 10