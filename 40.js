//  higher order function

function multiplier(factor){
    return function(number){
        return number * factor
    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); 
console.log(triple(3));