// Example with Object.freeze()
let frozenObject = {
    prop1: 42,
    prop2: "Hello"
  };
  
  Object.freeze(frozenObject);
  
  // Attempting to modify properties will result in an error
  frozenObject.prop1 = 100; // Error in strict mode
  
  // Example with Object.seal()
  let sealedObject = {
    prop1: 42,
    prop2: "Hello"
  };
  
  Object.seal(sealedObject);
  
  // Modifying properties is allowed
  sealedObject.prop1 = 100; // OK
  