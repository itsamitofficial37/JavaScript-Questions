// Use a reducer to find the min value of the below array

const arr = [5, 10, 12, 4, 2 ,8];

const reducedVal = arr.reduce((acc , ele)=> {
    if(acc>ele){
        return ele
    }
    return acc;
})


console.log(reducedVal)