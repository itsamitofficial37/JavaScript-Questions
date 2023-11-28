console.log(new String("yes") === new String("yes")); // Line 1
console.log("yes" === "yes"); // Line 2

// Line 1 is comparing two objects, seeing that they are each
// unique (literally not the exact same object) and thus is false. Even a ==
// loose check will result in false for Line 1. Line 2 passes because it is
// comparing two string primitives, not string objects.




